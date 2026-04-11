// app/services/wordpress/page.tsx
import type { Metadata } from "next";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  Gauge,
  LayoutTemplate,
  Link2,
  Lock,
  Search,
  ShieldCheck,
  Sparkles,
  Zap,
  Headphones,
  Users,
  RefreshCw,
  Globe2,
  FileCheck2,
  ClipboardList,
  Settings2,
  ShieldAlert,
  Rocket,

  // âœ… Website Types Icons
  Briefcase,
  User,
  HeartPulse,
  UtensilsCrossed,
  GraduationCap,
  Home,
  Scale,
  HandHeart,
  FileText,
  Target,
  ShoppingCart,
  Store,
  Newspaper,
  Hotel,
  CalendarDays,
  HardHat,
  Scissors,
} from "lucide-react";
import { ServiceCustomerGuide } from "@/components/sections/ServiceVisualBlocks";

/** âœ… Production env:
 * NEXT_PUBLIC_SITE_URL=https://mugneeit.com
 */
const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "https://mugneeit.com";

const PAGE_PATH = "/services/wordpress/";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

/** âœ… Target keyword (use naturally in headings + copy) */
const TARGET_KEYWORD = "WordPress Website Development";

/** âœ… < 60 chars SEO title */
const META_TITLE = "WordPress Website Development";
const OG_TITLE = "WordPress Website Development â€” Fast, SEO & Secure";

export const metadata: Metadata = {
  title: META_TITLE,
  description:
    "WordPress Website Development for business, portfolio, healthcare, restaurant, life coach, e-commerce & WooCommerce. Premium UI, fast load, SEO-ready structure, security hardening, and after-sale support (24-hour response target).",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: OG_TITLE,
    description:
      "We build premium WordPress websites with SEO-ready structure, fast performance, secure setup, and strong after-sale support.",
    url: PAGE_URL,
    siteName: "Mugnee IT Solutions",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

const faqs = [
  {
    q: "Do you provide after-sale support for WordPress websites?",
    a: "Yes. We provide after-sale support and handle issues quickly. Our standard target is to respond within 24 hours, depending on severity and hosting access.",
  },
  {
    q: "Can you build any type of WordPress website (portfolio, healthcare, restaurant, etc.)?",
    a: "Yes. We build business websites, portfolio sites, healthcare/clinic websites, restaurant sites, life coach sites, education websites, e-commerce/WooCommerce stores, blogs, resume/CV websites, and more.",
  },
  {
    q: "Will my WordPress website be SEO-friendly?",
    a: "Yes. We follow an SEO-ready structure: proper headings, internal links, clean sections, metadata guidance, and schema-friendly setup so Google can understand the content.",
  },
  {
    q: "Do you optimize speed and Core Web Vitals?",
    a: "Yes. We optimize images, reduce layout shift, and follow performance-friendly patterns. Final results depend on hosting, theme/plugins, and third-party scripts.",
  },
  {
    q: "Do you make WooCommerce / e-commerce websites?",
    a: "Yes. We build WooCommerce stores with category structure, product page UX, and checkout flow. We can also guide payment gateway setup based on your region/requirements.",
  },
  {
    q: "Can I edit content myself after delivery?",
    a: "Yes. We configure WordPress so you can easily edit pages, blog posts, images, and menus. We also provide handover guidance.",
  },
  {
    q: "Do you use Elementor or custom sections?",
    a: "We can do both. For better speed and long-term maintainability, we prefer lightweight themes with custom sections. If you need page builder editing, we can use Elementor carefully.",
  },
  {
    q: "Do you provide security hardening for WordPress?",
    a: "Yes. We apply best practices like plugin hygiene, secure login setup, backups, and basic hardening depending on the hosting environment.",
  },
  {
    q: "Do you provide fixed pricing packages?",
    a: "No fixed public pricing. We show package scopes, but final cost depends on pages, design complexity, content, and integrations. You can request a quotation anytime.",
  },
] as const;

/** âœ… Google-safe JSON-LD (@graph). Avoid risky/false claims, keep clean + consistent. */
function buildJsonLd() {
  const organization = {
    "@type": "Organization",
    name: "Mugnee IT Solutions",
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
  };

  const webpage = {
    "@type": "WebPage",
    name: META_TITLE,
    url: PAGE_URL,
    description: metadata.description,
    isPartOf: { "@type": "WebSite", name: "Mugnee IT Solutions", url: SITE_URL },
  };

  const service = {
    "@type": "Service",
    name: "WordPress Website Development Services",
    serviceType: "WordPress Website Development",
    provider: {
      "@type": "Organization",
      name: "Mugnee IT Solutions",
      url: SITE_URL,
    },
    areaServed: ["Bangladesh", "Worldwide"],
    url: PAGE_URL,
    description:
      "WordPress Website Development with premium UI, SEO-ready structure, speed optimization, security hardening, and after-sale support (24-hour response target).",
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceCurrency: "BDT",
      price: "0",
      description:
        "Quotation-based pricing. Share requirements to receive a custom scope, timeline, and quote.",
    },
  };

  const breadcrumb = {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: `${SITE_URL}/services/`,
      },
      { "@type": "ListItem", position: 3, name: "WordPress", item: PAGE_URL },
    ],
  };

  const faq = {
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return {
    "@context": "https://schema.org",
    "@graph": [organization, webpage, service, breadcrumb, faq],
  };
}

