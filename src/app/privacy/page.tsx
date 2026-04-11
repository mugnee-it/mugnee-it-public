import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { ArrowRight, Globe2, Lock, ShieldCheck } from "lucide-react";

const SITE_URL =
  (process.env.NEXT_PUBLIC_SITE_URL || "https://mugneeit.com").replace(/\/$/, "");
const PAGE_PATH = "/privacy";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}/`;
const LAST_UPDATED = "February 14, 2026";
const CONTACT_EMAIL = "mugnee.it%40gmail.com";
const CONTACT_EMAIL_DISPLAY = "mugnee.it at gmail.com";
const CONTACT_ADDRESS =
  "3rd Floor, 36-37 Umesh Datta Road, Bakshibazar, Dhaka - 1211, Bangladesh";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Privacy Policy",
  description:
    "Privacy Policy for Mugnee IT Solutions. Learn how we collect, use, store, and protect information for clients in Bangladesh and worldwide.",
  alternates: { canonical: PAGE_URL },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Privacy Policy",
    description:
      "How Mugnee IT Solutions handles personal information and project data for local and international clients.",
    url: PAGE_URL,
    type: "website",
  },
};

function privacyJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Privacy Policy",
    url: PAGE_URL,
    description:
      "Privacy Policy covering data collection, use, storage, and client rights.",
    isPartOf: {
      "@type": "WebSite",
      name: "Mugnee IT Solutions",
      url: SITE_URL,
    },
    dateModified: "2026-02-14",
  };
}

const sections = [
  {
    id: "collect",
    title: "Information We Collect",
    body: "We may collect your name, email, phone number, company details, project requirements, communication history, and technical data such as IP address, browser type, and usage logs.",
  },
  {
    id: "use",
    title: "How We Use Information",
    body: "We use collected information to provide quotations, deliver services, support clients, improve service quality, maintain security, and comply with legal obligations.",
  },
  {
    id: "sharing",
    title: "Data Sharing and International Service",
    body: "We do not sell personal data. We may share limited information with trusted service providers (hosting, analytics, payment, communication tools) only as necessary for project delivery. Since we serve international clients, data may be processed across different jurisdictions with reasonable safeguards.",
  },
  {
    id: "retention",
    title: "Data Retention and Security",
    body: "We retain data only as long as needed for service delivery, support, records, or legal compliance. We apply practical security measures to reduce unauthorized access, misuse, or loss of data.",
  },
  {
    id: "rights",
    title: "Your Rights",
    body: "You may request access, correction, or deletion of your personal information, subject to legal and contractual limits.",
  },
];

export default function PrivacyPage() {
  const schema = privacyJsonLd();

  return (
    <main className="bg-white">
      <Script
        id="privacy-jsonld"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <section className="relative overflow-hidden border-b border-slate-200 bg-slate-950">
        <div className="absolute inset-0 bg-[radial-gradient(700px_circle_at_20%_20%,rgba(59,130,246,0.35),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(700px_circle_at_80%_110%,rgba(14,165,233,0.20),transparent_55%)]" />
        <div className="relative mx-auto max-w-6xl px-4 py-12 sm:py-14">
          <nav className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/25 px-4 py-1.5 text-[11px] font-bold text-slate-300">
            <Link prefetch={false} href="/" className="hover:text-white">
              Home
            </Link>
            <span className="text-slate-500">/</span>
            <span className="text-slate-100">Privacy Policy</span>
          </nav>

          <div className="mt-6 grid gap-6 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <h1 className="text-4xl font-extrabold text-white sm:text-5xl">
                Privacy Policy
              </h1>
              <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-200">
                Mugnee IT Solutions serves clients in Bangladesh and worldwide.
                This policy explains how we collect, use, and protect data in a
                practical, transparent way.
              </p>
              <div className="mt-5 inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-extrabold text-white">
                Last updated: {LAST_UPDATED}
              </div>
            </div>
            <div className="lg:col-span-4">
              <div className="rounded-3xl border border-white/15 bg-white/10 p-5 backdrop-blur">
                <div className="text-sm font-extrabold text-white">
                  Coverage
                </div>
                <p className="mt-2 text-sm text-slate-200">
                  Bangladesh and worldwide clients, with privacy-first delivery.
                </p>
                <Link prefetch={false}
                  href="/contact"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-extrabold text-yellow-300"
                >
                  Contact support <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14">
        <div className="grid gap-8 lg:grid-cols-12">
          <aside className="lg:col-span-4">
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 lg:sticky lg:top-24">
              <p className="text-xs font-extrabold tracking-[0.24em] text-slate-500">
                QUICK NAV
              </p>
              <div className="mt-4 space-y-2">
                {sections.map((s) => (
                  <a
                    key={s.id}
                    href={`#${s.id}`}
                    className="block rounded-xl bg-white px-3 py-2 text-sm font-bold text-slate-700 ring-1 ring-slate-200 hover:text-slate-900"
                  >
                    {s.title}
                  </a>
                ))}
              </div>

              <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-4">
                <div className="flex items-center gap-2 text-sm font-extrabold text-slate-900">
                  <Lock className="h-4 w-4" /> Privacy Contact
                </div>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="mt-2 block text-sm font-semibold text-slate-700"
                >
                  {CONTACT_EMAIL_DISPLAY}
                </a>
              </div>
            </div>
          </aside>

          <div className="space-y-5 lg:col-span-8">
            {sections.map((s) => (
              <section
                id={s.id}
                key={s.id}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <h2 className="text-2xl font-extrabold text-slate-900">
                  {s.title}
                </h2>
                <p className="mt-3 text-sm leading-7 text-slate-700">{s.body}</p>
                {s.id === "rights" ? (
                  <p className="mt-3 text-sm leading-7 text-slate-700">
                    To make a request, contact us at{" "}
                    <a
                      className="font-extrabold text-slate-900"
                      href={`mailto:${CONTACT_EMAIL}`}
                    >
                      {CONTACT_EMAIL_DISPLAY}
                    </a>
                    .
                  </p>
                ) : null}
              </section>
            ))}

            <section className="rounded-3xl border border-slate-200 bg-slate-900 p-7 text-white">
              <div className="flex items-start gap-3">
                <ShieldCheck className="mt-1 h-5 w-5 text-yellow-300" />
                <div>
                  <h2 className="text-2xl font-extrabold">Contact</h2>
                  <p className="mt-3 text-sm leading-7 text-slate-200">
                    Mugnee IT Solutions
                    <br />
                    {CONTACT_ADDRESS}
                    <br />
                    Email: {CONTACT_EMAIL_DISPLAY}
                  </p>
                  <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-extrabold">
                    <Globe2 className="h-3.5 w-3.5" /> Serving Bangladesh and
                    worldwide
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}


