// app/services/nextjs/business-website/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  CheckCircle2,
  Building2,
  LayoutDashboard,
  ShieldCheck,
  Search,
  Sparkles,
  FileText,
  Link2,
  Gauge,
  Users,
  BadgeCheck,
  Workflow,
  Quote,
} from "lucide-react";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "https://mugneeit.com";

const PAGE_PATH = "/services/nextjs/business-website/";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;
const TARGET_KEYWORD = "Next.js Business Website Development";

export const metadata: Metadata = {
  title: "Next.js Business Website Development | Corporate Sites",
  description:
    "Premium Next.js business websites: fast load, SEO-ready structure, clean UI, trust sections and lead generation layout for Bangladesh and worldwide clients.",
  alternates: { canonical: PAGE_URL },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Next.js Business Website Development",
    description:
      "Corporate business websites with premium UI, SEO-ready structure, and fast performance built on Next.js.",
    url: PAGE_URL,
    siteName: "Mugnee IT Solutions",
    type: "website",
  },
};

const faqs = [
  {
    q: "What is Next.js business website development?",
    a: "It means building corporate or business websites using Next.js (React) with a clean structure, fast performance, and SEO-friendly setup like metadata, canonical URLs, and optimized images.",
  },
  {
    q: "Is Next.js good for corporate websites?",
    a: "Yes. When implemented properly, Next.js helps deliver fast pages, better UX, and a structured SEO foundation that supports indexing and lead generation.",
  },
  {
    q: "What pages do you include in a business website?",
    a: "Common pages include Home, About, Services, Projects/Case Studies, Blog (optional), Contact, and FAQ—plus landing pages for specific offers or services.",
  },
  {
    q: "Will the website be SEO-ready?",
    a: "Yes. We implement proper headings, clean URL structure, metadata, canonical URLs, internal links, and optional schema (FAQ/Breadcrumb) without spam.",
  },
  {
    q: "Can you redesign an existing business website using Next.js?",
    a: "Yes. We can migrate from WordPress or other builders to Next.js while keeping content structure, improving design, and optimizing performance.",
  },
  {
    q: "Do you support Bangladesh and international clients?",
    a: "Yes. We work with clients in Bangladesh and worldwide with clear milestones, communication, and deployment support.",
  },
  {
    q: "Do you provide maintenance after delivery?",
    a: "Yes. We offer support for fixes, updates, performance checks, and feature improvements after launch.",
  },
  {
    q: "How long does a Next.js business website take?",
    a: "Timeline depends on pages, content readiness, and complexity. After requirements, we share a delivery plan with milestones.",
  },
];

function buildJsonLd() {
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: `${SITE_URL}/services/`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Next.js",
        item: `${SITE_URL}/services/nextjs/`,
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Business Website",
        item: PAGE_URL,
      },
    ],
  };

  const service = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Next.js Business Website Development",
    serviceType: "Web Development",
    provider: {
      "@type": "Organization",
      name: "Mugnee IT Solutions",
      url: SITE_URL,
    },
    areaServed: ["Bangladesh", "Worldwide"],
    url: PAGE_URL,
    description:
      "Premium Next.js business website development with SEO-ready structure, clean UI, trust sections, and fast performance for lead generation.",
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

  return [breadcrumb, service, faq];
}

