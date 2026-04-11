import type { Metadata } from "next";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Mail,
  Globe,
  ShieldCheck,
  LifeBuoy,
  Server,
  Cloud,
  FileText,
  RefreshCcw,
  Router,
  Link2,
  ClipboardList,
  Wrench,
  BadgeCheck,
} from "lucide-react";
import {
  ServiceCustomerGuide,
  ServiceFlowStrip,
  ServiceQuickSummary,
  ServiceUseCasesGrid,
} from "@/components/sections/ServiceVisualBlocks";

/** âœ… Production env:
 * NEXT_PUBLIC_SITE_URL=https://mugneeit.com
 */
const SITE_URL =
  (process.env.NEXT_PUBLIC_SITE_URL || "https://mugneeit.com").replace(/\/$/, "");

const PAGE_PATH = "/services/webmail";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

/** âœ… Put image in: /public/images/webmail-support-hero.webp */
const HERO_BG = "/images/webmail-support-hero.webp";

/** âœ… SEO (targeted keyword in title) */
const META_TITLE =
  "Webmail Support | Email Setup, DNS (MX SPF DKIM DMARC) & Fixes";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: META_TITLE,
  description:
    "Webmail support & email setup service: domain/DNS configuration, MX/SPF/DKIM/DMARC, email migration, spam/deliverability fixes, cPanel/Zoho/Google Workspace/M365 support, and ongoing maintenance.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Webmail Support â€” Email Setup + DNS + Deliverability Fix",
    description:
      "We handle webmail setup, DNS records (MX/SPF/DKIM/DMARC), migration, troubleshooting and ongoing support.",
    url: PAGE_URL,
    siteName: "Mugnee IT Solutions",
    type: "website",
    images: [
      {
        url: HERO_BG,
        width: 1200,
        height: 630,
        alt: "Webmail Support",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Webmail Support â€” Email Setup + DNS + Deliverability Fix",
    description:
      "Webmail setup, DNS (MX/SPF/DKIM/DMARC), migration, troubleshooting and ongoing support.",
    images: [HERO_BG],
  },
  robots: { index: true, follow: true },
};

/* ================= DATA ================= */

const quickLinks = [
  ["#webmail-support-what-we-fix", "What we fix"],
  ["#webmail-support-deliverability", "Deliverability (SPF/DKIM/DMARC)"],
  ["#webmail-support-process", "Process"],
  ["#webmail-support-deliverables", "Deliverables"],
  ["#webmail-support-providers", "Providers we support"],
  ["#packages", "Packages"],
  ["#webmail-support-faq", "FAQ"],
];

const whatWeFix = [
  {
    icon: Router,
    title: "Webmail Support for Domain & DNS Configuration",
    desc: "Nameserver, A/CNAME/TXT records, routing, propagation checks and safe updates.",
    tags: ["DNS", "Domain", "Records"],
  },
  {
    icon: Mail,
    title: "Webmail Support for Business Email Setup",
    desc: "Mailbox creation, aliases, forwarding, devices setup and access policy.",
    tags: ["Email setup", "Mailbox", "Forwarding"],
  },
  {
    icon: ShieldCheck,
    title: "Webmail Support for MX / SPF / DKIM / DMARC",
    desc: "Email authentication records configured to reduce spam and improve trust.",
    tags: ["MX", "SPF", "DKIM/DMARC"],
  },
  {
    icon: RefreshCcw,
    title: "Webmail Support for Email Migration",
    desc: "Move emails safely (IMAP), preserve folders, minimize downtime, verification checks.",
    tags: ["Migration", "IMAP", "Verification"],
  },
  {
    icon: LifeBuoy,
    title: "Webmail Support for Troubleshooting",
    desc: "Send/receive issues, bounce errors, login problems, quota, SMTP/IMAP settings.",
    tags: ["Troubleshoot", "Bounce", "SMTP/IMAP"],
  },
  {
    icon: Wrench,
    title: "Webmail Support for Ongoing Maintenance",
    desc: "Monitoring, periodic checks, policy updates and documentation for future safety.",
    tags: ["Support", "Monitoring", "Maintenance"],
  },
];

const deliverabilityChecklist = [
  "MX record points to correct mail server",
  "SPF includes valid sending sources (avoid multiple SPF conflicts)",
  "DKIM enabled + DNS published correctly",
  "DMARC policy added (monitor â†’ quarantine/reject as needed)",
  "Reverse DNS / HELO basics (where applicable)",
  "Mailbox quota + forwarding rules checked",
];

