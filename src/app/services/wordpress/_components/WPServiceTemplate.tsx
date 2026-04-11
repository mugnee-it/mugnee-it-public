// src/app/services/wordpress/_components/WPServiceTemplate.tsx
import Link from "next/link";
import type { Metadata } from "next";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  CheckCircle2,
  Search,
  Lock,
  Headphones,
  Globe2,
  ClipboardList, // âœ… added
} from "lucide-react";
import {
  ServiceCustomerGuide,
  ServiceFlowStrip,
  ServiceQuickSummary,
  ServiceUseCasesGrid,
} from "@/components/sections/ServiceVisualBlocks";

type FAQ = { q: string; a: string };

export type WPServiceConfig = {
  siteUrl: string;
  pagePath: string;
  metaTitle: string;
  ogTitle: string;
  metaDescription: string;
  heroTitle: string;
  heroSubtitle: string;
  heroImage: string;
  breadcrumbName: string; // e.g. "WooCommerce"
  targetKeyword: string;

  highlights: string[]; // hero pills
  deliverables: { icon: LucideIcon; title: string; items: string[] }[];
  panels?: { icon: LucideIcon; title: string; desc: string; bullets: string[] }[];

  processSteps: { title: string; items: string[] }[];
  faqs: FAQ[];
  intentSections?: { title: string; desc: string; bullets: string[] }[];

  // internal links
  backToPillarHref?: string;
  relatedLinks?: { href: string; label: string }[];
};

