// app/services/wix/page.tsx
import type { Metadata } from "next";
import {
  ArrowRight,
  Blocks,
  CheckCircle2,
  Gauge,
  Headphones,
  LayoutTemplate,
  MessageCircle,
  PhoneCall,
  Rocket,
  Search,
  ShieldCheck,
  Timer,
  Zap,
  BadgeCheck,
  ClipboardList,
  Wrench,
  Globe,
  Users,
  Sparkles,
} from "lucide-react";
import { ServiceCustomerGuide } from "@/components/sections/ServiceVisualBlocks";

/** ✅ PUBLISH SAFE: Hardcoded domain (NO localhost / NO env) */
const SITE_URL = "https://mugneeit.com"; // ✅ change only if domain changes

/** ✅ keep trailing slash policy */
const PAGE_PATH = "/services/wix/";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

const TARGET_KEYWORD = "Wix Website Development";

// ✅ < 60 chars
const META_TITLE = "Wix Website Development";
const OG_TITLE = "Wix Website Development — Premium UI + SEO Setup";

export const metadata: Metadata = {
  title: META_TITLE,
  description:
    "Wix Website Development with premium UI, mobile-first design, SEO setup, conversion-ready sections, and after-sale support. 24-hour support response + 15 days free service after delivery.",
  alternates: { canonical: PAGE_URL },

  keywords: [
    "Wix Website Development",
    "Wix Website Designer",
    "Wix Studio Development",
    "Wix Website Redesign",
    "Wix SEO Setup",
    "Mobile responsive Wix website",
    "Lead generation Wix website",
    "Business website on Wix",
  ],

  metadataBase: new URL(SITE_URL),

  openGraph: {
    title: OG_TITLE,
    description:
      "Premium Wix website build with SEO setup, speed-friendly layout, and strong after-sale support.",
    url: PAGE_URL,
    siteName: "Mugnee IT Solutions",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: OG_TITLE,
    description:
      "Premium Wix website build with SEO setup, mobile-first sections, and strong after-sale support.",
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
    q: "Do you provide after-sale support for Wix websites?",
    a: "Yes. We provide after-sale support with a fast response. We aim to respond within 24 hours and provide 15 days free service after project completion (scope/access dependent).",
  },
  {
    q: "Can Wix rank on Google properly?",
    a: "Yes—when structure, titles/meta, headings, internal links, and indexing settings are set correctly. We do on-page SEO setup and guide content structure.",
  },
  {
    q: "Do you use Wix Studio or Classic Wix?",
    a: "We can work with Wix Studio or Classic Wix depending on your layout needs. Studio is best for advanced layouts; Classic is good for simpler sites.",
  },
  {
    q: "Can you redesign my existing Wix website?",
    a: "Yes. We can rebuild sections, improve spacing, fix mobile layout, update copy structure, and improve SEO—without changing your domain.",
  },
  {
    q: "Do you set up WhatsApp, Call button, forms, and tracking?",
    a: "Yes. We can add WhatsApp/call CTA, contact forms, and analytics tracking (scope-based).",
  },
  {
    q: "Will my Wix site be mobile responsive?",
    a: "Yes. We build mobile-first sections and fix spacing for phone/tablet/desktop.",
  },
  {
    q: "Do you optimize speed / Core Web Vitals?",
    a: "We follow speed-friendly layout patterns and optimize images where possible. Final speed depends on Wix apps, scripts, fonts, and media usage.",
  },
  {
    q: "Do you provide content writing or copy guidance?",
    a: "Yes. We can guide headings + section copy structure for SEO and conversion. Full copywriting is optional (scope-based).",
  },
  {
    q: "Do you work with USA or UK clients remotely?",
    a: "Yes. We work with international clients through online meetings, clear milestones, and documented handover.",
  },
  {
    q: "Is Wix good for long-term business websites?",
    a: "Yes. Wix is suitable for long-term use when structure, SEO setup, and content are planned properly.",
  },
  {
    q: "Do you have fixed packages/prices?",
    a: "We don’t show fixed public pricing. Scope varies by pages, design complexity, apps, and integrations. You can request a quotation anytime.",
  },
];

