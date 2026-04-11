import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { ArrowRight, BadgeCheck, Globe2, Scale } from "lucide-react";

const SITE_URL =
  (process.env.NEXT_PUBLIC_SITE_URL || "https://mugneeit.com").replace(/\/$/, "");
const PAGE_PATH = "/terms";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}/`;
const LAST_UPDATED = "February 14, 2026";
const CONTACT_EMAIL = "mugnee.it%40gmail.com";
const CONTACT_EMAIL_DISPLAY = "mugnee.it at gmail.com";
const CONTACT_ADDRESS =
  "3rd Floor, 36-37 Umesh Datta Road, Bakshibazar, Dhaka - 1211, Bangladesh";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Terms and Conditions",
  description:
    "Terms and Conditions for Mugnee IT Solutions covering service scope, payment, intellectual property, support, and international service terms.",
  alternates: { canonical: PAGE_URL },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Terms and Conditions",
    description:
      "Read the service terms for working with Mugnee IT Solutions in Bangladesh and worldwide.",
    url: PAGE_URL,
    type: "website",
  },
};

function termsJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Terms and Conditions",
    url: PAGE_URL,
    description:
      "Terms governing service engagement, delivery scope, and support obligations.",
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
    id: "scope",
    title: "Service Scope",
    body: "Project scope, deliverables, timeline, and revisions are defined in the quotation or proposal. Work beyond approved scope may require timeline and cost adjustments.",
  },
  {
    id: "payments",
    title: "Payments",
    body: "Payment terms are specified in your proposal or invoice. Delayed payments may delay delivery or support schedules. Any third-party platform, plugin, hosting, or software fees are generally the client's responsibility unless explicitly included.",
  },
  {
    id: "client",
    title: "Client Responsibilities",
    body: "Clients must provide required content, access credentials, legal usage rights for supplied assets, and timely feedback. Delays in these items can affect timelines.",
  },
  {
    id: "ip",
    title: "Intellectual Property",
    body: "Upon full payment, rights to final approved deliverables are transferred to the client, excluding third-party licensed assets, frameworks, and tools that remain under their own licenses.",
  },
  {
    id: "support",
    title: "Support and Warranty",
    body: "Post-delivery support is provided according to the agreed package or support plan. We fix implementation issues within agreed scope; new features or third-party changes are handled as separate work.",
  },
  {
    id: "liability",
    title: "Limitation of Liability",
    body: "We provide services using reasonable professional standards. However, we are not liable for indirect losses, third-party platform outages, policy changes, or client-side misuse of delivered systems.",
  },
  {
    id: "law",
    title: "Governing Law and International Engagement",
    body: "These terms are generally governed by applicable laws of Bangladesh unless a separate contract states otherwise. For international clients, cross-border compliance and dispute terms may be customized by written agreement.",
  },
];

export default function TermsPage() {
  const schema = termsJsonLd();

  return (
    <main className="bg-white">
      <Script
        id="terms-jsonld"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <section className="relative overflow-hidden border-b border-slate-200 bg-slate-950">
        <div className="absolute inset-0 bg-[radial-gradient(700px_circle_at_10%_20%,rgba(250,204,21,0.28),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(700px_circle_at_90%_110%,rgba(56,189,248,0.18),transparent_55%)]" />
        <div className="relative mx-auto max-w-6xl px-4 py-12 sm:py-14">
          <nav className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/25 px-4 py-1.5 text-[11px] font-bold text-slate-300">
            <Link prefetch={false} href="/" className="hover:text-white">
              Home
            </Link>
            <span className="text-slate-500">/</span>
            <span className="text-slate-100">Terms and Conditions</span>
          </nav>

          <div className="mt-6 grid gap-6 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <h1 className="text-4xl font-extrabold text-white sm:text-5xl">
                Terms and Conditions
              </h1>
              <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-200">
                These terms apply to services provided by Mugnee IT Solutions to
                clients in Bangladesh and internationally.
              </p>
              <div className="mt-5 inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-extrabold text-white">
                Last updated: {LAST_UPDATED}
              </div>
            </div>
            <div className="lg:col-span-4">
              <div className="rounded-3xl border border-white/15 bg-white/10 p-5 backdrop-blur">
                <div className="text-sm font-extrabold text-white">
                  Service Standard
                </div>
                <p className="mt-2 text-sm text-slate-200">
                  Transparent scope, fair terms, and cross-border friendly
                  engagement.
                </p>
                <Link prefetch={false}
                  href="/contact"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-extrabold text-yellow-300"
                >
                  Contact legal desk <ArrowRight className="h-4 w-4" />
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
                  <Scale className="h-4 w-4" /> Legal Contact
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
              </section>
            ))}

            <section className="rounded-3xl border border-slate-200 bg-slate-900 p-7 text-white">
              <div className="flex items-start gap-3">
                <BadgeCheck className="mt-1 h-5 w-5 text-yellow-300" />
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
                    <Globe2 className="h-3.5 w-3.5" /> Bangladesh and worldwide
                    service terms
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


