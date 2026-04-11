import fs from "node:fs/promises";
import path from "node:path";
import type { MetadataRoute } from "next";
import { BLOG_POSTS } from "@/data/blogPosts";
import { projects } from "@/data/projects";

export const dynamic = "force-static";

const SITE_URL =
  (process.env.NEXT_PUBLIC_SITE_URL || "https://mugneeit.com").replace(/\/$/, "");

function normalizeRoute(route: string) {
  if (!route || route === "/") return "/";
  return route.endsWith("/") ? route : `${route}/`;
}

async function walkForPageRoutes(rootDir: string): Promise<string[]> {
  const found = new Set<string>();

  async function walk(dir: string) {
    const entries = await fs.readdir(dir, { withFileTypes: true });
    for (const entry of entries) {
      const full = path.join(dir, entry.name);

      if (entry.isDirectory()) {
        if (entry.name === "api" || entry.name.startsWith("_")) continue;
        await walk(full);
        continue;
      }

      if (entry.name !== "page.tsx") continue;

      const rel = path.relative(rootDir, full).replace(/\\/g, "/");
      const routeDir = rel.replace(/\/page\.tsx$/, "");

      // Skip dynamic segments and root placeholder.
      if (routeDir.includes("[")) continue;

      const route = routeDir === "page.tsx" || routeDir === "" ? "/" : `/${routeDir}`;
      found.add(normalizeRoute(route));
    }
  }

  await walk(rootDir);
  return Array.from(found);
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const appDir = path.join(process.cwd(), "src", "app");
  const staticRoutes = await walkForPageRoutes(appDir);

  const dynamicRoutes = [
    ...BLOG_POSTS.map((post) => `/blog/${post.slug}/`),
    ...projects.map((project) => `/projects/${project.slug}/`),
  ];

  const excludedRoutes = new Set<string>(["/blog/admin/"]);

  const allRoutes = Array.from(
    new Set([...staticRoutes, ...dynamicRoutes].map((r) => normalizeRoute(r)))
  )
    .filter((route) => !excludedRoutes.has(route))
    .sort();

  const now = new Date();

  return allRoutes.map((route) => {
    const url = `${SITE_URL}${route === "/" ? "/" : route}`;
    const isHome = route === "/";
    const isService = route.startsWith("/services/");
    const isBlog = route.startsWith("/blog/");
    const isProject = route.startsWith("/projects/");

    return {
      url,
      lastModified: now,
      changeFrequency: isHome ? "weekly" : isService ? "monthly" : isBlog ? "weekly" : "monthly",
      priority: isHome ? 1 : isService ? 0.9 : isProject ? 0.8 : 0.7,
    };
  });
}