type WebsiteType = { title: string; desc: string; Icon: LucideIcon };

export default function WordPressServicePage() {
  const jsonLd = buildJsonLd();

  const WEBSITE_TYPES: WebsiteType[] = [
    { title: "Business Website", desc: "Company profile, services, lead capture, trust blocks.", Icon: Briefcase },
    { title: "Portfolio Website", desc: "Agency / freelancer portfolio with case studies.", Icon: User },
    { title: "Healthcare Website", desc: "Clinic/hospital site with appointment + service pages.", Icon: HeartPulse },
    { title: "Life Coach Website", desc: "Coaching pages, booking CTA, testimonials, blog.", Icon: Sparkles },
    { title: "Restaurant Website", desc: "Menu, gallery, location map, reservation CTA.", Icon: UtensilsCrossed },
    { title: "Education Website", desc: "Course pages, inquiry forms, blog, landing pages.", Icon: GraduationCap },
    { title: "Real Estate Website", desc: "Property listing layout, inquiry CTA, lead forms.", Icon: Home },
    { title: "Law Firm Website", desc: "Practice areas, case highlights, consultation CTA.", Icon: Scale },
    { title: "NGO / Charity Website", desc: "Programs, donation CTA, impact stories.", Icon: HandHeart },
    { title: "Resume / CV Website", desc: "Personal CV, timeline, projects, contact.", Icon: FileText },
    { title: "Landing Page Website", desc: "High conversion landing pages for ads.", Icon: Target },
    { title: "WooCommerce Store", desc: "Shop, product SEO, category structure, checkout flow.", Icon: ShoppingCart },
    { title: "E-commerce Website", desc: "Product & category pages built for conversion.", Icon: Store },
    { title: "Blog / News Website", desc: "Fast blog, categories, SEO content structure.", Icon: Newspaper },
    { title: "Hotel / Travel Website", desc: "Rooms, booking inquiry, gallery, map.", Icon: Hotel },
    { title: "Event Website", desc: "Event details, registration CTA, sponsors.", Icon: CalendarDays },
    { title: "Construction Website", desc: "Projects, services, quotation request CTA.", Icon: HardHat },
    { title: "Beauty Salon Website", desc: "Services, booking CTA, offers, reviews.", Icon: Scissors },
  ];

  return (
    <main className="bg-white text-slate-900">
      {/* âœ… JSON-LD (single script, Google-safe @graph) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* âœ… Header spacer (sticky header overlap fix) */}
      <div className="h-16 sm:h-20" aria-hidden="true" />

      {/* ================= HERO â€“ WORDPRESS SERVICE ================= */}
      <section className="relative overflow-hidden bg-slate-950 pb-12 pt-24 sm:pb-16 sm:pt-28" aria-labelledby="wp-hero-title">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(90%_120%_at_10%_20%,rgba(250,204,21,0.22),transparent_45%),radial-gradient(70%_80%_at_85%_25%,rgba(232,121,249,0.16),transparent_48%),linear-gradient(120deg,#020617_0%,#111827_48%,#1e1b4b_100%)]" />
          <div className="absolute inset-0 opacity-[0.12] [background:radial-gradient(circle_at_1px_1px,rgba(255,255,255,.45)_1px,transparent_0)] [background-size:20px_20px]" />
          <div className="pointer-events-none absolute -left-12 top-16 h-56 w-56 rounded-full bg-yellow-300/15 blur-3xl" />
          <div className="pointer-events-none absolute right-0 top-24 h-64 w-64 rounded-full bg-fuchsia-300/15 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-6xl px-4">
          <nav className="text-xs font-bold text-white/85 drop-shadow">
            <a href="/" className="hover:text-white">Home</a>
            <span className="mx-2 text-white/60">/</span>
            <a href="/services" className="hover:text-white">Services</a>
            <span className="mx-2 text-white/60">/</span>
            <span className="text-yellow-300">WordPress</span>
          </nav>

          <div className="mt-10 grid gap-10 lg:grid-cols-[1.1fr_.9fr] lg:items-center">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[11px] font-extrabold tracking-[0.18em] text-white backdrop-blur">
                WORDPRESS DEVELOPMENT STUDIO
              </p>

              <h1 id="wp-hero-title" className="mt-4 text-4xl font-extrabold leading-tight text-white sm:text-5xl">
                WordPress Website Development
                <span className="text-yellow-300"> Services</span>
              </h1>

              <p className="mt-4 max-w-2xl text-base leading-7 text-white/90 sm:text-lg">
                We build WordPress websites for business, portfolio, healthcare, restaurant,
                life coach, blog and WooCommerce - optimized for SEO, speed and easy editing.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {[
                  "WordPress SEO Setup",
                  "WooCommerce Build",
                  "Speed Optimization",
                  "Security Hardening",
                  "Maintenance Support",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] font-extrabold text-white backdrop-blur"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href="/contact/"
                  className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-yellow-400 px-7 py-3.5 text-sm font-extrabold text-slate-900 shadow-[0_10px_30px_rgba(0,0,0,.25)] transition hover:-translate-y-[1px] hover:bg-yellow-500"
                >
                  Start Your WordPress Project
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </a>
                <a
                  href="/services"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/20 bg-white/10 px-7 py-3.5 text-sm font-extrabold text-white backdrop-blur transition hover:bg-white/15"
                >
                  View All Services
                </a>
              </div>

              <div className="mt-7 grid gap-2 text-sm font-bold text-white/90 sm:grid-cols-2">
                <span className="inline-flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" /> SEO-ready architecture
                </span>
                <span className="inline-flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-fuchsia-400" /> Conversion-focused UI
                </span>
                <span className="inline-flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-yellow-300" /> Fast delivery workflow
                </span>
                <span className="inline-flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" /> Remote support
                </span>
              </div>
            </div>

            <div className="grid gap-4">
              <div className="rounded-3xl border border-white/20 bg-white/10 p-6 backdrop-blur">
                <div className="text-sm font-extrabold uppercase tracking-widest text-white/90">
                  WordPress Coverage
                </div>
                <div className="mt-4 space-y-3 text-sm text-white/90">
                  <Mini text="Business and service websites with clear conversion flow" />
                  <Mini text="WooCommerce stores with product and category structure" />
                  <Mini text="Speed, SEO, security, and long-term maintenance support" />
                  <Mini text="Bangladesh, USA, UK, Canada, Europe" />
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-3">
                {[
                  { k: "240+", v: "Projects delivered" },
                  { k: "7-21d", v: "Typical delivery" },
                  { k: "Remote", v: "Remote delivery" },
                ].map((s) => (
                  <div key={s.v} className="rounded-2xl border border-white/20 bg-white/10 p-4 text-center backdrop-blur">
                    <div className="text-xl font-extrabold text-yellow-300">{s.k}</div>
                    <div className="mt-1 text-xs font-bold text-white/75">{s.v}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <ServiceCustomerGuide pillar="wordpress" contextLabel="WordPress Website Development" />

      <section className="mx-auto max-w-6xl px-4 py-12">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <p className="text-xs font-extrabold tracking-[0.24em] text-slate-500">
            WHAT IS WORDPRESS DEVELOPMENT
          </p>
          <h2 className="mt-2 text-2xl font-extrabold text-slate-900 sm:text-3xl">
            What is WordPress Website Development?
          </h2>
          <p className="mt-3 max-w-4xl text-sm leading-7 text-slate-600 sm:text-base">
            WordPress development is the process of building flexible websites with an easy content
            management system. It helps businesses publish pages quickly, update content without coding,
            and scale features over time with plugins, custom sections, and structured site architecture.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <WordPressPillarCard
              icon={LayoutTemplate}
              title="Flexible CMS"
              desc="Manage pages, blogs, and media without developer dependency."
            />
            <WordPressPillarCard
              icon={Search}
              title="SEO Structure"
              desc="Clean page hierarchy, metadata setup, and crawl-friendly content layout."
            />
            <WordPressPillarCard
              icon={Gauge}
              title="Performance"
              desc="Speed-focused setup using lightweight patterns and optimization checks."
            />
            <WordPressPillarCard
              icon={ShieldCheck}
              title="Maintainability"
              desc="Organized structure with safer updates and long-term support readiness."
            />
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-4 py-12">
        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
          <p className="text-xs font-extrabold tracking-[0.24em] text-slate-500">SERVICE SOLUTION</p>
          <h2 className="mt-2 text-2xl font-extrabold text-slate-900 sm:text-3xl">{TARGET_KEYWORD} solutions</h2>
          <p className="mt-2 text-sm leading-7 text-slate-600">
            Practical implementation built around your business goals, timeline, and growth priorities.
          </p>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {[
              `Tailored ${TARGET_KEYWORD} roadmap`,
              "Clear scope, timeline, and deliverables",
              "Google-safe execution with clean structure",
              "Ongoing support after launch",
            ].map((item) => (
              <div key={item} className="rounded-2xl border border-slate-200 bg-white p-4 text-sm font-semibold text-slate-700">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-4 pb-12">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">
          <p className="text-xs font-extrabold tracking-[0.24em] text-slate-500">SERVICE BENEFITS</p>
          <h2 className="mt-2 text-2xl font-extrabold text-slate-900 sm:text-3xl">
            Business Benefits of This WordPress Solution
          </h2>
          <p className="mt-3 max-w-4xl text-sm leading-7 text-slate-600 sm:text-base">
            WordPress works best when design quality, SEO structure, speed, and update workflow are planned together.
            This gives business owners a website that is easier to maintain and stronger for long-term growth.
          </p>

          <div className="mt-6 grid gap-4 lg:grid-cols-2">
            <article className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <h3 className="text-base font-extrabold text-slate-900">Why businesses choose WordPress</h3>
              <ul className="mt-3 space-y-2 text-sm font-semibold text-slate-700">
                {[
                  "Content updates stay easy for non-technical teams",
                  "Plugin ecosystem supports business features quickly",
                  "Flexible design and page structure for different industries",
                  "Scales from simple websites to WooCommerce stores",
                ].map((point) => (
                  <li key={point} className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-yellow-400" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </article>

            <article className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <h3 className="text-base font-extrabold text-slate-900">How clients benefit</h3>
              <ul className="mt-3 space-y-2 text-sm font-semibold text-slate-700">
                {[
                  "Faster website publishing and marketing update cycles",
                  "Better conversion flow with clear CTA-driven page structure",
                  "Lower long-term maintenance friction with organized setup",
                  "Ongoing support path for updates, security, and performance",
                ].map((point) => (
                  <li key={point} className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-emerald-400" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </article>
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {[
              "Custom page architecture based on business goals",
              "SEO-safe implementation with clean content hierarchy",
              "Speed and security checklist before launch",
              "Support-ready handover for long-term maintenance",
            ].map((item) => (
              <div key={item} className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm font-semibold text-slate-700">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-4 pb-12">
        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
          <p className="text-xs font-extrabold tracking-[0.24em] text-slate-500">SERVICE COMPARISON</p>
          <h2 className="mt-2 text-2xl font-extrabold text-slate-900 sm:text-3xl">{TARGET_KEYWORD} vs other options</h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {[
              `${TARGET_KEYWORD}: custom execution aligned with business objectives`,
              "Generic alternatives: faster setup but limited flexibility for growth",
              "Low-cost quick delivery: cheaper initially, often weaker long-term stability",
              "Managed implementation: stronger process, QA, and after-launch support",
            ].map((item) => (
              <div key={item} className="rounded-2xl border border-slate-200 bg-white p-4 text-sm font-semibold text-slate-700">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-12" id="wordpress-delivery-models">
        <WordPressDeliveryModels />
      </section>
      
      {/* ================= DELIVERABLES ================= */}
      <section id="wordpress-deliverables" className="mx-auto max-w-6xl px-4 py-14">
        <p className="text-xs font-extrabold tracking-[0.28em] text-slate-500">DELIVERABLES</p>

        <h2 className="mt-2 text-3xl font-extrabold">
          {TARGET_KEYWORD} for business-ready
        </h2>

        <p className="mt-2 max-w-3xl text-sm leading-7 text-slate-600">
          Our {TARGET_KEYWORD} includes premium UI sections, SEO-ready structure, speed-friendly setup,
          and secure configurationâ€”so your website loads fast, ranks better, and converts leads.
        </p>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          <InfoCard
            icon={LayoutTemplate}
            title={`${TARGET_KEYWORD} UI & Pages`}
            items={[
              "Homepage + service pages + contact page",
              "Mobile responsive UI (all key breakpoints)",
              "Conversion CTA + trust blocks + inquiry flow",
            ]}
          />
          <InfoCard
            icon={Search}
            title={`${TARGET_KEYWORD} SEO Foundation`}
            items={[
              "Proper H1â€“H3 structure + section clarity",
              "Internal links + keyword-friendly pages",
              "Schema-ready setup + sitemap guidance",
            ]}
          />
          <InfoCard
            icon={Gauge}
            title={`${TARGET_KEYWORD} Speed & Quality`}
            items={[
              "Image optimization + caching guidance",
              "Layout stability + performance checklist",
              "Clean handover so you can maintain easily",
            ]}
          />
        </div>

        {/* âœ… SEO + Trust add (NEW) */}
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <SoftPanel
            icon={FileCheck2}
            title="Google-friendly structure (ready to publish)"
            desc="We keep pages clean, readable and crawlable: consistent headings, keyword-focused sections, internal links, and schema (FAQ + breadcrumb + service)."
            bullets={[
              "Human-first copy (not keyword stuffing)",
              "Fast-loading layout + optimized images",
              "Clear navigation + CTA placement",
            ]}
          />
          <SoftPanel
            icon={Globe2}
            title="We serve Bangladesh & international clients"
            desc="Whether your audience is local or global, we plan the page structure and content so Google understands your services and location relevance."
            bullets={[
              "Location-aware copy (without spam)",
              "Contact + lead capture flow",
              "Handover for future content updates",
            ]}
          />
        </div>
      </section>
      
      
      {/* ================= SUPPORTING PAGES (INTERNAL LINKS) ================= */}
      <section className="mx-auto max-w-6xl px-4 pb-14">
        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
          <p className="text-xs font-extrabold tracking-[0.28em] text-slate-500">
            SUPPORTING SERVICES
          </p>

          <h2 className="mt-2 text-2xl font-extrabold">
            Specialized WordPress services
          </h2>

          <p className="mt-2 max-w-3xl text-sm leading-7 text-slate-600">
            These pages support our main <span className="font-bold">WordPress Website Development</span> service.
            They help Google understand our expertise better and improve topical authorityâ€”so ranking grows faster.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <a
              href="/services/wordpress/woocommerce-development"
              className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="text-sm font-extrabold text-slate-900">
                WooCommerce Development
              </div>
              <p className="mt-1 text-sm leading-6 text-slate-600">
                Store setup, product/category SEO, checkout flow.
              </p>
              <span className="mt-3 inline-flex items-center gap-2 text-xs font-extrabold text-slate-900">
                Explore <ArrowRight className="h-4 w-4" />
              </span>
            </a>

            <a
              href="/services/wordpress/speed-optimization"
              className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="text-sm font-extrabold text-slate-900">
                Speed Optimization
              </div>
              <p className="mt-1 text-sm leading-6 text-slate-600">
                Core Web Vitals, image optimization, performance checklist.
              </p>
              <span className="mt-3 inline-flex items-center gap-2 text-xs font-extrabold text-slate-900">
                Explore <ArrowRight className="h-4 w-4" />
              </span>
            </a>

            <a
              href="/services/wordpress/maintenance-support"
              className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="text-sm font-extrabold text-slate-900">
                Maintenance Support
              </div>
              <p className="mt-1 text-sm leading-6 text-slate-600">
                Updates, backup/restore help, issue fixing support.
              </p>
              <span className="mt-3 inline-flex items-center gap-2 text-xs font-extrabold text-slate-900">
                Explore <ArrowRight className="h-4 w-4" />
              </span>
            </a>

            <a
              href="/services/wordpress/security-hardening"
              className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="text-sm font-extrabold text-slate-900">
                Security Hardening
              </div>
              <p className="mt-1 text-sm leading-6 text-slate-600">
                Secure login guidance, plugin hygiene, safer defaults.
              </p>
              <span className="mt-3 inline-flex items-center gap-2 text-xs font-extrabold text-slate-900">
                Explore <ArrowRight className="h-4 w-4" />
              </span>
            </a>
          </div>

          <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-4">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div className="min-w-0">
                <div className="text-sm font-extrabold text-slate-900">
                  Not sure which WordPress service you need?
                </div>
                <p className="mt-1 text-sm text-slate-600">
                  Send your requirementsâ€”weâ€™ll suggest the best scope and reply with a quotation.
                </p>
              </div>

              <a
                href="/contact/"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-slate-900 px-6 py-3 text-sm font-extrabold text-white transition hover:bg-slate-800"
              >
                Get a Quote <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
      
      
      {/* ================= PROCESS (NEW SEO SECTION) ================= */}
      <section id="wordpress-process" className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <p className="text-xs font-extrabold tracking-[0.28em] text-slate-500">PROCESS</p>

          <h2 className="mt-2 text-3xl font-extrabold">
            How we deliver {TARGET_KEYWORD}
          </h2>

          <p className="mt-2 max-w-3xl text-sm leading-7 text-slate-600">
            A clean process keeps quality high: discovery â†’ UI build â†’ content structure â†’ SEO setup â†’ QA â†’ launch â†’ support.
          </p>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            <InfoCard
              icon={ClipboardList}
              title="1) Requirement & sitemap"
              items={[
                "Page list + goals + competitors (if any)",
                "Sitemap + navigation planning",
                "Content outline for every section",
              ]}
            />
            <InfoCard
              icon={Settings2}
              title="2) Build & optimization"
              items={[
                "Theme/section build + responsive layout",
                "Speed pass (images + layout stability)",
                "SEO essentials (titles, headings, internal links)",
              ]}
            />
            <InfoCard
              icon={Rocket}
              title="3) QA, launch & handover"
              items={[
                "Browser/device QA + form testing",
                "Launch checklist + indexing guidance",
                "Admin handover + basic editing guide",
              ]}
            />
          </div>
        </div>
      </section>
      
      
      {/* ================= WEBSITE TYPES ================= */}
      <section id="wordpress-website-types" className="mx-auto max-w-6xl px-4 py-14">
        <p className="text-xs font-extrabold tracking-[0.28em] text-slate-500">WEBSITE TYPES</p>

        <h2 className="mt-2 text-3xl font-extrabold">
          {TARGET_KEYWORD} for every type
        </h2>

        <p className="mt-2 max-w-3xl text-sm leading-7 text-slate-600">
          Need any type of WordPress website? We build it with SEO-ready structure, premium sections,
          and fast performance. Our {TARGET_KEYWORD} covers business to WooCommerce storesâ€”everything.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {WEBSITE_TYPES.map(({ title, desc, Icon }) => (
            <div
              key={title}
              className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="flex items-start gap-4">
                <div className="grid h-12 w-12 place-items-center rounded-2xl border border-slate-200 bg-slate-50 transition group-hover:bg-white">
                  <Icon className="h-6 w-6 text-slate-900" />
                </div>
                <div className="min-w-0">
                  <div className="text-sm font-extrabold text-slate-900">{title}</div>
                  <p className="mt-2 text-sm leading-7 text-slate-600">{desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-3xl border border-slate-200 bg-slate-50 p-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="min-w-0">
              <div className="text-sm font-extrabold">Not sure what type you need?</div>
              <p className="mt-1 text-sm text-slate-600">
                Send your website ideaâ€”our {TARGET_KEYWORD} team will suggest the best structure and pages.
              </p>
            </div>
            <a
              href="/contact/"
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-slate-900 px-6 py-3 text-sm font-extrabold text-white transition hover:bg-slate-800"
            >
              Get a Quote <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>
      
      
      {/* ================= AFTER-SALE SUPPORT ================= */}
      <section id="wordpress-support" className="mx-auto max-w-6xl px-4 py-14">
        <p className="text-xs font-extrabold tracking-[0.28em] text-slate-500">AFTER-SALE SUPPORT</p>

        <h2 className="mt-2 text-3xl font-extrabold">
          {TARGET_KEYWORD} with after-sale service
        </h2>

        <p className="mt-2 max-w-3xl text-sm leading-7 text-slate-600">
          We donâ€™t stop after delivery. Our {TARGET_KEYWORD} includes after-sale service so your website stays stable.
          Our team responds quickly, and we aim to solve most website issues within 24 hours (scope/hosting access-based).
        </p>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          <InfoCard
            icon={Headphones}
            title={`${TARGET_KEYWORD} Support Response`}
            items={[
              "Fast response after delivery",
              "Issue diagnosis and fix support",
              "Clear communication and updates",
            ]}
          />
          <InfoCard
            icon={RefreshCw}
            title={`${TARGET_KEYWORD} Maintenance Help`}
            items={[
              "Plugin/theme update guidance",
              "Backup + restore help (hosting-based)",
              "Performance and security checklist",
            ]}
          />
          <InfoCard
            icon={Users}
            title={`${TARGET_KEYWORD} Strong Team`}
            items={[
              "Experienced developers & support team",
              "Structured workflow & QA checklist",
              "Reliable delivery and improvement",
            ]}
          />
        </div>

        <div className="mt-10 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="min-w-0">
              <div className="text-sm font-extrabold text-slate-900">Need urgent help?</div>
              <p className="mt-1 text-sm text-slate-600">
                Share the issue details and access scopeâ€”weâ€™ll respond fast and guide the fix.
              </p>
            </div>
            <a
              href="/contact/"
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-indigo-600 px-6 py-3 text-sm font-extrabold text-white transition hover:bg-indigo-700"
            >
              Contact Support <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>
      
      
      {/* ================= WHY CHOOSE US ================= */}
      <section className="mx-auto max-w-6xl px-4 py-14">
        <p className="text-xs font-extrabold tracking-[0.28em] text-slate-500">WHY MUGNEE IT</p>

        <h2 className="mt-2 text-3xl font-extrabold">
          Why choose us for {TARGET_KEYWORD}?
        </h2>

        <p className="mt-2 max-w-3xl text-sm leading-7 text-slate-600">
          We follow a clean engineering workflow for WordPress projects: structured coding standards,
          QA/SQA validation, and handover-ready documentation so your team can operate confidently after launch.
        </p>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          <InfoCard
            icon={BadgeCheck}
            title="Clean code and build quality"
            items={[
              "Readable structure and modular implementation",
              "Stable plugin/theme setup with less technical debt",
              "Production-ready build for long-term use",
            ]}
          />
          <InfoCard
            icon={FileCheck2}
            title="QA and SQA validation flow"
            items={[
              "Feature checks before final handover",
              "Responsive pass across key screen sizes",
              "Issue review workflow to reduce bugs",
            ]}
          />
          <InfoCard
            icon={ShieldCheck}
            title="Handover-ready project delivery"
            items={[
              "Commented sections for maintainability",
              "Practical admin/editing guidance",
              "Post-launch support and fix coverage",
            ]}
          />
        </div>

        {/* âœ… Security detail add (NEW SEO section) */}
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <SoftPanel
            icon={ShieldAlert}
            title="Security best practices (practical + safe)"
            desc="We follow safe defaults to reduce common WordPress risks (final setup depends on hosting and access)."
            bullets={[
              "Plugin hygiene + minimal bloat",
              "Secure login setup guidance",
              "Backup + restore guidance",
            ]}
          />
          <SoftPanel
            icon={Link2}
            title="Related services"
            desc="Need custom web apps or advanced SEO? Explore our related services."
            bullets={[
              "SEO Service (strategy + execution)",
              "Next.js Development (high performance apps)",
              "Frontend (React) for modern UI",
            ]}
            ctas={[
              { href: "/services/seo", label: "SEO Service" },
              { href: "/services/nextjs", label: "Next.js Development" },
              { href: "/services/frontend", label: "Frontend (React)" },
              { href: "/services", label: "All Services" },
            ]}
          />
        </div>
      </section>
      
      
      {/* ================= PACKAGES ================= */}
      <section id="packages" className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <p className="text-xs font-extrabold tracking-[0.28em] text-slate-500">PACKAGES</p>

          <h2 className="mt-2 text-3xl font-extrabold">
            {TARGET_KEYWORD} packages
          </h2>

          <p className="mt-2 max-w-3xl text-sm leading-7 text-slate-600">
            We donâ€™t show fixed public pricing because scope varies (pages, design complexity, content, integrations).
            Choose a package scope and request a quotation.
          </p>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            <QuoteOnlyCard
              title="Starter Website"
              subtitle="Small business / basic website"
              items={[
                "Up to 5 pages",
                "Premium sections + clean UI",
                "Basic SEO-ready structure",
                "Contact form + CTA flow",
                "After-sale support option",
              ]}
            />
            <QuoteOnlyCard
              featured
              title="Business Website"
              subtitle="Multi-page business + SEO foundation"
              items={[
                "Up to 12 pages",
                "SEO structure + internal linking",
                "Speed optimization pass",
                "Security hardening basics",
                "After-sale support priority",
              ]}
            />
            <QuoteOnlyCard
              title="WooCommerce Store"
              subtitle="E-commerce / product website"
              items={[
                "Shop + product pages",
                "Category structure + filters UX",
                "Checkout flow setup",
                "Performance + security checklist",
                "Payment guidance (scope-based)",
              ]}
            />
          </div>

          <div className="mt-10 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="min-w-0">
                <div className="text-sm font-extrabold text-slate-900">
                  Want a custom WordPress scope?
                </div>
                <p className="mt-1 text-sm text-slate-600">
                  Send your page list + features. Weâ€™ll reply with timeline and quotation.
                </p>
              </div>

              <a
                href="/contact/"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-slate-900 px-6 py-3 text-sm font-extrabold text-white transition hover:bg-slate-800"
              >
                Request Quotation <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
      
      
      {/* ================= FAQ + CTA ================= */}
      <section className="mx-auto max-w-6xl px-4 py-14">
        <p className="text-xs font-extrabold tracking-[0.28em] text-slate-500">FAQ</p>

        <h2 className="mt-2 text-3xl font-extrabold">
          {TARGET_KEYWORD} questions start
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

        <div className="mt-12 overflow-hidden rounded-3xl border border-slate-200 bg-slate-900 p-6 sm:p-10">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="min-w-0">
              <div className="text-xl font-extrabold text-white">
                Need {TARGET_KEYWORD} that ranks and stays supported after delivery?
              </div>
              <p className="mt-2 text-sm text-white/80">
                Share your requirementsâ€”our team will reply with a clear plan, timeline & quotation.
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                <DarkChip icon={Zap} text="Fast" />
                <DarkChip icon={Search} text="SEO" />
                <DarkChip icon={Lock} text="Secure" />
                <DarkChip icon={Headphones} text="After-sale support" />
              </div>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href="/contact/"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-yellow-400 px-6 py-3 text-sm font-extrabold text-slate-900 transition hover:bg-yellow-500"
              >
                Request Quotation <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="/services"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/20 bg-white/10 px-6 py-3 text-sm font-extrabold text-white transition hover:bg-white/15"
              >
                See all services <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        {/* âœ… SEO helper hidden text */}
        <p className="sr-only">
          {TARGET_KEYWORD} by Mugnee IT Solutions â€” WordPress website design, portfolio website,
          healthcare website, restaurant website, life coach website, resume website, business website,
          e-commerce website, WooCommerce store, SEO-ready structure, speed optimization, and after-sale support.
        </p>
      </section>
      
    </main>
  );
}

/* =========================
   UI Components (local)
   ========================= */

function WordPressPillarCard({
  icon: Icon,
  title,
  desc,
}: {
  icon: LucideIcon;
  title: string;
  desc: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 transition hover:-translate-y-1 hover:bg-white hover:shadow-md">
      <div className="grid h-11 w-11 place-items-center rounded-2xl bg-slate-900">
        <Icon className="h-5 w-5 text-white" />
      </div>
      <h3 className="mt-4 text-base font-extrabold text-slate-900">{title}</h3>
      <p className="mt-1 text-sm leading-6 text-slate-600">{desc}</p>
    </div>
  );
}

function WordPressDeliveryModels() {
  const models = [
    {
      icon: ClipboardList,
      title: "Requirement-led Planning",
      whatItIs:
        "A structured planning model where page hierarchy, content blocks, and plugin scope are finalized first.",
      howWeUse:
        "Best for business websites that need predictable delivery and clear approval checkpoints.",
      points: [
        "Page map and conversion flow definition",
        "Theme/plugin scope lock before build",
        "Milestone approvals before launch phase",
      ],
    },
    {
      icon: RefreshCw,
      title: "Iterative Build + Feedback",
      whatItIs:
        "An iterative cycle where design and frontend sections are improved in rounds based on review feedback.",
      howWeUse:
        "Best for brands that want polish and refinements before final deployment.",
      points: [
        "Section-wise review and revision flow",
        "Incremental UI and content updates",
        "Faster alignment with stakeholder feedback",
      ],
    },
    {
      icon: Settings2,
      title: "Maintenance Workflow",
      whatItIs:
        "A post-launch model for updates, security checks, performance tuning, and small feature changes.",
      howWeUse:
        "Best for teams that need ongoing stability and monthly improvement support.",
      points: [
        "Update and compatibility checks",
        "Issue tracking and safe fix process",
        "Regular optimization and support cycle",
      ],
    },
  ];

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
      <p className="text-xs font-extrabold tracking-[0.25em] text-slate-500">
        DELIVERY MODELS
      </p>
      <h2 className="mt-2 text-2xl font-extrabold text-slate-900 sm:text-3xl">
        Delivery Models We Use for WordPress Projects
      </h2>
      <p className="mt-3 max-w-4xl text-sm leading-7 text-slate-600 sm:text-base">
        We choose workflow style based on project complexity, update frequency, and business deadlines
        so your WordPress build stays fast, stable, and easy to manage.
      </p>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {models.map((m) => (
          <article key={m.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <div className="flex items-start gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-2xl bg-slate-900">
                <m.icon className="h-5 w-5 text-white" />
              </span>
              <div>
                <h3 className="text-base font-extrabold text-slate-900">{m.title}</h3>
                <p className="mt-1 text-sm leading-6 text-slate-600">{m.whatItIs}</p>
                <p className="mt-2 text-sm leading-6 text-slate-700">
                  <span className="font-bold text-slate-900">How we follow it:</span> {m.howWeUse}
                </p>
              </div>
            </div>

            <ul className="mt-4 space-y-2">
              {m.points.map((point) => (
                <li key={point} className="flex items-start gap-2 text-sm text-slate-700">
                  <span className="mt-1 h-2 w-2 rounded-full bg-yellow-400" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </div>
  );
}

function InfoCard({
  icon: Icon,
  title,
  items,
}: {
  icon: LucideIcon;
  title: string;
  items: string[];
}) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex items-start gap-3">
        <div className="grid h-12 w-12 place-items-center rounded-2xl bg-slate-900">
          <Icon className="h-6 w-6 text-white" />
        </div>
        <div className="min-w-0">
          <div className="text-sm font-extrabold text-slate-900">{title}</div>
          <ul className="mt-3 space-y-2 text-sm text-slate-700">
            {items.map((x) => (
              <li key={x} className="flex items-start gap-2">
                <CheckCircle2 className="mt-1 h-4 w-4 text-emerald-600" />
                <span className="leading-7">{x}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function SoftPanel({
  icon: Icon,
  title,
  desc,
  bullets,
  ctas,
}: {
  icon: LucideIcon;
  title: string;
  desc: string;
  bullets: string[];
  ctas?: { href: string; label: string }[];
}) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex items-start gap-3">
        <div className="grid h-12 w-12 place-items-center rounded-2xl bg-slate-900">
          <Icon className="h-6 w-6 text-white" />
        </div>
        <div className="min-w-0">
          <div className="text-sm font-extrabold text-slate-900">{title}</div>
          <p className="mt-2 text-sm leading-7 text-slate-600">{desc}</p>

          <ul className="mt-4 space-y-2 text-sm text-slate-700">
            {bullets.map((x) => (
              <li key={x} className="flex items-start gap-2">
                <CheckCircle2 className="mt-1 h-4 w-4 text-emerald-600" />
                <span className="leading-7">{x}</span>
              </li>
            ))}
          </ul>

          {ctas?.length ? (
            <div className="mt-5 flex flex-wrap gap-2 text-xs font-extrabold">
              {ctas.map((c) => (
                <a
                  key={c.href}
                  href={c.href}
                  className="rounded-full border border-slate-200 bg-slate-50 px-3 py-2 hover:bg-white"
                >
                  {c.label}
                </a>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

function QuoteOnlyCard({
  title,
  subtitle,
  items,
  featured,
}: {
  title: string;
  subtitle: string;
  items: string[];
  featured?: boolean;
}) {
  return (
    <div
      className={[
        "relative overflow-hidden rounded-3xl border bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg",
        featured ? "border-indigo-300 ring-1 ring-indigo-200" : "border-slate-200",
      ].join(" ")}
    >
      {featured && (
        <div className="absolute right-4 top-4 rounded-full bg-indigo-100 px-3 py-1 text-xs font-extrabold text-indigo-700">
          Recommended
        </div>
      )}

      <div className="text-sm font-extrabold text-slate-900">{title}</div>
      <div className="mt-1 text-sm text-slate-600">{subtitle}</div>

      <div className="mt-6 space-y-3">
        {items.map((i) => (
          <div key={i} className="flex items-start gap-2 text-sm text-slate-700">
            <span className="mt-1 grid h-5 w-5 place-items-center rounded-full bg-emerald-50 ring-1 ring-emerald-100">
              <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
            </span>
            <span className="leading-7">{i}</span>
          </div>
        ))}
      </div>

      <a
        href="/contact/"
        className={[
          "group mt-7 inline-flex w-full items-center justify-center gap-2 rounded-2xl px-6 py-3 text-sm font-extrabold transition",
          featured ? "bg-indigo-600 text-white hover:bg-indigo-700" : "bg-slate-900 text-white hover:bg-slate-800",
        ].join(" ")}
      >
        Request Quotation
        <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
      </a>
    </div>
  );
}

function Mini({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-2">
      <span className="mt-1 h-2 w-2 rounded-full bg-yellow-300" />
      <span>{text}</span>
    </div>
  );
}

function DarkChip({ icon: Icon, text }: { icon: LucideIcon; text: string }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-extrabold text-white">
      <Icon className="h-3.5 w-3.5 text-white" />
      {text}
    </span>
  );
}








