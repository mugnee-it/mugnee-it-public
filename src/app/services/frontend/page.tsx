// app/services/frontend/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  BadgeCheck,
  Braces,
  CheckCircle2,
  Code2,
  Gauge,
  Globe2,
  Layers,
  LayoutDashboard,
  Link2,
  Palette,
  Rocket,
  Search,
  ShieldCheck,
  Sparkles,
  Timer,
  Wand2,
  Zap,
  Wrench,
  Headphones,
  FileText,
  GitBranch,
} from "lucide-react";
import { ServiceCustomerGuide } from "@/components/sections/ServiceVisualBlocks";

/** ✅ Use env in production:
 * NEXT_PUBLIC_SITE_URL=https://mugneeit.com
 */
const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "https://mugneeit.com";

const PAGE_PATH = "/services/frontend/";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

const TARGET_KEYWORD = "Frontend (React) Development";

export const metadata: Metadata = {
  title:
    "Frontend (React) Development Services | Premium UI, Speed & SEO-ready",
  description:
    "Frontend (React) development for premium UI, fast performance, and scalable component systems. We build modern landing pages, dashboards, and web app UI with clean code and conversion-first UX.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Frontend (React) Development — Premium UI + Speed + Clean Code",
    description:
      "We build modern React frontends with component systems, responsive UX, and performance-first delivery—ideal for landing pages, dashboards, and web apps.",
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

const faqs = [
  {
    q: "What do you deliver in a React frontend project?",
    a: "We deliver responsive UI, a reusable component system, clean structure, performance-focused implementation, and production-ready handover. Depending on scope we add animations, dashboards, forms, and API integration.",
  },
  {
    q: "Can you convert Figma to React / Next.js?",
    a: "Yes. We convert Figma designs into responsive React/Next.js components with clean structure and reusable blocks.",
  },
  {
    q: "Do you build landing pages that convert?",
    a: "Yes. We build conversion-first landing pages with strong hierarchy, CTA flow, trust sections, and fast loading to support better leads and sales.",
  },
  {
    q: "Do you optimize performance and Core Web Vitals?",
    a: "Yes. We optimize layout stability, bundle patterns, images, fonts, and rendering hygiene. Results depend on assets and third-party scripts, but we aim for strong scores where feasible.",
  },
  {
    q: "Can you integrate APIs, dashboards, and admin panels?",
    a: "Yes. We build dashboards, data tables, filters, UI states and connect to REST/GraphQL APIs using secure patterns.",
  },
  {
    q: "Do you provide source code and handover documentation?",
    a: "Yes. We provide clean source structure and handover notes so your team can maintain and extend the UI confidently.",
  },
  {
    q: "Will my React frontend be mobile responsive?",
    a: "Yes. We build responsive UI across common breakpoints and test layouts for mobile, tablet, and desktop.",
  },
  {
    q: "Do you provide after-launch support?",
    a: "Yes. We offer post-launch support for bug fixes, minor UI adjustments, and guidance based on the agreed scope.",
  },
];

function buildJsonLd() {
  const organization = {
    "@type": "Organization",
    name: "Mugnee IT Solutions",
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
  };

  const service = {
    "@type": "Service",
    name: "Frontend (React) Development Services",
    serviceType: "Frontend Development",
    provider: {
      "@type": "Organization",
      name: "Mugnee IT Solutions",
      url: SITE_URL,
    },
    areaServed: ["Bangladesh", "Worldwide"],
    url: PAGE_URL,
    description:
      "Frontend (React) development for premium UI, fast performance, and scalable component systems. Landing pages, dashboards, and web app UI with clean code and conversion-focused UX.",
  };

  const breadcrumb = {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
      { "@type": "ListItem", position: 2, name: "Services", item: `${SITE_URL}/services/` },
      { "@type": "ListItem", position: 3, name: "Frontend (React)", item: PAGE_URL },
    ],
  };

  const faq = {
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return {
    "@context": "https://schema.org",
    "@graph": [organization, service, breadcrumb, faq],
  };
}

export default function FrontendServicePage() {
  const jsonLd = buildJsonLd();

  return (
    <main className="bg-white text-slate-900">
      {/* ✅ JSON-LD (single script, @graph wrapper) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ✅ Header spacer (fix overlap for sticky header) */}
      <div className="h-16 sm:h-20" aria-hidden="true" />

      {/* =========================
          ✅ HERO
         ========================= */}
      <section className="relative overflow-hidden bg-slate-950 pb-12 pt-24 sm:pb-16 sm:pt-28">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(85%_120%_at_12%_18%,rgba(56,189,248,0.22),transparent_45%),radial-gradient(70%_95%_at_86%_20%,rgba(244,114,182,0.18),transparent_50%),linear-gradient(120deg,#020617_0%,#111827_48%,#1e1b4b_100%)]" />
          <div className="absolute inset-0 opacity-[0.12] [background:radial-gradient(circle_at_1px_1px,rgba(255,255,255,.42)_1px,transparent_0)] [background-size:20px_20px]" />
          <div className="pointer-events-none absolute -left-14 top-20 h-64 w-64 rounded-full bg-sky-300/15 blur-3xl" />
          <div className="pointer-events-none absolute right-[-28px] top-16 h-72 w-72 rounded-full bg-fuchsia-300/15 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-6xl px-4">
          <nav aria-label="Breadcrumb" className="text-xs font-bold text-white/85 drop-shadow">
            <Link prefetch={false} href="/" className="hover:text-white">Home</Link>
            <span className="mx-2 text-white/60">/</span>
            <Link prefetch={false} href="/services" className="hover:text-white">Services</Link>
            <span className="mx-2 text-white/60">/</span>
            <span className="text-yellow-300">Frontend (React)</span>
          </nav>

          <div className="mt-10 grid gap-10 lg:grid-cols-[1.1fr_.9fr] lg:items-center">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[11px] font-extrabold tracking-[0.18em] text-white backdrop-blur">
                REACT UI ENGINEERING
              </p>

              <h1 className="mt-4 text-4xl font-extrabold leading-tight text-white sm:text-5xl">
                {TARGET_KEYWORD}
                <span className="text-yellow-300"> Services</span>
              </h1>

              <p className="mt-4 max-w-2xl text-base leading-7 text-white/90 sm:text-lg">
                We design and build conversion-focused React frontends with clean component architecture, responsive UX, and performance-first delivery.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {[
                  "Landing Pages",
                  "Dashboard UI",
                  "Component Systems",
                  "Core Web Vitals Aware",
                  "SEO-safe Structure",
                ].map((tag) => (
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
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-yellow-400 px-7 py-3.5 text-sm font-extrabold text-slate-900 shadow-[0_10px_30px_rgba(0,0,0,.25)] transition hover:-translate-y-[1px] hover:bg-yellow-500"
                >
                  Start Frontend Project
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </a>
                <a
                  href="#deliverables"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/20 bg-white/10 px-7 py-3.5 text-sm font-extrabold text-white backdrop-blur transition hover:bg-white/15"
                >
                  See Deliverables
                </a>
              </div>

              <div className="mt-7 grid gap-2 text-sm font-bold text-white/90 sm:grid-cols-2">
                <Dot text="Conversion-first layout" colorClass="bg-yellow-300" />
                <Dot text="Reusable React components" colorClass="bg-emerald-300" />
                <Dot text="Performance-focused rendering" colorClass="bg-sky-300" />
                <Dot text="Scalable code handover" colorClass="bg-fuchsia-300" />
              </div>
            </div>

            <div className="grid gap-4">
              <div className="rounded-3xl border border-white/20 bg-white/10 p-6 backdrop-blur">
                <div className="flex items-center justify-between">
                  <div className="text-sm font-extrabold uppercase tracking-widest text-white/90">Delivery Snapshot</div>
                  <span className="rounded-full bg-yellow-300/20 px-3 py-1 text-xs font-extrabold text-yellow-200">PRO</span>
                </div>

                <div className="mt-4 space-y-3 text-sm text-white/90">
                  <LineItemDark icon={Layers} text="Design system style components" />
                  <LineItemDark icon={LayoutDashboard} text="Landing pages, app UI, dashboards" />
                  <LineItemDark icon={Gauge} text="CWV-aware frontend optimization" />
                  <LineItemDark icon={ShieldCheck} text="Clean QA and maintainable handover" />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                <ProofStatDark icon={Timer} kpi="3-10 Days" label="Typical delivery" />
                <ProofStatDark icon={BadgeCheck} kpi="Reusable UI" label="Long-term maintainability" />
                <ProofStatDark icon={Zap} kpi="Fast UX" label="High conversion focus" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <ServiceCustomerGuide pillar="frontend" />

      <section className="mx-auto max-w-6xl px-4 py-12">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <p className="text-xs font-extrabold tracking-[0.24em] text-slate-500">
            WHAT IS FRONTEND DEVELOPMENT
          </p>
          <h2 className="mt-2 text-2xl font-extrabold text-slate-900 sm:text-3xl">
            What is Frontend (React) Development?
          </h2>
          <p className="mt-3 max-w-4xl text-sm leading-7 text-slate-600 sm:text-base">
            Frontend development is the user-facing layer of your website or web app. With React,
            we build reusable UI components, responsive layouts, and smooth user flows that make
            products easier to use, faster to navigate, and simpler to scale.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <FrontendPillarCard
              icon={Palette}
              title="UI Layer"
              desc="Clean visual interface with hierarchy, spacing, and readability."
            />
            <FrontendPillarCard
              icon={Layers}
              title="Component System"
              desc="Reusable React components for faster updates and consistency."
            />
            <FrontendPillarCard
              icon={Globe2}
              title="Responsive UX"
              desc="Mobile, tablet, and desktop friendly behavior across breakpoints."
            />
            <FrontendPillarCard
              icon={Gauge}
              title="Performance"
              desc="Fast rendering patterns that improve user experience and conversion."
            />
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
          <h2 className="mt-2 text-2xl font-extrabold text-slate-900 sm:text-3xl">
            Business Value of This Frontend Solution
          </h2>
          <p className="mt-3 max-w-4xl text-sm leading-7 text-slate-600 sm:text-base">
            A strong frontend is not only about design. It affects user trust, conversion flow,
            product clarity, and how easily your team can maintain or expand features over time.
          </p>

          <div className="mt-6 grid gap-4 lg:grid-cols-2">
            <article className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <h3 className="text-base font-extrabold text-slate-900">Why teams choose React frontend</h3>
              <ul className="mt-3 space-y-2 text-sm font-semibold text-slate-700">
                {[
                  "Reusable component architecture speeds up UI development",
                  "Clear state-driven patterns reduce UI inconsistency",
                  "Modular structure supports safer feature expansion",
                  "Strong ecosystem for dashboards, forms, and product UI",
                ].map((point) => (
                  <li key={point} className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-yellow-400" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </article>

            <article className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <h3 className="text-base font-extrabold text-slate-900">How customers benefit</h3>
              <ul className="mt-3 space-y-2 text-sm font-semibold text-slate-700">
                {[
                  "Faster and cleaner experience improves trust and engagement",
                  "Better page flow helps users reach CTA with less friction",
                  "Responsive layouts improve lead quality from mobile traffic",
                  "Long-term update cost stays lower with maintainable UI architecture",
                ].map((point) => (
                  <li key={point} className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-emerald-400" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </article>
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {[
              "Conversion-aware UI design for business goals",
              "Structured QA workflow before handover",
              "Frontend architecture that scales without redesign",
              "Support-ready codebase for future enhancement",
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
      
      {/* =========================
          ✅ TRUST / E-E-A-T (NEW)
         ========================= */}
      <section className="mx-auto max-w-6xl px-4 pb-12" id="frontend-delivery-models">
        <FrontendDeliveryModels />
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14">
        <p className="text-xs font-extrabold tracking-[0.28em] text-slate-500">TRUST</p>
        <h2 className="mt-2 text-3xl font-extrabold">React frontend delivery that is safe for users and search engines</h2>
        <p className="mt-2 max-w-3xl text-sm leading-7 text-slate-600">
          We focus on clear structure, clean code, and honest deliverables—no spam tactics, no risky SEO tricks.
          Your page stays index-safe and maintainable.
        </p>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          <TrustCard
            icon={ShieldCheck}
            title="SEO-safe by default"
            desc="Clean headings, internal links, canonical URL and schema only when relevant."
            items={["No keyword stuffing", "No misleading markup", "Index-friendly structure"]}
          />
          <TrustCard
            icon={Gauge}
            title="Performance-focused"
            desc="We follow CWV-aware patterns: stable layout, optimized assets, and sensible scripts."
            items={["Optimized images", "Layout stability (CLS)", "Rendering hygiene"]}
          />
          <TrustCard
            icon={FileText}
            title="Clean handover"
            desc="You get organized source code and handover notes—easy to maintain or extend later."
            items={["Readable structure", "Component reuse", "Handover notes"]}
          />
        </div>
      </section>
      
      
      {/* =========================
          ✅ DELIVERABLES
         ========================= */}
      <section id="deliverables" className="mx-auto max-w-6xl px-4 py-14">
        <p className="text-xs font-extrabold tracking-[0.28em] text-slate-500">DELIVERABLES</p>
        <h2 className="mt-2 text-3xl font-extrabold">
          What you get from our React frontend delivery
        </h2>
        <p className="mt-2 max-w-3xl text-sm leading-7 text-slate-600">
          We deliver production-ready UI with reusable components, responsive layout, and performance-friendly structure—
          ideal for business websites, landing pages, dashboards, and web app interfaces.
        </p>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          <InfoCard
            title="UI & Components"
            items={[
              "Reusable components + clean file structure",
              "Responsive breakpoints + polished spacing",
              "Forms, validation UI, consistent states",
            ]}
          />
          <InfoCard
            title="Performance & SEO Safety"
            items={[
              "Fast loading patterns + render hygiene",
              "Layout stability & image best practices",
              "Internal linking + content structure",
            ]}
          />
          <InfoCard
            title="Handover & Support"
            items={[
              "Handover notes + component guide",
              "QA checklist + responsive pass",
              "After-launch support (scope-based)",
            ]}
          />
        </div>
      </section>
      
      
      {/* =========================
          ✅ AFTER SUPPORT (NEW)
         ========================= */}
      <section id="support" className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-extrabold tracking-[0.28em] text-slate-500">AFTER SUPPORT</p>
              <h2 className="mt-2 text-3xl font-extrabold">Reliable support after React.js delivery</h2>
              <p className="mt-2 max-w-3xl text-sm leading-7 text-slate-600">
                We provide post-launch support for bug fixes, minor UI adjustments, and guidance—based on the agreed scope.
                For ongoing improvements, we can continue as a monthly support plan.
              </p>
            </div>

            <a
              href="/contact"
              className="inline-flex w-fit items-center justify-center gap-2 rounded-2xl bg-slate-900 px-6 py-3 text-sm font-extrabold text-white transition hover:bg-slate-800"
            >
              Talk about Support <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            <SupportCard
              icon={Headphones}
              title="Quick support window"
              desc="We respond fast for urgent UI issues after launch (scope-based)."
              points={["Bug fixes & small UI issues", "Guidance for updates", "Clear support boundaries"]}
            />
            <SupportCard
              icon={Wrench}
              title="Maintenance-ready UI"
              desc="We structure components so future edits don’t break layouts."
              points={["Reusable components", "Consistent spacing", "Clean naming"]}
            />
            <SupportCard
              icon={GitBranch}
              title="Safe change workflow"
              desc="We suggest staging + review before pushing updates to production."
              points={["Test before publish", "Avoid layout regressions", "Controlled deployments"]}
            />
          </div>

          <div className="mt-10 rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <div className="text-lg font-extrabold text-slate-900">
                  Want ongoing improvements?
                </div>
                <p className="mt-1 text-sm leading-6 text-slate-600">
                  Share your update list (new sections, new pages, UI tweaks). We’ll propose a safe rollout plan.
                </p>
              </div>

              <a
                href="/contact"
                className="group inline-flex w-fit items-center justify-center gap-2 rounded-full bg-yellow-400 px-7 py-3 text-sm font-extrabold text-slate-900 transition hover:-translate-y-[1px] hover:bg-yellow-500"
              >
                Request Support Plan
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>
      </section>
      
      
      {/* =========================
          WHAT WE BUILD
         ========================= */}
      <section className="mx-auto max-w-6xl px-4 py-14">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="text-xs font-extrabold tracking-[0.28em] text-slate-500">WHAT WE BUILD</p>
            <h2 className="mt-3 text-3xl font-extrabold">
              Frontend by outcome: conversion, clarity, and speed.
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              We don’t just “make pages.” We build structured UI that helps users understand,
              trust, and take action—while staying maintainable for your team.
            </p>

            <div className="mt-7 rounded-3xl border border-slate-200 bg-slate-50 p-6">
              <div className="text-sm font-extrabold">Best for:</div>
              <div className="mt-4 grid gap-3">
                <LineItem icon={Globe2} text="Business websites (trust + leads)" />
                <LineItem icon={LayoutDashboard} text="Dashboards (tables + filters + charts)" />
                <LineItem icon={Sparkles} text="Landing pages (high conversion)" />
                <LineItem icon={Search} text="SEO-safe structure + internal links" />
              </div>

              <a
                href="/contact"
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-indigo-600 px-5 py-3 text-sm font-extrabold text-white transition hover:bg-indigo-700"
              >
                Share your UI scope <ArrowRight className="h-4 w-4" />
              </a>
              <div className="mt-3 text-xs text-slate-500">
                Send reference links + pages list — we’ll reply with plan & quotation.
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 grid gap-6 sm:grid-cols-2">
            <OutcomeCard
              icon={Sparkles}
              title="High-Converting Landing Pages"
              desc="Offer-led layout with CTA flow, proof, and FAQ."
              items={["Hero + CTA", "Trust blocks", "FAQ + structure", "Fast load"]}
            />
            <OutcomeCard
              icon={LayoutDashboard}
              title="Dashboard UI"
              desc="Role-based UI with tables, filters, and states."
              items={["Data tables", "Filters", "UI states", "Admin flows"]}
            />
            <OutcomeCard
              icon={Layers}
              title="Component System"
              desc="Reusable blocks for scalable frontend growth."
              items={["Tokens", "Reusable UI", "Consistent layout", "Clean structure"]}
            />
            <OutcomeCard
              icon={Gauge}
              title="Performance + UX"
              desc="Speed, layout stability, and interaction polish."
              items={["CLS control", "Asset optimize", "Render hygiene", "UX polish"]}
            />
          </div>
        </div>
      </section>
      
      
      {/* =========================
          ✅ USE CASES
         ========================= */}
      <section className="mx-auto max-w-6xl px-4 py-14">
        <p className="text-xs font-extrabold tracking-[0.28em] text-slate-500">INDUSTRIES + SCENARIOS</p>
        <h2 className="mt-2 text-3xl font-extrabold">Industries where our frontend delivery fits best</h2>
        <p className="mt-2 max-w-3xl text-sm leading-7 text-slate-600">
          We map UI architecture based on industry workflow, user behavior, and growth stage so each frontend stays practical and maintainable.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { t: "Healthcare Platforms", d: "Patient-facing interfaces, appointment flow, and easy navigation UX." },
            { t: "E-commerce Frontend", d: "Product browsing, category flow, cart interaction, and conversion-first UI." },
            { t: "Education Portals", d: "Course pages, learner dashboard screens, and content-focused structures." },
            { t: "B2B Service Websites", d: "Trust-building layouts, clear CTA hierarchy, and lead capture paths." },
            { t: "SaaS Product UI", d: "Scalable component systems for feature-rich app interfaces." },
            { t: "Operations Dashboards", d: "Role-based data views, filters, tables, and workflow actions." },
          ].map((x) => (
            <div key={x.t} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="text-sm font-extrabold">{x.t}</div>
              <div className="mt-2 text-sm text-slate-600 leading-7">{x.d}</div>
            </div>
          ))}
        </div>
      </section>
      
      
      {/* =========================
          ✅ PROCESS
         ========================= */}
      <section id="process" className="bg-slate-900">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-extrabold tracking-[0.28em] text-white/60">PROCESS</p>
              <h2 className="mt-2 text-3xl font-extrabold text-white">
                A workflow that keeps UI quality consistent.
              </h2>
              <p className="mt-2 max-w-2xl text-sm text-white/75">
                Clear milestones, fast feedback loop, and clean delivery—so your UI doesn’t break later.
              </p>
            </div>

            <a
              href="/contact"
              className="inline-flex w-fit items-center justify-center gap-2 rounded-2xl bg-yellow-400 px-6 py-3 text-sm font-extrabold text-slate-900 transition hover:bg-yellow-500"
            >
              Start a project <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-4">
            <DarkStep n="01" icon={Search} title="UI Scope" desc="Pages, sections, user flow, references, devices." />
            <DarkStep n="02" icon={Palette} title="UI Direction" desc="Hierarchy, spacing, typography, component map." />
            <DarkStep n="03" icon={Code2} title="Build System" desc="Reusable components + responsive implementation." />
            <DarkStep n="04" icon={ShieldCheck} title="QA + Handover" desc="Testing, performance pass, docs, deployment support." />
          </div>
        </div>
      </section>
      
      
      {/* =========================
          ✅ STACK + Internal link hub
         ========================= */}
      <section className="mx-auto max-w-6xl px-4 py-14">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-5">
            <p className="text-xs font-extrabold tracking-[0.28em] text-slate-500">STACK</p>
            <h2 className="mt-2 text-3xl font-extrabold">Modern frontend tooling—without the mess.</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Clean UI architecture and predictable patterns—easy to maintain and expand.
            </p>

            <div className="mt-6 rounded-3xl border border-slate-200 bg-slate-50 p-6">
              <div className="text-sm font-extrabold">Typical stack:</div>
              <div className="mt-4 flex flex-wrap gap-2">
                {[
                  "React",
                  "Next.js (optional)",
                  "TypeScript",
                  "Tailwind",
                  "Component tokens",
                  "API integration",
                  "Animations (scope-based)",
                ].map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-bold text-slate-700"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-2 text-xs font-extrabold tracking-[0.22em] text-slate-500">
                <Link2 className="h-4 w-4" />
                RELATED SERVICES
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                <PillLink href="/services/nextjs" text="Next.js Website Development" />
                <PillLink href="/services/mern-stack" text="MERN Stack Development" />
                <PillLink href="/services/wordpress" text="WordPress Website Development" />
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="grid gap-4 sm:grid-cols-2">
                <StackTile
                  icon={Braces}
                  title="Components"
                  items={["Reusable blocks", "Forms + validation UI", "Cards + sections", "Design tokens"]}
                />
                <StackTile
                  icon={Wand2}
                  title="Motion + UX"
                  items={["Micro-interactions", "Hover states", "Loading states", "Smooth transitions"]}
                />
                <StackTile
                  icon={Gauge}
                  title="Performance"
                  items={["Asset optimization", "Layout stability", "Render hygiene", "Third-party control"]}
                />
                <StackTile
                  icon={Rocket}
                  title="Delivery"
                  items={["Responsive QA", "Deployment guidance", "Docs + handover", "Support"]}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      
      {/* =========================
          ✅ PACKAGES (NO PRICE)
         ========================= */}
      <section id="packages" className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-extrabold tracking-[0.28em] text-slate-500">PACKAGES</p>
              <h2 className="mt-2 text-3xl font-extrabold">Choose a plan by UI scope.</h2>
              <p className="mt-2 max-w-2xl text-sm text-slate-600">
                Pricing depends on pages, UI complexity, and integrations. We confirm deliverables before starting.
              </p>
            </div>

            <a
              href="/contact"
              className="inline-flex w-fit items-center justify-center gap-2 rounded-2xl bg-slate-900 px-6 py-3 text-sm font-extrabold text-white transition hover:bg-slate-800"
            >
              Get Quotation <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            <QuoteCard
              title="UI Starter"
              subtitle="Small UI scope / single landing"
              items={[
                "1–3 pages (scope-based)",
                "Premium hero + sections",
                "Responsive + basic performance pass",
                "Delivery timeline based on scope",
              ]}
              cta="Get Quotation"
            />
            <QuoteCard
              featured
              title="UI Business"
              subtitle="Full site UI / multi-page"
              items={[
                "Up to 10 pages (scope-based)",
                "Component system + reusable blocks",
                "Performance + UX polish",
                "Delivery timeline based on scope",
              ]}
              cta="Get Quotation"
            />
            <QuoteCard
              title="Dashboard UI"
              subtitle="Admin panels / portals"
              items={[
                "Tables + filters + UI states",
                "Role-based screens (if needed)",
                "API integration UI (scope-based)",
                "Timeline based on scope",
              ]}
              cta="Get Quotation"
            />
          </div>

          <div className="mt-10 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-start gap-3">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-indigo-50 ring-1 ring-indigo-100">
                  <BadgeCheck className="h-6 w-6 text-indigo-600" />
                </div>
                <div>
                  <div className="text-sm font-extrabold">Included checklist</div>
                  <div className="mt-1 text-sm text-slate-600">
                    Responsive QA, UI consistency, performance pass, and handover notes.
                  </div>
                </div>
              </div>

              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-yellow-400 px-6 py-3 text-sm font-extrabold text-slate-900 transition hover:bg-yellow-500"
              >
                Get Quotation <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
      
      
      {/* =========================
          FRONTEND CLUSTER PAGES
         ========================= */}
      <section className="mx-auto max-w-6xl px-4 py-14">
        <p className="text-xs font-extrabold tracking-[0.28em] text-slate-500">FRONTEND CLUSTER</p>
        <h2 className="mt-2 text-3xl font-extrabold">Focused frontend pages by search intent</h2>
        <p className="mt-2 max-w-3xl text-sm leading-7 text-slate-600">
          Each page below targets a different intent so keywords do not compete with each other.
          This structure is safer for indexing and stronger for topical relevance.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              href: "/services/frontend/react-frontend-development",
              title: "React Frontend Development",
              desc: "Component-focused React development intent.",
            },
            {
              href: "/services/frontend/frontend-performance-optimization",
              title: "Frontend Performance Optimization",
              desc: "Speed and Core Web Vitals intent.",
            },
            {
              href: "/services/frontend/ui-ux-implementation",
              title: "UI/UX Frontend Implementation",
              desc: "Design-to-code implementation intent.",
            },
            {
              href: "/services/frontend/landing-page-development",
              title: "Landing Page Development",
              desc: "Conversion and campaign landing intent.",
            },
            {
              href: "/services/frontend/bangladesh",
              title: "Frontend Service in Bangladesh",
              desc: "Local Bangladesh keyword intent.",
            },
            {
              href: "/services/frontend/worldwide",
              title: "Worldwide Frontend Service",
              desc: "Global/international keyword intent.",
            },
          ].map((x) => (
            <a
              key={x.href}
              href={x.href}
              className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="text-lg font-extrabold text-slate-900">{x.title}</div>
              <p className="mt-2 text-sm leading-6 text-slate-600">{x.desc}</p>
              <div className="mt-4 inline-flex items-center gap-2 text-sm font-extrabold text-slate-900">
                Open page
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </div>
            </a>
          ))}
        </div>
      </section>
      
      
      {/* =========================
          ✅ FAQ + CTA
         ========================= */}
      <section className="mx-auto max-w-6xl px-4 py-14">
        <p className="text-xs font-extrabold tracking-[0.28em] text-slate-500">FAQ</p>
        <h2 className="mt-2 text-3xl font-extrabold">Questions for react.js</h2>

        <div className="mt-10 grid gap-4 lg:grid-cols-2">
          {faqs.map((f) => (
            <details key={f.q} className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <summary className="cursor-pointer list-none text-sm font-extrabold">
                {f.q}
                <span className="float-right text-slate-400 transition group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 text-sm leading-6 text-slate-600">{f.a}</p>
            </details>
          ))}
        </div>

        <div className="mt-12 overflow-hidden rounded-3xl border border-slate-200 bg-slate-900 p-6 sm:p-10">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <div className="text-xl font-extrabold text-white">
                Want a frontend UI that looks premium and loads fast?
              </div>
              <p className="mt-2 text-sm text-white/80">
                Send your UI scope — we’ll reply with plan, timeline & quotation.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <DarkChip icon={Zap} text="Speed" />
                <DarkChip icon={Sparkles} text="Premium UI" />
                <DarkChip icon={Braces} text="Clean code" />
                <DarkChip icon={ShieldCheck} text="Best practices" />
              </div>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Link prefetch={false}
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-yellow-400 px-6 py-3 text-sm font-extrabold text-slate-900 transition hover:bg-yellow-500"
              >
                Get Quotation <ArrowRight className="h-4 w-4" />
              </Link>
              <Link prefetch={false}
                href="/services"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/20 bg-white/10 px-6 py-3 text-sm font-extrabold text-white transition hover:bg-white/15"
              >
                See all services <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>

        <p className="sr-only">
          {TARGET_KEYWORD} by Mugnee IT Solutions — React UI development, component systems,
          landing pages, dashboard UI, and performance optimization.
        </p>
      </section>
      
    </main>
  );
}

/* =========================
   UI helpers
   ========================= */

function FrontendPillarCard({
  icon: Icon,
  title,
  desc,
}: {
  icon: LucideIcon;
  title: string;
  desc: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 transition hover:-translate-y-1 hover:bg-white hover:shadow-md">
      <div className="grid h-11 w-11 place-items-center rounded-2xl bg-slate-900">
        <Icon className="h-5 w-5 text-white" />
      </div>
      <h3 className="mt-4 text-base font-extrabold text-slate-900">{title}</h3>
      <p className="mt-1 text-sm leading-6 text-slate-600">{desc}</p>
    </div>
  );
}

function FrontendDeliveryModels() {
  const models = [
    {
      icon: Sparkles,
      title: "Design Sprint + Agile Build",
      whatItIs:
        "A fast cycle where we validate UI direction first, then execute in short development sprints.",
      howWeUse:
        "Best for new frontend projects where UX direction and iteration speed are both important.",
      points: [
        "Rapid prototype and review cycle",
        "Sprint-based UI implementation",
        "Continuous feedback with visible progress",
      ],
    },
    {
      icon: Wrench,
      title: "Kanban UI Maintenance Flow",
      whatItIs:
        "A continuous workflow for UI improvements, bug fixes, and enhancement requests.",
      howWeUse:
        "Best for ongoing product updates where priorities change week to week.",
      points: [
        "Clear task flow from backlog to release",
        "Fast turnaround for urgent UI issues",
        "Steady improvement without heavy planning overhead",
      ],
    },
    {
      icon: GitBranch,
      title: "Milestone Delivery Model",
      whatItIs:
        "A structured model where design, development, QA, and handover are delivered in defined phases.",
      howWeUse:
        "Best for fixed-scope business sites and portal interfaces with clear timelines.",
      points: [
        "Defined scope and sign-off checkpoints",
        "Predictable timeline and quality gates",
        "Clear handover at each milestone",
      ],
    },
  ];

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
      <p className="text-xs font-extrabold tracking-[0.25em] text-slate-500">
        EXECUTION MODELS
      </p>
      <h2 className="mt-2 text-2xl font-extrabold text-slate-900 sm:text-3xl">
        Delivery Models We Use for Frontend Projects
      </h2>
      <p className="mt-3 max-w-4xl text-sm leading-7 text-slate-600 sm:text-base">
        We choose the workflow based on project maturity, design clarity, and release urgency
        so your frontend delivery remains fast without sacrificing quality.
      </p>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {models.map((m) => (
          <article key={m.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <div className="flex items-start gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-2xl bg-slate-900">
                <m.icon className="h-5 w-5 text-white" />
              </span>
              <div>
                <h3 className="text-base font-extrabold text-slate-900">{m.title}</h3>
                <p className="mt-1 text-sm leading-6 text-slate-600">{m.whatItIs}</p>
                <p className="mt-2 text-sm leading-6 text-slate-700">
                  <span className="font-bold text-slate-900">How we follow it:</span> {m.howWeUse}
                </p>
              </div>
            </div>

            <ul className="mt-4 space-y-2">
              {m.points.map((point) => (
                <li key={point} className="flex items-start gap-2 text-sm text-slate-700">
                  <span className="mt-1 h-2 w-2 rounded-full bg-yellow-400" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </div>
  );
}

function Dot({ text, colorClass }: { text: string; colorClass: string }) {
  return (
    <span className="inline-flex items-center gap-2">
      <span className={`h-2 w-2 rounded-full ${colorClass}`} />
      {text}
    </span>
  );
}

function PillLink({ href, text }: { href: string; text: string }) {
  return (
    <a
      href={href}
      className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-extrabold text-slate-900 transition hover:bg-white"
    >
      {text}
      <ArrowRight className="h-4 w-4 text-slate-400" />
    </a>
  );
}

function ProofStatDark({
  icon: Icon,
  kpi,
  label,
}: {
  icon: LucideIcon;
  kpi: string;
  label: string;
}) {
  return (
    <div className="rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur">
      <div className="flex items-start gap-3 text-white">
      <div className="grid h-11 w-11 place-items-center rounded-2xl bg-yellow-400">
        <Icon className="h-5 w-5 text-slate-900" />
      </div>
      <div>
        <div className="text-base font-extrabold sm:text-lg">{kpi}</div>
        <div className="text-sm text-white/75">{label}</div>
      </div>
      </div>
    </div>
  );
}

function InfoCard({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="text-sm font-extrabold">{title}</div>
      <ul className="mt-4 space-y-2 text-sm text-slate-700">
        {items.map((x) => (
          <li key={x} className="flex gap-2">
            <CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-600" />
            {x}
          </li>
        ))}
      </ul>
    </div>
  );
}

function LineItemDark({ icon: Icon, text }: { icon: LucideIcon; text: string }) {
  return (
    <div className="flex items-start gap-3 rounded-2xl border border-white/15 bg-white/5 p-3">
      <div className="mt-0.5 grid h-9 w-9 place-items-center rounded-2xl bg-white/10 ring-1 ring-white/15">
        <Icon className="h-4 w-4 text-white" />
      </div>
      <div className="text-sm font-semibold leading-6 text-white/90">{text}</div>
    </div>
  );
}
function LineItem({ icon: Icon, text }: { icon: LucideIcon; text: string }) {
  return (
    <div className="flex items-start gap-3">
      <div className="mt-0.5 grid h-9 w-9 place-items-center rounded-2xl bg-white ring-1 ring-slate-200">
        <Icon className="h-4 w-4 text-slate-900" />
      </div>
      <div className="text-sm font-semibold leading-6 text-slate-700">{text}</div>
    </div>
  );
}

function OutcomeCard({
  icon: Icon,
  title,
  desc,
  items,
}: {
  icon: LucideIcon;
  title: string;
  desc: string;
  items: string[];
}) {
  return (
    <div className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <div className="pointer-events-none absolute -left-16 -top-16 h-44 w-44 rounded-full bg-indigo-200/50 blur-2xl opacity-0 transition-opacity group-hover:opacity-100" />
      <div className="flex items-start gap-3">
        <div className="grid h-12 w-12 place-items-center rounded-2xl bg-indigo-600">
          <Icon className="h-6 w-6 text-white" />
        </div>
        <div>
          <h3 className="text-lg font-extrabold">{title}</h3>
          <p className="mt-1 text-sm text-slate-600">{desc}</p>
        </div>
      </div>

      <div className="mt-5 space-y-2">
        {items.map((i) => (
          <div key={i} className="flex items-start gap-2 text-sm text-slate-700">
            <CheckCircle2 className="mt-1 h-4 w-4 text-emerald-600" />
            <span className="leading-6">{i}</span>
          </div>
        ))}
      </div>

      <div className="mt-6 flex items-center gap-2 text-sm font-extrabold">
        Learn more
        <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
      </div>
    </div>
  );
}

function DarkStep({
  n,
  icon: Icon,
  title,
  desc,
}: {
  n: string;
  icon: LucideIcon;
  title: string;
  desc: string;
}) {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_18px_55px_rgba(0,0,0,0.30)] backdrop-blur">
      <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-yellow-400/15 blur-2xl" />
      <div className="flex items-center justify-between">
        <div className="text-xs font-extrabold tracking-[0.28em] text-white/55">{n}</div>
        <div className="grid h-10 w-10 place-items-center rounded-2xl bg-yellow-400">
          <Icon className="h-5 w-5 text-slate-900" />
        </div>
      </div>
      <div className="mt-4 text-sm font-extrabold text-white">{title}</div>
      <div className="mt-2 text-sm leading-7 text-white/75">{desc}</div>
    </div>
  );
}

function StackTile({
  icon: Icon,
  title,
  items,
}: {
  icon: LucideIcon;
  title: string;
  items: string[];
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
      <div className="flex items-start gap-3">
        <div className="grid h-10 w-10 place-items-center rounded-2xl bg-white ring-1 ring-slate-200">
          <Icon className="h-5 w-5 text-slate-900" />
        </div>
        <div>
          <div className="text-sm font-extrabold">{title}</div>
          <div className="mt-3 space-y-2">
            {items.map((i) => (
              <div key={i} className="flex items-start gap-2 text-sm text-slate-700">
                <span className="mt-2 h-2 w-2 rounded-full bg-indigo-500" />
                <span className="leading-6">{i}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function QuoteCard({
  title,
  subtitle,
  items,
  cta,
  featured,
}: {
  title: string;
  subtitle: string;
  items: string[];
  cta: string;
  featured?: boolean;
}) {
  return (
    <div
      className={[
        "relative overflow-hidden rounded-3xl border bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg",
        featured ? "border-indigo-300 ring-1 ring-indigo-200" : "border-slate-200",
      ].join(" ")}
    >
      {featured && (
        <div className="absolute right-4 top-4 rounded-full bg-indigo-100 px-3 py-1 text-xs font-extrabold text-indigo-700">
          Recommended
        </div>
      )}

      <div className="text-sm font-extrabold">{title}</div>
      <div className="mt-1 text-sm text-slate-600">{subtitle}</div>

      <div className="mt-6 space-y-3">
        {items.map((i) => (
          <div key={i} className="flex items-start gap-2 text-sm text-slate-700">
            <span className="mt-1 grid h-5 w-5 place-items-center rounded-full bg-emerald-50 ring-1 ring-emerald-100">
              <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
            </span>
            <span className="leading-6">{i}</span>
          </div>
        ))}
      </div>

      <a
        href="/contact"
        className={[
          "group mt-7 inline-flex w-full items-center justify-center gap-2 rounded-2xl px-6 py-3 text-sm font-extrabold transition",
          featured ? "bg-indigo-600 text-white hover:bg-indigo-700" : "bg-slate-900 text-white hover:bg-slate-800",
        ].join(" ")}
      >
        {cta}
        <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
      </a>
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

/* ✅ NEW cards */
function TrustCard({
  icon: Icon,
  title,
  desc,
  items,
}: {
  icon: LucideIcon;
  title: string;
  desc: string;
  items: string[];
}) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
      <div className="flex items-start gap-3">
        <div className="grid h-12 w-12 place-items-center rounded-2xl bg-slate-900">
          <Icon className="h-6 w-6 text-white" />
        </div>
        <div>
          <div className="text-lg font-extrabold">{title}</div>
          <p className="mt-1 text-sm leading-6 text-slate-600">{desc}</p>
        </div>
      </div>
      <div className="mt-5 space-y-2">
        {items.map((i) => (
          <div key={i} className="flex items-start gap-2 text-sm text-slate-700">
            <span className="mt-2 h-2 w-2 rounded-full bg-yellow-400" />
            <span className="leading-6">{i}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function SupportCard({
  icon: Icon,
  title,
  desc,
  points,
}: {
  icon: LucideIcon;
  title: string;
  desc: string;
  points: string[];
}) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <div className="flex items-start gap-3">
        <div className="grid h-12 w-12 place-items-center rounded-2xl bg-slate-900">
          <Icon className="h-6 w-6 text-white" />
        </div>
        <div>
          <div className="text-lg font-extrabold">{title}</div>
          <p className="mt-1 text-sm leading-6 text-slate-600">{desc}</p>
        </div>
      </div>

      <div className="mt-5 space-y-2">
        {points.map((p) => (
          <div key={p} className="flex items-start gap-2 text-sm text-slate-700">
            <span className="mt-2 h-2 w-2 rounded-full bg-emerald-500" />
            <span className="leading-6">{p}</span>
          </div>
        ))}
      </div>
    </div>
  );
}












