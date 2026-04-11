import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "https://mugneeit.com";
const PAGE_PATH = "/services/frontend/landing-page-development/";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;
const TARGET_KEYWORD = "Landing Page Development Service";

const faqs = [
  {
    q: "What makes a landing page conversion-focused?",
    a: "Clear message hierarchy, intent-matched copy blocks, strong CTA placement, trust elements, and fast performance.",
  },
  {
    q: "Do you build landing pages for ads and campaigns?",
    a: "Yes. We build campaign-specific landing pages aligned with your audience intent and ad funnel goals.",
  },
  {
    q: "Can you A/B test landing page variants?",
    a: "Yes. We can structure pages for variant testing and conversion tracking.",
  },
];

export const metadata: Metadata = {
  title: "Landing Page Development Service",
  description:
    "Landing page development service for conversion-focused campaigns. Fast, responsive, and trust-driven pages with clear CTA flow.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Landing Page Development Service",
    description:
      "Conversion-focused landing page development for campaigns, lead generation, and product offers.",
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
        name: "Landing Page Development Service",
        serviceType: "Landing Page Development",
        provider: {
          "@type": "Organization",
          name: "Mugnee IT Solutions",
          url: SITE_URL,
        },
        areaServed: ["Bangladesh", "Worldwide"],
        url: PAGE_URL,
        description:
          "Landing page development focused on conversion, campaign intent, and fast user experience.",
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
          <span className="text-slate-900">Landing Page Development</span>
        </nav>
        <h1 className="mt-4 text-4xl font-extrabold">{TARGET_KEYWORD}</h1>
        <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-600">
          This page is dedicated to landing-page intent, separate from general frontend and UI implementation
          pages. It helps reduce cannibalization and improves keyword relevance.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {[
            "Offer-focused hero and CTA flow",
            "Trust sections and proof blocks",
            "Speed-focused layout and assets",
            "Conversion tracking readiness",
          ].map((x) => (
            <div key={x} className="flex items-start gap-2 rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-600" />
              <span className="text-sm text-slate-700">{x}</span>
            </div>
          ))}
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
            <h2 className="text-xl font-extrabold">Landing Page Strategy</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              We structure landing pages around one clear offer and one primary action.
              Sections are arranged to move users from interest to trust to conversion with
              minimal distraction and strong readability on mobile.
            </p>
            <div className="mt-4 grid gap-2 text-sm text-slate-700">
              <div>Offer-focused headline and problem framing</div>
              <div>Trust blocks, proof, and FAQ flow</div>
              <div>Clear CTA sections with low friction</div>
              <div>Tracking-ready structure for campaigns</div>
            </div>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-extrabold">Use Cases</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Best for lead generation campaigns, service launch pages, webinar funnels,
              and product-specific pages where conversion intent is higher than browsing intent.
            </p>
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

        <div className="mt-10 flex flex-wrap gap-3">
          <Link prefetch={false} href="/services/frontend" className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-xs font-extrabold">
            Frontend Pillar
          </Link>
          <Link prefetch={false} href="/services/frontend/react-frontend-development" className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-xs font-extrabold">
            React Frontend
          </Link>
          <Link prefetch={false} href="/services/frontend/ui-ux-implementation" className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-xs font-extrabold">
            UI/UX Implementation
          </Link>
          <Link prefetch={false} href="/contact" className="inline-flex items-center gap-2 rounded-2xl bg-slate-900 px-6 py-3 text-sm font-extrabold text-white">
            Get Landing Page Quote <ArrowRight className="h-4 w-4" />
          </Link>
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






