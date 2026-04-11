import { promises as fs } from "fs";
import path from "path";
import { BLOG_POSTS, type BlogPost } from "@/data/blogPosts";

const RUNTIME_FILE = path.join(process.cwd(), "data", "blogPosts.runtime.json");

async function ensureRuntimeFile() {
  const dir = path.dirname(RUNTIME_FILE);
  await fs.mkdir(dir, { recursive: true });
  try {
    await fs.access(RUNTIME_FILE);
  } catch {
    await fs.writeFile(RUNTIME_FILE, "[]", "utf8");
  }
}

async function readRuntimePosts(): Promise<BlogPost[]> {
  await ensureRuntimeFile();
  const raw = await fs.readFile(RUNTIME_FILE, "utf8");
  try {
    const parsed = JSON.parse(raw) as BlogPost[];
    if (!Array.isArray(parsed)) return [];
    return parsed;
  } catch {
    return [];
  }
}

async function writeRuntimePosts(posts: BlogPost[]) {
  await ensureRuntimeFile();
  await fs.writeFile(RUNTIME_FILE, JSON.stringify(posts, null, 2), "utf8");
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  const runtime = await readRuntimePosts();
  const merged = [...runtime, ...BLOG_POSTS];
  const unique = new Map<string, BlogPost>();
  for (const post of merged) {
    if (!unique.has(post.slug)) unique.set(post.slug, post);
  }
  return Array.from(unique.values());
}

export async function addRuntimeBlogPost(post: BlogPost): Promise<{ ok: true } | { ok: false; error: string }> {
  const all = await getBlogPosts();
  if (all.some((p) => p.slug === post.slug)) {
    return { ok: false, error: "Slug already exists." };
  }

  const runtime = await readRuntimePosts();
  runtime.unshift(post);
  await writeRuntimePosts(runtime);
  return { ok: true };
}

