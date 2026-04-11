// app/services/linkedin-setter/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  ClipboardList,
  Gauge,
  HelpCircle,
  LineChart,
  Search,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
  MessageSquare,
  Filter,
  Shield,
  CalendarCheck2,
  Zap,
  Wrench,
} from "lucide-react";
import { ServiceCustomerGuide } from "@/components/sections/ServiceVisualBlocks";

/** âœ… Production env:
 * NEXT_PUBLIC_SITE_URL=https://mugneeit.com
 */
const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "https://mugneeit.com";

/** âœ… Page route */
const PAGE_PATH = "/services/linkedin-setter";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

/** âœ… Title under ~60 chars */
const META_TITLE = "LinkedIn Outreach (Setter) Service | B2B Appointment Setting";

const META_DESC =
  "LinkedIn outreach (setter) service for B2B lead generation: ICP targeting, profile optimization checklist, messaging sequences, follow-ups, booking qualified meetings, and reporting.";

export const metadata: Metadata = {
  title: META_TITLE,
  description: META_DESC,
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: META_TITLE,
    description:
      "We book qualified B2B meetings using ICP targeting, safe outreach workflows, messaging sequences, and transparent reporting.",
    url: PAGE_URL,
    siteName: "Mugnee IT Solutions",
    type: "website",
  },
  robots: { index: true, follow: true },
};

const faqs = [
  {
    q: "What does a LinkedIn outreach setter do?",
    a: "A setter targets the right prospects, sends structured connection + message sequences, follows up, qualifies leads, and books meetings on your calendar.",
  },
  {
    q: "Do you use automation tools?",
    a: "We can work manually or with safe limits. We focus on account safety, deliverability, and personalizationâ€”no aggressive spam-style automation.",
  },
  {
    q: "How many meetings can you book per month?",
    a: "It depends on niche, offer strength, ICP clarity, and message-market fit. Most campaigns improve after the first 2â€“4 weeks of testing and optimization.",
  },
  {
    q: "Do you write the messages for my niche?",
    a: "Yes. We build message scripts based on your offer, ICP pain points, and tone. Then we test variations and keep improving with performance data.",
  },
  {
    q: "What do you need from me to start?",
    a: "Your offer details, target industries/job titles, ideal locations, and a preferred meeting link. If needed, weâ€™ll share a profile conversion checklist to improve results.",
  },
  {
    q: "Is this only for Bangladesh clients?",
    a: "No. We support Bangladesh and international markets, including US/UK/Canada/Australia/Europeâ€”based on your target audience.",
  },
];

