// app/services/mern-stack/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import {
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Code2,
  Layers,
  Server,
  Lock,
  Database,
  Braces,
  Cloud,
  GitBranch,
  Quote,
  Link2,
  FileText,
  LayoutDashboard,
  LineChart,
  Wrench,
  Rocket,
  Sparkles,
  Users,
  BadgeCheck,
  Workflow,
  MessagesSquare,
  Gauge,
  Globe2,
  FolderTree,
  Atom,
  Stethoscope,
  ShoppingCart,
  GraduationCap,
  Building2,
  Factory,
  Truck,
} from "lucide-react";
import { ServiceCustomerGuide } from "@/components/sections/ServiceVisualBlocks";

/** ✅ Production env:
 * NEXT_PUBLIC_SITE_URL=https://mugneeit.com
 */
const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "https://mugneeit.com";

const PAGE_PATH = "/services/mern-stack/";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

const TARGET_KEYWORD = "MERN Stack Development";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "MERN Stack Development Service",
  description:
    "MERN stack development for fast, scalable full-stack web apps. Clean UI, secure authentication, REST APIs, database strategy (MongoDB/PostgreSQL), deployment, and after-sale support by Mugnee IT Solutions.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "MERN Stack Development Service",
    description:
      "Build scalable MERN web apps with clean UI, secure auth, APIs, database strategy, and production-ready deployment + support.",
    url: PAGE_URL,
    siteName: "Mugnee IT Solutions",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MERN Stack Development Service",
    description:
      "Scalable MERN web apps with clean UI, secure auth, APIs, database strategy, and deployment + support.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const faqs = [
  {
    q: "What is MERN stack development?",
    a: "MERN is a full-stack JavaScript stack: MongoDB, Express, React, and Node.js. It’s used to build scalable web apps with modern UI and APIs.",
  },
  {
    q: "Can you build dashboards or admin panels with MERN?",
    a: "Yes. We build role-based dashboards, admin panels, and data-driven portals with secure routing, reusable UI components, and clean data workflows.",
  },
  {
    q: "Do you add authentication and user roles in MERN projects?",
    a: "Yes. We implement secure login, JWT/session-based authentication, and role-based access control (RBAC) depending on your requirements.",
  },
  {
    q: "Which database do you use for MERN projects?",
    a: "MongoDB is common for MERN, but we can use PostgreSQL/MySQL or Firebase based on data structure, reporting needs, performance, budget, and scaling plan.",
  },
  {
    q: "Do you build REST APIs and third-party integrations?",
    a: "Yes. We build REST APIs, integrate payment gateways (scope-based), SMS/email, maps, CRM tools, and other third-party services depending on the project.",
  },
  {
    q: "Do you provide deployment and server setup for MERN apps?",
    a: "Yes. We deploy to VPS/Vercel, configure domain/SSL, set environment variables, and provide handover documentation.",
  },
  {
    q: "Will my MERN website be SEO-friendly?",
    a: "For SEO-heavy marketing pages we recommend Next.js. For web apps, we still apply clean metadata, performance optimizations, and index-safe setup where relevant.",
  },
  {
    q: "Can you build a multi-vendor / ecommerce system using MERN?",
    a: "Yes—scope-based. We can build custom ecommerce workflows, product management, cart/checkout logic, admin controls, and analytics-ready dashboards.",
  },
  {
    q: "Do you provide documentation and handover?",
    a: "Yes. We provide setup instructions, environment variable examples, admin usage notes, and deployment guidance for smooth operation after launch.",
  },
  {
    q: "Do you provide after-sale support?",
    a: "Yes. We provide after-sale support, bug fixing, performance checks, and guidance so your app stays stable after launch.",
  },
  {
    q: "How long does a MERN project usually take?",
    a: "Timeline depends on features and complexity. Small MVPs may take a few weeks; larger apps take longer. We provide a milestone-based plan after reviewing scope.",
  },
];

const mernSolutionSystems = [
  {
    icon: LayoutDashboard,
    title: "Visitor Management System",
    desc: "Web/mobile visitor check-in, pass generation, approval, and logs.",
    bullets: ["Check-in flow", "Approval panel", "Visit history"],
  },
  {
    icon: Users,
    title: "School Management System",
    desc: "Student, class, attendance, fees, notices, and role-based admin modules.",
    bullets: ["Attendance", "Fees", "Reports"],
  },
  {
    icon: Workflow,
    title: "Employee Management System",
    desc: "Task flow, attendance, and policy-based activity tracking modules.",
    bullets: ["Task updates", "Attendance", "Policy-based monitoring"],
  },
  {
    icon: FileText,
    title: "Accounts Management System",
    desc: "Ledger, invoice, payment records, and reporting dashboard for finance teams.",
    bullets: ["Income-expense", "Invoices", "Finance reports"],
  },
  {
    icon: Layers,
    title: "Rental Management System",
    desc: "Property, tenant, due tracking, agreement data, and payment status.",
    bullets: ["Tenant records", "Due tracking", "Rent reports"],
  },
  {
    icon: Database,
    title: "Super Shop Management",
    desc: "POS, stock movement, supplier records, purchase, and sales analytics.",
    bullets: ["POS flow", "Inventory", "Supplier management"],
  },
  {
    icon: Wrench,
    title: "Small Shop Management",
    desc: "Lightweight system for billing, stock, customer dues, and daily sales.",
    bullets: ["Quick billing", "Stock updates", "Daily summary"],
  },
  {
    icon: Cloud,
    title: "Ecommerce (Single/Multi Vendor)",
    desc: "Catalog, cart, checkout, order flow, seller panel, and admin control.",
    bullets: ["Vendor panel", "Order management", "Payment integration"],
  },
  {
    icon: Code2,
    title: "LED Display Builder",
    desc: "Custom product builder with specs, quote generation, and order workflow.",
    bullets: ["Config builder", "Quote output", "Order flow"],
  },
  {
    icon: Braces,
    title: "Computer Parts Builder",
    desc: "Compatibility-based parts selection, bundle pricing, and checkout logic.",
    bullets: ["Compatibility logic", "Bundle pricing", "Checkout flow"],
  },
  {
    icon: Server,
    title: "Custom Web Application",
    desc: "Full-stack business web apps with secure APIs and clean architecture.",
    bullets: ["Role-based access", "API integration", "Scalable architecture"],
  },
  {
    icon: Rocket,
    title: "Custom Mobile App Backend",
    desc: "MERN backend for mobile apps with auth, APIs, and admin dashboards.",
    bullets: ["Mobile APIs", "Secure auth", "Admin dashboard"],
  },
];

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

  const webpage = {
    "@type": "WebPage",
    name: "MERN Stack Development Service",
    url: PAGE_URL,
    description: metadata.description,
    isPartOf: { "@type": "WebSite", name: "Mugnee IT Solutions", url: SITE_URL },
  };

  const service = {
    "@type": "Service",
    name: "MERN Stack Development Service",
    serviceType: "Full Stack Web Development",
    provider: {
      "@type": "Organization",
      name: "Mugnee IT Solutions",
      url: SITE_URL,
    },
    areaServed: ["Bangladesh", "Worldwide"],
    url: PAGE_URL,
    description:
      "MERN stack development for scalable full-stack web applications with clean UI, secure authentication, API integration, database strategy, deployment, and after-sale support.",
  };

  const breadcrumb = {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
      { "@type": "ListItem", position: 2, name: "Services", item: `${SITE_URL}/services/` },
      { "@type": "ListItem", position: 3, name: "MERN Stack Development", item: PAGE_URL },
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
    "@graph": [organization, website, webpage, service, breadcrumb, faq],
  };
}

