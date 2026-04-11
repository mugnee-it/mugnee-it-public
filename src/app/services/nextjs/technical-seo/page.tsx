import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Search,
  Link2,
  FileText,
  GitBranch,
  Lock,
  Quote,
  Settings2,
  Bug,
  Layers,
  BadgeCheck,
} from "lucide-react";

/** ✅ Production env:
 * NEXT_PUBLIC_SITE_URL=https://mugneeit.com
 */
const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "https://mugneeit.com";

const PAGE_PATH = "/services/nextjs/technical-seo/";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

const TARGET_KEYWORD = "Next.js Technical SEO";

export const metadata: Metadata = {
  title: "Next.js Technical SEO Services | Indexing + Schema",
  description:
    "Next.js technical SEO setup: metadata, canonical URLs, sitemap/robots, internal linking, schema and index-safe structure for stable rankings.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Next.js Technical SEO Services",
    description:
      "Index-safe Next.js SEO setup: metadata, canonical, sitemap/robots, schema and internal linking for stable rankings.",
    url: PAGE_URL,
    siteName: "Mugnee IT Solutions",
    type: "website",
  },
  robots: { index: true, follow: true },
};

const faqs = [
  {
    q: "What is technical SEO in Next.js?",
    a: "Technical SEO means setting up metadata, canonical URLs, sitemap/robots, internal linking and structured data so search engines can crawl and index pages correctly.",
  },
  {
    q: "Do you implement schema safely?",
    a: "Yes. We only add relevant schema (FAQ, Breadcrumb, Organization, Service) and avoid spam or duplicated markup.",
  },
  {
    q: "Will this improve indexing and rankings?",
    a: "A clean, index-safe setup improves crawl efficiency, reduces duplicate URL problems, and helps search engines understand your pages better.",
  },
  {
    q: "Do you fix duplicate content issues?",
    a: "Yes. We control canonical URLs, trailing slashes, query parameters, and prevent multiple URLs pointing to the same content.",
  },
  {
    q: "Do you optimize for Bangladesh and worldwide?",
    a: "Yes. Our SEO structure works for both local (Bangladesh) and global targeting—without doorway pages or risky location spam.",
  },
];

function buildJsonLd() {
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Mugnee IT Solutions",
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
  };

  const service = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Next.js Technical SEO Services",
    serviceType: "Technical SEO",
    provider: {
      "@type": "Organization",
      name: "Mugnee IT Solutions",
      url: SITE_URL,
    },
    areaServed: ["Bangladesh", "Worldwide"],
    url: PAGE_URL,
    description:
      "Next.js technical SEO setup: metadata, canonical URLs, sitemap/robots, internal linking, schema and index-safe structure.",
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
      { "@type": "ListItem", position: 2, name: "Services", item: `${SITE_URL}/services/` },
      { "@type": "ListItem", position: 3, name: "Next.js", item: `${SITE_URL}/services/nextjs/` },
      { "@type": "ListItem", position: 4, name: "Technical SEO", item: PAGE_URL },
    ],
  };

  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
     acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return [organization, service, breadcrumb, faq];
}

