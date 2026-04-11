import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, FileSpreadsheet } from "lucide-react";

const SITE_URL = "https://mugneeit.com";
const PAGE_PATH = "/services/web-scraping/google-sheets-automation";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Google Sheets Scraping Automation",
  description:
    "Automated web scraping into Google Sheets with scheduled updates, validation and clean formatting.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Google Sheets Scraping Automation",
    description:
      "Automate data extraction into Google Sheets with clean formatting and scheduled updates.",
    url: PAGE_URL,
    siteName: "Mugnee IT Solutions",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function GoogleSheetsAutomationPage() {
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
          <span className="text-slate-900">Google Sheets</span>
        </nav>

        <div className="mt-8 grid gap-8 lg:grid-cols-[1.1fr_.9fr] lg:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border bg-white px-4 py-2 text-xs font-extrabold text-slate-700">
              <FileSpreadsheet className="h-4 w-4 text-green-700" />
              AUTOMATED SHEETS
            </div>
            <h1 className="mt-4 text-4xl font-extrabold text-slate-900 sm:text-5xl">
              Google Sheets Scraping Automation
            </h1>
            <p className="mt-4 text-base leading-7 text-slate-600">
              We automate scraping workflows that push clean data into Google Sheets on a schedule.
              Ideal for monitoring, reporting, and team workflows.
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <Bullet text="Scheduled updates (daily/weekly)" />
              <Bullet text="Clean columns + formatting" />
              <Bullet text="Validation & dedupe rules" />
              <Bullet text="Alerts on failure (optional)" />
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
            <div className="text-sm font-extrabold text-slate-900">Automation features</div>
            <div className="mt-4 space-y-3 text-sm text-slate-700">
              <Mini text="Append or overwrite modes" />
              <Mini text="Data cleanup & normalization" />
              <Mini text="Retry + throttling strategy" />
              <Mini text="Logs & audit trail (optional)" />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="mx-auto max-w-6xl px-4 pb-14">
        <h2 className="text-2xl font-extrabold text-slate-900">Why automate into Google Sheets?</h2>
        <p className="mt-2 max-w-3xl text-sm leading-7 text-slate-600">
          Keep reports updated without manual work. Your team always sees the latest data in a familiar tool.
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            "Alwaysâ€‘updated reports",
            "No manual copy/paste",
            "Clean columns & formatting",
            "Teamâ€‘friendly workflows",
          ].map((t) => (
            <div key={t} className="rounded-2xl border border-slate-200 bg-white p-4 text-sm font-semibold text-slate-700">
              {t}
            </div>
          ))}
        </div>
      </section>

      {/* Use cases */}
      <section className="mx-auto max-w-6xl px-4 pb-14">
        <h2 className="text-2xl font-extrabold text-slate-900">Useâ€‘cases</h2>
        <p className="mt-2 max-w-3xl text-sm leading-7 text-slate-600">
          Perfect for teams who want live dashboards and scheduled updates without engineering overhead.
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            "Price/stock monitoring sheets",
            "Lead list updates for sales",
            "Daily market snapshots",
            "Vendor list maintenance",
            "Job/listing tracking sheets",
            "Internal reporting dashboards",
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
          <h2 className="text-2xl font-extrabold text-slate-900">Automation workflow</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { title: "Define sheet", desc: "Columns, headers, and formatting rules." },
              { title: "Extract", desc: "Responsible scraping + retries." },
              { title: "Update", desc: "Append or overwrite updates." },
              { title: "Monitor", desc: "Logs + optional alerts." },
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
            "Live Google Sheet with updates",
            "Clean formatting + column mapping",
            "Automation schedule (daily/weekly)",
            "Run logs & handover notes",
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
            We use responsible scraping and provide maintenance support for schedule changes
            or source updates when needed.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {["Responsible scraping", "Rate limiting", "Monitoring support", "Clear documentation"].map((t) => (
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
            { q: "Append or overwrite?", a: "Both options are available depending on your workflow." },
            { q: "Can you run daily?", a: "Yes, daily/weekly schedules are supported." },
            { q: "What if the site changes?", a: "We provide maintenance support for adjustments." },
            { q: "Is it compliant?", a: "We follow responsible scraping patterns and public data only." },
            { q: "Can you share a template sheet?", a: "Yes, we can set up headers and formatting." },
            { q: "Do you add logs?", a: "Yes, logs and status notes can be included." },
            { q: "Can you add notifications?", a: "Email alerts are available if needed." },
            { q: "Can you connect multiple sources?", a: "Yes, multiple sources can feed into one sheet." },
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
      <span className="mt-1 h-2 w-2 rounded-full bg-green-600" />
      <span>{text}</span>
    </div>
  );
}



