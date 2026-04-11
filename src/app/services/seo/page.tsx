// app/services/seo/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  ClipboardList,
  FileText,
  Gauge,
  Layers,
  LineChart,
  Link2,
  MessageCircle,
  PhoneCall,
  Search,
  Shield,
  ShieldCheck,
  Sparkles,
  Wrench,
  Users,
  Timer,
  Workflow,
  Building2,
  Target,
} from "lucide-react";
import {
  ServiceCustomerGuide,
  ServiceFlowStrip,
  ServiceQuickSummary,
  ServiceUseCasesGrid,
} from "@/components/sections/ServiceVisualBlocks";

/** âœ… Production env:
 * NEXT_PUBLIC_SITE_URL=https://mugneeit.com
 */
const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "https://mugneeit.com";

const PAGE_PATH = "/services/seo";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

/** âœ… < 60 chars */
const META_TITLE = "SEO Service Agency | Technical, On-Page, Local SEO";

const META_DESC =
  "SEO services for long-term growth: technical fixes, on-page optimization, content strategy, topical clusters, internal linking, and transparent monthly reporting.";

/** âœ… Contact */
const tel = "tel:+8801958645415";
const wa = "https://wa.me/8801958645415";

/** âœ… Background image (Turbopack safe) */

/** âœ… Target keyword */
const TARGET_KEYWORD = "SEO Services";

/** âœ… SEO-Targeted FAQs (12) */
const faqs = [
  {
    q: "How long does SEO take to show results?",
    a: "Typically 4â€“12 weeks for early movement, and 3â€“6 months for strong tractionâ€”depending on competition, site health, and content output.",
  },
  {
    q: "Do you provide technical SEO fixes or only content?",
    a: "Both. We handle technical audits and fixes (indexing, sitemap, canonical, redirects, metadata structure) plus content strategy and optimization.",
  },
  {
    q: "Do you guarantee #1 rankings?",
    a: "No one can guarantee #1 for every keyword. We focus on a proven system: technical foundation, intent-based content, internal linking, and reporting.",
  },
  {
    q: "What is included in an SEO audit?",
    a: "Indexing checks, sitemap/robots review, metadata & headings, internal linking, content gaps, technical errors, and a prioritized roadmap.",
  },
  {
    q: "Can you fix Google indexing issues?",
    a: "Yes. We diagnose coverage issues and implement fixes like sitemap updates, canonical corrections, redirects, internal links, and cleanup.",
  },
  {
    q: "Do you do keyword research and topical clusters?",
    a: "Yes. We build keyword maps, clusters, and content briefs aligned with search intent to scale keyword coverage over time.",
  },
  {
    q: "What is on-page SEO optimization?",
    a: "Optimizing titles/meta, headings, content structure, entities, internal links, and UX signals for better relevance and higher CTR.",
  },
  {
    q: "Do you optimize Core Web Vitals (CWV)?",
    a: "We address practical CWV improvements (images, layout shifts, script bloat) and coordinate deeper dev fixes if needed.",
  },
  {
    q: "Will you optimize existing pages or create new content?",
    a: "Both. We improve existing high-potential pages and propose new cluster pages to expand topical coverage.",
  },
  {
    q: "Do you provide monthly SEO reporting?",
    a: "Yes. You get KPIs, work done, ranking/traffic movement, and the next-month roadmapâ€”so progress stays transparent.",
  },
  {
    q: "Do you work for Bangladesh and international markets?",
    a: "Yes. We support Bangladesh local intent and international SEO with proper keyword intent mapping and structure.",
  },
  {
    q: "Do you have fixed SEO pricing?",
    a: "We donâ€™t show public fixed pricing. Quotation depends on niche competition, current website condition, and monthly scope.",
  },
];

function buildJsonLd() {
  // âœ… Google-safe: no fake reviews, no â€œprice: 0â€, no guarantees
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

  const webpage = {
    "@type": "WebPage",
    name: META_TITLE,
    url: PAGE_URL,
    description: META_DESC,
    isPartOf: website,
    about: { "@type": "Service", name: "Search Engine Optimization" },
  };

  const breadcrumb = {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
      { "@type": "ListItem", position: 2, name: "Services", item: `${SITE_URL}/services` },
      { "@type": "ListItem", position: 3, name: "SEO Services", item: PAGE_URL },
    ],
  };

  const service = {
    "@type": "Service",
    name: "SEO Services (Technical + Content)",
    serviceType: TARGET_KEYWORD,
    provider: { "@type": "Organization", name: "Mugnee IT Solutions", url: SITE_URL },
    areaServed: ["Bangladesh", "Worldwide"],
    url: PAGE_URL,
    description:
      "Technical SEO + content strategy for long-term rankings, traffic, and leads. Audits, fixes, topical clusters, internal links, and reporting.",
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
    "@graph": [org, website, webpage, breadcrumb, service, faq],
  };
}