/* ✅ Google-safe JSON-LD (NO fake offer/price/social) */
function buildJsonLd() {
  const organization = {
    "@type": "Organization",
    name: "Mugnee IT Solutions",
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
  };

  const website = {
    "@type": "WebSite",
    name: "Mugnee IT Solutions",
    url: SITE_URL,
  };

  const service = {
    "@type": "Service",
    name: "Wix Website Development Services",
    serviceType: TARGET_KEYWORD,
    provider: {
      "@type": "Organization",
      name: "Mugnee IT Solutions",
      url: SITE_URL,
    },
    areaServed: ["Bangladesh", "Worldwide"],
    url: PAGE_URL,
    description:
      "Wix Website Development with premium UI, mobile-first layout, SEO setup, conversion-ready sections, and after-sale support (24-hour response + 15 days free service).",
  };

  const webpage = {
    "@type": "WebPage",
    name: META_TITLE,
    url: PAGE_URL,
    description: metadata.description,
    isPartOf: {
      "@type": "WebSite",
      name: "Mugnee IT Solutions",
      url: SITE_URL,
    },
  };

  const breadcrumb = {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
      { "@type": "ListItem", position: 2, name: "Services", item: `${SITE_URL}/services/` },
      { "@type": "ListItem", position: 3, name: "Wix", item: PAGE_URL },
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
    "@graph": [organization, website, service, webpage, breadcrumb, faq],
  };
}

const industries = [
  "Business website",
  "Corporate website",
  "Portfolio website",
  "Restaurant website",
  "Healthcare / clinic website",
  "Life coach / consultant website",
  "Ecommerce (Wix Stores)",
  "Landing page for ads",
  "Agency / services website",
  "Education / training website",
];

const seoChecklist = [
  "Keyword-based H1 + supportive H2/H3 structure",
  "SEO titles + meta description setup (page-wise)",
  "Image alt text strategy (key sections)",
  "Internal linking plan (services + contact + related pages)",
  "Indexing guidance + sitemap basics",
  "Conversion CTA placement (WhatsApp/Call/Form)",
];

const relatedServices = [
  { href: "/services/wix/wix-seo-setup/", label: "Wix SEO Setup" },
  { href: "/services/wix/wix-redesign/", label: "Wix Website Redesign" },
  { href: "/services/wix/wix-speed-optimization/", label: "Wix Speed Optimization" },
  { href: "/services/wix/wix-maintenance-support/", label: "Wix Maintenance Support" },
  { href: "/services/wix/wix-studio-development/", label: "Wix Studio Development" },
];

