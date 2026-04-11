import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  CheckCircle2,
  Gauge,
  Timer,
  Sparkles,
  Search,
  Users,
  BadgeCheck,
  Workflow,
  HardDrive,
} from "lucide-react";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "https://mugneeit.com";

const PAGE_PATH = "/services/nextjs/core-web-vitals/";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;
const TARGET_KEYWORD = "Next.js Core Web Vitals Optimization";

export const metadata: Metadata = {
  title: "Next.js Core Web Vitals Optimization | Speed & UX",
  description:
    "Improve LCP, CLS and INP for Next.js websites. Image, font, script and caching optimization to improve real performance, UX and SEO signals.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Next.js Core Web Vitals Optimization",
    description:
      "Speed-first Next.js optimization for LCP, CLS and INP with SEO-safe best practices.",
    url: PAGE_URL,
    siteName: "Mugnee IT Solutions",
    type: "website",
  },
  robots: { index: true, follow: true },
};

const faqs = [
  {
    q: "Do Core Web Vitals affect Google ranking?",
    a: "Core Web Vitals are part of Google’s page experience signals. Improving LCP, CLS and INP helps user experience and can support better rankings over time.",
  },
  {
    q: "Which Core Web Vitals do you optimize?",
    a: "We focus on LCP (Largest Contentful Paint), CLS (Cumulative Layout Shift) and INP (Interaction to Next Paint) using Next.js performance best practices.",
  },
  {
    q: "What causes poor Core Web Vitals in Next.js?",
    a: "Common causes include oversized images, unstable layouts, font loading issues, heavy scripts, and improper caching strategy.",
  },
  {
    q: "Can you improve Lighthouse and real-user metrics?",
    a: "Yes. We prioritize real-user performance improvements and usually see stable Lighthouse and CrUX improvements after optimization.",
  },
  {
    q: "Is this optimization safe for SEO?",
    a: "Yes. We use Google-recommended, SEO-safe techniques—no hacks, no cloaking, no risky shortcuts.",
  },
  {
    q: "Do you work with Bangladesh and international clients?",
    a: "Yes. We provide Core Web Vitals optimization for clients in Bangladesh and worldwide.",
  },
];

function buildJsonLd() {
  const service = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Next.js Core Web Vitals Optimization",
    serviceType: "Performance Optimization",
    provider: {
      "@type": "Organization",
      name: "Mugnee IT Solutions",
      url: SITE_URL,
    },
    areaServed: ["Bangladesh", "Worldwide"],
    url: PAGE_URL,
    description:
      "Improve LCP, CLS and INP for Next.js websites using SEO-safe image, font, script and caching optimization techniques.",
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
      { "@type": "ListItem", position: 2, name: "Services", item: `${SITE_URL}/services/` },
      { "@type": "ListItem", position: 3, name: "Next.js", item: `${SITE_URL}/services/nextjs/` },
      { "@type": "ListItem", position: 4, name: "Core Web Vitals", item: PAGE_URL },
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

  return [service, breadcrumb, faq];
}

