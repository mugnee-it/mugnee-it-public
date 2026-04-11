import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import {
  ServiceCustomerGuide,
  ServiceFlowStrip,
  ServiceQuickSummary,
  ServiceUseCasesGrid,
} from "@/components/sections/ServiceVisualBlocks";

const SITE_URL = "https://mugneeit.com";

export type GraphicDesignServiceConfig = {
  slug: string;
  title: string;
  description: string;
  heroTag: string;
  intro: string;
  benefits: readonly string[];
  deliverables: readonly string[];
  process: readonly { title: string; desc: string }[];
  faqs: readonly { q: string; a: string }[];
  intentSections?: readonly { title: string; desc: string; bullets: readonly string[] }[];
};

export function buildGraphicDesignServiceMetadata(
  cfg: GraphicDesignServiceConfig
): Metadata {
  const pagePath = `/services/graphic-design/${cfg.slug}`;
  const pageUrl = `${SITE_URL}${pagePath}`;

  return {
    metadataBase: new URL(SITE_URL),
    title: `${cfg.title}`,
    description: cfg.description,
    alternates: { canonical: pageUrl },
    openGraph: {
      title: cfg.title,
      description: cfg.description,
      url: pageUrl,
      siteName: "Mugnee IT Solutions",
      type: "website",
    },
    robots: { index: true, follow: true },
  };
}

