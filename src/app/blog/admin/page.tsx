"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { Copy, Check, ArrowRight } from "lucide-react";

function toSlug(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

function normalizePath(value: string) {
  const raw = String(value || "").trim();
  if (!raw.startsWith("/")) return raw;
  return raw.endsWith("/") ? raw : `${raw}/`;
}

function toParagraphs(value: string) {
  return value
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);
}

function parseSections(value: string) {
  const lines = value.split("\n").map((line) => line.trim());
  const sections: { heading: string; paragraphs: string[] }[] = [];
  let current: { heading: string; paragraphs: string[] } | null = null;

  for (const line of lines) {
    if (!line) continue;
    if (line.startsWith("## ")) {
      if (current && current.paragraphs.length) sections.push(current);
      current = { heading: line.replace(/^##\s+/, "").trim(), paragraphs: [] };
      continue;
    }

    if (!current) current = { heading: "Main Discussion", paragraphs: [] };
    current.paragraphs.push(line);
  }

  if (current && current.paragraphs.length) sections.push(current);
  return sections;
}

function parseFaqs(value: string) {
  return value
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line) => {
      const [q, a] = line.split("::").map((part) => part?.trim() || "");
      return { q, a };
    })
    .filter((item) => item.q && item.a);
}

export default function BlogAdminPage() {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("SEO");
  const [readTime, setReadTime] = useState("6 min read");
  const [date, setDate] = useState("February 2026");
  const [excerpt, setExcerpt] = useState("");
  const [keyword, setKeyword] = useState("");
  const [serviceHref, setServiceHref] = useState("/services/");
  const [introText, setIntroText] = useState("");
  const [contentText, setContentText] = useState("");
  const [conclusionText, setConclusionText] = useState("");
  const [faqsText, setFaqsText] = useState("");
  const [bulletsText, setBulletsText] = useState("");
  const [author, setAuthor] = useState("Mugnee IT Team");
  const [copied, setCopied] = useState(false);
  const [publishing, setPublishing] = useState(false);
  const [statusText, setStatusText] = useState("");
  const [publishedSlug, setPublishedSlug] = useState("");
  const [publishedCount, setPublishedCount] = useState<number | null>(null);

  const slug = useMemo(() => toSlug(title), [title]);

  const introduction = useMemo(() => toParagraphs(introText), [introText]);
  const sections = useMemo(() => parseSections(contentText), [contentText]);
  const content = useMemo(() => sections.flatMap((section) => section.paragraphs), [sections]);
  const conclusion = useMemo(() => toParagraphs(conclusionText), [conclusionText]);
  const faqs = useMemo(() => parseFaqs(faqsText), [faqsText]);

  const bullets = useMemo(
    () => toParagraphs(bulletsText),
    [bulletsText]
  );

  const objectPreview = useMemo(() => {
    return `{
  slug: "${slug || "your-slug"}",
  title: "${title || "Your blog title"}",
  category: "${category}",
  readTime: "${readTime}",
  date: "${date}",
  excerpt: "${excerpt || "Short summary"}",
  introduction: ${JSON.stringify(introduction, null, 2)},
  sections: ${JSON.stringify(sections, null, 2)},
  content: ${JSON.stringify(content, null, 2)},
  conclusion: ${JSON.stringify(conclusion, null, 2)},
  faqs: ${JSON.stringify(faqs, null, 2)},
  bullets: ${JSON.stringify(bullets, null, 2)},
  serviceHref: "${serviceHref}",
  keyword: "${keyword}",
  author: "${author}",
},`;
  }, [slug, title, category, readTime, date, excerpt, introduction, sections, content, conclusion, faqs, bullets, serviceHref, keyword, author]);

  const payload = useMemo(
    () => ({
      slug: slug || "your-slug",
      title: title || "Your blog title",
      category,
      readTime,
      date,
      excerpt: excerpt || "Short summary",
      introduction,
      sections,
      content,
      conclusion,
      faqs,
      bullets,
      serviceHref: normalizePath(serviceHref),
      keyword,
      author,
    }),
    [slug, title, category, readTime, date, excerpt, introduction, sections, content, conclusion, faqs, bullets, serviceHref, keyword, author]
  );

  useEffect(() => {
    async function loadCount() {
      try {
        const res = await fetch("/api/blog-posts");
        const data = (await res.json()) as { count?: number };
        if (typeof data.count === "number") setPublishedCount(data.count);
      } catch {
        setPublishedCount(null);
      }
    }
    loadCount();
  }, []);

  async function copyObject() {
    try {
      await navigator.clipboard.writeText(objectPreview);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      setCopied(false);
    }
  }

  async function publishNow() {
    if (
      !title.trim() ||
      !excerpt.trim() ||
      introduction.length === 0 ||
      sections.length === 0 ||
      conclusion.length === 0 ||
      faqs.length === 0 ||
      bullets.length === 0
    ) {
      setStatusText("Please fill introduction, structured sections, conclusion, FAQ and bullets before publishing.");
      return;
    }
    setPublishing(true);
    setStatusText("");
    setPublishedSlug("");
    try {
      const res = await fetch("/api/blog-posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = (await res.json()) as { ok: boolean; error?: string; slug?: string };
      if (!res.ok || !data.ok) {
        setStatusText(data.error || "Publish failed.");
        return;
      }
      setStatusText("Published successfully.");
      if (data.slug) setPublishedSlug(data.slug);
      setPublishedCount((prev) => (typeof prev === "number" ? prev + 1 : prev));
    } catch {
      setStatusText("Network error. Could not publish.");
    } finally {
      setPublishing(false);
    }
  }

  return (
    <main className="bg-slate-50">
      <section className="mx-auto max-w-7xl px-4 pt-16 pb-16">
        <nav className="text-xs font-bold text-slate-500">
          <Link prefetch={false} href="/" className="hover:text-slate-900">Home</Link>
          <span className="mx-2">/</span>
          <Link prefetch={false} href="/blog" className="hover:text-slate-900">Blog</Link>
          <span className="mx-2">/</span>
          <span className="text-slate-900">Blog Dashboard</span>
        </nav>

        <div className="mt-8">
          <h1 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">Blog Dashboard (Simple Publisher)</h1>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600">
            Use article structure: <b>Introduction</b> {"->"} <b>Sections</b> {"->"}{" "}
            <b>Key Takeaways</b> {"->"} <b>Conclusion</b> {"->"} <b>FAQ</b>. It will go live directly on{" "}
            <code className="mx-1 rounded bg-slate-200 px-1.5 py-0.5">/blog</code>.
          </p>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1.1fr_.9fr]">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="grid gap-4 sm:grid-cols-2">
              <Input label="Title" value={title} onChange={setTitle} placeholder="Write blog title" />
              <Input label="Slug (auto)" value={slug} onChange={() => {}} readOnly />
            </div>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <Input label="Category" value={category} onChange={setCategory} />
              <Input label="Read Time" value={readTime} onChange={setReadTime} />
            </div>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <Input label="Date" value={date} onChange={setDate} />
              <Input label="Author" value={author} onChange={setAuthor} />
            </div>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <Input label="Keyword" value={keyword} onChange={setKeyword} placeholder="Main target keyword" />
              <Input label="Related Service URL" value={serviceHref} onChange={setServiceHref} placeholder="/services/..." />
            </div>
            <div className="mt-4">
              <label className="mb-2 block text-sm font-extrabold text-slate-900">Excerpt</label>
              <textarea
                rows={3}
                value={excerpt}
                onChange={(e) => setExcerpt(e.target.value)}
                className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none focus:border-yellow-400"
              />
            </div>
            <div className="mt-4">
              <label className="mb-2 block text-sm font-extrabold text-slate-900">
                Introduction paragraphs (one paragraph per line)
              </label>
              <textarea
                rows={4}
                value={introText}
                onChange={(e) => setIntroText(e.target.value)}
                className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none focus:border-yellow-400"
              />
            </div>
            <div className="mt-4">
              <label className="mb-2 block text-sm font-extrabold text-slate-900">
                Main sections
              </label>
              <p className="mb-2 text-xs text-slate-500">
                Use <code>## Section Heading</code> then write paragraph lines below it.
              </p>
              <textarea
                rows={10}
                value={contentText}
                onChange={(e) => setContentText(e.target.value)}
                className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none focus:border-yellow-400"
              />
            </div>
            <div className="mt-4">
              <label className="mb-2 block text-sm font-extrabold text-slate-900">
                Key takeaways (one bullet per line)
              </label>
              <textarea
                rows={6}
                value={bulletsText}
                onChange={(e) => setBulletsText(e.target.value)}
                className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none focus:border-yellow-400"
              />
            </div>
            <div className="mt-4">
              <label className="mb-2 block text-sm font-extrabold text-slate-900">
                Conclusion paragraphs (one paragraph per line)
              </label>
              <textarea
                rows={4}
                value={conclusionText}
                onChange={(e) => setConclusionText(e.target.value)}
                className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none focus:border-yellow-400"
              />
            </div>
            <div className="mt-4">
              <label className="mb-2 block text-sm font-extrabold text-slate-900">
                FAQs (one per line with <code>question :: answer</code>)
              </label>
              <textarea
                rows={5}
                value={faqsText}
                onChange={(e) => setFaqsText(e.target.value)}
                className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none focus:border-yellow-400"
              />
            </div>
          </div>

          <div className="space-y-4">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-extrabold text-slate-900">Copy-ready post object</h2>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={copyObject}
                    className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-extrabold text-slate-900 hover:bg-slate-50"
                  >
                    {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                    {copied ? "Copied" : "Copy"}
                  </button>
                  <button
                    type="button"
                    onClick={publishNow}
                    disabled={publishing}
                    className="inline-flex items-center gap-2 rounded-xl bg-yellow-400 px-4 py-2 text-sm font-extrabold text-slate-900 hover:bg-yellow-500 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {publishing ? "Publishing..." : "Publish Now"}
                  </button>
                </div>
              </div>
              {statusText ? (
                <p className="mt-3 text-sm font-bold text-slate-700">{statusText}</p>
              ) : null}
              {publishedSlug ? (
                <Link prefetch={false}
                  href={`/blog/${publishedSlug}/`}
                  className="mt-2 inline-flex items-center gap-2 text-sm font-extrabold text-slate-900"
                >
                  Open new post <ArrowRight className="h-4 w-4" />
                </Link>
              ) : null}
              <pre className="mt-4 max-h-[420px] overflow-auto rounded-2xl bg-slate-900 p-4 text-xs leading-6 text-slate-100">
{objectPreview}
              </pre>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-base font-extrabold text-slate-900">Publish steps</h3>
              <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm text-slate-700">
                <li>Fill intro, structured sections, takeaways, conclusion, and FAQ.</li>
                <li>Click <b>Publish Now</b>.</li>
                <li>Open <code>/blog</code> and read your post.</li>
              </ol>
              <Link prefetch={false}
                href="/blog"
                className="mt-4 inline-flex items-center gap-2 text-sm font-extrabold text-slate-900"
              >
                Open Blog Page <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-slate-900 p-6 text-white shadow-sm">
              <div className="text-base font-extrabold">
                Current published posts: {publishedCount ?? "..."}
              </div>
              <p className="mt-2 text-sm text-white/80">
                You can publish directly from this dashboard without editing code each time.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function Input({
  label,
  value,
  onChange,
  placeholder,
  readOnly = false,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  readOnly?: boolean;
}) {
  return (
    <div>
      <label className="mb-2 block text-sm font-extrabold text-slate-900">{label}</label>
      <input
        value={value}
        readOnly={readOnly}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none focus:border-yellow-400 read-only:bg-slate-100"
      />
    </div>
  );
}
