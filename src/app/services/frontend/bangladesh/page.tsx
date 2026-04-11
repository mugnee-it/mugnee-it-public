import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "https://mugneeit.com";
const PAGE_PATH = "/services/frontend/bangladesh/";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;
const TARGET_KEYWORD = "Frontend Development Service in Bangladesh";

const faqs = [
  {
    q: "Do you provide frontend development service in Bangladesh?",
    a: "Yes. We provide frontend development for businesses in Bangladesh with local communication and practical delivery timelines.",
  },
  {
    q: "Do you support Bangla and English content layouts?",
    a: "Yes. We implement frontend layouts for Bangla and English content structures.",
  },
];

export const metadata: Metadata = {
  title: "Frontend Development Service in Bangladesh",
  description:
    "Frontend development service in Bangladesh for responsive UI, React implementation, and performance-focused delivery.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Frontend Development Service in Bangladesh",
    description:
      "Local frontend development support in Bangladesh with clean implementation and reliable communication.",
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
        name: "Frontend Development Service in Bangladesh",
        serviceType: "Frontend Development",
        provider: {
          "@type": "Organization",
          name: "Mugnee IT Solutions",
          url: SITE_URL,
        },
        areaServed: "Bangladesh",
        url: PAGE_URL,
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
          <span className="text-slate-900">Bangladesh</span>
        </nav>
        <h1 className="mt-4 text-4xl font-extrabold">{TARGET_KEYWORD}</h1>
        <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-600">
          This page focuses on Bangladesh-local frontend intent, separated from global pages to keep keyword targeting clean.
        </p>

        <div className="mt-8 rounded-3xl border border-slate-200 bg-slate-50 p-6">
          <h2 className="text-xl font-extrabold">Local Delivery Highlights</h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {[
              "Local business website UI delivery",
              "Bangla + English content-ready layouts",
              "React frontend for Bangladesh SMEs",
              "Ongoing maintenance support",
            ].map((x) => (
              <div key={x} className="flex items-start gap-2 text-sm font-semibold text-slate-700">
                <MapPin className="mt-0.5 h-4 w-4 text-slate-900" />
                {x}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-extrabold">Bangladesh Market Fit</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              This page targets Bangladesh-specific frontend search intent. It is suitable for
              local SMEs, agencies, training institutes, and service companies that need modern,
              responsive frontend with practical budget and support flow.
            </p>
            <div className="mt-4 grid gap-2 text-sm text-slate-700">
              <div>Local communication and project coordination</div>
              <div>Bangla and English content structure support</div>
              <div>Business-first layout planning for local audience</div>
            </div>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
            <h2 className="text-xl font-extrabold">Delivery Process</h2>
            <div className="mt-3 grid gap-2 text-sm text-slate-700">
              <div>1. Scope and page requirement collection</div>
              <div>2. UI planning and component setup</div>
              <div>3. Responsive implementation and QA</div>
              <div>4. Handover and maintenance guidance</div>
            </div>
          </div>
        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-2">
          {faqs.map((f) => (
            <details key={f.q} className="rounded-2xl border border-slate-200 p-5">
              <summary className="cursor-pointer list-none text-sm font-extrabold">{f.q}</summary>
              <p className="mt-3 text-sm leading-7 text-slate-600">{f.a}</p>
            </details>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <Link prefetch={false} href="/services/frontend/worldwide" className="rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-extrabold">
            Worldwide Frontend Service
          </Link>
          <Link prefetch={false} href="/services/frontend/react-frontend-development" className="rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-extrabold">
            React Frontend Development
          </Link>
          <Link prefetch={false} href="/contact" className="inline-flex items-center gap-2 rounded-2xl bg-slate-900 px-6 py-3 text-sm font-extrabold text-white">
            Contact for Bangladesh Project <ArrowRight className="h-4 w-4" />
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






