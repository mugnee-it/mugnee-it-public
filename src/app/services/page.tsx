import Link from "next/link";
import {
  ArrowRight,
  Code,
  Search,
  Brush,
  Briefcase,
  ChevronDown,
  Sparkles,
} from "lucide-react";
import type { Metadata } from "next";
import type { LucideIcon } from "lucide-react";
import { withTrailingSlash } from "@/lib/utils";
import ServicesHubIllustration from "@/components/services/ServicesHubIllustration";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "https://mugneeit.com";
const PAGE_URL = `${SITE_URL}/services/`;

export const metadata: Metadata = {
  title: "Digital Services | Web, SEO, Creative & Software Solutions",
  description:
    "Explore web development, SEO, creative production, software solutions, and business email support—one hub for worldwide teams.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Digital Services | Web, SEO, Creative & Software Solutions",
    description:
      "Service hub for web development, SEO, creative design, lead systems, software implementation, and webmail support.",
    url: PAGE_URL,
    type: "website",
  },
  robots: { index: true, follow: true },
};

const FAQS = [
  {
    q: "How do you start a project without fixed package pricing?",
    a: "We collect your requirements, goals, and timeline first, then provide a clear quotation with scope, milestones, and deliverables.",
  },
  {
    q: "Do you work only in Bangladesh?",
    a: "No. We support both Bangladesh and global clients through remote collaboration, weekly updates, and milestone-based execution.",
  },
  {
    q: "How is this page kept Google-safe for SEO?",
    a: "This page works as a clean service hub with helpful summaries and internal links. Each detailed service page has its own unique content to avoid duplication.",
  },
  {
    q: "How do I choose the right service if I need multiple things together?",
    a: "Start with your main business goal first, such as leads, website upgrade, or process automation. We map the right mix of web, SEO, creative, and support services from there.",
  },
  {
    q: "Can I request only one service now and add others later?",
    a: "Yes. Many clients start with one priority service and scale in phases. We keep the roadmap flexible so future services can be added without rebuilding everything.",
  },
  {
    q: "Do you provide support after launch?",
    a: "Yes. We provide post-launch support for updates, fixes, and optimization so your site and systems stay stable and effective.",
  },
];

const BENEFITS = [
  "One team for web, SEO, creative assets, automation, and ongoing support",
  "Business-focused execution with clear KPI tracking and milestone delivery",
  "Flexible engagement model for startups, SMEs, and growing teams",
  "Technical plus content support designed to improve visibility and conversions",
];

const WHO_ITS_FOR = [
  "Business owners who need one reliable team instead of multiple vendors",
  "Brands planning website rebuilds with SEO and conversion goals",
  "Teams that need lead generation and content support with technical implementation",
  "Companies upgrading internal systems, automation, or business email setup",
];

const GOOGLE_SAFE_POINTS = [
  "Clear service hub architecture with unique child pages for each service",
  "Helpful internal links based on user intent, not forced anchor spam",
  "Structured data used only where relevant (WebPage, Breadcrumb, FAQ)",
  "No fake guarantees or manipulative SEO claims",
];

const WHY_CHOOSE_US = [
  {
    title: "Structured planning",
    text: "Every project starts with discovery, scope clarity, and success metrics so your team knows what is being built and why.",
  },
  {
    title: "Execution with accountability",
    text: "You get milestone progress, review checkpoints, and direct communication instead of one-time handoff work.",
  },
  {
    title: "Cross-functional capability",
    text: "From website architecture and SEO to creative production and systems automation, we connect all moving parts under one roadmap.",
  },
  {
    title: "Local plus global delivery",
    text: "We serve Bangladesh businesses and international teams with process-driven remote collaboration.",
  },
];

const DELIVERY_GUIDE = [
  {
    step: "1) Requirement mapping",
    details:
      "We review business goals, current gaps, target audience, and your priority outcomes.",
  },
  {
    step: "2) Quotation and scope lock",
    details:
      "You receive a tailored quotation with timeline, deliverables, and milestone breakdown.",
  },
  {
    step: "3) Production and optimization",
    details:
      "Design, development, SEO implementation, and quality checks are delivered in planned iterations.",
  },
  {
    step: "4) Launch and support",
    details:
      "Post-launch monitoring, improvement actions, and support keep performance stable over time.",
  },
];