const deliverables = [
  {
    icon: FileText,
    title: "Webmail Support Change Log",
    desc: "What was changed in DNS/email settings (safe for future).",
  },
  {
    icon: ClipboardList,
    title: "Webmail Support Checklist Report",
    desc: "MX/SPF/DKIM/DMARC status + next steps.",
  },
  {
    icon: BadgeCheck,
    title: "Webmail Support Verified Setup",
    desc: "Send/receive tested + auth verified (where possible).",
  },
  {
    icon: Cloud,
    title: "Webmail Support Backup Guidance",
    desc: "Backup/export guidance to reduce future risk.",
  },
];

const processSteps = [
  {
    n: "01",
    icon: ClipboardList,
    title: "Webmail Support Discovery",
    desc: "Domain/provider access check + issue diagnosis + plan.",
  },
  {
    n: "02",
    icon: Router,
    title: "Webmail Support DNS Updates",
    desc: "MX/SPF/DKIM/DMARC, routing and safe propagation checks.",
  },
  {
    n: "03",
    icon: Mail,
    title: "Webmail Support Setup/Migration",
    desc: "Mailboxes, forwarding, device config, migration (if needed).",
  },
  {
    n: "04",
    icon: ShieldCheck,
    title: "Webmail Support Deliverability Fix",
    desc: "Spam reduction steps + validation + safer sending guidance.",
  },
  {
    n: "05",
    icon: Wrench,
    title: "Webmail Support Handover",
    desc: "Documentation + change log + future-proof notes.",
  },
  {
    n: "06",
    icon: LifeBuoy,
    title: "Webmail Support Ongoing Help",
    desc: "Support option for ongoing monitoring & quick fixes.",
  },
];

const providers = [
  {
    icon: Globe,
    title: "cPanel / Web Hosting Panels",
    desc: "Most hosting control panels with DNS + email access.",
  },
  {
    icon: Mail,
    title: "Zoho Mail",
    desc: "Setup, migration, SPF/DKIM/DMARC and mailbox policies.",
  },
  {
    icon: Cloud,
    title: "Google Workspace",
    desc: "DNS, Gmail routing basics, deliverability best practices.",
  },
  {
    icon: Server,
    title: "Microsoft 365",
    desc: "DNS/auth records + troubleshooting depending on access.",
  },
];

const faqs = [
  {
    q: "What is webmail support service?",
    a: "Webmail support means configuring business email + DNS records, fixing send/receive issues, improving deliverability (MX/SPF/DKIM/DMARC), handling migration, and providing ongoing troubleshooting and maintenance.",
  },
  {
    q: "Do you set up MX, SPF, DKIM and DMARC?",
    a: "Yes. We configure and verify MX/SPF/DKIM/DMARC based on your provider and sending needs. This helps reduce spam issues and improves email trust.",
  },
  {
    q: "Can you fix email going to spam?",
    a: "Yes. We check SPF/DKIM/DMARC, DNS conflicts, basic reputation signals, and provide safe sending guidance. Some cases need time due to mailbox/provider reputation.",
  },
  {
    q: "Do you support cPanel, Zoho, Google Workspace, Microsoft 365?",
    a: "Yesâ€”depending on your access level. We support most common email providers and hosting panels.",
  },
  {
    q: "Can you migrate existing emails without losing data?",
    a: "We usually migrate using safe methods (IMAP/official tools) and verify folders, timestamps and mail flow. Final results depend on provider limitations and credentials.",
  },
  {
    q: "How long does DNS propagation take?",
    a: "It can be quick or take hours depending on TTL and caching. We set safe TTL (when possible) and verify using multiple checks.",
  },
  {
    q: "Do you provide documentation after the job?",
    a: "Yes. We provide a clear change log (DNS records updated, mailbox actions, and verification notes).",
  },
  {
    q: "Do you offer ongoing webmail support?",
    a: "Yes. We can provide monthly/ongoing support for monitoring, quick fixes and configuration updates.",
  },
];

