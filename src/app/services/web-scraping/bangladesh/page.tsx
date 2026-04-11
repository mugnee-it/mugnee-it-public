import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Globe, MapPin } from "lucide-react";

const SITE_URL = "https://mugneeit.com";
const PAGE_PATH = "/services/web-scraping/bangladesh";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Web Scraping Service Bangladesh",
  description:
    "Bangladesh-focused web scraping service with clean export (CSV/JSON/Sheets), validation, and compliance-first delivery.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Web Scraping Service Bangladesh",
    description:
      "Local-market web scraping with reliable extraction, clean export, and responsible compliance practices.",
    url: PAGE_URL,
    siteName: "Mugnee IT Solutions",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function WebScrapingBangladeshPage() {
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
          <span className="text-slate-900">Bangladesh</span>
        </nav>

        <div className="mt-8 grid gap-8 lg:grid-cols-[1.1fr_.9fr] lg:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border bg-white px-4 py-2 text-xs font-extrabold text-slate-700">
              <MapPin className="h-4 w-4 text-emerald-700" />
              BANGLADESH-FOCUSED SERVICE
            </div>
            <h1 className="mt-4 text-4xl font-extrabold text-slate-900 sm:text-5xl">
              Web Scraping Service Bangladesh
            </h1>
            <p className="mt-4 text-base leading-7 text-slate-600">
              We extract public data from local directories, marketplaces, job portals, and listingsâ€”
              then deliver clean datasets in CSV/JSON/Sheets with validation and dedupe.
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <Bullet text="Local directories & business listings" />
              <Bullet text="Product price & stock tracking" />
              <Bullet text="Leads & contact data (public)" />
              <Bullet text="Compliance-first, responsible scraping" />
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
            <div className="flex items-center gap-3">
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-slate-900">
                <Globe className="h-6 w-6 text-white" />
              </div>
              <div>
                <div className="text-lg font-extrabold text-slate-900">Bangladesh + Worldwide</div>
                <p className="mt-1 text-sm text-slate-600">
                  Local delivery with global standards, documentation, and clean exports.
                </p>
              </div>
            </div>

            <div className="mt-6 space-y-3 text-sm text-slate-700">
              <Mini text="CSV / JSON / Sheets export" />
              <Mini text="Validation + dedupe included" />
              <Mini text="Rate-limited, responsible approach" />
              <Mini text="Documentation + handover" />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="mx-auto max-w-6xl px-4 pb-14">
        <h2 className="text-2xl font-extrabold text-slate-900">Why Bangladesh-focused scraping?</h2>
        <p className="mt-2 max-w-3xl text-sm leading-7 text-slate-600">
          Local directories, marketplaces, and business listings are fragmented. We structure them into
          clean datasets so you can do outreach, research, and market analysis faster.
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            "Local market coverage",
            "Clean + validated datasets",
            "Fast delivery for BD sources",
            "Globalâ€‘standard quality",
          ].map((t) => (
            <div key={t} className="rounded-2xl border border-slate-200 bg-white p-4 text-sm font-semibold text-slate-700">
              {t}
            </div>
          ))}
        </div>
      </section>

      {/* Use cases */}
      <section className="mx-auto max-w-6xl px-4 pb-14">
        <h2 className="text-2xl font-extrabold text-slate-900">Useâ€‘cases in Bangladesh</h2>
        <p className="mt-2 max-w-3xl text-sm leading-7 text-slate-600">
          Suitable for local market research, lead generation, and competitor tracking.
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            "Local business directories",
            "Eâ€‘commerce product tracking",
            "Job listing aggregation",
            "Realâ€‘estate listings",
            "Service provider discovery",
            "Regional market research",
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
          <h2 className="text-2xl font-extrabold text-slate-900">How we deliver</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { title: "Target sources", desc: "Local directories, marketplaces, listings." },
              { title: "Extract", desc: "Responsible scraping + rate limits." },
              { title: "Clean", desc: "Normalize names, phones, addresses." },
              { title: "Export", desc: "CSV/Sheets/JSON + handover notes." },
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
            "CSV / Google Sheets export",
            "Validated phone/email fields (public only)",
            "Deduped records with consistent format",
            "Field mapping + run summary",
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
          <h2 className="text-2xl font-extrabold text-slate-900">Compliance & support</h2>
          <p className="mt-2 max-w-3xl text-sm leading-7 text-slate-600">
            We avoid restricted/private data, use rate limits, and provide support for re-runs or updates.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {["Responsible scraping", "Rate limiting", "Re-run support", "Clear documentation"].map((t) => (
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
            { q: "Which sites can you scrape in Bangladesh?", a: "Any public directory, listing, or marketplace that allows access." },
            { q: "Do you include phone/email?", a: "Only if it is publicly listed and compliant." },
            { q: "Do you provide Sheets delivery?", a: "Yesâ€”Sheets or CSV/JSON export." },
            { q: "Can you update the data later?", a: "Yes, reâ€‘runs and updates are available." },
            { q: "Can you target specific cities?", a: "Yes, we can filter by city, area, or category." },
            { q: "Do you provide validation?", a: "Yes, we clean and validate fields before delivery." },
            { q: "How fast can you deliver?", a: "Small jobs are fast; timelines depend on scope." },
            { q: "Can you include images/URLs?", a: "Yes, links and image URLs can be included." },
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
      <span className="mt-1 h-2 w-2 rounded-full bg-emerald-500" />
      <span>{text}</span>
    </div>
  );
}