type ServiceGroup = {
  title: string;
  icon: LucideIcon;
  items: { label: string; href: string }[];
};

const SERVICES: ServiceGroup[] = [
  {
    title: "Web Development Services",
    icon: Code,
    items: [
      { label: "Next.js Website Development", href: "/services/nextjs" },
      { label: "MERN Stack Development", href: "/services/mern-stack" },
      { label: "Frontend (React) Development", href: "/services/frontend" },
      { label: "Mobile App Development", href: "/services/mobile-app-development" },
      {
        label: "React Frontend Development",
        href: "/services/frontend/react-frontend-development",
      },
      {
        label: "Frontend Performance Optimization",
        href: "/services/frontend/frontend-performance-optimization",
      },
      {
        label: "UI/UX Frontend Implementation",
        href: "/services/frontend/ui-ux-implementation",
      },
      { label: "WordPress Website", href: "/services/wordpress" },
      { label: "Shopify Store", href: "/services/shopify" },
      {
        label: "Shopify Website Development",
        href: "/services/shopify/shopify-website-development",
      },
      {
        label: "Shopify Store Setup Service",
        href: "/services/shopify/shopify-store-setup-service",
      },
      {
        label: "Shopify Theme Customization",
        href: "/services/shopify/shopify-theme-customization",
      },
      {
        label: "Shopify Speed Optimization",
        href: "/services/shopify/shopify-speed-optimization",
      },
      { label: "Shopify SEO Service", href: "/services/shopify/shopify-seo-service" },
      { label: "Wix Website", href: "/services/wix" },
      { label: "Web Scraping", href: "/services/web-scraping" },
      { label: "Web Scraping (Bangladesh)", href: "/services/web-scraping/bangladesh" },
      { label: "Data Extraction Service", href: "/services/web-scraping/data-extraction" },
      { label: "Lead Scraping Service", href: "/services/web-scraping/lead-scraping" },
      { label: "Product & Price Scraping", href: "/services/web-scraping/product-price-scraping" },
      {
        label: "Sheets Scraping Automation",
        href: "/services/web-scraping/google-sheets-automation",
      },
    ],
  },
  {
    title: "SEO and Marketing Services",
    icon: Search,
    items: [
      { label: "SEO Services (Technical + Content)", href: "/services/seo" },
      { label: "Technical SEO Service", href: "/services/seo/technical-seo-service" },
      { label: "On Page SEO Service", href: "/services/seo/on-page-seo-service" },
      { label: "SEO Audit Service", href: "/services/seo/seo-audit-service" },
      { label: "Local SEO Service", href: "/services/seo/local-seo-service" },
      { label: "Ecommerce SEO Service", href: "/services/seo/ecommerce-seo-service" },
      { label: "LinkedIn Outreach (Setter)", href: "/services/linkedin-setter" },
      { label: "Lead Generation", href: "/services/lead-generation" },
    ],
  },
  {
    title: "Creative Services",
    icon: Brush,
    items: [
      { label: "Video Editing", href: "/services/video-editing" },
      { label: "Graphic Design", href: "/services/graphic-design" },
      {
        label: "Packaging Design Service",
        href: "/services/graphic-design/packaging-design-service",
      },
      {
        label: "Label Design Service",
        href: "/services/graphic-design/label-design-service",
      },
      {
        label: "Logo Design Service",
        href: "/services/graphic-design/logo-design-service",
      },
      {
        label: "Banner Design Service",
        href: "/services/graphic-design/banner-design-service",
      },
      {
        label: "Poster Design Service",
        href: "/services/graphic-design/poster-design-service",
      },
      {
        label: "Flyer Design Service",
        href: "/services/graphic-design/flyer-design-service",
      },
      { label: "Video Editing Service", href: "/services/video-editing/video-editing-service" },
      { label: "YouTube Video Editing", href: "/services/video-editing/youtube-video-editing" },
      { label: "Shorts & Reels Editing", href: "/services/video-editing/shorts-reels-editing" },
      { label: "Podcast Video Editing", href: "/services/video-editing/podcast-video-editing" },
      {
        label: "Corporate Video Editing",
        href: "/services/video-editing/corporate-video-editing",
      },
    ],
  },
  {
    title: "Business Solutions Services",
    icon: Briefcase,
    items: [
      { label: "Custom Software Solution", href: "/services/software-solution" },
      {
        label: "Custom Software Development",
        href: "/services/software-solution/custom-software-development",
      },
      {
        label: "Business Process Automation",
        href: "/services/software-solution/business-process-automation",
      },
      {
        label: "Internal Management System",
        href: "/services/software-solution/internal-management-system",
      },
      {
        label: "ERP & Inventory Solution",
        href: "/services/software-solution/erp-inventory-solution",
      },
      {
        label: "Custom Web Application",
        href: "/services/software-solution/custom-web-application",
      },
      { label: "Webmail / Setup & Support", href: "/services/webmail" },
      { label: "Webmail Support Bangladesh", href: "/services/webmail/bangladesh" },
      { label: "Business Email Setup", href: "/services/webmail/business-email-setup" },
      { label: "Email Migration Service", href: "/services/webmail/email-migration" },
      { label: "SPF DKIM DMARC Setup", href: "/services/webmail/spf-dkim-dmarc" },
      { label: "Email Deliverability Fix", href: "/services/webmail/deliverability-fix" },
    ],
  },
];

