import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CalendarDays, Clock3 } from "lucide-react";
import { getBlogPosts } from "@/lib/blogStore";

const SITE_URL = "https://mugneeit.com";
const PAGE_PATH = "/blog";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}/`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Blog",
  description:
    "Read practical guides from Mugnee IT Solutions on web development, SEO, web scraping, and business growth.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Blog",
    description:
      "Insights, tutorials, and practical tips on web development, SEO, and digital growth.",
    url: PAGE_URL,
    siteName: "Mugnee IT Solutions",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default async function BlogPage() {
  const showAdminLink = process.env.NODE_ENV !== "production";
  const posts = await getBlogPosts();
  const toCanonicalPath = (href: string) => (href.endsWith("/") ? href : `${href}/`);
  return (
    <main className="bg-white">
      <section className="mx-auto max-w-6xl px-4 pt-16 pb-16">
        <nav className="text-xs font-bold text-slate-500">
          <Link prefetch={false} href="/" className="hover:text-slate-900">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-slate-900">Blog</span>
        </nav>

        <div className="mt-8 max-w-3xl">
          <p className="text-xs font-extrabold tracking-[0.2em] text-blue-600">BLOG</p>
          <h1 className="mt-3 text-4xl font-extrabold text-slate-900 sm:text-5xl">
            Insights for growth-focused businesses
          </h1>
          <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
            Practical articles on web development, SEO, web scraping, and systems
            that help businesses grow with clear strategy.
          </p>
          {showAdminLink ? (
            <div className="mt-5">
              <Link prefetch={false}
                href="/blog/admin"
                className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-2 text-sm font-extrabold text-slate-900 hover:bg-slate-50"
              >
                Open Blog Dashboard <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          ) : null}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.title}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs font-extrabold text-slate-700">
                {post.category}
              </div>
              <h2 className="mt-4 text-xl font-extrabold text-slate-900">
                {post.title}
              </h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">{post.excerpt}</p>
              {post.keyword ? (
                <div className="mt-3 inline-flex rounded-full bg-yellow-50 px-3 py-1 text-[11px] font-extrabold text-yellow-700">
                  {post.keyword}
                </div>
              ) : null}
              <div className="mt-5 flex flex-wrap items-center gap-4 text-xs font-bold text-slate-500">
                <span className="inline-flex items-center gap-1.5">
                  <CalendarDays className="h-4 w-4" /> {post.date}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Clock3 className="h-4 w-4" /> {post.readTime}
                </span>
              </div>
              <div className="mt-6 flex flex-wrap items-center gap-2.5">
                <Link prefetch={false}
                  href={`/blog/${post.slug}/`}
                  className="group inline-flex items-center gap-2 rounded-xl bg-slate-900 px-4 py-2 text-sm font-extrabold text-white transition hover:bg-slate-800"
                >
                  Read article
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                </Link>
                {post.serviceHref ? (
                  <Link prefetch={false}
                    href={toCanonicalPath(post.serviceHref)}
                    className="group inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-extrabold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50 hover:text-slate-900"
                  >
                    Related service
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                  </Link>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-14 text-center">
          <h3 className="text-2xl font-extrabold text-slate-900">
            Need help with your project now?
          </h3>
          <p className="mt-2 text-sm text-slate-600">
            Talk to our team and get a clear execution plan for your website, SEO, or automation goals.
          </p>
          <Link prefetch={false}
            href="/schedule-consultation"
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-yellow-400 px-6 py-3 text-sm font-extrabold text-slate-900 hover:bg-yellow-500"
          >
            {"Let's Talk"} <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}

