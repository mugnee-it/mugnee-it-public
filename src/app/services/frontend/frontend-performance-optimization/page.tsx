import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Gauge } from "lucide-react";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "https://mugneeit.com";
const PAGE_PATH = "/services/frontend/frontend-performance-optimization/";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;
const TARGET_KEYWORD = "Frontend Performance Optimization Service";

const faqs = [
  {
    q: "What do you optimize in frontend performance?",
    a: "We optimize image delivery, render path, script loading, layout stability, and component-level performance patterns.",
  },
  {
    q: "Do you improve Core Web Vitals?",
    a: "Yes. We work on practical improvements for LCP, CLS, and INP using a frontend-focused optimization checklist.",
  },
  {
    q: "Can performance work be done without redesign?",
    a: "Yes. In many projects we improve speed and UX metrics without a full visual redesign.",
  },
];

export const metadata: Metadata = {
  title: "Frontend Performance Optimization Service",
  description:
    "Frontend performance optimization service for faster loading, better Core Web Vitals, and smoother UX across devices.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Frontend Performance Optimization Service",
    description:
      "Improve frontend speed, Core Web Vitals, and user experience with practical optimization workflows.",
    url: PAGE_URL,
    siteName: "Mugnee IT Solutions",
    type: "website",
  },
  robots: { index: true, follow: true },
};

function buildJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: "Frontend Performance Optimization Service",
        serviceType: "Website Performance Optimization",
        provider: {
          "@type": "Organization",
          name: "Mugnee IT Solutions",
          url: SITE_URL,
        },
        areaServed: ["Bangladesh", "Worldwide"],
        url: PAGE_URL,
        description:
          "Frontend speed optimization for Core Web Vitals improvement and better real-world user experience.",
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
  };
}

export default function Page() {
  const jsonLd = buildJsonLd();
  return (
    <main className="bg-white text-slate-900">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <section className="mx-auto max-w-6xl px-4 py-16">
        <nav className="text-xs font-bold text-slate-500">
          <Link prefetch={false} href="/">Home</Link> <span className="mx-2">/</span>
          <Link prefetch={false} href="/services">Services</Link> <span className="mx-2">/</span>
          <Link prefetch={false} href="/services/frontend">Frontend</Link> <span className="mx-2">/</span>
          <span className="text-slate-900">Performance Optimization</span>
        </nav>
        <h1 className="mt-4 text-4xl font-extrabold">{TARGET_KEYWORD}</h1>
        <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-600">
          This page targets speed/performance intent only, so it does not overlap with generic React
          development pages. Focus: faster loading, better user metrics, stable rendering.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {[
            "LCP and image path optimization",
            "CLS reduction and layout stability",
            "Script strategy and hydration hygiene",
            "Performance report with prioritized fixes",
          ].map((x) => (
            <div key={x} className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm font-semibold text-slate-700">
              <Gauge className="mr-2 inline h-4 w-4 text-slate-900" />
              {x}
            </div>
          ))}
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
            <h2 className="text-xl font-extrabold">Performance Scope</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              This service targets frontend bottlenecks only. We identify high-impact issues
              that affect load speed and user experience, then prioritize fixes that improve
              real usability and measurable performance signals.
            </p>
            <div className="mt-4 grid gap-2 text-sm text-slate-700">
              <div>Image optimization and delivery strategy</div>
              <div>Layout stability and CLS cleanup</div>
              <div>Render path and script loading improvements</div>
              <div>Lightweight report with next-step priorities</div>
            </div>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-extrabold">Expected Outcomes</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              After optimization, users usually experience faster page response, cleaner
              interaction flow, and improved stability. Performance work also supports SEO by
              reducing friction and improving technical quality signals.
            </p>
            <div className="mt-4 grid gap-2 text-sm text-slate-700">
              <div>Better first impression on mobile networks</div>
              <div>Smoother scrolling and interaction</div>
              <div>Reduced unnecessary script impact</div>
              <div>Stronger technical foundation for growth</div>
            </div>
          </div>
        </div>

        <div className="mt-10 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-extrabold">Internal Links</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {[
              { href: "/services/frontend", label: "Frontend Pillar Page" },
              { href: "/services/frontend/react-frontend-development", label: "React Frontend Development" },
              { href: "/services/frontend/ui-ux-implementation", label: "UI/UX Frontend Implementation" },
              { href: "/services/frontend/landing-page-development", label: "Landing Page Development" },
            ].map((x) => (
              <Link prefetch={false} key={x.href} href={x.href} className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-xs font-extrabold">
                {x.label}
              </Link>
            ))}
          </div>
        </div>

                <p className="mt-8 max-w-3xl text-sm leading-7 text-slate-600">
          FAQs below are specific to this service page intent and not copied from generic templates.
        </p>

        <div className="mt-10 grid gap-4 lg:grid-cols-2">          {faqs.map((f) => (
            <details key={f.q} className="rounded-2xl border border-slate-200 p-5">
              <summary className="cursor-pointer list-none text-sm font-extrabold">{f.q}</summary>
              <p className="mt-3 text-sm leading-7 text-slate-600">{f.a}</p>
            </details>
          ))}
        </div>

        <Link prefetch={false} href="/contact" className="mt-10 inline-flex items-center gap-2 rounded-2xl bg-slate-900 px-6 py-3 text-sm font-extrabold text-white">
          Request Performance Audit <ArrowRight className="h-4 w-4" />
        </Link>
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
    </main>
  );
}