const HUB_GROUP_META: {
  shortTitle: string;
  summary: string;
  bar: string;
  iconSurface: string;
  iconClass: string;
  glow: string;
  anchor: string;
  featuredCount: number;
}[] = [
  {
    shortTitle: "Web & apps",
    summary:
      "Modern sites and stores—Next.js, MERN, WordPress, Shopify, Wix, mobile apps, and data automation.",
    bar: "from-sky-500 via-blue-500 to-cyan-400",
    iconSurface: "from-sky-500/25 to-cyan-500/10",
    iconClass: "text-sky-600",
    glow: "bg-sky-400/25",
    anchor: "web-development",
    featuredCount: 7,
  },
  {
    shortTitle: "SEO & growth",
    summary:
      "Technical and content SEO, audits, local & e-commerce SEO, plus LinkedIn outreach and lead systems.",
    bar: "from-rose-500 via-orange-500 to-amber-400",
    iconSurface: "from-rose-500/20 to-amber-500/10",
    iconClass: "text-rose-600",
    glow: "bg-rose-400/20",
    anchor: "seo-marketing",
    featuredCount: 5,
  },
  {
    shortTitle: "Creative",
    summary: "Video editing for social and YouTube, and full graphic design—from logos to packaging.",
    bar: "from-violet-500 via-purple-500 to-fuchsia-500",
    iconSurface: "from-violet-500/25 to-fuchsia-500/10",
    iconClass: "text-violet-600",
    glow: "bg-violet-400/20",
    anchor: "creative",
    featuredCount: 5,
  },
  {
    shortTitle: "Software & email",
    summary:
      "Custom software, ERP-style tools, automation, and business email setup with deliverability support.",
    bar: "from-teal-500 via-emerald-500 to-cyan-500",
    iconSurface: "from-teal-500/25 to-emerald-500/10",
    iconClass: "text-teal-600",
    glow: "bg-teal-400/20",
    anchor: "business-solutions",
    featuredCount: 5,
  },
];