export default function NextBusinessWebsitePage() {
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
            alt="Next.js business website banner"
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/70 via-slate-950/35 to-transparent" />
          <div className="absolute inset-0 opacity-[0.10] [background:radial-gradient(circle_at_1px_1px,rgba(255,255,255,.35)_1px,transparent_0)] [background-size:22px_22px]" />
        </div>

        <div className="relative mx-auto max-w-6xl px-4">
          <nav className="text-xs font-bold text-white/85 drop-shadow">
            <Link prefetch={false} className="hover:text-white" href="/">
              Home
            </Link>
            <span className="mx-2 text-white/60">/</span>
            <Link prefetch={false} className="hover:text-white" href="/services">
              Services
            </Link>
            <span className="mx-2 text-white/60">/</span>
            <Link prefetch={false} className="hover:text-white" href="/services/nextjs">
              Next.js
            </Link>
            <span className="mx-2 text-white/60">/</span>
            <span className="text-yellow-300">Business Website</span>
          </nav>

          <div className="mt-10 grid gap-10 lg:grid-cols-2 lg:items-center">
            <div className="max-w-2xl">
              <p className="inline-flex items-center gap-2 text-[11px] font-extrabold tracking-[0.22em] text-yellow-200 drop-shadow">
                CORPORATE WEBSITES
                <span className="h-1.5 w-1.5 rounded-full bg-yellow-300" />
                Trust • SEO • Speed
              </p>

              <h1 className="mt-4 text-4xl font-extrabold leading-tight text-white drop-shadow sm:text-5xl">
                {TARGET_KEYWORD}
              </h1>

              <p className="mt-4 text-base leading-7 text-white/90 drop-shadow sm:text-lg">
                We build premium business websites with Next.js: clean layout, strong
                trust blocks, SEO-ready structure, and fast performance for higher
                lead conversion.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {[
                  "Corporate-ready layout",
                  "SEO metadata + canonical",
                  "Fast load (Core Web Vitals)",
                  "Lead capture friendly",
                  "Maintainable structure",
                ].map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] font-extrabold text-white/90 backdrop-blur"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Link prefetch={false}
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-yellow-400 px-7 py-3.5 text-sm font-extrabold text-slate-900 shadow-[0_18px_55px_rgba(250,204,21,0.22)] transition hover:-translate-y-[1px] hover:bg-yellow-500"
                >
                  Get a Proposal
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

              <div className="mt-7 flex flex-wrap gap-x-6 gap-y-2 text-sm font-bold text-white/90 drop-shadow">
                <span className="inline-flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-yellow-300" /> Bangladesh +
                  Worldwide
                </span>
                <span className="inline-flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-yellow-300" /> SEO-safe setup
                </span>
                <span className="inline-flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-yellow-300" /> Premium UI
                  system
                </span>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <Badge icon={Building2} title="Corporate layout" desc="Trust-first sections" />
              <Badge icon={Search} title="SEO-ready" desc="Metadata + canonical + sitemap" />
              <Badge icon={Sparkles} title="Premium UI" desc="Reusable components" />
              <Badge icon={ShieldCheck} title="Stable build" desc="Maintainable structure" />
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
      
      {/* WHO THIS IS FOR */}
      <section className="mx-auto max-w-6xl px-4 pt-6 pb-14">
        <div className="grid gap-6 lg:grid-cols-3">
          <InfoCard
            icon={Users}
            title="Who this is for"
            desc="Corporate teams, agencies, and growing businesses that need a premium online presence."
            bullets={[
              "Companies needing a trust-first website",
              "Businesses that want better speed & SEO foundation",
              "Brands needing clean UI + lead capture",
            ]}
          />
          <InfoCard
            icon={BadgeCheck}
            title="What makes it premium"
            desc="Not just design—structure, clarity, and maintainability for long-term growth."
            bullets={[
              "Clear information architecture",
              "Conversion sections and CTA placement",
              "Reusable UI components and clean layout",
            ]}
          />
          <InfoCard
            icon={Gauge}
            title="Performance focus"
            desc="Faster pages can improve user experience and lead conversion."
            bullets={[
              "Optimized images and font strategy",
              "Stable layout (CLS control)",
              "Core Web Vitals-friendly delivery",
            ]}
          />
        </div>
      </section>
      
      
      {/* WHAT YOU GET */}
      <section className="mx-auto max-w-6xl px-4 pb-14">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-extrabold tracking-[0.25em] text-slate-500">
              DELIVERABLES
            </p>
            <h2 className="mt-2 text-3xl font-extrabold text-slate-900">
              What you get with a Next.js business website
            </h2>
            <p className="mt-3 max-w-3xl text-sm text-slate-600 sm:text-base">
              Built to look professional, load fast, and support long-term SEO and lead generation.
            </p>
          </div>
          <Link prefetch={false}
            href="/contact"
            className="inline-flex w-fit items-center justify-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-extrabold text-white transition hover:bg-slate-800"
          >
            Get quotation <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          <Feature
            title="Pages that convert"
            items={[
              "Home, About, Services, Contact",
              "Clear CTA + lead capture",
              "FAQ + trust blocks",
              "Proof (projects/testimonials)",
            ]}
          />
          <Feature
            title="SEO foundation"
            items={[
              "Unique title/description per page",
              "Canonical + clean URLs",
              "Internal linking plan",
              "Optional FAQ/Breadcrumb schema",
            ]}
          />
          <Feature
            title="Performance & UX"
            items={[
              "Fast load + Core Web Vitals",
              "Image & font strategy",
              "Stable layout (CLS control)",
              "Mobile-first UI",
            ]}
          />
        </div>

        {/* Example site structure */}
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <SoftPanel
            icon={FileText}
            title="Recommended website structure"
            desc="A typical business website structure that supports SEO + user journey."
            bullets={[
              "Home (clear offer + CTA)",
              "About (company story + team + trust)",
              "Services (each service as a dedicated section or page)",
              "Projects / Case Studies (proof)",
              "Blog / Insights (optional)",
              "Contact (multi-channel contact + form)",
              "FAQ (optional, but helpful for conversions)",
            ]}
          />
          <SoftPanel
            icon={Link2}
            title="Internal linking plan"
            desc="We connect related pages naturally to strengthen topical relevance."
            bullets={[
              "Next.js main service → Business website page",
              "Business website page → Technical SEO / Core Web Vitals pages",
              "Services page → each service detail page",
              "Projects/Case Studies → relevant services",
            ]}
          />
        </div>

        <div className="mt-10 rounded-3xl border border-slate-200 bg-slate-50 p-7 shadow-sm">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div className="flex items-start gap-3">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-slate-900">
                <LayoutDashboard className="h-6 w-6 text-white" />
              </span>
              <div>
                <div className="text-lg font-extrabold text-slate-900">
                  Need a business website that looks premium?
                </div>
                <p className="mt-1 text-sm leading-6 text-slate-600">
                  Share your company info + required pages. We’ll reply with scope,
                  timeline and proposal.
                </p>
              </div>
            </div>

            <Link prefetch={false}
              href="/contact"
              className="group inline-flex w-fit items-center justify-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-extrabold text-white transition hover:bg-slate-800"
            >
              Contact Now <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
      
      
      {/* PROCESS */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 pb-14">
          <p className="text-xs font-extrabold tracking-[0.25em] text-slate-500">
            PROCESS
          </p>
          <h2 className="mt-2 text-3xl font-extrabold text-slate-900">
            How we build your business website
          </h2>
          <p className="mt-3 max-w-3xl text-sm text-slate-600 sm:text-base">
            A simple workflow that keeps delivery clean, measurable, and on time.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <ProcessCard
              icon={Workflow}
              title="Planning"
              desc="We finalize pages, sections, references, and a delivery timeline."
            />
            <ProcessCard
              icon={Sparkles}
              title="Design & UI"
              desc="Premium sections, spacing system, and conversion-first layout."
            />
            <ProcessCard
              icon={Search}
              title="SEO setup"
              desc="Metadata/canonical, internal links, and schema only where relevant."
            />
            <ProcessCard
              icon={ShieldCheck}
              title="Deploy & support"
              desc="Launch support, fixes, and post-delivery guidance."
            />
          </div>
        </div>
      </section>
      
      
      {/* FAQ */}
      <section className="mx-auto max-w-6xl px-4 pb-14">
        <p className="text-xs font-extrabold tracking-[0.25em] text-slate-500">
          FAQ
        </p>
        <h2 className="mt-2 text-3xl font-extrabold text-slate-900">
          Common questions about Next.js business websites
        </h2>

                <p className="mt-8 max-w-3xl text-sm leading-7 text-slate-600">
          FAQs below are specific to this service page intent and not copied from generic templates.
        </p>

        <div className="mt-10 grid gap-4 lg:grid-cols-2">          {faqs.map((f) => (
            <details
              key={f.q}
              className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
            >
              <summary className="cursor-pointer list-none text-sm font-extrabold text-slate-900">
                {f.q}
                <span className="float-right text-slate-400 transition group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 text-sm leading-6 text-slate-600">{f.a}</p>
            </details>
          ))}
        </div>

        <div className="mt-12 rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-3">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-yellow-100">
                <Quote className="h-6 w-6 text-slate-900" />
              </span>
              <div>
                <div className="text-lg font-extrabold text-slate-900">
                  Want a proposal with timeline?
                </div>
                <p className="mt-1 text-sm text-slate-600">
                  Send required pages + sample websites you like. We’ll reply with scope & quotation.
                </p>
              </div>
            </div>

            <Link prefetch={false}
              href="/contact"
              className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-yellow-400 px-7 py-3 text-sm font-extrabold text-slate-900 shadow-[0_14px_40px_rgba(250,204,21,0.22)] transition hover:-translate-y-[1px] hover:bg-yellow-500"
            >
              Request Quote
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>
      
    </main>
  );
}

