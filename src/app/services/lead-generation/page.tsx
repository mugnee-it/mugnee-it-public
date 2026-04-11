// app/services/lead-generation/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Target,
  Filter,
  Megaphone,
  MousePointerClick,
  ClipboardCheck,
  ShieldCheck,
  LineChart,
  Users,
  Zap,
  MessagesSquare,
  LayoutPanelLeft,
  Sparkles,
  HelpCircle,
  Wrench,
  Gauge,
  FileText,
  Link2,
} from "lucide-react";
import { ServiceCustomerGuide } from "@/components/sections/ServiceVisualBlocks";

/** âœ… Publish-ready domain (NO localhost fallback) */
const SITE_URL = "https://mugneeit.com";

/** âœ… Page route */
const PAGE_PATH = "/services/lead-generation";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

/** âœ… SEO title under 60 chars */
const META_TITLE = "Lead Generation Service Agency | Funnel, Tracking, Qualification";

/** âœ… Meta description */
const META_DESC =
  "Lead generation systems for B2B & service businesses: landing pages, funnels, targeting, tracking, qualification, CRM handoff, optimization, and reporting.";

export const metadata: Metadata = {
  title: META_TITLE,
  description: META_DESC,
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: META_TITLE,
    description:
      "We build lead generation systems: funnels, tracking, qualification, and measurable reporting.",
    url: PAGE_URL,
    siteName: "Mugnee IT Solutions",
    type: "website",
  },
  robots: { index: true, follow: true },
};

const faqs = [
  {
    q: "Do you run ads or only build the lead funnel?",
    a: "We can do either. We can build funnel + tracking only, or run the full system including targeting and weekly optimization.",
  },
  {
    q: "What kind of businesses benefit most from lead generation?",
    a: "Service businesses (agencies, contractors, real estate, clinics) and B2B offers typically see strong results with a proper funnel + tracking.",
  },
  {
    q: "How do you track lead quality?",
    a: "We track conversion events, UTM sources, form fields, qualification questions, and pipeline outcomes like booked calls and closed deals.",
  },
  {
    q: "How soon can we start?",
    a: "If your offer and assets are ready, we can launch a simple funnel quickly and improve it weekly based on data.",
  },
  {
    q: "Do you provide reporting?",
    a: "Yes. You get KPI updates, tasks completed, what improved, and next actions.",
  },
  {
    q: "Do you build landing pages too?",
    a: "Yes. We create conversion-focused landing pages with offer positioning, proof, CTA flow, and FAQs for higher conversion rates.",
  },
  {
    q: "Can you integrate CRM or Google Sheets?",
    a: "Yes. We can connect forms to CRM/Sheets and add handoff rules so your sales team gets clean leads with context.",
  },
  {
    q: "Do you set up Facebook Pixel / Google Tag / GA4?",
    a: "Yes. We set up pixels/tags and key events so you can measure CPL, CVR, and booked calls accurately.",
  },
  {
    q: "How do you reduce junk leads?",
    a: "We improve targeting, add exclusions, and use qualification questions + validation rules so low-intent leads reduce over time.",
  },
  {
    q: "Which channels do you support?",
    a: "We support funnel + tracking systems for Facebook/Instagram, Google Search, and can pair with SEO or LinkedIn outreach depending on your market.",
  },
  {
    q: "Do you guarantee results?",
    a: "We donâ€™t guarantee a fixed number of leads. Performance depends on offer strength, competition, budget, and execution. We focus on a proven system and weekly improvements.",
  },
  {
    q: "Do you have fixed pricing?",
    a: "We donâ€™t publish fixed public pricing. Quotation depends on niche, channel, volume, and tracking/CRM scope.",
  },
];