export default function MernStackServicePage() {
  const jsonLd = buildJsonLd();

  return (
    <main className="bg-white">
      {/* ✅ JSON-LD (single graph) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ✅ Global CSS animations (safe, no client JS) */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
          @media (prefers-reduced-motion: reduce){
            .reveal-up,.float-soft,.shine-sweep,.hover-lift{ animation:none !important; transition:none !important; }
          }
          .reveal-up{ animation:revealUp .75s ease-out both; }
          .float-soft{ animation:floatSoft 6s ease-in-out infinite; }
          .shine-sweep{ position:relative; overflow:hidden; }
          .shine-sweep:after{
            content:""; position:absolute; inset:-40%;
            background:linear-gradient(90deg, transparent, rgba(255,255,255,.16), transparent);
            transform:translateX(-60%) rotate(12deg);
            animation:shineSweep 4.5s ease-in-out infinite;
            pointer-events:none;
          }
          @keyframes revealUp{
            from{ opacity:0; transform:translateY(10px); filter:blur(2px); }
            to{ opacity:1; transform:translateY(0); filter:blur(0); }
          }
          @keyframes floatSoft{
            0%,100%{ transform:translateY(0); }
            50%{ transform:translateY(-6px); }
          }
          @keyframes shineSweep{
            0%{ transform:translateX(-70%) rotate(12deg); opacity:.0; }
            18%{ opacity:1; }
            45%{ transform:translateX(70%) rotate(12deg); opacity:.0; }
            100%{ transform:translateX(70%) rotate(12deg); opacity:.0; }
          }
        `,
        }}
      />

      {/* ✅ Header spacer */}
      <div className="h-16 sm:h-20" aria-hidden="true" />

      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden pb-12 sm:pb-16">
        <div className="absolute inset-0">
          <Image
            src="/images/mern-hero.png"
            alt="MERN stack development banner"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-950/55 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/35" />
          <div className="absolute inset-0 opacity-[0.08] [background:radial-gradient(circle_at_1px_1px,rgba(255,255,255,.35)_1px,transparent_0)] [background-size:24px_24px]" />
          <div className="pointer-events-none absolute -left-16 top-16 h-56 w-56 rounded-full bg-yellow-300/10 blur-3xl float-soft" />
          <div className="pointer-events-none absolute right-8 top-24 h-44 w-44 rounded-full bg-sky-300/10 blur-3xl float-soft" />
        </div>

        <div className="relative mx-auto max-w-6xl px-4 pt-6">
          <nav className="text-xs font-bold text-white/85 drop-shadow reveal-up">
            <a className="hover:text-white" href="/">Home</a>
            <span className="mx-2 text-white/60">/</span>
            <a className="hover:text-white" href="/services">Services</a>
            <span className="mx-2 text-white/60">/</span>
            <span className="text-yellow-300">MERN Stack Development</span>
          </nav>

          <div className="mt-10 grid gap-10 lg:grid-cols-2 lg:items-center">
            <div className="max-w-2xl">
              <p className="inline-flex items-center gap-2 text-[11px] font-extrabold tracking-[0.22em] text-yellow-200 drop-shadow reveal-up">
                {TARGET_KEYWORD.toUpperCase()}
                <span className="h-1.5 w-1.5 rounded-full bg-yellow-300" />
                Performance-first • Secure • Scalable
              </p>

              <h1 className="mt-4 text-4xl font-extrabold leading-tight text-white drop-shadow sm:text-5xl reveal-up">
                MERN Stack Development Services
              </h1>

              <p className="mt-4 text-base leading-7 text-white/90 drop-shadow sm:text-lg reveal-up">
                We build modern MERN websites & web apps with clean UI, scalable backend,
                secure authentication, and production-ready architecture—optimized for speed,
                trust, and long-term growth (Bangladesh + worldwide).
              </p>

              <div className="mt-6 flex flex-wrap gap-2 reveal-up">
                {[
                  "React UI / Components",
                  "Node + Express API",
                  "MongoDB / PostgreSQL",
                  "Auth + RBAC",
                  "Deployment + Handover",
                ].map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/15 bg-black/25 px-3 py-1 text-[11px] font-extrabold text-white/90 backdrop-blur hover-lift transition"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center reveal-up">
                <a
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-yellow-400 px-7 py-3.5 text-sm font-extrabold text-slate-900 shadow-[0_18px_55px_rgba(250,204,21,0.22)] transition hover:-translate-y-[1px] hover:bg-yellow-500"
                >
                  Get a Free Consultation
                  <ArrowIcon />
                </a>

                <a
                  href="#quotation"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/10 px-7 py-3.5 text-sm font-extrabold text-white backdrop-blur transition hover:bg-white/15"
                >
                  Request a Quote
                  <ArrowIconPlain />
                </a>
              </div>

              <div className="mt-7 flex flex-wrap gap-x-6 gap-y-2 text-sm font-bold text-white/90 drop-shadow reveal-up">
                <span className="inline-flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-yellow-300" /> Fast UI
                </span>
                <span className="inline-flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-yellow-300" /> Secure Auth
                </span>
                <span className="inline-flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-yellow-300" /> Scalable Backend
                </span>
              </div>
            </div>

            <div className="grid gap-4">
              <MernStackBlock
                icon={Server}
                title="API + Backend"
                desc="REST APIs, validation, and clean service structure for scalable growth."
                tags={["Express", "API", "Validation"]}
              />
              <MernStackBlock
                icon={Lock}
                title="Authentication"
                desc="Secure login, roles, protected routes, and safe session/JWT patterns."
                tags={["JWT", "Roles", "Guards"]}
              />
              <MernStackBlock
                icon={Database}
                title="Database Strategy"
                desc="Client requirements guide our database selection—data, reporting, cost, and scalability."
                tags={["MongoDB", "PostgreSQL", "Firebase"]}
              />
              <MernStackBlock
                icon={Gauge}
                title="Performance"
                desc="Caching, optimization, query tuning, and clean frontend rendering."
                tags={["Speed", "Caching", "UX"]}
              />
            </div>
          </div>
        </div>
      </section>

      <ServiceCustomerGuide pillar="mern" />

      {/* ================= WHAT IS MERN ================= */}
      <section className="mx-auto max-w-6xl px-4 pb-12">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <p className="text-xs font-extrabold tracking-[0.25em] text-slate-500">
            WHAT IS MERN STACK DEVELOPMENT
          </p>
          <h2 className="mt-2 text-3xl font-extrabold text-slate-900">
            What is MERN Stack Development?
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600 sm:text-base">
            MERN is a full-stack JavaScript architecture used to build modern web applications.
            It combines frontend, backend, API, and database development in one ecosystem,
            making projects faster to build, easier to maintain, and simpler to scale.
          </p>

          <div className="mt-7 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <MernTechCard
              icon={Database}
              title="MongoDB"
              text="M = MongoDB: a flexible document database for scalable data storage."
              badge="M"
              tone="emerald"
            />
            <MernTechCard
              icon={Braces}
              title="Express.js"
              text="E = Express.js: a fast backend framework for clean REST APIs."
              badge="E"
              tone="amber"
            />
            <MernTechCard
              icon={Atom}
              title="React.js"
              text="R = React.js: a component-based library for fast, interactive UI."
              badge="R"
              tone="sky"
            />
            <MernTechCard
              icon={Server}
              title="Node.js"
              text="N = Node.js: a JavaScript runtime for scalable backend services."
              badge="N"
              tone="violet"
            />
          </div>
        </div>
      </section>

      {/* ================= HERO SOLUTION ================= */}
      <section id="mern-web-development-solution" className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <p className="text-xs font-extrabold tracking-[0.25em] text-slate-500">
            MERN STACK WEB DEVELOPMENT SOLUTION
          </p>
          <h2 className="mt-2 text-3xl font-extrabold text-slate-900">
            MERN Stack Web Development Solution
          </h2>
          <p className="mt-3 max-w-3xl text-sm text-slate-600 sm:text-base">
            We deliver secure and scalable MERN apps with clean architecture, API-first planning,
            and production-ready deployment for long-term reliability.
          </p>

          <div className="mt-7 grid gap-3 sm:grid-cols-2">
            {[
              "Scalable React + Node architecture",
              "Secure auth, roles, and protected APIs",
              "Performance-focused database strategy",
              "Deployment, handover, and support roadmap",
            ].map((point) => (
              <div key={point} className="flex items-start gap-2 text-sm text-slate-700">
                <span className="mt-1 grid h-5 w-5 place-items-center rounded-full bg-emerald-50 ring-1 ring-emerald-100">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
                </span>
                <span className="leading-6">{point}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="mern-web-development-benefits" className="mx-auto max-w-6xl px-4 pb-12">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">
          <p className="text-xs font-extrabold tracking-[0.25em] text-slate-500">MERN BENEFITS</p>
          <h2 className="mt-2 text-3xl font-extrabold text-slate-900">Key Benefits of This MERN Solution</h2>
          <p className="mt-3 max-w-4xl text-sm leading-7 text-slate-600 sm:text-base">
            MERN is powerful because it uses one JavaScript ecosystem for UI, API, and business logic.
            That means faster execution, cleaner maintenance, and easier scaling. For customers, this
            directly improves product quality, launch speed, and long-term cost efficiency.
          </p>

          <div className="mt-6 grid gap-4 lg:grid-cols-2">
            <article className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <h3 className="text-base font-extrabold text-slate-900">Why MERN Is So Effective</h3>
              <ul className="mt-3 space-y-2 text-sm font-semibold text-slate-700">
                {[
                  "Single language stack reduces development complexity",
                  "React component architecture speeds up frontend iteration",
                  "Express + Node enable fast, modular API development",
                  "Flexible data modeling supports evolving business requirements",
                ].map((point) => (
                  <li key={point} className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-yellow-400" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </article>

            <article className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <h3 className="text-base font-extrabold text-slate-900">How Customers Benefit</h3>
              <ul className="mt-3 space-y-2 text-sm font-semibold text-slate-700">
                {[
                  "Faster launch timeline for MVPs and production projects",
                  "Lower maintenance cost through reusable code and cleaner workflows",
                  "Better user experience with responsive, interactive interfaces",
                  "Scalable foundation for adding new modules without rebuilding",
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
              "One JavaScript stack across frontend and backend for faster development",
              "Reusable React components that reduce future update cost",
              "Scalable API architecture for growing users and features",
              "Secure authentication with role-based access control (RBAC)",
              "Flexible database strategy based on business data and reporting needs",
              "Deployment-ready delivery with documentation and post-launch support",
            ].map((item) => (
              <div key={item} className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm font-semibold text-slate-700">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="mern-web-development-comparison" className="mx-auto max-w-6xl px-4 pb-12">
        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
          <p className="text-xs font-extrabold tracking-[0.25em] text-slate-500">MERN COMPARISON</p>
          <h2 className="mt-2 text-3xl font-extrabold text-slate-900">MERN vs other development paths</h2>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {[
              "MERN stack: one JavaScript ecosystem for faster full-stack collaboration",
              "No-code tools: quick launch, but limited flexibility for advanced workflows",
              "Split-stack projects: more tooling choices, but higher integration complexity",
              "MERN with agency process: better consistency, QA flow, and maintainability",
            ].map((item) => (
              <div key={item} className="rounded-2xl border border-slate-200 bg-white p-4 text-sm font-semibold text-slate-700">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="mern-delivery-models" className="mx-auto max-w-6xl px-4 pb-12">
        <DeliveryModelsSection />
      </section>
      
      {/* ================= TRUST / E-E-A-T ================= */}
      <section className="mx-auto max-w-6xl px-4 pt-6 pb-14">
        <div className="grid gap-6 lg:grid-cols-3">
          <TrustPanelMern />
          <ProofPanelMern />
          <InternalLinksPills />
        </div>
      </section>
      
      {/* ================= SEO CONTENT: USE CASE + STACK ================= */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <p className="text-xs font-extrabold tracking-[0.25em] text-slate-500">WHERE MERN FITS BEST</p>
          <h2 className="mt-2 text-3xl font-extrabold text-slate-900">
            Industries and Business Use Cases We Serve with MERN
          </h2>
          <p className="mt-3 max-w-3xl text-sm text-slate-600 sm:text-base">
            We use MERN for industries that need secure workflows, real-time operations, and scalable
            product growth. This is written for users first, so it explains practical fit without
            repeating keywords unnaturally.
          </p>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <IndustriesGrid />
            <TechStackGrid />
          </div>
        </div>
      </section>
      
      {/* ================= NEW: MERN CLUSTER / SUPPORTING PAGES ================= */}
      <section className="mx-auto max-w-6xl px-4 py-14">
        <p className="text-xs font-extrabold tracking-[0.25em] text-slate-500">MERN CLUSTER</p>
        <h2 className="mt-2 text-3xl font-extrabold text-slate-900">
          Supporting services for MERN
        </h2>
        <p className="mt-3 max-w-3xl text-sm text-slate-600 sm:text-base">
          These supporting pages help Google understand topic depth and help users quickly reach the exact MERN service they need.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <ClusterCard
            icon={LayoutDashboard}
            title="Dashboard & Admin Panel"
            desc="Role-based dashboards, reporting UI and admin workflows."
            href="/services/mern-stack/mern-dashboard-admin"
          />
          <ClusterCard
            icon={Braces}
            title="API Development"
            desc="Node.js + Express REST APIs, validation and integrations."
            href="/services/mern-stack/api-development"
          />
          <ClusterCard
            icon={Lock}
            title="Auth & RBAC"
            desc="JWT/session login, protected routes and permission rules."
            href="/services/mern-stack/auth-rbac"
          />
          <ClusterCard
            icon={Wrench}
            title="MERN Maintenance"
            desc="Bug fixes, improvements, performance and support."
            href="/services/mern-stack/mern-maintenance"
          />
        </div>

        <div className="mt-10 rounded-3xl border border-slate-200 bg-slate-50 p-7 shadow-sm">
          <div className="flex items-start gap-3">
            <span className="grid h-12 w-12 place-items-center rounded-2xl bg-slate-900">
              <FolderTree className="h-6 w-6 text-white" />
            </span>
            <div>
              <div className="text-lg font-extrabold text-slate-900">Why this cluster helps SEO?</div>
              <p className="mt-1 text-sm leading-6 text-slate-600">
                Pillar + supporting pages create a strong internal linking structure. It improves topical authority and helps different MERN keywords rank with dedicated pages.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* ================= HOW WE WORK ================= */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-extrabold tracking-[0.25em] text-slate-500">WORKFLOW</p>
              <h2 className="mt-2 text-3xl font-extrabold text-slate-900">
                How we deliver {TARGET_KEYWORD}
              </h2>
              <p className="mt-3 max-w-3xl text-sm text-slate-600 sm:text-base">
                Clear process = better quality. We plan scope, build in milestones, test properly,
                deploy safely, and support after launch—so your MERN app stays stable long-term.
              </p>
            </div>

            <a
              href="#quotation"
              className="inline-flex w-fit items-center justify-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-extrabold text-white transition hover:bg-slate-800"
            >
              Get a MERN quotation <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-4">
            <StepCard
              step="01"
              icon={FileText}
              title="Scope planning"
              desc="Modules, roles, data, integrations, timeline. We confirm requirements early."
            />
            <StepCard
              step="02"
              icon={Layers}
              title="UI + architecture"
              desc="Reusable components, backend structure, and DB plan for scaling."
            />
            <StepCard
              step="03"
              icon={ShieldCheck}
              title="Security + QA"
              desc="Auth, RBAC, validation, and test flows before going live."
            />
            <StepCard
              step="04"
              icon={Rocket}
              title="Deployment + support"
              desc="Domain/SSL, environment setup, and after-sale support plan."
            />
          </div>

          <div className="mt-10 rounded-3xl border border-slate-200 bg-white p-7 shadow-sm shine-sweep">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-start gap-3">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-yellow-100">
                  <Workflow className="h-6 w-6 text-slate-900" />
                </span>
                <div>
                  <div className="text-lg font-extrabold text-slate-900">
                    Custom solution mindset (not template work)
                  </div>
                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    We build MERN solutions based on your business process—features, roles,
                    approvals, reporting, and integrations.
                  </p>
                </div>
              </div>

              <a
                href="/contact"
                className="group inline-flex w-fit items-center justify-center gap-2 rounded-full bg-yellow-400 px-7 py-3 text-sm font-extrabold text-slate-900 transition hover:-translate-y-[1px] hover:bg-yellow-500"
              >
                Share requirements <ArrowIcon />
              </a>
            </div>
          </div>
        </div>
      </section>
      
      {/* ================= WHAT WE BUILD ================= */}
      <section className="mx-auto max-w-6xl px-4 pb-14 pt-14">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-extrabold tracking-[0.25em] text-slate-500">WHAT WE BUILD</p>
            <h2 className="mt-2 text-3xl font-extrabold text-slate-900">
              {TARGET_KEYWORD} solutions by scope
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">
              Full-stack delivery with clean UI, strong backend patterns, and secure access control.
            </p>
          </div>

          <a
            href="/contact"
            className="group inline-flex w-fit items-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-extrabold text-white transition hover:bg-slate-800"
          >
            Talk to us
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
          </a>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <MernCard
            icon={LayoutDashboard}
            title="Dashboards & Admin Panels"
            desc="Role-based admin, reporting UI, data management and workflow screens."
            bullets={["Roles & permissions", "CRUD + filters", "Charts & analytics"]}
          />
          <MernCard
            icon={Code2}
            title="Web Apps & Portals"
            desc="Customer portals, internal tools, and secure app flows."
            bullets={["Secure routes", "API integration", "Scalable components"]}
          />
          <MernCard
            icon={Rocket}
            title="Startup MVPs"
            desc="Fast MVP build with clean structure—iterate safely as you grow."
            bullets={["Rapid build", "Validation", "Future-ready architecture"]}
          />
          <MernCard
            icon={Braces}
            title="API Systems"
            desc="Clean API design with versioning, logging, and best practices."
            bullets={["REST APIs", "Optional rate limits", "Logging & monitoring tips"]}
          />
          <MernCard
            icon={Wrench}
            title="Maintenance & Improvements"
            desc="Refactor, bug fixing, performance improvements, and feature updates."
            bullets={["Refactor", "Performance tuning", "Security fixes"]}
          />
          <MernCard
            icon={ShieldCheck}
            title="Security-first Delivery"
            desc="Secure patterns to reduce risk: validation, access control, and safe configs."
            bullets={["Input validation", "RBAC", "Secure config"]}
          />
        </div>
      </section>

      {/* ================= MERN SOLUTION SYSTEMS ================= */}
      <section id="mern-solution-systems" className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <p className="text-xs font-extrabold tracking-[0.25em] text-slate-500">MERN SOLUTIONS</p>
          <h2 className="mt-2 text-3xl font-extrabold text-slate-900">
            Systems and builder apps we develop with MERN
          </h2>
          <p className="mt-3 max-w-3xl text-sm text-slate-600 sm:text-base">
            We build business-focused systems with MERN for operations, management, ecommerce,
            and specialized builder workflows. Each solution is planned by process, roles, and scale.
          </p>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {mernSolutionSystems.map((item) => (
              <MernCard
                key={item.title}
                icon={item.icon}
                title={item.title}
                desc={item.desc}
                bullets={item.bullets}
              />
            ))}
          </div>

          <p className="mt-6 text-xs text-slate-500">
            Employee activity tracking features are implemented only with company policy, consent,
            and legal compliance requirements.
          </p>
        </div>
      </section>
      
      {/* ================= QUOTATION ================= */}
      <section id="quotation" className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <p className="text-xs font-extrabold tracking-[0.25em] text-slate-500">GET QUOTATION</p>
          <h2 className="mt-2 text-3xl font-extrabold text-slate-900">
            Request a {TARGET_KEYWORD} quotation
          </h2>
          <p className="mt-3 max-w-2xl text-sm text-slate-600 sm:text-base">
            Share your scope and goals. We’ll reply with a clear plan, timeline, and quotation—based
            on your exact requirements.
          </p>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            <QuoteCard
              title="Send Requirements"
              desc="Modules, roles, features, references, deadline and budget range (optional)."
              items={["Web App / Portal", "Roles & features", "Reference links", "Timeline"]}
            />
            <QuoteCard
              title="Get a Proposal"
              desc="We respond with deliverables, milestones and technical plan."
              items={["Milestone plan", "Tech stack", "Security checklist", "Delivery scope"]}
              highlighted
            />
            <QuoteCard
              title="Start the Project"
              desc="Kick-off after confirmation. Regular updates until final delivery."
              items={["Weekly updates", "QA + handover", "Deployment support", "After-sale help"]}
            />
          </div>

          <div className="mt-10 rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-start gap-3">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-sky-100">
                  <MessagesSquare className="h-6 w-6 text-slate-900" />
                </span>
                <div>
                  <div className="text-lg font-extrabold text-slate-900">Want faster response?</div>
                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    Send your requirements with examples/screenshots. We can estimate timeline and
                    prepare the best plan quickly.
                  </p>
                </div>
              </div>

              <a
                href="/contact"
                className="group inline-flex w-fit items-center justify-center gap-2 rounded-full bg-yellow-400 px-7 py-3 text-sm font-extrabold text-slate-900 transition hover:-translate-y-[1px] hover:bg-yellow-500"
              >
                Message Us <ArrowIcon />
              </a>
            </div>
          </div>
        </div>
      </section>
      
      {/* ================= FAQ ================= */}
      <section className="mx-auto max-w-6xl px-4 py-14">
        <p className="text-xs font-extrabold tracking-[0.25em] text-slate-500">FAQ</p>
        <h2 className="mt-2 text-3xl font-extrabold text-slate-900">
          {TARGET_KEYWORD} FAQs
        </h2>

        <div className="mt-10 grid gap-4 lg:grid-cols-2">
          {faqs.map((f) => (
            <details
              key={f.q}
              className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md"
            >
              <summary className="cursor-pointer list-none text-sm font-extrabold text-slate-900">
                {f.q}
                <span className="float-right text-slate-400 transition group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 text-sm leading-6 text-slate-600">{f.a}</p>
            </details>
          ))}
        </div>

        <div className="mt-12 rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <div className="text-lg font-extrabold text-slate-900">
                Ready to build a scalable MERN web app?
              </div>
              <p className="mt-1 text-sm text-slate-600">
                Share requirements — we’ll reply with plan, timeline & quotation.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href="/contact"
                className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-yellow-400 px-7 py-3 text-sm font-extrabold text-slate-900 shadow-[0_14px_40px_rgba(250,204,21,0.22)] transition hover:-translate-y-[1px] hover:bg-yellow-500"
              >
                <span className="pointer-events-none absolute -left-10 top-0 h-full w-10 rotate-12 bg-white/35 blur-sm transition-all duration-500 group-hover:left-[120%]" />
                Request Quote <ArrowIcon />
              </a>

              <a
                href="/services"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-7 py-3 text-sm font-extrabold text-slate-900 transition hover:bg-slate-100"
              >
                See All Services <ArrowIconPlain />
              </a>
            </div>
          </div>

          <p className="sr-only">
            MERN Stack Development by Mugnee IT Solutions — Bangladesh and worldwide delivery, secure auth,
            scalable APIs, database strategy and deployment support.
          </p>
        </div>
      </section>
    </main>
  );
}

/* ---------------- UI Bits ---------------- */

function ArrowIcon() {
  return (
    <span className="inline-flex">
      <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
    </span>
  );
}
function ArrowIconPlain() {
  return (
    <span className="inline-flex">
      <ArrowRight className="h-4 w-4" />
    </span>
  );
}

function premiumBorderClass(extra: string) {
  return [
    "relative rounded-3xl p-[1px] shadow-sm transition hover:shadow-lg hover:-translate-y-0.5",
    "bg-gradient-to-br from-slate-200 via-slate-100 to-slate-200",
    extra,
  ].join(" ");
}

function MernStackBlock({
  icon: Icon,
  title,
  desc,
  tags,
}: {
  icon: any;
  title: string;
  desc: string;
  tags: string[];
}) {
  return (
    <div className="group rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <div className="flex items-start gap-4">
        <span className="grid h-11 w-11 place-items-center rounded-2xl bg-yellow-400">
          <Icon className="h-5 w-5 text-slate-900" />
        </span>

        <div>
          <div className="text-sm font-extrabold text-slate-900">{title}</div>
          <p className="mt-1 text-xs leading-5 text-slate-600">{desc}</p>

          <div className="mt-3 flex flex-wrap gap-2">
            {tags.map((t) => (
              <span
                key={t}
                className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-[11px] font-bold text-slate-700"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function MernTechCard({
  icon: Icon,
  title,
  text,
  badge,
  tone,
}: {
  icon: any;
  title: string;
  text: string;
  badge: string;
  tone: "emerald" | "amber" | "sky" | "violet";
}) {
  const tones = {
    emerald: "bg-emerald-50 text-emerald-700 ring-emerald-100",
    amber: "bg-amber-50 text-amber-700 ring-amber-100",
    sky: "bg-sky-50 text-sky-700 ring-sky-100",
    violet: "bg-violet-50 text-violet-700 ring-violet-100",
  };

  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 transition hover:-translate-y-1 hover:bg-white hover:shadow-md">
      <div className="flex items-center justify-between">
        <span className={`grid h-11 w-11 place-items-center rounded-2xl ring-1 ${tones[tone]}`}>
          <Icon className="h-5 w-5" />
        </span>
        <span className="rounded-full border border-slate-200 bg-white px-2.5 py-1 text-[11px] font-extrabold text-slate-700">
          {badge}
        </span>
      </div>
      <h3 className="mt-4 text-base font-extrabold text-slate-900">{title}</h3>
      <p className="mt-1 text-sm leading-6 text-slate-600">{text}</p>
    </div>
  );
}

function MernCard({
  icon: Icon,
  title,
  desc,
  bullets,
}: {
  icon: any;
  title: string;
  desc: string;
  bullets: string[];
}) {
  return (
    <div className={premiumBorderClass("reveal-up")}>
      <div className="group overflow-hidden rounded-3xl bg-white p-7">
        <div className="flex items-start gap-4">
          <div className="grid h-12 w-12 place-items-center rounded-2xl bg-slate-900">
            <Icon className="h-6 w-6 text-white" />
          </div>
          <div>
            <div className="text-lg font-extrabold text-slate-900">{title}</div>
            <p className="mt-1 text-sm leading-6 text-slate-600">{desc}</p>
          </div>
        </div>

        <div className="mt-5 space-y-2">
          {bullets.map((b) => (
            <div key={b} className="flex items-start gap-2 text-sm text-slate-700">
              <span className="mt-1 grid h-5 w-5 place-items-center rounded-full bg-emerald-50 ring-1 ring-emerald-100">
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
              </span>
              <span className="leading-6">{b}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ✅ E-E-A-T panel */
function TrustPanelMern() {
  return (
    <div className={premiumBorderClass("reveal-up")}>
      <div className="rounded-3xl bg-white p-6">
        <div className="flex items-start gap-3">
          <span className="grid h-12 w-12 place-items-center rounded-2xl bg-slate-900">
            <ShieldCheck className="h-6 w-6 text-white" />
          </span>
          <div>
            <div className="text-lg font-extrabold text-slate-900">Why Choose Us</div>
            <p className="mt-1 text-sm leading-6 text-slate-600">
              We deliver clean, maintainable code with QA and SQA validation before project handover.
            </p>
          </div>
        </div>

        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          <MiniProof label="Clean codebase" value="Readable, modular architecture" />
          <MiniProof label="SQA validation" value="Checked by QA/SQA team" />
          <MiniProof label="Bug-focused delivery" value="Low-defect, stable release quality" />
          <MiniProof label="Project handover" value="Commented code + clear documentation" />
        </div>
      </div>
    </div>
  );
}

function ProofPanelMern() {
  const items = [
    {
      title: "Structured code review process",
      text: "Each module is reviewed for readability, logic quality, and maintainability before final delivery.",
    },
    {
      title: "QA + SQA before handover",
      text: "Features are tested by our QA/SQA process to reduce issues and improve production stability.",
    },
    {
      title: "Handover-ready development",
      text: "We provide commented code, organized file structure, and practical documentation for smooth ownership transfer.",
    },
  ];

  return (
    <div className={premiumBorderClass("reveal-up")}>
      <div className="rounded-3xl bg-white p-6">
        <div className="flex items-start gap-3">
          <span className="grid h-12 w-12 place-items-center rounded-2xl bg-yellow-100">
            <Quote className="h-6 w-6 text-slate-900" />
          </span>
          <div>
            <div className="text-lg font-extrabold text-slate-900">What clients value</div>
            <p className="mt-1 text-sm leading-6 text-slate-600">
              Real priorities: code quality, reduced bugs, and confident handover.
            </p>
          </div>
        </div>

        <div className="mt-6 space-y-4">
          {items.map((x) => (
            <div key={x.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <div className="text-sm font-extrabold text-slate-900">{x.title}</div>
              <p className="mt-1 text-sm leading-6 text-slate-600">{x.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function InternalLinksPills() {
  const links = [
    { href: "/services/nextjs", title: "Next.js Website Development", icon: Rocket },
    { href: "/services/seo", title: "SEO Services", icon: LineChart },
    { href: "/services/software-solution", title: "Custom Software Solution", icon: Layers },
    { href: "/services/wordpress", title: "WordPress Website Development", icon: Globe2 },
    { href: "/projects", title: "Portfolio / Case studies", icon: BadgeCheck },
  ];

  return (
    <div className={premiumBorderClass("reveal-up")}>
      <div className="rounded-3xl bg-white p-6">
        <div className="flex items-start gap-3">
          <span className="grid h-12 w-12 place-items-center rounded-2xl bg-sky-100">
            <Link2 className="h-6 w-6 text-slate-900" />
          </span>
          <div>
            <div className="text-lg font-extrabold text-slate-900">Related services</div>
            <p className="mt-1 text-sm leading-6 text-slate-600">
              Helpful internal links for users + SEO (keep it natural).
            </p>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="group inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-5 py-2 text-sm font-extrabold text-slate-900 transition hover:bg-white"
            >
              <l.icon className="h-4 w-4 text-slate-500" />
              {l.title}
              <ArrowRight className="h-4 w-4 text-slate-400 transition group-hover:translate-x-1" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

function MiniProof({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 transition hover:bg-white">
      <div className="text-xs font-bold text-slate-500">{label}</div>
      <div className="mt-1 text-sm font-extrabold text-slate-900">{value}</div>
    </div>
  );
}

function QuoteCard({
  title,
  desc,
  items,
  highlighted,
}: {
  title: string;
  desc: string;
  items: string[];
  highlighted?: boolean;
}) {
  return (
    <div
      className={[
        "relative overflow-hidden rounded-3xl border bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg",
        highlighted ? "border-yellow-300 ring-1 ring-yellow-200" : "border-slate-200",
      ].join(" ")}
    >
      {highlighted && (
        <div className="absolute right-4 top-4 rounded-full bg-yellow-100 px-3 py-1 text-xs font-extrabold text-yellow-700">
          Recommended
        </div>
      )}

      <h3 className="text-lg font-extrabold text-slate-900">{title}</h3>
      <p className="mt-2 text-sm text-slate-600">{desc}</p>

      <ul className="mt-5 space-y-2">
        {items.map((i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-slate-700">
            <span className="mt-1 h-2 w-2 rounded-full bg-yellow-400" />
            <span className="leading-6">{i}</span>
          </li>
        ))}
      </ul>

      <a
        href="/contact"
        className="group relative mt-7 inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-full bg-yellow-400 px-6 py-3 text-sm font-extrabold text-slate-900 shadow-[0_14px_40px_rgba(250,204,21,0.18)] transition hover:-translate-y-[1px] hover:bg-yellow-500"
      >
        <span className="pointer-events-none absolute -left-10 top-0 h-full w-10 rotate-12 bg-white/35 blur-sm transition-all duration-500 group-hover:left-[120%]" />
        Request Quote <ArrowIcon />
      </a>
    </div>
  );
}

function StepCard({
  step,
  icon: Icon,
  title,
  desc,
}: {
  step: string;
  icon: any;
  title: string;
  desc: string;
}) {
  return (
    <div className={premiumBorderClass("reveal-up")}>
      <div className="rounded-3xl bg-white p-6">
        <div className="flex items-start justify-between">
          <div className="grid h-12 w-12 place-items-center rounded-2xl bg-slate-900">
            <Icon className="h-6 w-6 text-white" />
          </div>
          <div className="text-xs font-extrabold tracking-[0.25em] text-slate-400">{step}</div>
        </div>
        <div className="mt-4 text-base font-extrabold text-slate-900">{title}</div>
        <p className="mt-2 text-sm leading-6 text-slate-600">{desc}</p>
      </div>
    </div>
  );
}

/* ✅ NEW: industries/use-cases grid (SEO depth) */
function DeliveryModelsSection() {
  const models = [
    {
      icon: Workflow,
      title: "Agile Scrum",
      tag: "SCRUM",
      tagClass: "bg-sky-100 text-sky-700 border-sky-200",
      whatItIs:
        "An iterative model where work is delivered in short sprints with planning, review, and continuous improvement.",
      howWeUse:
        "We run sprint planning, daily progress tracking, sprint review, and retrospective in a structured cycle.",
      points: [
        "Weekly or bi-weekly sprint delivery",
        "Backlog prioritization with stakeholder feedback",
        "Incremental release with continuous QA checks",
      ],
    },
    {
      icon: LayoutDashboard,
      title: "Kanban",
      tag: "KANBAN",
      tagClass: "bg-emerald-100 text-emerald-700 border-emerald-200",
      whatItIs:
        "A continuous workflow model where tasks move through visual stages from To-do to Done.",
      howWeUse:
        "We use Kanban for support, optimization, bug fixing, and rolling feature enhancement.",
      points: [
        "Live task visibility and ownership tracking",
        "Fast response for urgent business issues",
        "Stable release flow without sprint overhead",
      ],
    },
    {
      icon: FolderTree,
      title: "Waterfall",
      tag: "WATERFALL",
      tagClass: "bg-amber-100 text-amber-700 border-amber-200",
      whatItIs:
        "A sequential model where each phase is completed and approved before moving to the next step.",
      howWeUse:
        "We use Waterfall for fixed-scope projects with clear requirements and sign-off-based delivery.",
      points: [
        "Defined scope, milestones, and documentation",
        "Phase-by-phase approval workflow",
        "Predictable planning for structured teams",
      ],
    },
    {
      icon: GitBranch,
      title: "DevOps (CI/CD-Oriented)",
      tag: "DEVOPS",
      tagClass: "bg-violet-100 text-violet-700 border-violet-200",
      whatItIs:
        "A delivery model focused on automation, continuous integration, and reliable deployment pipelines.",
      howWeUse:
        "We combine development and operations practices for safer release, monitoring, and rapid issue recovery.",
      points: [
        "CI/CD-ready deployment workflow",
        "Environment consistency and release stability",
        "Faster feedback loop between code and production",
      ],
    },
  ];

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
      <p className="text-xs font-extrabold tracking-[0.25em] text-slate-500">
        POPULAR DELIVERY MODELS
      </p>
      <h2 className="mt-2 text-3xl font-extrabold text-slate-900">
        Popular Software Delivery Models We Follow
      </h2>
      <p className="mt-3 max-w-4xl text-sm leading-7 text-slate-600 sm:text-base">
        We select the right model based on scope clarity, timeline pressure, risk level, and
        expected change frequency. This helps us deliver faster while keeping quality and ownership clear.
      </p>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {models.map((m) => (
          <article key={m.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <div className="flex items-start gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-2xl bg-slate-900">
                <m.icon className="h-5 w-5 text-white" />
              </span>
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-base font-extrabold text-slate-900">{m.title}</h3>
                  <span className={`rounded-full border px-2.5 py-1 text-[10px] font-extrabold tracking-wide ${m.tagClass}`}>
                    {m.tag}
                  </span>
                </div>
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
function IndustriesGrid() {
  const items = [
    {
      icon: Stethoscope,
      title: "Healthcare",
      desc: "Appointment workflows, patient records, dashboards, and role-based access control.",
    },
    {
      icon: ShoppingCart,
      title: "E-commerce",
      desc: "Catalog, checkout flow, order tracking, and seller/admin management modules.",
    },
    {
      icon: GraduationCap,
      title: "Education",
      desc: "Student portal, attendance, course modules, exam data, and reporting dashboards.",
    },
    {
      icon: Building2,
      title: "Custom Software for SMEs",
      desc: "Internal tools, automation workflows, ERP-like features, and business dashboards.",
    },
    {
      icon: Factory,
      title: "Operations and Manufacturing",
      desc: "Inventory control, approvals, process visibility, and team performance reports.",
    },
    {
      icon: Truck,
      title: "Logistics and Service Teams",
      desc: "Task assignment, status tracking, route updates, and daily operations control.",
    },
  ];

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
      <div className="flex items-start gap-3">
        <span className="grid h-12 w-12 place-items-center rounded-2xl bg-slate-900">
          <Users className="h-6 w-6 text-white" />
        </span>
        <div>
          <div className="text-lg font-extrabold text-slate-900">Industries We Serve with MERN</div>
          <p className="mt-1 text-sm leading-6 text-slate-600">
            We adapt architecture based on industry requirements, team roles, and growth goals.
          </p>
        </div>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {items.map((x) => (
          <div key={x.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
            <div className="flex items-start gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-2xl bg-white">
                <x.icon className="h-5 w-5 text-slate-900" />
              </span>
              <div>
                <div className="text-sm font-extrabold text-slate-900">{x.title}</div>
                <p className="mt-1 text-sm leading-6 text-slate-600">{x.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ✅ NEW: tech stack grid (SEO depth) */
function TechStackGrid() {
  const stack = [
    { icon: Sparkles, title: "React UI", desc: "Reusable components, clean UX, fast interactions." },
    { icon: Server, title: "Node + Express", desc: "Structured APIs, validation, clean responses." },
    { icon: Database, title: "MongoDB / PostgreSQL", desc: "Data model based on reporting & scalability." },
    { icon: Lock, title: "Auth + RBAC", desc: "JWT/session, protected routes, roles & permissions." },
    { icon: Cloud, title: "Deployment", desc: "VPS/Vercel, domain, SSL, environment setup." },
    { icon: Wrench, title: "Support", desc: "Bug fix, improvements, performance checks." },
  ];

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
      <div className="flex items-start gap-3">
        <span className="grid h-12 w-12 place-items-center rounded-2xl bg-yellow-400">
          <Code2 className="h-6 w-6 text-slate-900" />
        </span>
        <div>
          <div className="text-lg font-extrabold text-slate-900">Tech stack we use</div>
          <p className="mt-1 text-sm leading-6 text-slate-600">
            Production-first choices: security, speed and maintainability.
          </p>
        </div>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {stack.map((x) => (
          <div key={x.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
            <div className="flex items-start gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-2xl bg-white">
                <x.icon className="h-5 w-5 text-slate-900" />
              </span>
              <div>
                <div className="text-sm font-extrabold text-slate-900">{x.title}</div>
                <p className="mt-1 text-sm leading-6 text-slate-600">{x.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ✅ NEW: cluster card */
function ClusterCard({
  icon: Icon,
  title,
  desc,
  href,
}: {
  icon: any;
  title: string;
  desc: string;
  href: string;
}) {
  return (
    <a
      href={href}
      className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
    >
      <div className="flex items-start gap-3">
        <span className="grid h-12 w-12 place-items-center rounded-2xl bg-slate-900">
          <Icon className="h-6 w-6 text-white" />
        </span>
        <div>
          <div className="text-base font-extrabold text-slate-900 group-hover:underline">
            {title}
          </div>
          <p className="mt-1 text-sm leading-6 text-slate-600">{desc}</p>
          <div className="mt-3 inline-flex items-center gap-2 text-sm font-extrabold text-slate-900">
            Explore <ArrowRight className="h-4 w-4 text-slate-400 transition group-hover:translate-x-1" />
          </div>
        </div>
      </div>
    </a>
  );
}