export default function WixServicePage() {
  const jsonLd = buildJsonLd();

  const tel = "tel:+8801958645415";
  const wa = "https://wa.me/8801958645415";

  return (
    <main className="bg-white text-slate-900">
      {/* Tiny helper style for chips */}
      <style>{`
        .chip{
          display:inline-flex;
          align-items:center;
          gap:.4rem;
          border:1px solid rgb(226 232 240);
          background: rgb(248 250 252);
          padding:.55rem .85rem;
          border-radius:9999px;
        }
        .chip:hover{ background:#fff; }
      `}</style>

      {/* ✅ JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* sticky header spacer */}
      <div className="h-16 sm:h-20" aria-hidden="true" />

      {/* ================= HERO ================= */}
      <section
        className="relative isolate overflow-hidden min-h-[520px] bg-slate-950 sm:min-h-[620px]"
        aria-labelledby="wix-hero-title"
      >
        <div className="pointer-events-none absolute inset-0 z-10">
          <div className="absolute inset-0 bg-[radial-gradient(90%_120%_at_10%_20%,rgba(250,204,21,0.22),transparent_45%),radial-gradient(70%_80%_at_85%_25%,rgba(232,121,249,0.16),transparent_48%),linear-gradient(120deg,#020617_0%,#111827_48%,#1e1b4b_100%)]" />
          <div className="absolute inset-0 opacity-[0.12] [background:radial-gradient(circle_at_1px_1px,rgba(255,255,255,.45)_1px,transparent_0)] [background-size:20px_20px]" />
          <div className="absolute -left-12 top-16 h-56 w-56 rounded-full bg-yellow-300/15 blur-3xl" />
          <div className="absolute right-0 top-24 h-64 w-64 rounded-full bg-fuchsia-300/15 blur-3xl" />
        </div>

        <div className="relative z-20 mx-auto max-w-6xl px-4 py-16 sm:py-20">
          <nav className="text-[11px] font-bold text-white/70">
            <a href="/" className="hover:text-white">Home</a>
            <span className="mx-2">/</span>
            <a href="/services" className="hover:text-white">Services</a>
            <span className="mx-2">/</span>
            <span className="text-yellow-300">Wix</span>
          </nav>

          <div className="mt-6 inline-flex flex-wrap items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[11px] font-extrabold text-white backdrop-blur">
            <span className="grid h-6 w-6 place-items-center rounded-full bg-yellow-400 text-slate-900">?</span>
            Premium | SEO Setup | Mobile-first | Lead focused
            <span className="hidden sm:inline text-white/50">|</span>
            <span className="text-white/85">24h Support + 15 Days Free Service</span>
          </div>

          <div className="mt-8 grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <h1
                id="wix-hero-title"
                className="text-4xl font-extrabold leading-[1.05] text-white sm:text-5xl"
              >
                {TARGET_KEYWORD} <span className="text-yellow-300">Services</span>
              </h1>

              <p className="mt-4 max-w-xl text-[15px] leading-7 text-white/80">
                We build Wix websites with premium sections, mobile-first layout, SEO-ready structure
                and strong CTA flow—so your site looks modern and converts visitors into leads.
              </p>

              <div className="mt-5 flex flex-wrap gap-2 text-xs font-extrabold text-white/85">
                <span className="rounded-full border border-white/15 bg-white/10 px-3 py-2 backdrop-blur">
                  Wix Studio / Classic Wix
                </span>
                <span className="rounded-full border border-white/15 bg-white/10 px-3 py-2 backdrop-blur">
                  SEO Titles + Meta
                </span>
                <span className="rounded-full border border-white/15 bg-white/10 px-3 py-2 backdrop-blur">
                  WhatsApp + Forms
                </span>
                <span className="rounded-full border border-white/15 bg-white/10 px-3 py-2 backdrop-blur">
                  After-Sale Support
                </span>
              </div>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <a
                  href="/contact/"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-yellow-400 px-6 py-3 text-sm font-extrabold text-slate-900 shadow-[0_10px_30px_rgba(0,0,0,.25)] transition hover:-translate-y-[1px] hover:bg-yellow-500"
                >
                  Request Quotation <ArrowRight className="h-4 w-4" />
                </a>

                <a
                  href={wa}
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/20 bg-white/10 px-6 py-3 text-sm font-extrabold text-white backdrop-blur transition hover:bg-white/15"
                >
                  WhatsApp <MessageCircle className="h-4 w-4" />
                </a>

                <a
                  href={tel}
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/20 bg-white/10 px-6 py-3 text-sm font-extrabold text-white backdrop-blur transition hover:bg-white/15"
                >
                  Call <PhoneCall className="h-4 w-4" />
                </a>
              </div>

              <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-semibold text-white/80">
                <span className="inline-flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-yellow-300" /> Mobile perfect
                </span>
                <span className="inline-flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-yellow-300" /> SEO-ready structure
                </span>
                <span className="inline-flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-yellow-300" /> Lead focused layout
                </span>
              </div>
            </div>

            {/* Right card */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-[32px] border border-white/15 bg-white/5 shadow-[0_30px_90px_rgba(0,0,0,0.35)] backdrop-blur">
                <div className="p-6 sm:p-7">
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-extrabold text-white">
                      {TARGET_KEYWORD} Deliverables
                    </div>
                    <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-extrabold text-white/90">
                      PRO
                    </span>
                  </div>

                  <div className="mt-5 grid gap-4">
                    <HeroRow icon={LayoutTemplate} title="Premium sections" desc="Hero, services, proof, FAQ, CTA blocks" />
                    <HeroRow icon={Search} title="SEO setup" desc="Titles, meta, headings, internal links guidance" />
                    <HeroRow icon={Blocks} title="Wix build" desc="Wix Studio/Classic — responsive + clean spacing" />
                    <HeroRow icon={Rocket} title="Launch ready" desc="Domain, forms, WhatsApp, analytics (scope-based)" />
                  </div>

                  <div className="mt-6 rounded-2xl border border-white/15 bg-white/5 p-4">
                    <div className="flex items-center gap-3">
                      <span className="grid h-10 w-10 place-items-center rounded-2xl bg-yellow-400 text-slate-900">
                        <Headphones className="h-5 w-5" />
                      </span>
                      <div className="min-w-0">
                        <div className="text-sm font-extrabold text-white">After-sale support</div>
                        <div className="text-xs text-white/75">
                          24h response | 15 days free service after delivery
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pointer-events-none absolute -left-4 top-10 hidden sm:block">
                <GlassStat icon={Zap} title="Mobile-first" desc="Perfect spacing on phone" />
              </div>
              <div className="pointer-events-none absolute -right-4 bottom-10 hidden sm:block">
                <GlassStat icon={Gauge} title="Performance" desc="Speed-friendly layout" />
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-6xl px-4">
          <div className="h-px w-full bg-white/10" />
        </div>
      </section>

      <ServiceCustomerGuide pillar="wix" contextLabel="Wix Website Development" />

      <section className="mx-auto max-w-6xl px-4 py-12" id="what-is-wix-development">
        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
          <p className="text-xs font-extrabold tracking-[0.24em] text-slate-500">
            WHAT IS WIX WEBSITE DEVELOPMENT
          </p>
          <h2 className="mt-2 text-2xl font-extrabold text-slate-900 sm:text-3xl">
            What is Wix Website Development and how does it work?
          </h2>
          <p className="mt-2 max-w-4xl text-sm leading-7 text-slate-600">
            Wix website development means designing and configuring a complete business website on Wix
            so you can manage pages, content, and updates without technical complexity. It combines
            visual design, conversion structure, SEO setup, and mobile responsiveness in one platform.
          </p>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {[
              "Structure setup: homepage, service pages, contact flow, and navigation hierarchy",
              "Design setup: premium sections, trust blocks, and strong CTA placement",
              "SEO setup: titles, meta, headings, internal links, and indexing basics",
              "Operational setup: forms, WhatsApp/call actions, and easy content editing workflow",
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
            Real business benefits of Wix Website Development
          </h2>
          <p className="mt-2 max-w-4xl text-sm leading-7 text-slate-600">
            Wix is ideal for teams that need fast launch, simple content control, and professional
            presentation without heavy technical overhead. With the right setup, it supports lead generation
            and long-term brand growth.
          </p>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {[
              "Faster launch timeline for service and campaign websites",
              "Easy page/content updates for non-technical business teams",
              "Mobile-first experience that improves lead quality",
              "SEO-ready page structure for better indexing and visibility",
              "Lower maintenance friction compared to custom-heavy stacks",
              "Support-ready foundation for ongoing improvement",
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
            Wix Website Development vs other options
          </h2>
          <p className="mt-2 max-w-4xl text-sm leading-7 text-slate-600">
            The right platform depends on your timeline, budget, editing needs, and complexity.
            Wix is usually a strong fit when you need clean design, easy maintenance, and fast execution.
          </p>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {[
              "Wix vs custom-coded build: faster launch and easier management for business websites",
              "Wix vs low-cost quick templates: better structure when built with conversion and SEO in mind",
              "Wix vs DIY editing without strategy: professional hierarchy improves trust and user action",
              "Wix with expert setup: stronger mobile UX, cleaner CTA flow, and better long-term maintainability",
              "Best-fit scenario: service businesses needing premium look + easy content control",
              "If advanced backend logic is required, WordPress/custom stack may be more suitable",
            ].map((item) => (
              <div key={item} className="rounded-2xl border border-slate-200 bg-white p-4 text-sm font-semibold text-slate-700">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* ================= WHO IS THIS FOR (Intent match) ================= */}
      <section className="mx-auto max-w-6xl px-4 py-14">
        <p className="text-xs font-extrabold tracking-[0.28em] text-slate-500">WHO THIS IS FOR</p>
        <h2 className="mt-2 text-3xl font-extrabold">{TARGET_KEYWORD} for the right clients</h2>
        <p className="mt-2 max-w-3xl text-sm leading-7 text-slate-600">
          We build Wix websites for businesses that want a premium look, easy editing, and a clean SEO setup—without complex maintenance.
        </p>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          <InfoCard
            icon={BriefIcon}
            title="Business & service providers"
            items={["Company profile + services", "Lead capture CTA flow", "Trust blocks + proof sections"]}
          />
          <InfoCard
            icon={Users}
            title="Startups & agencies"
            items={["Fast launch for campaigns", "Wix Studio layouts (optional)", "Conversion-first landing sections"]}
          />
          <InfoCard
            icon={Globe}
            title="International clients"
            items={["Remote delivery (USA/UK/EU)", "Milestone-based updates", "Documented handover & support policy"]}
          />
        </div>

        <p className="sr-only">
          We provide Wix Website Development services for clients in Bangladesh, USA, UK, Canada, Europe and worldwide through remote collaboration.
        </p>
      </section>
      
      
      {/* ================= SEO: WHY THIS SERVICE ================= */}
      <section id="wix-seo" className="mx-auto max-w-6xl px-4 py-14">
        <p className="text-xs font-extrabold tracking-[0.28em] text-slate-500">SEO FOCUS</p>

        <h2 className="mt-2 text-3xl font-extrabold">{TARGET_KEYWORD} built for Google ranking</h2>

        <p className="mt-2 max-w-3xl text-sm leading-7 text-slate-600">
          Ranking comes from structure + content + technical settings. Our {TARGET_KEYWORD} includes SEO setup,
          page structure guidance, internal linking plan and conversion CTA placement—so Google understands your page
          and users take action.
        </p>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <InfoCard icon={Search} title={`${TARGET_KEYWORD} SEO checklist`} items={seoChecklist} />
          <InfoCard
            icon={BadgeCheck}
            title={`${TARGET_KEYWORD} quality signals (E-E-A-T)`}
            items={[
              "Clear service scope + deliverables list",
              "Workflow explanation + handover guidance",
              "After-sale support policy (scope/access based)",
              "FAQ answers + schema for rich results",
              "Internal linking to services and contact page",
            ]}
          />
        </div>
      </section>
      
      
      {/* ================= Wix vs WordPress (Comparison intent) ================= */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <p className="text-xs font-extrabold tracking-[0.28em] text-slate-500">COMPARISON</p>
          <h2 className="mt-2 text-3xl font-extrabold">Why Wix for your business website?</h2>
          <p className="mt-2 max-w-3xl text-sm leading-7 text-slate-600">
            Wix is great when you want fast launch, easy editing, built-in hosting and strong security defaults.
            If you need complex custom systems, heavy integrations or advanced control, WordPress/Custom web might be better.
            We can guide the best platform based on your goals.
          </p>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            <InfoCard icon={Zap} title="Fast launch" items={["Quick build flow", "Easy updates", "Simple publishing process"]} />
            <InfoCard icon={ShieldCheck} title="Safer defaults" items={["Built-in hosting security", "Less plugin dependency", "Lower maintenance overhead"]} />
            <InfoCard icon={Sparkles} title="Premium UI" items={["Modern sections", "Clean spacing", "Conversion-ready layout"]} />
          </div>
        </div>
      </section>
      
      
      {/* ================= SUPPORTING PAGES (Cluster links) ================= */}
      <section className="mx-auto max-w-6xl px-4 py-14">
        <p className="text-xs font-extrabold tracking-[0.28em] text-slate-500">SUPPORTING SERVICES</p>
        <h2 className="mt-2 text-3xl font-extrabold">Explore specialized Wix services</h2>
        <p className="mt-2 max-w-3xl text-sm leading-7 text-slate-600">
          These pages support our Wix pillar service and help build topical authority—better internal linking, better SEO.
        </p>

        <div className="mt-6 flex flex-wrap gap-2 text-xs font-extrabold">
          {relatedServices.map((x) => (
            <a key={x.href} href={x.href} className="chip">
              {x.label} <ArrowRight className="h-4 w-4" />
            </a>
          ))}
        </div>
      </section>
      
      
      {/* ================= GLOBAL SERVICE (worldwide intent) ================= */}
      <section id="wix-global" className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <p className="text-xs font-extrabold tracking-[0.28em] text-slate-500">WORLDWIDE</p>

          <h2 className="mt-2 text-3xl font-extrabold">Professional Wix Website Development Services</h2>

          <p className="mt-2 max-w-3xl text-sm leading-7 text-slate-600">
            We work with local and global clients through a structured workflow: clear scope, milestone reviews,
            staging review, documented handover, and fast support response.
          </p>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            <InfoCard
              icon={Globe}
              title="Remote-friendly delivery"
              items={["Online meetings + progress updates", "Staging review before publish", "Documentation + admin guidance"]}
            />
            <InfoCard
              icon={Users}
              title="Clear communication"
              items={["Requirement checklist", "Milestone-based delivery", "Revision notes & tracking"]}
            />
            <InfoCard
              icon={ShieldCheck}
              title="Secure workflow"
              items={["Role-based access guidance", "App hygiene (lightweight setup)", "Clean handover process"]}
            />
          </div>
        </div>
      </section>
      
      
      {/* ================= USE CASES ================= */}
      <section id="wix-industries" className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <p className="text-xs font-extrabold tracking-[0.28em] text-slate-500">USE CASES</p>

          <h2 className="mt-2 text-3xl font-extrabold">{TARGET_KEYWORD} for different business types</h2>

          <p className="mt-2 max-w-3xl text-sm leading-7 text-slate-600">
            We map your business type to the right sections, CTA flow, trust blocks and SEO structure—so your website
            becomes a lead generation asset.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((x) => (
              <div key={x} className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="flex items-start gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-2xl bg-slate-900">
                    <LayoutTemplate className="h-5 w-5 text-white" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-sm font-extrabold text-slate-900">{x}</div>
                    <p className="mt-1 text-sm leading-7 text-slate-600">
                      Premium layout + SEO structure + CTA setup tailored to this use-case.
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* ================= HOW WE WORK ================= */}
          <div className="mt-10 rounded-3xl border border-slate-200 bg-slate-50 p-6">
            <p className="text-xs font-extrabold tracking-[0.28em] text-slate-500">WORKFLOW</p>
            <h3 className="mt-2 text-lg font-extrabold">How we work on {TARGET_KEYWORD}</h3>

            <div className="mt-6 grid gap-4 lg:grid-cols-3">
              <MiniCard icon={ClipboardList} title="Scope & planning" desc="Page list, goals, CTA flow, section map, references." />
              <MiniCard icon={Wrench} title="Build with QA" desc="Mobile-first spacing, form testing, clean navigation, media guidance." />
              <MiniCard icon={Rocket} title="Launch & handover" desc="Final review, publish support, admin guidance, support policy." />
            </div>
          </div>
        </div>
      </section>
      
      
      {/* ================= AFTER-SALE SUPPORT ================= */}
      <section id="wix-support" className="bg-slate-950">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <p className="text-xs font-extrabold tracking-[0.28em] text-white/60">AFTER-SALE SUPPORT</p>

          <h2 className="mt-2 text-3xl font-extrabold text-white">
            {TARGET_KEYWORD} with strong after-sale service
          </h2>

          <p className="mt-2 max-w-3xl text-sm leading-7 text-white/80">
            We don’t disappear after delivery. Our {TARGET_KEYWORD} includes after-sale support.
            We aim to respond within 24 hours, and we provide 15 days free service after completing the project
            (scope/access dependent).
          </p>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            <DarkInfoCard
              icon={Timer}
              title={`${TARGET_KEYWORD} 24-hour response`}
              items={["Fast response for common issues", "Clear updates & guidance", "Support depends on access/scope"]}
            />
            <DarkInfoCard
              icon={Headphones}
              title={`${TARGET_KEYWORD} 15 days free service`}
              items={["Minor fixes & adjustments", "Section spacing / small content issues", "Post-delivery help (within policy)"]}
            />
            <DarkInfoCard
              icon={ShieldCheck}
              title={`${TARGET_KEYWORD} stability`}
              items={["Structure & QA checklist", "Safe publishing flow", "Reliable handover guidance"]}
            />
          </div>

          <div className="mt-10 rounded-3xl border border-white/15 bg-white/5 p-6 backdrop-blur">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="min-w-0">
                <div className="text-sm font-extrabold text-white">Need help fast?</div>
                <p className="mt-1 text-sm text-white/75">
                  Message us the issue details—our team will respond quickly.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <a
                  href="/contact/"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-yellow-400 px-6 py-3 text-sm font-extrabold text-slate-900 transition hover:bg-yellow-500"
                >
                  Contact Support <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href={wa}
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/20 bg-white/10 px-6 py-3 text-sm font-extrabold text-white transition hover:bg-white/15"
                >
                  WhatsApp <MessageCircle className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>

          <p className="sr-only">
            {TARGET_KEYWORD} by Mugnee IT Solutions — Wix Studio, Classic Wix, premium UI, mobile-first layout,
            SEO title meta headings indexing, WhatsApp CTA, lead conversion, after-sale support.
          </p>
        </div>
      </section>
      
      
      {/* ================= FAQ ================= */}
      <section id="wix-faq" className="mx-auto max-w-6xl px-4 py-14">
        <p className="text-xs font-extrabold tracking-[0.28em] text-slate-500">FAQ</p>
        <h2 className="mt-2 text-3xl font-extrabold">{TARGET_KEYWORD} questions</h2>

        <div className="mt-10 grid gap-4 lg:grid-cols-2">
          {faqs.map((f) => (
            <details key={f.q} className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
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
                Need {TARGET_KEYWORD} that looks premium and ranks on Google?
              </div>
              <p className="mt-2 text-sm text-white/80">
                Share your requirements — we’ll reply with a clear plan, timeline & quotation.
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                <DarkChip icon={Zap} text="Mobile-first" />
                <DarkChip icon={Search} text="SEO setup" />
                <DarkChip icon={ShieldCheck} text="Clean build" />
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
                href={tel}
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/20 bg-white/10 px-6 py-3 text-sm font-extrabold text-white transition hover:bg-white/15"
              >
                Call Now <PhoneCall className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            <a
              href="/services"
              className="rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-sm font-extrabold text-white hover:bg-white/10"
            >
              Explore all services <ArrowRight className="inline h-4 w-4" />
            </a>
            <a
              href="/contact"
              className="rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-sm font-extrabold text-white hover:bg-white/10"
            >
              Contact Mugnee IT Solutions <ArrowRight className="inline h-4 w-4" />
            </a>
          </div>
        </div>
      </section>
      
    </main>
  );
}

/* =========================
   Local UI Components
   ========================= */

function HeroRow({ icon: Icon, title, desc }: { icon: any; title: string; desc: string }) {
  return (
    <div className="flex items-start gap-3">
      <div className="grid h-10 w-10 place-items-center rounded-2xl bg-white/10 text-white">
        <Icon className="h-5 w-5" />
      </div>
      <div className="min-w-0">
        <div className="text-sm font-extrabold text-white">{title}</div>
        <div className="mt-1 text-xs leading-6 text-white/75">{desc}</div>
      </div>
    </div>
  );
}

function GlassStat({ icon: Icon, title, desc }: { icon: any; title: string; desc: string }) {
  return (
    <div className="rounded-3xl border border-white/15 bg-white/10 px-5 py-4 shadow-[0_20px_50px_rgba(0,0,0,0.35)] backdrop-blur">
      <div className="flex items-start gap-3">
        <div className="grid h-10 w-10 place-items-center rounded-2xl bg-yellow-400 text-slate-900">
          <Icon className="h-5 w-5" />
        </div>
        <div>
          <div className="text-sm font-extrabold text-white">{title}</div>
          <div className="mt-1 text-xs text-white/75">{desc}</div>
        </div>
      </div>
    </div>
  );
}

function InfoCard({ icon: Icon, title, items }: { icon: any; title: string; items: string[] }) {
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

function DarkInfoCard({ icon: Icon, title, items }: { icon: any; title: string; items: string[] }) {
  return (
    <div className="rounded-3xl border border-white/15 bg-white/5 p-6 backdrop-blur">
      <div className="flex items-start gap-3">
        <div className="grid h-12 w-12 place-items-center rounded-2xl bg-yellow-400">
          <Icon className="h-6 w-6 text-slate-900" />
        </div>
        <div className="min-w-0">
          <div className="text-sm font-extrabold text-white">{title}</div>
          <ul className="mt-3 space-y-2 text-sm text-white/80">
            {items.map((x) => (
              <li key={x} className="flex items-start gap-2">
                <span className="mt-2 h-2 w-2 rounded-full bg-yellow-300" />
                <span className="leading-7">{x}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function DarkChip({ icon: Icon, text }: { icon: any; text: string }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-extrabold text-white">
      <Icon className="h-3.5 w-3.5 text-white" />
      {text}
    </span>
  );
}

function MiniCard({ icon: Icon, title, desc }: { icon: any; title: string; desc: string }) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-start gap-3">
        <div className="grid h-12 w-12 place-items-center rounded-2xl bg-slate-900">
          <Icon className="h-6 w-6 text-white" />
        </div>
        <div className="min-w-0">
          <div className="text-sm font-extrabold text-slate-900">{title}</div>
          <p className="mt-2 text-sm leading-7 text-slate-600">{desc}</p>
        </div>
      </div>
    </div>
  );
}

/** Tiny helper icon for "Who this is for" card */
function BriefIcon(props: any) {
  return <LayoutTemplate {...props} />;
}










