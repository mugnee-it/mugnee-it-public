// app/services/web-scraping/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Database,
  Workflow,
  FileJson,
  CloudDownload,
  Search,
  Zap,
  Lock,
  Rocket,
  BadgeCheck,
  Mail,
  Timer,
  MessageCircle,
  PhoneCall,
  Layers,
  Check,
  Shield,
} from "lucide-react";
import { ServiceCustomerGuide } from "@/components/sections/ServiceVisualBlocks";

/** ✅ PUBLISH SAFE: Hardcoded domain (NO localhost / NO env) */
const SITE_URL = "https://mugneeit.com"; // ✅ change only if domain changes

const PAGE_PATH = "/services/web-scraping/";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

const TARGET_KEYWORD = "Web Scraping Service";

// ✅ keep title reasonable
const META_TITLE = "Web Scraping Service | Data Extraction + Automation";
const OG_TITLE = "Web Scraping — Data Extraction + Automation";

export const metadata: Metadata = {
  title: META_TITLE,
  description:
    "Professional web scraping and data extraction: product lists, leads, directories, real estate, jobs, and monitoring. Export to CSV/JSON/Sheets with validation and automation.",
  alternates: { canonical: PAGE_URL },

  metadataBase: new URL(SITE_URL),

  keywords: [
    "Web Scraping Service",
    "Data Extraction Service",
    "Lead Scraping",
    "Product Scraping",
    "Directory Scraping",
    "Price Monitoring",
    "CSV Export",
    "JSON Export",
    "Google Sheets Automation",
    "Bangladesh web scraping",
  ],

  openGraph: {
    title: OG_TITLE,
    description:
      "We build reliable scrapers and data pipelines with clean export (CSV/Excel/JSON/Google Sheets) and automation.",
    url: PAGE_URL,
    siteName: "Mugnee IT Solutions",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: OG_TITLE,
    description:
      "Reliable web scraping and data pipelines with clean export (CSV/Excel/JSON/Google Sheets) and automation.",
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

const tel = "tel:+8801958645415";
const wa = "https://wa.me/8801958645415";

const faqs = [
  {
    q: "Is web scraping legal?",
    a: "Legality depends on the website’s terms, the data type, and how you use it. We suggest compliant approaches, avoid restricted/private data, and propose API-based alternatives when available.",
  },
  {
    q: "Can you scrape dynamic websites (React/Next.js) and JS-rendered pages?",
    a: "Yes. We can use browser automation when necessary for JS-rendered pages, and prefer API/HTML approaches when available for better speed and stability.",
  },
  {
    q: "What data formats do you deliver?",
    a: "We commonly deliver CSV, Excel, JSON, Google Sheets, Airtable, or direct database insertion (PostgreSQL/MySQL). The format depends on your workflow.",
  },
  {
    q: "Do you handle pagination, infinite scroll, filters, and categories?",
    a: "Yes. We handle pagination, “load more”, infinite scroll, category pages, filters, and multi-level product structures—based on scope and target site behavior.",
  },
  {
    q: "Can you scrape product price, stock, variants, and images?",
    a: "Yes. We can extract title, price, stock status, variants (size/color), images, category, SKU, and product URLs—depending on site structure and access limitations.",
  },
  {
    q: "Do you provide data cleaning (dedupe/validation/normalization)?",
    a: "Yes. We dedupe records, normalize fields (phone format, dates, currency), validate required columns, and deliver clean structured datasets you can actually use.",
  },
  {
    q: "Can you monitor price changes and send alerts?",
    a: "Yes. We can build monitoring workflows and notify you via email, Google Sheets updates, or custom alerts (scope-based).",
  },
  {
    q: "Can you run scraping daily/weekly automatically?",
    a: "Yes. We automate via VPS/cron, container-based deployment, or serverless workflows. We can also add logs, retries, and failure alerts.",
  },
  {
    q: "Do you handle anti-bot protections and rate limits?",
    a: "We follow responsible scraping patterns: throttling, retries, session handling, and polite rate limits. For heavily-protected sites, we suggest compliant alternatives or adjusted scope.",
  },
  {
    q: "Can you extract leads from local directories (name, phone, email, address)?",
    a: "Yes—when those details are publicly available. We avoid private/restricted data and follow best practices.",
  },
  {
    q: "Can you scrape real estate or job listings?",
    a: "Yes. We can extract listing title, price/salary, location, details, company/agent info, dates, and URLs—then export to Sheets/CSV/DB.",
  },
  {
    q: "Will you provide a sample before final delivery?",
    a: "Yes. We can provide a small sample output (few rows) to confirm fields, formatting, and quality before a full run (scope-based).",
  },
  {
    q: "Do you provide documentation and handover?",
    a: "Yes. We provide field mapping, output schema, run instructions, and automation schedule details (if automation is included).",
  },
  {
    q: "Do you have fixed public pricing?",
    a: "We don’t show fixed public pricing because scope varies by pages, anti-bot complexity, data volume, and automation needs. You can request a quotation anytime.",
  },
  {
    q: "How fast can you deliver?",
    a: "Timeline depends on complexity. Small datasets are fast; medium jobs take longer; automated pipelines need more time. We share an accurate timeline after reviewing the target site + field list.",
  },
  {
    q: "Can you integrate the data into my system or database?",
    a: "Yes. We can push data into PostgreSQL/MySQL, export to Google Sheets/Airtable, or provide API-ready JSON outputs—based on your workflow.",
  },
];

/** ✅ Google-safe JSON-LD (NO Offer/price, NO fake social, NO misleading claims) */
function buildJsonLd() {
  const org = {
    "@type": "Organization",
    name: "Mugnee IT Solutions",
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
  };

  const website = {
    "@type": "WebSite",
    name: "Mugnee IT Solutions",
    url: SITE_URL,
  };

  const service = {
    "@type": "Service",
    name: "Web Scraping & Data Extraction",
    serviceType: TARGET_KEYWORD,
    provider: { "@type": "Organization", name: "Mugnee IT Solutions", url: SITE_URL },
    areaServed: ["Bangladesh", "Worldwide"],
    url: PAGE_URL,
    description:
      "Professional web scraping and data extraction with clean export (CSV/Excel/JSON/Google Sheets) plus validation, dedupe and automation options.",
  };

  const webpage = {
    "@type": "WebPage",
    name: META_TITLE,
    url: PAGE_URL,
    description:
      "Web scraping and data extraction service for leads, product catalogs, monitoring, and automation. Export to CSV/JSON/Sheets with validation.",
    isPartOf: { "@type": "WebSite", name: "Mugnee IT Solutions", url: SITE_URL },
  };

  const breadcrumb = {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
      { "@type": "ListItem", position: 2, name: "Services", item: `${SITE_URL}/services/` },
      { "@type": "ListItem", position: 3, name: "Web Scraping", item: PAGE_URL },
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
    "@graph": [org, website, service, webpage, breadcrumb, faq],
  };
}

const useCases = [
  {
    icon: Search,
    title: "Leads & Directories",
    desc: "Company name, phone, email, address, category, website link.",
    tags: ["B2B leads", "Local listings", "Directories"],
  },
  {
    icon: Database,
    title: "Product Catalogs",
    desc: "Title, price, variants, stock, category, images, URL.",
    tags: ["Ecommerce", "Competitors", "Pricing"],
  },
  {
    icon: FileJson,
    title: "Content & Articles",
    desc: "Titles, authors, dates, tags, and content blocks.",
    tags: ["Blog import", "Research", "Archive"],
  },
  {
    icon: Workflow,
    title: "Monitoring",
    desc: "Daily/weekly tracking with alerts for changes.",
    tags: ["Price changes", "New listings", "Availability"],
  },
  {
    icon: Lock,
    title: "Responsible scraping",
    desc: "We avoid restricted/private data and follow best practices.",
    tags: ["Terms-aware", "Rate limits", "Safer approach"],
  },
  {
    icon: Zap,
    title: "Automation",
    desc: "Schedule runs + exports + notifications.",
    tags: ["Cron/VPS", "Email alerts", "Logs"],
  },
];

const plans = [
  {
    title: "Starter",
    subtitle: "Small scrape / one-time export",
    items: ["Up to ~1,000 rows (approx.)", "CSV / JSON export", "Basic cleanup", "One-time delivery"],
    cta: "Get Quote",
  },
  {
    title: "Business",
    subtitle: "Bigger dataset + validation",
    featured: true,
    items: [
      "Up to ~10,000 rows (approx.)",
      "Dedupe + validation rules",
      "Sheets/DB export options",
      "Better stability for larger runs",
    ],
    cta: "Get Quote",
  },
  {
    title: "Automation",
    subtitle: "Scheduled scraping + alerts",
    items: ["Daily/weekly runs", "Retry + throttling strategy", "Notifications + logs", "Deployment support (scope-based)"],
    cta: "Discuss Quote",
  },
];

const keywordPages = [
  {
    title: "Web Scraping Service Bangladesh",
    desc: "Local‑market focused scraping with compliance‑first delivery and clean exports.",
    href: "/services/web-scraping/bangladesh",
  },
  {
    title: "Data Extraction Service",
    desc: "Structured data extraction for catalogs, directories, and research workflows.",
    href: "/services/web-scraping/data-extraction",
  },
  {
    title: "Lead Scraping Service",
    desc: "B2B lead lists from public sources with validation and dedupe.",
    href: "/services/web-scraping/lead-scraping",
  },
  {
    title: "Product & Price Scraping",
    desc: "Monitor product price, stock, and variants across competitors.",
    href: "/services/web-scraping/product-price-scraping",
  },
  {
    title: "Google Sheets Scraping Automation",
    desc: "Automated scraping with scheduled updates into Google Sheets.",
    href: "/services/web-scraping/google-sheets-automation",
  },
];

export default function WebScrapingServicePage() {
  const jsonLd = buildJsonLd();

  return (
    <main className="bg-white text-slate-900">
      {/* ✅ JSON-LD single script */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* ✅ sticky header spacer */}
      <div className="h-16 sm:h-20" aria-hidden="true" />

      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden bg-slate-950 pb-12 pt-24 sm:pb-16 sm:pt-28" aria-labelledby="scraping-hero-title">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(80%_120%_at_10%_15%,rgba(34,211,238,0.22),transparent_45%),radial-gradient(70%_90%_at_85%_20%,rgba(250,204,21,0.20),transparent_50%),linear-gradient(120deg,#020617_0%,#0b1120_48%,#111827_100%)]" />
          <div className="absolute inset-0 opacity-[0.12] [background:radial-gradient(circle_at_1px_1px,rgba(255,255,255,.45)_1px,transparent_0)] [background-size:20px_20px]" />
          <div className="pointer-events-none absolute -left-16 top-20 h-64 w-64 rounded-full bg-cyan-300/15 blur-3xl" />
          <div className="pointer-events-none absolute right-[-40px] top-16 h-72 w-72 rounded-full bg-yellow-300/15 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-6xl px-4">
          <nav className="text-xs font-bold text-white/85 drop-shadow">
            <Link prefetch={false} href="/" className="hover:text-white">Home</Link>
            <span className="mx-2 text-white/60">/</span>
            <Link prefetch={false} href="/services" className="hover:text-white">Services</Link>
            <span className="mx-2 text-white/60">/</span>
            <span className="text-cyan-300">Web Scraping</span>
          </nav>

          <div className="mt-10 grid gap-10 lg:grid-cols-[1.1fr_.9fr] lg:items-center">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[11px] font-extrabold tracking-[0.18em] text-white backdrop-blur">
                DATA PIPELINE STUDIO
              </p>

              <h1 id="scraping-hero-title" className="mt-4 text-4xl font-extrabold leading-tight text-white sm:text-5xl">
                {TARGET_KEYWORD}
                <span className="text-cyan-300"> with clean automation</span>
              </h1>

              <p className="mt-4 max-w-2xl text-base leading-7 text-white/90 sm:text-lg">
                We collect, clean, validate, and deliver business-ready datasets from public sources with reliable export and optional scheduling.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {[
                  "Lead and Product Scraping",
                  "Validation + Dedupe",
                  "CSV / JSON / Sheets",
                  "Monitoring and Alerts",
                  "Automation Ready",
                ].map((tag) => (
                  <span key={tag} className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] font-extrabold text-white backdrop-blur">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="/contact/"
                  className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-yellow-400 px-7 py-3.5 text-sm font-extrabold text-slate-900 shadow-[0_10px_30px_rgba(0,0,0,.25)] transition hover:-translate-y-[1px] hover:bg-yellow-500"
                >
                  Start Scraping Project
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </a>
                <a
                  href={wa}
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/20 bg-white/10 px-7 py-3.5 text-sm font-extrabold text-white backdrop-blur transition hover:bg-white/15"
                >
                  WhatsApp <MessageCircle className="h-4 w-4" />
                </a>
                <a
                  href={tel}
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/20 bg-white/10 px-7 py-3.5 text-sm font-extrabold text-white backdrop-blur transition hover:bg-white/15"
                >
                  Call <PhoneCall className="h-4 w-4" />
                </a>
              </div>
            </div>

            <div className="grid gap-4">
              <div className="rounded-3xl border border-white/20 bg-white/10 p-6 backdrop-blur">
                <div className="flex items-center justify-between">
                  <div className="text-sm font-extrabold uppercase tracking-widest text-white/90">Pipeline Snapshot</div>
                  <span className="rounded-full bg-cyan-300/20 px-3 py-1 text-xs font-extrabold text-cyan-200">LIVE</span>
                </div>
                <div className="mt-4 space-y-3">
                  <HeroRow icon={Search} title="Collect" desc="Public pages, pagination, filters" />
                  <HeroRow icon={FileJson} title="Transform" desc="Field map, normalize, structure" />
                  <HeroRow icon={ShieldCheck} title="Validate" desc="Dedupe and quality checks" />
                  <HeroRow icon={CloudDownload} title="Deliver" desc="CSV, JSON, Sheets, DB" />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                {[
                  { k: "99%+", v: "Field accuracy target" },
                  { k: "24/7", v: "Automation support" },
                  { k: "Remote", v: "Global delivery" },
                ].map((s) => (
                  <div key={s.v} className="rounded-2xl border border-white/20 bg-white/10 p-4 text-center backdrop-blur">
                    <div className="text-xl font-extrabold text-yellow-300">{s.k}</div>
                    <div className="mt-1 text-xs font-bold text-white/75">{s.v}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <ServiceCustomerGuide pillar="web-scraping" />

      <section className="mx-auto max-w-6xl px-4 py-12">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">
          <p className="text-xs font-extrabold tracking-[0.24em] text-slate-500">WHAT IS WEB SCRAPING</p>
          <h2 className="mt-2 text-2xl font-extrabold text-slate-900 sm:text-3xl">
            What is Web Scraping and how does it work?
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600">
            Web scraping means collecting publicly available website data in a structured way so your team can use it
            for sales, research, pricing intelligence, and operations. A strong scraping workflow includes extraction,
            cleanup, validation, and delivery into the format your business already uses.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Search, title: "Collect", desc: "Capture the right fields from pages, filters, and pagination." },
              { icon: FileJson, title: "Structure", desc: "Map raw content into a schema your team can use directly." },
              { icon: ShieldCheck, title: "Quality Check", desc: "Validate fields, remove duplicates, normalize values." },
              { icon: CloudDownload, title: "Deliver", desc: "Export to CSV, JSON, Sheets, Airtable, or database." },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <div className="grid h-10 w-10 place-items-center rounded-2xl bg-slate-900">
                  <item.icon className="h-5 w-5 text-white" />
                </div>
                <div className="mt-3 text-sm font-extrabold text-slate-900">{item.title}</div>
                <p className="mt-1 text-xs leading-6 text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-4 py-12">
        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
          <p className="text-xs font-extrabold tracking-[0.24em] text-slate-500">SERVICE SOLUTION</p>
          <h2 className="mt-2 text-2xl font-extrabold text-slate-900 sm:text-3xl">
            Web Scraping & Data Extraction Solution
          </h2>
          <p className="mt-2 text-sm leading-7 text-slate-600">
            Business-focused implementation designed for usable data quality, predictable delivery, and long-term
            automation options.
          </p>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {[
              "Custom scraping roadmap based on your exact fields and sources",
              "Clear scope, timeline, and output format from day one",
              "Compliance-aware engineering with responsible scraping patterns",
              "Post-delivery support for scaling and automation",
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
          <p className="text-xs font-extrabold tracking-[0.24em] text-slate-500">INDUSTRIES WE SUPPORT</p>
          <h2 className="mt-2 text-2xl font-extrabold text-slate-900 sm:text-3xl">
            Where businesses use our Web Scraping services
          </h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Healthcare and medical listing intelligence",
              "Ecommerce and retail competitor monitoring",
              "Real estate listing aggregation and updates",
              "Job market and recruitment data tracking",
              "B2B directories and local business databases",
              "Custom internal software data pipelines",
            ].map((item) => (
              <div key={item} className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm font-semibold text-slate-700">
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
            Benefits of this Web Scraping solution
          </h2>
          <div className="mt-5">
            <h3 className="text-sm font-extrabold uppercase tracking-[0.16em] text-slate-500">Why Web Scraping Works</h3>
            <div className="mt-3 grid gap-3 sm:grid-cols-2">
              {[
                "Fast access to large-scale market and competitor data",
                "Consistent data model instead of manual copy-paste errors",
                "Scalable automation for daily or weekly updates",
                "Direct integration into sales, BI, and internal tools",
              ].map((item) => (
                <div key={item} className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm font-semibold text-slate-700">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6">
            <h3 className="text-sm font-extrabold uppercase tracking-[0.16em] text-slate-500">How Customers Benefit</h3>
            <div className="mt-3 grid gap-3 sm:grid-cols-2">
              {[
                "Sales teams get fresher lead lists for outreach and follow-up",
                "Ecommerce teams track competitor price and stock changes faster",
                "Research teams save hours with pre-cleaned structured datasets",
                "Operations teams make better decisions with reliable recurring data",
              ].map((item) => (
                <div key={item} className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm font-semibold text-slate-700">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-4 pb-12">
        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
          <p className="text-xs font-extrabold tracking-[0.24em] text-slate-500">SERVICE COMPARISON</p>
          <h2 className="mt-2 text-2xl font-extrabold text-slate-900 sm:text-3xl">
            Web Scraping Service vs other data collection options
          </h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {[
              "Custom Web Scraping: field-level control, cleaner output, and better scaling",
              "Manual collection: simple start but slow, expensive, and error-prone over time",
              "Off-the-shelf tools: fast setup but limited for complex, dynamic websites",
              "Managed engineering service: stronger QA, monitoring, and long-term reliability",
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
          <p className="text-xs font-extrabold tracking-[0.24em] text-slate-500">DELIVERY MODELS</p>
          <h2 className="mt-2 text-2xl font-extrabold text-slate-900 sm:text-3xl">
            Software delivery models we use for Web Scraping projects
          </h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {[
              {
                icon: Layers,
                title: "Waterfall for fixed-scope scraping",
                desc: "Best when fields, sources, and timeline are clearly defined before development starts.",
              },
              {
                icon: Workflow,
                title: "Agile iteration for evolving requirements",
                desc: "We deliver in small batches and refine with sample validation and business feedback.",
              },
              {
                icon: ShieldCheck,
                title: "QA-first validation model",
                desc: "Every run passes data checks for completeness, formatting, and duplicate control.",
              },
              {
                icon: Rocket,
                title: "Automation model for ongoing operations",
                desc: "For recurring needs, we set schedules, retries, monitoring, and alert flows.",
              },
            ].map((model) => (
              <div key={model.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <div className="grid h-11 w-11 place-items-center rounded-2xl bg-slate-900">
                  <model.icon className="h-5 w-5 text-white" />
                </div>
                <h3 className="mt-3 text-sm font-extrabold text-slate-900">{model.title}</h3>
                <p className="mt-1 text-sm leading-7 text-slate-600">{model.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* ======= rest of your sections unchanged (Use Cases, Why Us, Process, Plans, FAQ) ======= */}
      {/* ✅ Keeping your existing UI exactly—no content broken */}
      {/* IMPORTANT: below code is identical to your original; only schema + SITE_URL were fixed */}

      {/* ================= USE CASES ================= */}
      <section className="mx-auto max-w-6xl px-4 py-14">
        <p className="text-xs font-extrabold tracking-[0.28em] text-slate-500">USE CASES</p>

        <h2 className="mt-2 text-3xl font-extrabold text-slate-900">
          Web scraping & data extraction use-cases
        </h2>

        <p className="mt-2 max-w-3xl text-sm leading-7 text-slate-600">
          Product catalogs, business leads, job listings, real estate, marketplaces, directories, reviews—structured and clean.
          Perfect for competitor monitoring, sales outreach, research, and automation workflows.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {useCases.map((u) => (
            <UseCard key={u.title} icon={u.icon} title={u.title} desc={u.desc} tags={u.tags} />
          ))}
        </div>
      </section>
      
      
      {/* ================= TRUST / WHY US ================= */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <p className="text-xs font-extrabold tracking-[0.28em] text-slate-500">WHY US</p>
          <h2 className="mt-2 text-3xl font-extrabold text-slate-900">Why choose us for Web Scraping projects</h2>
          <p className="mt-2 max-w-3xl text-sm leading-7 text-slate-600">
            We build clean, maintainable scraping systems and hand over stable output your team can trust in production.
          </p>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            <WhyCard
              icon={Layers}
              title="Clean, commented codebase"
              desc="Readable architecture with comments in critical logic for easier maintenance and handover."
            />
            <WhyCard
              icon={ShieldCheck}
              title="SQA-validated quality"
              desc="Our QA/SQA flow verifies extraction rules, schema consistency, duplicates, and data reliability."
            />
            <WhyCard
              icon={Shield}
              title="Bug-minimized delivery"
              desc="We test before handover, fix edge cases, and deliver stable pipelines with support guidance."
            />
          </div>
        </div>
      </section>
      
      
      {/* ================= PROCESS ================= */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-4">
              <p className="text-xs font-extrabold tracking-[0.28em] text-slate-500">PROCESS</p>
              <h2 className="mt-3 text-3xl font-extrabold text-slate-900">Clear pipeline, clean output</h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                We define fields, build extraction logic, clean & validate data, then export and automate (if needed).
              </p>

              <div className="mt-7 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="text-sm font-extrabold text-slate-900">Typical outcomes</div>
                <div className="mt-3 space-y-2">
                  <Outcome text="Structured dataset (no messy columns)" />
                  <Outcome text="Dedupe + validation for quality" />
                  <Outcome text="Export + automation (optional)" />
                </div>
              </div>

              <div className="mt-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-slate-900">
                    <Timer className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="text-sm font-extrabold text-slate-900">Turnaround</div>
                    <div className="mt-1 text-sm text-slate-600">
                      Small jobs: 1-3 days | Medium: 3-7 days | Automation: 1-3 weeks
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-8">
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <Stepper
                  steps={[
                    { title: "Scope & Fields", desc: "Define pages + required columns + rules.", icon: BadgeCheck },
                    { title: "Build & Test", desc: "Pagination, retries, dynamic pages if needed.", icon: ShieldCheck },
                    { title: "Clean & Validate", desc: "Normalize, dedupe, validate, format outputs.", icon: Database },
                    { title: "Export / Automate", desc: "CSV/JSON/Sheets/DB + scheduling if required.", icon: Rocket },
                  ]}
                />
              </div>

              <div className="mt-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-extrabold text-slate-900">Web scraping deliverables (what you get)</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  Clean columns, consistent formats, and export-ready datasets—ready for business use.
                </p>

                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  <MiniLine icon={FileJson} text="CSV / Excel / JSON / Google Sheets export" />
                  <MiniLine icon={Database} text="Database insertion (PostgreSQL/MySQL) — optional" />
                  <MiniLine icon={Workflow} text="Scheduling (daily/weekly) — optional" />
                  <MiniLine icon={ShieldCheck} text="Validation rules + dedupe + logs" />
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <Link prefetch={false}
                    href="/services"
                    className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-extrabold text-slate-900 hover:bg-slate-100"
                  >
                    Explore Services <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link prefetch={false}
                    href="/contact/"
                    className="inline-flex items-center gap-2 rounded-2xl bg-slate-900 px-4 py-2 text-sm font-extrabold text-white hover:bg-slate-800"
                  >
                    Get Quote <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      
      {/* ================= PLANS (NO PRICE) ================= */}
      <section id="packages" className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-extrabold tracking-[0.28em] text-slate-500">PLANS</p>
              <h2 className="mt-2 text-3xl font-extrabold text-slate-900">
                Choose a plan by scope (quotation-based)
              </h2>
              <p className="mt-2 max-w-2xl text-sm text-slate-600">
                We don’t show public prices. Final quotation depends on pages, anti-bot complexity, volumes, and automation needs.
              </p>
            </div>

            <a
              href="/contact/"
              className="inline-flex w-fit items-center justify-center gap-2 rounded-2xl bg-slate-900 px-6 py-3 text-sm font-extrabold text-white transition hover:bg-slate-800"
            >
              Get Quote <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {plans.map((p) => (
              <PlanCardNoPrice
                key={p.title}
                title={p.title}
                subtitle={p.subtitle}
                items={p.items}
                featured={p.featured}
                cta={p.cta}
              />
            ))}
          </div>

          <p className="mt-6 text-xs leading-6 text-slate-500">
            Note: We avoid restricted/private data and follow responsible scraping practices, rate limits, and compliance guidance.
          </p>
        </div>
      </section>
      
      
      {/* ================= TARGETED KEYWORD PAGES ================= */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <p className="text-xs font-extrabold tracking-[0.28em] text-slate-500">TARGETED SERVICES</p>
          <h2 className="mt-2 text-3xl font-extrabold text-slate-900">
            Web Scraping solutions by intent
          </h2>
          <p className="mt-2 max-w-3xl text-sm leading-7 text-slate-600">
            Focused pages for common search intents. Each page is unique and tailored to a specific use‑case.
          </p>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {keywordPages.map((k) => (
              <a
                key={k.href}
                href={k.href}
                className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="text-sm font-extrabold text-slate-900">{k.title}</div>
                <p className="mt-2 text-sm text-slate-600">{k.desc}</p>
                <div className="mt-4 inline-flex items-center gap-2 text-sm font-extrabold text-slate-900">
                  View page <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
      
      
      {/* ================= FAQ + FINAL CTA ================= */}
      <section id="faq" className="mx-auto max-w-6xl px-4 pb-16 pt-14">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-extrabold tracking-[0.28em] text-slate-500">FAQ</p>
              <h2 className="mt-2 text-3xl font-extrabold text-slate-900">Web scraping service questions</h2>
              <p className="mt-2 max-w-3xl text-sm leading-7 text-slate-600">
                Common questions about legality, dynamic pages, exports, automation, monitoring, and delivery.
              </p>
            </div>

            <a
              href="/contact/"
              className="inline-flex w-fit items-center justify-center gap-2 rounded-2xl bg-yellow-400 px-6 py-3 text-sm font-extrabold text-slate-900 transition hover:bg-yellow-500"
            >
              Get Quote <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="mt-8 grid gap-4 lg:grid-cols-2">
            {faqs.map((f) => (
              <details key={f.q} className="group rounded-3xl border border-slate-200 bg-white p-6">
                <summary className="cursor-pointer list-none text-sm font-extrabold text-slate-900">
                  {f.q}
                  <span className="float-right text-slate-400 transition group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-sm leading-7 text-slate-600">{f.a}</p>
              </details>
            ))}
          </div>

          <div className="mt-10 overflow-hidden rounded-3xl border border-slate-200 bg-slate-900 p-6 text-white sm:p-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="min-w-0">
                <div className="text-lg font-extrabold">Need {TARGET_KEYWORD} for your business?</div>
                <p className="mt-1 text-sm text-white/75">
                  Send your website link + required fields. We’ll reply with a plan, timeline & quotation.
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  <DarkChip icon={Database} text="Clean schema" />
                  <DarkChip icon={ShieldCheck} text="Validation" />
                  <DarkChip icon={CloudDownload} text="Export-ready" />
                  <DarkChip icon={Workflow} text="Automation" />
                </div>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <a
                  href="/contact/"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-yellow-400 px-6 py-3 text-sm font-extrabold text-slate-900 transition hover:bg-yellow-500"
                >
                  Get Quote <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="mailto:mugnee.it%40gmail.com"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/20 bg-white/10 px-6 py-3 text-sm font-extrabold text-white transition hover:bg-white/15"
                >
                  <Mail className="h-4 w-4" />
                  Email
                </a>
              </div>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <Link prefetch={false}
                href="/services"
                className="rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-sm font-extrabold text-white hover:bg-white/10"
              >
                Explore all services <ArrowRight className="inline h-4 w-4" />
              </Link>
              <Link prefetch={false}
                href="/contact"
                className="rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-sm font-extrabold text-white hover:bg-white/10"
              >
                Contact Mugnee IT Solutions <ArrowRight className="inline h-4 w-4" />
              </Link>
            </div>

            <p className="sr-only">
              Web scraping Bangladesh, web scraping service, data extraction service, lead scraping, product scraping,
              price monitoring scraping, Google Sheets export, CSV export, JSON export, automation scraping.
            </p>
          </div>
        </div>
      </section>
      
    </main>
  );
}

/* ================= UI Bits ================= */

function HeroRow({ icon: Icon, title, desc }: { icon: LucideIcon; title: string; desc: string }) {
  return (
    <div className="flex items-start gap-3">
      <div className="grid h-10 w-10 place-items-center rounded-2xl bg-white/10 text-white">
        <Icon className="h-5 w-5" />
      </div>
      <div className="min-w-0">
        <div className="text-sm font-extrabold text-white">{title}</div>
        <div className="mt-1 text-xs leading-6 text-white/75">{desc}</div>
      </div>
    </div>
  );
}

function UseCard({ icon: Icon, title, desc, tags }: { icon: LucideIcon; title: string; desc: string; tags: string[] }) {
  return (
    <div className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-sky-200/60 blur-2xl opacity-0 transition-opacity group-hover:opacity-100" />
      <div className="flex items-center gap-3">
        <div className="grid h-12 w-12 place-items-center rounded-2xl bg-slate-900">
          <Icon className="h-6 w-6 text-white" />
        </div>
        <div className="min-w-0">
          <h3 className="text-lg font-extrabold text-slate-900">{title}</h3>
          <p className="mt-1 text-sm text-slate-600">{desc}</p>
        </div>
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        {tags.map((t) => (
          <span key={t} className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-bold text-slate-700">
            {t}
          </span>
        ))}
      </div>

      <div className="mt-6 flex items-center gap-2 text-sm font-extrabold text-slate-900">
        Learn more <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
      </div>
    </div>
  );
}

function Outcome({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-2 text-sm text-slate-700">
      <span className="mt-1 grid h-5 w-5 place-items-center rounded-full bg-emerald-50 ring-1 ring-emerald-100">
        <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
      </span>
      <span className="leading-6">{text}</span>
    </div>
  );
}

function Stepper({ steps }: { steps: { title: string; desc: string; icon: LucideIcon }[] }) {
  return (
    <div className="relative">
      <div className="absolute left-[22px] top-4 h-[calc(100%-16px)] w-px bg-slate-200" />
      <div className="space-y-5">
        {steps.map((s, i) => (
          <div key={s.title} className="flex gap-4">
            <div className="relative z-10 grid h-11 w-11 place-items-center rounded-2xl bg-slate-900">
              <s.icon className="h-5 w-5 text-white" />
            </div>
            <div className="flex-1 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex items-center justify-between">
                <div className="text-sm font-extrabold text-slate-900">
                  {i + 1}. {s.title}
                </div>
                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-extrabold text-slate-700">Step</span>
              </div>
              <p className="mt-2 text-sm leading-7 text-slate-600">{s.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function MiniLine({ icon: Icon, text }: { icon: LucideIcon; text: string }) {
  return (
    <div className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4">
      <div className="grid h-10 w-10 place-items-center rounded-2xl bg-slate-900">
        <Icon className="h-5 w-5 text-white" />
      </div>
      <div className="text-sm font-semibold text-slate-700 leading-6">{text}</div>
    </div>
  );
}

function WhyCard({ icon: Icon, title, desc }: { icon: LucideIcon; title: string; desc: string }) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <div className="flex items-start gap-3">
        <div className="grid h-12 w-12 place-items-center rounded-2xl bg-slate-900">
          <Icon className="h-6 w-6 text-white" />
        </div>
        <div className="min-w-0">
          <div className="text-sm font-extrabold text-slate-900">{title}</div>
          <p className="mt-2 text-sm leading-7 text-slate-600">{desc}</p>
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

function PlanCardNoPrice({
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
        featured ? "border-yellow-300 ring-1 ring-yellow-200" : "border-slate-200",
      ].join(" ")}
    >
      {featured && (
        <div className="absolute right-4 top-4 rounded-full bg-yellow-100 px-3 py-1 text-xs font-extrabold text-yellow-700">
          Best Fit
        </div>
      )}

      <div className="text-sm font-extrabold text-slate-900">{title}</div>
      <div className="mt-1 text-sm text-slate-600">{subtitle}</div>

      <div className="mt-6 space-y-3">
        {items.map((i) => (
          <div key={i} className="flex items-start gap-2 text-sm text-slate-700">
            <span className="mt-1 grid h-5 w-5 place-items-center rounded-full bg-emerald-50 ring-1 ring-emerald-100">
              <Check className="h-3.5 w-3.5 text-emerald-600" />
            </span>
            <span className="leading-7">{i}</span>
          </div>
        ))}
      </div>

      <a
        href="/contact/"
        className={[
          "group mt-7 inline-flex w-full items-center justify-center gap-2 rounded-2xl px-6 py-3 text-sm font-extrabold transition",
          featured ? "bg-yellow-400 text-slate-900 hover:bg-yellow-500" : "bg-slate-900 text-white hover:bg-slate-800",
        ].join(" ")}
      >
        {cta}
        <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
      </a>

      <div className="mt-4 text-xs text-slate-500">*Quotation depends on scope, site complexity, and volume.</div>
    </div>
  );
}















