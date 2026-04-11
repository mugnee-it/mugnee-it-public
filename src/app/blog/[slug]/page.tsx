import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, CalendarDays, Clock3 } from "lucide-react";
import { notFound } from "next/navigation";
import { BLOG_POSTS, type BlogPost } from "@/data/blogPosts";
import { getBlogPosts } from "@/lib/blogStore";

const SITE_URL = "https://mugneeit.com";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const posts = await getBlogPosts();
  const post = posts.find((p) => p.slug === slug);
  if (!post) return {};

  const pageUrl = `${SITE_URL}/blog/${post.slug}/`;
  return {
    metadataBase: new URL(SITE_URL),
    title: `${post.title} Blog`,
    description: post.excerpt,
    alternates: { canonical: pageUrl },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: pageUrl,
      siteName: "Mugnee IT Solutions",
      type: "article",
    },
    robots: { index: true, follow: true },
  };
}

function buildArticleModel(post: BlogPost) {
  const intro = (post.introduction || []).map((p) => p.trim()).filter(Boolean);
  const manualSections = (post.sections || [])
    .map((s) => ({
      heading: String(s.heading || "").trim(),
      paragraphs: (s.paragraphs || []).map((p) => p.trim()).filter(Boolean),
    }))
    .filter((s) => s.heading && s.paragraphs.length > 0);

  const fallbackBody = post.content.map((p) => p.trim()).filter(Boolean);
  const autoSections =
    fallbackBody.length <= 3
      ? [{ heading: "Main Discussion", paragraphs: fallbackBody }]
      : [
          {
            heading: "Core Strategy",
            paragraphs: fallbackBody.slice(0, Math.ceil(fallbackBody.length / 2)),
          },
          {
            heading: "Execution Steps",
            paragraphs: fallbackBody.slice(Math.ceil(fallbackBody.length / 2)),
          },
        ];

  const sections = manualSections.length > 0 ? manualSections : autoSections;

  const introduction =
    intro.length > 0
      ? intro
      : [
          post.excerpt,
          `This guide breaks down ${post.keyword || "the core workflow"} into practical steps you can apply immediately.`,
        ];

  const conclusion =
    (post.conclusion || []).map((p) => p.trim()).filter(Boolean).length > 0
      ? (post.conclusion || []).map((p) => p.trim()).filter(Boolean)
      : [
          "The best results come from consistency: clear structure, practical execution, and regular optimization.",
          "Use this framework as a repeatable process so each new page or campaign gets easier to scale.",
        ];

  const faqs =
    (post.faqs || []).map((f) => ({ q: f.q.trim(), a: f.a.trim() })).filter((f) => f.q && f.a).length > 0
      ? (post.faqs || []).map((f) => ({ q: f.q.trim(), a: f.a.trim() })).filter((f) => f.q && f.a)
      : [
          {
            q: `How do I get started with ${post.category}?`,
            a: "Start with one clear goal, define scope, then execute in weekly milestones with measurable checkpoints.",
          },
          {
            q: "How often should this process be reviewed?",
            a: "Review performance every 2-4 weeks and update your structure/content based on actual results.",
          },
        ];

  return { introduction, sections, conclusion, faqs };
}

export default async function BlogPostPage({ params }: Props) {
  const toCanonicalPath = (href: string) => (href.endsWith("/") ? href : `${href}/`);
  const { slug } = await params;
  const posts = await getBlogPosts();
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();
  const article = buildArticleModel(post);
  const relatedPosts = posts.filter((p) => p.slug !== post.slug)
    .filter((p) => p.category === post.category || p.serviceHref === post.serviceHref)
    .slice(0, 3);

  return (
    <main className="bg-white">
      <article className="mx-auto max-w-4xl px-4 pt-16 pb-16">
        <nav className="text-xs font-bold text-slate-500">
          <Link prefetch={false} href="/" className="hover:text-slate-900">Home</Link>
          <span className="mx-2">/</span>
          <Link prefetch={false} href="/blog" className="hover:text-slate-900">Blog</Link>
          <span className="mx-2">/</span>
          <span className="text-slate-900">{post.title}</span>
        </nav>

        <div className="mt-8">
          <div className="inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs font-extrabold text-slate-700">
            {post.category}
          </div>
          <h1 className="mt-4 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl">
            {post.title}
          </h1>
          <p className="mt-4 text-base leading-7 text-slate-600">{post.excerpt}</p>

          <div className="mt-5 flex flex-wrap items-center gap-4 text-xs font-bold text-slate-500">
            <span className="inline-flex items-center gap-1.5">
              <CalendarDays className="h-4 w-4" /> {post.date}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock3 className="h-4 w-4" /> {post.readTime}
            </span>
            {post.author ? <span>Author: {post.author}</span> : null}
          </div>
        </div>

        <section className="mt-10">
          <h2 className="text-xl font-extrabold text-slate-900">Introduction</h2>
          <div className="mt-4 space-y-5 text-[15px] leading-8 text-slate-700">
            {article.introduction.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </section>

        {article.sections.map((section) => (
          <section key={section.heading} className="mt-10">
            <h2 className="text-xl font-extrabold text-slate-900">{section.heading}</h2>
            <div className="mt-4 space-y-5 text-[15px] leading-8 text-slate-700">
              {section.paragraphs.map((p) => (
                <p key={`${section.heading}-${p}`}>{p}</p>
              ))}
            </div>
          </section>
        ))}

        <section className="mt-10 rounded-3xl border border-slate-200 bg-slate-50 p-6">
          <h2 className="text-lg font-extrabold text-slate-900">Key takeaways</h2>
          <ul className="mt-4 space-y-2">
            {post.bullets.map((b) => (
              <li key={b} className="text-sm font-semibold text-slate-700">
                • {b}
              </li>
            ))}
          </ul>
          {post.serviceHref ? (
            <div className="mt-6">
              <Link prefetch={false}
                href={toCanonicalPath(post.serviceHref)}
                className="inline-flex items-center gap-2 rounded-2xl bg-yellow-400 px-5 py-3 text-sm font-extrabold text-slate-900 hover:bg-yellow-500"
              >
                Explore related service
              </Link>
            </div>
          ) : null}
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-extrabold text-slate-900">Conclusion</h2>
          <div className="mt-4 space-y-5 text-[15px] leading-8 text-slate-700">
            {article.conclusion.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-extrabold text-slate-900">Frequently Asked Questions</h2>
          <div className="mt-4 space-y-3">
            {article.faqs.map((f) => (
              <details key={f.q} className="rounded-2xl border border-slate-200 bg-white p-4">
                <summary className="cursor-pointer text-sm font-extrabold text-slate-900">
                  {f.q}
                </summary>
                <p className="mt-3 text-sm leading-7 text-slate-700">{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        {relatedPosts.length > 0 ? (
          <section className="mt-10">
            <h2 className="text-xl font-extrabold text-slate-900">Related articles</h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {relatedPosts.map((rp) => (
                <Link prefetch={false}
                  key={rp.slug}
                  href={`/blog/${rp.slug}/`}
                  className="rounded-2xl border border-slate-200 bg-white p-4 text-sm font-semibold text-slate-700 hover:bg-slate-50"
                >
                  {rp.title}
                </Link>
              ))}
            </div>
          </section>
        ) : null}

        <div className="mt-10">
          <Link prefetch={false} href="/blog" className="inline-flex items-center gap-2 text-sm font-extrabold text-slate-900">
            <ArrowLeft className="h-4 w-4" />
            Back to blog
          </Link>
        </div>
      </article>
    </main>
  );
}



