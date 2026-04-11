import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "https://mugneeit.com";
const PAGE_PATH = "/services/frontend/react-frontend-development/";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;
const TARGET_KEYWORD = "React Frontend Development Service";

const faqs = [
  {
    q: "What is included in React frontend development service?",
    a: "We build reusable React components, responsive layouts, clean state handling, and production-ready UI structure.",
  },
  {
    q: "Do you convert Figma to React accurately?",
    a: "Yes. We convert Figma into responsive React components with clean spacing, hierarchy, and reusable blocks.",
  },
  {
    q: "Is the code maintainable for future updates?",
    a: "Yes. We use organized component structure and clear naming so future updates remain safe and fast.",
  },
];

export const metadata: Metadata = {
  title: "React Frontend Development Service",
  description:
    "React frontend development service for fast, responsive, and scalable UI. Clean component architecture, conversion-focused layout, and SEO-safe implementation.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "React Frontend Development Service",
    description:
      "Scalable React UI development with reusable components and performance-focused implementation.",
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
        name: "React Frontend Development Service",
        serviceType: "Frontend Development",
        provider: {
          "@type": "Organization",
          name: "Mugnee IT Solutions",
          url: SITE_URL,
        },
        areaServed: ["Bangladesh", "Worldwide"],
        url: PAGE_URL,
        description:
          "React frontend development for scalable UI, reusable components, and responsive user experience.",
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

const siblings = [
  { href: "/services/frontend/frontend-performance-optimization", label: "Frontend Performance Optimization" },
  { href: "/services/frontend/ui-ux-implementation", label: "UI/UX Frontend Implementation" },
  { href: "/services/frontend/landing-page-development", label: "Landing Page Development" },
  { href: "/services/frontend/bangladesh", label: "Frontend Development in Bangladesh" },
  { href: "/services/frontend/worldwide", label: "Worldwide Frontend Development Service" },
];

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
          <span className="text-slate-900">React Frontend Development</span>
        </nav>

        <h1 className="mt-4 text-4xl font-extrabold text-slate-900">{TARGET_KEYWORD}</h1>
        <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-600">
          This page targets React-only frontend intent. We build clean React UI with reusable components,
          clear structure, and responsive behavior for business websites and app interfaces.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {[
            "Reusable component architecture",
            "Responsive and mobile-first layouts",
            "Form and UI state handling",
            "Maintainable structure for future updates",
          ].map((x) => (
            <div key={x} className="flex items-start gap-2 rounded-2xl border border-slate-200 bg-white p-4">
              <CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-600" />
              <span className="text-sm text-slate-700">{x}</span>
            </div>
          ))}
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
            <h2 className="text-xl font-extrabold">Who This Service Is For</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Teams that already have design direction but need reliable React implementation.
              This includes startup websites, dashboard interfaces, SaaS frontend, and corporate
              web apps that require reusable components and predictable delivery quality.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-slate-700">
              <li>Business websites that need custom React sections</li>
              <li>Web apps requiring component-driven UI system</li>
              <li>Teams replacing messy frontend with maintainable structure</li>
            </ul>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-extrabold">How We Deliver React Frontend</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              We start with layout and component map, then build responsive components with
              clear UI states. After implementation, we run quality checks for consistency,
              responsiveness, and maintainability before handover.
            </p>
            <div className="mt-4 grid gap-2 text-sm text-slate-700">
              <div>1. Requirement mapping and component planning</div>
              <div>2. Responsive React implementation</div>
              <div>3. QA pass and cleanup</div>
              <div>4. Handover and support guidance</div>
            </div>
          </div>
        </div>

        <div className="mt-10 rounded-3xl border border-slate-200 bg-slate-50 p-6">
          <h2 className="text-xl font-extrabold">Related Frontend Service Pages</h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {siblings.map((s) => (
              <Link prefetch={false} key={s.href} href={s.href} className="group rounded-2xl border border-slate-200 bg-white p-4 text-sm font-bold">
                {s.label}
                <ArrowRight className="ml-2 inline h-4 w-4 transition group-hover:translate-x-1" />
              </Link>
            ))}
          </div>
        </div>

                <p className="mt-8 max-w-3xl text-sm leading-7 text-slate-600">
          FAQs below are specific to this service page intent and not copied from generic templates.
        </p>

        <div className="mt-10 grid gap-4 lg:grid-cols-2">          {faqs.map((f) => (
            <details key={f.q} className="rounded-2xl border border-slate-200 bg-white p-5">
              <summary className="cursor-pointer list-none text-sm font-extrabold">{f.q}</summary>
              <p className="mt-3 text-sm leading-7 text-slate-600">{f.a}</p>
            </details>
          ))}
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
    </main>
  );
}