export const metadata: Metadata = {
  title: META_TITLE,
  description: META_DESC,
  alternates: { canonical: PAGE_URL },
  keywords: [
    "SEO Services",
    "Technical SEO",
    "On Page SEO",
    "SEO Audit",
    "Keyword Research",
    "Content Strategy",
    "Topical Clusters",
    "Internal Linking",
    "Core Web Vitals",
    "SEO Services Bangladesh",
  ],
  openGraph: {
    title: META_TITLE,
    description:
      "Technical SEO + content strategy to improve rankings, traffic, and leadsâ€”with clear reporting.",
    url: PAGE_URL,
    siteName: "Mugnee IT Solutions",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: META_TITLE,
    description: META_DESC,
  },
  robots: { index: true, follow: true },
};

const includes = [
  {
    icon: Wrench,
    title: "Technical SEO",
    desc: "Indexing, sitemap, canonical, redirects, metadata structure, practical CWV improvements.",
    pills: ["Indexing", "Sitemap", "Canonical", "CWV"],
  },
  {
    icon: FileText,
    title: "Content Strategy",
    desc: "Keyword mapping, intent planning, briefs, topical clusters, optimization workflow.",
    pills: ["Keywords", "Clusters", "Briefs", "Intent"],
  },
  {
    icon: Link2,
    title: "Internal Linking",
    desc: "Pillar pages + cluster links, anchor rules, navigation-safe linking structure.",
    pills: ["Pillars", "Anchors", "Structure"],
  },
  {
    icon: LineChart,
    title: "Reporting",
    desc: "Monthly KPIs, tasks done, wins/blockers, and next roadmapâ€”clear and trackable.",
    pills: ["KPIs", "Roadmap", "Monthly"],
  },
];

const plans = [
  {
    title: "Starter SEO",
    subtitle: "Basics + quick wins",
    items: [
      "Audit + priority checklist",
      "On-page optimization for key pages",
      "Internal linking cleanup",
      "Monthly report + next steps",
    ],
    featured: false,
  },
  {
    title: "Growth SEO",
    subtitle: "Clusters + scaling plan",
    items: [
      "Technical fixes + structure",
      "Topical cluster map",
      "Content briefs + optimization workflow",
      "Internal linking system",
      "Monthly reporting + roadmap",
    ],
    featured: true,
  },
  {
    title: "Authority SEO",
    subtitle: "High competition niches",
    items: [
      "Advanced strategy + tracking",
      "Content workflow & scaling plan",
      "Optimization + consolidation plan",
      "Quarterly review + expansion map",
    ],
    featured: false,
  },
];

const processSteps = [
  {
    icon: Search,
    title: "Audit & baseline",
    desc: "Indexing, coverage, structure, content gaps, internal linking, CWV signalsâ€”then a prioritized roadmap.",
  },
  {
    icon: Wrench,
    title: "Fix & stabilize",
    desc: "Sitemaps, canonicals, redirects, metadata structure, crawl pathsâ€”so Google can understand the site cleanly.",
  },
  {
    icon: Layers,
    title: "Cluster plan",
    desc: "Keyword map â†’ pillar pages + supporting pages, aligned to intent and business goals.",
  },
  {
    icon: FileText,
    title: "Content execution",
    desc: "Briefs, on-page optimization, entity coverage, UX structureâ€”built for CTR and relevance.",
  },
  {
    icon: Link2,
    title: "Internal linking system",
    desc: "Rules for anchors + linking to strengthen clusters and guide crawlers + users logically.",
  },
  {
    icon: LineChart,
    title: "Report & iterate",
    desc: "Monthly KPIs, completed tasks, blockers, next planâ€”continuous improvement loop.",
  },
];