/** âœ… Google-safe JSON-LD
 * - No fake reviews/ratings
 * - No â€œprice: 0â€ offers
 * - No guarantees
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
    description: META_DESC,
    isPartOf: website,
  };

  const breadcrumb = {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
      { "@type": "ListItem", position: 2, name: "Services", item: `${SITE_URL}/services` },
      { "@type": "ListItem", position: 3, name: "LinkedIn Outreach (Setter)", item: PAGE_URL },
    ],
  };

  const service = {
    "@type": "Service",
    name: "LinkedIn Outreach (Setter) Service",
    serviceType: "B2B Lead Generation",
    provider: { "@type": "Organization", name: "Mugnee IT Solutions", url: SITE_URL },
    areaServed: ["Bangladesh", "Worldwide"],
    url: PAGE_URL,
    description:
      "We book qualified B2B meetings through ICP targeting, safe outreach workflows, messaging sequences, follow-ups, and transparent reporting.",
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
    icon: Target,
    title: "ICP + Targeting",
    desc: "Define your ideal customer profile, job titles, industries, locations, and exclusions for clean lead lists.",
    pills: ["ICP", "Titles", "Filters", "Segments"],
  },
  {
    icon: ShieldCheck,
    title: "Account Safety",
    desc: "Safe daily limits, warm follow-up pacing, and quality-first personalizationâ€”no spam behavior.",
    pills: ["Safety", "Limits", "Quality"],
  },
  {
    icon: MessageSquare,
    title: "Message System",
    desc: "Connection note + follow-up sequences designed to start conversations and qualify intent.",
    pills: ["Scripts", "Sequences", "Testing"],
  },
  {
    icon: CalendarCheck2,
    title: "Meeting Booking",
    desc: "We qualify prospects and book meetings on your calendar with context and notes.",
    pills: ["Qualified", "Booked", "Notes"],
  },
  {
    icon: ClipboardList,
    title: "Daily Workflow",
    desc: "Prospecting, connection requests, replies, follow-ups, pipeline updatesâ€”done consistently.",
    pills: ["Pipeline", "Consistency", "Process"],
  },
  {
    icon: LineChart,
    title: "Reporting",
    desc: "Weekly/monthly metrics: requests sent, acceptance rate, replies, meetings booked, and next actions.",
    pills: ["KPIs", "Wins", "Roadmap"],
  },
];

const plans = [
  {
    title: "Starter Setter",
    subtitle: "Testing + baseline pipeline",
    items: [
      "ICP setup + targeting filters",
      "Profile conversion checklist",
      "Message scripts + 1 sequence",
      "Daily outreach (safe limits)",
      "Weekly report + improvements",
    ],
    featured: false,
  },
  {
    title: "Growth Setter",
    subtitle: "Optimization + consistent meetings",
    items: [
      "ICP refinement + segmentation",
      "2â€“3 message variations (A/B)",
      "Follow-up system + qualification",
      "Calendar booking + notes",
      "Weekly reporting + roadmap",
    ],
    featured: true,
  },
  {
    title: "Authority Setter",
    subtitle: "Multi-segment + scale plan",
    items: [
      "Multi-ICP / multi-offer testing",
      "Advanced scripts + objection handling",
      "Pipeline tracking + conversion improvements",
      "Monthly strategy review",
      "Expansion map (new segments)",
    ],
    featured: false,
  },
];

/** âœ… New SEO-supporting sections (no fake numbers) */
const kpis = [
  { icon: Users, title: "Connection acceptance rate", desc: "Signals targeting relevance and profile trust." },
  { icon: MessageSquare, title: "Reply rate", desc: "Measures script quality + message-market fit." },
  { icon: CalendarCheck2, title: "Meetings booked", desc: "Core outcomeâ€”qualified meetings on your calendar." },
  { icon: Filter, title: "Lead quality notes", desc: "Why this lead fits + what they asked for." },
];

const requirements = [
  "Your offer (what you sell + who itâ€™s for + typical price range)",
  "Target industries / job titles / locations (and exclusions)",
  "Your calendar link (Calendly / Google appointment / meeting link)",
  "Access method (we follow your preferred security process)",
  "Tone/style preference (formal, friendly, direct)",
];

const safetyRules = [
  "Safe daily outreach limits (no aggressive spikes)",
  "Personalization for decision makers (avoid generic spam)",
  "Respectful follow-ups with proper spacing",
  "No misleading claims or fake urgency",
  "Stop rules for uninterested prospects",
];

