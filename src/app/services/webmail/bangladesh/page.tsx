import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, MapPin } from "lucide-react";

const SITE_URL = "https://mugneeit.com";
const PAGE_PATH = "/services/webmail/bangladesh";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;
const KEYWORD = "Webmail Support Bangladesh";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: `${KEYWORD}`,
  description:
    "Webmail support in Bangladesh: setup, DNS (MX/SPF/DKIM/DMARC), deliverability fixes, and ongoing help.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: KEYWORD,
    description: "Local webmail support with clean DNS and inbox-safe setup.",
    url: PAGE_URL,
    siteName: "Mugnee IT Solutions",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function WebmailBangladeshPage() {
  return (
    <main className="bg-white">
      <section className="mx-auto max-w-6xl px-4 pt-16 pb-16">
        <nav className="text-xs font-bold text-slate-500">
          <Link prefetch={false} href="/" className="hover:text-slate-900">Home</Link>
          <span className="mx-2">/</span>
          <Link prefetch={false} href="/services" className="hover:text-slate-900">Services</Link>
          <span className="mx-2">/</span>
          <Link prefetch={false} href="/services/webmail" className="hover:text-slate-900">Webmail</Link>
          <span className="mx-2">/</span>
          <span className="text-slate-900">Bangladesh</span>
        </nav>

        <div className="mt-8 grid gap-8 lg:grid-cols-[1.1fr_.9fr] lg:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border bg-white px-4 py-2 text-xs font-extrabold text-slate-700">
              <MapPin className="h-4 w-4 text-emerald-700" />
              LOCAL SUPPORT
            </div>
            <h1 className="mt-4 text-4xl font-extrabold text-slate-900 sm:text-5xl">
              {KEYWORD}
            </h1>
            <p className="mt-4 text-base leading-7 text-slate-600">
              We set up business email, configure DNS records, and fix deliverability issues
              with a Bangladeshâ€‘friendly workflow and globalâ€‘standard quality.
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <Bullet text={`${KEYWORD} setup & migration`} />
              <Bullet text={`${KEYWORD} DNS record fixes`} />
              <Bullet text={`${KEYWORD} spam reduction`} />
              <Bullet text={`${KEYWORD} ongoing support`} />
            </div>

            <div className="mt-7 flex flex-wrap gap-3">
              <Link prefetch={false}
                href="/contact/"
                className="rounded-2xl bg-slate-900 px-6 py-3 text-sm font-extrabold text-white hover:bg-slate-800"
              >
                Get Quote <ArrowRight className="inline h-4 w-4" />
              </Link>
              <Link prefetch={false}
                href="/services/webmail"
                className="rounded-2xl border px-6 py-3 text-sm font-extrabold text-slate-900 hover:bg-slate-50"
              >
                View Main Service
              </Link>
            </div>
          </div>

          <div className="rounded-3xl border bg-slate-50 p-6">
            <div className="text-sm font-extrabold text-slate-900">
              {KEYWORD} benefits
            </div>
            <div className="mt-4 space-y-3 text-sm text-slate-700">
              <Mini text={`${KEYWORD} with clean DNS`} />
              <Mini text={`${KEYWORD} for inbox trust`} />
              <Mini text={`${KEYWORD} fast delivery`} />
              <Mini text={`${KEYWORD} documentation`} />
            </div>
          </div>
        </div>
      </section>
      <Section
        title={`${KEYWORD} solutions`}
        items={[
          `Tailored ${KEYWORD} strategy for your business goals`,
          "Clear scope, timeline, and delivery milestones",
          "Google-safe execution with clean structure",
          "Ongoing support and post-launch guidance",
        ]}
      />
      <Section
        title={`${KEYWORD} benefits`}
        items={[
          `Clear ${KEYWORD} execution aligned with business goals`,
          "Structured implementation with clean handover",
          "Performance, quality, and maintainability focus",
          "Post-launch support and improvement guidance",
        ]}
      />
      <Section
        title={`${KEYWORD} comparison`}
        items={[
          `${KEYWORD}: tailored implementation for business-specific goals`,
          "Generic alternatives: faster start, but limited control for advanced needs",
          "Low-cost quick setups: lower upfront budget, variable long-term quality",
          "Managed delivery model: clearer scope, QA, and post-launch support",
        ]}
      />
      <Section
        title={`${KEYWORD} how it works`}
        items={[
          "Access check for domain/email provider",
          "MX/SPF/DKIM/DMARC setup or fixes",
          "Send/receive tests and verification",
          "Documentation + support options",
        ]}
      />

      <Section
        title={`${KEYWORD} deliverables`}
        items={[
          "DNS record checklist",
          "Change log + verification notes",
          "Mailbox setup details",
          "Safe sending guidance",
        ]}
      />

      <Section
        title={`${KEYWORD} support approach`}
        items={[
          "Responsible configuration",
          "Rateâ€‘limited troubleshooting",
          "Reâ€‘run support if needed",
          "Clear documentation",
        ]}
      />

      <Section
        title={`${KEYWORD} intent fit`}
        items={[
          `Best for teams needing ${KEYWORD} with clear scope and measurable outcomes`,
          "Useful when existing setup is messy and needs structured implementation",
          "Focused on Google-safe execution: no spam tactics, no keyword stuffing",
          "Built for long-term maintainability with documented handover",
        ]}
      />

      <Faq
        title={`${KEYWORD} FAQ`}
        items={[
          ["Do you support cPanel/Zoho/Workspace?", "Yes, based on access."],
          ["Do you set MX/SPF/DKIM/DMARC?", "Yes, with verification."],
          ["Can you fix spam issues?", "Yes, we diagnose and improve inboxing."],
          ["Do you provide support later?", "Yes, ongoing support is available."],
        ]}
      />
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
      <span className="mt-1 h-2 w-2 rounded-full bg-emerald-600" />
      <span>{text}</span>
    </div>
  );
}

function Section({ title, items }: { title: string; items: string[] }) {
  return (
    <section className="mx-auto max-w-6xl px-4 pb-12">
      <h2 className="text-2xl font-extrabold text-slate-900">{title}</h2>
      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        {items.map((t) => (
          <div key={t} className="rounded-2xl border border-slate-200 bg-white p-4 text-sm text-slate-700">
            {t}
          </div>
        ))}
      </div>
    </section>
  );
}

function Faq({
  title,
  items,
}: {
  title: string;
  items: [string, string][];
}) {
  return (
    <section className="mx-auto max-w-6xl px-4 pb-16">
      <h2 className="text-2xl font-extrabold text-slate-900">{title}</h2>
      <p className="mt-2 max-w-3xl text-sm leading-7 text-slate-600">Answers are specific to this service scope to avoid generic or duplicated FAQ content.</p>
      <div className="mt-6 grid gap-4 lg:grid-cols-2">
        {items.map(([q, a]) => (
          <details key={q} className="rounded-2xl border border-slate-200 bg-white p-5">
            <summary className="cursor-pointer text-sm font-extrabold text-slate-900">{q}</summary>
            <p className="mt-2 text-sm leading-7 text-slate-600">{a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}