const whyChoose = [
  {
    icon: ClipboardList,
    title: "Clean process and documentation",
    desc: "You get clear task logs, page-level changes, and documented monthly priorities.",
  },
  {
    icon: ShieldCheck,
    title: "Quality-checked execution",
    desc: "Every cycle includes checklist-based QA for technical updates, metadata, and internal links.",
  },
  {
    icon: Workflow,
    title: "System, not random tasks",
    desc: "Technical SEO, content, and internal linking run as one coordinated workflow.",
  },
  {
    icon: Timer,
    title: "Consistent monthly delivery",
    desc: "Focused sprint execution with updates, reporting, and next-step planning each month.",
  },
  {
    icon: Users,
    title: "Business-first approach",
    desc: "We prioritize keywords and pages that can generate qualified leads, not vanity metrics.",
  },
  {
    icon: Target,
    title: "Intent-led keyword strategy",
    desc: "We map keywords by funnel stage so content matches how buyers actually search and decide.",
  },
];

const seoSignals = [
  { icon: Gauge, title: "Better crawl & indexing", desc: "Structure and internal links that search engines can follow." },
  { icon: Sparkles, title: "Higher CTR", desc: "Titles/meta and page structure that earn clicks." },
  { icon: Layers, title: "Topical authority", desc: "Clusters that expand keyword coverage and relevance." },
  { icon: BadgeCheck, title: "Measurable progress", desc: "Monthly reporting with KPIs + next actions." },
];

const industries = [
  "B2B services",
  "IT & software",
  "Construction & engineering",
  "Manufacturing",
  "Education",
  "Healthcare (non-medical claims)",
  "E-commerce",
  "Real estate",
  "Local business",
  "International / export-focused sites",
];

const keywordPages = [
  {
    title: "Technical SEO Service",
    desc: "Indexing, crawl, and technical fixes for clean structure.",
    href: "/services/seo/technical-seo-service",
  },
  {
    title: "On Page SEO Service",
    desc: "Titles, headings, content structure, and relevance updates.",
    href: "/services/seo/on-page-seo-service",
  },
  {
    title: "SEO Audit Service",
    desc: "Full audit with priority checklist and roadmap.",
    href: "/services/seo/seo-audit-service",
  },
  {
    title: "Local SEO Service",
    desc: "Local intent optimization and location-based visibility.",
    href: "/services/seo/local-seo-service",
  },
  {
    title: "Ecommerce SEO Service",
    desc: "Product and category SEO for eCommerce growth.",
    href: "/services/seo/ecommerce-seo-service",
  },
];

