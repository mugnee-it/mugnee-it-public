import { NextResponse } from "next/server";
import { BLOG_POSTS } from "@/data/blogPosts";

export const dynamic = "force-static";

export async function GET() {
  return NextResponse.json({ ok: true, count: BLOG_POSTS.length, posts: BLOG_POSTS });
}
