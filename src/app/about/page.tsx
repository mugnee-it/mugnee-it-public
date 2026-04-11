// src/app/about/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import AboutTeamCarousel from "@/components/sections/AboutTeamCarousel";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Timer,
  LifeBuoy,
  Wrench,
  Server,
  LineChart,
  BadgeCheck,
  Users,
  ClipboardCheck,
  Settings,
  Search,
  Globe,
  Quote,
  ChevronDown,
  HelpCircle,
  Plus,
  Target,
  Telescope,
} from "lucide-react";

/* ================= SEO ================= */

const SITE_URL =
  (process.env.NEXT_PUBLIC_SITE_URL || "https://mugneeit.com").replace(/\/$/, "");

const PAGE_PATH = "/about";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}/`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: "About Mugnee IT Solutions | Reliable IT Partner",
  description:
    "Mugnee IT Solutions is a reliability-first IT team delivering websites, web apps, SEO, graphics and long-term support. Learn our mission, vision, process, and why businesses trust us.",

  alternates: { canonical: PAGE_URL },

  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },

  openGraph: {
    title: "About Mugnee IT Solutions | Reliable IT Partner",
    description:
      "Websites, web apps, SEO, graphics and long-term support—delivered with a reliability-first process.",
    url: PAGE_URL,
    siteName: "Mugnee IT Solutions",
    type: "website",
    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
    title: "About Mugnee IT Solutions | Reliable IT Partner",
    description:
      "Websites, web apps, SEO, graphics and long-term support—delivered with a reliability-first process.",
  },
};

/* ================= DATA (edit anytime) ================= */

const stats = [
  { label: "Years experience", value: "10+ (since 2016)" },
  { label: "Projects delivered", value: "240+ (estimated)" },
  { label: "Countries served", value: "15+" },
  { label: "Client satisfaction", value: "99%" },
];

const values = [
  {
    icon: ClipboardCheck,
    title: "Checklist-driven delivery",
    desc: "We follow clear checklists and documented steps to avoid surprises.",
  },
  {
    icon: ShieldCheck,
    title: "Security mindset",
    desc: "Access control, safe configuration, backups and best practices from day one.",
  },
  {
    icon: Timer,
    title: "Fast communication",
    desc: "Quick replies, clear explanations, and transparent progress updates.",
  },
  {
    icon: LifeBuoy,
    title: "After-sales support",
    desc: "We stay available after delivery—fixing, improving and guiding over time.",
  },
];

const services = [
  {
    icon: Globe,
    title: "Website Development",
    desc: "Business sites, landing pages, e-commerce and SEO-friendly structures.",
  },
  {
    icon: Settings,
    title: "Web Apps & Automation",
    desc: "Dashboards, internal tools, workflow automation and integrations.",
  },
  {
    icon: Search,
    title: "SEO & Indexing",
    desc: "Technical SEO, schema, Core Web Vitals, indexing cleanup and growth strategy.",
  },
  {
    icon: Server,
    title: "Hosting, DNS & Email",
    desc: "Server setup, DNS configuration, email deliverability and monitoring support.",
  },
  {
    icon: Wrench,
    title: "Maintenance & Monitoring",
    desc: "Updates, backups, uptime checks, performance tuning and stability improvements.",
  },
  {
    icon: LineChart,
    title: "Reporting & Documentation",
    desc: "Clear handover notes, change logs and ongoing performance reporting.",
  },
];

const whyUs = [
  {
    icon: BadgeCheck,
    title: "Reliability-first execution",
    desc: "We prioritize clean structure, maintainability and stability over shortcuts.",
  },
  {
    icon: LineChart,
    title: "Performance-focused builds",
    desc: "Speed, responsiveness and clean UX signals—built with best practices.",
  },
  {
    icon: Search,
    title: "SEO-ready foundations",
    desc: "Metadata, canonicals, internal linking patterns and schema readiness.",
  },
  {
    icon: LifeBuoy,
    title: "Long-term support culture",
    desc: "We support, monitor and improve your systems—not just deliver and disappear.",
  },
];

const supportPillars = [
  { icon: Wrench, title: "Fix & Improve", desc: "Bug fixes, upgrades and improvements" },
  { icon: Server, title: "Monitoring & Backups", desc: "Uptime checks + backup strategy" },
  { icon: ShieldCheck, title: "Security & Access", desc: "Access cleanup, safe configurations" },
  { icon: ClipboardCheck, title: "Documentation", desc: "Clear notes, checklists, and handover" },
];

const faqs = [
  {
    q: "What does Mugnee IT Solutions do?",
    a: "We build and support websites, web apps, SEO systems, graphics assets, and long-term maintenance—focused on performance, stability and reliable delivery.",
  },
  {
    q: "Do you provide support after delivery?",
    a: "Yes. We offer post-launch support, monitoring, maintenance and improvements based on your plan/SLA.",
  },
  {
    q: "How do you ensure quality?",
    a: "We use checklist-driven execution, documentation, performance testing, and security best practices before and after launch.",
  },
  {
    q: "Can you work under NDA?",
    a: "Yes. We can work under NDA and keep client details confidential.",
  },
];

const teamMembers = [
  {
    name: "Saiful Islam Shajib",
    role: "CEO",
    img: "/profile/ceo.png",
  },
  {
    name: "Sharif Uddin",
    role: "Head of IT",
    img: "/profile/head-it.webp",
  },
   {
    name: "Minhazul Islam",
    role: "Graphics Designer",
    img: "/profile/GD.webp",
  },
  {
    name: "Mohammad Shajjadur Rahman",
    role: "Project & Marketing Officer",
    img: "/profile/1000077684.webp",
  },
  {
    name: "Abdur Rahim",
    role: "Web Developer | SEO",
    img: "/profile/web-developer.webp",
  },
  {
    name: "Habiba Akter",
    role: "HR Admin",
    img: "/profile/HR.webp",
  },
  {
    name: "Ankur Datta",
    role: "Full-Stack Web Developer",
    img: "/profile/Front-end-developer.webp",
  },
  {
    name: "Anik Ahmed",
    role: "Wordpress/Wix Developer",
    img: "/profile/Wix-Developer.webp",
  },
 
];


/* ================= JSON-LD ================= */

function buildJsonLd() {
  const org = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Mugnee IT Solutions",
    url: SITE_URL,
  };

  const aboutPage = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About Mugnee IT Solutions",
    url: PAGE_URL,
    description:
      "Learn about Mugnee IT Solutions—our mission, vision, services, support approach and why businesses trust us.",
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

  return [org, aboutPage, faq];
}

/* ================= PAGE ================= */

export default function AboutPage() {
  const jsonLd = buildJsonLd();

  return (
    <main className="bg-white">
      {/* JSON-LD (SEO safe) */}
      <Script
        id="aboutpage-jsonld"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden bg-white">
        {/* subtle backdrop */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-cyan-100/60 blur-3xl" />
          <div className="absolute -right-24 top-32 h-72 w-72 rounded-full bg-amber-100/50 blur-3xl" />
          <div className="absolute inset-0 opacity-[0.08] [background:radial-gradient(circle_at_1px_1px,rgba(15,23,42,0.14)_1px,transparent_0)] [background-size:26px_26px]" />
        </div>

        <div className="mx-auto max-w-7xl px-4 pt-16 pb-12">
          <nav className="text-xs font-bold text-slate-500" aria-label="Breadcrumb">
            <Link prefetch={false} href="/" className="hover:text-slate-700">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="text-slate-900">About</span>
          </nav>

          <div className="mt-10 grid gap-6 lg:grid-cols-[1.05fr_.95fr] lg:items-start">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-extrabold text-slate-700 shadow-sm">
                <BadgeCheck className="h-4 w-4 text-cyan-700" />
                ABOUT MUGNEE IT SOLUTIONS
              </span>

              <h1 className="mt-5 text-4xl font-extrabold leading-tight text-slate-900 sm:text-5xl">
                Reliable IT solutions with{" "}
                <span className="text-cyan-700">long-term support</span>
              </h1>

              <p className="mt-4 max-w-xl text-base leading-7 text-slate-700">
                Mugnee IT Solutions helps businesses build, fix, and maintain
                digital systems—websites, web apps, SEO, hosting, DNS, email and
                automation—with disciplined execution and dependable after-sales support.
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <Bullet text="Safe configuration & best practices" />
                <Bullet text="Fast response & clear communication" />
                <Bullet text="Performance & SEO-first delivery" />
                <Bullet text="After-sales support & monitoring mindset" />
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Link prefetch={false}
                  href="/contact"
                  className="rounded-2xl bg-slate-900 px-6 py-3 text-sm font-extrabold text-white hover:bg-slate-800"
                >
                  Contact Us <ArrowRight className="inline h-4 w-4" />
                </Link>
                <Link prefetch={false}
                  href="/services"
                  className="rounded-2xl border px-6 py-3 text-sm font-extrabold text-slate-900 hover:bg-slate-50"
                >
                  View Services
                </Link>
              </div>

              {/* quick stats */}
              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                {stats.map((s) => (
                  <div key={s.label} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                    <div className="text-xs font-extrabold text-slate-500">{s.label}</div>
                    <div className="mt-1 text-lg font-extrabold text-slate-900">{s.value}</div>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-3 text-xs font-semibold text-slate-600">
                <span className="rounded-full bg-white px-3 py-1.5 ring-1 ring-slate-200">
                  Reliability-first delivery
                </span>
                <span className="rounded-full bg-white px-3 py-1.5 ring-1 ring-slate-200">
                  Documentation included
                </span>
                <span className="rounded-full bg-white px-3 py-1.5 ring-1 ring-slate-200">
                  Support-ready team
                </span>
              </div>
            </div>

            <aside className="space-y-4 lg:pt-2">
              <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-900 to-slate-800 p-6 text-white shadow-sm">
                <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-white/70">
                  At A Glance
                </p>
                <h2 className="mt-2 text-2xl font-extrabold leading-tight">
                  Practical IT partner for long-term growth
                </h2>
                <p className="mt-3 text-sm leading-7 text-white/80">
                  We combine strategy, execution, and support so your business can scale without
                  technical chaos.
                </p>
                <div className="mt-5 grid gap-2 text-sm">
                  {[
                    "Planning before development",
                    "SEO and performance-ready delivery",
                    "Post-launch support workflow",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-2 text-white/90">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 text-yellow-300" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                  <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-slate-500">
                    Core Focus
                  </p>
                  <p className="mt-2 text-sm font-semibold leading-6 text-slate-800">
                    Business websites, automation, SEO systems, and maintenance support.
                  </p>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                  <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-slate-500">
                    Delivery Style
                  </p>
                  <p className="mt-2 text-sm font-semibold leading-6 text-slate-800">
                    Clear scope, documented handover, and accountable communication.
                  </p>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-slate-500">
                  Quick Start
                </p>
                <p className="mt-2 text-sm leading-7 text-slate-700">
                  Need a practical execution plan for your business? Talk to our team and get a
                  clear roadmap with timeline and support scope.
                </p>
                <div className="mt-4 flex flex-col gap-2 sm:flex-row">
                  <Link
                    prefetch={false}
                    href="/schedule-consultation"
                    className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-extrabold text-white hover:bg-slate-800"
                  >
                    Book Consultation
                  </Link>
                  <Link
                    prefetch={false}
                    href="/about/ceo-message"
                    className="inline-flex items-center justify-center rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-extrabold text-slate-900 hover:bg-slate-50"
                  >
                    CEO Message
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* ================= OUR TEAM (Fiverr-style: copy left, carousel right) ================= */}
      <section className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] lg:gap-12 xl:gap-16">
          <div className="max-w-xl space-y-5 lg:max-w-none">
            <p className="text-xs font-extrabold uppercase tracking-[0.28em] text-slate-500">
              Our Team
            </p>
            <div className="flex flex-wrap items-center gap-3 gap-y-2">
              <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
                People behind Mugnee IT
              </h2>
              <span className="inline-flex items-center rounded-full bg-yellow-400/90 px-3 py-1 text-xs font-extrabold uppercase tracking-wide text-slate-900 shadow-sm ring-1 ring-yellow-500/30">
                20+ team members
              </span>
            </div>
            <p className="text-sm leading-relaxed text-slate-600 sm:text-base sm:leading-relaxed">
              Mugnee IT Solutions is built by a <strong className="font-bold text-slate-800">growing team of 20+ people</strong>{" "}
              across design, development, QA, HR, and client support. Faces in the gallery rotate automatically—everyone behind
              the scenes helps keep delivery and long‑term support reliable.
            </p>
            <ul className="space-y-2.5 text-sm font-semibold text-slate-700">
              <li className="flex gap-2.5">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-yellow-500" aria-hidden />
                <span>Design, engineering, and QA working in one delivery rhythm</span>
              </li>
              <li className="flex gap-2.5">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-yellow-500" aria-hidden />
                <span>Clear ownership from discovery through launch and support</span>
              </li>
              <li className="flex gap-2.5">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-yellow-500" aria-hidden />
                <span>BD + global clients supported by the same core team</span>
              </li>
            </ul>
          </div>

          <div className="min-w-0 overflow-visible lg:-ml-2 xl:-ml-4">
            <AboutTeamCarousel members={teamMembers} />
          </div>
        </div>
      </section>

      {/* ================= WHO WE ARE ================= */}
      <section className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_.9fr] lg:items-start">
          <div>
            <h2 className="text-3xl font-extrabold text-slate-900">Who We Are</h2>
            <p className="mt-4 max-w-3xl text-sm leading-6 text-slate-700">
              We are an execution-focused IT team. Our job is not just to deliver a service,
              but to ensure your systems remain stable, secure, and manageable long after delivery.
              We follow structured checklists, document changes, and stay available when you need help.
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <MiniPoint icon={Users} text="Experienced team for delivery + support" />
              <MiniPoint icon={ClipboardCheck} text="Documented workflow and clear handover" />
              <MiniPoint icon={ShieldCheck} text="Security hygiene and access discipline" />
              <MiniPoint icon={Timer} text="Fast communication and accountability" />
            </div>
          </div>

          <div className="rounded-3xl border bg-slate-50 p-8">
            <div className="flex items-center gap-2 text-xs font-extrabold text-slate-700">
              <Quote className="h-4 w-4" /> Our principle
            </div>
            <p className="mt-3 text-lg font-extrabold text-slate-900">
              “A good delivery is one that stays stable after launch.”
            </p>
            <p className="mt-2 text-sm text-slate-700">
              We build systems that are easy to manage, safe to operate, and ready to scale—so
              your business can focus on growth.
            </p>

            <div className="mt-6 rounded-2xl border bg-white p-4">
              <div className="text-xs font-extrabold text-slate-700">Ideal for</div>
              <div className="mt-2 flex flex-wrap gap-2">
                {["SMEs", "Institutions", "Agencies", "Growing businesses", "New brands"].map((t) => (
                  <span
                    key={t}
                    className="rounded-2xl border bg-white px-3 py-1 text-xs font-extrabold text-slate-900"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v) => (
            <Value key={v.title} icon={v.icon} title={v.title} desc={v.desc} />
          ))}
        </div>
      </section>

      {/* ================= MISSION & VISION ================= */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <div className="grid gap-6 lg:grid-cols-2">
            <Card
              icon={Target}
              accent="amber"
              title="Our Mission"
              points={[
                "Make business technology simple, stable and scalable",
                "Deliver clean, maintainable systems with best practices",
                "Provide dependable after-sales support and guidance",
              ]}
            />
            <Card
              icon={Telescope}
              accent="sky"
              title="Our Vision"
              points={[
                "Become a trusted long-term IT partner for growing businesses",
                "Build reliability-first systems—not quick fixes",
                "Create lasting client relationships through consistent support",
              ]}
            />
          </div>
        </div>
      </section>

      {/* ================= WHAT WE DO ================= */}
      <section className="mx-auto max-w-7xl px-4 py-16">
        <h2 className="text-3xl font-extrabold text-slate-900">What We Do</h2>
        <p className="mt-3 max-w-3xl text-sm text-slate-700">
          We don’t just deliver services—we support, monitor and improve them over time.
          Our work covers both delivery and long-term operational stability.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <Service key={s.title} icon={s.icon} title={s.title} desc={s.desc} />
          ))}
        </div>
      </section>

      {/* ================= WHY WE ARE BEST ================= */}
      <section className="mx-auto max-w-7xl px-4 pb-16">
        <div className="rounded-3xl border bg-white p-8">
          <div className="flex items-center gap-2 text-xs font-extrabold text-slate-700">
            <BadgeCheck className="h-4 w-4" /> WHY BUSINESSES TRUST MUGNEE
          </div>

          <h2 className="mt-2 text-2xl font-extrabold text-slate-900">
            Built for performance, clarity and trust
          </h2>
          <p className="mt-2 max-w-3xl text-sm text-slate-700">
            Trust is created when delivery is clean, systems stay stable after launch, and support is
            dependable. That’s exactly how we work.
          </p>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whyUs.map((w) => (
              <WhyCard key={w.title} icon={w.icon} title={w.title} desc={w.desc} />
            ))}
          </div>
        </div>
      </section>

      {/* ================= SUPPORT MODEL ================= */}
      <section className="mx-auto max-w-7xl px-4 pb-16">
        <div className="rounded-3xl border bg-slate-50 p-8">
          <div className="flex items-center gap-2 text-xs font-extrabold text-slate-700">
            <LifeBuoy className="h-4 w-4" /> SUPPORT & AFTER-SALES
          </div>

          <h2 className="mt-2 text-2xl font-extrabold text-slate-900">
            Delivery is only the beginning
          </h2>
          <p className="mt-2 max-w-3xl text-sm text-slate-700">
            After launch, businesses need stability, monitoring, updates and quick help. We provide
            structured support so your systems keep running smoothly.
          </p>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {supportPillars.map((p) => (
              <SupportCard key={p.title} icon={p.icon} title={p.title} desc={p.desc} />
            ))}
          </div>

          <div className="mt-8 rounded-3xl border bg-white p-6">
            <div className="flex items-start gap-3">
              <div className="h-12 w-12 rounded-2xl bg-slate-900 grid place-items-center shrink-0">
                <ShieldCheck className="h-6 w-6 text-white" />
              </div>
              <div>
                <div className="text-lg font-extrabold text-slate-900">Support mindset</div>
                <p className="mt-1 text-sm text-slate-700">
                  We keep access organized, maintain backups, document changes, and respond quickly
                  based on your plan. This reduces downtime risk and keeps systems healthy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= PROCESS ================= */}
      <section className="mx-auto max-w-7xl px-4 pb-16">
        <div className="rounded-3xl border bg-white p-8">
          <div className="flex items-center gap-2 text-xs font-extrabold text-slate-700">
            <ChevronDown className="h-4 w-4" /> OUR PROCESS
          </div>
          <h2 className="mt-2 text-2xl font-extrabold text-slate-900">
            A clean workflow produces stable results
          </h2>
          <p className="mt-2 max-w-3xl text-sm text-slate-700">
            Our process is simple: we define scope clearly, build with best practices, and keep support ready.
          </p>

          <div className="mt-6 grid gap-6 lg:grid-cols-4">
            <StepCard step="01" title="Plan" desc="Scope, checklist, timeline, access needs" />
            <StepCard step="02" title="Build" desc="Design, development, integration, QA" />
            <StepCard step="03" title="Optimize" desc="Speed, SEO readiness, security checks" />
            <StepCard step="04" title="Support" desc="Monitoring, fixes, improvements and documentation" />
          </div>
        </div>
      </section>

      {/* ================= FAQ ================= */}
      <section className="relative overflow-hidden py-16 sm:py-20">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[linear-gradient(180deg,#ffffff_0%,#f8fafc_55%,#ffffff_100%)]" />
          <div className="absolute -left-40 top-24 h-[520px] w-[520px] rounded-full bg-cyan-200/25 blur-3xl" />
          <div className="absolute -right-40 bottom-10 h-[520px] w-[520px] rounded-full bg-amber-200/25 blur-3xl" />
          <div className="absolute inset-0 opacity-[0.08] [background:radial-gradient(circle_at_1px_1px,rgba(15,23,42,0.14)_1px,transparent_0)] [background-size:26px_26px]" />
        </div>

        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            <div className="lg:sticky lg:top-24">
              <p className="text-xs font-extrabold uppercase tracking-[0.28em] text-amber-700/90">
                FAQ
              </p>

              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                Questions about our team & delivery
              </h2>

              <p className="mt-4 max-w-md text-base leading-7 text-slate-600">
                Clear answers about our workflow, support, and how we keep your systems stable after launch.
              </p>

              <div className="mt-7 rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-[0_18px_55px_rgba(15,23,42,0.06)] backdrop-blur">
                <ul className="space-y-4 text-sm text-slate-700">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 text-amber-700" />
                    Checklist-driven delivery
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 text-amber-700" />
                    Security and performance first
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 text-amber-700" />
                    Long-term support culture
                  </li>
                </ul>

                <Link prefetch={false}
                  href="/contact"
                  className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-[1px] hover:bg-slate-800"
                >
                  Talk to us
                </Link>
              </div>
            </div>

            <div className="space-y-4">
              {faqs.map((f) => (
                <details
                  key={f.q}
                  className="group rounded-3xl border border-slate-200 bg-white/85 backdrop-blur transition hover:border-slate-300 hover:shadow-[0_18px_55px_rgba(15,23,42,0.06)]"
                >
                  <summary className="flex w-full cursor-pointer list-none items-start justify-between gap-4 p-6 text-left">
                    <div className="flex items-start gap-3">
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-100 text-slate-700 ring-1 ring-slate-200 transition group-open:bg-amber-50 group-open:text-amber-700 group-open:ring-amber-200">
                        <HelpCircle className="h-5 w-5" />
                      </span>
                      <div>
                        <div className="text-sm font-extrabold leading-6 text-slate-900 sm:text-base">
                          {f.q}
                        </div>
                        <div className="mt-1 text-xs text-slate-500">
                          Quick answer • Clear next steps
                        </div>
                      </div>
                    </div>
                    <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-slate-100 text-slate-700 ring-1 ring-slate-200 transition group-open:bg-amber-600 group-open:text-white group-open:ring-amber-600">
                      <Plus className="h-4 w-4 transition group-open:rotate-45" />
                    </span>
                  </summary>

                  <div className="px-6 pb-6 pt-0">
                    <div className="h-px w-full bg-slate-200/80" />
                    <p className="mt-4 text-sm leading-7 text-slate-600">{f.a}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="mx-auto max-w-7xl px-4 pb-20">
        <div className="rounded-3xl bg-slate-900 p-10 text-white flex flex-col sm:flex-row justify-between gap-6">
          <div>
            <h3 className="text-2xl font-extrabold">Ready to work with us?</h3>
            <p className="mt-2 text-sm text-slate-200">
              Share your goal and required access—we’ll reply with a clear plan and checklist.
            </p>
          </div>
          <Link prefetch={false}
            href="/contact"
            className="rounded-2xl bg-yellow-400 px-6 py-3 text-sm font-extrabold text-slate-900 hover:bg-yellow-500 text-center"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </main>
  );
}

/* ================= COMPONENTS ================= */

function Bullet({ text }: { text: string }) {
  return (
    <div className="flex gap-2 text-sm text-slate-800">
      <CheckCircle2 className="h-4 w-4 text-emerald-600 mt-0.5" /> {text}
    </div>
  );
}

function MiniPoint({ icon: Icon, text }: { icon: any; text: string }) {
  return (
    <div className="flex items-start gap-2 text-sm text-slate-800">
      <Icon className="h-4 w-4 text-slate-900 mt-0.5" />
      {text}
    </div>
  );
}

function Value({ icon: Icon, title, desc }: { icon: any; title: string; desc: string }) {
  return (
    <div className="rounded-3xl border bg-white p-6 shadow-sm">
      <Icon className="h-6 w-6 text-slate-900" />
      <h3 className="mt-3 font-extrabold text-slate-900">{title}</h3>
      <p className="mt-2 text-sm text-slate-700">{desc}</p>
    </div>
  );
}

function Card({
  icon: Icon,
  accent,
  title,
  points,
}: {
  icon: LucideIcon;
  accent: "amber" | "sky";
  title: string;
  points: string[];
}) {
  const shell =
    accent === "amber"
      ? "bg-gradient-to-br from-amber-400 via-yellow-400 to-amber-500 text-slate-900 shadow-[0_12px_28px_rgba(250,204,21,0.35)] ring-1 ring-amber-300/60"
      : "bg-gradient-to-br from-sky-500 via-sky-600 to-cyan-600 text-white shadow-[0_12px_28px_rgba(14,165,233,0.3)] ring-1 ring-sky-400/50";

  return (
    <div className="rounded-3xl border border-slate-200/80 bg-white p-8 shadow-sm">
      <div
        className={`inline-flex h-[3.25rem] w-[3.25rem] items-center justify-center rounded-2xl ${shell}`}
        aria-hidden
      >
        <Icon className="h-[1.65rem] w-[1.65rem]" strokeWidth={2.25} />
      </div>
      <h3 className="mt-5 text-2xl font-extrabold text-slate-900">{title}</h3>
      <ul className="mt-4 space-y-2.5 text-sm leading-relaxed text-slate-800">
        {points.map((p) => (
          <li key={p} className="flex gap-2">
            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" /> {p}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Service({ icon: Icon, title, desc }: { icon: any; title: string; desc: string }) {
  return (
    <div className="rounded-3xl border bg-white p-6 shadow-sm">
      <Icon className="h-6 w-6 text-slate-900" />
      <h4 className="mt-3 font-extrabold text-slate-900">{title}</h4>
      <p className="mt-2 text-sm text-slate-700">{desc}</p>
    </div>
  );
}

function WhyCard({ icon: Icon, title, desc }: { icon: any; title: string; desc: string }) {
  return (
    <div className="rounded-3xl border bg-slate-50 p-6">
      <Icon className="h-6 w-6 text-slate-900" />
      <div className="mt-3 font-extrabold text-slate-900">{title}</div>
      <div className="mt-2 text-sm text-slate-700">{desc}</div>
    </div>
  );
}

function SupportCard({ icon: Icon, title, desc }: { icon: any; title: string; desc: string }) {
  return (
    <div className="rounded-3xl border bg-white p-6 shadow-sm">
      <Icon className="h-6 w-6 text-slate-900" />
      <div className="mt-2 font-extrabold text-slate-900">{title}</div>
      <div className="mt-2 text-sm text-slate-700">{desc}</div>
    </div>
  );
}

function StepCard({ step, title, desc }: { step: string; title: string; desc: string }) {
  return (
    <div className="rounded-3xl border bg-slate-50 p-6">
      <div className="text-xs font-extrabold text-slate-500 tracking-[0.25em]">{step}</div>
      <div className="mt-2 text-lg font-extrabold text-slate-900">{title}</div>
      <div className="mt-2 text-sm text-slate-700">{desc}</div>
    </div>
  );
}

