import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import type { LucideIcon } from "lucide-react";
import { ArrowRight, CheckCircle2, Globe2, Lock, Search, Headphones, ClipboardList } from "lucide-react";
import {
  ServiceCustomerGuide,
  ServiceFlowStrip,
  ServiceQuickSummary,
  ServiceUseCasesGrid,
} from "@/components/sections/ServiceVisualBlocks";

type FAQ = { q: string; a: string };

export type WixServiceConfig = {
  siteUrl: string;
  pagePath: string;

  metaTitle: string;
  ogTitle: string;
  metaDescription: string;

  heroTitle: string;
  heroSubtitle: string;
  heroImage: string;

  breadcrumbName: string;
  targetKeyword: string;

  highlights: string[];
  deliverables: { icon: LucideIcon; title: string; items: string[] }[];
  panels?: { icon: LucideIcon; title: string; desc: string; bullets: string[] }[];

  processSteps: { title: string; items: string[] }[];
  faqs: FAQ[];
  intentSections?: { title: string; desc: string; bullets: string[] }[];

  backToPillarHref?: string;
  relatedLinks?: { href: string; label: string }[];
};

function buildJsonLd(cfg: WixServiceConfig) {
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
  };

  const breadcrumb = {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${cfg.siteUrl}/` },
      { "@type": "ListItem", position: 2, name: "Services", item: `${cfg.siteUrl}/services/` },
      { "@type": "ListItem", position: 3, name: "Wix", item: `${cfg.siteUrl}/services/wix/` },
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

export function buildMetadata(cfg: WixServiceConfig): Metadata {
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

export default function WixServiceTemplate({ cfg }: { cfg: WixServiceConfig }) {
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="h-16 sm:h-20" aria-hidden="true" />

      {/* HERO */}
      <section className="relative isolate overflow-hidden min-h-[420px] sm:min-h-[520px] bg-slate-950">
        <div className="absolute inset-0 z-0">
          <Image
            src={cfg.heroImage}
            alt={cfg.targetKeyword}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>

        <div className="pointer-events-none absolute inset-0 z-10">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/55 via-slate-950/25 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/35" />
          <div className="absolute inset-0 opacity-[0.05] [background:radial-gradient(circle_at_1px_1px,rgba(255,255,255,.35)_1px,transparent_0)] [background-size:18px_18px]" />
        </div>

        <div className="relative z-20 mx-auto max-w-6xl px-4 py-16 sm:py-20">
          <nav className="text-[11px] font-bold text-white/70">
            <Link prefetch={false} href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link prefetch={false} href="/services" className="hover:text-white">Services</Link>
            <span className="mx-2">/</span>
            <Link prefetch={false} href="/services/wix" className="hover:text-white">Wix</Link>
            <span className="mx-2">/</span>
            <span className="text-white">{cfg.breadcrumbName}</span>
          </nav>

          <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[11px] font-extrabold text-white backdrop-blur">
            <span className="grid h-6 w-6 place-items-center rounded-full bg-yellow-400 text-slate-900">?</span>
            Premium | SEO Setup | Mobile-first
            <span className="hidden sm:inline text-white/50">|</span>
            <span className="text-white/80">Worldwide Delivery</span>
          </div>

          <h1 className="mt-6 max-w-3xl text-3xl font-extrabold leading-[1.08] text-white sm:text-5xl">
            {cfg.heroTitle}{" "}
            <span className="bg-gradient-to-r from-yellow-200 via-white to-white bg-clip-text text-transparent">
              — {cfg.breadcrumbName}
            </span>
          </h1>

          <p className="mt-4 max-w-2xl text-[15px] leading-7 text-white/80">{cfg.heroSubtitle}</p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <a
              href="/contact/"
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-yellow-400 px-6 py-3 text-sm font-extrabold text-slate-900 shadow-[0_10px_30px_rgba(0,0,0,.2)] transition hover:-translate-y-[1px] hover:bg-yellow-500"
            >
              Get a Quote <ArrowRight className="h-4 w-4" />
            </a>

            {cfg.backToPillarHref ? (
              <a
                href={cfg.backToPillarHref}
                className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/10 px-6 py-3 text-sm font-extrabold text-white/90 backdrop-blur transition hover:bg-white/15"
              >
                Back to Wix Service
              </a>
            ) : null}
          </div>

          <div className="mt-8 flex flex-wrap gap-2 text-xs font-extrabold text-white/85">
            {cfg.highlights.map((x) => (
              <span key={x} className="rounded-full border border-white/15 bg-white/10 px-3 py-2">{x}</span>
            ))}
          </div>
        </div>
      </section>

      <ServiceCustomerGuide pillar="wix" contextLabel={cfg.breadcrumbName} />

      <ServiceQuickSummary
        title={`${cfg.breadcrumbName} in one quick view`}
        intro="These visual cards reduce the wall-of-text feeling and help visitors understand what is included right away."
        items={summaryCards}
      />

      <ServiceUseCasesGrid
        title={`Where ${cfg.breadcrumbName.toLowerCase()} helps most`}
        intro="A friendlier layout for common business scenarios, expectations, and scope."
        items={useCaseCards}
      />

      <ServiceFlowStrip
        title={`${cfg.breadcrumbName} launch path`}
        intro="A short step-by-step strip clarifies how the work moves from planning to final handover."
        steps={flowSteps}
      />

      <section className="mx-auto max-w-6xl px-4 py-12">
        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
          <p className="text-xs font-extrabold tracking-[0.24em] text-slate-500">SERVICE SOLUTION</p>
          <h2 className="mt-2 text-2xl font-extrabold text-slate-900 sm:text-3xl">
            {cfg.targetKeyword} solutions
          </h2>
          <p className="mt-2 text-sm leading-7 text-slate-600">
            Execution focused on business goals, clean UX, and SEO-safe implementation.
          </p>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {[
              `Tailored ${cfg.targetKeyword} roadmap`,
              "Clear scope, timeline, and deliverables",
              "Google-safe structure and content setup",
              "Reliable support after launch",
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
              `Business-focused ${cfg.targetKeyword} delivery`,
              "Clean UX flow with mobile-first structure",
              "SEO-safe setup and technical foundation",
              "Post-launch support for stable growth",
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
              `${cfg.targetKeyword}: balanced speed, design quality, and business readiness`,
              "DIY builders: low cost start, but structure and SEO setup may remain limited",
              "Template-only delivery: quick launch, but less brand differentiation",
              "Managed service approach: stronger process, QA, and post-launch guidance",
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

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {cfg.deliverables.map((d) => (
            <InfoCard key={d.title} icon={d.icon} title={d.title} items={d.items} />
          ))}
        </div>

        {cfg.panels?.length ? (
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {cfg.panels.map((p) => (
              <SoftPanel key={p.title} icon={p.icon} title={p.title} desc={p.desc} bullets={p.bullets} />
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
              <InfoCard key={s.title} icon={ClipboardList} title={s.title} items={s.items} />
            ))}
          </div>

          {cfg.relatedLinks?.length ? (
            <div className="mt-10 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="text-sm font-extrabold text-slate-900">Related Wix services</div>
              <p className="mt-1 text-sm text-slate-600">Build topical authority with internal linking.</p>
              <div className="mt-4 flex flex-wrap gap-2 text-xs font-extrabold">
                {cfg.relatedLinks.map((c) => (
                  <Link prefetch={false} key={c.href} href={c.href} className="rounded-full border border-slate-200 bg-slate-50 px-3 py-2 hover:bg-white">
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
          {cfg.targetKeyword} for clear ranking intent
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
          Questions here are tailored to <strong>{cfg.breadcrumbName}</strong> goals so this page
          avoids thin or duplicated FAQ content.
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
              <p className="mt-2 text-sm text-white/80">Share requirements—our team will reply with scope, timeline & quotation.</p>

              <div className="mt-4 flex flex-wrap gap-2">
                <DarkChip icon={Search} text="SEO setup" />
                <DarkChip icon={Lock} text="Secure" />
                <DarkChip icon={Headphones} text="Support" />
                <DarkChip icon={Globe2} text="Worldwide" />
              </div>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <a href="/contact/" className="inline-flex items-center justify-center gap-2 rounded-2xl bg-yellow-400 px-6 py-3 text-sm font-extrabold text-slate-900 transition hover:bg-yellow-500">
                Request Quotation <ArrowRight className="h-4 w-4" />
              </a>
              <Link prefetch={false} href="/services/wix" className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/20 bg-white/10 px-6 py-3 text-sm font-extrabold text-white transition hover:bg-white/15">
                Wix main service <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function buildDefaultIntentSections(cfg: WixServiceConfig) {
  const useCases = cfg.panels?.flatMap((p) => p.bullets).slice(0, 4) ?? cfg.highlights.slice(0, 4);
  const outcomes = cfg.deliverables.map((d) => d.title).slice(0, 4);
  const process = cfg.processSteps.map((s) => s.title).slice(0, 3);

  return [
    {
      title: `Who this ${cfg.breadcrumbName} service is for`,
      desc: "Useful for businesses that need a focused Wix setup with practical SEO and UX outcomes.",
      bullets: useCases.length ? useCases : cfg.highlights,
    },
    {
      title: "Expected outcomes",
      desc: "We focus on crawl clarity, conversion flow, and stable page structure.",
      bullets: outcomes.length ? outcomes : cfg.highlights,
    },
    {
      title: "How delivery runs",
      desc: "Work follows a clear sequence to keep implementation safe and measurable.",
      bullets: process.length ? process : ["Audit", "Implementation", "Review and handover"],
    },
  ];
}

/* helpers */
function InfoCard({ icon: Icon, title, items }: { icon: LucideIcon; title: string; items: string[] }) {
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

function SoftPanel({ icon: Icon, title, desc, bullets }: { icon: LucideIcon; title: string; desc: string; bullets: string[] }) {
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


