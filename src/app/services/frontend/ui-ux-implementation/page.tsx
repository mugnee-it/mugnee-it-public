import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "https://mugneeit.com";
const PAGE_PATH = "/services/frontend/ui-ux-implementation/";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;
const TARGET_KEYWORD = "UI UX Frontend Implementation Service";

const faqs = [
  {
    q: "What is UI UX frontend implementation?",
    a: "It means converting approved UI/UX design into real, responsive frontend code with proper spacing, interaction, and accessibility basics.",
  },
  {
    q: "Do you follow the provided design system?",
    a: "Yes. We follow component tokens, spacing rules, and typography scale from your design system or define one if missing.",
  },
  {
    q: "Can you improve UX during implementation?",
    a: "Yes. We suggest practical improvements for readability, CTA clarity, and mobile usability while preserving brand direction.",
  },
];

export const metadata: Metadata = {
  title: "UI UX Frontend Implementation Service",
  description:
    "UI UX frontend implementation service for design-to-code delivery with responsive layouts, clear hierarchy, and conversion-focused user flow.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "UI UX Frontend Implementation Service",
    description:
      "Design-to-code frontend implementation with clean structure, responsive behavior, and practical UX improvements.",
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
        name: "UI UX Frontend Implementation Service",
        serviceType: "UI UX Implementation",
        provider: {
          "@type": "Organization",
          name: "Mugnee IT Solutions",
          url: SITE_URL,
        },
        areaServed: ["Bangladesh", "Worldwide"],
        url: PAGE_URL,
        description:
          "Design-to-code frontend implementation with responsive and conversion-focused UX structure.",
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
          <span className="text-slate-900">UI UX Implementation</span>
        </nav>
        <h1 className="mt-4 text-4xl font-extrabold">{TARGET_KEYWORD}</h1>
        <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-600">
          This page targets design-to-code intent. It is separated from performance-only and React-only pages
          to reduce keyword conflict and improve search intent match.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {[
            "Figma to responsive frontend code",
            "Component-based UI consistency",
            "UX hierarchy and CTA clarity",
            "Cross-device implementation review",
          ].map((x) => (
            <div key={x} className="flex items-start gap-2 rounded-2xl border border-slate-200 bg-white p-4">
              <CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-600" />
              <span className="text-sm text-slate-700">{x}</span>
            </div>
          ))}
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
            <h2 className="text-xl font-extrabold">Design to Code Workflow</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              We convert approved design into production frontend with consistent spacing,
              typography scale, and responsive behavior. The goal is visual accuracy plus
              practical usability, not only pixel matching.
            </p>
            <div className="mt-4 grid gap-2 text-sm text-slate-700">
              <div>Design audit and component mapping</div>
              <div>Section-by-section implementation</div>
              <div>Interaction and state consistency checks</div>
              <div>Mobile and tablet refinement pass</div>
            </div>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-extrabold">Why This Page Is Separate</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              This page is intentionally focused on UI/UX implementation intent so it does
              not compete with React development or performance pages. That helps Google map
              search intent clearly and improves topical relevance of the frontend cluster.
            </p>
          </div>
        </div>

        <div className="mt-10 rounded-3xl border border-slate-200 bg-slate-50 p-6">
          <h2 className="text-xl font-extrabold">Relevant Frontend Pages</h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {[
              { href: "/services/frontend", label: "Frontend Pillar Page" },
              { href: "/services/frontend/react-frontend-development", label: "React Frontend Development" },
              { href: "/services/frontend/frontend-performance-optimization", label: "Frontend Performance Optimization" },
              { href: "/services/frontend/landing-page-development", label: "Landing Page Development" },
            ].map((x) => (
              <Link prefetch={false} key={x.href} href={x.href} className="group rounded-2xl border border-slate-200 bg-white p-4 text-sm font-bold">
                {x.label}
                <ArrowRight className="ml-2 inline h-4 w-4 transition group-hover:translate-x-1" />
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