function buildJsonLd(cfg: WPServiceConfig) {
  const PAGE_URL = `${cfg.siteUrl}${cfg.pagePath}`;

  const organization = {
    "@type": "Organization",
    name: "Mugnee IT Solutions",
    url: cfg.siteUrl,
    logo: `${cfg.siteUrl}/logo.png`,
  };

  const webpage = {
    "@type": "WebPage",
    name: cfg.metaTitle,
    url: PAGE_URL,
    description: cfg.metaDescription,
    isPartOf: { "@type": "WebSite", name: "Mugnee IT Solutions", url: cfg.siteUrl },
  };

  const service = {
    "@type": "Service",
    name: cfg.heroTitle,
    serviceType: cfg.targetKeyword,
    provider: { "@type": "Organization", name: "Mugnee IT Solutions", url: cfg.siteUrl },
    areaServed: ["Bangladesh", "Worldwide"],
    url: PAGE_URL,
    description: cfg.metaDescription,
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceCurrency: "BDT",
      price: "0",
      description:
        "Quotation-based pricing. Share requirements to receive a custom scope, timeline, and quote.",
    },
  };

  const breadcrumb = {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${cfg.siteUrl}/` },
      { "@type": "ListItem", position: 2, name: "Services", item: `${cfg.siteUrl}/services/` },
      { "@type": "ListItem", position: 3, name: "WordPress", item: `${cfg.siteUrl}/services/wordpress/` },
      { "@type": "ListItem", position: 4, name: cfg.breadcrumbName, item: PAGE_URL },
    ],
  };

  const faq = {
    "@type": "FAQPage",
    mainEntity: cfg.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return {
    "@context": "https://schema.org",
    "@graph": [organization, webpage, service, breadcrumb, faq],
  };
}

export function buildMetadata(cfg: WPServiceConfig): Metadata {
  const PAGE_URL = `${cfg.siteUrl}${cfg.pagePath}`;
  return {
    title: cfg.metaTitle,
    description: cfg.metaDescription,
    alternates: { canonical: PAGE_URL },
    openGraph: {
      title: cfg.ogTitle,
      description: cfg.metaDescription,
      url: PAGE_URL,
      siteName: "Mugnee IT Solutions",
      type: "website",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
  };
}

export default function WPServiceTemplate({ cfg }: { cfg: WPServiceConfig }) {
  const jsonLd = buildJsonLd(cfg);
  const intentSections =
    cfg.intentSections && cfg.intentSections.length
      ? cfg.intentSections
      : buildDefaultIntentSections(cfg);
  const summaryCards = cfg.deliverables.slice(0, 4).map((item) => ({
    icon: item.icon,
    title: item.title,
    desc: item.items[0] ?? `Structured ${cfg.targetKeyword} delivery.`,
    pills: item.items.slice(0, 3),
  }));
  const useCaseCards = intentSections.slice(0, 3).map((section) => ({
    icon: Globe2,
    title: section.title,
    desc: section.desc,
    pills: section.bullets.slice(0, 3),
  }));
  const flowSteps = cfg.processSteps.slice(0, 4).map((step) => ({
    icon: ClipboardList,
    title: step.title,
    desc: step.items.join(", "),
  }));

  return (
    <main className="bg-white text-slate-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="h-16 sm:h-20" aria-hidden="true" />

      {/* HERO */}
      <section className="relative overflow-hidden bg-slate-950 pb-12 pt-24 sm:pb-16 sm:pt-28">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(90%_120%_at_10%_20%,rgba(250,204,21,0.22),transparent_45%),radial-gradient(70%_80%_at_85%_25%,rgba(232,121,249,0.16),transparent_48%),linear-gradient(120deg,#020617_0%,#111827_48%,#1e1b4b_100%)]" />
          <div className="absolute inset-0 opacity-[0.12] [background:radial-gradient(circle_at_1px_1px,rgba(255,255,255,.45)_1px,transparent_0)] [background-size:20px_20px]" />
          <div className="pointer-events-none absolute -left-12 top-16 h-56 w-56 rounded-full bg-yellow-300/15 blur-3xl" />
          <div className="pointer-events-none absolute right-0 top-24 h-64 w-64 rounded-full bg-fuchsia-300/15 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-6xl px-4">
          <nav className="text-xs font-bold text-white/85 drop-shadow">
            <Link prefetch={false} href="/" className="hover:text-white">
              Home
            </Link>
            <span className="mx-2 text-white/60">/</span>
            <Link prefetch={false} href="/services" className="hover:text-white">
              Services
            </Link>
            <span className="mx-2 text-white/60">/</span>
            <Link prefetch={false} href="/services/wordpress" className="hover:text-white">
              WordPress
            </Link>
            <span className="mx-2 text-white/60">/</span>
            <span className="text-yellow-300">{cfg.breadcrumbName}</span>
          </nav>

          <div className="mt-10 grid gap-10 lg:grid-cols-[1.1fr_.9fr] lg:items-center">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[11px] font-extrabold tracking-[0.18em] text-white backdrop-blur">
                WORDPRESS SERVICE
              </p>

              <h1 className="mt-4 text-4xl font-extrabold leading-tight text-white sm:text-5xl">
                {cfg.heroTitle}
                <span className="text-yellow-300"> for Business Growth</span>
              </h1>

              <p className="mt-4 max-w-2xl text-base leading-7 text-white/90 sm:text-lg">
                {cfg.heroSubtitle}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {cfg.highlights.slice(0, 6).map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] font-extrabold text-white backdrop-blur"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href="/contact/"
                  className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-yellow-400 px-7 py-3.5 text-sm font-extrabold text-slate-900 shadow-[0_10px_30px_rgba(0,0,0,.25)] transition hover:-translate-y-[1px] hover:bg-yellow-500"
                >
                  Get Quote
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </a>
                {cfg.backToPillarHref ? (
                  <a
                    href={cfg.backToPillarHref}
                    className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/20 bg-white/10 px-7 py-3.5 text-sm font-extrabold text-white backdrop-blur transition hover:bg-white/15"
                  >
                    Back to WordPress
                  </a>
                ) : null}
              </div>

              <div className="mt-7 grid gap-2 text-sm font-bold text-white/90 sm:grid-cols-2">
                {cfg.highlights.slice(0, 4).map((point) => (
                  <span key={point} className="inline-flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-emerald-400" />
                    {point}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid gap-4">
              <div className="rounded-3xl border border-white/20 bg-white/10 p-6 backdrop-blur">
                <div className="text-sm font-extrabold uppercase tracking-widest text-white/90">
                  WordPress Coverage
                </div>
                <div className="mt-4 space-y-3 text-sm text-white/90">
                  {cfg.deliverables.slice(0, 4).map((d) => (
                    <div key={d.title} className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 rounded-full bg-yellow-300" />
                      <span>{d.title}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ServiceCustomerGuide pillar="wordpress" contextLabel={cfg.breadcrumbName} />

      <ServiceQuickSummary
        title={`${cfg.breadcrumbName} at a glance`}
        intro="A faster visual breakdown so visitors can understand scope, outputs, and value before reading longer sections."
        items={summaryCards}
      />

      <ServiceUseCasesGrid
        title={`Who this ${cfg.breadcrumbName.toLowerCase()} service fits best`}
        intro="These cards make the page easier to scan for business goals, common use cases, and expected outcomes."
        items={useCaseCards}
      />

      <ServiceFlowStrip
        title={`Simple ${cfg.breadcrumbName.toLowerCase()} workflow`}
        intro="A compact flow helps visitors understand what happens first, what comes next, and how delivery stays organized."
        steps={flowSteps}
      />

      <section className="mx-auto max-w-6xl px-4 py-12">
        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
          <p className="text-xs font-extrabold tracking-[0.24em] text-slate-500">SERVICE SOLUTION</p>
          <h2 className="mt-2 text-2xl font-extrabold text-slate-900 sm:text-3xl">
            {cfg.targetKeyword} solutions
          </h2>
          <p className="mt-2 text-sm leading-7 text-slate-600">
            Practical WordPress execution based on your growth goals, timeline, and support needs.
          </p>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {[
              `Tailored ${cfg.targetKeyword} roadmap`,
              "Clear scope, delivery plan, and milestones",
              "Google-safe implementation with clean structure",
              "Post-launch support and optimization guidance",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-slate-200 bg-white p-4 text-sm font-semibold text-slate-700"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-12">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">
          <p className="text-xs font-extrabold tracking-[0.24em] text-slate-500">SERVICE BENEFITS</p>
          <h2 className="mt-2 text-2xl font-extrabold text-slate-900 sm:text-3xl">
            {cfg.targetKeyword} benefits
          </h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {[
              `Structured ${cfg.targetKeyword} execution`,
              "SEO-friendly architecture and clean content hierarchy",
              "Security and performance best-practice implementation",
              "Reliable support after launch and handover",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm font-semibold text-slate-700"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-12">
        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
          <p className="text-xs font-extrabold tracking-[0.24em] text-slate-500">SERVICE COMPARISON</p>
          <h2 className="mt-2 text-2xl font-extrabold text-slate-900 sm:text-3xl">
            {cfg.targetKeyword} vs other options
          </h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {[
              `${cfg.targetKeyword}: strong flexibility for content, SEO, and business pages`,
              "Page builders only: faster edits, but performance/control can drop in complex sites",
              "Cheap one-time setups: low upfront cost, often weak long-term maintainability",
              "Managed WordPress service: better stability, security, and support continuity",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-slate-200 bg-white p-4 text-sm font-semibold text-slate-700"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DELIVERABLES */}
      <section className="mx-auto max-w-6xl px-4 py-14">
        <p className="text-xs font-extrabold tracking-[0.28em] text-slate-500">DELIVERABLES</p>

        <h2 className="mt-2 text-3xl font-extrabold">{cfg.targetKeyword} deliverables</h2>

        <p className="mt-2 max-w-3xl text-sm leading-7 text-slate-600">
          This page focuses on <strong>{cfg.targetKeyword}</strong> onlyâ€”clear scope, clean process,
          and business-first outcomes (Bangladesh + worldwide).
        </p>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {cfg.deliverables.map((d) => (
            <InfoCard key={d.title} icon={d.icon} title={d.title} items={d.items} />
          ))}
        </div>

        {cfg.panels?.length ? (
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {cfg.panels.map((p) => (
              <SoftPanel
                key={p.title}
                icon={p.icon}
                title={p.title}
                desc={p.desc}
                bullets={p.bullets}
              />
            ))}
          </div>
        ) : null}
      </section>

      {/* PROCESS */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <p className="text-xs font-extrabold tracking-[0.28em] text-slate-500">PROCESS</p>

          <h2 className="mt-2 text-3xl font-extrabold">How we deliver {cfg.targetKeyword}</h2>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {cfg.processSteps.map((s) => (
              <InfoCard
                key={s.title}
                icon={ClipboardList} // âœ… fixed: lucide icon
                title={s.title}
                items={s.items}
              />
            ))}
          </div>

          <div className="mt-10 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-start gap-3">
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-slate-900">
                <Globe2 className="h-6 w-6 text-white" />
              </div>
              <div className="min-w-0">
                <div className="text-sm font-extrabold text-slate-900">Bangladesh + Worldwide delivery</div>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  We deliver remotely for USA/UK/Europe clients too (timezone-friendly communication,
                  clear milestones, and clean handover).
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <DarkChip icon={Search} text="SEO-ready" />
                  <DarkChip icon={Lock} text="Secure" />
                  <DarkChip icon={Headphones} text="Support" />
                </div>
              </div>
            </div>
          </div>

          {cfg.relatedLinks?.length ? (
            <div className="mt-10 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="text-sm font-extrabold text-slate-900">Related WordPress services</div>
              <p className="mt-1 text-sm text-slate-600">
                Explore supporting services to build topical authority (better SEO).
              </p>

              <div className="mt-4 flex flex-wrap gap-2 text-xs font-extrabold">
                {cfg.relatedLinks.map((c) => (
                  <Link prefetch={false}
                    key={c.href}
                    href={c.href}
                    className="rounded-full border border-slate-200 bg-slate-50 px-3 py-2 hover:bg-white"
                  >
                    {c.label}
                  </Link>
                ))}
              </div>
            </div>
          ) : null}
        </div>
      </section>

      {/* INTENT DEPTH */}
      <section className="mx-auto max-w-6xl px-4 py-14">
        <p className="text-xs font-extrabold tracking-[0.28em] text-slate-500">SERVICE FIT</p>
        <h2 className="mt-2 text-3xl font-extrabold">
          {cfg.targetKeyword} for specific business intent
        </h2>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {intentSections.map((section) => (
            <div key={section.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="text-sm font-extrabold text-slate-900">{section.title}</div>
              <p className="mt-2 text-sm leading-7 text-slate-600">{section.desc}</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-700">
                {section.bullets.map((point) => (
                  <li key={point} className="flex items-start gap-2">
                    <CheckCircle2 className="mt-1 h-4 w-4 text-emerald-600" />
                    <span className="leading-7">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ + CTA */}
      <section className="mx-auto max-w-6xl px-4 py-14">
        <p className="text-xs font-extrabold tracking-[0.28em] text-slate-500">FAQ</p>

        <h2 className="mt-2 text-3xl font-extrabold">{cfg.targetKeyword} FAQs</h2>
        <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600">
          FAQ answers on this page are written for <strong>{cfg.breadcrumbName}</strong> intent,
          not copied from generic service pages.
        </p>

        <div className="mt-10 grid gap-4 lg:grid-cols-2">
          {cfg.faqs.map((f) => (
            <details key={f.q} className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <summary className="cursor-pointer list-none text-sm font-extrabold text-slate-900">
                {f.q}
                <span className="float-right text-slate-400 transition group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 text-sm leading-7 text-slate-600">{f.a}</p>
            </details>
          ))}
        </div>

        <div className="mt-12 overflow-hidden rounded-3xl border border-slate-200 bg-slate-900 p-6 sm:p-10">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="min-w-0">
              <div className="text-xl font-extrabold text-white">Need {cfg.targetKeyword}?</div>
              <p className="mt-2 text-sm text-white/80">
                Share requirementsâ€”our team will reply with scope, timeline & quotation.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href="/contact/"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-yellow-400 px-6 py-3 text-sm font-extrabold text-slate-900 transition hover:bg-yellow-500"
              >
                Request Quotation <ArrowRight className="h-4 w-4" />
              </a>
              <Link prefetch={false}
                href="/services/wordpress"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/20 bg-white/10 px-6 py-3 text-sm font-extrabold text-white transition hover:bg-white/15"
              >
                WordPress main service <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>

        <p className="sr-only">
          {cfg.targetKeyword} by Mugnee IT Solutions â€” Bangladesh and worldwide delivery, SEO-ready structure, clean
          scope, and professional support.
        </p>
      </section>
    </main>
  );
}

function buildDefaultIntentSections(cfg: WPServiceConfig) {
  const useCases = cfg.panels?.flatMap((p) => p.bullets).slice(0, 4) ?? cfg.highlights.slice(0, 4);
  const outcomes = cfg.deliverables.map((d) => d.title).slice(0, 4);
  const process = cfg.processSteps.map((s) => s.title).slice(0, 3);

  return [
    {
      title: `Who this ${cfg.breadcrumbName} service is for`,
      desc: "Built for businesses that need clear scope and production-ready WordPress delivery.",
      bullets: useCases.length ? useCases : cfg.highlights,
    },
    {
      title: "What you can expect",
      desc: "Work is delivered with SEO structure, performance checks, and clean handover.",
      bullets: outcomes.length ? outcomes : cfg.highlights,
    },
    {
      title: "How delivery happens",
      desc: "Execution follows a practical sequence so changes remain stable and testable.",
      bullets: process.length ? process : ["Planning", "Build and optimization", "QA and handover"],
    },
  ];
}

/* ========= small UI helpers ========= */

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
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex items-start gap-3">
        <div className="grid h-12 w-12 place-items-center rounded-2xl bg-slate-900">
          <Icon className="h-6 w-6 text-white" />
        </div>
        <div className="min-w-0">
          <div className="text-sm font-extrabold text-slate-900">{title}</div>
          <ul className="mt-3 space-y-2 text-sm text-slate-700">
            {items.map((x) => (
              <li key={x} className="flex items-start gap-2">
                <CheckCircle2 className="mt-1 h-4 w-4 text-emerald-600" />
                <span className="leading-7">{x}</span>
              </li>
            ))}
          </ul>
        </div>
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
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex items-start gap-3">
        <div className="grid h-12 w-12 place-items-center rounded-2xl bg-slate-900">
          <Icon className="h-6 w-6 text-white" />
        </div>
        <div className="min-w-0">
          <div className="text-sm font-extrabold text-slate-900">{title}</div>
          <p className="mt-2 text-sm leading-7 text-slate-600">{desc}</p>

          <ul className="mt-4 space-y-2 text-sm text-slate-700">
            {bullets.map((x) => (
              <li key={x} className="flex items-start gap-2">
                <CheckCircle2 className="mt-1 h-4 w-4 text-emerald-600" />
                <span className="leading-7">{x}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function DarkChip({ icon: Icon, text }: { icon: LucideIcon; text: string }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-extrabold text-white">
      <Icon className="h-3.5 w-3.5 text-white" />
      {text}
    </span>
  );
}