/** âœ… Google-safe JSON-LD
 * - No fake reviews/ratings
 * - No â€œprice: 0â€ offer
 */
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

  const webpage = {
    "@type": "WebPage",
    name: META_TITLE,
    url: PAGE_URL,
    description:
      "Lead generation service: landing pages, funnels, tracking & pixels, targeting, qualification, CRM handoff, optimization, and reporting.",
    isPartOf: website,
  };

  const breadcrumb = {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
      { "@type": "ListItem", position: 2, name: "Services", item: `${SITE_URL}/services` },
      { "@type": "ListItem", position: 3, name: "Lead Generation", item: PAGE_URL },
    ],
  };

  const service = {
    "@type": "Service",
    name: "Lead Generation Service",
    serviceType: "Lead Generation / Marketing Funnel",
    provider: { "@type": "Organization", name: "Mugnee IT Solutions", url: SITE_URL },
    areaServed: ["Bangladesh", "Worldwide"],
    url: PAGE_URL,
    description:
      "Lead generation systems for B2B & service businesses: funnel landing pages, tracking & pixels, targeting, qualification, CRM handoff, optimization, and reporting.",
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

const includes = [
  {
    icon: LayoutPanelLeft,
    title: "Landing Page Funnel",
    desc: "Conversion-first landing page structure with offer positioning, proof, CTA flow, and FAQ.",
    pills: ["Offer", "Proof", "CTA", "FAQ"],
  },
  {
    icon: MousePointerClick,
    title: "Tracking & Pixels",
    desc: "UTM tracking, pixels, conversion events, and clear KPIs for CPL, CVR, and booked calls.",
    pills: ["UTM", "Pixels", "Events"],
  },
  {
    icon: Target,
    title: "Audience Targeting",
    desc: "ICP clarity, geo + interest filters, exclusions, and quality control to reduce junk leads.",
    pills: ["ICP", "Geo", "Filters"],
  },
  {
    icon: ClipboardCheck,
    title: "Lead Qualification",
    desc: "Form fields + questions to qualify leads before CRM handoff or booking.",
    pills: ["Form", "Rules", "Quality"],
  },
  {
    icon: MessagesSquare,
    title: "Follow-up Flow",
    desc: "WhatsApp/email follow-up structure (optional) to increase booked calls and response rate.",
    pills: ["WhatsApp", "Email", "Automation"],
  },
  {
    icon: LineChart,
    title: "Reporting & CRO",
    desc: "Weekly tasks, KPI reporting, and conversion rate optimization based on data.",
    pills: ["KPIs", "Weekly", "CRO"],
  },
];

const plans = [
  {
    title: "Funnel Setup",
    subtitle: "Landing page + tracking foundation",
    items: ["Landing page structure", "Pixel + event setup", "Lead form + CTA flow", "Launch checklist"],
    featured: false,
  },
  {
    title: "Lead System",
    subtitle: "Run + optimize weekly",
    items: ["Funnel + tracking + reporting", "Targeting improvement", "Weekly CRO updates", "Lead quality optimization"],
    featured: true,
  },
  {
    title: "Scale Plan",
    subtitle: "Multiple campaigns + advanced tracking",
    items: ["Multi-offer campaigns", "Advanced analytics events", "CRM handoff + pipeline", "Scaling roadmap"],
    featured: false,
  },
];

/** âœ… New SEO-supporting sections (content depth / topical coverage) */
const kpis = [
  { icon: LineChart, title: "CPL", desc: "Cost per lead â€” helps measure acquisition efficiency." },
  { icon: LayoutPanelLeft, title: "CVR", desc: "Conversion rate â€” landing page + offer performance." },
  { icon: Users, title: "Booked calls", desc: "Tracks real outcomes, not just form fills." },
  { icon: Filter, title: "Lead quality", desc: "Qualification + pipeline notes reduce junk leads." },
];

const channels = [
  { icon: Megaphone, title: "Facebook/Instagram", desc: "Best for volume + visual offers. Needs strong funnel + tracking." },
  { icon: SearchIcon, title: "Google Search", desc: "High intent leads. Works great with conversion landing pages." },
  { icon: Link2, title: "LinkedIn Outreach", desc: "Great for B2B decision makers. Pair with setter workflow." },
  { icon: FileText, title: "SEO (Organic)", desc: "Long-term inbound pipeline. Pair with content + internal links." },
];

const qualificationExamples = [
  "What service do you need? (dropdown)",
  "Budget range (optional)",
  "Project timeline (ASAP / this month / later)",
  "Location / service area",
  "Business type / company size (for B2B)",
];

const startChecklist = [
  "Your offer details (what you sell + typical price range)",
  "Target audience (ICP), industries, locations, exclusions",
  "Existing website/landing page (if any) + brand assets",
  "Preferred channel (FB/IG, Google, mixed) + monthly scope",
  "CRM/Sheet access requirements for lead handoff",
];

export default function LeadGenerationPage() {
  const jsonLd = buildJsonLd();

  return (
    <main className="bg-white">
      {/* âœ… JSON-LD (single) */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* ================= HERO ================= */}
      <section className="relative isolate overflow-hidden bg-slate-950">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_14%_6%,rgba(56,189,248,0.24),transparent_34%),radial-gradient(circle_at_84%_16%,rgba(251,191,36,0.20),transparent_38%),radial-gradient(circle_at_68%_80%,rgba(147,51,234,0.22),transparent_44%),linear-gradient(120deg,#020617_0%,#0a1b33_48%,#25153f_100%)]" />
        <div className="pointer-events-none absolute inset-0 opacity-[0.18] [background:radial-gradient(circle_at_1px_1px,rgba(255,255,255,.35)_1px,transparent_0)] [background-size:22px_22px]" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-900/20 via-transparent to-slate-950/45" />

        <div className="relative z-10 mx-auto max-w-6xl px-4 pb-16 pt-24 sm:pb-20 sm:pt-28">
          <nav className="text-[11px] font-bold text-white/70">
            <Link prefetch={false} href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link prefetch={false} href="/services" className="hover:text-white">Services</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Lead Generation</span>
          </nav>

          <div className="mt-6 inline-flex flex-wrap items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[11px] font-extrabold text-white backdrop-blur">
            <span className="grid h-6 w-6 place-items-center rounded-full bg-yellow-400 text-slate-900">
              <Sparkles className="h-4 w-4" />
            </span>
            GROWTH LEAD ENGINE
          </div>

          <div className="mt-8 grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <h1 className="max-w-3xl text-4xl font-black leading-[1.06] text-white sm:text-5xl">
                Lead Generation Service
                <br />
                <span className="text-yellow-300">for predictable sales pipeline</span>
              </h1>

              <p className="mt-4 max-w-2xl text-base leading-8 text-white/85">
                We build a complete lead generation system: funnel landing page, tracking & pixels,
                targeting, lead qualification, CRM handoff, and weekly reportingâ€”so you can scale confidently.
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <MiniBulletDark icon={LayoutPanelLeft} text="Conversion-first landing page funnel" />
                <MiniBulletDark icon={MousePointerClick} text="Tracking events + pixels + UTMs" />
                <MiniBulletDark icon={Target} text="Targeting + lead quality control" />
                <MiniBulletDark icon={LineChart} text="Weekly reporting + optimization" />
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link prefetch={false}
                  href="/contact/"
                  className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-yellow-400 px-7 py-3.5 text-sm font-extrabold text-slate-900 shadow-[0_20px_45px_rgba(15,23,42,.35)] transition hover:-translate-y-0.5 hover:bg-yellow-300"
                >
                  Start Lead Plan
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </Link>

                <a
                  href="https://wa.me/8801958645415"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/20 bg-white/10 px-7 py-3.5 text-sm font-extrabold text-white backdrop-blur transition hover:bg-white/15"
                >
                  WhatsApp <MessagesSquare className="h-4 w-4" />
                </a>

                <a
                  href="tel:+8801958645415"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/20 bg-white/10 px-7 py-3.5 text-sm font-extrabold text-white backdrop-blur transition hover:bg-white/15"
                >
                  Call Now <ArrowRight className="h-4 w-4" />
                </a>
              </div>

              <div className="mt-6 grid gap-2 text-sm font-semibold text-white/90 sm:grid-cols-2">
                <span className="inline-flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-emerald-300" /> Funnel + tracking in one workflow</span>
                <span className="inline-flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-yellow-300" /> Qualified lead form logic</span>
                <span className="inline-flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-fuchsia-300" /> Weekly KPI optimization</span>
                <span className="inline-flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-cyan-300" /> CRM-ready lead handoff</span>
              </div>

              <p className="sr-only">
                lead generation service, b2b lead generation, funnel landing page, conversion tracking,
                pixels, utm tracking, lead qualification, crm handoff, conversion optimization, Mugnee IT Solutions.
              </p>
            </div>

            <div className="grid gap-4">
              <div className="rounded-3xl border border-white/20 bg-white/10 p-6 backdrop-blur">
                <div className="flex items-center justify-between">
                  <div className="text-sm font-extrabold uppercase tracking-widest text-white/90">Lead Engine Snapshot</div>
                  <span className="rounded-full bg-yellow-300/20 px-3 py-1 text-xs font-extrabold text-yellow-200">ACTIVE</span>
                </div>

                <div className="mt-4 space-y-3">
                  <HeroRow icon={LayoutPanelLeft} title="Build" desc="Landing page and offer-aligned flow" />
                  <HeroRow icon={MousePointerClick} title="Track" desc="Pixel, events, UTMs, and KPI setup" />
                  <HeroRow icon={Target} title="Filter" desc="Audience quality with exclusions and rules" />
                  <HeroRow icon={ClipboardCheck} title="Deliver" desc="Qualified leads with CRM handoff" />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                <MiniStat icon={Zap} title="Weekly" desc="Optimization sprint" />
                <MiniStat icon={Gauge} title="KPI" desc="CPL / CVR focus" />
                <MiniStat icon={Users} title="Sales" desc="Pipeline-ready leads" />
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-6xl px-4">
          <div className="h-px w-full bg-white/10" />
        </div>
      </section>

      <ServiceCustomerGuide pillar="lead-generation" />

      {/* ================= SOLUTION ================= */}
      <section id="lead-generation-solution" className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <p className="text-xs font-extrabold tracking-[0.28em] text-slate-500">
            LEAD GENERATION SOLUTION
          </p>
          <h2 className="mt-2 text-3xl font-extrabold text-slate-900">
            Lead Generation Service Solution
          </h2>
          <p className="mt-2 max-w-3xl text-sm leading-7 text-slate-600">
            We combine funnel strategy, conversion tracking, targeting, qualification, and weekly optimization
            so your team gets more qualified leads instead of random form fills.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <Outcome text="Funnel structure aligned with your offer and audience intent" />
            <Outcome text="Tracking setup for CPL, CVR, booked calls, and lead quality" />
            <Outcome text="Better lead quality through qualification and form logic" />
            <Outcome text="Weekly optimization roadmap focused on measurable KPI improvement" />
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link prefetch={false}
              href="/contact/"
              className="inline-flex items-center gap-2 rounded-2xl bg-slate-900 px-6 py-3 text-sm font-extrabold text-white hover:bg-slate-800"
            >
              Get Lead Solution <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="#lead-generation-process"
              className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-6 py-3 text-sm font-extrabold text-slate-900 hover:bg-slate-100"
            >
              See process <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      <section id="lead-generation-benefits" className="mx-auto max-w-6xl px-4 pb-14">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">
          <p className="text-xs font-extrabold tracking-[0.28em] text-slate-500">LEAD GENERATION BENEFITS</p>
          <h2 className="mt-2 text-3xl font-extrabold text-slate-900">Benefits of this Lead Generation solution</h2>
          <div className="mt-6">
            <h3 className="text-sm font-extrabold uppercase tracking-[0.16em] text-slate-500">Why It Works</h3>
            <div className="mt-3 grid gap-3 sm:grid-cols-2">
              {[
                "Combines offer, funnel, targeting, and tracking into one measurable system",
                "Improves lead quality through qualification and exclusion logic",
                "Weekly data review helps reduce CPL and increase conversion rate",
                "Connects marketing activity directly with sales pipeline outcomes",
              ].map((item) => (
                <div key={item} className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm font-semibold text-slate-700">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6">
            <h3 className="text-sm font-extrabold uppercase tracking-[0.16em] text-slate-500">How Clients Benefit</h3>
            <div className="mt-3 grid gap-3 sm:grid-cols-2">
              {[
                "Sales teams receive cleaner, better-qualified leads with context",
                "Business owners get transparent KPI visibility before scaling budget",
                "Campaign waste drops through better audience and form controls",
                "Pipeline growth becomes more consistent with weekly optimization sprints",
              ].map((item) => (
                <div key={item} className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm font-semibold text-slate-700">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="lead-generation-comparison" className="mx-auto max-w-6xl px-4 pb-14">
        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
          <p className="text-xs font-extrabold tracking-[0.28em] text-slate-500">LEAD GENERATION COMPARISON</p>
          <h2 className="mt-2 text-3xl font-extrabold text-slate-900">Lead Generation Service vs other approaches</h2>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {[
              "Structured lead systems: better quality control and measurable pipeline growth",
              "Ad-only setup: faster start, but weaker qualification and follow-up clarity",
              "Organic-only approach: lower ad spend, but usually slower lead velocity",
              "Integrated funnel + tracking model: stronger scaling decisions with KPI visibility",
            ].map((item) => (
              <div key={item} className="rounded-2xl border border-slate-200 bg-white p-4 text-sm font-semibold text-slate-700">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="lead-generation-industries" className="mx-auto max-w-6xl px-4 pb-14">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">
          <p className="text-xs font-extrabold tracking-[0.28em] text-slate-500">INDUSTRIES WE SUPPORT</p>
          <h2 className="mt-2 text-3xl font-extrabold text-slate-900">Industries we support with Lead Generation</h2>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Healthcare and clinic services",
              "Real estate and property businesses",
              "Education and training providers",
              "Home services and local contractors",
              "IT, software, and digital agencies",
              "B2B consulting and professional services",
            ].map((item) => (
              <div key={item} className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm font-semibold text-slate-700">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="lead-generation-models" className="mx-auto max-w-6xl px-4 pb-14">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">
          <p className="text-xs font-extrabold tracking-[0.28em] text-slate-500">DELIVERY MODELS</p>
          <h2 className="mt-2 text-3xl font-extrabold text-slate-900">Lead generation models we follow</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {[
              {
                icon: Target,
                title: "Pilot validation model",
                desc: "Small controlled launch to validate offer, targeting, and early conversion behavior.",
              },
              {
                icon: Zap,
                title: "Agile optimization model",
                desc: "Weekly sprint updates for funnel copy, targeting, and lead quality improvements.",
              },
              {
                icon: ClipboardCheck,
                title: "Qualification-first model",
                desc: "Form logic and filtering rules are tuned to improve lead-to-meeting fit.",
              },
              {
                icon: LineChart,
                title: "Scale model",
                desc: "After validation, budget and campaigns are expanded with KPI-driven decisions.",
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

      {/* ================= WHAT IS LEAD GENERATION ================= */}
      <section id="lead-generation-service" className="mx-auto max-w-6xl px-4 py-14">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-6">
            <p className="text-xs font-extrabold tracking-[0.28em] text-slate-500">
              LEAD GENERATION SERVICE
            </p>
            <h2 className="mt-3 text-3xl font-extrabold text-slate-900">
              What is Lead Generation
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Lead generation is the process of turning targeted traffic into inquiries and booked calls.
              We build a system that captures leads, tracks performance, qualifies contacts, and connects
              the funnel with your sales process.
            </p>

            <div className="mt-6 space-y-3">
              <InfoLine icon={Megaphone} title="Traffic" desc="Ads / organic / referral â†’ targeted clicks." />
              <InfoLine icon={LayoutPanelLeft} title="Convert" desc="Landing page + proof + CTA â†’ leads." />
              <InfoLine icon={ClipboardCheck} title="Qualify" desc="Fit + intent checks â†’ better meetings." />
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
              <div className="text-sm font-extrabold text-slate-900">
                Why lead generation funnels work
              </div>
              <div className="mt-4 space-y-3">
                <Benefit text="Predictable inbound leads every week" />
                <Benefit text="Lower cost per lead with better conversion rates" />
                <Benefit text="Cleaner pipeline with lead qualification" />
                <Benefit text="Clear reporting to decide what to scale" />
                <Benefit text="Better results over time with weekly optimization" />
              </div>

              <div className="mt-6 rounded-2xl bg-slate-50 p-5 ring-1 ring-slate-200">
                <div className="flex items-start gap-3">
                  <HelpCircle className="mt-0.5 h-5 w-5 text-slate-900" />
                  <p className="text-sm text-slate-700 leading-7">
                    Lead gen is not â€œboost postâ€. Itâ€™s a system:{" "}
                    <b>offer + funnel + tracking + targeting + optimization</b>.
                  </p>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link prefetch={false}
                  href="/contact/"
                  className="inline-flex items-center gap-2 rounded-2xl bg-slate-900 px-5 py-3 text-sm font-extrabold text-white hover:bg-slate-800"
                >
                  Request Lead Plan <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href="#lead-generation-agency"
                  className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-5 py-3 text-sm font-extrabold text-slate-900 hover:bg-slate-50"
                >
                  Why choose us <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= KPI TRACKING (NEW SEO SECTION) ================= */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <p className="text-xs font-extrabold tracking-[0.28em] text-slate-500">MEASUREMENT</p>
          <h2 className="mt-2 text-3xl font-extrabold text-slate-900">
            KPIs we track (so optimization is clear)
          </h2>
          <p className="mt-2 max-w-3xl text-sm leading-7 text-slate-600">
            We measure the funnel with clean tracking. Reporting tells you what improved and what we do next.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {kpis.map((k) => (
              <KpiCard key={k.title} icon={k.icon} title={k.title} desc={k.desc} />
            ))}
          </div>
        </div>
      </section>

      {/* ================= CHANNELS (NEW SEO SECTION) ================= */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <p className="text-xs font-extrabold tracking-[0.28em] text-slate-500">CHANNELS</p>
          <h2 className="mt-2 text-3xl font-extrabold text-slate-900">
            Lead generation channels we support
          </h2>
          <p className="mt-2 max-w-3xl text-sm leading-7 text-slate-600">
            Choose channels based on your market and offer. We build the same core system: funnel + tracking + optimization.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {channels.map((c) => (
              <KpiCard key={c.title} icon={c.icon} title={c.title} desc={c.desc} />
            ))}
          </div>
        </div>
      </section>

      {/* ================= LEAD QUALIFICATION (NEW SEO SECTION) ================= */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <p className="text-xs font-extrabold tracking-[0.28em] text-slate-500">LEAD QUALITY</p>
          <h2 className="mt-2 text-3xl font-extrabold text-slate-900">
            Lead qualification that reduces junk leads
          </h2>
          <p className="mt-2 max-w-3xl text-sm leading-7 text-slate-600">
            We add qualification logic so your team spends time on high-intent leads. This improves close rate and lowers wasted spend.
          </p>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <div className="flex items-start gap-3">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-slate-900 text-white">
                  <ClipboardCheck className="h-6 w-6" />
                </span>
                <div className="min-w-0">
                  <div className="text-lg font-extrabold text-slate-900">Example qualification questions</div>
                  <div className="mt-4 space-y-2">
                    {qualificationExamples.map((x) => (
                      <Bullet key={x} text={x} />
                    ))}
                  </div>
                  <p className="mt-4 text-xs text-slate-500">
                    *Questions are adjusted per niche to maximize quality without hurting conversion rate.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-slate-900 p-6 text-white shadow-sm sm:p-8">
              <div className="flex items-start gap-3">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-yellow-400 text-slate-900">
                  <ShieldCheck className="h-6 w-6" />
                </span>
                <div className="min-w-0">
                  <div className="text-lg font-extrabold">Quality control rules</div>
                  <p className="mt-2 text-sm leading-7 text-white/75">
                    We use filters, exclusions, and validation to reduce low-intent leads.
                  </p>
                  <div className="mt-4 space-y-2">
                    <BulletDark text="Audience exclusions (wrong interests / wrong geo / job mismatch)" />
                    <BulletDark text="Form validation (phone/email) and intent fields" />
                    <BulletDark text="Optional WhatsApp follow-up to confirm intent" />
                    <BulletDark text="Weekly lead review and targeting refinement" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link prefetch={false}
              href="/contact/"
              className="inline-flex items-center gap-2 rounded-2xl bg-slate-900 px-6 py-3 text-sm font-extrabold text-white hover:bg-slate-800"
            >
              Request Lead Plan <ArrowRight className="h-4 w-4" />
            </Link>
            <Link prefetch={false}
              href="/services/seo"
              className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-6 py-3 text-sm font-extrabold text-slate-900 hover:bg-slate-50"
            >
              Pair with SEO for long-term leads <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ================= LEAD GENERATION PROCESS ================= */}
      <section id="lead-generation-process" className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <p className="text-xs font-extrabold tracking-[0.28em] text-slate-500">
            LEAD GENERATION PROCESS
          </p>
          <h2 className="mt-2 text-3xl font-extrabold text-slate-900">
            Lead generation process â€” step by step
          </h2>
          <p className="mt-2 max-w-3xl text-sm leading-7 text-slate-600">
            Offer clarity â†’ funnel setup â†’ tracking â†’ targeting â†’ weekly optimization â†’ reporting â†’ scale.
          </p>

          <div className="mt-10 grid gap-6 lg:grid-cols-4">
            <StepCard n="01" icon={Target} title="Offer" desc="Define offer, ICP, and conversion message." />
            <StepCard n="02" icon={LayoutPanelLeft} title="Funnel" desc="Landing page + CTA + proof + form." />
            <StepCard n="03" icon={MousePointerClick} title="Tracking" desc="Pixels, events, UTMs, and KPIs." />
            <StepCard n="04" icon={LineChart} title="Optimize" desc="Weekly updates + scale what works." />
          </div>
        </div>
      </section>

      {/* ================= WHAT'S INCLUDED ================= */}
      <section id="lead-generation-features" className="mx-auto max-w-6xl px-4 py-14">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-5">
            <p className="text-xs font-extrabold tracking-[0.28em] text-slate-500">
              LEAD GENERATION FEATURES
            </p>
            <h2 className="mt-3 text-3xl font-extrabold text-slate-900">
              Funnel + tracking + quality control
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              We donâ€™t sell random clicks. We build a measurable funnel that improves lead quality and
              lowers CPL over time.
            </p>

            <div className="mt-7 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="text-sm font-extrabold text-slate-900">Expected outcomes</div>
              <div className="mt-3 space-y-2">
                <Outcome text="Higher conversion rate from landing page" />
                <Outcome text="Better lead quality with qualification" />
                <Outcome text="Clear KPI reporting and next actions" />
                <Outcome text="Weekly improvements based on data" />
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
            {includes.map((c) => (
              <IncludeCard key={c.title} icon={c.icon} title={c.title} desc={c.desc} pills={c.pills} />
            ))}
          </div>
        </div>
      </section>

      {/* ================= TO START (NEW SEO SECTION) ================= */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <p className="text-xs font-extrabold tracking-[0.28em] text-slate-500">TO START</p>
          <h2 className="mt-2 text-3xl font-extrabold text-slate-900">
            What we need from you (quick checklist)
          </h2>
          <p className="mt-2 max-w-3xl text-sm leading-7 text-slate-600">
            Provide the basics and we can move faster. If something is missing, weâ€™ll help you structure it.
          </p>

          <div className="mt-10 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <div className="grid gap-6 lg:grid-cols-2">
              <div>
                <div className="text-sm font-extrabold text-slate-900">Starter inputs</div>
                <div className="mt-4 space-y-2">
                  {startChecklist.map((x) => (
                    <Bullet key={x} text={x} />
                  ))}
                </div>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
                <div className="flex items-start gap-3">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-slate-900 text-white">
                    <Wrench className="h-6 w-6" />
                  </span>
                  <div className="min-w-0">
                    <div className="text-lg font-extrabold text-slate-900">Bonus support</div>
                    <p className="mt-2 text-sm leading-7 text-slate-600">
                      We can propose a simple funnel structure + tracking plan so the campaign starts with clarity.
                    </p>
                    <div className="mt-5 flex flex-wrap gap-3">
                      <Link prefetch={false}
                        href="/contact/"
                        className="inline-flex items-center gap-2 rounded-2xl bg-slate-900 px-6 py-3 text-sm font-extrabold text-white hover:bg-slate-800"
                      >
                        Request checklist <ArrowRight className="h-4 w-4" />
                      </Link>
                      <a
                        href="#lead-generation-faq"
                        className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-6 py-3 text-sm font-extrabold text-slate-900 hover:bg-slate-50"
                      >
                        Read FAQ <ArrowRight className="h-4 w-4" />
                      </a>
                    </div>

                    <p className="sr-only">
                      lead generation checklist, landing page funnel, conversion tracking, UTM tracking, pixels, CRM handoff, reporting.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link prefetch={false}
              href="/services/seo"
              className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-2 text-sm font-extrabold text-slate-900 hover:bg-slate-50"
            >
              SEO + Lead Gen bundle <ArrowRight className="h-4 w-4" />
            </Link>
            <Link prefetch={false}
              href="/services/linkedin-setter"
              className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-2 text-sm font-extrabold text-slate-900 hover:bg-slate-50"
            >
              LinkedIn outreach for B2B <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ================= WHY US ================= */}
      <section id="lead-generation-agency" className="bg-white">
        <div className="mx-auto max-w-6xl px-4 pb-14">
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
            <p className="text-xs font-extrabold tracking-[0.28em] text-slate-500">
              LEAD GENERATION AGENCY
            </p>
            <h2 className="mt-2 text-3xl font-extrabold text-slate-900">
              Why choose us for Lead Generation
            </h2>
            <p className="mt-2 max-w-3xl text-sm leading-7 text-slate-600">
              We deliver a clean, data-driven lead system with quality checks, transparent reporting, and
              weekly optimization focused on business outcomes.
            </p>

            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              <WhyCard
                icon={ShieldCheck}
                title="Quality-controlled setup"
                desc="We configure tracking, events, and lead flow carefully so measurement stays reliable from day one."
              />
              <WhyCard
                icon={Wrench}
                title="Clean process and reporting"
                desc="Structured weekly updates show what changed, what improved, and what we optimize next."
              />
              <WhyCard
                icon={Users}
                title="Higher lead quality"
                desc="Qualification logic and targeting refinement improve lead relevance and close-rate potential."
              />
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link prefetch={false}
                href="/contact/"
                className="inline-flex items-center gap-2 rounded-2xl bg-slate-900 px-6 py-3 text-sm font-extrabold text-white hover:bg-slate-800"
              >
                Get Lead Plan <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="#lead-generation-faq"
                className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-6 py-3 text-sm font-extrabold text-slate-900 hover:bg-slate-50"
              >
                Read FAQ <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ================= PACKAGES (NO PUBLIC PRICE) ================= */}
      <section id="lead-generation-packages" className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-extrabold tracking-[0.28em] text-slate-500">
                LEAD GENERATION PACKAGES
              </p>
              <h2 className="mt-2 text-3xl font-extrabold text-slate-900">
                Choose a plan by scope (quotation-based)
              </h2>
              <p className="mt-2 max-w-2xl text-sm text-slate-600">
                We donâ€™t show fixed public pricing. Quotation depends on channel, volume, and tracking needs.
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
        </div>
      </section>

      {/* ================= FAQ + FINAL CTA ================= */}
      <section id="lead-generation-faq" className="mx-auto max-w-6xl px-4 pb-16 pt-14">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <p className="text-xs font-extrabold tracking-[0.28em] text-slate-500">LEAD GENERATION FAQ</p>
          <h2 className="mt-2 text-3xl font-extrabold text-slate-900">
            Lead generation service FAQs
          </h2>

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
                  Want a lead generation plan for your business?
                </div>
                <p className="mt-1 text-sm text-white/75">
                  Share your offer + target audienceâ€”weâ€™ll reply with funnel priorities and a plan.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <Link prefetch={false}
                  href="/contact/"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-yellow-400 px-6 py-3 text-sm font-extrabold text-slate-900 transition hover:bg-yellow-500"
                >
                  Get Lead Plan <ArrowRight className="h-4 w-4" />
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
              lead generation service, b2b lead generation, funnel landing page, conversion tracking,
              pixels, utm tracking, lead qualification, crm handoff, conversion optimization.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

/* ================= UI bits (reusable) ================= */

function MiniBulletDark({ icon: Icon, text }: { icon: any; text: string }) {
  return (
    <div className="flex items-start gap-3 rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur">
      <div className="grid h-10 w-10 place-items-center rounded-2xl bg-white/10">
        <Icon className="h-5 w-5 text-white" />
      </div>
      <p className="text-sm font-semibold leading-6 text-white/85">{text}</p>
    </div>
  );
}

function HeroRow({ icon: Icon, title, desc }: { icon: any; title: string; desc: string }) {
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

function MiniStat({ icon: Icon, title, desc }: { icon: any; title: string; desc: string }) {
  return (
    <div className="rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur">
      <div className="flex items-center gap-3">
        <span className="grid h-10 w-10 place-items-center rounded-xl bg-white/15 text-white">
          <Icon className="h-5 w-5" />
        </span>
        <div className="min-w-0">
          <div className="text-xs font-extrabold uppercase tracking-wide text-white">{title}</div>
          <div className="text-xs text-white/70">{desc}</div>
        </div>
      </div>
    </div>
  );
}

function StepCard({
  n,
  icon: Icon,
  title,
  desc,
}: {
  n: string;
  icon: any;
  title: string;
  desc: string;
}) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <span className="text-xs font-extrabold text-slate-500">STEP {n}</span>
        <span className="grid h-10 w-10 place-items-center rounded-2xl bg-slate-900 text-white">
          <Icon className="h-5 w-5" />
        </span>
      </div>
      <div className="mt-4 text-lg font-extrabold text-slate-900">{title}</div>
      <p className="mt-2 text-sm leading-7 text-slate-600">{desc}</p>
    </div>
  );
}

function InfoLine({ icon: Icon, title, desc }: { icon: any; title: string; desc: string }) {
  return (
    <div className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="grid h-10 w-10 place-items-center rounded-2xl bg-slate-900 text-white">
        <Icon className="h-5 w-5" />
      </div>
      <div className="min-w-0">
        <div className="text-sm font-extrabold text-slate-900">{title}</div>
        <div className="mt-1 text-sm leading-7 text-slate-600">{desc}</div>
      </div>
    </div>
  );
}

function Benefit({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-2 text-sm text-slate-700">
      <span className="mt-1 grid h-5 w-5 place-items-center rounded-full bg-slate-900">
        <CheckCircle2 className="h-3.5 w-3.5 text-white" />
      </span>
      <span className="leading-7">{text}</span>
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
  icon: any;
  title: string;
  desc: string;
  pills: string[];
}) {
  return (
    <div className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-yellow-200/60 blur-2xl opacity-0 transition-opacity group-hover:opacity-100" />
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

function WhyCard({ icon: Icon, title, desc }: { icon: any; title: string; desc: string }) {
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
        *Quotation depends on niche, channel, and monthly scope.
      </div>
    </div>
  );
}

function KpiCard({ icon: Icon, title, desc }: { icon: any; title: string; desc: string }) {
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

function Bullet({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-2 text-sm text-slate-700">
      <span className="mt-1 grid h-5 w-5 place-items-center rounded-full bg-emerald-50 ring-1 ring-emerald-100">
        <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
      </span>
      <span className="leading-7">{text}</span>
    </div>
  );
}

function BulletDark({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-2 text-sm text-white/85">
      <span className="mt-1 grid h-5 w-5 place-items-center rounded-full bg-white/10 ring-1 ring-white/15">
        <CheckCircle2 className="h-3.5 w-3.5 text-yellow-300" />
      </span>
      <span className="leading-7">{text}</span>
    </div>
  );
}

/** âœ… small helper to avoid importing Search twice from lucide in your list above */
function SearchIcon(props: any) {
  return <Megaphone {...props} />;
}


