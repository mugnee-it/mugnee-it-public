// src/app/projects/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { projects as sharedProjects, type Project, type ProjectType } from "@/data/projects";
import {
  ArrowRight,
  ExternalLink,
  CheckCircle2,
  Filter,
  LineChart,
  Wrench,
  ShieldCheck,
  Timer,
  Sparkles,
  Globe,
  Code2,
  Layers,
  Search,
  BadgeCheck,
  Quote,
  ChevronDown,
  Video,
} from "lucide-react";

/* ================= SEO ================= */

const SITE_URL =
  (process.env.NEXT_PUBLIC_SITE_URL &&
    process.env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, "")) ||
  "https://mugneeit.com";

const PAGE_URL = `${SITE_URL}/projects/`;

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Mugnee IT portfolio — websites, WordPress e-commerce, web apps, custom software, SEO, graphics, video editing and maintenance. Thumbnail highlights only.",
  alternates: { canonical: PAGE_URL },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Portfolio | Mugnee IT Solutions",
    description:
      "Thumbnail-style portfolio: websites, WooCommerce, apps, software, SEO, graphics, video and more.",
    url: PAGE_URL,
    type: "website",
  },
};

/* ================= TYPES ================= */

type FilterKey = "All" | ProjectType;

const typeOrder: Record<ProjectType, number> = {
  Website: 0,
  "Web App": 1,
  Software: 2,
  SEO: 3,
  Graphics: 4,
  Video: 5,
  Maintenance: 6,
};

const projects: Project[] = [...sharedProjects].sort(
  (a, b) => typeOrder[a.type] - typeOrder[b.type]
);

/* ================= FAQ (Trust + SEO) ================= */

const faqs = [
  {
    q: "What types of work are in your portfolio?",
    a: "Websites (including WordPress & WooCommerce), web apps, custom software, SEO, graphics, video editing, and maintenance—shown here as simple thumbnails without long case pages.",
  },
  {
    q: "What do you need before starting new work?",
    a: "Your goal, page/features list, reference websites, branding assets (logo/colors), and timeline/budget range help us create a clear plan quickly.",
  },
  {
    q: "Do you provide after-launch support?",
    a: "Yes—post-launch fixes, updates, monitoring, and improvements are available based on the chosen plan/SLA.",
  },
  {
    q: "Do you support NDA or confidential engagements?",
    a: "Yes—much of our client work is under NDA and we keep details confidential.",
  },
];

/* ================= JSON-LD SCHEMA ================= */

function buildJsonLd() {
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Mugnee IT Solutions",
    url: SITE_URL,
  };

  const webpage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Portfolio",
    url: PAGE_URL,
    description:
      "Selected portfolio work — websites, web apps, SEO, graphics and maintenance delivered by Mugnee IT Solutions.",
  };

  const itemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Mugnee IT Portfolio",
    itemListElement: projects.map((p, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: p.title,
      url: `${PAGE_URL}#${p.slug}`,
    })),
  };

  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return [organization, webpage, itemList, faq];
}

/* ================= PAGE ================= */

