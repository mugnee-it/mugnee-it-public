import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Database } from "lucide-react";

const SITE_URL = "https://mugneeit.com";
const PAGE_PATH = "/services/web-scraping/data-extraction";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Data Extraction Service | Web Scraping",
  description:
    "Data extraction service for structured outputs: catalogs, directories, listings, and research data in CSV/JSON/Sheets.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Data Extraction Service",
    description:
      "Structured data extraction with clean mapping, validation and export-ready formats.",
    url: PAGE_URL,
    siteName: "Mugnee IT Solutions",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function DataExtractionPage() {
  return (
    <main className="bg-white">
      <section className="mx-auto max-w-6xl px-4 pt-16 pb-16">
        <nav className="text-xs font-bold text-slate-500">
          <Link prefetch={false} href="/" className="hover:text-slate-900">Home</Link>
          <span className="mx-2">/</span>
          <Link prefetch={false} href="/services" className="hover:text-slate-900">Services</Link>
          <span className="mx-2">/</span>
          <Link prefetch={false} href="/services/web-scraping" className="hover:text-slate-900">Web Scraping</Link>
          <span className="mx-2">/</span>
          <span className="text-slate-900">Data Extraction</span>
        </nav>

        <div className="mt-8 grid gap-8 lg:grid-cols-[1.1fr_.9fr] lg:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border bg-white px-4 py-2 text-xs font-extrabold text-slate-700">
              <Database className="h-4 w-4 text-blue-700" />
              STRUCTURED OUTPUTS
            </div>
            <h1 className="mt-4 text-4xl font-extrabold text-slate-900 sm:text-5xl">
              Data Extraction Service
            </h1>
            <p className="mt-4 text-base leading-7 text-slate-600">
              We extract and normalize data from public websites into clean schemas for reporting,
              research, CRM, or analytics.
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <Bullet text="Catalogs, listings, directories" />
              <Bullet text="Field mapping + normalization" />
              <Bullet text="CSV / JSON / Sheets export" />
              <Bullet text="Validation + dedupe rules" />
            </div>

            <div className="mt-7 flex flex-wrap gap-3">
              <Link prefetch={false}
                href="/contact/"
                className="rounded-2xl bg-slate-900 px-6 py-3 text-sm font-extrabold text-white hover:bg-slate-800"
              >
                Get Quote <ArrowRight className="inline h-4 w-4" />
              </Link>
              <Link prefetch={false}
                href="/services/web-scraping"
                className="rounded-2xl border px-6 py-3 text-sm font-extrabold text-slate-900 hover:bg-slate-50"
              >
                View Main Service
              </Link>
            </div>
          </div>

          <div className="rounded-3xl border bg-slate-50 p-6">
            <div className="text-sm font-extrabold text-slate-900">Typical outputs</div>
            <div className="mt-4 space-y-3 text-sm text-slate-700">
              <Mini text="Clean columns with consistent formats" />
              <Mini text="Deduped rows and validation checks" />
              <Mini text="Export-ready CSV/JSON/Sheets" />
              <Mini text="Optional DB insertion (PostgreSQL/MySQL)" />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="mx-auto max-w-6xl px-4 pb-14">
        <h2 className="text-2xl font-extrabold text-slate-900">Benefits of data extraction</h2>
        <p className="mt-2 max-w-3xl text-sm leading-7 text-slate-600">
          Turn unstructured web pages into clean, structured datasets that teams can analyze, upload,
          or integrate into internal systems.
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            "Clean structured output",
            "Faster reporting workflows",
            "Consistent schema",
            "Export-ready delivery",
          ].map((t) => (
            <div key={t} className="rounded-2xl border border-slate-200 bg-white p-4 text-sm font-semibold text-slate-700">
              {t}
            </div>
          ))}
        </div>
      </section>

      {/* Use cases */}
      <section className="mx-auto max-w-6xl px-4 pb-14">
        <h2 className="text-2xl font-extrabold text-slate-900">Useâ€‘cases we support</h2>
        <p className="mt-2 max-w-3xl text-sm leading-7 text-slate-600">
          Structured extraction for catalogs, listings, research, and reporting across industries.
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            "Directory & listing aggregation",
            "Product catalog structuring",
            "Job and realâ€‘estate listings",
            "Market research datasets",
            "Content/metadata extraction",
            "Competitor monitoring inputs",
          ].map((t) => (
            <div key={t} className="rounded-2xl border border-slate-200 bg-white p-4 text-sm text-slate-700">
              {t}
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="text-2xl font-extrabold text-slate-900">Our extraction workflow</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { title: "Field mapping", desc: "Define columns, formats, and validation rules." },
              { title: "Extract", desc: "Reliable scraping with retries and throttling." },
              { title: "Normalize", desc: "Clean dates, phones, currency, and text." },
              { title: "Deliver", desc: "CSV/JSON/Sheets or DB export." },
            ].map((s) => (
              <div key={s.title} className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="text-sm font-extrabold text-slate-900">{s.title}</div>
                <p className="mt-2 text-sm text-slate-600">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="text-2xl font-extrabold text-slate-900">Deliverables</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {[
            "Structured CSV/JSON/Sheets export",
            "Column mapping + data dictionary",
            "Validation rules + dedupe",
            "Optional DB insertion",
          ].map((t) => (
            <div key={t} className="rounded-2xl border border-slate-200 bg-white p-4 text-sm text-slate-700">
              {t}
            </div>
          ))}
        </div>
      </section>

      {/* Support & Compliance */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="text-2xl font-extrabold text-slate-900">Support & compliance</h2>
          <p className="mt-2 max-w-3xl text-sm leading-7 text-slate-600">
            We focus on public data and compliance-first delivery. You get documentation and support
            for reâ€‘runs or updates as needed.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {["Responsible scraping", "Rate limiting", "Clean documentation", "Update support"].map((t) => (
              <span key={t} className="rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-extrabold text-slate-700">
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-6xl px-4 pb-16">
        <h2 className="text-2xl font-extrabold text-slate-900">FAQ</h2>
        <div className="mt-6 grid gap-4 lg:grid-cols-2">
          {[
            { q: "Which formats do you deliver?", a: "CSV, JSON, Google Sheets or database insertion." },
            { q: "Can you normalize data?", a: "Yesâ€”dates, currency, phones, and naming formats." },
            { q: "Do you provide field mapping?", a: "Yes, along with a data dictionary." },
            { q: "Is it compliant?", a: "We use public data and responsible scraping practices." },
            { q: "Can you provide a sample first?", a: "Yes, sample rows are available before full delivery." },
            { q: "Do you handle pagination and filters?", a: "Yes, pagination, filters, and category pages are supported." },
            { q: "Can you dedupe by phone/email?", a: "Yes, we dedupe based on your required keys." },
            { q: "Can you schedule re-runs?", a: "Yes, monthly or weekly updates are available." },
          ].map((f) => (
            <details key={f.q} className="rounded-2xl border border-slate-200 bg-white p-5">
              <summary className="cursor-pointer text-sm font-extrabold text-slate-900">{f.q}</summary>
              <p className="mt-2 text-sm leading-7 text-slate-600">{f.a}</p>
            </details>
          ))}
        </div>
      </section>
    </main>
  );
}

function Bullet({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-2 text-sm text-slate-800">
      <CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-600" />
      {text}
    </div>
  );
}

function Mini({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-2">
      <span className="mt-1 h-2 w-2 rounded-full bg-blue-600" />
      <span>{text}</span>
    </div>
  );
}



