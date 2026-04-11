import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Globe2, ImageIcon, Package, Palette, Tag } from "lucide-react";
import { ServiceCustomerGuide } from "@/components/sections/ServiceVisualBlocks";

const SITE_URL = "https://mugneeit.com";
const PAGE_PATH = "/services/graphic-design";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;
const TARGET_KEYWORD = "Graphic Design Services";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Graphic Design Services",
  description:
    "Graphic design services for packaging, label, logo, banner, poster, and flyer design with brand consistency and conversion-focused visuals.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Graphic Design Services",
    description:
      "Packaging design, label design, logo design, banner design, poster design, and flyer design services for modern brands.",
    url: PAGE_URL,
    siteName: "Mugnee IT Solutions",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function GraphicDesignPage() {
  const faq = [
    {
      q: "Do you provide packaging design service for international brands?",
      a: "Yes. We provide packaging design services for clients in Bangladesh, USA, UK, Canada, and Europe.",
    },
    {
      q: "Can you handle label and logo design together?",
      a: "Yes. We can create complete brand assets including logo design, label design, product packaging, and campaign creatives.",
    },
    {
      q: "Which design services are most popular?",
      a: "Most requested services are packaging design, label design, logo design, social banner design, poster design, and flyer design.",
    },
    {
      q: "Do you offer source files?",
      a: "Yes. We provide organized export files and editable source files according to the selected package.",
    },
    {
      q: "Do you provide social media post design regularly?",
      a: "Yes. We provide monthly social media design support with brand-consistent post and story creatives.",
    },
    {
      q: "Can you create designs for Facebook and Google ads?",
      a: "Yes. We design campaign creatives in platform-ready sizes for paid marketing channels.",
    },
    {
      q: "Do you support urgent design delivery?",
      a: "Yes. Urgent delivery is available based on scope and queue. We confirm timeline before starting.",
    },
    {
      q: "Can you design for both print and digital use?",
      a: "Yes. We provide print-ready and web-ready versions so you can use the same design across channels.",
    },
    {
      q: "Do you provide a monthly design package for businesses?",
      a: "Yes. We offer monthly packages for ongoing design needs including social creatives, banners, and marketing assets.",
    },
    {
      q: "Which industries do you usually serve?",
      a: "We work with e-commerce, FMCG, education, healthcare, SaaS, local businesses, and agency partners.",
    },
    {
      q: "How do you ensure brand consistency in every design?",
      a: "We follow a brand system for color, typography, spacing, and messaging so every creative looks consistent.",
    },
    {
      q: "Can you redesign old posters, flyers, or packaging?",
      a: "Yes. We can redesign existing assets with improved visual hierarchy and a more modern look.",
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
          { "@type": "ListItem", position: 2, name: "Services", item: `${SITE_URL}/services` },
          { "@type": "ListItem", position: 3, name: "Graphic Design Services", item: PAGE_URL },
        ],
      },
      {
        "@type": "Service",
        serviceType: TARGET_KEYWORD,
        name: "Graphic Design Services",
        description:
          "Packaging design, label design, logo design, banner design, poster design, and flyer design for modern brands.",
        areaServed: ["Bangladesh", "USA", "UK", "Canada", "Europe"],
        provider: {
          "@type": "Organization",
          name: "Mugnee IT Solutions",
          url: SITE_URL,
        },
        url: PAGE_URL,
      },
      {
        "@type": "FAQPage",
        mainEntity: faq.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: f.a,
          },
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

      <section className="relative overflow-hidden bg-slate-950 pb-12 pt-24 sm:pb-16 sm:pt-28">
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
            <span className="text-yellow-300">Graphic Design</span>
          </nav>

          <div className="mt-10 grid gap-10 lg:grid-cols-[1.1fr_.9fr] lg:items-center">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[11px] font-extrabold tracking-[0.18em] text-white backdrop-blur">
                <Palette className="h-4 w-4 text-yellow-300" />
                CREATIVE DESIGN STUDIO
              </p>

              <h1 className="mt-4 text-4xl font-extrabold leading-tight text-white sm:text-5xl">
                Graphic Design Services
              </h1>

              <p className="mt-4 max-w-2xl text-base leading-7 text-white/90 sm:text-lg">
                We deliver full-scope {TARGET_KEYWORD.toLowerCase()} including packaging design,
                label design, logo design, banner design, poster design, and flyer design.
                Every asset is built to look clean, professional, and conversion-focused.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {[
                  "Packaging Design",
                  "Label Design",
                  "Logo Design",
                  "Banner Design",
                  "Poster + Flyer",
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
                <Link prefetch={false}
                  href="/contact/"
                  className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-yellow-400 px-7 py-3.5 text-sm font-extrabold text-slate-900 shadow-[0_10px_30px_rgba(0,0,0,.25)] transition hover:-translate-y-[1px] hover:bg-yellow-500"
                >
                  Start Your Design Project
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </Link>
                <Link prefetch={false}
                  href="/services"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/20 bg-white/10 px-7 py-3.5 text-sm font-extrabold text-white backdrop-blur transition hover:bg-white/15"
                >
                  View All Services
                </Link>
              </div>

              <div className="mt-7 grid gap-2 text-sm font-bold text-white/90 sm:grid-cols-2">
                <span className="inline-flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" /> Packaging + Label experts
                </span>
                <span className="inline-flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-fuchsia-400" /> Print + digital-ready files
                </span>
                <span className="inline-flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-yellow-300" /> Fast revision workflow
                </span>
                <span className="inline-flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" /> Remote collaboration
                </span>
              </div>
            </div>

            <div className="grid gap-4">
              <div className="rounded-3xl border border-white/20 bg-white/10 p-6 backdrop-blur">
                <div className="text-sm font-extrabold uppercase tracking-widest text-white/90">
                  Creative Coverage
                </div>
                <div className="mt-4 space-y-3 text-sm text-white/90">
                  <Mini text="Packaging and label systems for product brands" />
                  <Mini text="Logo and identity assets for consistent branding" />
                  <Mini text="Banner, poster, flyer for campaign execution" />
                  <Mini text="Bangladesh, USA, UK, Canada, Europe" />
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-3">
                {[
                  { k: "120+", v: "Creative projects" },
                  { k: "24-72h", v: "Quick turnaround" },
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

      <ServiceCustomerGuide pillar="graphic-design" contextLabel="Graphic Design Services" />

      <section className="mx-auto max-w-6xl px-4 py-12">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">
          <p className="text-xs font-extrabold tracking-[0.24em] text-slate-500">WHAT IS GRAPHIC DESIGN</p>
          <h2 className="mt-2 text-2xl font-extrabold text-slate-900 sm:text-3xl">What is Graphic Design</h2>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600">
            Graphic design is the visual communication system of your brand. It combines layout, typography,
            color, and messaging to make products, campaigns, and business communication clear, trustworthy,
            and conversion-ready across print and digital channels.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Palette, title: "Brand Identity", desc: "Consistent visual style for logo, color, and brand tone." },
              { icon: Package, title: "Product Design", desc: "Packaging and label visuals that improve shelf and online impact." },
              { icon: ImageIcon, title: "Campaign Creatives", desc: "Banners, posters, and flyers for promotions and launches." },
              { icon: Tag, title: "Conversion Focus", desc: "Visual hierarchy and CTA flow designed for better response." },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <div className="grid h-10 w-10 place-items-center rounded-2xl bg-slate-900">
                  <item.icon className="h-5 w-5 text-white" />
                </div>
                <div className="mt-3 text-sm font-extrabold text-slate-900">{item.title}</div>
                <p className="mt-1 text-xs leading-6 text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-4 py-12">
        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
          <p className="text-xs font-extrabold tracking-[0.24em] text-slate-500">SERVICE SOLUTION</p>
          <h2 className="mt-2 text-2xl font-extrabold text-slate-900 sm:text-3xl">
            Graphic Design Service Solution
          </h2>
          <p className="mt-2 text-sm leading-7 text-slate-600">
            Practical design execution built around brand consistency, campaign goals, and production-ready delivery.
          </p>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {[
              "Tailored design roadmap based on your brand and offer",
              "Clear scope, revisions, timeline, and final deliverables",
              "Design system consistency across print and digital formats",
              "Ongoing support for monthly or campaign-based design needs",
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
            Benefits of this Graphic Design solution
          </h2>
          <div className="mt-5">
            <h3 className="text-sm font-extrabold uppercase tracking-[0.16em] text-slate-500">Why It Works</h3>
            <div className="mt-3 grid gap-3 sm:grid-cols-2">
              {[
                "Builds stronger brand trust through consistent visuals",
                "Improves campaign performance with clear visual hierarchy",
                "Supports both print and digital channels with one system",
                "Reduces redesign waste by using clean reusable design assets",
              ].map((item) => (
                <div key={item} className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm font-semibold text-slate-700">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6">
            <h3 className="text-sm font-extrabold uppercase tracking-[0.16em] text-slate-500">How Clients Benefit</h3>
            <div className="mt-3 grid gap-3 sm:grid-cols-2">
              {[
                "Professional-looking creatives increase brand credibility",
                "Faster campaign launch with production-ready design files",
                "Better customer response from cleaner communication visuals",
                "Consistent output quality with structured revision workflow",
              ].map((item) => (
                <div key={item} className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm font-semibold text-slate-700">
                  {item}
                </div>
              ))}
            </div>
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
      
      <section className="mx-auto max-w-6xl px-4 pt-10 pb-14 sm:pt-12">
        <h2 className="text-2xl font-extrabold text-slate-900">Packaging Design Service and Label Design Service for product brands</h2>
        <p className="mt-2 max-w-3xl text-sm leading-7 text-slate-600">
          We design packaging and labels that communicate product value clearly on shelves and e-commerce
          listings. Our process balances visual appeal, compliance-ready layout, and print production logic.
        </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              "Primary and secondary packaging concepts",
              "Barcode, ingredients, and mandatory info layout",
              "Print-safe color and bleed-ready setup",
              "Multi-size adaptation for product variants",
            ].map((t) => (
            <div key={t} className="rounded-2xl border border-slate-200 bg-white p-4 text-sm font-semibold text-slate-700">
              <span className="mt-1 inline-grid h-5 w-5 place-items-center rounded-full bg-emerald-50 ring-1 ring-emerald-100">
                <span className="h-2 w-2 rounded-full bg-emerald-600" />
              </span>
              <span className="ml-2 align-middle">{t}</span>
            </div>
          ))}
        </div>
      </section>
      
      
      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="text-2xl font-extrabold text-slate-900">Logo Design Service, Banner Design Service, Poster Design Service, Flyer Design Service</h2>
          <p className="mt-2 max-w-3xl text-sm leading-7 text-slate-600">
            For campaign and brand communication, we produce logo systems and promotional assets
            optimized for both digital and print channels.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { title: "Logo Design", desc: "Brand marks with color, typography, and usage logic for consistency.", icon: Palette },
              { title: "Banner Design", desc: "Website and ad banners with strong offer hierarchy and CTA focus.", icon: ImageIcon },
              { title: "Poster Design", desc: "Campaign posters for events, launches, and awareness promotions.", icon: Package },
              { title: "Flyer Design", desc: "High-clarity flyer layouts for local and online marketing outreach.", icon: Tag },
            ].map((s) => (
              <div key={s.title} className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="grid h-10 w-10 place-items-center rounded-2xl bg-slate-900 text-white">
                  <s.icon className="h-5 w-5" />
                </div>
                <div className="mt-4 text-sm font-extrabold text-slate-900">{s.title}</div>
                <p className="mt-2 text-sm text-slate-600">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      
      <section className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="text-2xl font-extrabold text-slate-900">Graphic Design Services process for clients</h2>
        <p className="mt-2 max-w-3xl text-sm leading-7 text-slate-600">
          Our workflow ensures design quality, fast communication, and production-ready delivery.
          This model works for one-off projects and monthly creative retainer plans.
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {[
            "Step 1: Requirement brief and reference collection",
            "Step 2: Concept direction and initial drafts",
            "Step 3: Revision cycles and final quality review",
            "Step 4: Final delivery with organized export formats",
            "Step 5: Optional monthly support for recurring design needs",
            "Step 6: Internal linking support for SEO service pages if needed",
          ].map((t) => (
            <div key={t} className="rounded-2xl border border-slate-200 bg-white p-4 text-sm text-slate-700">
              {t}
            </div>
          ))}
        </div>
      </section>
      
      
      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="text-2xl font-extrabold text-slate-900">Related Graphic Design Services</h2>
          <p className="mt-2 max-w-3xl text-sm leading-7 text-slate-600">
            We structured this page as a keyword-focused pillar and linked it with specialized sub-pages.
            This helps stronger topical relevance for relevant search intents.
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { label: "Packaging Design Service", href: "/services/graphic-design/packaging-design-service" },
              { label: "Label Design Service", href: "/services/graphic-design/label-design-service" },
              { label: "Logo Design Service", href: "/services/graphic-design/logo-design-service" },
              { label: "Banner Design Service", href: "/services/graphic-design/banner-design-service" },
              { label: "Poster Design Service", href: "/services/graphic-design/poster-design-service" },
              { label: "Flyer Design Service", href: "/services/graphic-design/flyer-design-service" },
            ].map((t) => (
              <Link prefetch={false}
                key={t.href}
                href={t.href}
                className="group inline-flex items-center justify-between rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-extrabold text-slate-800 hover:bg-slate-100"
              >
                {t.label}
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      
      <section className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="text-2xl font-extrabold text-slate-900">What you get with our Graphic Design Services packages</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            "Creative direction and visual strategy",
            "Multi-format export files",
            "Brand-consistent templates",
            "Optional retainer for monthly content",
          ].map((t) => (
            <div key={t} className="rounded-2xl border border-slate-200 bg-white p-4 text-sm font-semibold text-slate-700">
              {t}
            </div>
          ))}
        </div>
      </section>
      
      
      <section className="mx-auto max-w-6xl px-4 pb-14">
        <h2 className="text-2xl font-extrabold text-slate-900">Who should take this Graphic Design Service</h2>
        <p className="mt-2 max-w-3xl text-sm leading-7 text-slate-600">
          This service is ideal for businesses that need regular creative output for branding,
          campaigns, and sales communication. If you need designs that look premium and stay
          consistent across channels, this service is a strong fit.
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            "E-commerce brands launching new products",
            "Local businesses running seasonal campaigns",
            "Agencies needing white-label design support",
            "Founders building brand identity from scratch",
            "Marketing teams needing ad creatives every week",
            "Companies updating packaging and label systems",
          ].map((t) => (
            <div key={t} className="rounded-2xl border border-slate-200 bg-white p-4 text-sm font-semibold text-slate-700">
              {t}
            </div>
          ))}
        </div>
      </section>
      
      
      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="text-2xl font-extrabold text-slate-900">Graphic design use-cases by business goal</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Brand Building",
                desc: "Logo, color system, and identity visuals for long-term brand recognition.",
              },
              {
                title: "Product Sales",
                desc: "Packaging, label, and promotional design that improves product presentation.",
              },
              {
                title: "Lead Generation",
                desc: "Banner and offer creatives designed for higher campaign response.",
              },
              {
                title: "Retention",
                desc: "Consistent monthly creatives that keep your audience engaged.",
              },
            ].map((s) => (
              <div key={s.title} className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="text-sm font-extrabold text-slate-900">{s.title}</div>
                <p className="mt-2 text-sm leading-7 text-slate-600">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      
      <section className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="text-2xl font-extrabold text-slate-900">Related searches we cover with this service</h2>
        <p className="mt-2 max-w-3xl text-sm leading-7 text-slate-600">
          We structured this page to match common user intent around graphic design service,
          packaging design service, logo design service, label design service, banner design
          service, poster design service, and flyer design service.
        </p>
        <div className="mt-6 flex flex-wrap gap-2">
          {[
            "graphic design service",
            "packaging design service",
            "label design service",
            "logo design service",
            "banner design service",
            "poster design service",
            "flyer design service",
            "social media design service",
            "ad creative design service",
            "monthly graphic design package",
          ].map((k) => (
            <span key={k} className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-extrabold text-slate-700">
              {k}
            </span>
          ))}
        </div>
      </section>
      
      
      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <p className="text-xs font-extrabold tracking-[0.24em] text-slate-500">WHY CHOOSE US</p>
          <h2 className="mt-2 text-2xl font-extrabold text-slate-900">Why choose us for Graphic Design Services</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {[
              {
                t: "Clean and professional design",
                d: "Every creative follows visual hierarchy, spacing logic, and brand consistency standards.",
              },
              {
                t: "Quality review before handover",
                d: "Our internal QA checks alignment, readability, export quality, and print/digital readiness.",
              },
              {
                t: "Clear communication and revisions",
                d: "Structured briefs, milestone feedback, and organized final files make collaboration smooth.",
              },
            ].map((item) => (
              <div key={item.t} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex items-center gap-2 text-sm font-extrabold text-slate-900">
                  <Globe2 className="h-4 w-4 text-blue-600" />
                  {item.t}
                </div>
                <p className="mt-3 text-sm leading-7 text-slate-600">{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      
      <section className="mx-auto max-w-6xl px-4 pb-16">
        <h2 className="text-2xl font-extrabold text-slate-900">Graphic Design Services FAQ</h2>
        <div className="mt-6 grid gap-4 lg:grid-cols-2">
          {faq.map((f) => (
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

function Mini({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-2">
      <span className="mt-1 h-2 w-2 rounded-full bg-yellow-400" />
      <span>{text}</span>
    </div>
  );
}







