import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Bell,
  Building2,
  CheckCircle2,
  CreditCard,
  FileCode2,
  Globe2,
  KeyRound,
  MapPin,
  MessageCircle,
  PhoneCall,
  Smartphone,
  Palette,
  Server,
  TestTube2,
  Users,
  Wallet,
  Zap,
} from "lucide-react";
import { withTrailingSlash } from "@/lib/utils";
import {
  AppArchitectureIllustration,
  HeroPhonesIllustration,
  TechChoiceIllustration,
} from "./_components/MobileAppIllustrations";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "https://mugneeit.com";

const PAGE_PATH = "/services/mobile-app-development";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}/`;

const META_TITLE = "Mobile App Development | iOS, Android & Cross‑Platform";
const META_DESC =
  "Plain-English mobile app development for Android & iOS: Flutter & React Native, APIs, store launch, and support. Clear process, stack guidance, and predictable handover for Bangladesh & global clients.";

export const metadata: Metadata = {
  title: META_TITLE,
  description: META_DESC,
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: META_TITLE,
    description: META_DESC,
    url: PAGE_URL,
    siteName: "Mugnee IT Solutions",
    type: "website",
  },
  robots: { index: true, follow: true },
};

const tel = "tel:+8801958645415";
const wa = "https://wa.me/8801958645415";

const jumpLinks = [
  { href: "#simple-summary", label: "Simple summary" },
  { href: "#who-its-for", label: "Who it’s for" },
  { href: "#technology", label: "Which technology?" },
  { href: "#process", label: "How it works" },
  { href: "#deliverables", label: "What you get" },
  { href: "#faq", label: "FAQ" },
];

const plainSummary = [
  {
    title: "You describe the idea",
    text: "Who will use the app, main screens, login/payment needs, and whether you already have a website or admin panel.",
  },
  {
    title: "We propose the plan",
    text: "Tech choice (usually Flutter or React Native), timeline in milestones, and a clear list of what is included in version 1.",
  },
  {
    title: "You get working apps",
    text: "Installable builds for testing, then Play Store / App Store preparation, handover, and optional maintenance.",
  },
];

const audience = [
  {
    icon: Zap,
    title: "Startups & new products",
    text: "MVP or v1 with core features first, then iterations. Good when you need speed and one team for UI + logic.",
  },
  {
    icon: Building2,
    title: "Businesses with a website",
    text: "A customer app that talks to your existing backend, orders, bookings, or member area—same data, mobile experience.",
  },
  {
    icon: Users,
    title: "Teams & internal tools",
    text: "Field staff, attendance, inventory checks, or simple workflows—secured with login and role-based access where needed.",
  },
];

const appTypes = [
  { title: "Customer-facing apps", desc: "Onboarding, catalogs, bookings, profiles, notifications." },
  { title: "Companion to your web app", desc: "Same accounts and data as your site; mobile-optimised flows." },
  { title: "B2B / partner portals", desc: "Restricted access, dashboards, document or status views." },
  { title: "Light operational tools", desc: "Data capture, approvals, lists—scoped and practical." },
];

const techOptions = [
  {
    name: "Flutter",
    badge: "Often our first pick",
    bestFor: "Pixel-perfect UI, smooth animations, one codebase for Android + iOS, fast iteration.",
    consider: "Best when you want consistent design across both platforms and long-term feature growth.",
    stackNote: "Dart • Material / Cupertino widgets",
  },
  {
    name: "React Native",
    badge: "Great if you already use React",
    bestFor: "Teams that already invest in React/TypeScript; shared patterns with a Next.js web app.",
    consider: "Strong when your developers or partners know JavaScript/TypeScript well.",
    stackNote: "JavaScript / TypeScript • Expo possible",
  },
  {
    name: "Native (Kotlin / Swift)",
    badge: "When it truly matters",
    bestFor: "Heavy platform-specific features, strict performance targets, or niche SDK requirements.",
    consider: "Higher cost and two codebases—we only recommend when cross-platform is not enough.",
    stackNote: "Case-by-case after discovery",
  },
];

const processPhases = [
  {
    phase: "1. Discovery & spec",
    duration: "Typically a few sessions",
    bullets: [
      "User stories: who does what in the app",
      "Screen list (wireframe level) and priority: MVP vs later",
      "APIs: existing vs to-be-built, auth method, third-party services",
    ],
  },
  {
    phase: "2. UX & UI",
    duration: "Aligned to scope",
    bullets: [
      "We follow your Figma or produce structure + UI kit",
      "Reusable components so the app stays consistent as it grows",
      "Accessibility basics: contrast, touch targets, readable type",
    ],
  },
  {
    phase: "3. Development sprints",
    duration: "Weekly or bi-weekly demos",
    bullets: [
      "Feature slices delivered incrementally",
      "Integration with REST/GraphQL and error handling",
      "Test builds for your team (Android APK / iOS TestFlight when applicable)",
    ],
  },
  {
    phase: "4. QA & devices",
    duration: "Before every store submission",
    bullets: [
      "Real device checks—not only emulators",
      "Regression on login, payments, and critical paths",
      "Crash reporting wired so issues are visible early",
    ],
  },
  {
    phase: "5. Store launch",
    duration: "With your accounts",
    bullets: [
      "Play Console & App Store Connect setup guidance",
      "Icons, screenshots checklist, privacy text support",
      "Submission; we address common review feedback (scope-based)",
    ],
  },
  {
    phase: "6. Handover & support",
    duration: "Optional retainer",
    bullets: [
      "Source access, build instructions, environment overview",
      "SLA-style or milestone updates for OS upgrades and features",
    ],
  },
];

const deliverables = [
  "Source code in your repository (or handover export)",
  "Documented env setup: how to run dev / staging / prod builds",
  "Release checklist: signing keys, store listings, version naming",
  "Short Loom or written walkthrough of main modules (on request)",
  "Post-launch bug-fix window as agreed in scope",
];

const integrations = [
  { icon: KeyRound, title: "Login & accounts", desc: "Email/phone OTP, social login, JWT sessions—matching your backend." },
  { icon: CreditCard, title: "Payments", desc: "Stripe, SSLCommerz, bKash/Nagad flows where APIs allow—scoped per project." },
  { icon: MapPin, title: "Maps & location", desc: "Pickup/delivery, branch finder, geo constraints when needed." },
  { icon: Bell, title: "Push notifications", desc: "FCM / APNs setup with your messaging strategy." },
  { icon: Globe2, title: "Deep links", desc: "Open specific screens from web, email, or ads." },
  { icon: Wallet, title: "Analytics", desc: "Event hooks for Firebase / GA4 or your stack." },
];

const capabilities = [
  {
    icon: Smartphone,
    title: "Cross‑platform delivery",
    desc: "One project targeting Android and iOS so features stay in sync and costs stay predictable.",
  },
  {
    icon: Server,
    title: "APIs & real data",
    desc: "Secure calls to your server, pagination, offline-friendly patterns where the product needs them.",
  },
  {
    icon: Palette,
    title: "UI from design",
    desc: "Figma-to-app with spacing, motion, and brand consistency—not generic templates.",
  },
  {
    icon: TestTube2,
    title: "Testing before release",
    desc: "Structured QA so releases are boring—in a good way.",
  },
];

const faqs = [
  {
    q: "I am not technical. How do I know which stack to choose?",
    a: "You don’t have to. After discovery we recommend Flutter or React Native (or native only if required) and explain in one page: pros for your case, cost/timeline impact, and risks. You approve before we code.",
  },
  {
    q: "Do you build both Android and iOS?",
    a: "Yes. Cross-platform frameworks let one codebase ship to both stores. We add platform-specific polish (permissions, store rules, UI conventions) where it matters.",
  },
  {
    q: "Can the app use our existing website backend?",
    a: "Usually yes, if the backend exposes documented APIs (REST/GraphQL). We map endpoints, auth, and error handling. If gaps exist, we list what the backend team must add.",
  },
  {
    q: "How long does a first version take?",
    a: "Small MVPs can be weeks; fuller products take longer depending on screens, integrations, and quality bar. You get milestone dates after the spec—not a guess on day one.",
  },
  {
    q: "Do you help with Play Store and App Store submission?",
    a: "Yes: builds, signing guidance, listing assets, and common rejection fixes. Stores approve against their policies; we prepare you for that process.",
  },
  {
    q: "What about after launch?",
    a: "We offer maintenance: OS updates, dependency upgrades, new features, and incident support—on retainer or agreed milestones.",
  },
  {
    q: "Do you publish fixed prices?",
    a: "No. Mobile work varies too much. You receive a written scope, assumptions, exclusions, and price—before work starts.",
  },
];

function buildJsonLd() {
  const org = {
    "@type": "Organization",
    name: "Mugnee IT Solutions",
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
  };

  const website = { "@type": "WebSite", name: "Mugnee IT Solutions", url: SITE_URL };

  const service = {
    "@type": "Service",
    name: "Mobile Application Development",
    serviceType: "Mobile software development",
    provider: { "@type": "Organization", name: "Mugnee IT Solutions", url: SITE_URL },
    areaServed: ["Bangladesh", "Worldwide"],
    url: PAGE_URL,
    description: META_DESC,
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
      { "@type": "ListItem", position: 2, name: "Services", item: `${SITE_URL}/services/` },
      { "@type": "ListItem", position: 3, name: "Mobile App Development", item: PAGE_URL },
    ],
  };

  const faqBlock = {
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return {
    "@context": "https://schema.org",
    "@graph": [org, website, service, webpage, breadcrumb, faqBlock],
  };
}

export default function MobileAppDevelopmentPage() {
  const jsonLd = buildJsonLd();

  return (
    <main className="bg-white text-slate-900">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="h-16 sm:h-20" aria-hidden="true" />

      <section
        className="relative overflow-hidden bg-slate-950 pb-16 pt-16 sm:pb-20 sm:pt-20"
        aria-labelledby="mobile-app-hero-title"
      >
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(80%_120%_at_10%_15%,rgba(99,102,241,0.22),transparent_45%),radial-gradient(70%_90%_at_85%_20%,rgba(250,204,21,0.18),transparent_50%),linear-gradient(120deg,#020617_0%,#0b1120_48%,#111827_100%)]" />
          <div className="pointer-events-none absolute -right-20 top-24 h-72 w-72 rounded-full bg-violet-400/10 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-6xl px-4">
          <nav className="text-xs font-bold text-white/85" aria-label="Breadcrumb">
            <Link prefetch={false} href="/" className="hover:text-white">
              Home
            </Link>
            <span className="mx-2 text-white/50">/</span>
            <Link prefetch={false} href={withTrailingSlash("/services")} className="hover:text-white">
              Services
            </Link>
            <span className="mx-2 text-white/50">/</span>
            <span className="text-amber-300">Mobile app development</span>
          </nav>

          <div className="mt-10 grid items-center gap-12 lg:grid-cols-[1fr_minmax(280px,420px)]">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[11px] font-extrabold tracking-[0.18em] text-white backdrop-blur">
                MOBILE APP DEVELOPMENT
              </p>
              <h1
                id="mobile-app-hero-title"
                className="mt-4 text-4xl font-extrabold leading-[1.1] text-white sm:text-5xl"
              >
                Android & iOS apps
                <span className="text-violet-300"> your customers understand</span>
              </h1>
              <p className="mt-4 max-w-xl text-base leading-7 text-white/90 sm:text-lg">
                Clear scope, sensible tech choice (Flutter / React Native), and a delivery process you can follow—even
                if you are not a developer.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Link
                  prefetch={false}
                  href={withTrailingSlash("/contact")}
                  className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-yellow-400 px-7 py-3.5 text-sm font-extrabold text-slate-900 shadow-lg transition hover:-translate-y-px hover:bg-yellow-500"
                >
                  Get a free scope call
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                </Link>
                <a
                  href={wa}
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/25 bg-white/10 px-7 py-3.5 text-sm font-extrabold text-white backdrop-blur transition hover:bg-white/15"
                >
                  WhatsApp <MessageCircle className="h-4 w-4" />
                </a>
                <a
                  href={tel}
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/25 bg-white/10 px-7 py-3.5 text-sm font-extrabold text-white backdrop-blur transition hover:bg-white/15"
                >
                  Call <PhoneCall className="h-4 w-4" />
                </a>
              </div>

              <div className="mt-10 flex flex-wrap gap-2 border-t border-white/10 pt-8">
                {["Flutter", "React Native", "REST / GraphQL APIs", "Play Store & App Store"].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/20 bg-white/5 px-3 py-1 text-[11px] font-bold text-white/90"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-md lg:max-w-none">
              <div className="absolute inset-0 -z-10 rounded-[2rem] bg-gradient-to-br from-violet-500/20 to-amber-400/10 blur-2xl" />
              <HeroPhonesIllustration className="h-auto w-full drop-shadow-2xl" />
            </div>
          </div>

          <nav
            className="mt-12 flex gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            aria-label="On this page"
          >
            {jumpLinks.map((j) => (
              <a
                key={j.href}
                href={j.href}
                className="shrink-0 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold text-white/90 backdrop-blur transition hover:bg-white/20"
              >
                {j.label}
              </a>
            ))}
          </nav>
        </div>
      </section>

      <section id="simple-summary" className="scroll-mt-24 border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:py-16">
          <p className="text-xs font-extrabold tracking-[0.24em] text-violet-600">IN PLAIN ENGLISH</p>
          <h2 className="mt-2 text-2xl font-extrabold text-slate-900 sm:text-3xl">What happens when you work with us</h2>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600 sm:text-base">
            No jargon wall. Here is the same story most clients care about—three steps from idea to app stores.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {plainSummary.map((s, i) => (
              <div
                key={s.title}
                className="relative rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <span className="absolute right-5 top-5 grid h-9 w-9 place-items-center rounded-full bg-violet-100 text-sm font-extrabold text-violet-700">
                  {i + 1}
                </span>
                <h3 className="pr-12 text-lg font-extrabold text-slate-900">{s.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="who-its-for" className="scroll-mt-24">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:py-16">
          <p className="text-xs font-extrabold tracking-[0.24em] text-slate-500">WHO IT’S FOR</p>
          <h2 className="mt-2 text-2xl font-extrabold text-slate-900 sm:text-3xl">Typical clients we build mobile apps for</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {audience.map((a) => {
              const Icon = a.icon;
              return (
                <div key={a.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_12px_40px_rgba(15,23,42,0.06)]">
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-amber-50 text-amber-700 ring-1 ring-amber-200/60">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 text-lg font-extrabold text-slate-900">{a.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">{a.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:py-16">
          <p className="text-xs font-extrabold tracking-[0.24em] text-slate-500">APP TYPES</p>
          <h2 className="mt-2 text-2xl font-extrabold text-slate-900 sm:text-3xl">Kinds of apps we can scope</h2>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600">
            If your idea fits roughly below, we can usually map it to milestones and a tech approach quickly.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {appTypes.map((t) => (
              <div key={t.title} className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-5">
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-slate-900 text-white">
                  <Smartphone className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-extrabold text-slate-900">{t.title}</h3>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{t.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="technology" className="scroll-mt-24">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:py-16">
          <p className="text-xs font-extrabold tracking-[0.24em] text-violet-600">WHICH TECHNOLOGY?</p>
          <h2 className="mt-2 text-2xl font-extrabold text-slate-900 sm:text-3xl">
            How we pick Flutter, React Native, or native
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600 sm:text-base">
            You should not have to become a framework expert. We choose based on your design needs, existing team skills,
            integrations, timeline, and budget—then document the decision so everyone agrees before coding.
          </p>

          <div className="mt-10 overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 p-4 sm:p-6">
            <TechChoiceIllustration className="h-auto w-full max-w-3xl mx-auto" />
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {techOptions.map((t) => (
              <div
                key={t.name}
                className="flex flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-xl font-extrabold text-slate-900">{t.name}</h3>
                  <span className="shrink-0 rounded-full bg-violet-50 px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-wide text-violet-700">
                    {t.badge}
                  </span>
                </div>
                <p className="mt-3 text-sm font-semibold text-slate-800">Best for</p>
                <p className="mt-1 text-sm leading-7 text-slate-600">{t.bestFor}</p>
                <p className="mt-4 text-sm font-semibold text-slate-800">Consider when</p>
                <p className="mt-1 text-sm leading-7 text-slate-600">{t.consider}</p>
                <p className="mt-4 border-t border-slate-100 pt-4 text-xs font-mono text-slate-500">{t.stackNote}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-3xl border border-slate-200 bg-slate-900 p-6 text-white sm:p-8">
            <h3 className="text-lg font-extrabold sm:text-xl">How your app talks to your business</h3>
            <p className="mt-2 max-w-2xl text-sm leading-7 text-white/80">
              Most apps are not “islands”—they load data from your server. Below is the usual pattern (we adjust to your
              setup).
            </p>
            <div className="mt-8 rounded-2xl bg-white p-4">
              <AppArchitectureIllustration className="h-auto w-full" />
            </div>
            <p className="mt-6 text-sm text-white/75">
              Need the server too? We often pair mobile with{" "}
              <Link prefetch={false} href={withTrailingSlash("/services/mern-stack")} className="font-bold text-amber-300 underline-offset-2 hover:underline">
                MERN
              </Link>{" "}
              or{" "}
              <Link prefetch={false} href={withTrailingSlash("/services/nextjs")} className="font-bold text-amber-300 underline-offset-2 hover:underline">
                Next.js
              </Link>{" "}
              backends.
            </p>
          </div>
        </div>
      </section>

      <section id="process" className="scroll-mt-24 border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:py-16">
          <p className="text-xs font-extrabold tracking-[0.24em] text-slate-500">HOW IT WORKS</p>
          <h2 className="mt-2 text-2xl font-extrabold text-slate-900 sm:text-3xl">Delivery process, step by step</h2>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600">
            Predictable phases so you always know what we are doing now—and what comes next.
          </p>
          <ol className="mt-12 space-y-8">
            {processPhases.map((p, i) => (
              <li key={p.phase} className="relative flex gap-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
                <div className="hidden shrink-0 sm:block">
                  <div className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-violet-600 to-indigo-600 text-lg font-extrabold text-white">
                    {i + 1}
                  </div>
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-baseline gap-2">
                    <h3 className="text-lg font-extrabold text-slate-900 sm:text-xl">{p.phase}</h3>
                    <span className="text-xs font-bold text-slate-500">{p.duration}</span>
                  </div>
                  <ul className="mt-4 space-y-2">
                    {p.bullets.map((b) => (
                      <li key={b} className="flex gap-2 text-sm leading-7 text-slate-600">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="deliverables" className="scroll-mt-24">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:py-16">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            <div>
              <p className="text-xs font-extrabold tracking-[0.24em] text-slate-500">WHAT YOU GET</p>
              <h2 className="mt-2 text-2xl font-extrabold text-slate-900 sm:text-3xl">Deliverables at handover</h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Transparency matters. This is what “done” usually includes unless your contract says otherwise.
              </p>
              <ul className="mt-8 space-y-3">
                {deliverables.map((d) => (
                  <li key={d} className="flex gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm font-medium text-slate-700">
                    <FileCode2 className="h-5 w-5 shrink-0 text-violet-600" />
                    {d}
                  </li>
                ))}
              </ul>
            </div>
            <div id="integrations" className="scroll-mt-24 rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_20px_50px_rgba(15,23,42,0.08)] sm:p-8">
              <p className="text-xs font-extrabold tracking-[0.24em] text-amber-600">COMMON INTEGRATIONS</p>
              <h3 className="mt-2 text-xl font-extrabold text-slate-900">Features we often wire up</h3>
              <p className="mt-2 text-sm text-slate-600">Exact scope is always confirmed in writing before build.</p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {integrations.map((x) => {
                  const Ic = x.icon;
                  return (
                    <div key={x.title} className="rounded-2xl border border-slate-100 bg-slate-50/80 p-4">
                      <Ic className="h-5 w-5 text-slate-700" />
                      <p className="mt-2 text-sm font-extrabold text-slate-900">{x.title}</p>
                      <p className="mt-1 text-xs leading-6 text-slate-600">{x.desc}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:py-16">
          <p className="text-xs font-extrabold tracking-[0.24em] text-slate-500">WHY TEAMS HIRE US</p>
          <h2 className="mt-2 text-2xl font-extrabold text-slate-900 sm:text-3xl">Execution you can follow</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {capabilities.map((c) => {
              const Icon = c.icon;
              return (
                <div key={c.title} className="rounded-3xl border border-slate-200 bg-white p-6">
                  <div className="grid h-11 w-11 place-items-center rounded-2xl bg-slate-900">
                    <Icon className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="mt-4 text-lg font-extrabold text-slate-900">{c.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">{c.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="faq" className="scroll-mt-24 bg-slate-950 py-14 text-white sm:py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-extrabold tracking-[0.24em] text-white/60">FAQ</p>
              <h2 className="mt-2 text-2xl font-extrabold sm:text-3xl">Questions clients ask first</h2>
              <p className="mt-2 max-w-xl text-sm text-white/70">Tap a question to expand. Everything here is non-salesy and practical.</p>
            </div>
            <Link
              prefetch={false}
              href={withTrailingSlash("/schedule-consultation")}
              className="inline-flex items-center gap-2 text-sm font-extrabold text-amber-300 hover:text-amber-200"
            >
              Book a consultation <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-10 space-y-3">
            {faqs.map((f) => (
              <details
                key={f.q}
                className="group rounded-2xl border border-white/15 bg-white/5 backdrop-blur transition hover:bg-white/[0.07]"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 font-extrabold text-white">
                  <span className="text-sm leading-snug pr-4">{f.q}</span>
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-white/10 text-lg leading-none text-white group-open:rotate-45">
                    +
                  </span>
                </summary>
                <div className="border-t border-white/10 px-5 pb-5 pt-0">
                  <p className="pt-4 text-sm leading-7 text-white/80">{f.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:py-16">
        <div className="flex flex-col items-start justify-between gap-8 overflow-hidden rounded-[2rem] border border-slate-200 bg-gradient-to-br from-violet-50 via-white to-amber-50 p-8 shadow-[0_24px_60px_rgba(15,23,42,0.08)] sm:flex-row sm:items-center sm:p-10">
          <div className="relative max-w-xl">
            <div className="absolute -left-6 -top-6 h-24 w-24 rounded-full bg-violet-200/40 blur-2xl" aria-hidden />
            <h2 className="relative text-2xl font-extrabold text-slate-900 sm:text-3xl">Send a short brief—we’ll reply with a clear next step</h2>
            <p className="relative mt-3 text-sm leading-7 text-slate-600 sm:text-base">
              Even 5–6 lines about your idea is enough to start: users, must-have features, and whether you already have
              APIs. No obligation.
            </p>
          </div>
          <div className="flex w-full shrink-0 flex-col gap-3 sm:w-auto sm:flex-row">
            <Link
              prefetch={false}
              href={withTrailingSlash("/contact")}
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-slate-900 px-8 py-4 text-sm font-extrabold text-white transition hover:bg-slate-800"
            >
              Contact <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              prefetch={false}
              href={withTrailingSlash("/services")}
              className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-300 bg-white px-8 py-4 text-sm font-extrabold text-slate-900 transition hover:bg-slate-50"
            >
              All services
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