/* ---------------- UI Bits ---------------- */

function Badge({
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

function Feature({ title, items }: { title: string; items: string[] }) {
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

function InfoCard({
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
      <div className="flex items-start gap-3">
        <span className="grid h-12 w-12 place-items-center rounded-2xl bg-slate-900">
          <Icon className="h-6 w-6 text-white" />
        </span>
        <div>
          <div className="text-lg font-extrabold text-slate-900">{title}</div>
          <p className="mt-1 text-sm leading-6 text-slate-600">{desc}</p>
        </div>
      </div>

      <div className="mt-5 space-y-2">
        {bullets.map((b) => (
          <div key={b} className="flex items-start gap-2 text-sm text-slate-700">
            <span className="mt-1 h-2 w-2 rounded-full bg-yellow-400" />
            <span className="leading-6">{b}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function SoftPanel({
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
    <div className="rounded-3xl border border-slate-200 bg-slate-50 p-7 shadow-sm">
      <div className="flex items-start gap-3">
        <span className="grid h-12 w-12 place-items-center rounded-2xl bg-white ring-1 ring-slate-200">
          <Icon className="h-6 w-6 text-slate-900" />
        </span>
        <div>
          <div className="text-lg font-extrabold text-slate-900">{title}</div>
          <p className="mt-1 text-sm leading-6 text-slate-600">{desc}</p>
        </div>
      </div>

      <div className="mt-5 space-y-2">
        {bullets.map((b) => (
          <div key={b} className="flex items-start gap-2 text-sm text-slate-700">
            <span className="mt-1 h-2 w-2 rounded-full bg-slate-900" />
            <span className="leading-6">{b}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function ProcessCard({
  icon: Icon,
  title,
  desc,
}: {
  icon: LucideIcon;
  title: string;
  desc: string;
}) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <div className="flex items-start gap-4">
        <div className="grid h-12 w-12 place-items-center rounded-2xl bg-slate-900">
          <Icon className="h-6 w-6 text-white" />
        </div>
        <div>
          <div className="text-base font-extrabold text-slate-900">{title}</div>
          <p className="mt-1 text-sm leading-6 text-slate-600">{desc}</p>
        </div>
      </div>
    </div>
  );
}









