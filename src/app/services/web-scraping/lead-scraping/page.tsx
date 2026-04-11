import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Users } from "lucide-react";

const SITE_URL = "https://mugneeit.com";
const PAGE_PATH = "/services/web-scraping/lead-scraping";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Lead Scraping Service | B2B Lead Lists",
  description:
    "Lead scraping service for public B2B listings and directories with validation, dedupe and export-ready formats.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Lead Scraping Service",
    description:
      "B2B lead scraping from public sources with clean data, validation and export-ready delivery.",
    url: PAGE_URL,
    siteName: "Mugnee IT Solutions",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function LeadScrapingPage() {
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
          <span className="text-slate-900">Lead Scraping</span>
        </nav>

        <div className="mt-8 grid gap-8 lg:grid-cols-[1.1fr_.9fr] lg:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border bg-white px-4 py-2 text-xs font-extrabold text-slate-700">
              <Users className="h-4 w-4 text-purple-700" />
              B2B LEAD GENERATION
            </div>
            <h1 className="mt-4 text-4xl font-extrabold text-slate-900 sm:text-5xl">
              Lead Scraping Service
            </h1>
            <p className="mt-4 text-base leading-7 text-slate-600">
              We scrape publicly available business listings and directories to build clean,
              validated lead lists for outreach and sales workflows.
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <Bullet text="Company, phone, email, website" />
              <Bullet text="Location, category, tags" />
              <Bullet text="Validation + dedupe" />
              <Bullet text="CSV / Sheets delivery" />
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
            <div className="text-sm font-extrabold text-slate-900">Common lead sources</div>
            <div className="mt-4 space-y-3 text-sm text-slate-700">
              <Mini text="Local business directories" />
              <Mini text="Industry listings & associations" />
              <Mini text="Marketplaces & vendor pages" />
              <Mini text="Public company profiles" />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="mx-auto max-w-6xl px-4 pb-14">
        <h2 className="text-2xl font-extrabold text-slate-900">Why lead scraping helps</h2>
        <p className="mt-2 max-w-3xl text-sm leading-7 text-slate-600">
          Build targeted prospect lists faster, keep outreach consistent, and reduce manual research time.
          We focus on public data sources and provide clean, usable exports.
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            "Faster prospecting",
            "Clean, validated leads",
            "Segment by category/location",
            "Export-ready for CRM",
          ].map((t) => (
            <div key={t} className="rounded-2xl border border-slate-200 bg-white p-4 text-sm font-semibold text-slate-700">
              {t}
            </div>
          ))}
        </div>
      </section>

      {/* Use cases */}
      <section className="mx-auto max-w-6xl px-4 pb-14">
        <h2 className="text-2xl font-extrabold text-slate-900">Common use-cases</h2>
        <p className="mt-2 max-w-3xl text-sm leading-7 text-slate-600">
          Ideal for agencies, B2B sales teams, and founders who want consistent, targeted outreach with clean data.
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            "Outbound campaigns for specific industries",
            "Local business discovery by city/area",
            "Niche directory aggregation",
            "Vendor/partner list building",
            "Event/expo exhibitor lists",
            "Supplier research and sourcing",
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
          <h2 className="text-2xl font-extrabold text-slate-900">How the service works</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { title: "Define scope", desc: "Target websites, fields, filters, and output format." },
              { title: "Extract data", desc: "Responsible scraping with rate limits and retries." },
              { title: "Clean & validate", desc: "Dedupe, normalize formats, validate required fields." },
              { title: "Deliver", desc: "CSV/Sheets/JSON export + handover notes." },
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
        <h2 className="text-2xl font-extrabold text-slate-900">What you receive</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {[
            "CSV / Google Sheets export",
            "Structured columns (name, phone, email, website, address)",
            "Validation + dedupe notes",
            "Field mapping & run summary",
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
          <h2 className="text-2xl font-extrabold text-slate-900">Support & compliance approach</h2>
          <p className="mt-2 max-w-3xl text-sm leading-7 text-slate-600">
            We avoid restricted/private data, respect rate limits, and suggest API alternatives where available.
            You also get support for updates or re-runs based on your plan.
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
            {
              q: "Can you include phone/email fields?",
              a: "Yes, if those fields are publicly available on the target sources.",
            },
            {
              q: "Do you provide Google Sheets delivery?",
              a: "Yes, we can deliver to Sheets or CSV/JSON depending on your workflow.",
            },
            {
              q: "How do you keep data clean?",
              a: "We apply dedupe + validation rules and normalize formatting.",
            },
            {
              q: "Is it safe and compliant?",
              a: "We use responsible scraping patterns and avoid restricted data.",
            },
            {
              q: "Can you filter by city or category?",
              a: "Yes, we can apply filters by location, industry, and business type.",
            },
            {
              q: "Will you deliver a sample first?",
              a: "We can provide a small sample to verify fields and formatting before full delivery.",
            },
            {
              q: "Can you update the list monthly?",
              a: "Yes, scheduled re-runs and updates are available.",
            },
            {
              q: "Can you integrate with my CRM?",
              a: "We deliver clean CSV/Sheets which can be imported into most CRMs.",
            },
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
      <span className="mt-1 h-2 w-2 rounded-full bg-purple-600" />
      <span>{text}</span>
    </div>
  );
}