export default function LinkedinSetterPage() {
  const jsonLd = buildJsonLd();

  return (
    <main className="bg-white">
      {/* âœ… JSON-LD single script */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ================= HERO ================= */}
      <section className="relative isolate overflow-hidden bg-slate-950">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_8%,rgba(250,204,21,0.22),transparent_34%),radial-gradient(circle_at_84%_14%,rgba(56,189,248,0.20),transparent_38%),radial-gradient(circle_at_68%_78%,rgba(99,102,241,0.28),transparent_46%),linear-gradient(115deg,#020617_0%,#0b1530_48%,#231a46_100%)]" />
        <div className="pointer-events-none absolute inset-0 opacity-[0.18] [background:radial-gradient(circle_at_1px_1px,rgba(255,255,255,.35)_1px,transparent_0)] [background-size:22px_22px]" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-900/20 via-transparent to-slate-950/45" />

        <div className="relative z-10 mx-auto max-w-6xl px-4 pb-16 pt-24 sm:pb-20 sm:pt-28">
          {/* breadcrumb */}
          <nav className="text-[11px] font-bold text-white/70">
            <Link prefetch={false} href="/" className="hover:text-white">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link prefetch={false} href="/services" className="hover:text-white">
              Services
            </Link>
            <span className="mx-2">/</span>
            <span className="text-white">LinkedIn Outreach (Setter)</span>
          </nav>

          <div className="mt-6 inline-flex flex-wrap items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[11px] font-extrabold text-white backdrop-blur">
            <span className="grid h-6 w-6 place-items-center rounded-full bg-yellow-400 text-slate-900">
              <Sparkles className="h-4 w-4" />
            </span>
            LINKEDIN GROWTH SYSTEM
          </div>

          <div className="mt-8 grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <h1 className="max-w-3xl text-4xl font-black leading-[1.06] text-white sm:text-5xl">
                LinkedIn Outreach (Setter) Service
                <br />
                <span className="text-yellow-300">for B2B Meeting Pipeline</span>
              </h1>

              <p className="mt-4 max-w-2xl text-base leading-8 text-white/85">
                We design and run a safe outreach engine: ICP targeting, message sequence testing, follow-up
                discipline, lead qualification, and booked calls with context-rich handover.
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <MiniBulletDark icon={Target} text="ICP + targeting filters" />
                <MiniBulletDark icon={MessageSquare} text="Message scripts + sequences" />
                <MiniBulletDark icon={ShieldCheck} text="Account-safe outreach workflow" />
                <MiniBulletDark icon={CalendarCheck2} text="Qualified meeting booking" />
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link prefetch={false}
                  href="/contact/"
                  className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-yellow-400 px-7 py-3.5 text-sm font-extrabold text-slate-900 shadow-[0_20px_45px_rgba(15,23,42,.35)] transition hover:-translate-y-0.5 hover:bg-yellow-300"
                >
                  Start Outreach Plan
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </Link>

                <a
                  href="https://wa.me/8801958645415"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/20 bg-white/10 px-7 py-3.5 text-sm font-extrabold text-white backdrop-blur transition hover:bg-white/15"
                >
                  WhatsApp <MessageSquare className="h-4 w-4" />
                </a>

                <a
                  href="tel:+8801958645415"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/20 bg-white/10 px-7 py-3.5 text-sm font-extrabold text-white backdrop-blur transition hover:bg-white/15"
                >
                  Call Now <ArrowRight className="h-4 w-4" />
                </a>
              </div>

              <div className="mt-6 grid gap-2 text-sm font-semibold text-white/90 sm:grid-cols-2">
                <span className="inline-flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-emerald-300" /> Personalized first-touch messages</span>
                <span className="inline-flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-yellow-300" /> Safe follow-up velocity</span>
                <span className="inline-flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-fuchsia-300" /> Reply quality tracking</span>
                <span className="inline-flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-cyan-300" /> Meeting-ready lead handoff</span>
              </div>

              <p className="sr-only">
                LinkedIn outreach service, LinkedIn lead generation, LinkedIn setter, B2B lead generation,
                appointment setting, meeting booking, ICP targeting, message sequences, safe outreach,
                Mugnee IT Solutions.
              </p>
            </div>

            <div className="grid gap-4">
              <div className="rounded-3xl border border-white/20 bg-white/10 p-6 backdrop-blur">
                <div className="flex items-center justify-between">
                  <div className="text-sm font-extrabold uppercase tracking-widest text-white/90">Outreach Coverage</div>
                  <span className="rounded-full bg-yellow-300/20 px-3 py-1 text-xs font-extrabold text-yellow-200">ACTIVE</span>
                </div>

                <div className="mt-4 space-y-3">
                  <HeroRow icon={Target} title="Target" desc="ICP list with clean filters and exclusions" />
                  <HeroRow icon={MessageSquare} title="Engage" desc="Connection + follow-up sequence workflow" />
                  <HeroRow icon={Shield} title="Protect" desc="Safe pacing and account trust controls" />
                  <HeroRow icon={CalendarCheck2} title="Book" desc="Qualified meetings with context notes" />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                <MiniStat icon={Zap} title="Daily" desc="Execution cycle" />
                <MiniStat icon={Gauge} title="A/B" desc="Message testing" />
                <MiniStat icon={Users} title="B2B" desc="Decision-makers" />
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-6xl px-4">
          <div className="h-px w-full bg-white/10" />
        </div>
      </section>

      <ServiceCustomerGuide pillar="linkedin-setter" />

      {/* ================= SOLUTION ================= */}
      <section id="linkedin-setter-solution" className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <p className="text-xs font-extrabold tracking-[0.28em] text-slate-500">
            LINKEDIN SETTER SOLUTION
          </p>
          <h2 className="mt-2 text-3xl font-extrabold text-slate-900">
            LinkedIn Outreach (Setter) Service Solution
          </h2>
          <p className="mt-2 max-w-3xl text-sm leading-7 text-slate-600">
            This solution is built for consistent pipeline growth: ICP targeting, safe daily execution,
            sequence testing, qualification workflow, and clear weekly reporting.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <Outcome text="Sharper targeting by industry, title, location, and intent filters" />
            <Outcome text="Message sequence system optimized for reply quality, not vanity volume" />
            <Outcome text="Qualified meetings booked with context before handover" />
            <Outcome text="Weekly KPI review to improve acceptance, replies, and booked calls" />
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link prefetch={false}
              href="/contact/"
              className="inline-flex items-center gap-2 rounded-2xl bg-slate-900 px-6 py-3 text-sm font-extrabold text-white hover:bg-slate-800"
            >
              Get Outreach Solution <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="#how-it-works"
              className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-6 py-3 text-sm font-extrabold text-slate-900 hover:bg-slate-100"
            >
              See process <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      <section id="linkedin-setter-benefits" className="mx-auto max-w-6xl px-4 pb-14">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">
          <p className="text-xs font-extrabold tracking-[0.28em] text-slate-500">LINKEDIN SETTER BENEFITS</p>
          <h2 className="mt-2 text-3xl font-extrabold text-slate-900">Benefits of this LinkedIn Outreach solution</h2>
          <div className="mt-6">
            <h3 className="text-sm font-extrabold uppercase tracking-[0.16em] text-slate-500">Why It Works</h3>
            <div className="mt-3 grid gap-3 sm:grid-cols-2">
              {[
                "Targets real B2B decision makers instead of broad cold lists",
                "Message sequence testing improves reply quality over time",
                "Safe daily workflow protects account trust and long-term consistency",
                "Qualification before booking improves meeting-to-close potential",
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
                "Sales teams get qualified calls instead of unfiltered conversations",
                "Founders save time with a managed outreach and follow-up system",
                "Pipeline quality improves through tighter ICP and objections insight",
                "Reporting shows what to scale, pause, and optimize each week",
              ].map((item) => (
                <div key={item} className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm font-semibold text-slate-700">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="linkedin-setter-comparison" className="mx-auto max-w-6xl px-4 pb-14">
        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
          <p className="text-xs font-extrabold tracking-[0.28em] text-slate-500">LINKEDIN SETTER COMPARISON</p>
          <h2 className="mt-2 text-3xl font-extrabold text-slate-900">LinkedIn outreach vs other channels</h2>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {[
              "LinkedIn outreach: direct access to B2B decision makers with intent-based targeting",
              "Cold email only: scalable volume, but inbox deliverability and trust can be harder",
              "Paid ads only: quick traffic, but can become expensive without strong funnel quality",
              "LinkedIn + qualification workflow: stronger meeting quality and conversion readiness",
            ].map((item) => (
              <div key={item} className="rounded-2xl border border-slate-200 bg-white p-4 text-sm font-semibold text-slate-700">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="linkedin-setter-industries" className="mx-auto max-w-6xl px-4 pb-14">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">
          <p className="text-xs font-extrabold tracking-[0.28em] text-slate-500">INDUSTRIES WE SUPPORT</p>
          <h2 className="mt-2 text-3xl font-extrabold text-slate-900">
            Where LinkedIn outreach performs well
          </h2>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "B2B software and SaaS",
              "IT services and development agencies",
              "Marketing and creative agencies",
              "Consulting and advisory firms",
              "Recruitment and staffing services",
              "Training, coaching, and education services",
            ].map((item) => (
              <div key={item} className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm font-semibold text-slate-700">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="linkedin-setter-models" className="mx-auto max-w-6xl px-4 pb-14">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">
          <p className="text-xs font-extrabold tracking-[0.28em] text-slate-500">DELIVERY MODELS</p>
          <h2 className="mt-2 text-3xl font-extrabold text-slate-900">
            Outreach delivery models we follow
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {[
              {
                icon: Search,
                title: "Pilot model",
                desc: "Short validation phase to test ICP, scripts, and early reply quality before scaling.",
              },
              {
                icon: Zap,
                title: "Agile sprint model",
                desc: "Weekly execution cycles with message A/B tests, follow-up refinement, and KPI reviews.",
              },
              {
                icon: ClipboardList,
                title: "Qualification-first model",
                desc: "Focuses on conversation quality and fit before calendar booking to reduce no-show waste.",
              },
              {
                icon: LineChart,
                title: "Scale model",
                desc: "After validation, we expand segments and increase pipeline volume with safety controls.",
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

      {/* ================= WHAT IS LINKEDIN OUTREACH ================= */}
      <section id="what-is" className="mx-auto max-w-6xl px-4 py-14">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-6">
            <p className="text-xs font-extrabold tracking-[0.28em] text-slate-500">WHAT IT IS</p>
            <h2 className="mt-3 text-3xl font-extrabold text-slate-900">
              What LinkedIn outreach is and how it works
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              LinkedIn outreach is a structured way to start conversations with your ideal B2B buyers. We
              identify the right people (ICP), connect with them, send a message sequence, follow up,
              qualify interest, and book meetingsâ€”without spam.
            </p>

            <div className="mt-6 space-y-3">
              <InfoLine icon={Search} title="Prospect" desc="Find decision makers using ICP filters." />
              <InfoLine
                icon={MessageSquare}
                title="Conversation"
                desc="Use scripts + follow-ups to get replies."
              />
              <InfoLine
                icon={CalendarCheck2}
                title="Convert"
                desc="Qualify and book meetings with context."
              />
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
              <div className="text-sm font-extrabold text-slate-900">
                Why businesses invest in LinkedIn outreach
              </div>
              <div className="mt-4 space-y-3">
                <Benefit text="Direct access to decision makers in your niche" />
                <Benefit text="Predictable pipeline growth with consistent outreach" />
                <Benefit text="Lower cost per meeting compared to many paid channels" />
                <Benefit text="Fast feedback loop to improve your offer and messaging" />
                <Benefit text="Works especially well for B2B services and high-ticket offers" />
              </div>

              <div className="mt-6 rounded-2xl bg-slate-50 p-5 ring-1 ring-slate-200">
                <div className="flex items-start gap-3">
                  <HelpCircle className="mt-0.5 h-5 w-5 text-slate-900" />
                  <p className="text-sm leading-7 text-slate-700">
                    Outreach is not random messaging. Itâ€™s a system:{" "}
                    <b>targeting + scripts + safe cadence + qualification + tracking</b>.
                  </p>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link prefetch={false}
                  href="/contact/"
                  className="inline-flex items-center gap-2 rounded-2xl bg-slate-900 px-5 py-3 text-sm font-extrabold text-white hover:bg-slate-800"
                >
                  Request Outreach Plan <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href="#why-us"
                  className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-5 py-3 text-sm font-extrabold text-slate-900 hover:bg-slate-50"
                >
                  Why choose us <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= HOW IT WORKS ================= */}
      <section id="how-it-works" className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <p className="text-xs font-extrabold tracking-[0.28em] text-slate-500">HOW IT WORKS</p>
          <h2 className="mt-2 text-3xl font-extrabold text-slate-900">
            Our outreach process â€” step by step
          </h2>
          <p className="mt-2 max-w-3xl text-sm leading-7 text-slate-600">
            We build a clean system: ICP â†’ profile conversion â†’ scripts â†’ daily outreach â†’ follow-ups â†’
            qualification â†’ meeting booking â†’ reporting and iteration.
          </p>

          <div className="mt-10 grid gap-6 lg:grid-cols-4">
            <StepCard n="01" icon={Target} title="ICP" desc="Define targeting filters, segments, and exclusions." />
            <StepCard n="02" icon={Users} title="Setup" desc="Profile checklist + credibility + CTA alignment." />
            <StepCard n="03" icon={MessageSquare} title="Sequence" desc="Scripts + follow-ups + A/B tests." />
            <StepCard n="04" icon={CalendarCheck2} title="Book" desc="Qualify replies and book meetings with notes." />
          </div>
        </div>
      </section>

      {/* ================= WHAT'S INCLUDED ================= */}
      <section className="mx-auto max-w-6xl px-4 py-14">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-5">
            <p className="text-xs font-extrabold tracking-[0.28em] text-slate-500">WHATâ€™S INCLUDED</p>
            <h2 className="mt-3 text-3xl font-extrabold text-slate-900">
              Everything needed to book meetings
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              We donâ€™t just send messages. We build a reliable process: clean targeting, safe outreach,
              strong scripts, consistent follow-ups, qualification, and trackable reporting.
            </p>

            <div className="mt-7 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="text-sm font-extrabold text-slate-900">Expected outcomes</div>
              <div className="mt-3 space-y-2">
                <Outcome text="Higher acceptance rate with better targeting" />
                <Outcome text="More replies from improved scripts + cadence" />
                <Outcome text="Qualified meetings booked with context" />
                <Outcome text="Clear KPIs + weekly improvements" />
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

      {/* ================= KPI TRACKING (NEW) ================= */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <p className="text-xs font-extrabold tracking-[0.28em] text-slate-500">MEASUREMENT</p>
          <h2 className="mt-2 text-3xl font-extrabold text-slate-900">
            KPIs we track (so progress is clear)
          </h2>
          <p className="mt-2 max-w-3xl text-sm leading-7 text-slate-600">
            Reporting isnâ€™t just numbers. We track outcomes and use the data to improve targeting, scripts,
            and booking quality.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {kpis.map((k) => (
              <KpiCard key={k.title} icon={k.icon} title={k.title} desc={k.desc} />
            ))}
          </div>
        </div>
      </section>

      {/* ================= SAFETY + COMPLIANCE (NEW) ================= */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <p className="text-xs font-extrabold tracking-[0.28em] text-slate-500">ACCOUNT SAFETY</p>
          <h2 className="mt-2 text-3xl font-extrabold text-slate-900">
            Safe outreach rules we follow
          </h2>
          <p className="mt-2 max-w-3xl text-sm leading-7 text-slate-600">
            We keep your outreach professional and controlled. Account safety and brand reputation always come first.
          </p>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <div className="flex items-start gap-3">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-slate-900 text-white">
                  <ShieldCheck className="h-6 w-6" />
                </span>
                <div className="min-w-0">
                  <div className="text-lg font-extrabold text-slate-900">Quality-first outreach</div>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    We avoid spam patterns. Personalization, pacing, and segmentation are used to keep outreach clean.
                  </p>
                  <div className="mt-5 space-y-2">
                    {safetyRules.map((x) => (
                      <Bullet key={x} text={x} />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-slate-900 p-6 text-white shadow-sm sm:p-8">
              <div className="flex items-start gap-3">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-yellow-400 text-slate-900">
                  <Zap className="h-6 w-6" />
                </span>
                <div className="min-w-0">
                  <div className="text-lg font-extrabold">Optimization loop</div>
                  <p className="mt-2 text-sm leading-7 text-white/75">
                    Every week we improve: ICP filters, scripts, follow-up timing, and qualificationâ€”based on data.
                  </p>
                  <div className="mt-5 flex flex-wrap gap-3">
                    <Link prefetch={false}
                      href="/contact/"
                      className="inline-flex items-center justify-center gap-2 rounded-2xl bg-yellow-400 px-6 py-3 text-sm font-extrabold text-slate-900 hover:bg-yellow-500"
                    >
                      Get Outreach Plan <ArrowRight className="h-4 w-4" />
                    </Link>
                    <Link prefetch={false}
                      href="/services"
                      className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/20 bg-white/10 px-6 py-3 text-sm font-extrabold text-white hover:bg-white/15"
                    >
                      Explore services <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                  <p className="mt-4 text-xs text-white/60">
                    *We donâ€™t promise a fixed number of meetingsâ€”performance depends on niche, ICP, offer strength, and market fit.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= START REQUIREMENTS (NEW) ================= */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <p className="text-xs font-extrabold tracking-[0.28em] text-slate-500">TO START</p>
          <h2 className="mt-2 text-3xl font-extrabold text-slate-900">
            What we need from you (quick checklist)
          </h2>
          <p className="mt-2 max-w-3xl text-sm leading-7 text-slate-600">
            Provide the basics and we can start faster. If anything is missing, weâ€™ll help you structure it.
          </p>

          <div className="mt-10 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <div className="grid gap-6 lg:grid-cols-2">
              <div>
                <div className="text-sm font-extrabold text-slate-900">Starter inputs</div>
                <div className="mt-4 space-y-2">
                  {requirements.map((x) => (
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
                      We can share a profile conversion checklist (headline, banner, proof, CTA) so acceptance and replies improve.
                    </p>
                    <div className="mt-5 flex flex-wrap gap-3">
                      <Link prefetch={false}
                        href="/contact/"
                        className="inline-flex items-center gap-2 rounded-2xl bg-slate-900 px-6 py-3 text-sm font-extrabold text-white hover:bg-slate-800"
                      >
                        Request checklist <ArrowRight className="h-4 w-4" />
                      </Link>
                      <a
                        href="#faq"
                        className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-6 py-3 text-sm font-extrabold text-slate-900 hover:bg-slate-50"
                      >
                        Read FAQ <ArrowRight className="h-4 w-4" />
                      </a>
                    </div>

                    {/* SEO helper */}
                    <p className="sr-only">
                      LinkedIn outreach checklist, LinkedIn appointment setting, B2B lead generation, ICP targeting, message sequences, follow ups, meeting booking.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Optional internal link cluster */}
          <div className="mt-8 flex flex-wrap gap-3">
            <Link prefetch={false}
              href="/services/seo"
              className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-2 text-sm font-extrabold text-slate-900 hover:bg-slate-50"
            >
              Pair with SEO for inbound leads <ArrowRight className="h-4 w-4" />
            </Link>
            <Link prefetch={false}
              href="/services/lead-generation"
              className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-2 text-sm font-extrabold text-slate-900 hover:bg-slate-50"
            >
              Lead generation systems <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ================= WHY US ================= */}
      <section id="why-us" className="bg-white">
        <div className="mx-auto max-w-6xl px-4 pb-14">
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
            <p className="text-xs font-extrabold tracking-[0.28em] text-slate-500">WHY MUGNEE</p>
            <h2 className="mt-2 text-3xl font-extrabold text-slate-900">
              Why choose us for LinkedIn Outreach (Setter)
            </h2>
            <p className="mt-2 max-w-3xl text-sm leading-7 text-slate-600">
              We run a clean, accountable outreach system with safe execution, clear reporting, and conversion-focused qualification.
            </p>

            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              <WhyCard
                icon={ShieldCheck}
                title="Quality-controlled execution"
                desc="Controlled pacing, structured QA checks, and safe messaging logic protect account reputation."
              />
              <WhyCard
                icon={ClipboardList}
                title="Clean process and documentation"
                desc="Weekly KPI logs, pipeline notes, and clear next actions keep delivery transparent and auditable."
              />
              <WhyCard
                icon={Filter}
                title="Higher meeting quality"
                desc="We refine ICP, scripts, and qualification so booked calls are better aligned to your offer."
              />
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link prefetch={false}
                href="/contact/"
                className="inline-flex items-center gap-2 rounded-2xl bg-slate-900 px-6 py-3 text-sm font-extrabold text-white hover:bg-slate-800"
              >
                Get Outreach Plan <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="#faq"
                className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-6 py-3 text-sm font-extrabold text-slate-900 hover:bg-slate-50"
              >
                Read FAQ <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ================= PLANS (NO PUBLIC PRICE) ================= */}
      <section id="packages" className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-extrabold tracking-[0.28em] text-slate-500">PLANS</p>
              <h2 className="mt-2 text-3xl font-extrabold text-slate-900">
                Choose a plan by scope (quotation-based)
              </h2>
              <p className="mt-2 max-w-2xl text-sm text-slate-600">
                We donâ€™t show fixed public pricing. Quotation depends on niche, ICP complexity, outreach
                volume, and monthly workload.
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
      <section id="faq" className="mx-auto max-w-6xl px-4 pb-16 pt-14">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <p className="text-xs font-extrabold tracking-[0.28em] text-slate-500">FAQ</p>
          <h2 className="mt-2 text-3xl font-extrabold text-slate-900">
            Questions before you start
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
                  Want meetings booked from LinkedIn outreach?
                </div>
                <p className="mt-1 text-sm text-white/75">
                  Send your offer + target audienceâ€”weâ€™ll reply with a practical outreach plan.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <Link prefetch={false}
                  href="/contact/"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-yellow-400 px-6 py-3 text-sm font-extrabold text-slate-900 transition hover:bg-yellow-500"
                >
                  Get Outreach Plan <ArrowRight className="h-4 w-4" />
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
              LinkedIn lead generation service, LinkedIn appointment setting, LinkedIn outreach setter,
              B2B meeting booking, ICP targeting, message sequences, safe outreach, Mugnee IT Solutions.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

/* ================= UI bits ================= */

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
      <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-sky-200/50 blur-2xl opacity-0 transition-opacity group-hover:opacity-100" />
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
        *Quotation depends on niche, scope, and outreach volume.
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