export default function CoreWebVitalsPage() {
  const jsonLd = buildJsonLd();

  return (
    <main className="bg-white">
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* HERO */}
      <section className="relative overflow-hidden pt-24 pb-12 sm:pt-28 sm:pb-16">
        <div className="absolute inset-0">
          <Image
            src="/images/next-hero.webp"
            alt="Next.js Core Web Vitals optimization banner"
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/70 via-slate-950/35 to-transparent" />
          <div className="absolute inset-0 opacity-[0.10] [background:radial-gradient(circle_at_1px_1px,rgba(255,255,255,.35)_1px,transparent_0)] [background-size:22px_22px]" />
        </div>

        <div className="relative mx-auto max-w-6xl px-4">
          <nav className="text-xs font-bold text-white/85 drop-shadow">
            <Link prefetch={false} href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link prefetch={false} href="/services" className="hover:text-white">Services</Link>
            <span className="mx-2">/</span>
            <Link prefetch={false} href="/services/nextjs" className="hover:text-white">Next.js</Link>
            <span className="mx-2">/</span>
            <span className="text-yellow-300">Core Web Vitals</span>
          </nav>

          <div className="mt-10 grid gap-10 lg:grid-cols-2 lg:items-center">
            <div className="max-w-2xl">
              <p className="inline-flex items-center gap-2 text-[11px] font-extrabold tracking-[0.22em] text-yellow-200">
                PERFORMANCE
                <span className="h-1.5 w-1.5 rounded-full bg-yellow-300" />
                LCP • CLS • INP
              </p>

              <h1 className="mt-4 text-4xl font-extrabold text-white sm:text-5xl">
                {TARGET_KEYWORD}
              </h1>

              <p className="mt-4 text-white/90 sm:text-lg">
                Faster pages, better UX, stronger SEO signals. We optimize Next.js
                websites with clean, measurable and SEO-safe performance techniques.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link prefetch={false}
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-yellow-400 px-7 py-3.5 text-sm font-extrabold text-slate-900 hover:bg-yellow-500"
                >
                  Request Performance Audit
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <Link prefetch={false}
                  href="/services/nextjs"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/10 px-7 py-3.5 text-sm font-extrabold text-white"
                >
                  Back to Next.js Service
                </Link>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <HeroBadge icon={Gauge} title="LCP" desc="Faster main content loading" />
              <HeroBadge icon={Sparkles} title="CLS" desc="No layout shift" />
              <HeroBadge icon={Timer} title="INP" desc="Responsive interactions" />
              <HeroBadge icon={Search} title="SEO impact" desc="Better UX signals" />
            </div>
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
          <h2 className="mt-2 text-2xl font-extrabold text-slate-900 sm:text-3xl">{TARGET_KEYWORD} benefits</h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {[
              `Clear ${TARGET_KEYWORD} scope with business-focused priorities`,
              "Structured delivery and quality-controlled implementation",
              "SEO-safe and maintainable setup for long-term growth",
              "Post-launch support and practical optimization guidance",
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
      
      {/* WHO THIS IS FOR */}
      <section className="mx-auto max-w-6xl px-4 py-14">
        <div className="grid gap-6 lg:grid-cols-3">
          <InfoCard
            icon={Users}
            title="Who needs this?"
            bullets={[
              "Slow Next.js websites",
              "Poor Lighthouse or PageSpeed score",
              "High bounce rate from slow load",
            ]}
          />
          <InfoCard
            icon={BadgeCheck}
            title="Why it matters"
            bullets={[
              "Better user experience",
              "Higher conversion potential",
              "Cleaner SEO signals",
            ]}
          />
          <InfoCard
            icon={HardDrive}
            title="SEO-safe approach"
            bullets={[
              "No risky hacks",
              "Google-recommended practices",
              "Stable long-term performance",
            ]}
          />
        </div>
      </section>
      
      
      {/* WHAT WE OPTIMIZE */}
      <section className="mx-auto max-w-6xl px-4 pb-14">
        <div className="grid gap-6 lg:grid-cols-3">
          <Card title="Image optimization" items={[
            "Next/Image best practices",
            "Correct sizes & formats",
            "Lazy loading strategy",
            "Avoid oversized assets",
          ]}/>
          <Card title="Font & layout" items={[
            "Prevent CLS from fonts",
            "Limit font weights",
            "Stable layout patterns",
            "Avoid render-blocking",
          ]}/>
          <Card title="Script & caching" items={[
            "Safe script loading",
            "Reduce JS execution",
            "Caching strategy",
            "Third-party control",
          ]}/>
        </div>
      </section>
      
      
      {/* PROCESS */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="text-3xl font-extrabold text-slate-900">
            How we improve Core Web Vitals
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <ProcessCard icon={Search} title="Audit" desc="Measure LCP, CLS and INP." />
            <ProcessCard icon={Workflow} title="Plan" desc="Identify bottlenecks safely." />
            <ProcessCard icon={Gauge} title="Optimize" desc="Apply performance fixes." />
            <ProcessCard icon={BadgeCheck} title="Verify" desc="Re-test & validate results." />
          </div>
        </div>
      </section>
      
      
      {/* FAQ */}
      <section className="mx-auto max-w-6xl px-4 pb-14">
        <h2 className="text-3xl font-extrabold text-slate-900">
          Frequently asked questions
        </h2>

        <div className="mt-8 grid gap-4 lg:grid-cols-2">
          {faqs.map((f) => (
            <details key={f.q} className="rounded-2xl border bg-white p-5">
              <summary className="cursor-pointer font-extrabold">
                {f.q}
              </summary>
              <p className="mt-3 text-sm text-slate-600">{f.a}</p>
            </details>
          ))}
        </div>
      </section>
      
    </main>
  );
}

/* UI bits */

function HeroBadge({ icon: Icon, title, desc }: { icon: LucideIcon; title: string; desc: string }) {
  return (
    <div className="rounded-3xl border border-white/15 bg-white/10 px-5 py-4">
      <div className="flex gap-3">
        <div className="grid h-10 w-10 place-items-center rounded-2xl bg-yellow-400">
          <Icon className="h-5 w-5 text-slate-900" />
        </div>
        <div>
          <div className="text-sm font-extrabold text-white">{title}</div>
          <div className="text-xs text-white/80">{desc}</div>
        </div>
      </div>
    </div>
  );
}

function Card({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-3xl border bg-white p-7">
      <div className="text-lg font-extrabold">{title}</div>
      <div className="mt-4 space-y-2">
        {items.map((i) => (
          <div key={i} className="flex gap-2 text-sm">
            <CheckCircle2 className="h-4 w-4 text-emerald-600" />
            <span>{i}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function InfoCard({ icon: Icon, title, bullets }: { icon: LucideIcon; title: string; bullets: string[] }) {
  return (
    <div className="rounded-3xl border bg-white p-7">
      <div className="flex gap-3">
        <div className="grid h-12 w-12 place-items-center rounded-2xl bg-slate-900">
          <Icon className="h-6 w-6 text-white" />
        </div>
        <div>
          <div className="text-lg font-extrabold">{title}</div>
        </div>
      </div>
      <ul className="mt-4 space-y-2 text-sm">
        {bullets.map((b: string) => (
          <li key={b} className="flex gap-2">
            <span className="mt-1 h-2 w-2 rounded-full bg-yellow-400" />
            {b}
          </li>
        ))}
      </ul>
    </div>
  );
}

function ProcessCard({ icon: Icon, title, desc }: { icon: LucideIcon; title: string; desc: string }) {
  return (
    <div className="rounded-3xl border bg-white p-6">
      <div className="grid h-12 w-12 place-items-center rounded-2xl bg-slate-900">
        <Icon className="h-6 w-6 text-white" />
      </div>
      <div className="mt-3 font-extrabold">{title}</div>
      <p className="mt-1 text-sm text-slate-600">{desc}</p>
    </div>
  );
}









