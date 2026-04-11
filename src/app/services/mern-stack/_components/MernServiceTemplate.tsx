import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { ArrowRight, CheckCircle2, MessageCircle, PhoneCall, Link2 } from "lucide-react";
import {
  ServiceCustomerGuide,
  ServiceFlowStrip,
  ServiceQuickSummary,
  ServiceUseCasesGrid,
} from "@/components/sections/ServiceVisualBlocks";

export type MernFaq = { q: string; a: string };

export type MernPanel = {
  icon: LucideIcon;
  title: string;
  desc: string;
  bullets: string[];
};

export type MernDeliverable = {
  icon: LucideIcon;
  title: string;
  items: string[];
};

export type MernStep = { title: string; items: string[] };

export type MernServiceConfig = {
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
  deliverables: MernDeliverable[];
  panels?: MernPanel[];
  processSteps: MernStep[];

  faqs: MernFaq[];
  intentSections?: {
    title: string;
    desc: string;
    bullets: string[];
  }[];

  backToPillarHref: string;
  relatedLinks?: { href: string; label: string }[];
};

export function buildMetadata(cfg: MernServiceConfig): Metadata {
  const pageUrl = `${cfg.siteUrl}${cfg.pagePath}`;
  return {
    metadataBase: new URL(cfg.siteUrl),
    title: cfg.metaTitle,
    description: cfg.metaDescription,
    alternates: { canonical: pageUrl },
    openGraph: {
      title: cfg.ogTitle,
      description: cfg.metaDescription,
      url: pageUrl,
      siteName: "Mugnee IT Solutions",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: cfg.ogTitle,
      description: cfg.metaDescription,
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

function buildJsonLd(cfg: MernServiceConfig) {
  const pageUrl = `${cfg.siteUrl}${cfg.pagePath}`;

  const organization = {
    "@type": "Organization",
    name: "Mugnee IT Solutions",
    url: cfg.siteUrl,
    logo: `${cfg.siteUrl}/logo.png`,
  };

  const website = {
    "@type": "WebSite",
    name: "Mugnee IT Solutions",
    url: cfg.siteUrl,
  };

  const webpage = {
    "@type": "WebPage",
    name: cfg.metaTitle,
    url: pageUrl,
    description: cfg.metaDescription,
    isPartOf: { "@type": "WebSite", name: "Mugnee IT Solutions", url: cfg.siteUrl },
  };

  const service = {
    "@type": "Service",
    name: cfg.heroTitle,
    serviceType: cfg.targetKeyword,
    provider: { "@type": "Organization", name: "Mugnee IT Solutions", url: cfg.siteUrl },
    areaServed: ["Bangladesh", "Worldwide"],
    url: pageUrl,
    description: cfg.metaDescription,
  };

  const breadcrumb = {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${cfg.siteUrl}/` },
      { "@type": "ListItem", position: 2, name: "Services", item: `${cfg.siteUrl}/services/` },
      { "@type": "ListItem", position: 3, name: "MERN Stack Development", item: `${cfg.siteUrl}/services/mern-stack/` },
      { "@type": "ListItem", position: 4, name: cfg.breadcrumbName, item: pageUrl },
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
    "@graph": [organization, website, webpage, service, breadcrumb, faq],
  };
}

export default function MernServiceTemplate({ cfg }: { cfg: MernServiceConfig }) {
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
    icon: Link2,
    title: section.title,
    desc: section.desc,
    pills: section.bullets.slice(0, 3),
  }));
  const flowSteps = cfg.processSteps.slice(0, 4).map((step) => ({
    title: step.title,
    desc: step.items.join(", "),
  }));

  const tel = "tel:+8801958645415";
  const wa = "https://wa.me/8801958645415";

  return (
    <main className="bg-white text-slate-900">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="h-16 sm:h-20" aria-hidden="true" />

      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-slate-950">
        <div className="absolute inset-0">
          <Image
            src={cfg.heroImage}
            alt={`${cfg.heroTitle} background`}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-950/55 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/40" />
          <div className="absolute inset-0 opacity-[0.10] [background:radial-gradient(circle_at_1px_1px,rgba(255,255,255,.22)_1px,transparent_0)] [background-size:22px_22px]" />
        </div>

        <div className="relative mx-auto max-w-6xl px-4 py-14 sm:py-16">
          <nav className="text-[11px] font-bold text-white/75">
            <Link prefetch={false} href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link prefetch={false} href="/services" className="hover:text-white">Services</Link>
            <span className="mx-2">/</span>
            <Link prefetch={false} href="/services/mern-stack" className="hover:text-white">MERN</Link>
            <span className="mx-2">/</span>
            <span className="text-white">{cfg.breadcrumbName}</span>
          </nav>

          <div className="mt-6 inline-flex flex-wrap items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[11px] font-extrabold text-white backdrop-blur">
            <span className="grid h-6 w-6 place-items-center rounded-full bg-yellow-400 text-slate-900">⚡</span>
            {cfg.targetKeyword}
          </div>

          <div className="mt-8 grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <h1 className="text-4xl font-extrabold leading-[1.05] text-white sm:text-5xl">
                {cfg.heroTitle}
              </h1>

              <p className="mt-4 max-w-xl text-[15px] leading-7 text-white/80">
                {cfg.heroSubtitle}
              </p>

              <div className="mt-5 flex flex-wrap gap-2 text-xs font-extrabold text-white/85">
                {cfg.highlights.map((x) => (
                  <span key={x} className="rounded-full border border-white/15 bg-white/10 px-3 py-2 backdrop-blur">
                    {x}
                  </span>
                ))}
              </div>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <a
                  href="/contact/"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-yellow-400 px-6 py-3 text-sm font-extrabold text-slate-900 shadow-[0_10px_30px_rgba(0,0,0,.25)] transition hover:-translate-y-[1px] hover:bg-yellow-500"
                >
                  Request Quotation <ArrowRight className="h-4 w-4" />
                </a>

                <a
                  href={wa}
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/20 bg-white/10 px-6 py-3 text-sm font-extrabold text-white backdrop-blur transition hover:bg-white/15"
                >
                  WhatsApp <MessageCircle className="h-4 w-4" />
                </a>

                <a
                  href={tel}
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/20 bg-white/10 px-6 py-3 text-sm font-extrabold text-white backdrop-blur transition hover:bg-white/15"
                >
                  Call <PhoneCall className="h-4 w-4" />
                </a>
              </div>

              <p className="mt-7 text-xs font-semibold text-white/70">
                Bangladesh + Worldwide delivery | Clean scope | Production-ready handover
              </p>
            </div>

            <div className="rounded-[28px] border border-white/15 bg-white/5 p-6 shadow-[0_30px_90px_rgba(0,0,0,0.35)] backdrop-blur">
              <div className="text-sm font-extrabold text-white">Deliverables</div>
              <div className="mt-5 grid gap-4">
                {cfg.deliverables.map((d) => (
                  <div key={d.title} className="flex items-start gap-3">
                    <div className="grid h-10 w-10 place-items-center rounded-2xl bg-white/10 text-white">
                      <d.icon className="h-5 w-5" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-sm font-extrabold text-white">{d.title}</div>
                      <ul className="mt-2 space-y-1 text-xs text-white/75">
                        {d.items.map((it) => (
                          <li key={it} className="flex items-start gap-2">
                            <span className="mt-2 h-2 w-2 rounded-full bg-yellow-300" />
                            <span className="leading-6">{it}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

        <div className="mx-auto max-w-6xl px-4">
          <div className="h-px w-full bg-white/10" />
        </div>
      </section>

      <ServiceCustomerGuide pillar="mern" contextLabel={cfg.breadcrumbName} />

      <ServiceQuickSummary
        title={`${cfg.breadcrumbName} project snapshot`}
        intro="This quick visual layer gives visitors the scope, stack focus, and delivery shape before they move into the longer content."
        items={summaryCards}
      />

      <ServiceUseCasesGrid
        title={`Best-fit use cases for ${cfg.breadcrumbName}`}
        intro="Instead of long paragraphs only, these blocks highlight the common business situations this service is built for."
        items={useCaseCards}
      />

      <ServiceFlowStrip
        title={`${cfg.breadcrumbName} delivery flow`}
        intro="A short process strip helps users understand how the project moves from planning to launch."
        steps={flowSteps}
      />

      <section className="mx-auto max-w-6xl px-4 py-12">
        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
          <p className="text-xs font-extrabold tracking-[0.24em] text-slate-500">SERVICE SOLUTION</p>
          <h2 className="mt-2 text-2xl font-extrabold text-slate-900 sm:text-3xl">
            {cfg.targetKeyword} solutions
          </h2>
          <p className="mt-2 text-sm leading-7 text-slate-600">
            Practical execution based on your product goals, timeline, and long-term maintainability.
          </p>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {[
              `Tailored ${cfg.targetKeyword} roadmap`,
              "Clear scope, milestones, and delivery flow",
              "Google-safe technical implementation",
              "Post-launch support and guidance",
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
              `Faster delivery with clear ${cfg.targetKeyword} scope`,
              "Production-ready architecture and clean handover",
              "Secure auth and scalable backend planning",
              "Long-term support with structured improvement roadmap",
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
              `${cfg.targetKeyword}: custom architecture and long-term scalability`,
              "No-code alternatives: faster start but limited flexibility for complex logic",
              "Freelance-only delivery: can work for small tasks, but process consistency varies",
              "Agency-led execution: clearer scope, QA flow, and post-launch support",
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

      {/* PANELS (optional) */}
      {cfg.panels?.length ? (
        <section className="mx-auto max-w-6xl px-4 py-14">
          <p className="text-xs font-extrabold tracking-[0.28em] text-slate-500">DETAILS</p>
          <h2 className="mt-2 text-3xl font-extrabold">{cfg.targetKeyword} overview</h2>
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {cfg.panels.map((p) => (
              <div key={p.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex items-start gap-3">
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-slate-900">
                    <p.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="text-lg font-extrabold text-slate-900">{p.title}</div>
                    <p className="mt-1 text-sm leading-7 text-slate-600">{p.desc}</p>
                  </div>
                </div>

                <ul className="mt-5 space-y-2 text-sm text-slate-700">
                  {p.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2">
                      <CheckCircle2 className="mt-1 h-4 w-4 text-emerald-600" />
                      <span className="leading-7">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      ) : null}

      {/* INTENT DEPTH */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <p className="text-xs font-extrabold tracking-[0.28em] text-slate-500">SERVICE FIT</p>
          <h2 className="mt-2 text-3xl font-extrabold">
            {cfg.targetKeyword} with clear business intent
          </h2>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {intentSections.map((section) => (
              <div key={section.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="text-sm font-extrabold text-slate-900">{section.title}</div>
                <p className="mt-2 text-sm leading-7 text-slate-600">{section.desc}</p>
                <ul className="mt-4 space-y-2 text-sm text-slate-700">
                  {section.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2">
                      <CheckCircle2 className="mt-1 h-4 w-4 text-emerald-600" />
                      <span className="leading-7">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <p className="text-xs font-extrabold tracking-[0.28em] text-slate-500">PROCESS</p>
          <h2 className="mt-2 text-3xl font-extrabold">How we deliver</h2>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {cfg.processSteps.map((s) => (
              <div key={s.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="text-lg font-extrabold text-slate-900">{s.title}</div>
                <ul className="mt-4 space-y-2 text-sm text-slate-700">
                  {s.items.map((x) => (
                    <li key={x} className="flex items-start gap-2">
                      <span className="mt-2 h-2 w-2 rounded-full bg-yellow-400" />
                      <span className="leading-7">{x}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-6xl px-4 py-14">
        <p className="text-xs font-extrabold tracking-[0.28em] text-slate-500">FAQ</p>
        <h2 className="mt-2 text-3xl font-extrabold">{cfg.targetKeyword} questions</h2>
        <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600">
          These answers are specific to <strong>{cfg.breadcrumbName}</strong>, so this page stays
          focused and non-duplicative.
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

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          <Link prefetch={false}
            href={cfg.backToPillarHref}
            className="rounded-2xl border border-slate-200 bg-white px-5 py-4 text-sm font-extrabold text-slate-900 hover:bg-slate-50"
          >
            Back to MERN pillar
          </Link>
          <Link prefetch={false}
            href="/contact"
            className="rounded-2xl border border-slate-200 bg-slate-900 px-5 py-4 text-sm font-extrabold text-white hover:bg-slate-800"
          >
            Contact for quotation <ArrowRight className="inline h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* RELATED LINKS */}
      {cfg.relatedLinks?.length ? (
        <section className="bg-white">
          <div className="mx-auto max-w-6xl px-4 pb-14">
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
              <div className="flex items-center gap-2 text-sm font-extrabold text-slate-900">
                <Link2 className="h-4 w-4 text-slate-600" />
                Related MERN pages
              </div>

              <div className="mt-4 flex flex-wrap gap-3">
                {cfg.relatedLinks.map((l) => (
                  <Link prefetch={false}
                    key={l.href}
                    href={l.href}
                    className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-2 text-sm font-extrabold text-slate-900 hover:bg-slate-50"
                  >
                    {l.label} <ArrowRight className="h-4 w-4 text-slate-400" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      ) : null}
    </main>
  );
}

function buildDefaultIntentSections(cfg: MernServiceConfig) {
  const useCases = cfg.panels?.flatMap((p) => p.bullets).slice(0, 4) ?? cfg.highlights.slice(0, 4);
  const outcomes = cfg.deliverables.map((d) => d.title).slice(0, 4);
  const process = cfg.processSteps.map((s) => s.title).slice(0, 3);

  return [
    {
      title: `Who needs ${cfg.breadcrumbName}?`,
      desc: `This service is best when you need focused ${cfg.targetKeyword.toLowerCase()} delivery with clear scope.`,
      bullets: useCases.length ? useCases : cfg.highlights,
    },
    {
      title: "Expected outcomes",
      desc: "Work is scoped for measurable delivery, maintainability, and reliable handover.",
      bullets: outcomes.length ? outcomes : cfg.highlights,
    },
    {
      title: "Execution workflow",
      desc: "Each engagement follows a documented flow to reduce rework and improve clarity.",
      bullets: process.length ? process : ["Define scope", "Build and QA", "Launch support"],
    },
  ];
}