export default function NextJsTechnicalSeoPage() {
  const jsonLd = buildJsonLd();

  return (
    <main className="bg-white">
      {/* ✅ JSON-LD (single script) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* HERO */}
      <section className="relative overflow-hidden pt-24 pb-12 sm:pt-28 sm:pb-16">
        <div className="absolute inset-0">
          <Image
            src="/images/next-hero.webp"
            alt="Next.js technical SEO banner"
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/70 via-slate-950/35 to-transparent" />
          <div className="absolute inset-0 opacity-[0.10] [background:radial-gradient(circle_at_1px_1px,rgba(255,255,255,.35)_1px,transparent_0)] [background-size:22px_22px]" />
        </div>

        <div className="relative mx-auto max-w-6xl px-4">
          <nav className="text-xs font-bold text-white/85 drop-shadow">
            <Link prefetch={false} className="hover:text-white" href="/">Home</Link>
            <span className="mx-2 text-white/60">/</span>
            <Link prefetch={false} className="hover:text-white" href="/services">Services</Link>
            <span className="mx-2 text-white/60">/</span>
            <Link prefetch={false} className="hover:text-white" href="/services/nextjs">Next.js</Link>
            <span className="mx-2 text-white/60">/</span>
            <span className="text-yellow-300">Technical SEO</span>
          </nav>

          <div className="mt-10 grid gap-10 lg:grid-cols-2 lg:items-center">
            <div className="max-w-2xl">
              <p className="inline-flex items-center gap-2 text-[11px] font-extrabold tracking-[0.22em] text-yellow-200 drop-shadow">
                NEXT.JS SEO
                <span className="h-1.5 w-1.5 rounded-full bg-yellow-300" />
                Index-safe • Schema-ready
              </p>

              <h1 className="mt-4 text-4xl font-extrabold leading-tight text-white drop-shadow sm:text-5xl">
                {TARGET_KEYWORD}
                <span className="text-yellow-300"> Services</span>
              </h1>

              <p className="mt-4 text-base leading-7 text-white/90 drop-shadow sm:text-lg">
                We fix crawl & indexing issues, remove duplicate URL risks, and implement the core SEO
                foundation (metadata, canonical, sitemap/robots, internal links) the right way—Google-safe.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Link prefetch={false}
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-yellow-400 px-7 py-3.5 text-sm font-extrabold text-slate-900 shadow-[0_18px_55px_rgba(250,204,21,0.22)] transition hover:-translate-y-[1px] hover:bg-yellow-500"
                >
                  Get SEO Audit
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </Link>

                <Link prefetch={false}
                  href="/services/nextjs"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/10 px-7 py-3.5 text-sm font-extrabold text-white backdrop-blur transition hover:bg-white/15"
                >
                  Back to Next.js Service
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <HeroBadge icon={Search} title="Metadata" desc="Titles, descriptions, OG setup" />
              <HeroBadge icon={Link2} title="Canonical" desc="Prevent duplicate URL issues" />
              <HeroBadge icon={GitBranch} title="Sitemap/Robots" desc="Crawl & index control" />
              <HeroBadge icon={ShieldCheck} title="Schema-safe" desc="Only relevant structured data" />
            </div>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-4 py-12">
        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
          <p className="text-xs font-extrabold tracking-[0.24em] text-slate-500">SERVICE SOLUTION</p>
          <h2 className="mt-2 text-2xl font-extrabold text-slate-900 sm:text-3xl">{TARGET_KEYWORD} solutions</h2>
          <p className="mt-2 text-sm leading-7 text-slate-600">
            Practical implementation built around your business goals, timeline, and growth priorities.
          </p>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {[
              `Tailored ${TARGET_KEYWORD} roadmap`,
              "Clear scope, timeline, and deliverables",
              "Google-safe execution with clean structure",
              "Ongoing support after launch",
            ].map((item) => (
              <div key={item} className="rounded-2xl border border-slate-200 bg-white p-4 text-sm font-semibold text-slate-700">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-4 pb-12">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">
          <p className="text-xs font-extrabold tracking-[0.24em] text-slate-500">SERVICE BENEFITS</p>
          <h2 className="mt-2 text-2xl font-extrabold text-slate-900 sm:text-3xl">{TARGET_KEYWORD} benefits</h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {[
              `Clear ${TARGET_KEYWORD} scope with business-focused priorities`,
              "Structured delivery and quality-controlled implementation",
              "SEO-safe and maintainable setup for long-term growth",
              "Post-launch support and practical optimization guidance",
            ].map((item) => (
              <div key={item} className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm font-semibold text-slate-700">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-4 pb-12">
        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
          <p className="text-xs font-extrabold tracking-[0.24em] text-slate-500">SERVICE COMPARISON</p>
          <h2 className="mt-2 text-2xl font-extrabold text-slate-900 sm:text-3xl">{TARGET_KEYWORD} vs other options</h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {[
              `${TARGET_KEYWORD}: custom execution aligned with business objectives`,
              "Generic alternatives: faster setup but limited flexibility for growth",
              "Low-cost quick delivery: cheaper initially, often weaker long-term stability",
              "Managed implementation: stronger process, QA, and after-launch support",
            ].map((item) => (
              <div key={item} className="rounded-2xl border border-slate-200 bg-white p-4 text-sm font-semibold text-slate-700">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* 3 CARDS */}
      <section className="mx-auto max-w-6xl px-4 py-14">
        <div className="grid gap-6 lg:grid-cols-3">
          <InfoCard
            icon={FileText}
            title="What we check"
            items={[
              "Unique titles & descriptions",
              "Clean heading structure (H1 → H2)",
              "Canonical + clean URLs",
              "Index signals (robots/meta)",
              "Open Graph + social preview",
            ]}
          />
          <InfoCard
            icon={Link2}
            title="Internal linking plan"
            items={[
              "Pillar → supporting pages structure",
              "Natural anchor text (no spam)",
              "Service → case studies route",
              "Navigation + breadcrumbs support",
              "Avoid broken/redirect chains",
            ]}
          />
          <InfoCard
            icon={Lock}
            title="Google-safe setup"
            items={[
              "No keyword stuffing",
              "No doorway pages",
              "Schema only when relevant",
              "Avoid duplicate structured data",
              "Stable URL rules (slash/no slash)",
            ]}
          />
        </div>
      </section>
      
      
      {/* COMMON PROBLEMS */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-extrabold tracking-[0.25em] text-slate-500">
                COMMON ISSUES
              </p>
              <h2 className="mt-2 text-3xl font-extrabold text-slate-900">
                Common Next.js technical SEO problems we fix
              </h2>
              <p className="mt-3 max-w-3xl text-sm text-slate-600 sm:text-base">
                These issues often hurt indexing, create duplicates, or reduce visibility—especially after migrations
                or when multiple URL variants exist.
              </p>
            </div>

            <Link prefetch={false}
              href="/contact"
              className="inline-flex w-fit items-center justify-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-extrabold text-white transition hover:bg-slate-800"
            >
              Request Audit <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <ProblemCard
              icon={Bug}
              title="Duplicate URLs"
              desc="Trailing slash, www/non-www, query params, and route variants create duplicates."
              bullets={["Canonical rules", "Redirect consistency", "URL normalization"]}
            />
            <ProblemCard
              icon={Settings2}
              title="Metadata issues"
              desc="Same title/description across many pages or missing OG tags reduces relevance."
              bullets={["Unique meta per page", "OG setup", "Clean templates"]}
            />
            <ProblemCard
              icon={Layers}
              title="Thin or unlinked pages"
              desc="Pages without internal links or helpful content get crawled less often."
              bullets={["Internal linking plan", "Pillar/supporting structure", "Navigation fixes"]}
            />
            <ProblemCard
              icon={GitBranch}
              title="Sitemap/robots mistakes"
              desc="Wrong sitemap URLs or blocked paths reduce indexing and crawl efficiency."
              bullets={["Sitemap validation", "Robots review", "Index signals check"]}
            />
            <ProblemCard
              icon={ShieldCheck}
              title="Schema misuse"
              desc="Spammy or duplicated schema can confuse search engines and reduce trust."
              bullets={["Only relevant schema", "Single source of truth", "No duplication"]}
            />
            <ProblemCard
              icon={BadgeCheck}
              title="Index-safe structure"
              desc="Stable routing + clean URLs help Google understand the website reliably."
              bullets={["Stable URL strategy", "Canonical-first", "Clean architecture"]}
            />
          </div>
        </div>
      </section>
      
      
      {/* DELIVERABLES */}
      <section className="mx-auto max-w-6xl px-4 py-14">
        <p className="text-xs font-extrabold tracking-[0.25em] text-slate-500">DELIVERABLES</p>
        <h2 className="mt-2 text-3xl font-extrabold text-slate-900">
          What you get from our {TARGET_KEYWORD}
        </h2>
        <p className="mt-3 max-w-3xl text-sm text-slate-600 sm:text-base">
          Clear fixes, clean structure and a roadmap you can maintain—without risky tactics.
        </p>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          <DeliverCard
            title="Technical SEO checklist"
            items={[
              "Metadata & canonical review",
              "Sitemap/robots correctness",
              "Index signals validation",
              "Internal linking improvements",
            ]}
          />
          <DeliverCard
            title="Schema (safe)"
            items={[
              "FAQ/Breadcrumb where relevant",
              "Avoid duplicate schema blocks",
              "Organization/Service schema",
              "No spam markup",
            ]}
          />
          <DeliverCard
            title="Documentation"
            items={[
              "Summary of issues + fixes",
              "Recommendations for content/internal links",
              "Next steps for growth",
              "Support if needed",
            ]}
          />
        </div>

        <div className="mt-10 rounded-3xl border border-slate-200 bg-slate-50 p-7 shadow-sm">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <div className="text-lg font-extrabold text-slate-900">
                Want a Next.js SEO audit?
              </div>
              <p className="mt-1 text-sm leading-6 text-slate-600">
                Share your website link + target pages. We’ll respond with key issues and safe fixes.
              </p>
            </div>

            <Link prefetch={false}
              href="/contact"
              className="group inline-flex w-fit items-center justify-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-extrabold text-white transition hover:bg-slate-800"
            >
              Request Audit <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
      
      
      {/* FAQ */}
      <section className="mx-auto max-w-6xl px-4 pb-14">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-extrabold tracking-[0.25em] text-slate-500">FAQ</p>
            <h2 className="mt-2 text-3xl font-extrabold text-slate-900">
              Questions about {TARGET_KEYWORD}
            </h2>
          </div>
          <div className="hidden sm:flex items-center gap-2 text-sm font-bold text-slate-600">
            <Quote className="h-4 w-4" /> Google-safe implementation
          </div>
        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-2">
          {faqs.map((f) => (
            <details
              key={f.q}
              className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
            >
              <summary className="cursor-pointer list-none text-sm font-extrabold text-slate-900">
                {f.q}
                <span className="float-right text-slate-400 transition group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 text-sm leading-6 text-slate-600">{f.a}</p>
            </details>
          ))}
        </div>
      </section>
      
    </main>
  );
}

/* UI bits */

function HeroBadge({
  icon: Icon,
  title,
  desc,
}: {
  icon: LucideIcon;
  title: string;
  desc: string;
}) {
  return (
    <div className="rounded-3xl border border-white/15 bg-white/10 px-5 py-4 backdrop-blur shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
      <div className="flex items-start gap-3">
        <div className="grid h-10 w-10 place-items-center rounded-2xl bg-yellow-400/90">
          <Icon className="h-5 w-5 text-slate-900" />
        </div>
        <div>
          <div className="text-sm font-extrabold text-white">{title}</div>
          <div className="mt-1 text-xs text-white/80">{desc}</div>
        </div>
      </div>
    </div>
  );
}

function InfoCard({
  icon: Icon,
  title,
  items,
}: {
  icon: LucideIcon;
  title: string;
  items: string[];
}) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
      <div className="flex items-start gap-4">
        <div className="grid h-12 w-12 place-items-center rounded-2xl bg-slate-900">
          <Icon className="h-6 w-6 text-white" />
        </div>
        <div className="w-full">
          <div className="text-lg font-extrabold text-slate-900">{title}</div>
          <div className="mt-4 space-y-2">
            {items.map((x) => (
              <div key={x} className="flex items-start gap-2 text-sm text-slate-700">
                <span className="mt-1 grid h-5 w-5 place-items-center rounded-full bg-emerald-50 ring-1 ring-emerald-100">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
                </span>
                <span className="leading-6">{x}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function ProblemCard({
  icon: Icon,
  title,
  desc,
  bullets,
}: {
  icon: LucideIcon;
  title: string;
  desc: string;
  bullets: string[];
}) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
      <div className="flex items-start gap-4">
        <div className="grid h-12 w-12 place-items-center rounded-2xl bg-slate-900">
          <Icon className="h-6 w-6 text-white" />
        </div>
        <div>
          <div className="text-lg font-extrabold text-slate-900">{title}</div>
          <p className="mt-1 text-sm leading-6 text-slate-600">{desc}</p>

          <div className="mt-4 space-y-2">
            {bullets.map((b) => (
              <div key={b} className="flex items-start gap-2 text-sm text-slate-700">
                <span className="mt-1 h-2 w-2 rounded-full bg-yellow-400" />
                <span className="leading-6">{b}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function DeliverCard({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
      <div className="text-lg font-extrabold text-slate-900">{title}</div>
      <div className="mt-5 space-y-2">
        {items.map((x) => (
          <div key={x} className="flex items-start gap-2 text-sm text-slate-700">
            <span className="mt-1 grid h-5 w-5 place-items-center rounded-full bg-emerald-50 ring-1 ring-emerald-100">
              <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
            </span>
            <span className="leading-6">{x}</span>
          </div>
        ))}
      </div>
    </div>
  );
}