export default function SeoServicePage() {
  const jsonLd = buildJsonLd();
  const useCaseCards = [
    {
      icon: Building2,
      title: "Local service businesses",
      desc: "For companies that need stronger location visibility, cleaner site structure, and more qualified leads.",
      pills: ["Local intent", "Map visibility", "Lead quality"],
    },
    {
      icon: Target,
      title: "Growth-stage websites",
      desc: "Helpful when traffic exists but rankings, structure, or conversion quality are underperforming.",
      pills: ["Audit", "Fixes", "Page optimization"],
    },
    {
      icon: Users,
      title: "Content-led brands",
      desc: "Ideal for brands that want topical clusters, internal linking, and clearer content direction.",
      pills: ["Clusters", "Briefs", "Internal links"],
    },
  ];
  const flowSteps = processSteps.slice(0, 4).map((step) => ({
    icon: step.icon,
    title: step.title,
    desc: step.desc,
  }));

  return (
    <main className="bg-white">
      {/* âœ… JSON-LD single script */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden bg-slate-950 pb-12 pt-24 sm:pb-16 sm:pt-28" aria-labelledby="seo-hero-title">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(85%_120%_at_12%_18%,rgba(34,197,94,0.20),transparent_45%),radial-gradient(72%_95%_at_86%_20%,rgba(56,189,248,0.20),transparent_50%),linear-gradient(120deg,#020617_0%,#0f172a_48%,#111827_100%)]" />
          <div className="absolute inset-0 opacity-[0.12] [background:radial-gradient(circle_at_1px_1px,rgba(255,255,255,.42)_1px,transparent_0)] [background-size:20px_20px]" />
          <div className="pointer-events-none absolute -left-16 top-20 h-64 w-64 rounded-full bg-emerald-300/15 blur-3xl" />
          <div className="pointer-events-none absolute right-[-30px] top-16 h-72 w-72 rounded-full bg-sky-300/15 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-6xl px-4">
          <nav className="text-xs font-bold text-white/85 drop-shadow">
            <Link prefetch={false} href="/" className="hover:text-white">Home</Link>
            <span className="mx-2 text-white/60">/</span>
            <Link prefetch={false} href="/services" className="hover:text-white">Services</Link>
            <span className="mx-2 text-white/60">/</span>
            <span className="text-yellow-300">SEO Services</span>
          </nav>

          <div className="mt-10 grid gap-10 lg:grid-cols-[1.1fr_.9fr] lg:items-center">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[11px] font-extrabold tracking-[0.18em] text-white backdrop-blur">
                SEO GROWTH ENGINE
              </p>

              <h1 id="seo-hero-title" className="mt-4 text-4xl font-extrabold leading-tight text-white sm:text-5xl">
                SEO Service Agency
              </h1>

              <p className="mt-4 max-w-2xl text-base leading-7 text-white/90 sm:text-lg">
                We run technical SEO, content strategy, and internal linking as one system so your website gains stable visibility and conversion-focused growth.
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <MiniBulletDark icon={Wrench} text="Technical fixes + crawl stability" />
                <MiniBulletDark icon={FileText} text="Intent-based keyword and content plan" />
                <MiniBulletDark icon={Link2} text="Cluster architecture + internal links" />
                <MiniBulletDark icon={LineChart} text="Monthly KPI reporting + roadmap" />
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link prefetch={false}
                  href="/contact/"
                  className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-yellow-400 px-7 py-3.5 text-sm font-extrabold text-slate-900 shadow-[0_10px_30px_rgba(0,0,0,.25)] transition hover:-translate-y-[1px] hover:bg-yellow-500"
                >
                  Start SEO Audit
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </Link>

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
                  <div className="text-sm font-extrabold uppercase tracking-widest text-white/90">SEO Delivery Snapshot</div>
                  <span className="rounded-full bg-yellow-300/20 px-3 py-1 text-xs font-extrabold text-yellow-200">PRO</span>
                </div>

                <div className="mt-4 space-y-3">
                  <HeroRow icon={Search} title="Audit" desc="Coverage, indexing, crawl, and priority map" />
                  <HeroRow icon={Wrench} title="Fix" desc="Technical cleanup and structure stabilization" />
                  <HeroRow icon={Layers} title="Scale" desc="Cluster content plan and linking framework" />
                  <HeroRow icon={LineChart} title="Report" desc="KPI tracking and next-month roadmap" />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                <MiniStat icon={Gauge} title="SEO-safe" desc="Clean implementation" />
                <MiniStat icon={Timer} title="Monthly" desc="Reporting cycle" />
                <MiniStat icon={Users} title="Business" desc="Lead-focused keywords" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <ServiceCustomerGuide pillar="seo" />

      <ServiceQuickSummary
        title="SEO service snapshot"
        intro="This visual section makes the service easier to scan by turning the main SEO workstreams into clear cards."
        items={includes}
      />

      <ServiceUseCasesGrid
        title="Who this SEO service is best for"
        intro="These use-case cards help visitors quickly understand if this service matches their growth stage and goals."
        items={useCaseCards}
      />

      <ServiceFlowStrip
        title="SEO workflow overview"
        intro="A compact process strip that explains how audits, fixes, and reporting move forward."
        steps={flowSteps}
      />

      <section className="mx-auto max-w-6xl px-4 py-12">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">
          <p className="text-xs font-extrabold tracking-[0.24em] text-slate-500">WHAT IS SEO</p>
          <h2 className="mt-2 text-2xl font-extrabold text-slate-900 sm:text-3xl">What is SEO</h2>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600">
            SEO helps your website appear when potential customers search for your services. A strong SEO system
            combines technical health, intent-driven content, and internal linking so ranking growth can turn into
            qualified traffic and real leads.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Search, title: "Search Intent", desc: "Target keywords that match real customer queries." },
              { icon: Wrench, title: "Technical Base", desc: "Fix crawl, indexing, speed, and site structure issues." },
              { icon: FileText, title: "Content System", desc: "Build pages and clusters that expand topical authority." },
              { icon: LineChart, title: "Growth Tracking", desc: "Measure movement in rankings, traffic, and leads." },
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
            SEO Strategy and Execution Solution
          </h2>
          <p className="mt-2 text-sm leading-7 text-slate-600">
            Practical SEO execution built around business goals, conversion intent, and long-term visibility growth.
          </p>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {[
              "Tailored SEO roadmap by keyword intent and business priority",
              "Clear monthly scope, deliverables, and reporting checkpoints",
              "Google-safe structure across technical, content, and links",
              "Ongoing optimization support as rankings evolve",
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
            Benefits of this SEO solution
          </h2>
          <div className="mt-5">
            <h3 className="text-sm font-extrabold uppercase tracking-[0.16em] text-slate-500">Why SEO Is Effective</h3>
            <div className="mt-3 grid gap-3 sm:grid-cols-2">
              {[
                "Compounds over time as technical health and content depth improve",
                "Captures high-intent searches from users already looking for solutions",
                "Builds trust with stronger visibility across key service keywords",
                "Reduces long-term dependency on paid ads for every lead",
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
                "More qualified traffic from keywords tied to your services",
                "Higher inquiry potential from optimized, conversion-ready pages",
                "Cleaner site experience with better structure and internal linking",
                "Transparent progress through KPI reporting and next-step roadmaps",
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
            SEO Services vs other growth options
          </h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {[
              "SEO strategy + execution: stronger long-term visibility and lead consistency",
              "Paid ads only: faster short-term traffic but ongoing cost dependency",
              "Template SEO packages: basic setup, limited depth for competitive niches",
              "Managed SEO system: technical + content + linking with measurable iteration",
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
            SEO delivery models we follow
          </h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {[
              {
                icon: ClipboardList,
                title: "Audit-first model",
                desc: "For existing websites, we start with a technical and content audit, then execute by impact priority.",
              },
              {
                icon: Workflow,
                title: "Agile monthly sprint model",
                desc: "Best for growth SEO. We plan monthly sprints, deliver tasks, then iterate using performance data.",
              },
              {
                icon: Layers,
                title: "Cluster scaling model",
                desc: "For competitive niches, we build pillar + cluster content and internal linking as a repeatable system.",
              },
              {
                icon: ShieldCheck,
                title: "QA and reporting model",
                desc: "Each cycle includes quality checks, KPI tracking, and clear next actions for the following month.",
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
      
      {/* ================= TRUST / SIGNALS ================= */}
      <section className="mx-auto max-w-6xl px-4 py-14">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-5">
            <p className="text-xs font-extrabold tracking-[0.28em] text-slate-500">OUTCOMES</p>
            <h2 className="mt-3 text-3xl font-extrabold text-slate-900">
              SEO outcomes that matter
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              We focus on the signals that drive sustainable growth: crawlability, relevance, internal links,
              and user intentâ€”then measure progress with reporting.
            </p>

            <div className="mt-7 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="text-sm font-extrabold text-slate-900">What you get</div>
              <div className="mt-3 space-y-2">
                <Outcome text="Clear audit roadmap (prioritized)" />
                <Outcome text="Technical fixes that help indexing" />
                <Outcome text="Content plan built for intent + clusters" />
                <Outcome text="Monthly reporting + next actions" />
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link prefetch={false}
                href="/services"
                className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-extrabold text-slate-900 hover:bg-slate-100"
              >
                Explore all services <ArrowRight className="h-4 w-4" />
              </Link>
              <Link prefetch={false}
                href="/contact/"
                className="inline-flex items-center gap-2 rounded-2xl bg-slate-900 px-4 py-2 text-sm font-extrabold text-white hover:bg-slate-800"
              >
                Request quotation <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-7 grid gap-6 sm:grid-cols-2">
            {seoSignals.map((s) => (
              <SignalCard key={s.title} icon={s.icon} title={s.title} desc={s.desc} />
            ))}
          </div>
        </div>
      </section>
      
      
      {/* ================= WHAT'S INCLUDED ================= */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <p className="text-xs font-extrabold tracking-[0.28em] text-slate-500">WHATâ€™S INCLUDED</p>
          <h2 className="mt-2 text-3xl font-extrabold text-slate-900">
            Technical + content execution
          </h2>
          <p className="mt-2 max-w-3xl text-sm leading-7 text-slate-600">
            We build a clean technical base and a cluster-based content system, then connect everything
            with internal linkingâ€”so SEO works long-term.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {includes.map((c) => (
              <IncludeCard key={c.title} icon={c.icon} title={c.title} desc={c.desc} pills={c.pills} />
            ))}
          </div>

          <div className="mt-10 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div className="min-w-0">
                <div className="text-lg font-extrabold text-slate-900">
                  Want a prioritized SEO checklist for your website?
                </div>
                <p className="mt-1 text-sm text-slate-600">
                  Share your website linkâ€”weâ€™ll reply with audit priorities and a clear next-step plan.
                </p>
              </div>
              <Link prefetch={false}
                href="/contact/"
                className="inline-flex w-fit items-center justify-center gap-2 rounded-2xl bg-slate-900 px-6 py-3 text-sm font-extrabold text-white hover:bg-slate-800"
              >
                Get SEO Audit <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      
      {/* ================= PROCESS (NEW) ================= */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <p className="text-xs font-extrabold tracking-[0.28em] text-slate-500">HOW WE WORK</p>
          <h2 className="mt-2 text-3xl font-extrabold text-slate-900">
            Our SEO process (step-by-step)
          </h2>
          <p className="mt-2 max-w-3xl text-sm leading-7 text-slate-600">
            A predictable workflow: audit â†’ fix â†’ plan â†’ execute â†’ report. No confusion, no random tasks.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {processSteps.map((s) => (
              <ProcessCard key={s.title} icon={s.icon} title={s.title} desc={s.desc} />
            ))}
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <CompareCard
              leftTitle="What many providers do"
              leftPoints={[
                "Random tasks without roadmap",
                "Only content or only technical work",
                "No clear internal linking strategy",
                "Reporting without action plan",
              ]}
              rightTitle="What Mugnee does"
              rightPoints={[
                "Roadmap-first execution",
                "Technical + content together",
                "Clusters + internal links as a system",
                "Monthly KPIs + next tasks",
              ]}
            />

            <div className="rounded-3xl border border-slate-200 bg-slate-900 p-6 text-white shadow-sm sm:p-8">
              <div className="flex items-start gap-3">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-yellow-400 text-slate-900">
                  <Building2 className="h-6 w-6" />
                </span>
                <div className="min-w-0">
                  <div className="text-lg font-extrabold">Business-first SEO</div>
                  <p className="mt-2 text-sm leading-7 text-white/75">
                    We prioritize pages and keywords that can generate inquiries and salesâ€”then expand
                    authority using clusters and internal linking.
                  </p>
                  <div className="mt-5 flex flex-wrap gap-3">
                    <Link prefetch={false}
                      href="/contact/"
                      className="inline-flex items-center justify-center gap-2 rounded-2xl bg-yellow-400 px-6 py-3 text-sm font-extrabold text-slate-900 hover:bg-yellow-500"
                    >
                      Request quotation <ArrowRight className="h-4 w-4" />
                    </Link>
                    <Link prefetch={false}
                      href="/services"
                      className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/20 bg-white/10 px-6 py-3 text-sm font-extrabold text-white hover:bg-white/15"
                    >
                      Explore services <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>

                  <p className="sr-only">
                    SEO roadmap, SEO audit, technical SEO fixes, on page SEO, internal linking, topical clusters,
                    SEO services Bangladesh, Mugnee IT Solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      
      {/* ================= WHY MUGNEE ================= */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <p className="text-xs font-extrabold tracking-[0.28em] text-slate-500">WHY MUGNEE</p>
          <h2 className="mt-2 text-3xl font-extrabold text-slate-900">
            Why choose us for SEO services
          </h2>
          <p className="mt-2 max-w-3xl text-sm leading-7 text-slate-600">
            You get clean process, quality-controlled execution, and transparent reporting built around business goals.
          </p>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {whyChoose.map((w) => (
              <WhyCard key={w.title} icon={w.icon} title={w.title} desc={w.desc} />
            ))}
          </div>

          {/* âœ… Industries (NEW) */}
          <div className="mt-10 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-xs font-extrabold tracking-[0.28em] text-slate-500">INDUSTRIES</p>
                <h3 className="mt-2 text-2xl font-extrabold text-slate-900">
                  Industries we support
                </h3>
                <p className="mt-2 text-sm text-slate-600">
                  We map keywords and content by intentâ€”works for both local and international markets.
                </p>
              </div>

              <Link prefetch={false}
                href="/contact/"
                className="inline-flex w-fit items-center justify-center gap-2 rounded-2xl bg-slate-900 px-6 py-3 text-sm font-extrabold text-white hover:bg-slate-800"
              >
                Discuss your niche <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {industries.map((x) => (
                <span
                  key={x}
                  className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-bold text-slate-700"
                >
                  {x}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      
      {/* ================= PLANS (NO PRICE) ================= */}
      <section id="packages" className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-extrabold tracking-[0.28em] text-slate-500">PLANS</p>
              <h2 className="mt-2 text-3xl font-extrabold text-slate-900">
                Choose a plan by scope (quotation-based)
              </h2>
              <p className="mt-2 max-w-2xl text-sm text-slate-600">
                We donâ€™t show public prices. Final quotation depends on niche, competition, website health,
                and content volume.
              </p>
            </div>

            <Link prefetch={false}
              href="/contact/"
              className="inline-flex w-fit items-center justify-center gap-2 rounded-2xl bg-slate-900 px-6 py-3 text-sm font-extrabold text-white transition hover:bg-slate-800"
            >
              Get Quote <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {plans.map((p) => (
              <PlanCardNoPrice
                key={p.title}
                title={p.title}
                subtitle={p.subtitle}
                items={p.items}
                featured={p.featured}
                cta="Get Quote"
              />
            ))}
          </div>

          {/* âœ… Extra reassurance (NEW) */}
          <div className="mt-10 rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
            <div className="flex items-start gap-3">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-slate-900 text-white">
                <Shield className="h-6 w-6" />
              </span>
              <div className="min-w-0">
                <div className="text-lg font-extrabold text-slate-900">
                  Google-safe, long-term SEO
                </div>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  We avoid risky tactics. We build structure + content + internal links that remain stable
                  and scalable as your website grows.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      
      {/* ================= KEYWORD PAGES ================= */}
      <section className="mx-auto max-w-6xl px-4 py-14">
        <p className="text-xs font-extrabold tracking-[0.28em] text-slate-500">SEO KEYWORDS</p>
        <h2 className="mt-2 text-3xl font-extrabold text-slate-900">
          SEO services by search intent
        </h2>
        <p className="mt-2 max-w-3xl text-sm leading-7 text-slate-600">
          Focused pages for common SEO keywords. Each page is unique and built for specific intent.
        </p>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {keywordPages.map((k) => (
            <Link prefetch={false}
              key={k.href}
              href={k.href}
              className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="text-sm font-extrabold text-slate-900">{k.title}</div>
              <p className="mt-2 text-sm text-slate-600">{k.desc}</p>
              <div className="mt-4 inline-flex items-center gap-2 text-sm font-extrabold text-slate-900">
                View page <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>
      </section>
      
      
      {/* ================= FAQ + FINAL CTA ================= */}
      <section id="faq" className="mx-auto max-w-6xl px-4 pb-16 pt-14">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-extrabold tracking-[0.28em] text-slate-500">FAQ</p>
              <h2 className="mt-2 text-3xl font-extrabold text-slate-900">
                SEO service questions
              </h2>
              <p className="mt-2 max-w-3xl text-sm leading-7 text-slate-600">
                Common questions about audits, fixes, content, internal linking, timelines, and reporting.
              </p>
            </div>

            <Link prefetch={false}
              href="/contact/"
              className="inline-flex w-fit items-center justify-center gap-2 rounded-2xl bg-yellow-400 px-6 py-3 text-sm font-extrabold text-slate-900 transition hover:bg-yellow-500"
            >
              Get SEO Audit <ArrowRight className="h-4 w-4" />
            </Link>
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
                <div className="text-lg font-extrabold">
                  Want a clear SEO roadmap for your website?
                </div>
                <p className="mt-1 text-sm text-white/75">
                  Send your website linkâ€”weâ€™ll reply with audit priorities + plan.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <Link prefetch={false}
                  href="/contact/"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-yellow-400 px-6 py-3 text-sm font-extrabold text-slate-900 transition hover:bg-yellow-500"
                >
                  Get SEO Audit <ArrowRight className="h-4 w-4" />
                </Link>
                <Link prefetch={false}
                  href="/services"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/20 bg-white/10 px-6 py-3 text-sm font-extrabold text-white transition hover:bg-white/15"
                >
                  Explore services <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <p className="sr-only">
              SEO audit service, technical SEO, on page SEO, internal linking, topical clusters, content strategy,
              SEO services Bangladesh, Mugnee IT Solutions.
            </p>
          </div>
        </div>
      </section>
      
    </main>
  );
}

/* ================= UI Bits ================= */

function MiniBulletDark({ icon: Icon, text }: { icon: LucideIcon; text: string }) {
  return (
    <div className="flex items-start gap-3 rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur">
      <div className="grid h-10 w-10 place-items-center rounded-2xl bg-white/10">
        <Icon className="h-5 w-5 text-white" />
      </div>
      <p className="text-sm font-semibold text-white/85 leading-6">{text}</p>
    </div>
  );
}

function MiniStat({ icon: Icon, title, desc }: { icon: LucideIcon; title: string; desc: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
      <div className="flex items-start gap-3">
        <div className="grid h-10 w-10 place-items-center rounded-2xl bg-white/10">
          <Icon className="h-5 w-5 text-white" />
        </div>
        <div className="min-w-0">
          <div className="text-sm font-extrabold text-white">{title}</div>
          <div className="mt-1 text-xs leading-5 text-white/70">{desc}</div>
        </div>
      </div>
    </div>
  );
}

function HeroRow({ icon: Icon, title, desc }: { icon: LucideIcon; title: string; desc: string }) {
  return (
    <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
      <div className="grid h-11 w-11 place-items-center rounded-2xl bg-white/10">
        <Icon className="h-5 w-5 text-white" />
      </div>
      <div className="min-w-0">
        <div className="text-sm font-extrabold text-white">{title}</div>
        <div className="mt-1 text-xs leading-5 text-white/70">{desc}</div>
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

function IncludeCard({
  icon: Icon,
  title,
  desc,
  pills,
}: {
  icon: LucideIcon;
  title: string;
  desc: string;
  pills: string[];
}) {
  return (
    <div className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-emerald-200/50 blur-2xl opacity-0 transition-opacity group-hover:opacity-100" />
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
        {pills.map((p) => (
          <span
            key={p}
            className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-bold text-slate-700"
          >
            {p}
          </span>
        ))}
      </div>

      <div className="mt-6 flex items-center gap-2 text-sm font-extrabold text-slate-900">
        Learn more <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
      </div>
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

function SignalCard({ icon: Icon, title, desc }: { icon: LucideIcon; title: string; desc: string }) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <div className="flex items-start gap-3">
        <div className="grid h-12 w-12 place-items-center rounded-2xl bg-emerald-50 ring-1 ring-emerald-100">
          <Icon className="h-6 w-6 text-emerald-700" />
        </div>
        <div className="min-w-0">
          <div className="text-sm font-extrabold text-slate-900">{title}</div>
          <p className="mt-2 text-sm leading-7 text-slate-600">{desc}</p>
        </div>
      </div>
    </div>
  );
}

function ProcessCard({ icon: Icon, title, desc }: { icon: LucideIcon; title: string; desc: string }) {
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

function CompareCard({
  leftTitle,
  leftPoints,
  rightTitle,
  rightPoints,
}: {
  leftTitle: string;
  leftPoints: string[];
  rightTitle: string;
  rightPoints: string[];
}) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
          <div className="text-sm font-extrabold text-slate-900">{leftTitle}</div>
          <div className="mt-4 space-y-3">
            {leftPoints.map((p) => (
              <div key={p} className="flex items-start gap-2 text-sm text-slate-700">
                <span className="mt-1 grid h-5 w-5 place-items-center rounded-full bg-white ring-1 ring-slate-200">
                  <span className="h-2 w-2 rounded-full bg-slate-400" />
                </span>
                <span className="leading-7">{p}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-emerald-200 bg-emerald-50/60 p-5">
          <div className="text-sm font-extrabold text-slate-900">{rightTitle}</div>
          <div className="mt-4 space-y-3">
            {rightPoints.map((p) => (
              <div key={p} className="flex items-start gap-2 text-sm text-slate-700">
                <span className="mt-1 grid h-5 w-5 place-items-center rounded-full bg-white ring-1 ring-emerald-200">
                  <CheckCircle2 className="h-4 w-4 text-emerald-700" />
                </span>
                <span className="leading-7">{p}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
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
              <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
            </span>
            <span className="leading-7">{i}</span>
          </div>
        ))}
      </div>

      <Link prefetch={false}
        href="/contact/"
        className={[
          "group mt-7 inline-flex w-full items-center justify-center gap-2 rounded-2xl px-6 py-3 text-sm font-extrabold transition",
          featured
            ? "bg-yellow-400 text-slate-900 hover:bg-yellow-500"
            : "bg-slate-900 text-white hover:bg-slate-800",
        ].join(" ")}
      >
        {cta}
        <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
      </Link>

      <div className="mt-4 text-xs text-slate-500">
        *Quotation depends on niche, scope, and competition.
      </div>
    </div>
  );
}