export default function ServicesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        name: "Digital Services",
        url: PAGE_URL,
        description:
          "Service hub: web development, SEO, creative, software solutions, and webmail—with clear categories and deep links.",
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
          { "@type": "ListItem", position: 2, name: "Services", item: PAGE_URL },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: FAQS.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
  };

  return (
    <main className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero — clearly reads as the main Services hub */}
      <section className="relative overflow-hidden border-b border-slate-200/80 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-900 pb-14 pt-8 text-white sm:pb-16 sm:pt-10">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_85%_70%_at_70%_-10%,rgba(56,189,248,0.22),transparent_50%),radial-gradient(ellipse_60%_50%_at_10%_80%,rgba(250,204,21,0.12),transparent_45%)]"
          aria-hidden
        />
        <div className="relative mx-auto max-w-7xl px-4">
          <nav className="text-xs font-bold text-slate-400">
            <Link prefetch={false} href="/" className="hover:text-white">
              Home
            </Link>
            <span className="mx-2 text-slate-600">/</span>
            <span className="text-yellow-300">Services hub</span>
          </nav>

          <div className="mt-8 grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.2em] text-sky-200 backdrop-blur-sm">
                <Sparkles className="h-3.5 w-3.5 text-yellow-300" />
                Main services page
              </p>
              <h1 className="mt-5 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-[2.65rem] lg:leading-[1.1]">
                Everything we build—
                <span className="bg-gradient-to-r from-yellow-300 to-amber-200 bg-clip-text text-transparent">
                  {" "}
                  one front door
                </span>
              </h1>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-slate-300 sm:text-base">
                You&apos;re on the <strong className="text-white">central services hub</strong>. Pick a
                category, jump to a specialty page, or book a call—we&apos;ll map scope and quote to your
                goals.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  prefetch={false}
                  href={withTrailingSlash("/schedule-consultation")}
                  className="inline-flex items-center gap-2 rounded-full bg-yellow-400 px-6 py-3 text-sm font-extrabold text-slate-900 shadow-lg shadow-yellow-400/20 transition hover:bg-yellow-300"
                >
                  Book a call <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href="#service-categories"
                  className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-6 py-3 text-sm font-extrabold text-white backdrop-blur-sm transition hover:bg-white/10"
                >
                  Browse categories <ChevronDown className="h-4 w-4" />
                </a>
              </div>
              <div className="mt-8 flex flex-nowrap gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                {["Web", "SEO", "Creative", "Software", "Email"].map((tag) => (
                  <span
                    key={tag}
                    className="shrink-0 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-bold text-slate-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="relative flex justify-center lg:justify-end">
              <div className="absolute inset-0 -z-10 blur-3xl lg:right-0 lg:left-auto">
                <div className="mx-auto h-64 w-64 rounded-full bg-sky-500/20 lg:mx-0" />
              </div>
              <ServicesHubIllustration className="w-full max-w-[min(100%,420px)] drop-shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 pt-10 sm:pt-12">
        <div className="mb-10 max-w-3xl">
          <p className="text-xs font-extrabold tracking-[0.22em] text-blue-600">MUGNEE IT SOLUTIONS</p>
          <h2 className="mt-2 text-2xl font-extrabold text-slate-900 sm:text-3xl">
            How to use this page
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
            Each block below is a <strong>service family</strong>. Start with the highlighted links—they
            lead to our primary offerings. Expand &quot;All links&quot; for every sub-service (great for SEO
            and power users).
          </p>
        </div>

        <section className="rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
          <h2 className="text-2xl font-extrabold text-slate-900">
            Why Businesses Use This Service Hub
          </h2>
          <p className="mt-3 max-w-4xl text-sm leading-7 text-slate-600">
            This page helps you quickly compare service paths and move to the right
            detailed page without confusion. Whether you need a full website build,
            SEO growth support, creative production, lead systems, software
            implementation, or business email setup, you can start from one place
            and request a custom quotation based on actual requirements.
          </p>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {BENEFITS.map((benefit) => (
              <div
                key={benefit}
                className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700"
              >
                {benefit}
              </div>
            ))}
          </div>
        </section>

        <section className="mt-10 rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">
          <h2 className="text-2xl font-extrabold text-slate-900">Who This Page Is For</h2>
          <p className="mt-3 max-w-4xl text-sm leading-7 text-slate-600">
            If you are comparing service options and want a clear execution path,
            this hub helps you move from decision to action quickly with a
            quotation-based workflow.
          </p>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {WHO_ITS_FOR.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-700"
              >
                {item}
              </div>
            ))}
          </div>
        </section>

        <div id="service-categories" className="scroll-mt-32 md:scroll-mt-36">
          <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-extrabold tracking-[0.28em] text-slate-500">CATEGORIES</p>
              <h2 className="mt-1 text-2xl font-extrabold text-slate-900 sm:text-3xl">
                Explore by service family
              </h2>
            </div>
            <p className="max-w-md text-sm text-slate-600">
              Four pillars—each links to deep pages. Your starting point for the full catalog.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {SERVICES.map((group, idx) => {
              const meta = HUB_GROUP_META[idx]!;
              const Icon = group.icon;
              const n = meta.featuredCount;
              const featured = group.items.slice(0, n);
              const rest = group.items.slice(n);

              return (
                <article
                  key={group.title}
                  id={meta.anchor}
                  className="group/card relative overflow-hidden rounded-3xl border border-slate-200/90 bg-white shadow-[0_20px_50px_rgba(15,23,42,0.06)] transition hover:shadow-[0_28px_60px_rgba(15,23,42,0.1)]"
                >
                  <div className={`h-1.5 w-full bg-gradient-to-r ${meta.bar}`} aria-hidden />
                  <div className="relative p-6 sm:p-8">
                    <div
                      className={`pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full blur-3xl ${meta.glow} opacity-60 transition group-hover/card:opacity-90`}
                      aria-hidden
                    />

                    <div className="relative flex flex-wrap items-start justify-between gap-4">
                      <div className="flex items-start gap-4">
                        <div
                          className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${meta.iconSurface} shadow-[inset_0_1px_0_rgba(255,255,255,0.7),0_10px_28px_rgba(15,23,42,0.08)] ring-1 ring-white`}
                        >
                          <Icon className={`h-7 w-7 ${meta.iconClass}`} strokeWidth={1.75} />
                        </div>
                        <div>
                          <p className="text-[11px] font-extrabold uppercase tracking-wider text-slate-400">
                            {meta.shortTitle}
                          </p>
                          <h3 className="mt-0.5 text-xl font-extrabold tracking-tight text-slate-900 sm:text-2xl">
                            {group.title.replace(" Services", "")}
                          </h3>
                        </div>
                      </div>
                    </div>

                    <p className="relative mt-4 text-sm leading-relaxed text-slate-600">{meta.summary}</p>

                    <div className="relative mt-5 space-y-1">
                      <p className="text-[11px] font-extrabold uppercase tracking-wider text-slate-400">
                        Popular entry points
                      </p>
                      {featured.map((it) => (
                        <Link
                          key={it.href}
                          href={withTrailingSlash(it.href)}
                          prefetch={false}
                          className="flex items-center justify-between gap-3 rounded-xl px-3 py-2.5 text-sm font-bold text-slate-800 transition hover:bg-slate-50"
                        >
                          <span className="min-w-0">{it.label}</span>
                          <ArrowRight className="h-4 w-4 shrink-0 text-slate-400 transition group-hover/card:translate-x-0.5 group-hover/card:text-slate-700" />
                        </Link>
                      ))}
                    </div>

                    {rest.length > 0 ? (
                      <details className="group/details relative mt-4">
                        <summary className="flex cursor-pointer list-none items-center justify-between gap-2 rounded-2xl border border-slate-200 bg-slate-50/80 px-4 py-3 text-sm font-extrabold text-slate-800 transition hover:border-slate-300 hover:bg-slate-50 [&::-webkit-details-marker]:hidden">
                          <span>
                            All links in this category{" "}
                            <span className="font-bold text-slate-500">({rest.length} more)</span>
                          </span>
                          <ChevronDown className="h-4 w-4 shrink-0 text-slate-500 transition group-open/details:rotate-180" />
                        </summary>
                        <div className="mt-2 max-h-[min(320px,50vh)] space-y-0.5 overflow-y-auto rounded-2xl border border-slate-100 bg-white p-2">
                          {rest.map((it) => (
                            <Link
                              key={it.href}
                              href={withTrailingSlash(it.href)}
                              prefetch={false}
                              className="flex items-center justify-between gap-2 rounded-lg px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
                            >
                              {it.label}
                              <ArrowRight className="h-3.5 w-3.5 text-slate-400" />
                            </Link>
                          ))}
                        </div>
                      </details>
                    ) : null}
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        <section className="mt-14 rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">
          <h2 className="text-2xl font-extrabold text-slate-900">
            Why Choose Mugnee IT Solutions
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            We do not force package pricing on every client. Instead, we provide
            project-specific quotation, clear scope, and measurable delivery so you
            get practical outcomes instead of generic promises.
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {WHY_CHOOSE_US.map((point) => (
              <article key={point.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <h3 className="text-base font-bold text-slate-900">{point.title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">{point.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-14 rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">
          <h2 className="text-2xl font-extrabold text-slate-900">Project Delivery Guide</h2>
          <p className="mt-2 text-sm text-slate-600">
            A simple process for Bangladesh and worldwide clients.
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {DELIVERY_GUIDE.map((item) => (
              <article key={item.step} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <h3 className="text-base font-bold text-slate-900">{item.step}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">{item.details}</p>
              </article>
            ))}
          </div>
          <div className="mt-6 rounded-2xl border border-blue-100 bg-blue-50 p-4 text-sm text-slate-700">
            Need help selecting the right path? Start from{" "}
            <Link href={withTrailingSlash("/services/nextjs")} className="font-bold text-blue-700 hover:underline">
              Next.js
            </Link>
            ,{" "}
            <Link href={withTrailingSlash("/services/seo")} className="font-bold text-blue-700 hover:underline">
              SEO
            </Link>
            ,{" "}
            <Link
              href={withTrailingSlash("/services/software-solution")}
              className="font-bold text-blue-700 hover:underline"
            >
              Software Solutions
            </Link>
            , or{" "}
            <Link href={withTrailingSlash("/services/webmail")} className="font-bold text-blue-700 hover:underline">
              Webmail Support
            </Link>{" "}
            based on your current business priority.
          </div>
        </section>

        <section className="mt-14 rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
          <h2 className="text-2xl font-extrabold text-slate-900">Google-Safe SEO Structure</h2>
          <p className="mt-2 text-sm leading-7 text-slate-600">
            This page is designed as a service hub for users first. We keep content
            practical, readable, and structurally clean to support long-term SEO.
          </p>
          <div className="mt-5 grid gap-3 md:grid-cols-2">
            {GOOGLE_SAFE_POINTS.map((point) => (
              <div
                key={point}
                className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700"
              >
                {point}
              </div>
            ))}
          </div>
        </section>

        <div className="mt-16 rounded-3xl bg-slate-50 p-8 text-center">
          <h3 className="text-xl font-extrabold text-slate-900">
            Need a custom quotation for your project?
          </h3>
          <p className="mt-2 text-slate-600">
            Share your requirement and we will recommend the right service mix
            with timeline and execution plan.
          </p>
          <Link
            href={withTrailingSlash("/schedule-consultation")}
            prefetch={false}
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-yellow-400 px-6 py-3 text-sm font-bold text-slate-900 hover:bg-yellow-500"
          >
            {"Let's Talk"} <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <section className="mt-14 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-extrabold tracking-[0.28em] text-slate-500">FAQ</p>
              <h2 className="mt-2 text-3xl font-extrabold text-slate-900">
                Services FAQ
              </h2>
              <p className="mt-2 max-w-3xl text-sm leading-7 text-slate-600">
                Common questions about service selection, quotation, delivery, and support.
              </p>
            </div>

            <Link
              href={withTrailingSlash("/schedule-consultation")}
              prefetch={false}
              className="inline-flex w-fit items-center justify-center gap-2 rounded-2xl bg-yellow-400 px-6 py-3 text-sm font-extrabold text-slate-900 transition hover:bg-yellow-500"
            >
              Request Quotation <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-8 grid gap-4 lg:grid-cols-2">
            {FAQS.map((f, idx) => (
              <details
                key={f.q}
                open={idx === 0 ? true : undefined}
                className="group rounded-3xl border border-slate-200 bg-white p-6"
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
      </section>
    </main>
  );
}