const keywordPages = [
  {
    title: "Webmail Support Bangladesh",
    desc: "Local support for setup, DNS, and deliverability fixes.",
    href: "/services/webmail/bangladesh",
  },
  {
    title: "Business Email Setup Service",
    desc: "Mailbox setup, DNS records, and device configuration.",
    href: "/services/webmail/business-email-setup",
  },
  {
    title: "Email Migration Service",
    desc: "Safe migration with verification and minimal downtime.",
    href: "/services/webmail/email-migration",
  },
  {
    title: "SPF DKIM DMARC Setup",
    desc: "Authentication records to reduce spam issues.",
    href: "/services/webmail/spf-dkim-dmarc",
  },
  {
    title: "Email Deliverability Fix",
    desc: "Inbox placement improvements and diagnostics.",
    href: "/services/webmail/deliverability-fix",
  },
];

function buildJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        name: "Mugnee IT Solutions",
        url: SITE_URL,
        logo: `${SITE_URL}/logo.png`,
      },
      { "@type": "WebSite", name: "Mugnee IT Solutions", url: SITE_URL },
      {
        "@type": "WebPage",
        name: META_TITLE,
        url: PAGE_URL,
        description:
          "Webmail support service: email setup, DNS (MX/SPF/DKIM/DMARC), migration, troubleshooting and deliverability fixes.",
        isPartOf: { "@type": "WebSite", name: "Mugnee IT Solutions", url: SITE_URL },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
          { "@type": "ListItem", position: 2, name: "Services", item: `${SITE_URL}/services` },
          { "@type": "ListItem", position: 3, name: "Webmail Support", item: PAGE_URL },
        ],
      },
      {
        "@type": "Service",
        name: "Webmail Support",
        serviceType: "Webmail Setup & Support / Email Deliverability Fix",
        provider: { "@type": "Organization", name: "Mugnee IT Solutions", url: SITE_URL },
        areaServed: ["Bangladesh", "Worldwide"],
        url: PAGE_URL,
        description:
          "Webmail support service for business email setup, DNS configuration (MX/SPF/DKIM/DMARC), migration and troubleshooting.",
        // âœ… Google-safe: no fake price
        potentialAction: {
          "@type": "RequestQuoteAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: `${SITE_URL}/contact/`,
          },
        },
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