export default function ProjectsPage() {
  const jsonLd = buildJsonLd();

  const activeType: FilterKey = "All";
  const filteredProjects =
    activeType === "All" ? projects : projects.filter((p) => p.type === activeType);

  return (
    <main className="bg-white">
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* HERO */}
      <section
        id="top"
        className="mx-auto max-w-7xl scroll-mt-32 px-4 pb-10 pt-32 sm:pt-36"
      >
        <nav className="text-xs font-bold text-slate-500">
          <Link prefetch={false} href="/" className="hover:text-slate-700">
            Home
          </Link>
          <span className="mx-2">/</span>
          <span className="text-slate-900">Portfolio</span>
        </nav>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1.2fr_.8fr] lg:items-start">
          <div>
            <p className="text-xs font-extrabold tracking-[0.28em] text-slate-500">
              PORTFOLIO • SELECTED WORK • DELIVERIES
            </p>
            <h1 className="mt-2 text-4xl font-extrabold text-slate-900">
              Portfolio that builds trust
            </h1>
            <p className="mt-3 max-w-4xl text-sm leading-relaxed text-slate-600 sm:text-base sm:leading-7">
              Websites (Next.js, WordPress, WooCommerce), web apps, custom software, SEO, graphics,
              video editing and maintenance—thumbnail snapshots of the kind of work we ship.
            </p>

            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              <TrustPill
                icon={BadgeCheck}
                title="Delivery-focused"
                desc="Clear scope + clean handover"
              />
              <TrustPill
                icon={ShieldCheck}
                title="SEO & Structure"
                desc="Index-ready pages & internal linking"
              />
              <TrustPill
                icon={Timer}
                title="On-time plan"
                desc="Timeline mapped before we build"
              />
              <TrustPill
                icon={Wrench}
                title="After-launch support"
                desc="Monitoring, fixes, improvements"
              />
            </div>
          </div>

          <div className="rounded-3xl border bg-slate-50 p-6">
            <div className="flex items-start justify-between gap-3">
              <div>
                <div className="text-sm font-extrabold text-slate-900">
                  Need something similar?
                </div>
                <div className="mt-1 text-sm text-slate-600">
                  Share your requirement—we’ll reply with a clear plan and quote.
                </div>
              </div>
              <div className="h-12 w-12 rounded-2xl bg-slate-900 grid place-items-center">
                <Sparkles className="h-6 w-6 text-white" />
              </div>
            </div>

            <div className="mt-5 grid gap-3">
              <Link prefetch={false}
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-slate-900 px-6 py-3 text-sm font-extrabold text-white hover:bg-slate-800"
              >
                Get Quote <ArrowRight className="h-4 w-4" />
              </Link>
              <Link prefetch={false}
                href="/services"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border bg-white px-6 py-3 text-sm font-extrabold text-slate-900 hover:bg-slate-50"
              >
                Explore Services <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="mt-6 rounded-2xl bg-white border p-4">
              <div className="flex items-center gap-2 text-xs font-extrabold text-slate-700">
                <LineChart className="h-4 w-4" />
                What you get
              </div>
              <ul className="mt-3 space-y-2 text-sm text-slate-700">
                <li className="flex gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 mt-0.5" />
                  SEO-ready structure + clean URLs
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 mt-0.5" />
                  Performance-first build (CWV mindset)
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 mt-0.5" />
                  Post-launch support (plan/SLA)
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* STATS */}
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <StatCard icon={Globe} title="Websites" desc="Next.js, WordPress, WooCommerce, landing pages" />
          <StatCard icon={Code2} title="Web Apps" desc="Dashboards, automation, workflows" />
          <StatCard icon={Layers} title="Software" desc="HR, hotel, worklog & internal tools" />
          <StatCard icon={Search} title="SEO" desc="Technical + on-page + schema readiness" />
          <StatCard icon={Sparkles} title="Graphics" desc="Brand assets for web & social" />
          <StatCard icon={Video} title="Video" desc="Reels, shorts, YouTube & corporate edits" />
        </div>
      </section>

      {/* FILTER + GRID (single section only) */}
      <ProjectsSection activeType={activeType} filtered={filteredProjects} />

      {/* PROCESS */}
      <section className="mx-auto max-w-7xl px-4 pb-16">
        <div className="rounded-3xl border bg-white p-8">
          <div className="flex items-center gap-2 text-xs font-extrabold text-slate-700">
            <Layers className="h-4 w-4" /> DELIVERY PROCESS
          </div>
          <h2 className="mt-2 text-2xl font-extrabold text-slate-900">
            Clear workflow = predictable results
          </h2>
          <p className="mt-2 max-w-3xl text-sm text-slate-600">
            Trust comes from consistency. We follow a structured workflow to deliver
            clean outputs, better performance, and a stable long-term foundation.
          </p>

          <div className="mt-6 grid gap-6 lg:grid-cols-4">
            <ProcessCard step="01" title="Requirement & Plan" desc="Goal + scope + timeline map" />
            <ProcessCard step="02" title="Design & Structure" desc="UX, layout, content blocks" />
            <ProcessCard step="03" title="Build & Optimize" desc="Performance, responsive, clean code" />
            <ProcessCard step="04" title="Launch & Support" desc="QA, deployment, monitoring, after-care" />
          </div>
        </div>
      </section>

      {/* TRUST */}
      <section className="mx-auto max-w-7xl px-4 pb-16">
        <div className="rounded-3xl border bg-slate-50 p-8">
          <div className="flex items-center gap-2 text-xs font-extrabold text-slate-700">
            <Quote className="h-4 w-4" /> TRUST SIGNALS
          </div>
          <h2 className="mt-2 text-2xl font-extrabold text-slate-900">
            Built for long-term reliability
          </h2>
          <p className="mt-2 max-w-3xl text-sm text-slate-600">
            Delivery does not end at launch. Stability, security, and scalable structure
            matter—and we build for that.
          </p>

          <div className="mt-6 grid gap-6 lg:grid-cols-3">
            <TrustCard title="Performance mindset" desc="Fast loading, clean structure, better UX signals." icon={LineChart} />
            <TrustCard title="SEO clarity" desc="Canonical, internal linking, metadata & schema readiness." icon={Search} />
            <TrustCard title="Support culture" desc="Post-launch fixes, monitoring, and improvements (plan/SLA)." icon={Wrench} />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-7xl px-4 pb-20">
        <div className="rounded-3xl border bg-white p-8">
          <div className="flex items-center gap-2 text-xs font-extrabold text-slate-700">
            <ChevronDown className="h-4 w-4" /> FAQ
          </div>
          <h2 className="mt-2 text-2xl font-extrabold text-slate-900">
            Frequently asked questions
          </h2>

          <div className="mt-6 grid gap-4 lg:grid-cols-2">
            {faqs.map((f) => (
              <FaqItem key={f.q} q={f.q} a={f.a} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 pb-24">
        <div className="rounded-3xl border bg-slate-900 p-8 text-white flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="text-2xl font-extrabold">Ready to start your next build?</h2>
            <p className="mt-2 text-sm text-slate-200 max-w-2xl">
              Share your requirement—we will suggest the best approach with a clear plan and timeline.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <Link prefetch={false}
              href="/contact"
              className="rounded-2xl bg-yellow-400 px-6 py-3 text-sm font-extrabold text-slate-900 hover:bg-yellow-500 text-center"
            >
              Get Quote
            </Link>
            <Link prefetch={false}
              href="/services"
              className="rounded-2xl border border-white/30 px-6 py-3 text-sm font-extrabold text-white hover:bg-white/10 text-center"
            >
              See Services
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

/* ================= PROJECTS SECTION (single grid, 3 columns) ================= */

function ProjectsSection({
  activeType,
  filtered,
}: {
  activeType: FilterKey;
  filtered: Project[];
}) {
  const filters: FilterKey[] = [
    "All",
    "Website",
    "Web App",
    "Software",
    "SEO",
    "Graphics",
    "Video",
    "Maintenance",
  ];

  return (
    <section className="mx-auto max-w-7xl px-4 pb-16">
      <div className="mb-5 flex items-center justify-between gap-4 flex-wrap">
        <div className="flex items-center gap-2 text-xs font-extrabold text-slate-700">
          <Filter className="h-4 w-4" /> PORTFOLIO
        </div>

        <div className="flex flex-wrap gap-2">
          {filters.map((f) => (
            <Link prefetch={false}
              key={f}
              href="/projects"
              className={[
                "rounded-2xl border px-4 py-2 text-xs font-extrabold transition",
                f === activeType
                  ? "bg-slate-900 text-white border-slate-900"
                  : "bg-white text-slate-900 hover:bg-slate-50",
              ].join(" ")}
            >
              {f}
            </Link>
          ))}
        </div>
      </div>

      <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <p className="text-sm text-slate-600">
          <span className="font-extrabold text-slate-900">{filtered.length}</span>{" "}
          {activeType === "All" ? "items" : `${activeType} items`}
        </p>
        <Link prefetch={false}
          href="/contact"
          className="inline-flex items-center gap-2 rounded-2xl bg-yellow-400 px-5 py-2.5 text-sm font-extrabold text-slate-900 hover:bg-yellow-500"
        >
          Request quote <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filtered.map((p) => (
          <ProjectCard key={p.slug} p={p} />
        ))}
      </div>

      {filtered.length === 0 ? (
        <div className="mt-10 rounded-3xl border bg-white p-8 text-center">
          <div className="text-lg font-extrabold text-slate-900">No portfolio items found</div>
          <div className="mt-2 text-sm text-slate-600">
            Try a different filter or view the full portfolio.
          </div>
          <div className="mt-4 flex justify-center gap-3 flex-wrap">
            <Link prefetch={false}
              href="/projects"
              className="rounded-2xl border bg-white px-6 py-3 text-sm font-extrabold text-slate-900 hover:bg-slate-50"
            >
              View All
            </Link>
            <Link prefetch={false}
              href="/contact"
              className="rounded-2xl bg-slate-900 px-6 py-3 text-sm font-extrabold text-white hover:bg-slate-800"
            >
              Contact Us
            </Link>
          </div>
        </div>
      ) : null}
    </section>
  );
}

/* ================= COMPONENTS ================= */

function ProjectCard({ p }: { p: Project }) {
  const fitClass =
    p.coverFit === "contain"
      ? "object-contain object-center p-2 sm:p-3"
      : "object-cover object-center";
  const heading = p.displayTitle ?? p.title;
  const caption = p.cardCaption ?? p.shortDesc;

  return (
    <article
      id={p.slug}
      className="flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm transition hover:shadow-md"
    >
      <div className="group relative shrink-0">
        <div className="relative aspect-[16/10] bg-slate-100">
          <Image
            src={p.cover.src}
            alt={p.cover.alt}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw"
            className={`${fitClass} transition duration-300 group-hover:scale-[1.02]`}
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-black/5 to-transparent" />
          <div className="absolute left-2.5 top-2.5 flex flex-wrap items-center gap-1.5">
            <span className="rounded-full bg-slate-900/90 px-2.5 py-0.5 text-[10px] font-extrabold uppercase tracking-wide text-white shadow-sm backdrop-blur-sm">
              {p.type}
            </span>
            {p.nda ? (
              <span className="inline-flex items-center gap-1 rounded-full bg-white/95 px-2.5 py-0.5 text-[10px] font-extrabold text-slate-900 shadow-sm">
                <ShieldCheck className="h-3 w-3" /> NDA
              </span>
            ) : null}
          </div>
          {p.year ? (
            <span className="absolute right-2.5 top-2.5 rounded-full bg-white/95 px-2.5 py-0.5 text-[10px] font-extrabold text-slate-900 shadow-sm">
              {p.year}
            </span>
          ) : null}
        </div>
      </div>

      <div className="flex flex-1 flex-col p-4">
        <h3 className="text-[15px] font-extrabold leading-snug text-slate-900">{heading}</h3>
        <p className="mt-1.5 line-clamp-2 text-xs leading-relaxed text-slate-600">{caption}</p>
        <p className="mt-2 text-[11px] font-semibold text-slate-400">
          {p.industry}
          {p.location ? ` · ${p.location}` : ""}
        </p>
        {p.liveUrl ? (
          <div className="mt-auto pt-3">
            <a
              href={p.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-xs font-extrabold text-slate-900 hover:text-slate-600"
            >
              Live site <ExternalLink className="h-3 w-3" />
            </a>
          </div>
        ) : null}
      </div>
    </article>
  );
}

function StatCard({ icon: Icon, title, desc }: { icon: any; title: string; desc: string }) {
  return (
    <div className="rounded-3xl border bg-white p-6 shadow-sm">
      <Icon className="h-6 w-6 text-slate-900" />
      <div className="mt-3 font-extrabold text-slate-900">{title}</div>
      <div className="text-sm text-slate-600">{desc}</div>
    </div>
  );
}

function TrustPill({ icon: Icon, title, desc }: { icon: any; title: string; desc: string }) {
  return (
    <div className="rounded-2xl border bg-white p-4">
      <div className="flex items-start gap-3">
        <div className="h-10 w-10 rounded-2xl bg-slate-900 grid place-items-center shrink-0">
          <Icon className="h-5 w-5 text-white" />
        </div>
        <div>
          <div className="text-sm font-extrabold text-slate-900">{title}</div>
          <div className="text-sm text-slate-600">{desc}</div>
        </div>
      </div>
    </div>
  );
}

function ProcessCard({ step, title, desc }: { step: string; title: string; desc: string }) {
  return (
    <div className="rounded-3xl border bg-slate-50 p-6">
      <div className="text-xs font-extrabold text-slate-500 tracking-[0.25em]">{step}</div>
      <div className="mt-2 text-lg font-extrabold text-slate-900">{title}</div>
      <div className="mt-2 text-sm text-slate-600">{desc}</div>
    </div>
  );
}

function TrustCard({ icon: Icon, title, desc }: { icon: any; title: string; desc: string }) {
  return (
    <div className="rounded-3xl border bg-white p-6">
      <div className="h-12 w-12 rounded-2xl bg-slate-900 grid place-items-center">
        <Icon className="h-6 w-6 text-white" />
      </div>
      <div className="mt-4 text-lg font-extrabold text-slate-900">{title}</div>
      <div className="mt-2 text-sm text-slate-600">{desc}</div>
    </div>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  return (
    <div className="rounded-3xl border bg-slate-50 p-6">
      <div className="text-sm font-extrabold text-slate-900">{q}</div>
      <div className="mt-2 text-sm text-slate-600">{a}</div>
    </div>
  );
}

