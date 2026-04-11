import type { ReactNode } from "react";
// app/services/shopify/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  CreditCard,
  Gauge,
  LineChart,
  Lock,
  Package,
  Rocket,
  Search,
  ShieldCheck,
  Sparkles,
  Store,
  Timer,
  Headphones,
  RefreshCw,
  Users,
  Settings,
  Boxes,
  Globe,
  ClipboardList,
  Wrench,
} from "lucide-react";
import {
  ServiceCustomerGuide,
  ServiceFlowStrip,
  ServiceQuickSummary,
  ServiceUseCasesGrid,
} from "@/components/sections/ServiceVisualBlocks";

/* ================= CONFIG ================= */
const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "https://mugneeit.com";
const PAGE_PATH = "/services/shopify";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

const TARGET_KEYWORD = "Shopify Store Development";

/* âœ… SEO Titles (< 60 chars) */
const META_TITLE = "Shopify Store Development | SEO, Fast & Sales";
const OG_TITLE = "Shopify Store Development â€” Fast, SEO & Sales";

/* ================= META ================= */
export const metadata: Metadata = {
  title: META_TITLE,
  description:
    "Shopify store development for high-converting eCommerce. Premium UI, fast load, product pages, checkout setup, payments, apps, SEO foundation, and sales support.",
  alternates: { canonical: PAGE_URL },

  // âœ… Google + Social
  keywords: [
    "Shopify Store Development",
    "Shopify Website Development",
    "Shopify Expert",
    "Shopify SEO",
    "Shopify Speed Optimization",
    "Shopify CRO",
    "eCommerce website development",
  ],
  metadataBase: new URL(SITE_URL),

  openGraph: {
    title: OG_TITLE,
    description:
      "We build modern Shopify stores with conversion-first design, optimized product pages, and performance-focused setup.",
    url: PAGE_URL,
    siteName: "Mugnee IT Solutions",
    type: "website",
    // images: [`${SITE_URL}/images/og/shopify.png`], // optional
  },

  twitter: {
    card: "summary_large_image",
    title: OG_TITLE,
    description:
      "Modern Shopify stores with conversion-first design, optimized product pages, and speed-focused setup.",
    // images: [`${SITE_URL}/images/og/shopify.png`], // optional
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

/* ================= DATA ================= */
const faqs = [
  {
    q: "What is Shopify and how does it work?",
    a: "Shopify is a hosted eCommerce platform where you can manage products, collections, payments, orders, shipping, and marketing from one dashboard. You run your store without handling server maintenance like a custom system.",
  },
  {
    q: "Do you provide Shopify store development from scratch?",
    a: "Yes. We build the store setup, theme, branding, collections, products, navigation, pages, and essential settingsâ€”ready to sell.",
  },
  {
    q: "Will my Shopify store be SEO-friendly?",
    a: "Yes. We set SEO basics: clean structure, collection hierarchy, metadata guidance, image optimization, and indexing readiness. Final SEO performance depends on product content, competition, and marketing consistency.",
  },
  {
    q: "Do you optimize product pages for conversion?",
    a: "Yes. We improve product layout, images, trust blocks, shipping/returns info, upsells, and CTA flow to increase conversion rate.",
  },
  {
    q: "Can you set up payments, shipping, and taxes?",
    a: "Yes. We configure payment gateways, shipping zones/rates, tax settings, and checkout essentials based on your region and requirements.",
  },
  {
    q: "Can you integrate apps (reviews, upsells, email, etc.)?",
    a: "Yes. We recommend lightweight apps and configure them carefully so the store stays fast and stable.",
  },
  {
    q: "Do you provide sales support?",
    a: "Yes. We provide sales support and respond quickly. We aim to resolve common store issues within 24 hours depending on severity and access.",
  },
  {
    q: "Do you offer fixed public pricing?",
    a: "We show package scope, but pricing depends on product count, theme complexity, apps/integrations, and custom work. Request a quote anytime.",
  },
];

/* ================= SEO JSON-LD ================= */
function buildJsonLd() {
  const organization = {
    "@type": "Organization",
    name: "Mugnee IT Solutions",
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "sales",
        availableLanguage: ["English", "Bengali"],
        url: `${SITE_URL}/contact`,
      },
      {
        "@type": "ContactPoint",
        contactType: "customer support",
        availableLanguage: ["English", "Bengali"],
        url: `${SITE_URL}/contact/`,
      },
    ],
    // âœ… Add real profile links if available (keep empty commented if not)
    // sameAs: [
    //   "https://www.facebook.com/yourpage",
    //   "https://www.linkedin.com/company/yourcompany",
    //   "https://www.youtube.com/@yourchannel",
    // ],
  };

  const service = {
    "@type": "Service",
    name: "Shopify Store Development Services",
    serviceType: TARGET_KEYWORD,
    provider: {
      "@type": "Organization",
      name: "Mugnee IT Solutions",
      url: SITE_URL,
    },
    areaServed: ["Bangladesh", "Asia", "Middle East", "Europe", "North America", "Worldwide"],
    url: PAGE_URL,
    description:
      "Shopify store development with premium UI, conversion-first pages, speed optimization, SEO foundation, and sales support.",
  };

  const breadcrumb = {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
      { "@type": "ListItem", position: 2, name: "Services", item: `${SITE_URL}/services/` },
      { "@type": "ListItem", position: 3, name: "Shopify", item: PAGE_URL },
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

  const webPage = {
    "@type": "WebPage",
    name: META_TITLE,
    url: PAGE_URL,
    description:
      "Shopify store development with premium UI, speed, SEO foundation, and sales support.",
    isPartOf: { "@type": "WebSite", name: "Mugnee IT Solutions", url: SITE_URL },
  };

  return {
    "@context": "https://schema.org",
    "@graph": [organization, service, breadcrumb, faq, webPage],
  };
}

/* ================= PAGE ================= */
export default function ShopifyServicePage() {
  const jsonLd = buildJsonLd();

  const SERVICES: { title: string; desc: string; Icon: LucideIcon; pills: string[] }[] = [
    {
      title: "Shopify Store Development Setup",
      desc: "Theme install, branding, pages, menus, collections & product base setup.",
      Icon: Store,
      pills: ["Theme", "Branding", "Pages", "Collections"],
    },
    {
      title: "Shopify Store Development UI & CRO",
      desc: "Conversion-first layout, product page UX, trust blocks & upsell flow.",
      Icon: LineChart,
      pills: ["CRO", "Product UX", "Trust", "Upsell"],
    },
    {
      title: "Shopify Store Development Checkout",
      desc: "Payment gateway, shipping rules, taxes and checkout essentials setup.",
      Icon: CreditCard,
      pills: ["Payments", "Shipping", "Taxes", "Checkout"],
    },
    {
      title: "Shopify Store Development SEO Base",
      desc: "Collection structure, meta guidance, indexing readiness & on-page basics.",
      Icon: Search,
      pills: ["Meta", "Structure", "Indexing", "Images"],
    },
    {
      title: "Shopify Store Development Speed",
      desc: "Performance-friendly theme use, app hygiene and speed checklist setup.",
      Icon: Gauge,
      pills: ["Speed", "Apps", "UX", "Core Web Vitals"],
    },
    {
      title: "Shopify Store Development Security",
      desc: "Access control, safe apps, admin best practices and store protection basics.",
      Icon: Lock,
      pills: ["Secure", "Access", "Apps", "Best Practices"],
    },
  ];

  const BENEFITS: { title: string; desc: string; Icon: LucideIcon }[] = [
    {
      title: "Shopify Store Development Saves Time",
      desc: "No server maintenance. You focus on products, orders, and marketing.",
      Icon: Rocket,
    },
    {
      title: "Shopify Store Development Scales",
      desc: "Add products, collections, apps, and marketing features as you grow.",
      Icon: Boxes,
    },
    {
      title: "Shopify Store Development Sells Better",
      desc: "Optimized product layout + trust elements improves conversion rate.",
      Icon: LineChart,
    },
    {
      title: "Shopify Store Development is Reliable",
      desc: "Hosted platform with stable infrastructure and secure checkout flow.",
      Icon: ShieldCheck,
    },
  ];

  const PROCESS: { title: string; desc: string; Icon: LucideIcon }[] = [
    {
      title: "Shopify Store Development Planning",
      desc: "We collect product list, brand assets, and page requirements.",
      Icon: Package,
    },
    {
      title: "Shopify Store Development Design",
      desc: "Theme + sections set up with premium storefront structure.",
      Icon: Sparkles,
    },
    {
      title: "Shopify Store Development Build",
      desc: "Collections, products, shipping, taxes, payments and apps setup.",
      Icon: Settings,
    },
    {
      title: "Shopify Store Development Launch",
      desc: "Final QA, speed check, SEO basics, and go-live checklist.",
      Icon: Globe,
    },
  ];
  const USE_CASES: { title: string; desc: string; Icon: LucideIcon; pills: string[] }[] = [
    {
      title: "New ecommerce launches",
      desc: "Best for brands that need a store, product structure, payments, and go-live guidance fast.",
      Icon: Rocket,
      pills: ["Setup", "Catalog", "Launch"],
    },
    {
      title: "Stores needing better conversion",
      desc: "Useful when traffic exists but product pages, trust blocks, or checkout flow need improvement.",
      Icon: LineChart,
      pills: ["CRO", "Product UX", "Trust"],
    },
    {
      title: "Growing product catalogs",
      desc: "Ideal for businesses adding collections, apps, and structured scaling over time.",
      Icon: Boxes,
      pills: ["Scale", "Collections", "Apps"],
    },
  ];

  const keywordPages = [
    {
      title: "Shopify Website Development",
      desc: "Full store build with design, pages, and structure.",
      href: "/services/shopify/shopify-website-development",
    },
    {
      title: "Shopify Store Setup Service",
      desc: "Launch-ready setup with products, apps, and checkout.",
      href: "/services/shopify/shopify-store-setup-service",
    },
    {
      title: "Shopify Theme Customization",
      desc: "Custom sections, UI tweaks, and conversion layout.",
      href: "/services/shopify/shopify-theme-customization",
    },
    {
      title: "Shopify Speed Optimization",
      desc: "Performance tuning for faster load and better UX.",
      href: "/services/shopify/shopify-speed-optimization",
    },
    {
      title: "Shopify SEO Service",
      desc: "On-page SEO setup for clean structure and indexing.",
      href: "/services/shopify/shopify-seo-service",
    },
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

      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden bg-slate-950 pb-12 pt-24 sm:pb-16 sm:pt-28" aria-labelledby="shopify-hero-title">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(90%_120%_at_10%_20%,rgba(250,204,21,0.22),transparent_45%),radial-gradient(70%_80%_at_85%_25%,rgba(232,121,249,0.16),transparent_48%),linear-gradient(120deg,#020617_0%,#111827_48%,#1e1b4b_100%)]" />
          <div className="absolute inset-0 opacity-[0.12] [background:radial-gradient(circle_at_1px_1px,rgba(255,255,255,.45)_1px,transparent_0)] [background-size:20px_20px]" />
          <div className="pointer-events-none absolute -left-12 top-16 h-56 w-56 rounded-full bg-yellow-300/15 blur-3xl" />
          <div className="pointer-events-none absolute right-0 top-24 h-64 w-64 rounded-full bg-fuchsia-300/15 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-6xl px-4">
          <nav className="text-xs font-bold text-white/85 drop-shadow">
            <Link prefetch={false} href="/" className="hover:text-white">Home</Link>
            <span className="mx-2 text-white/60">/</span>
            <Link prefetch={false} href="/services" className="hover:text-white">Services</Link>
            <span className="mx-2 text-white/60">/</span>
            <span className="text-yellow-300">Shopify</span>
          </nav>

          <div className="mt-10 grid gap-10 lg:grid-cols-[1.1fr_.9fr] lg:items-center">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[11px] font-extrabold tracking-[0.18em] text-white backdrop-blur">
                SHOPIFY STORE DEVELOPMENT STUDIO
              </p>

              <h1 id="shopify-hero-title" className="mt-4 text-4xl font-extrabold leading-tight text-white sm:text-5xl">
                Shopify Store Development
                <span className="text-yellow-300"> Services</span>
              </h1>

              <p className="mt-4 max-w-2xl text-base leading-7 text-white/90 sm:text-lg">
                Premium UI, conversion-first product pages, clean checkout flow, SEO foundation, and performance-focused setup for high-converting eCommerce stores.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {[
                  "Store Setup",
                  "Product and Collection UX",
                  "Speed Optimization",
                  "Shopify SEO Base",
                  "Sales Support",
                ].map((tag) => (
                  <span key={tag} className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] font-extrabold text-white backdrop-blur">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href="/contact/"
                  className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-yellow-400 px-7 py-3.5 text-sm font-extrabold text-slate-900 shadow-[0_10px_30px_rgba(0,0,0,.25)] transition hover:-translate-y-[1px] hover:bg-yellow-500"
                >
                  Start Your Shopify Project
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
                  <span className="h-2 w-2 rounded-full bg-emerald-400" /> Conversion-first UI
                </span>
                <span className="inline-flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-fuchsia-400" /> SEO-safe structure
                </span>
                <span className="inline-flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-yellow-300" /> Fast launch workflow
                </span>
                <span className="inline-flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" /> Remote support
                </span>
              </div>
            </div>

            <div className="grid gap-4">
              <div className="rounded-3xl border border-white/20 bg-white/10 p-6 backdrop-blur">
                <div className="text-sm font-extrabold uppercase tracking-widest text-white/90">
                  Shopify Coverage
                </div>
                <div className="mt-4 space-y-3 text-sm text-white/90">
                  <Mini text="Store setup, branding, pages, collections, and product structure" />
                  <Mini text="Checkout, payment, shipping, and tax configuration" />
                  <Mini text="SEO base setup and performance-focused implementation" />
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

      <ServiceCustomerGuide pillar="shopify" />

      <ServiceQuickSummary
        title="Shopify store snapshot"
        intro="These cards turn the core store-building scope into a cleaner visual overview so the page feels easier to understand."
        items={SERVICES.slice(0, 4).map(({ Icon, ...item }) => ({ ...item, icon: Icon }))}
      />

      <ServiceUseCasesGrid
        title="Where Shopify helps most"
        intro="A simple scan-friendly breakdown of the businesses and situations this service is built for."
        items={USE_CASES.map(({ Icon, ...item }) => ({ ...item, icon: Icon }))}
      />

      <ServiceFlowStrip
        title="Shopify delivery flow"
        intro="A short process strip so visitors can quickly understand how the store moves from planning to launch."
        steps={PROCESS.map(({ Icon, title, desc }) => ({ icon: Icon, title, desc }))}
      />

      <section className="mx-auto max-w-6xl px-4 py-12" id="what-is-shopify-development">
        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
          <p className="text-xs font-extrabold tracking-[0.24em] text-slate-500">
            WHAT IS SHOPIFY WEBSITE DEVELOPMENT
          </p>
          <h2 className="mt-2 text-2xl font-extrabold text-slate-900 sm:text-3xl">
            What is Shopify Website Development and how does it work?
          </h2>
          <p className="mt-2 max-w-4xl text-sm leading-7 text-slate-600">
            Shopify website development means building and configuring a complete eCommerce store on
            Shopify so you can sell products without managing server infrastructure. We structure your
            storefront, collections, product pages, checkout flow, shipping, payment settings, and app
            integrations based on your business model.
          </p>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {[
              "Storefront setup: theme, homepage sections, navigation, trust blocks",
              "Catalog setup: collections, product taxonomy, variant and filter planning",
              "Checkout setup: payment gateways, shipping zones, tax and policy pages",
              "Growth setup: SEO basics, analytics flow, app hygiene, and conversion structure",
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
            Real business benefits of Shopify store development
          </h2>
          <p className="mt-2 max-w-4xl text-sm leading-7 text-slate-600">
            Shopify gives speed-to-market, stable commerce operations, and easier store management.
            With the right structure, it helps brands launch quickly and improve conversion without
            rebuilding from scratch every few months.
          </p>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {[
              "Faster launch timeline for new products and campaigns",
              "Lower technical overhead because hosting and core platform are managed",
              "Conversion-focused product and checkout UX for better sales performance",
              "Scalable app ecosystem for reviews, upsells, email, and automation",
              "Cleaner operational flow for orders, inventory, shipping, and customer management",
              "Support-ready architecture for post-launch optimization and growth",
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
          <h2 className="mt-2 text-2xl font-extrabold text-slate-900 sm:text-3xl">
            Shopify Store Development vs other options
          </h2>
          <p className="mt-2 max-w-4xl text-sm leading-7 text-slate-600">
            Choosing the right platform depends on launch speed, budget, customization depth, and
            maintenance capacity. Shopify is often best for brands that need reliable commerce
            operations with faster go-live.
          </p>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {[
              "Shopify vs custom build: faster launch and easier operations, with lower maintenance load",
              "Shopify vs generic templates: better conversion structure when built by an experienced team",
              "Shopify vs marketplace-only selling: full brand control and customer ownership",
              "Shopify vs low-cost quick setups: stronger stability, clearer QA, and scalable growth path",
              "Shopify plus structured service: better handover, support workflow, and long-term optimization",
              "Best-fit use case: product-focused brands that need speed, reliability, and sales performance",
            ].map((item) => (
              <div key={item} className="rounded-2xl border border-slate-200 bg-white p-4 text-sm font-semibold text-slate-700">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* ================= WHAT IS SHOPIFY ================= */}
      <section className="mx-auto max-w-6xl px-4 py-14" id="what-is-shopify">
        <SectionKicker>SHOPIFY CAPABILITIES</SectionKicker>
        <SectionTitle>What Shopify helps you operate day to day</SectionTitle>
        <p className="mt-2 max-w-3xl text-sm leading-7 text-slate-600">
          Beyond launch, Shopify helps your team run daily eCommerce operations from one dashboard.
          This includes product management, order flow, marketing app integrations, and checkout performance.
        </p>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          <InfoCard
            icon={Store}
            title={`${TARGET_KEYWORD} dashboard`}
            items={[
              "Manage products, collections & inventory",
              "Track orders, customers and reports",
              "Add apps for reviews, email and upsells",
            ]}
          />
          <InfoCard
            icon={CreditCard}
            title={`${TARGET_KEYWORD} checkout flow`}
            items={[
              "Secure checkout and payments setup",
              "Shipping, taxes and location rules",
              "Trust-first checkout experience",
            ]}
          />
          <InfoCard
            icon={Search}
            title={`${TARGET_KEYWORD} SEO base`}
            items={[
              "Collection/category structure planning",
              "Meta + image optimization guidance",
              "Indexing readiness for Google",
            ]}
          />
        </div>
      </section>
      
      
      {/* ================= BENEFITS ================= */}
      <section className="bg-slate-50" id="benefits">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <SectionKicker>BENEFITS</SectionKicker>
          <SectionTitle>{TARGET_KEYWORD} benefits for business</SectionTitle>
          <p className="mt-2 max-w-3xl text-sm leading-7 text-slate-600">
            If you want a reliable eCommerce store fast, {TARGET_KEYWORD} is a strong choice. You
            get speed, stability, and easy management with scalable features.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {BENEFITS.map(({ title, desc, Icon }) => (
              <div
                key={title}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-slate-900">
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <div className="mt-4 text-sm font-extrabold text-slate-900">{title}</div>
                <p className="mt-2 text-sm leading-7 text-slate-600">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      
      {/* ================= SERVICES ================= */}
      <section className="mx-auto max-w-6xl px-4 py-14" id="services">
        <SectionKicker>SERVICES</SectionKicker>
        <SectionTitle>{TARGET_KEYWORD} services we provide</SectionTitle>
        <p className="mt-2 max-w-3xl text-sm leading-7 text-slate-600">
          We provide end-to-end {TARGET_KEYWORD}: design, setup, SEO basics, speed, security, and
          sales supportâ€”so you can sell confidently.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map(({ title, desc, Icon, pills }) => (
            <BuildCard key={title} icon={Icon} title={title} desc={desc} pills={pills} accent="slate" />
          ))}
        </div>
      </section>
      
      
      {/* ================= PROCESS ================= */}
      <section className="bg-slate-50" id="process">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <SectionKicker>PROCESS</SectionKicker>
          <SectionTitle>{TARGET_KEYWORD} delivery process</SectionTitle>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PROCESS.map(({ title, desc, Icon }) => (
              <div key={title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-slate-900">
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <div className="mt-4 text-sm font-extrabold text-slate-900">{title}</div>
                <p className="mt-2 text-sm leading-7 text-slate-600">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      
      {/* ================= HOW WE WORK (NEW) ================= */}
      <section className="mx-auto max-w-6xl px-4 py-14" id="how-we-work">
        <SectionKicker>WORKFLOW</SectionKicker>
        <SectionTitle>How we work for {TARGET_KEYWORD}</SectionTitle>
        <p className="mt-2 max-w-3xl text-sm leading-7 text-slate-600">
          We follow a checklist-based workflow so your Shopify store stays fast, clean, and scalable.
          You get clear updates, structured delivery, and launch-ready setup.
        </p>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          <InfoCard
            icon={ClipboardList}
            title="Discovery & scope clarity"
            items={[
              "Product count + collections plan",
              "Theme preference + reference sites",
              "Apps & integrations requirement list",
            ]}
          />
          <InfoCard
            icon={Wrench}
            title="Build with QA checklist"
            items={[
              "Clean sections + consistent UI",
              "Checkout + payments validation",
              "Speed & SEO basics verification",
            ]}
          />
          <InfoCard
            icon={LineChart}
            title="Launch + handover"
            items={[
              "Final review + bug fix",
              "Admin training (basic)",
              "Post-launch support guidance",
            ]}
          />
        </div>
      </section>
      
      {/* ================= EXECUTION MODELS ================= */}
      <section className="mx-auto max-w-6xl px-4 py-14" id="shopify-execution-models">
        <SectionKicker>EXECUTION MODELS</SectionKicker>
        <SectionTitle>Delivery models we use for Shopify projects</SectionTitle>
        <p className="mt-2 max-w-3xl text-sm leading-7 text-slate-600">
          We select the model based on catalog size, campaign timeline, and growth stage so your
          Shopify store launches clean and scales without operational issues.
        </p>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          <InfoCard
            icon={ClipboardList}
            title="Catalog-first launch model"
            items={[
              "Collections, products, and navigation planned first",
              "Checkout, shipping, and tax settings validated before launch",
              "Best for product-heavy stores with fixed deadlines",
            ]}
          />
          <InfoCard
            icon={LineChart}
            title="Conversion iteration model"
            items={[
              "Launch baseline first, optimize in review rounds",
              "Refine product pages, trust blocks, and CTA flow",
              "Best for ad-driven brands improving conversion rate",
            ]}
          />
          <InfoCard
            icon={RefreshCw}
            title="Growth maintenance model"
            items={[
              "Continuous UI updates and app hygiene checks",
              "Monthly issue review and performance improvements",
              "Best for active stores with frequent campaign updates",
            ]}
          />
        </div>
      </section>

      
      {/* ================= SALES SUPPORT ================= */}
      <section className="mx-auto max-w-6xl px-4 py-14" id="sales-support">
        <SectionKicker>SALES SUPPORT</SectionKicker>
        <SectionTitle>{TARGET_KEYWORD} with sales support</SectionTitle>
        <p className="mt-2 max-w-3xl text-sm leading-7 text-slate-600">
          We donâ€™t stop after delivery. Our {TARGET_KEYWORD} includes sales support. We respond
          quickly and aim to resolve common store issues within 24 hours (scope/access-based).
        </p>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          <InfoCard
            icon={Headphones}
            title={`${TARGET_KEYWORD} support response`}
            items={[
              "Fast response after delivery",
              "Issue diagnosis & fix guidance",
              "Clear updates and communication",
            ]}
          />
          <InfoCard
            icon={RefreshCw}
            title={`${TARGET_KEYWORD} maintenance help`}
            items={[
              "Apps/theme update guidance",
              "Checkout / payment issue support",
              "Performance & UX checklist review",
            ]}
          />
          <InfoCard
            icon={Users}
            title={`${TARGET_KEYWORD} experienced team`}
            items={[
              "Structured workflow & QA checks",
              "Reliable delivery consistency",
              "Long-term support mindset",
            ]}
          />
        </div>

        {/* âœ… Support commitment micro-section */}
        <div className="mt-10 rounded-3xl border border-slate-200 bg-white p-6">
          <div className="flex items-start gap-3">
            <div className="grid h-12 w-12 place-items-center rounded-2xl bg-slate-900">
              <Timer className="h-5 w-5 text-white" />
            </div>
            <div className="min-w-0">
              <div className="text-sm font-extrabold text-slate-900">Support commitment</div>
              <p className="mt-1 text-sm leading-7 text-slate-600">
                We respond fast and aim to resolve common issues within 24 hours depending on access,
                severity, and Shopify/app limitations. Youâ€™ll always get clear status updates.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 rounded-3xl border border-slate-200 bg-slate-900 p-6 sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="min-w-0">
              <div className="text-sm font-extrabold text-white">Need urgent Shopify help?</div>
              <p className="mt-1 text-sm text-white/75">
                Share the issue details and access scopeâ€”weâ€™ll guide the fix quickly.
              </p>
            </div>
            <a
              href="/contact/"
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-yellow-400 px-6 py-3 text-sm font-extrabold text-slate-900 transition hover:bg-yellow-500"
            >
              Contact Support <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>
      
      
      {/* ================= WHY CHOOSE US ================= */}
      <section className="bg-slate-50" id="why-us">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <SectionKicker>WHY US</SectionKicker>
          <SectionTitle>Why {TARGET_KEYWORD} with Mugnee IT</SectionTitle>
          <p className="mt-2 max-w-3xl text-sm leading-7 text-slate-600">
            We follow a quality-first Shopify workflow: clean implementation, QA/SQA checks, and
            handover-ready documentation so your team can run the store with confidence.
          </p>

          {/* âœ… Strong â€œwe are bestâ€ bullets */}
          <ul className="mt-5 max-w-3xl space-y-2 text-sm text-slate-700">
            {[
              "We build conversion-first product pages (trust + CTA flow).",
              "We keep the store fast by using lightweight themes and app hygiene.",
              "We follow a QA checklist before launch (checkout, shipping, SEO basics).",
              "We provide sales support with clear communication and quick response.",
            ].map((x) => (
              <li key={x} className="flex items-start gap-2">
                <CheckCircle2 className="mt-1 h-4 w-4 text-emerald-600" />
                <span className="leading-7">{x}</span>
              </li>
            ))}
          </ul>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            <InfoCard
              icon={BadgeCheck}
              title="Clean build quality"
              items={[
                "Structured storefront layout and reusable sections",
                "Stable theme and app configuration",
                "Production-ready checkout and collection setup",
              ]}
            />
            <InfoCard
              icon={Search}
              title="QA and SQA validation"
              items={[
                "Storeflow checks before final handover",
                "Responsive pass on major devices",
                "Issue-review workflow to reduce launch bugs",
              ]}
            />
            <InfoCard
              icon={ShieldCheck}
              title="Handover-ready delivery"
              items={[
                "Commented implementation notes where needed",
                "Admin operation guidance for your team",
                "Post-launch support and fix coverage",
              ]}
            />
          </div>

          <div className="mt-10 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-slate-900">
                <Search className="h-5 w-5 text-white" />
              </div>
              <div>
                <div className="text-sm font-extrabold">Related services</div>
                <div className="mt-1 text-sm text-slate-600">
                  Need SEO or custom development? Explore related services.
                </div>
              </div>
            </div>

            <div className="mt-5 flex flex-wrap gap-2 text-xs font-extrabold">
              <Link prefetch={false}
                href="/services/seo"
                className="rounded-full border border-slate-200 bg-slate-50 px-3 py-2 hover:bg-slate-100"
              >
                SEO Service
              </Link>
              <Link prefetch={false}
                href="/services/frontend"
                className="rounded-full border border-slate-200 bg-slate-50 px-3 py-2 hover:bg-slate-100"
              >
                Frontend (React)
              </Link>
              <Link prefetch={false}
                href="/services"
                className="rounded-full border border-slate-200 bg-slate-50 px-3 py-2 hover:bg-slate-100"
              >
                All Services
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      
      {/* ================= SERVICE AREAS (NEW) ================= */}
      <section className="bg-slate-50" id="service-areas">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <SectionKicker>INDUSTRIES + STORE TYPES</SectionKicker>
          <SectionTitle>Industries where our Shopify development performs best</SectionTitle>
          <p className="mt-2 max-w-3xl text-sm leading-7 text-slate-600">
            We tailor storefront structure by product type, customer behavior, and order workflow.
            This keeps store UX practical and improves long-term conversion performance.
          </p>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            <InfoCard
              icon={Store}
              title="Fashion and lifestyle stores"
              items={[
                "Collection-first navigation and visual merchandising",
                "Variant-ready product pages with size/color clarity",
                "Cross-sell and bundle logic for higher AOV",
              ]}
            />
            <InfoCard
              icon={Package}
              title="Electronics and gadget stores"
              items={[
                "Spec-focused product structure and comparison clarity",
                "Trust blocks for warranty, shipping, and returns",
                "Checkout flow optimized for lower cart drop-off",
              ]}
            />
            <InfoCard
              icon={Sparkles}
              title="Beauty and skincare brands"
              items={[
                "Story-led homepage with strong brand identity",
                "Routine and category-based product discovery flow",
                "Retention-focused layout for repeat purchases",
              ]}
            />
          </div>

          <div className="mt-6 grid gap-6 lg:grid-cols-3">
            <InfoCard
              icon={Boxes}
              title="Home and furniture"
              items={[
                "Catalog hierarchy built for large inventory browsing",
                "Filter and collection logic for easier discovery",
                "Product detail layout tuned for decision confidence",
              ]}
            />
            <InfoCard
              icon={Globe}
              title="Cross-border Shopify stores"
              items={[
                "Store setup for global audience and shipping complexity",
                "Region-aware checkout and payment considerations",
                "Operational clarity for international order flow",
              ]}
            />
            <InfoCard
              icon={Headphones}
              title="Subscription and repeat-order stores"
              items={[
                "Retention-focused product and plan presentation",
                "Lifecycle-friendly upsell and reorder pathways",
                "Support-ready structure for recurring customers",
              ]}
            />
          </div>
        </div>
      </section>
      
      
      {/* ================= PACKAGES (no fixed public pricing text) ================= */}
      <section id="packages" className="mx-auto max-w-6xl px-4 py-14">
        <SectionKicker>PACKAGES</SectionKicker>
        <SectionTitle>{TARGET_KEYWORD} package scope</SectionTitle>
        <p className="mt-2 max-w-3xl text-sm leading-7 text-slate-600">
          We donâ€™t show fixed public pricing because scope varies (products, theme, apps, integrations).
          Choose a package scope and request a quotation.
        </p>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          <QuoteOnlyCard
            title="Starter Store"
            subtitle="Small catalog / basic store"
            items={[
              "Theme setup + branding",
              "Core pages + menus",
              "Basic collection structure",
              "SEO-ready basics",
              "Delivery: 5â€“8 days",
            ]}
          />
          <QuoteOnlyCard
            featured
            title="Business Store"
            subtitle="Conversion-first store setup"
            items={[
              "Conversion-first product layout",
              "Apps setup (reviews, email, etc.)",
              "Checkout + payments setup",
              "Speed checklist pass",
              "Delivery: 8â€“14 days",
            ]}
          />
          <QuoteOnlyCard
            title="Scale Store"
            subtitle="Large catalog + custom needs"
            items={[
              "Custom sections and tweaks",
              "Advanced collection structure",
              "Analytics + event guidance",
              "Performance review pass",
              "Timeline: 2â€“6 weeks",
            ]}
          />
        </div>

        <div className="mt-10 rounded-3xl border border-slate-200 bg-slate-50 p-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="min-w-0">
              <div className="text-sm font-extrabold text-slate-900">Want a custom Shopify scope?</div>
              <p className="mt-1 text-sm text-slate-600">
                Send product count + page list + referencesâ€”weâ€™ll reply with plan & quotation.
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
      </section>
      
      
      {/* ================= KEYWORD PAGES ================= */}
      <section className="mx-auto max-w-6xl px-4 py-14">
        <SectionKicker>SHOPIFY KEYWORDS</SectionKicker>
        <SectionTitle>Shopify services by search intent</SectionTitle>
        <p className="mt-2 max-w-3xl text-sm leading-7 text-slate-600">
          Focused pages for common Shopify service keywords. Each page is unique and built for
          specific intent.
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
      
      
      {/* ================= FAQ + FINAL CTA ================= */}
      <section className="mx-auto max-w-6xl px-4 py-14" id="faq">
        <SectionKicker>FAQ</SectionKicker>
        <SectionTitle>{TARGET_KEYWORD} questions answered</SectionTitle>

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
              <div className="text-lg font-extrabold text-white">
                Need {TARGET_KEYWORD} that sells more?
              </div>
              <p className="mt-2 text-sm text-white/80">
                Share products + design referenceâ€”weâ€™ll reply with plan, timeline & quotation.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <DarkChip icon={Gauge} text="Fast" />
                <DarkChip icon={LineChart} text="Conversion" />
                <DarkChip icon={CreditCard} text="Checkout" />
                <DarkChip icon={Lock} text="Secure" />
              </div>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Link prefetch={false}
                href="/contact/"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-yellow-400 px-6 py-3 text-sm font-extrabold text-slate-900 transition hover:bg-yellow-500"
              >
                Request Quotation <ArrowRight className="h-4 w-4" />
              </Link>
              <Link prefetch={false}
                href="/services"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/20 bg-white/10 px-6 py-3 text-sm font-extrabold text-white transition hover:bg-white/15"
              >
                See all services <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* SEO helper hidden text */}
        <p className="sr-only">
          {TARGET_KEYWORD} by Mugnee IT Solutions â€” Shopify store setup, product pages, collections,
          checkout setup, payment gateway, speed optimization, SEO foundation, conversion optimization,
          and sales support.
        </p>
      </section>
      
    </main>
  );
}

/* ================= UI COMPONENTS ================= */
function Mini({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-2">
      <span className="mt-1 h-2 w-2 rounded-full bg-yellow-300" />
      <span>{text}</span>
    </div>
  );
}

function SectionKicker({ children }: { children: ReactNode }) {
  return <p className="text-xs font-extrabold tracking-[0.28em] text-slate-500">{children}</p>;
}

function SectionTitle({ children }: { children: ReactNode }) {
  return <h2 className="mt-2 text-2xl font-extrabold sm:text-3xl">{children}</h2>;
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

function BuildCard({
  icon: Icon,
  title,
  desc,
  pills,
  accent,
}: {
  icon: LucideIcon;
  title: string;
  desc: string;
  pills: string[];
  accent: "emerald" | "sky" | "yellow" | "slate";
}) {
  const accentGlow =
    accent === "emerald"
      ? "bg-emerald-200/60"
      : accent === "sky"
      ? "bg-sky-200/60"
      : accent === "yellow"
      ? "bg-yellow-200/60"
      : "bg-slate-200/60";

  return (
    <div className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <div
        className={`pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full ${accentGlow} blur-2xl opacity-0 transition-opacity group-hover:opacity-100`}
      />
      <div className="flex items-start gap-3">
        <div className="grid h-12 w-12 place-items-center rounded-2xl bg-slate-900">
          <Icon className="h-6 w-6 text-white" />
        </div>
        <div>
          <h3 className="text-base font-extrabold text-slate-900">{title}</h3>
          <p className="mt-1 text-sm text-slate-600">{desc}</p>
        </div>
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        {pills.map((p) => (
          <span
            key={p}
            className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-bold text-slate-700"
          >
            {p}
          </span>
        ))}
      </div>

      <div className="mt-6 flex items-center gap-2 text-sm font-extrabold text-slate-900">
        Learn more
        <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
      </div>
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










