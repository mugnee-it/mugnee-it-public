// app/services/nextjs/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  Layers,
  Code2,
  Globe2,
  LineChart,
  Rocket,
  Search,
  Quote,
  Gauge,
  Server,
  Lock,
  GitBranch,
  Wrench,
  LayoutDashboard,
  Link2,
  FileText,
  Database,
  Braces,
  Cloud,
  HardDrive,
  Workflow,
  BadgeCheck,
  FolderTree,
  Atom,
  Stethoscope,
  ShoppingCart,
  GraduationCap,
  Building2,
  Factory,
  Truck,
} from "lucide-react";
import {
  ServiceCustomerGuide,
  ServiceFlowStrip,
  ServiceQuickSummary,
  ServiceUseCasesGrid,
} from "@/components/sections/ServiceVisualBlocks";

/** ✅ Use env in production:
 * NEXT_PUBLIC_SITE_URL=https://mugneeit.com
 */
const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "https://mugneeit.com";

// ✅ keep ONE style (trailing slash)
const PAGE_PATH = "/services/nextjs/";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

// ✅ Target keyword (natural usage)
const TARGET_KEYWORD = "Next.js Website Development";

export const metadata: Metadata = {
  title: "Next.js Website Development Services",
  description:
    "Next.js website development for fast, SEO-friendly websites and web apps. Premium UI, App Router, Core Web Vitals optimization, and schema-ready structure by Mugnee IT Solutions.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Next.js Website Development Services",
    description:
      "Build modern Next.js websites with premium UI, SEO structure, and performance-first delivery.",
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
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const faqs = [
  {
    q: "What is Next.js website development?",
    a: "Next.js is a React framework for building fast websites and web apps with routing, server rendering, SEO-friendly metadata, and performance features like image optimization.",
  },
  {
    q: "Do you build with Next.js App Router?",
    a: "Yes. We use App Router with modern routing patterns, scalable folder structure, and SEO best practices.",
  },
  {
    q: "Will my Next.js site be SEO-friendly?",
    a: "Yes. We implement proper headings, metadata, canonical URL, internal linking, sitemap/robots, and optional schema (like FAQ) without spam.",
  },
  {
    q: "Do you optimize Core Web Vitals and Lighthouse score?",
    a: "Yes. We optimize images, fonts, layout stability, caching, code splitting, and script strategy to improve speed and UX.",
  },
  {
    q: "Can you integrate CMS or e-commerce?",
    a: "Yes. We can integrate Headless WordPress, Sanity, Strapi, Shopify, or custom APIs depending on your requirements.",
  },
  {
    q: "Do you provide deployment and domain setup?",
    a: "Yes. We deploy to Vercel or VPS, connect domain/SSL, and provide handover guidance for updates.",
  },
  {
    q: "Do you provide after-sale support?",
    a: "Yes. We support after launch with fixes, improvements, and guidance to keep your website running smoothly.",
  },
  {
    q: "Do you work with clients in Bangladesh and abroad?",
    a: "Yes. We work with clients in Bangladesh and worldwide with clear milestones and updates.",
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
    name: "Next.js Website Development Services",
    serviceType: "Web Development",
    provider: {
      "@type": "Organization",
      name: "Mugnee IT Solutions",
      url: SITE_URL,
    },
    areaServed: ["Bangladesh", "Worldwide"],
    url: PAGE_URL,
    description:
      "Next.js website development for fast, SEO-friendly websites and web applications with premium UI, Core Web Vitals optimization, and schema-ready structure.",
  };

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
      { "@type": "ListItem", position: 3, name: "Next.js", item: PAGE_URL },
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

export default function NextJsServicePage() {
  const jsonLd = buildJsonLd();
  const snapshotCards = [
    {
      icon: Gauge,
      title: "Performance-first build",
      desc: "Core Web Vitals, image handling, caching strategy, and cleaner frontend delivery.",
      pills: ["LCP", "CLS", "INP"],
    },
    {
      icon: Search,
      title: "SEO-safe structure",
      desc: "Metadata, canonical, schema-ready layout, and crawl-friendly page architecture.",
      pills: ["Metadata", "Canonical", "Schema"],
    },
    {
      icon: Layers,
      title: "Reusable UI system",
      desc: "Section-based layout that keeps the site easier to scale and easier to maintain.",
      pills: ["Components", "Sections", "Scalable"],
    },
    {
      icon: Rocket,
      title: "Launch and handover",
      desc: "Deployment-ready build with organized delivery, testing notes, and support guidance.",
      pills: ["Deploy", "QA", "Handover"],
    },
  ];
  const useCaseCards = [
    {
      icon: Building2,
      title: "Business websites",
      desc: "For companies that need speed, trust, and clear service presentation.",
      pills: ["Lead generation", "Credibility", "SEO base"],
    },
    {
      icon: ShoppingCart,
      title: "Product and ecommerce fronts",
      desc: "Useful when catalog presentation, fast UX, and integration flexibility matter.",
      pills: ["Catalog", "Checkout flow", "Integrations"],
    },
    {
      icon: GraduationCap,
      title: "Content-heavy platforms",
      desc: "Great for blogs, education, and marketing sites where structure and performance matter.",
      pills: ["Content scale", "Routing", "Search intent"],
    },
  ];
  const flowSteps = [
    { icon: Workflow, title: "Plan structure", desc: "Goals, routes, sections, SEO needs, and content hierarchy." },
    { icon: Braces, title: "Build app", desc: "App Router setup, reusable sections, and stable frontend patterns." },
    { icon: Gauge, title: "Optimize quality", desc: "Performance, metadata, schema, and final QA improvements." },
    { icon: Cloud, title: "Launch safely", desc: "Deployment, testing, handover, and post-launch support guidance." },
  ];

  return (
    <main className="bg-white">
      {/* ✅ JSON-LD (single script) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ===========================
         HERO
         =========================== */}
      <section className="relative overflow-hidden bg-slate-950 pb-12 pt-24 sm:pb-16 sm:pt-28">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(85%_120%_at_12%_18%,rgba(56,189,248,0.22),transparent_45%),radial-gradient(72%_95%_at_86%_20%,rgba(250,204,21,0.18),transparent_50%),linear-gradient(120deg,#020617_0%,#111827_48%,#1e1b4b_100%)]" />
          <div className="absolute inset-0 opacity-[0.12] [background:radial-gradient(circle_at_1px_1px,rgba(255,255,255,.42)_1px,transparent_0)] [background-size:20px_20px]" />
          <div className="pointer-events-none absolute -left-14 top-20 h-64 w-64 rounded-full bg-sky-300/15 blur-3xl" />
          <div className="pointer-events-none absolute right-[-28px] top-16 h-72 w-72 rounded-full bg-yellow-300/15 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-6xl px-4">
          <nav className="text-xs font-bold text-white/85 drop-shadow">
            <Link prefetch={false} className="hover:text-white" href="/">Home</Link>
            <span className="mx-2 text-white/60">/</span>
            <Link prefetch={false} className="hover:text-white" href="/services">Services</Link>
            <span className="mx-2 text-white/60">/</span>
            <span className="text-yellow-300">Next.js</span>
          </nav>

          <div className="mt-10 grid gap-10 lg:grid-cols-[1.1fr_.9fr] lg:items-center">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[11px] font-extrabold tracking-[0.18em] text-white backdrop-blur">
                NEXT.JS PERFORMANCE ENGINEERING
              </p>

              <h1 className="mt-4 text-4xl font-extrabold leading-tight text-white sm:text-5xl">
                {TARGET_KEYWORD}
                <span className="text-yellow-300"> services</span>
              </h1>

              <p className="mt-4 max-w-2xl text-base leading-7 text-white/90 sm:text-lg">
                We build fast, SEO-safe Next.js websites with premium UI, App Router architecture, and conversion-focused page structure.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {[
                  "App Router",
                  "Core Web Vitals",
                  "SEO metadata + canonical",
                  "Schema-ready structure",
                  "Deploy-ready handover",
                ].map((t) => (
                  <span key={t} className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] font-extrabold text-white/90 backdrop-blur">
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-yellow-400 px-7 py-3.5 text-sm font-extrabold text-slate-900 shadow-[0_10px_30px_rgba(0,0,0,.25)] transition hover:-translate-y-[1px] hover:bg-yellow-500"
                >
                  Start Next.js Project
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </a>

                <a
                  href="#quotation"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/20 bg-white/10 px-7 py-3.5 text-sm font-extrabold text-white backdrop-blur transition hover:bg-white/15"
                >
                  Request a Quote
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>

              <div className="mt-7 grid gap-2 text-sm font-bold text-white/90 sm:grid-cols-2">
                <span className="inline-flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-yellow-300" /> Faster UX</span>
                <span className="inline-flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-emerald-300" /> SEO-safe structure</span>
                <span className="inline-flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-sky-300" /> Scalable architecture</span>
                <span className="inline-flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-fuchsia-300" /> Conversion-focused UI</span>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <HeroBadge icon={Gauge} title="Core Web Vitals" desc="LCP, CLS, INP optimization pass" />
              <HeroBadge icon={Search} title="SEO Foundation" desc="Metadata, canonical, clean URL setup" />
              <HeroBadge icon={Layers} title="Premium UI" desc="Reusable sections and component system" />
              <HeroBadge icon={Rocket} title="Launch Ready" desc="Vercel or VPS deploy with handover" />
            </div>
          </div>
        </div>
      </section>

      <ServiceCustomerGuide pillar="nextjs" />

      <ServiceQuickSummary
        title="Next.js in one quick view"
        intro="These visual blocks make the page easier to understand at a glance instead of relying only on long text."
        items={snapshotCards}
      />

      <ServiceUseCasesGrid
        title="Where Next.js helps most"
        intro="A simple view of the business scenarios where this stack usually creates the biggest UX and SEO benefit."
        items={useCaseCards}
      />

      <ServiceFlowStrip
        title="How a Next.js project moves"
        intro="A short flow so visitors can see what happens from planning to launch."
        steps={flowSteps}
      />

      <section className="mx-auto max-w-6xl px-4 py-12">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <p className="text-xs font-extrabold tracking-[0.24em] text-slate-500">
            WHAT IS NEXT.JS
          </p>
          <h2 className="mt-2 text-2xl font-extrabold text-slate-900 sm:text-3xl">
            What is Next.js Website Development?
          </h2>
          <p className="mt-3 max-w-4xl text-sm leading-7 text-slate-600 sm:text-base">
            Next.js is a React framework used to build fast, SEO-friendly websites and web apps.
            It combines routing, rendering strategy, performance optimization, and scalable architecture
            in one production-ready stack.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <NextPillarCard
              icon={Atom}
              title="React Foundation"
              desc="Component-driven UI for clean, reusable frontend development."
            />
            <NextPillarCard
              icon={LayoutDashboard}
              title="App Router"
              desc="Modern route structure for scalable page and feature growth."
            />
            <NextPillarCard
              icon={Gauge}
              title="Performance"
              desc="Built-in optimization patterns for Core Web Vitals and UX speed."
            />
            <NextPillarCard
              icon={Search}
              title="SEO Support"
              desc="Metadata, canonical, and index-safe structure for better discoverability."
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
            Key Benefits of This Next.js Solution
          </h2>
          <p className="mt-3 max-w-4xl text-sm leading-7 text-slate-600 sm:text-base">
            Next.js is powerful because it combines performance, SEO structure, and developer efficiency.
            For business owners, this means faster launches, better user experience, stronger ranking foundation,
            and easier long-term scaling.
          </p>

          <div className="mt-6 grid gap-4 lg:grid-cols-2">
            <article className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <h3 className="text-base font-extrabold text-slate-900">Why Next.js Is Effective</h3>
              <ul className="mt-3 space-y-2 text-sm font-semibold text-slate-700">
                {[
                  "Built-in routing and rendering patterns reduce architecture complexity",
                  "Strong performance tooling improves load speed and interaction quality",
                  "SEO-ready metadata and page structure improve crawl clarity",
                  "Reusable code patterns make feature expansion easier over time",
                ].map((point) => (
                  <li key={point} className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-yellow-400" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </article>

            <article className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <h3 className="text-base font-extrabold text-slate-900">How Customers Benefit</h3>
              <ul className="mt-3 space-y-2 text-sm font-semibold text-slate-700">
                {[
                  "Faster website experience that improves trust and conversion potential",
                  "Cleaner SEO implementation for long-term organic visibility",
                  "Lower rework cost due to scalable and maintainable code structure",
                  "Stronger release confidence with structured QA and deployment flow",
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
              "One framework for speed, SEO, and scalable growth",
              "Production-ready architecture with clean folder strategy",
              "Performance-first build for better Core Web Vitals",
              "Clear post-launch support and optimization roadmap",
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

      <section className="mx-auto max-w-6xl px-4 pb-12" id="nextjs-delivery-models">
        <DeliveryModelsSection />
      </section>
      
      {/* ===========================
         TRUST / E-E-A-T SECTION
         =========================== */}
      <section className="mx-auto max-w-6xl px-4 pt-6 pb-14">
        <div className="grid gap-6 lg:grid-cols-3">
          <TrustPanel />
          <TestimonialPanel />
          <InternalLinksPanel />
        </div>
      </section>
      
      
      {/* ===========================
         ✅ HOW WE WORK
         =========================== */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-extrabold tracking-[0.25em] text-slate-500">
                PROCESS
              </p>
              <h2 className="mt-2 text-3xl font-extrabold text-slate-900">
                How we deliver {TARGET_KEYWORD}
              </h2>
              <p className="mt-3 max-w-3xl text-sm text-slate-600 sm:text-base">
                Clear steps, clean delivery. We plan, design, build, optimize,
                deploy, and support—so your Next.js website stays fast and SEO-safe.
              </p>
            </div>

            <a
              href="#quotation"
              className="inline-flex w-fit items-center justify-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-extrabold text-white transition hover:bg-slate-800"
            >
              Start a project <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <ProcessStep
              icon={Workflow}
              title={`Planning for ${TARGET_KEYWORD}`}
              desc="Scope, pages, content, references, and timeline—so we build the right structure."
            />
            <ProcessStep
              icon={Sparkles}
              title="Premium UI & layout"
              desc="Modern sections, spacing system, reusable components, and conversion-first layout."
            />
            <ProcessStep
              icon={Gauge}
              title="SEO + performance"
              desc="Metadata/canonical, internal links, and Core Web Vitals-focused optimization."
            />
            <ProcessStep
              icon={BadgeCheck}
              title="Deploy + handover"
              desc="Deployment, domain/SSL, handover guide, and after-sale support for updates."
            />
          </div>
        </div>
      </section>
      
      
      {/* ===========================
         ✅ WHY US
         =========================== */}
      <section className="mx-auto max-w-6xl px-4 py-14">
        <p className="text-xs font-extrabold tracking-[0.25em] text-slate-500">
          WHY US
        </p>
        <h2 className="mt-2 text-3xl font-extrabold text-slate-900">
          Why choose us for Next.js projects?
        </h2>
        <p className="mt-3 max-w-3xl text-sm text-slate-600 sm:text-base">
          We deliver production-ready Next.js projects with clean architecture, QA discipline, and handover-ready code standards your team can maintain confidently.
        </p>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          <WhyCard
            icon={Code2}
            title="Clean code standards"
            desc="Modular, readable, and maintainable code structure built for long-term scaling."
          />
          <WhyCard
            icon={ShieldCheck}
            title="QA and SQA validation"
            desc="Every major module is tested through QA/SQA checks before final handover and deployment."
          />
          <WhyCard
            icon={Wrench}
            title="Handover-ready delivery"
            desc="Commented code, clean folder structure, and practical documentation for smooth ownership transfer."
          />
        </div>
      </section>
      
      
      {/* ===========================
         DELIVERABLES
         =========================== */}
      <section className="mx-auto max-w-6xl px-4 pb-14">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-extrabold tracking-[0.25em] text-slate-500">
              DELIVERABLES
            </p>
            <h2 className="mt-2 text-3xl font-extrabold text-slate-900">
              What you get {TARGET_KEYWORD} delivery
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">
              Built for growth: clean UI, performance strategy, and SEO-safe
              technical foundation.
            </p>
          </div>

          <a
            href="/contact"
            className="group inline-flex w-fit items-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-extrabold text-white transition hover:bg-slate-800"
          >
            Talk to us
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
          </a>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <SplitFeatureCard
            icon={Sparkles}
            title={`Premium UI for ${TARGET_KEYWORD}`}
            desc="Consistent spacing, reusable components, premium sections and clean layout flow."
            bullets={[
              "Component library",
              "Conversion-first sections",
              "Design consistency",
            ]}
            accent="yellow"
          />
          <SplitFeatureCard
            icon={Search}
            title={`SEO Foundation for ${TARGET_KEYWORD}`}
            desc="Index-safe setup: metadata, canonical URLs, internal linking plan, and optional schema."
            bullets={["Metadata + OG", "Canonical + sitemap", "FAQ schema optional"]}
            accent="sky"
          />
          <SplitFeatureCard
            icon={Gauge}
            title="Core Web Vitals Optimization"
            desc="Performance tuning for LCP/CLS/INP using Next/Image, font strategy and script hygiene."
            bullets={["Image optimization", "Font strategy", "Script strategy"]}
            accent="emerald"
          />
          <SplitFeatureCard
            icon={Layers}
            title="Scalable App Router Architecture"
            desc="App Router structure designed for growth—new pages and features stay maintainable."
            bullets={["App Router patterns", "Clean folders", "Reusable utilities"]}
            accent="slate"
          />
          <SplitFeatureCard
            icon={Server}
            title="Integrations"
            desc="Headless CMS, e-commerce, forms, CRM, analytics events and API integrations."
            bullets={["Headless CMS", "Shopify/API", "Analytics events"]}
            accent="violet"
          />
          <SplitFeatureCard
            icon={Rocket}
            title="Deploy + Handover"
            desc="Vercel/VPS deployment, SSL, basic monitoring tips, and handover notes for updates."
            bullets={["Deploy support", "Domain + SSL", "Handover guide"]}
            accent="amber"
          />
        </div>
      </section>
      
      
      {/* ===========================
         ✅ DATABASE SECTION
         =========================== */}
      <section className="bg-slate-50" id="databases">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-extrabold tracking-[0.25em] text-slate-500">
                DATABASE
              </p>
              <h2 className="mt-2 text-3xl font-extrabold text-slate-900">
                Database selection for {TARGET_KEYWORD}
              </h2>
              <p className="mt-3 max-w-3xl text-sm text-slate-600 sm:text-base">
                We select the database based on client requirements—considering data
                volume, performance, security, budget, hosting, and future
                scalability.
              </p>
            </div>

            <a
              href="#quotation"
              className="inline-flex w-fit items-center justify-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-extrabold text-white transition hover:bg-slate-800"
            >
              Discuss Database <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <DbCard
              icon={Database}
              title="PostgreSQL"
              desc="Relational, strong data integrity, scalable—business apps & portals."
              bullets={["ACID transactions", "Great for reporting", "High reliability"]}
            />
            <DbCard
              icon={HardDrive}
              title="MySQL / MariaDB"
              desc="Popular relational DB—fast, cost-effective for many web systems."
              bullets={["Widely supported", "Stable performance", "Hosting friendly"]}
            />
            <DbCard
              icon={Braces}
              title="MongoDB"
              desc="NoSQL document DB—flexible schema for dynamic content & quick iteration."
              bullets={["Schema flexibility", "Fast prototyping", "JSON-like documents"]}
            />
            <DbCard
              icon={Cloud}
              title="Firebase"
              desc="Realtime + auth-ready—startup MVP, small apps, fast launch."
              bullets={["Realtime data", "Auth & rules", "Quick MVP launch"]}
            />
            <DbCard
              icon={Server}
              title="Redis (Optional)"
              desc="Caching/session store to boost speed—useful for high traffic systems."
              bullets={["Caching layer", "Session store", "Faster response time"]}
            />
            <DbCard
              icon={Lock}
              title="Secure setup"
              desc="We follow secure DB patterns—access control, backups, and safe queries."
              bullets={["Role-based access", "Backups & restore plan", "Security best practices"]}
            />
          </div>

          <div className="mt-10 rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <div className="text-lg font-extrabold text-slate-900">
                  Not sure which DB fits your project?
                </div>
                <p className="mt-1 text-sm leading-6 text-slate-600">
                  Share your requirements (users, data type, features). We’ll suggest
                  the best database + architecture and include it in the quotation.
                </p>
              </div>

              <a
                href="/contact"
                className="group inline-flex w-fit items-center justify-center gap-2 rounded-full bg-yellow-400 px-7 py-3 text-sm font-extrabold text-slate-900 transition hover:-translate-y-[1px] hover:bg-yellow-500"
              >
                Contact for Recommendation
                <ArrowIcon />
              </a>
            </div>
          </div>
        </div>
      </section>
      
      
      {/* ===========================
         WHY NEXT.JS
         =========================== */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <div className="grid gap-10 lg:grid-cols-3">
            <div className="lg:col-span-1">
              <p className="text-xs font-extrabold tracking-[0.25em] text-slate-500">
                WHY NEXT.JS
              </p>
              <h2 className="mt-2 text-3xl font-extrabold text-slate-900">
                Built for ranking, speed, and trust.
              </h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Next.js gives you stronger SEO & performance signals when implemented
                correctly. We build {TARGET_KEYWORD} with a clean structure that
                Google can index reliably.
              </p>

              <div className="mt-7 rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
                <div className="text-sm font-extrabold text-slate-900">
                  What we implement (SEO-safe)
                </div>
                <div className="mt-4 space-y-3">
                  <IconLine icon={FileText} text="Heading structure (H1 → H2 → H3)" />
                  <IconLine icon={Link2} text="Internal links to related service pages" />
                  <IconLine icon={Search} text="Metadata, canonical, sitemap, robots" />
                  <IconLine icon={Lock} text="Security-friendly patterns and safe scripts" />
                </div>
              </div>

              <div className="mt-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="text-sm font-extrabold text-slate-900">More services</div>
                <div className="mt-4 grid gap-3">
                  <MiniLink href="/services/software-solution" title="Custom Software Solution" />
                  <MiniLink href="/services/seo" title="SEO Services" />
                  <MiniLink href="/services/wix" title="Wix Website Development" />
                </div>
              </div>
            </div>

            <div className="lg:col-span-2 grid gap-6 sm:grid-cols-2">
              <RailCard
                icon={Globe2}
                title="Business Websites"
                desc="High-trust pages, premium sections, and clear conversion flow."
                tags={["Services", "About", "Contact", "Lead capture"]}
              />
              <RailCard
                icon={Code2}
                title="Landing Pages"
                desc="Offer-focused layout that converts, fast load, analytics events ready."
                tags={["Offer", "Proof", "FAQ", "CTA"]}
              />
              <RailCard
                icon={LayoutDashboard}
                title="Dashboards"
                desc="Role-based UI, secure routing patterns, scalable components."
                tags={["Auth", "Roles", "Admin UI", "API"]}
              />
              <RailCard
                icon={LineChart}
                title="SEO Systems"
                desc="Schema, internal linking plan, structured metadata and performance strategy."
                tags={["Schema", "Sitemap", "Robots", "Speed"]}
              />
            </div>
          </div>
        </div>
      </section>
      
      
      {/* ===========================
         SEO CHECKLIST
         =========================== */}
      <section className="mx-auto max-w-6xl px-4 py-14">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-extrabold tracking-[0.25em] text-slate-500">
              TECHNICAL SEO CHECKLIST
            </p>
            <h2 className="mt-2 text-3xl font-extrabold text-slate-900">
              A clean SEO setup for {TARGET_KEYWORD}
            </h2>
            <p className="mt-3 max-w-2xl text-sm text-slate-600 sm:text-base">
              This section helps ranking because it shows clear deliverables + expertise (E-E-A-T).
            </p>
          </div>

          <a
            href="/contact"
            className="inline-flex w-fit items-center justify-center gap-2 rounded-full bg-yellow-400 px-6 py-3 text-sm font-extrabold text-slate-900 transition hover:bg-yellow-500"
          >
            Get a quote <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <ChecklistCard
            title="On-page SEO"
            icon={Search}
            items={[
              "Proper H1 + meaningful H2 structure",
              "Unique meta title/description per page",
              "Canonical URL + Open Graph tags",
              "Internal links to relevant pages",
            ]}
          />
          <ChecklistCard
            title="Performance + UX"
            icon={Gauge}
            items={[
              "Next/Image optimization strategy",
              "Font loading strategy to reduce CLS",
              "Safe script strategy (no blocking)",
              "Core Web Vitals focused improvements",
            ]}
          />
          <ChecklistCard
            title="Indexing & crawl"
            icon={GitBranch}
            items={[
              "Sitemap + robots best practices",
              "Clean URLs + stable routing",
              "No keyword stuffing / no thin pages",
              "Schema usage only when relevant",
            ]}
          />
          <ChecklistCard
            title="Trust signals"
            icon={ShieldCheck}
            items={[
              "Clear service description + deliverables",
              "Testimonials / proof blocks",
              "Process + handover clarity",
              "Contact / business information clarity",
            ]}
          />
        </div>
      </section>
      
      
      {/* ===========================
         PACKAGES (NO PRICE)
         =========================== */}
      <section className="bg-slate-50" id="packages">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-extrabold tracking-[0.28em] text-slate-500">
                PACKAGES
              </p>
              <h2 className="mt-2 text-3xl font-extrabold text-slate-900">
                Choose a {TARGET_KEYWORD} plan by scope
              </h2>
              <p className="mt-2 max-w-2xl text-sm text-slate-600">
                Final pricing depends on pages, content, integrations, and timeline.
                For exact cost — contact us with your scope.
              </p>
            </div>

            <a
              href="/contact"
              className="inline-flex w-fit items-center justify-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-extrabold text-white transition hover:bg-slate-800"
            >
              Request Quote <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            <PricingTile
              label="Starter"
              desc="Landing / small business site"
              perks={[
                "Up to 5 pages",
                "Premium UI sections",
                "Basic SEO + metadata",
                "Performance pass",
              ]}
            />
            <PricingTile
              featured
              label="Business"
              desc="Full website + tracking"
              perks={[
                "Up to 12 pages",
                "Conversion-first layout",
                "Technical SEO checklist",
                "Analytics + events",
              ]}
            />
            <PricingTile
              label="Custom / App"
              desc="Dashboards, portals, integrations"
              perks={[
                "Auth + roles (if needed)",
                "CMS / API integration",
                "Advanced UI components",
                "Deploy + handover",
              ]}
            />
          </div>

          <div className="mt-10 rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <div className="text-lg font-extrabold text-slate-900">
                  Need exact pricing?
                </div>
                <p className="mt-1 text-sm leading-6 text-slate-600">
                  Message your required pages + features. We’ll reply with a clear proposal,
                  timeline, and quotation.
                </p>
              </div>
              <a
                href="#quotation"
                className="group inline-flex w-fit items-center justify-center gap-2 rounded-full bg-yellow-400 px-7 py-3 text-sm font-extrabold text-slate-900 transition hover:-translate-y-[1px] hover:bg-yellow-500"
              >
                Contact for Quotation
                <ArrowIcon />
              </a>
            </div>
          </div>
        </div>
      </section>
      
      
      {/* ===========================
         INDUSTRIES
         =========================== */}
      <section className="mx-auto max-w-6xl px-4 py-14">
        <p className="text-xs font-extrabold tracking-[0.25em] text-slate-500">
          INDUSTRIES
        </p>
        <h2 className="mt-2 text-3xl font-extrabold text-slate-900">
          Industries We Serve with Next.js
        </h2>
        <p className="mt-3 max-w-3xl text-sm text-slate-600 sm:text-base">
          We adapt Next.js architecture by industry workflow, team size, content complexity,
          and performance requirements.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <IndustryChip
            icon={Stethoscope}
            title="Healthcare"
            desc="Service portals, appointment flows, and secure information architecture."
          />
          <IndustryChip
            icon={ShoppingCart}
            title="E-commerce"
            desc="Storefront performance, product pages, and conversion-first UX."
          />
          <IndustryChip
            icon={GraduationCap}
            title="Education"
            desc="Program pages, course structures, and learner-focused content systems."
          />
          <IndustryChip
            icon={Building2}
            title="Corporate and B2B"
            desc="Trust-driven websites, lead generation flow, and clean service architecture."
          />
          <IndustryChip
            icon={Factory}
            title="Operations and Manufacturing"
            desc="Process-oriented pages, performance dashboards, and scalable modules."
          />
          <IndustryChip
            icon={Truck}
            title="Logistics and Service Teams"
            desc="Tracking workflows, route/service content, and fast operational UI."
          />
          <IndustryChip
            icon={LayoutDashboard}
            title="SaaS and Portals"
            desc="App Router-based product UI with modular growth structure."
          />
          <IndustryChip
            icon={Rocket}
            title="Startups and MVPs"
            desc="Speed-first launch with room for rapid iteration and scaling."
          />
        </div>
      </section>
      
      
      {/* ===========================
         QUOTATION
         =========================== */}
      <section id="quotation" className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <p className="text-xs font-extrabold tracking-[0.25em] text-slate-500">
            GET QUOTATION
          </p>
          <h2 className="mt-2 text-3xl font-extrabold text-slate-900">
            Request a {TARGET_KEYWORD} project quotation.
          </h2>
          <p className="mt-3 max-w-2xl text-sm text-slate-600 sm:text-base">
            Share your scope and goals. We’ll reply with a clear plan, timeline, and quotation—based on your exact requirements.
          </p>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            <QuoteCard
              title="Send Requirements"
              desc="Pages, features, references, deadline and budget range (optional)."
              items={["Website or Web App", "Pages & features", "Reference links", "Timeline"]}
            />
            <QuoteCard
              title="Get a Proposal"
              desc="We respond with deliverables, milestones and a technical plan."
              items={["Milestone plan", "Tech stack", "SEO checklist", "Delivery scope"]}
              highlighted
            />
            <QuoteCard
              title="Start the Project"
              desc="Kick-off after confirmation. Regular updates until final delivery."
              items={["Weekly updates", "QA + handover", "Deployment support", "Post-launch help"]}
            />
          </div>
        </div>
      </section>
      
      
      {/* ===========================
         FAQ
         =========================== */}
      <section className="mx-auto max-w-6xl px-4 py-14">
        <p className="text-xs font-extrabold tracking-[0.25em] text-slate-500">
          FAQ
        </p>
        <h2 className="mt-2 text-3xl font-extrabold text-slate-900">
          Common questions related to {TARGET_KEYWORD}.
        </h2>

        <div className="mt-10 grid gap-4 lg:grid-cols-2">
          {faqs.map((f) => (
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
            <div>
              <div className="text-lg font-extrabold text-slate-900">
                Ready to build a Next.js site that ranks and converts?
              </div>
              <p className="mt-1 text-sm text-slate-600">
                Share requirements — we’ll reply with plan, timeline & quotation.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Link prefetch={false}
                href="/contact"
                className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-yellow-400 px-7 py-3 text-sm font-extrabold text-slate-900 shadow-[0_14px_40px_rgba(250,204,21,0.22)] transition hover:-translate-y-[1px] hover:bg-yellow-500"
              >
                <span className="pointer-events-none absolute -left-10 top-0 h-full w-10 rotate-12 bg-white/35 blur-sm transition-all duration-500 group-hover:left-[120%]" />
                Request Quote <ArrowIcon />
              </Link>

              <Link prefetch={false}
                href="/services"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-7 py-3 text-sm font-extrabold text-slate-900 transition hover:bg-slate-100"
              >
                See All Services <ArrowIconPlain />
              </Link>
            </div>
          </div>
        </div>
      </section>
      
    </main>
  );
}

/* ---------------- UI Bits ---------------- */

function ArrowIcon() {
  return (
    <span className="inline-flex">
      <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
    </span>
  );
}
function ArrowIconPlain() {
  return (
    <span className="inline-flex">
      <ArrowRight className="h-4 w-4" />
    </span>
  );
}

/* HERO floating badge (glass) */
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

/* ✅ Process step */
function NextPillarCard({
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

function ProcessStep({
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

/* ✅ Why card */
function WhyCard({
  icon: Icon,
  title,
  desc,
}: {
  icon: LucideIcon;
  title: string;
  desc: string;
}) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <div className="flex items-start gap-4">
        <div className="grid h-12 w-12 place-items-center rounded-2xl bg-yellow-100 ring-1 ring-yellow-200">
          <Icon className="h-6 w-6 text-slate-900" />
        </div>
        <div>
          <div className="text-lg font-extrabold text-slate-900">{title}</div>
          <p className="mt-1 text-sm leading-7 text-slate-600">{desc}</p>
        </div>
      </div>
    </div>
  );
}

/* ✅ DB Card */
function DbCard({
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
    <div className="group overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <div className="flex items-start gap-4">
        <div className="grid h-12 w-12 place-items-center rounded-2xl bg-slate-900">
          <Icon className="h-6 w-6 text-white" />
        </div>
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

/* E-E-A-T */
function TrustPanel() {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex items-start gap-3">
        <span className="grid h-12 w-12 place-items-center rounded-2xl bg-slate-900">
          <ShieldCheck className="h-6 w-6 text-white" />
        </span>
        <div>
          <div className="text-lg font-extrabold text-slate-900">
            Trust-first delivery
          </div>
          <p className="mt-1 text-sm leading-6 text-slate-600">
            Clean structure, index-safe SEO, and performance strategy—built for long-term reliability.
          </p>
        </div>
      </div>

      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        <MiniProof label="SEO-safe setup" value="Canonical + metadata" />
        <MiniProof label="Performance focus" value="Core Web Vitals" />
        <MiniProof label="Premium UI" value="Reusable system" />
        <MiniProof label="Support" value="Deploy + handover" />
      </div>
    </div>
  );
}

function MiniProof({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
      <div className="text-xs font-bold text-slate-500">{label}</div>
      <div className="mt-1 text-sm font-extrabold text-slate-900">{value}</div>
    </div>
  );
}

function TestimonialPanel() {
  const items = [
    {
      title: "Better engagement",
      text: "After speed + UI improvements, bounce rate usually drops and conversions improve.",
    },
    {
      title: "Cleaner indexing",
      text: "Schema only where relevant, no keyword stuffing—so Google doesn’t flag the page.",
    },
  ];

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex items-start gap-3">
        <span className="grid h-12 w-12 place-items-center rounded-2xl bg-yellow-100">
          <Quote className="h-6 w-6 text-slate-900" />
        </span>
        <div>
          <div className="text-lg font-extrabold text-slate-900">
            What clients care about
          </div>
          <p className="mt-1 text-sm leading-6 text-slate-600">
            Results-focused delivery—rank, speed, and conversion.
          </p>
        </div>
      </div>

      <div className="mt-6 space-y-4">
        {items.map((x) => (
          <div
            key={x.title}
            className="rounded-2xl border border-slate-200 bg-white p-4"
          >
            <div className="text-sm font-extrabold text-slate-900">{x.title}</div>
            <p className="mt-1 text-sm leading-6 text-slate-600">{x.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ✅ UPDATED: internal links for Next.js cluster */
function InternalLinksPanel() {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex items-start gap-3">
        <span className="grid h-12 w-12 place-items-center rounded-2xl bg-sky-100">
          <Link2 className="h-6 w-6 text-slate-900" />
        </span>
        <div>
          <div className="text-lg font-extrabold text-slate-900">
            Next.js cluster pages
          </div>
          <p className="mt-1 text-sm leading-6 text-slate-600">
            Supporting pages that strengthen service relevance and internal linking (Google-safe).
          </p>
        </div>
      </div>

      <div className="mt-6 grid gap-3">
        <SmartLink
          href="/services/nextjs/technical-seo"
          title="Next.js Technical SEO"
          desc="Metadata, canonical, sitemap/robots and schema-safe implementation."
        />
        <SmartLink
          href="/services/nextjs/core-web-vitals"
          title="Core Web Vitals Optimization"
          desc="LCP/CLS/INP improvements for faster, ranking-ready pages."
        />
        <SmartLink
          href="/services/nextjs/business-website"
          title="Business Website Development"
          desc="Premium corporate layout with trust blocks and SEO-ready structure."
        />
        <SmartLink
          href="/services/nextjs/worldwide"
          title="Worldwide Delivery"
          desc="Remote workflow for Bangladesh and global clients (no location spam)."
        />

        <div className="mt-2 border-t border-slate-200 pt-4">
          <div className="text-xs font-extrabold tracking-[0.22em] text-slate-500">
            MORE SERVICES
          </div>
          <div className="mt-3 grid gap-3">
            <SmartLink
              href="/services/seo"
              title="SEO Services"
              desc="Technical SEO + content strategy for long-term growth."
            />
            <SmartLink
              href="/services/software-solution"
              title="Custom Software Solution"
              desc="Dashboards, portals, automation and custom web systems."
            />
          </div>
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
    <a
      href={href}
      className="group rounded-2xl border border-slate-200 bg-slate-50 p-4 transition hover:bg-white"
    >
      <div className="flex items-center justify-between">
        <div className="text-sm font-extrabold text-slate-900">{title}</div>
        <ArrowRight className="h-4 w-4 text-slate-400 transition group-hover:translate-x-1" />
      </div>
      <p className="mt-1 text-sm text-slate-600">{desc}</p>
    </a>
  );
}

function MiniLink({ href, title }: { href: string; title: string }) {
  return (
    <a
      href={href}
      className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-extrabold text-slate-900 transition hover:bg-white"
    >
      {title}
    </a>
  );
}

/* Split feature card */
function SplitFeatureCard({
  icon: Icon,
  title,
  desc,
  bullets,
  accent,
}: {
  icon: LucideIcon;
  title: string;
  desc: string;
  bullets: string[];
  accent: "yellow" | "sky" | "emerald" | "slate" | "violet" | "amber";
}) {
  const accentMap: Record<string, string> = {
    yellow: "from-yellow-200/70 to-yellow-50",
    sky: "from-sky-200/70 to-sky-50",
    emerald: "from-emerald-200/70 to-emerald-50",
    slate: "from-slate-200/70 to-slate-50",
    violet: "from-violet-200/70 to-violet-50",
    amber: "from-amber-200/70 to-amber-50",
  };

  return (
    <div className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <div className={`h-2 w-full bg-gradient-to-r ${accentMap[accent]}`} />
      <div className="p-6">
        <div className="flex items-start gap-3">
          <div className="grid h-12 w-12 place-items-center rounded-2xl bg-slate-900">
            <Icon className="h-6 w-6 text-white" />
          </div>
          <div>
            <div className="text-lg font-extrabold text-slate-900">{title}</div>
            <p className="mt-1 text-sm leading-6 text-slate-600">{desc}</p>
          </div>
        </div>

        <div className="mt-5 space-y-2">
          {bullets.map((b) => (
            <div key={b} className="flex items-start gap-2 text-sm text-slate-700">
              <span className="mt-1 grid h-5 w-5 place-items-center rounded-full bg-emerald-50 ring-1 ring-emerald-100">
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
              </span>
              <span className="leading-6">{b}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* Rail card */
function RailCard({
  icon: Icon,
  title,
  desc,
  tags,
}: {
  icon: LucideIcon;
  title: string;
  desc: string;
  tags: string[];
}) {
  return (
    <div className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <div className="pointer-events-none absolute -left-24 top-0 h-[180px] w-[180px] rounded-full bg-sky-200/60 blur-2xl opacity-0 transition-opacity group-hover:opacity-100" />
      <div className="flex items-start gap-4">
        <div className="grid h-12 w-12 place-items-center rounded-2xl bg-yellow-100 ring-1 ring-yellow-200">
          <Icon className="h-6 w-6 text-slate-900" />
        </div>
        <div>
          <h3 className="text-lg font-extrabold text-slate-900">{title}</h3>
          <p className="mt-1 text-sm leading-6 text-slate-600">{desc}</p>
        </div>
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        {tags.map((t) => (
          <span
            key={t}
            className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-bold text-slate-700"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="mt-6 flex items-center gap-2 text-sm font-extrabold text-slate-900">
        Learn more
        <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
      </div>
    </div>
  );
}

function IconLine({ icon: Icon, text }: { icon: LucideIcon; text: string }) {
  return (
    <div className="flex items-start gap-3 text-sm text-slate-700">
      <span className="mt-0.5 grid h-9 w-9 place-items-center rounded-2xl bg-slate-900">
        <Icon className="h-4 w-4 text-white" />
      </span>
      <span className="leading-6">{text}</span>
    </div>
  );
}

/* Checklist card */
function ChecklistCard({
  title,
  icon: Icon,
  items,
}: {
  title: string;
  icon: LucideIcon;
  items: string[];
}) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
      <div className="flex items-center gap-3">
        <div className="grid h-12 w-12 place-items-center rounded-2xl bg-slate-900">
          <Icon className="h-6 w-6 text-white" />
        </div>
        <div className="text-lg font-extrabold text-slate-900">{title}</div>
      </div>
      <div className="mt-6 space-y-3">
        {items.map((i) => (
          <div key={i} className="flex items-start gap-2 text-sm text-slate-700">
            <span className="mt-1 h-2 w-2 rounded-full bg-yellow-400" />
            <span className="leading-6">{i}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ✅ Pricing tile (NO price) */
function PricingTile({
  label,
  desc,
  perks,
  featured,
}: {
  label: string;
  desc: string;
  perks: string[];
  featured?: boolean;
}) {
  return (
    <div
      className={[
        "relative overflow-hidden rounded-3xl border bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg",
        featured ? "border-yellow-300 ring-1 ring-yellow-200" : "border-slate-200",
      ].join(" ")}
    >
      {featured && (
        <div className="absolute right-4 top-4 rounded-full bg-yellow-100 px-3 py-1 text-xs font-extrabold text-yellow-700">
          Best Value
        </div>
      )}

      <div className="flex items-center justify-between">
        <div className="text-sm font-extrabold text-slate-900">{label}</div>
        <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-extrabold text-slate-700">
          {featured ? "Recommended" : "Scope-based"}
        </span>
      </div>

      <div className="mt-3 text-xl font-extrabold text-slate-900">
        Contact for Pricing
      </div>
      <p className="mt-2 text-sm text-slate-600">{desc}</p>

      <div className="mt-5 rounded-2xl border border-slate-200 bg-slate-50 p-4">
        <div className="text-xs font-bold text-slate-500">Pricing note</div>
        <div className="mt-1 text-sm font-extrabold text-slate-900">
          Price depends on pages, features & integrations.
        </div>
      </div>

      <div className="mt-6 space-y-3">
        {perks.map((p) => (
          <div key={p} className="flex items-start gap-2 text-sm text-slate-700">
            <span className="mt-1 grid h-5 w-5 place-items-center rounded-full bg-emerald-50 ring-1 ring-emerald-100">
              <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
            </span>
            <span className="leading-6">{p}</span>
          </div>
        ))}
      </div>

      <a
        href="/contact"
        className={[
          "group mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-extrabold transition",
          featured
            ? "bg-yellow-400 text-slate-900 hover:bg-yellow-500"
            : "bg-slate-900 text-white hover:bg-slate-800",
        ].join(" ")}
      >
        Contact Us
        <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
      </a>
    </div>
  );
}

function DeliveryModelsSection() {
  const models = [
    {
      icon: Workflow,
      title: "Agile Scrum",
      tag: "SCRUM",
      tagClass: "bg-sky-100 text-sky-700 border-sky-200",
      whatItIs:
        "An iterative model with sprint planning, implementation, review, and improvement cycles.",
      howWeUse:
        "Best for evolving Next.js projects where priorities change with business feedback.",
      points: [
        "Sprint-based planning and delivery",
        "Backlog prioritization with stakeholder input",
        "Continuous QA and incremental release",
      ],
    },
    {
      icon: LayoutDashboard,
      title: "Kanban",
      tag: "KANBAN",
      tagClass: "bg-emerald-100 text-emerald-700 border-emerald-200",
      whatItIs:
        "A continuous flow model where tasks move through clear visual stages.",
      howWeUse:
        "Best for support, optimization, bug fixes, and ongoing enhancement.",
      points: [
        "Live status visibility from To-do to Done",
        "Fast response for urgent issues",
        "Steady delivery without sprint overhead",
      ],
    },
    {
      icon: FolderTree,
      title: "Waterfall",
      tag: "WATERFALL",
      tagClass: "bg-amber-100 text-amber-700 border-amber-200",
      whatItIs:
        "A step-by-step model where each phase is approved before moving forward.",
      howWeUse:
        "Best for fixed-scope projects with clear documentation and approval gates.",
      points: [
        "Structured scope and milestone planning",
        "Formal sign-off by project phase",
        "Predictable delivery path for fixed requirements",
      ],
    },
    {
      icon: GitBranch,
      title: "DevOps (CI/CD-Oriented)",
      tag: "DEVOPS",
      tagClass: "bg-violet-100 text-violet-700 border-violet-200",
      whatItIs:
        "A model focused on automated integration, deployment, monitoring, and release stability.",
      howWeUse:
        "Best for production-focused Next.js systems that need reliable releases and faster rollback safety.",
      points: [
        "CI/CD-oriented release workflow",
        "Environment consistency and deployment discipline",
        "Faster code-to-production feedback loop",
      ],
    },
  ];

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
      <p className="text-xs font-extrabold tracking-[0.25em] text-slate-500">
        POPULAR DELIVERY MODELS
      </p>
      <h2 className="mt-2 text-3xl font-extrabold text-slate-900">
        Popular Software Delivery Models We Follow
      </h2>
      <p className="mt-3 max-w-4xl text-sm leading-7 text-slate-600 sm:text-base">
        We choose the model based on scope, risk, change frequency, and deadline pressure.
        This keeps delivery structured while maintaining quality and release confidence.
      </p>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {models.map((m) => (
          <article key={m.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <div className="flex items-start gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-2xl bg-slate-900">
                <m.icon className="h-5 w-5 text-white" />
              </span>
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-base font-extrabold text-slate-900">{m.title}</h3>
                  <span className={`rounded-full border px-2.5 py-1 text-[10px] font-extrabold tracking-wide ${m.tagClass}`}>
                    {m.tag}
                  </span>
                </div>
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

function IndustryChip({
  icon: Icon,
  title,
  desc,
}: {
  icon: LucideIcon;
  title: string;
  desc: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <div className="flex items-start gap-3">
        <span className="grid h-10 w-10 place-items-center rounded-2xl bg-slate-900">
          <Icon className="h-5 w-5 text-white" />
        </span>
        <div>
          <div className="text-sm font-extrabold text-slate-900">{title}</div>
          <p className="mt-1 text-xs leading-5 text-slate-600">{desc}</p>
        </div>
      </div>
    </div>
  );
}

/* Quote cards */
function QuoteCard({
  title,
  desc,
  items,
  highlighted,
}: {
  title: string;
  desc: string;
  items: string[];
  highlighted?: boolean;
}) {
  return (
    <div
      className={[
        "relative overflow-hidden rounded-3xl border bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg",
        highlighted ? "border-yellow-300 ring-1 ring-yellow-200" : "border-slate-200",
      ].join(" ")}
    >
      {highlighted && (
        <div className="absolute right-4 top-4 rounded-full bg-yellow-100 px-3 py-1 text-xs font-extrabold text-yellow-700">
          Recommended
        </div>
      )}

      <h3 className="text-lg font-extrabold text-slate-900">{title}</h3>
      <p className="mt-2 text-sm text-slate-600">{desc}</p>

      <ul className="mt-5 space-y-2">
        {items.map((i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-slate-700">
            <span className="mt-1 h-2 w-2 rounded-full bg-yellow-400" />
            <span className="leading-6">{i}</span>
          </li>
        ))}
      </ul>

      <a
        href="/contact"
        className="group relative mt-7 inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-full bg-yellow-400 px-6 py-3 text-sm font-extrabold text-slate-900 shadow-[0_14px_40px_rgba(250,204,21,0.18)] transition hover:-translate-y-[1px] hover:bg-yellow-500"
      >
        <span className="pointer-events-none absolute -left-10 top-0 h-full w-10 rotate-12 bg-white/35 blur-sm transition-all duration-500 group-hover:left-[120%]" />
        Request Quote <ArrowIcon />
      </a>
    </div>
  );
}













