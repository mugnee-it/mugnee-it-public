import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  CheckCircle2,
  Globe2,
  Timer,
  MessagesSquare,
  ShieldCheck,
  Quote,
  Workflow,
  BadgeCheck,
  Search,
  Link2,
  FileText,
} from "lucide-react";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "https://mugneeit.com";

const PAGE_PATH = "/services/nextjs/worldwide/";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;
const TARGET_KEYWORD = "Worldwide Next.js Development Service";

export const metadata: Metadata = {
  title: "Worldwide Next.js Development Service | Remote Delivery",
  description:
    "We deliver Next.js development remotely for clients in Bangladesh and worldwide. Clear milestones, timezone-friendly workflow, and SEO-safe structure for stable growth.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Worldwide Next.js Development Service",
    description:
      "Remote Next.js delivery with clear milestones, timezone-friendly workflow, and SEO-safe implementation.",
    url: PAGE_URL,
    siteName: "Mugnee IT Solutions",
    type: "website",
  },
  robots: { index: true, follow: true },
};

const faqs = [
  {
    q: "Do you work with clients outside Bangladesh?",
    a: "Yes. We deliver Next.js projects for Bangladesh and worldwide clients through a structured remote workflow with clear milestones and regular updates.",
  },
  {
    q: "How do you manage time zone differences?",
    a: "We share a timeline, agree on a communication window, and schedule calls in overlapping hours. Most work is handled asynchronously with weekly checkpoints.",
  },
  {
    q: "Will remote delivery affect quality?",
    a: "No. We follow a documented process—requirements, UI structure, development, QA, deployment, and handover—so delivery stays predictable and consistent.",
  },
  {
    q: "Is this page “location spam” for SEO?",
    a: "No. This page explains remote delivery and workflow. We avoid creating thin “city pages” and keep SEO implementation clean and Google-safe.",
  },
  {
    q: "Do you include SEO and performance setup?",
    a: "Yes. We implement metadata, canonical structure, internal linking, and performance practices (Core Web Vitals) as part of SEO-safe delivery.",
  },
  {
    q: "What do you need to start?",
    a: "Your scope (pages/features), references, deadline, and any content you already have. If you don’t have content, we can guide the structure and sections.",
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
    name: "Worldwide Next.js Development Service",
    serviceType: "Next.js Development",
    provider: { "@type": "Organization", name: "Mugnee IT Solutions", url: SITE_URL },
    areaServed: ["Bangladesh", "Worldwide"],
    url: PAGE_URL,
    description:
      "Remote Next.js development delivery with clear milestones, timezone-friendly workflow, and SEO-safe structure.",
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
      { "@type": "ListItem", position: 2, name: "Services", item: `${SITE_URL}/services/` },
      { "@type": "ListItem", position: 3, name: "Next.js", item: `${SITE_URL}/services/nextjs/` },
      { "@type": "ListItem", position: 4, name: "Worldwide", item: PAGE_URL },
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

export default function NextWorldwidePage() {
  const jsonLd = buildJsonLd();

  return (
    <main className="bg-white">
      {/* ✅ JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* HERO */}
      <section className="relative overflow-hidden pt-24 pb-12 sm:pt-28 sm:pb-16">
        <div className="absolute inset-0">
          <Image
            src="/images/next-hero.webp"
            alt="Worldwide next.js development banner"
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
            <span className="text-yellow-300">Worldwide</span>
          </nav>

          <div className="mt-10 grid gap-10 lg:grid-cols-2 lg:items-center">
            <div className="max-w-2xl">
              <p className="inline-flex items-center gap-2 text-[11px] font-extrabold tracking-[0.22em] text-yellow-200 drop-shadow">
                GLOBAL DELIVERY
                <span className="h-1.5 w-1.5 rounded-full bg-yellow-300" />
                Remote • Reliable • Structured
              </p>

              <h1 className="mt-4 text-4xl font-extrabold leading-tight text-white drop-shadow sm:text-5xl">
                {TARGET_KEYWORD}
              </h1>

              <p className="mt-4 text-base leading-7 text-white/90 drop-shadow sm:text-lg">
                We work with clients in Bangladesh and worldwide using a clear remote process:
                scope → UI structure → development → QA → deployment. The result is a fast,
                SEO-safe Next.js website that can scale long-term.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Link prefetch={false}
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-yellow-400 px-7 py-3.5 text-sm font-extrabold text-slate-900 shadow-[0_18px_55px_rgba(250,204,21,0.22)] transition hover:-translate-y-[1px] hover:bg-yellow-500"
                >
                  Start a Project
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
              <Badge icon={Globe2} title="Worldwide clients" desc="Remote delivery friendly" />
              <Badge icon={MessagesSquare} title="Clear communication" desc="Scope + milestones" />
              <Badge icon={Timer} title="Timezone workflow" desc="Flexible meeting windows" />
              <Badge icon={ShieldCheck} title="SEO-safe delivery" desc="No risky tactics" />
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
      
      {/* WORKFLOW */}
      <section className="mx-auto max-w-6xl px-4 py-14">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-extrabold tracking-[0.25em] text-slate-500">WORKFLOW</p>
            <h2 className="mt-2 text-3xl font-extrabold text-slate-900">
              Remote delivery that stays predictable
            </h2>
            <p className="mt-3 max-w-3xl text-sm text-slate-600 sm:text-base">
              We keep communication simple, track progress with milestones, and deliver clean Next.js code
              with SEO-safe structure—without location-spam pages.
            </p>
          </div>

          <Link prefetch={false}
            href="/contact"
            className="inline-flex w-fit items-center justify-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-extrabold text-white transition hover:bg-slate-800"
          >
            Discuss scope <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          <Card
            title="How we work"
            items={[
              "Requirements & page list",
              "UI structure + section plan",
              "Development + QA",
              "Deploy + handover",
            ]}
          />
          <Card
            title="What you receive"
            items={[
              "SEO-ready structure",
              "Performance strategy (CWV)",
              "Deployment support",
              "Post-launch support",
            ]}
          />
          <Card
            title="Why it’s Google-safe"
            items={[
              "No location spam pages",
              "No keyword stuffing",
              "Schema only when relevant",
              "Clean internal linking",
            ]}
          />
        </div>

        {/* PROCESS STRIP */}
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <MiniStep
            icon={Workflow}
            title="Scope"
            desc="Pages, features, references, goals."
          />
          <MiniStep
            icon={FileText}
            title="Structure"
            desc="Layout, sections, content plan."
          />
          <MiniStep
            icon={Search}
            title="SEO setup"
            desc="Metadata, canonical, links, schema."
          />
          <MiniStep
            icon={BadgeCheck}
            title="Delivery"
            desc="QA, deploy, handover, support."
          />
        </div>

        {/* CTA */}
        <div className="mt-10 rounded-3xl border border-slate-200 bg-slate-50 p-7 shadow-sm">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <div className="text-lg font-extrabold text-slate-900">
                Want to work with us remotely?
              </div>
              <p className="mt-1 text-sm leading-6 text-slate-600">
                Share your scope (pages + features). We’ll reply with timeline and quotation.
              </p>
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
      
      
      {/* INTERNAL LINKS (CLUSTER SUPPORT) */}
      <section className="mx-auto max-w-6xl px-4 pb-14">
        <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
          <div className="flex items-start gap-3">
            <span className="grid h-12 w-12 place-items-center rounded-2xl bg-sky-100">
              <Link2 className="h-6 w-6 text-slate-900" />
            </span>
            <div>
              <div className="text-lg font-extrabold text-slate-900">Related Next.js services</div>
              <p className="mt-1 text-sm leading-6 text-slate-600">
                Internal links help users navigate and help Google understand your service cluster.
              </p>
            </div>
          </div>

          <div className="mt-6 grid gap-3 md:grid-cols-2">
            <SmartLink
              href="/services/nextjs/technical-seo"
              title="Next.js Technical SEO"
              desc="Metadata, canonical, sitemap/robots and schema-safe setup."
            />
            <SmartLink
              href="/services/nextjs/core-web-vitals"
              title="Core Web Vitals Optimization"
              desc="LCP/CLS/INP improvements for faster performance."
            />
            <SmartLink
              href="/services/nextjs/business-website"
              title="Business Website Development"
              desc="Premium corporate layout with trust blocks and lead flow."
            />
            <SmartLink
              href="/services/nextjs"
              title="Next.js Website Development"
              desc="Main Next.js service page with deliverables and process."
            />
          </div>
        </div>
      </section>
      
      
      {/* FAQ */}
      <section className="mx-auto max-w-6xl px-4 pb-14">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-extrabold tracking-[0.25em] text-slate-500">FAQ</p>
            <h2 className="mt-2 text-3xl font-extrabold text-slate-900">
              Questions about remote delivery
            </h2>
          </div>
          <div className="hidden sm:flex items-center gap-2 text-sm font-bold text-slate-600">
            <Quote className="h-4 w-4" /> Clear workflow
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

        <div className="mt-10 rounded-3xl border border-slate-200 bg-slate-50 p-7 shadow-sm">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <div className="text-lg font-extrabold text-slate-900">
                Ready to start a remote Next.js project?
              </div>
              <p className="mt-1 text-sm leading-6 text-slate-600">
                Share your pages + features. We’ll reply with a clear plan and quotation.
              </p>
            </div>

            <Link prefetch={false}
              href="/contact"
              className="group inline-flex w-fit items-center justify-center gap-2 rounded-full bg-yellow-400 px-7 py-3 text-sm font-extrabold text-slate-900 transition hover:-translate-y-[1px] hover:bg-yellow-500"
            >
              Request Quotation
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>
      
    </main>
  );
}

/* UI bits */
function Badge({ icon: Icon, title, desc }: { icon: LucideIcon; title: string; desc: string }) {
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

function Card({ title, items }: { title: string; items: string[] }) {
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

function MiniStep({
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

function SmartLink({
  href,
  title,
  desc,
}: {
  href: string;
  title: string;
  desc: string;
}) {
  return (
    <Link prefetch={false}
      href={href}
      className="group rounded-2xl border border-slate-200 bg-slate-50 p-4 transition hover:bg-white"
    >
      <div className="flex items-center justify-between">
        <div className="text-sm font-extrabold text-slate-900">{title}</div>
        <ArrowRight className="h-4 w-4 text-slate-400 transition group-hover:translate-x-1" />
      </div>
      <p className="mt-1 text-sm text-slate-600">{desc}</p>
    </Link>
  );
}