export default function WebmailSupportPage() {
  const jsonLd = buildJsonLd();
  const providerUseCases = providers.map((provider) => ({
    icon: provider.icon,
    title: provider.title,
    desc: provider.desc,
    pills: ["Setup", "Fixes", "Support"],
  }));
  const flowSteps = processSteps.slice(0, 4).map((step) => ({
    icon: step.icon,
    title: step.title,
    desc: step.desc,
  }));

  return (
    <main className="bg-white">
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ===========================
          HERO (IMAGE-FREE GRADIENT) + FIXED HEADER SAFE
         =========================== */}
      <section className="relative isolate overflow-hidden bg-slate-950">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_12%_8%,rgba(56,189,248,0.22),transparent_34%),radial-gradient(circle_at_84%_14%,rgba(250,204,21,0.18),transparent_36%),radial-gradient(circle_at_68%_82%,rgba(79,70,229,0.24),transparent_42%),linear-gradient(120deg,#020617_0%,#0b1932_48%,#21173f_100%)]" />
        <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.18] [background:radial-gradient(circle_at_1px_1px,rgba(255,255,255,.35)_1px,transparent_0)] [background-size:20px_20px]" />
        <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-slate-900/20 via-transparent to-slate-950/45" />

        {/* âœ… FIX: header overlap + reduce hero height */}
        <div className="mx-auto max-w-6xl px-4 pb-10 pt-24 sm:pb-14 sm:pt-28">
          <nav className="text-xs font-bold text-white/70">
            <Link prefetch={false} href="/" className="hover:text-white">
              Home
            </Link>
            <span className="mx-2 text-white/45">/</span>
            <Link prefetch={false} href="/services" className="hover:text-white">
              Services
            </Link>
            <span className="mx-2 text-white/45">/</span>
            <span className="text-white">Webmail Support</span>
          </nav>

          <div className="mt-7 grid gap-10 lg:grid-cols-2 lg:items-center">
            {/* LEFT */}
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-extrabold text-white backdrop-blur">
                <Sparkles className="h-4 w-4 text-yellow-300" />
                BUSINESS MAIL INFRA SUPPORT
              </div>

              <h1 className="mt-5 text-4xl font-extrabold leading-[1.05] text-white sm:text-5xl">
                Webmail Support for
                <br />
                <span className="text-yellow-300">stable business email delivery</span>
              </h1>

              <p className="mt-4 max-w-xl text-base leading-7 text-white/80">
                Business email setup, DNS configuration, MX/SPF/DKIM/DMARC, migration,
                troubleshooting and ongoing support. Clear checklist + clean execution.
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <MiniBulletDark icon={Mail} text="Webmail support: setup + migration" />
                <MiniBulletDark icon={Router} text="DNS: MX/SPF/DKIM/DMARC configuration" />
                <MiniBulletDark icon={ShieldCheck} text="Deliverability fix + spam reduction" />
                <MiniBulletDark icon={LifeBuoy} text="Ongoing webmail support + monitoring" />
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href="/contact/"
                  className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-yellow-400 px-7 py-3.5 text-sm font-extrabold text-slate-900 shadow-[0_20px_45px_rgba(15,23,42,.35)] transition hover:-translate-y-0.5 hover:bg-yellow-300"
                >
                  Get Support
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </a>

                <a
                  href="#packages"
                  className="group inline-flex items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/10 px-7 py-3.5 text-sm font-extrabold text-white backdrop-blur transition hover:bg-white/15"
                >
                  View Packages
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </a>
              </div>

              <p className="sr-only">
                webmail support, email setup service, DNS configuration, MX SPF DKIM DMARC, email
                migration, spam fix, deliverability fix, Mugnee IT Solutions
              </p>
            </div>

            {/* RIGHT: support console mock (unchanged look) */}
            <div className="relative">
              <div className="overflow-hidden rounded-[28px] border border-white/15 bg-white/5 shadow-[0_25px_80px_rgba(0,0,0,0.45)] backdrop-blur">
                <div className="flex items-center justify-between gap-3 border-b border-white/10 bg-white/5 px-4 py-3">
                  <div className="flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-red-400" />
                    <span className="h-3 w-3 rounded-full bg-yellow-400" />
                    <span className="h-3 w-3 rounded-full bg-emerald-400" />
                  </div>
                  <div className="text-xs font-extrabold text-white/80">Support Console</div>
                  <div className="rounded-full bg-yellow-400 px-3 py-1 text-xs font-extrabold text-slate-900">
                    ONLINE
                  </div>
                </div>

                <div className="p-6">
                  <div className="mt-5 rounded-3xl border border-white/10 bg-white/5 p-5">
                    <div className="flex items-center justify-between">
                      <div className="text-sm font-extrabold text-white">Setup Checklist</div>
                      <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-extrabold text-white/90">
                        In progress
                      </span>
                    </div>

                    <div className="mt-4 grid gap-3">
                      <CheckRowDark text="MX records configured" />
                      <CheckRowDark text="SPF record added" />
                      <CheckRowDark text="DKIM enabled + published" />
                      <CheckRowDark text="DMARC policy (recommended)" />
                    </div>
                  </div>

                  <div className="mt-5 grid gap-4 sm:grid-cols-2">
                    <ActionCardDark
                      icon={Globe}
                      title="Domain & DNS"
                      desc="Nameserver, A/CNAME, TXT records, routing."
                    />
                    <ActionCardDark
                      icon={Mail}
                      title="Webmail & Migration"
                      desc="Mailbox setup, forwarding, migration support."
                    />
                    <ActionCardDark
                      icon={ShieldCheck}
                      title="Deliverability"
                      desc="Spam fixes, auth records, guidance."
                    />
                    <ActionCardDark
                      icon={RefreshCcw}
                      title="Troubleshooting"
                      desc="Bounce errors, login, send/receive issues."
                    />
                  </div>
                </div>
              </div>

              <div className="pointer-events-none absolute -left-4 top-10 hidden sm:block">
                <FloatNoteDark title="Email Auth" desc="SPF / DKIM / DMARC setup" />
              </div>
              <div className="pointer-events-none absolute -right-4 bottom-10 hidden sm:block">
                <FloatNoteDark title="Support" desc="Fixes + migration help" />
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-6xl px-4">
          <div className="h-px w-full bg-white/10" />
        </div>
      </section>

      <ServiceCustomerGuide pillar="webmail" />

      <ServiceQuickSummary
        title="Webmail support snapshot"
        intro="These visual cards explain the most common email setup and fix areas without forcing visitors through heavy text first."
        items={whatWeFix.slice(0, 4)}
      />

      <ServiceUseCasesGrid
        title="Platforms and providers we help with"
        intro="A simple breakdown of the email environments where this service is most useful."
        items={providerUseCases}
      />

      <ServiceFlowStrip
        title="Webmail support workflow"
        intro="A short process strip so visitors can see how diagnosis, DNS updates, testing, and handover happen."
        steps={flowSteps}
      />

      {/* ===========================
          SOLUTION
         =========================== */}
      <section id="webmail-support-solution" className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <p className="text-xs font-extrabold tracking-[0.28em] text-slate-500">
            WEBMAIL SUPPORT SOLUTION
          </p>
          <h2 className="mt-2 text-3xl font-extrabold text-slate-900">
            Webmail support solution for stable business email
          </h2>
          <p className="mt-2 max-w-3xl text-sm leading-7 text-slate-600">
            We solve the full email stack: provider setup, DNS authentication, migration safety,
            troubleshooting, and ongoing maintenance to keep communication reliable.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              "End-to-end setup for business email, mailboxes, and routing rules",
              "Correct MX, SPF, DKIM, and DMARC records with validation checks",
              "Migration and troubleshooting flow that reduces downtime risk",
              "Documented handover so your team can manage future changes safely",
            ].map((point) => (
              <div key={point} className="flex items-start gap-2 text-sm text-slate-700">
                <span className="mt-1 grid h-5 w-5 place-items-center rounded-full bg-emerald-50 ring-1 ring-emerald-100">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
                </span>
                <span className="leading-7">{point}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link prefetch={false}
              href="/contact/"
              className="inline-flex items-center gap-2 rounded-2xl bg-slate-900 px-6 py-3 text-sm font-extrabold text-white hover:bg-slate-800"
            >
              Get Webmail Solution <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="#webmail-support-process"
              className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-6 py-3 text-sm font-extrabold text-slate-900 hover:bg-slate-100"
            >
              View process <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      <section id="webmail-support-benefits" className="mx-auto max-w-6xl px-4 pb-14">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">
          <p className="text-xs font-extrabold tracking-[0.28em] text-slate-500">WEBMAIL SUPPORT BENEFITS</p>
          <h2 className="mt-2 text-3xl font-extrabold text-slate-900">Benefits of this webmail setup</h2>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {[
              "Stable business email flow with correct DNS authentication",
              "Reduced spam risk through proper MX, SPF, DKIM, and DMARC setup",
              "Lower downtime with structured troubleshooting and migration process",
              "Clear handover documentation for future maintenance and updates",
            ].map((item) => (
              <div key={item} className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm font-semibold text-slate-700">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="webmail-support-comparison" className="mx-auto max-w-6xl px-4 pb-14">
        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
          <p className="text-xs font-extrabold tracking-[0.28em] text-slate-500">WEBMAIL COMPARISON</p>
          <h2 className="mt-2 text-3xl font-extrabold text-slate-900">Webmail support vs quick DNS fixes</h2>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {[
              "Full webmail support: setup, auth records, migration, and documentation",
              "Quick DNS-only fix: fast changes, but limited end-to-end verification",
              "Provider-only ticket support: useful, but slower for business-specific priorities",
              "Managed support model: stronger stability, troubleshooting, and long-term upkeep",
            ].map((item) => (
              <div key={item} className="rounded-2xl border border-slate-200 bg-white p-4 text-sm font-semibold text-slate-700">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===========================
          SEO: QUICK LINKS (TOC)
         =========================== */}
      <section className="mx-auto max-w-6xl px-4 py-10">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="text-sm font-extrabold text-slate-900">Webmail Support â€” Quick Links</div>
          <div className="mt-4 flex flex-wrap gap-3">
            {quickLinks.map(([href, label]) => (
              <a
                key={href}
                href={href}
                className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-extrabold text-slate-900 hover:bg-slate-100"
              >
                <Link2 className="h-4 w-4" /> {label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ===========================
          WHAT WE FIX (TARGETED)
         =========================== */}
      <section id="webmail-support-what-we-fix" className="mx-auto max-w-6xl px-4 py-14">
        <p className="text-xs font-extrabold tracking-[0.28em] text-slate-500">
          WEBMAIL SUPPORT WHAT WE FIX
        </p>
        <h2 className="mt-2 text-3xl font-extrabold text-slate-900">
          Webmail Support for email setup, DNS configuration
        </h2>
        <p className="mt-2 max-w-3xl text-sm leading-7 text-slate-600">
          One place to fix your webmail issuesâ€”domain/DNS, email setup, MX/SPF/DKIM/DMARC, migration,
          deliverability and ongoing support.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whatWeFix.map((f) => (
            <FeatureCard key={f.title} icon={f.icon} title={f.title} desc={f.desc} tags={f.tags} />
          ))}
        </div>
      </section>

      {/* ===========================
          DELIVERABILITY (TARGETED)
         =========================== */}
      <section id="webmail-support-deliverability" className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <p className="text-xs font-extrabold tracking-[0.28em] text-slate-500">
            EMAIL DELIVERABILITY FIX
          </p>
          <h2 className="mt-2 text-3xl font-extrabold text-slate-900">
            Webmail Support for MX / SPF / DKIM / DMARC fixes
          </h2>
          <p className="mt-2 max-w-3xl text-sm leading-7 text-slate-600">
            If email goes to spam or doesnâ€™t reach inboxâ€”authentication and DNS correctness is the
            first step.
          </p>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="text-sm font-extrabold text-slate-900">Deliverability checklist</div>
              <div className="mt-4 space-y-3">
                {deliverabilityChecklist.map((t) => (
                  <div key={t} className="flex items-start gap-2 text-sm text-slate-700">
                    <span className="mt-1 grid h-5 w-5 place-items-center rounded-full bg-emerald-50 ring-1 ring-emerald-100">
                      <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
                    </span>
                    <span className="leading-7">{t}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="text-sm font-extrabold text-slate-900">What you get</div>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                We donâ€™t just â€œadd recordsâ€â€”we verify and document everything so your email stays
                stable.
              </p>

              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                {deliverables.map((d) => (
                  <SimpleCard key={d.title} icon={d.icon} title={d.title} desc={d.desc} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===========================
          PROCESS (TARGETED)
         =========================== */}
      <section id="webmail-support-process" className="mx-auto max-w-6xl px-4 py-14">
        <p className="text-xs font-extrabold tracking-[0.28em] text-slate-500">
          WEBMAIL SUPPORT PROCESS
        </p>
        <h2 className="mt-2 text-3xl font-extrabold text-slate-900">
          Webmail Support process â€” diagnose â†’ fix â†’ verify
        </h2>
        <p className="mt-2 max-w-3xl text-sm leading-7 text-slate-600">
          Clean workflow means less downtime and fewer repeated mistakes.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {processSteps.map((s) => (
            <StepCard key={s.n} n={s.n} icon={s.icon} title={s.title} desc={s.desc} />
          ))}
        </div>
      </section>

      {/* ===========================
          PROVIDERS (TARGETED)
         =========================== */}
      <section id="webmail-support-providers" className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <p className="text-xs font-extrabold tracking-[0.28em] text-slate-500">
            WEBMAIL SUPPORT PROVIDERS
          </p>
          <h2 className="mt-2 text-3xl font-extrabold text-slate-900">
            Webmail Support for cPanel, Zoho, Workspace & Microsoft 365
          </h2>
          <p className="mt-2 max-w-3xl text-sm leading-7 text-slate-600">
            Access depends on your provider/admin credentialsâ€”share details and weâ€™ll confirm scope.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {providers.map((p) => (
              <SimpleCard key={p.title} icon={p.icon} title={p.title} desc={p.desc} />
            ))}
          </div>
        </div>
      </section>

      {/* ===========================
          PACKAGES (NO PRICE)
         =========================== */}
      <section id="packages" className="mx-auto max-w-6xl px-4 py-14">
        <p className="text-xs font-extrabold tracking-[0.28em] text-slate-500">
          WEBMAIL SUPPORT PACKAGES
        </p>
        <h2 className="mt-2 text-3xl font-extrabold text-slate-900">
          Webmail Support â€” get quotation based on your issue
        </h2>
        <p className="mt-2 max-w-3xl text-sm leading-7 text-slate-600">
          No fixed public price. Final quotation depends on provider, access, migration needs and
          deliverability complexity.
        </p>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          <PlanCard
            title="Quick Fix"
            subtitle="Small issues & setup"
            items={[
              "DNS update / mailbox setup",
              "Basic troubleshooting",
              "1 follow-up",
              "Verification checklist",
            ]}
            cta="Get Quotation"
          />
          <PlanCard
            featured
            title="Setup + Migration"
            subtitle="Full setup / move emails"
            items={[
              "Provider setup",
              "MX/SPF/DKIM/DMARC",
              "Migration support",
              "Documentation handover",
            ]}
            cta="Get Quotation"
          />
          <PlanCard
            title="Ongoing Support"
            subtitle="Monthly monitoring + help"
            items={["Priority response", "Regular checks", "Issue prevention", "Support reporting"]}
            cta="Get Quotation"
          />
        </div>

        <div className="mt-10 rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <div className="text-lg font-extrabold text-slate-900">Need Webmail Support today?</div>
              <p className="mt-1 text-sm text-slate-600">
                Share your domain + providerâ€” weâ€™ll reply with checklist + scope + quotation.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Link prefetch={false}
                href="/contact/"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-yellow-400 px-6 py-3 text-sm font-extrabold text-slate-900 transition hover:bg-yellow-500"
              >
                Get Support <ArrowRight className="h-4 w-4" />
              </Link>
              <Link prefetch={false}
                href="/services"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-6 py-3 text-sm font-extrabold text-slate-900 transition hover:bg-slate-50"
              >
                See all services <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===========================
          KEYWORD PAGES
         =========================== */}
      <section className="mx-auto max-w-6xl px-4 py-14">
        <p className="text-xs font-extrabold tracking-[0.28em] text-slate-500">
          WEBMAIL SUPPORT KEYWORDS
        </p>
        <h2 className="mt-2 text-3xl font-extrabold text-slate-900">
          Webmail Support pages by intent
        </h2>
        <p className="mt-2 max-w-3xl text-sm leading-7 text-slate-600">
          Targeted pages for common search intents. Each page is unique and focused.
        </p>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {keywordPages.map((k) => (
            <a
              key={k.href}
              href={k.href}
              className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="text-sm font-extrabold text-slate-900">{k.title}</div>
              <p className="mt-2 text-sm text-slate-600">{k.desc}</p>
              <div className="mt-4 inline-flex items-center gap-2 text-sm font-extrabold text-slate-900">
                View page <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* ===========================
          FAQ (EXPANDED)
         =========================== */}
      <section id="webmail-support-faq" className="mx-auto max-w-6xl px-4 py-14">
        <p className="text-xs font-extrabold tracking-[0.28em] text-slate-500">WEBMAIL SUPPORT FAQ</p>
        <h2 className="mt-2 text-3xl font-extrabold text-slate-900">
          Webmail Support FAQs â€” email setup, DNS, & migration 
        </h2>

        <div className="mt-10 grid gap-4 lg:grid-cols-2">
          {faqs.map((f) => (
            <details
              key={f.q}
              className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <summary className="cursor-pointer list-none text-sm font-extrabold text-slate-900">
                {f.q}
                <span className="float-right text-slate-400 transition group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 text-sm leading-7 text-slate-600">{f.a}</p>
            </details>
          ))}
        </div>
      </section>
    </main>
  );
}

/* ================= UI Bits ================= */

function MiniBulletDark({ icon: Icon, text }: { icon: LucideIcon; text: string }) {
  return (
    <div className="flex items-start gap-3 rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur">
      <div className="grid h-10 w-10 place-items-center rounded-2xl bg-white/10">
        <Icon className="h-5 w-5 text-white" />
      </div>
      <p className="text-sm font-semibold text-white/85 leading-6">{text}</p>
    </div>
  );
}

function CheckRowDark({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-2 rounded-2xl border border-white/10 bg-white/5 p-3">
      <span className="mt-0.5 grid h-6 w-6 place-items-center rounded-full bg-yellow-400 text-slate-900 text-xs font-extrabold">
        âœ“
      </span>
      <span className="text-sm font-semibold text-white/80 leading-6">{text}</span>
    </div>
  );
}

function ActionCardDark({ icon: Icon, title, desc }: { icon: LucideIcon; title: string; desc: string }) {
  return (
    <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-5 transition hover:-translate-y-1 hover:bg-white/10">
      <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-yellow-300/15 blur-2xl opacity-0 transition-opacity group-hover:opacity-100" />
      <div className="flex items-start gap-3">
        <div className="grid h-12 w-12 place-items-center rounded-2xl bg-yellow-400 text-slate-900">
          <Icon className="h-6 w-6" />
        </div>
        <div>
          <div className="text-sm font-extrabold text-white">{title}</div>
          <div className="mt-1 text-sm text-white/70">{desc}</div>
        </div>
      </div>
    </div>
  );
}

function FloatNoteDark({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/10 px-5 py-4 shadow-[0_20px_50px_rgba(0,0,0,0.35)] backdrop-blur">
      <div className="text-sm font-extrabold text-white">{title}</div>
      <div className="mt-1 text-xs text-white/75">{desc}</div>
    </div>
  );
}

function FeatureCard({
  icon: Icon,
  title,
  desc,
  tags,
}: {
  icon: LucideIcon;
  title: string;
  desc: string;
  tags: string[];
}) {
  return (
    <div className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-blue-200/55 blur-2xl opacity-0 transition-opacity group-hover:opacity-100" />
      <div className="flex items-center gap-3">
        <div className="grid h-12 w-12 place-items-center rounded-2xl bg-slate-900">
          <Icon className="h-6 w-6 text-white" />
        </div>
        <div>
          <h3 className="text-lg font-extrabold text-slate-900">{title}</h3>
          <p className="mt-1 text-sm text-slate-600">{desc}</p>
        </div>
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        {tags.map((t) => (
          <span
            key={t}
            className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-bold text-slate-700"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

function StepCard({
  n,
  icon: Icon,
  title,
  desc,
}: {
  n: string;
  icon: LucideIcon;
  title: string;
  desc: string;
}) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <span className="text-xs font-extrabold text-slate-500">STEP {n}</span>
        <span className="grid h-10 w-10 place-items-center rounded-2xl bg-slate-900 text-white">
          <Icon className="h-5 w-5" />
        </span>
      </div>
      <div className="mt-4 text-lg font-extrabold text-slate-900">{title}</div>
      <p className="mt-2 text-sm leading-7 text-slate-600">{desc}</p>
    </div>
  );
}

function SimpleCard({ icon: Icon, title, desc }: { icon: LucideIcon; title: string; desc: string }) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex items-start gap-3">
        <div className="grid h-12 w-12 place-items-center rounded-2xl bg-slate-900">
          <Icon className="h-6 w-6 text-white" />
        </div>
        <div>
          <div className="text-lg font-extrabold text-slate-900">{title}</div>
          <p className="mt-1 text-sm leading-7 text-slate-600">{desc}</p>
        </div>
      </div>
    </div>
  );
}

/* âœ… PlanCard: NO PRICE */
function PlanCard({
  title,
  subtitle,
  items,
  cta,
  featured,
}: {
  title: string;
  subtitle: string;
  items: string[];
  cta: string;
  featured?: boolean;
}) {
  return (
    <div
      className={[
        "relative overflow-hidden rounded-3xl border bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg",
        featured ? "border-yellow-300 ring-1 ring-yellow-200" : "border-slate-200",
      ].join(" ")}
    >
      {featured && (
        <div className="absolute right-4 top-4 rounded-full bg-yellow-100 px-3 py-1 text-xs font-extrabold text-yellow-700">
          Best Value
        </div>
      )}

      <div className="text-sm font-extrabold text-slate-900">{title}</div>

      <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2 text-sm font-extrabold text-slate-900">
        Get Quotation
      </div>

      <div className="mt-3 text-sm text-slate-600">{subtitle}</div>

      <div className="mt-6 space-y-3">
        {items.map((i) => (
          <div key={i} className="flex items-start gap-2 text-sm text-slate-700">
            <span className="mt-1 grid h-5 w-5 place-items-center rounded-full bg-emerald-50 ring-1 ring-emerald-100">
              <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
            </span>
            <span className="leading-6">{i}</span>
          </div>
        ))}
      </div>

      <a
        href="/contact/"
        className={[
          "group mt-7 inline-flex w-full items-center justify-center gap-2 rounded-2xl px-6 py-3 text-sm font-extrabold transition",
          featured
            ? "bg-yellow-400 text-slate-900 hover:bg-yellow-500"
            : "bg-slate-900 text-white hover:bg-slate-800",
        ].join(" ")}
      >
        {cta}
        <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
      </a>
    </div>
  );
}


