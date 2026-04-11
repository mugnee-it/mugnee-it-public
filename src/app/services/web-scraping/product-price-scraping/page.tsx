import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Tag as PriceTag } from "lucide-react";

const SITE_URL = "https://mugneeit.com";
const PAGE_PATH = "/services/web-scraping/product-price-scraping";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Product & Price Scraping Service",
  description:
    "Product and price scraping for competitors, marketplaces, and catalogs with clean export and monitoring options.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Product & Price Scraping Service",
    description:
      "Track product prices, stock, variants and catalog changes with clean export-ready data.",
    url: PAGE_URL,
    siteName: "Mugnee IT Solutions",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function ProductPriceScrapingPage() {
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
          <span className="text-slate-900">Product & Price</span>
        </nav>

        <div className="mt-8 grid gap-8 lg:grid-cols-[1.1fr_.9fr] lg:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border bg-white px-4 py-2 text-xs font-extrabold text-slate-700">
              <PriceTag className="h-4 w-4 text-amber-700" />
              CATALOG + PRICE MONITORING
            </div>
            <h1 className="mt-4 text-4xl font-extrabold text-slate-900 sm:text-5xl">
              Product & Price Scraping
            </h1>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Track competitor pricing, stock status, variants, and product changes.
              Export clean datasets or run scheduled monitoring.
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <Bullet text="Product title, price, stock" />
              <Bullet text="Variants (size, color, SKU)" />
              <Bullet text="Category & product URLs" />
              <Bullet text="Daily/weekly monitoring" />
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
            <div className="text-sm font-extrabold text-slate-900">Monitoring outputs</div>
            <div className="mt-4 space-y-3 text-sm text-slate-700">
              <Mini text="Price change alerts" />
              <Mini text="Stock availability updates" />
              <Mini text="New product detection" />
              <Mini text="Export to Sheets/CSV/DB" />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="mx-auto max-w-6xl px-4 pb-14">
        <h2 className="text-2xl font-extrabold text-slate-900">Why product & price scraping?</h2>
        <p className="mt-2 max-w-3xl text-sm leading-7 text-slate-600">
          Track competitor pricing, availability, and catalog changes to make faster, smarter pricing decisions.
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            "Competitor price tracking",
            "Stock & availability updates",
            "Variant visibility",
            "Scheduled monitoring",
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
          Track competitors, marketplaces, and suppliers with clean price/stock datasets.
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            "Competitor price benchmarking",
            "MAP/price compliance tracking",
            "Stock availability monitoring",
            "New product detection",
            "Categoryâ€‘level price trends",
            "SKU/variant comparisons",
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
          <h2 className="text-2xl font-extrabold text-slate-900">How we monitor</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { title: "Select targets", desc: "Product URLs, categories, competitor sites." },
              { title: "Extract", desc: "Prices, stock, variants, images." },
              { title: "Validate", desc: "Normalize formats + detect changes." },
              { title: "Report", desc: "Sheets/CSV export + alerts." },
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
            "Price + stock dataset (CSV/Sheets)",
            "Variant details (size/color/SKU)",
            "Change logs or snapshots",
            "Monitoring schedule (optional)",
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
            We respect rate limits, handle retries, and keep monitoring stable. You can request updates
            or add new products as your scope grows.
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
            { q: "Can you track variants?", a: "Yesâ€”size, color, SKU, and other variant attributes." },
            { q: "Do you provide alerts?", a: "Yes, alerts can be added for changes and out-of-stock items." },
            { q: "Can you monitor daily?", a: "Yesâ€”daily/weekly schedules are available." },
            { q: "Do you handle protected sites?", a: "We follow responsible approaches and adjust scope if required." },
            { q: "Can you track multiple competitors?", a: "Yes, multiple sources are supported by scope." },
            { q: "Do you include images/URLs?", a: "Yes, product URLs and image links can be included." },
            { q: "Can you export to Sheets?", a: "Yes, Sheets/CSV/JSON export is available." },
            { q: "Do you provide change logs?", a: "We can include snapshot history or change logs if required." },
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
      <span className="mt-1 h-2 w-2 rounded-full bg-amber-600" />
      <span>{text}</span>
    </div>
  );
}