export default function GraphicDesignServiceTemplate({
  cfg,
}: {
  cfg: GraphicDesignServiceConfig;
}) {
  const intentSections =
    cfg.intentSections && cfg.intentSections.length
      ? cfg.intentSections
      : buildDefaultIntentSections(cfg);
  const summaryCards = [
    {
      icon: CheckCircle2,
      title: "Key benefits",
      desc: cfg.benefits[0] ?? "Clear design direction with business-first execution.",
      pills: [...cfg.benefits.slice(1, 4)],
    },
    {
      icon: ArrowRight,
      title: "Deliverables",
      desc: cfg.deliverables[0] ?? "Production-ready design files and assets.",
      pills: [...cfg.deliverables.slice(1, 4)],
    },
  ];
  const useCaseCards = intentSections.slice(0, 3).map((section) => ({
    icon: CheckCircle2,
    title: section.title,
    desc: section.desc,
    pills: [...section.bullets.slice(0, 3)],
  }));
  const flowSteps = cfg.process.slice(0, 4).map((step) => ({
    title: step.title,
    desc: step.desc,
  }));
  const pagePath = `/services/graphic-design/${cfg.slug}`;
  const pageUrl = `${SITE_URL}${pagePath}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
          { "@type": "ListItem", position: 2, name: "Services", item: `${SITE_URL}/services` },
          { "@type": "ListItem", position: 3, name: "Graphic Design", item: `${SITE_URL}/services/graphic-design` },
          { "@type": "ListItem", position: 4, name: cfg.title, item: pageUrl },
        ],
      },
      {
        "@type": "Service",
        serviceType: cfg.title,
        name: cfg.title,
        description: cfg.description,
        areaServed: ["Bangladesh", "USA", "UK", "Canada", "Europe"],
        provider: {
          "@type": "Organization",
          name: "Mugnee IT Solutions",
          url: SITE_URL,
        },
        url: pageUrl,
      },
      {
        "@type": "FAQPage",
        mainEntity: cfg.faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: f.a,
          },
        })),
      },
    ],
  };

  return (
    <main className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="mx-auto max-w-6xl px-4 pt-16 pb-16">
        <nav className="text-xs font-bold text-slate-500">
          <Link prefetch={false} href="/" className="hover:text-slate-900">Home</Link>
          <span className="mx-2">/</span>
          <Link prefetch={false} href="/services" className="hover:text-slate-900">Services</Link>
          <span className="mx-2">/</span>
          <Link prefetch={false} href="/services/graphic-design" className="hover:text-slate-900">Graphic Design</Link>
          <span className="mx-2">/</span>
          <span className="text-slate-900">{cfg.title}</span>
        </nav>

        <div className="mt-8 grid gap-8 lg:grid-cols-[1.1fr_.9fr] lg:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border bg-white px-4 py-2 text-xs font-extrabold text-slate-700">
              {cfg.heroTag}
            </div>
            <h1 className="mt-4 text-4xl font-extrabold text-slate-900 sm:text-5xl">
              {cfg.title}
            </h1>
            <p className="mt-4 text-base leading-7 text-slate-600">
              {cfg.intro}
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {cfg.benefits.map((b) => (
                <Bullet key={b} text={b} />
              ))}
            </div>

            <div className="mt-7 flex flex-wrap gap-3">
              <Link prefetch={false}
                href="/contact/"
                className="rounded-2xl bg-yellow-400 px-6 py-3 text-sm font-extrabold text-slate-900 hover:bg-yellow-500"
              >
                Get Quote <ArrowRight className="inline h-4 w-4" />
              </Link>
              <Link prefetch={false}
                href="/services/graphic-design"
                className="rounded-2xl border px-6 py-3 text-sm font-extrabold text-slate-900 hover:bg-slate-50"
              >
                Back to Graphic Design Pillar
              </Link>
            </div>
          </div>

          <div className="rounded-3xl border bg-slate-50 p-6">
            <div className="text-sm font-extrabold text-slate-900">
              {cfg.title} deliverables
            </div>
            <div className="mt-4 space-y-3 text-sm text-slate-700">
              {cfg.deliverables.map((d) => (
                <Mini key={d} text={d} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <ServiceCustomerGuide pillar="graphic-design" contextLabel={cfg.title} />

      <ServiceQuickSummary
        title={`${cfg.title} at a glance`}
        intro="A clearer visual overview so visitors can quickly understand value, outputs, and direction before reading the full page."
        items={summaryCards}
      />

      <ServiceUseCasesGrid
        title={`Where ${cfg.title.toLowerCase()} fits best`}
        intro="These blocks translate the service into common brand and campaign situations, not just long text."
        items={useCaseCards}
      />

      <ServiceFlowStrip
        title={`${cfg.title} process flow`}
        intro="A compact process strip helps visitors see how the design work moves from brief to final handover."
        steps={flowSteps}
      />

      <section className="mx-auto max-w-6xl px-4 pb-14">
        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
          <p className="text-xs font-extrabold tracking-[0.24em] text-slate-500">SERVICE SOLUTION</p>
          <h2 className="mt-2 text-2xl font-extrabold text-slate-900 sm:text-3xl">
            {cfg.title} solutions
          </h2>
          <p className="mt-2 text-sm leading-7 text-slate-600">
            Design solutions tailored to your brand goals, campaign intent, and delivery timeline.
          </p>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {[
              `Tailored ${cfg.title} strategy`,
              "Clear scope, revisions, and final deliverables",
              "Brand-safe and production-ready files",
              "Post-delivery support and guidance",
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

      <section className="mx-auto max-w-6xl px-4 pb-14">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">
          <p className="text-xs font-extrabold tracking-[0.24em] text-slate-500">SERVICE BENEFITS</p>
          <h2 className="mt-2 text-2xl font-extrabold text-slate-900 sm:text-3xl">
            {cfg.title} benefits
          </h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {[
              `Brand-focused ${cfg.title} strategy`,
              "Production-ready files for print and digital use",
              "Consistent visual language across campaigns",
              "Structured revisions and clear final handover",
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

      <section className="mx-auto max-w-6xl px-4 pb-14">
        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
          <p className="text-xs font-extrabold tracking-[0.24em] text-slate-500">SERVICE COMPARISON</p>
          <h2 className="mt-2 text-2xl font-extrabold text-slate-900 sm:text-3xl">
            {cfg.title} vs other options
          </h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {[
              `${cfg.title}: tailored design direction for brand consistency`,
              "Template marketplaces: fast asset access, less unique brand identity",
              "Low-cost quick design: cheaper upfront, often weaker production quality",
              "Managed design workflow: better revisions, final files, and usage guidance",
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

      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="text-2xl font-extrabold text-slate-900">
            {cfg.title} process
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {cfg.process.map((s) => (
              <div key={s.title} className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="text-sm font-extrabold text-slate-900">{s.title}</div>
                <p className="mt-2 text-sm text-slate-600">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14">
        <p className="text-xs font-extrabold tracking-[0.28em] text-slate-500">SERVICE FIT</p>
        <h2 className="mt-2 text-2xl font-extrabold text-slate-900">
          {cfg.title} for specific business goals
        </h2>
        <div className="mt-6 grid gap-4 lg:grid-cols-3">
          {intentSections.map((section) => (
            <div key={section.title} className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="text-sm font-extrabold text-slate-900">{section.title}</div>
              <p className="mt-2 text-sm leading-7 text-slate-600">{section.desc}</p>
              <ul className="mt-3 space-y-2 text-sm text-slate-700">
                {section.bullets.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle2 className="mt-1 h-4 w-4 text-emerald-600" />
                    <span className="leading-7">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="text-2xl font-extrabold text-slate-900">{cfg.title} FAQ</h2>
        <p className="mt-2 max-w-3xl text-sm leading-7 text-slate-600">
          Questions and answers below are specific to <strong>{cfg.title}</strong> intent and
          delivery scope, not generic duplicated text.
        </p>
        <div className="mt-6 grid gap-4 lg:grid-cols-2">
          {cfg.faqs.map((f) => (
            <details key={f.q} className="rounded-2xl border border-slate-200 bg-white p-5">
              <summary className="cursor-pointer text-sm font-extrabold text-slate-900">{f.q}</summary>
              <p className="mt-2 text-sm leading-7 text-slate-600">{f.a}</p>
            </details>
          ))}
        </div>
      </section>
    </main>
  );
}

function Bullet({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-2 text-sm text-slate-800">
      <CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-600" />
      {text}
    </div>
  );
}

function Mini({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-2">
      <span className="mt-1 h-2 w-2 rounded-full bg-yellow-400" />
      <span>{text}</span>
    </div>
  );
}

function buildDefaultIntentSections(cfg: GraphicDesignServiceConfig) {
  const processSteps = cfg.process.map((p) => p.title).slice(0, 3);
  const deliverablePoints = cfg.deliverables.slice(0, 4);
  const benefitPoints = cfg.benefits.slice(0, 4);

  return [
    {
      title: "Who this service helps",
      desc: "Suitable for brands that need consistent visual communication across digital and print.",
      bullets: benefitPoints.length ? benefitPoints : ["Clear brand direction", "Professional execution"],
    },
    {
      title: "What you receive",
      desc: "Deliverables are planned for real business usage, not just concept visuals.",
      bullets: deliverablePoints.length ? deliverablePoints : ["Production-ready files", "Usage guidance"],
    },
    {
      title: "How work is delivered",
      desc: "A structured process keeps revisions clear and final outputs usable by your team.",
      bullets: processSteps.length ? processSteps : ["Research", "Design", "Delivery"],
    },
  ] as const;
}


