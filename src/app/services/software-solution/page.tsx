// app/services/software-solution/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Layers,
  ShieldCheck,
  Code2,
  Database,
  Workflow,
  Users,
  Gauge,
  Rocket,
  Wrench,
  LineChart,
  BadgeCheck,
  Lock,
  Cloud,
  Boxes,
  CalendarClock,
  ClipboardList,
  FileText,
  Settings2,
  Quote,
  Building2,
  PhoneCall,
  Link2,
} from "lucide-react";
import { ServiceCustomerGuide } from "@/components/sections/ServiceVisualBlocks";

/** âœ… Production env:
 * NEXT_PUBLIC_SITE_URL=https://mugneeit.com
 */
const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "https://mugneeit.com";

/** âœ… keep ONE style (trailing slash) */
const PAGE_PATH = "/services/software-solution/";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

/** âœ… SEO */
const META_TITLE = "Custom Software Solutions";

export const metadata: Metadata = {
  title: META_TITLE,
  description:
    "Custom software solution: dashboards, admin panels, portals, workflow automation, APIs, role-based access and scalable architecture. Discovery â†’ build â†’ deploy â†’ support.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Custom Software Solution â€” Build, Automate, Scale",
    description:
      "We build custom software solutions: dashboards, portals, integrations, and automation with secure scalable architecture.",
    url: PAGE_URL,
    siteName: "Mugnee IT Solutions",
    type: "website",
  },
  robots: { index: true, follow: true },
};

const faqs = [
  {
    q: "What is a custom software solution?",
    a: "A custom software solution is a tailored system built specifically for your workflowâ€”like dashboards, portals, automation tools or role-based systemsâ€”so you can operate faster and more accurately than using generic software.",
  },
  {
    q: "What types of custom software solutions do you build?",
    a: "Admin dashboards, internal tools, portals, role-based systems, booking systems, CRMs, inventory/ERP modules, automation tools, and API integrations.",
  },
  {
    q: "Do you build web apps only, or mobile apps too?",
    a: "We primarily build modern web apps (dashboards, portals, SaaS). For mobile apps, we can build cross-platform solutions depending on your needs.",
  },
  {
    q: "Which tech stack do you use for custom software solutions?",
    a: "We commonly use Next.js/React, Node.js and modern databases. Stack is selected based on requirements, security, budget, hosting and future scaling.",
  },
  {
    q: "Can you integrate payment gateways, SMS, WhatsApp or email?",
    a: "Yes. We can integrate payment gateways, SMS providers, WhatsApp flows (where applicable), email systems, CRM tools and other third-party services via API/webhooks.",
  },
  {
    q: "Do you provide role-based access control (RBAC)?",
    a: "Yes. We implement RBAC with permissions, protected routes, audit logs (if required) and secure authentication.",
  },
  {
    q: "How long does a custom software solution take?",
    a: "Simple MVPs can take a few weeks; business systems take longer depending on modules and integrations. We start with discovery and share an estimated roadmap.",
  },
  {
    q: "Do you provide deployment and support after delivery?",
    a: "Yes. We deploy to VPS/cloud, configure environments, and offer maintenance/support for fixes, updates, backups and improvements.",
  },
  {
    q: "How do you price a custom software solution?",
    a: "Pricing depends on scope (modules, roles, integrations, reporting, security). We do discovery first and then share a clear scope and estimate.",
  },
];

function buildJsonLd() {
  // âœ… Google-safe: avoid fake price/Offer unless you actually sell fixed price online
  const graph = {
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
          "Custom software solution for dashboards, portals, automation, APIs, and role-based systems. Discovery â†’ build â†’ deploy â†’ support.",
        isPartOf: { "@type": "WebSite", name: "Mugnee IT Solutions", url: SITE_URL },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
          { "@type": "ListItem", position: 2, name: "Services", item: `${SITE_URL}/services/` },
          { "@type": "ListItem", position: 3, name: "Custom Software Solution", item: PAGE_URL },
        ],
      },
      {
        "@type": "Service",
        name: "Custom Software Solution",
        serviceType: "Custom Software Development",
        provider: { "@type": "Organization", name: "Mugnee IT Solutions", url: SITE_URL },
        areaServed: ["Bangladesh", "Worldwide"],
        url: PAGE_URL,
        description:
          "Custom software solution for dashboards, portals, workflow automation, API integrations and role-based systems. Discovery â†’ build â†’ deploy â†’ support.",
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

  return graph;
}

/* ================= DATA ================= */

const whatWeBuild = [
  {
    icon: Layers,
    title: "Custom Software Solution Admin Dashboard",
    desc: "Role-based UI, secure pages, and clean data tables with reports.",
    tags: ["RBAC", "Admin UI", "Reports"],
  },
  {
    icon: Workflow,
    title: "Custom Software Solution Workflow Automation",
    desc: "Reduce manual tasks with smart flows, approvals, and notifications.",
    tags: ["Automation", "Rules", "Approvals"],
  },
  {
    icon: Database,
    title: "Custom Software Solution APIs & Integrations",
    desc: "Connect payment, CRM, email, SMS, inventory or third-party tools.",
    tags: ["API", "Webhooks", "Integrations"],
  },
  {
    icon: ShieldCheck,
    title: "Custom Software Solution Secure Authentication",
    desc: "JWT/session auth, roles, permissions, and audit logs (optional).",
    tags: ["Auth", "Roles", "Logs"],
  },
  {
    icon: Wrench,
    title: "Custom Software Solution Maintenance & Support",
    desc: "Bug fixes, updates, monitoring, backups and improvements.",
    tags: ["Support", "Updates", "Backups"],
  },
  {
    icon: BadgeCheck,
    title: "Custom Software Solution Documentation & Handover",
    desc: "Admin guide, deployment notes, and training for your team.",
    tags: ["Docs", "Handover", "Training"],
  },
];

const deliverables = [
  {
    icon: FileText,
    title: "Custom Software Solution Scope Document",
    desc: "Modules, roles, workflows, integrations and timeline.",
  },
  {
    icon: ClipboardList,
    title: "Custom Software Solution Wireframe",
    desc: "Page structure + user flows before coding starts.",
  },
  {
    icon: Code2,
    title: "Custom Software Solution Source Code",
    desc: "Clean architecture with reusable components.",
  },
  {
    icon: Settings2,
    title: "Custom Software Solution Deployment",
    desc: "VPS/cloud setup + environment configuration.",
  },
  {
    icon: Lock,
    title: "Custom Software Solution Security Layer",
    desc: "RBAC, validation, guards, logs (if required).",
  },
  {
    icon: CalendarClock,
    title: "Custom Software Solution Support Plan",
    desc: "Maintenance options for long-term stability.",
  },
];

const processSteps = [
  {
    n: "01",
    icon: Workflow,
    title: "Custom Software Solution Discovery",
    desc: "Workflow mapping, requirements, and scope breakdown.",
  },
  {
    n: "02",
    icon: ClipboardList,
    title: "Custom Software Solution UI/UX",
    desc: "Wireframe + screens + role-based flows approval.",
  },
  {
    n: "03",
    icon: Boxes,
    title: "Custom Software Solution Build",
    desc: "Modules, APIs, database, and permission rules.",
  },
  {
    n: "04",
    icon: Gauge,
    title: "Custom Software Solution QA",
    desc: "Testing, performance checks, and bug fixing.",
  },
  {
    n: "05",
    icon: Rocket,
    title: "Custom Software Solution Deploy",
    desc: "Cloud/VPS deployment + domain + SSL + monitoring.",
  },
  {
    n: "06",
    icon: Wrench,
    title: "Custom Software Solution Support",
    desc: "Improvements, scaling, updates and ongoing maintenance.",
  },
];

const techStack = [
  {
    icon: Code2,
    title: "Frontend (React / Next.js)",
    desc: "React and Next.js for modular UI, role-based dashboards, and scalable frontend architecture.",
  },
  {
    icon: Boxes,
    title: "Backend (Node.js / Express)",
    desc: "Node.js and Express APIs with validation, business rules, and integration-ready endpoints.",
  },
  {
    icon: Database,
    title: "Database Layer",
    desc: "MongoDB, PostgreSQL, MySQL, and Firebase Firestore based on scaling and reporting needs.",
  },
  {
    icon: Cloud,
    title: "Deployment",
    desc: "Vercel, Netlify, VPS, and cloud deployment with environment setup, backups, and monitoring.",
  },
  {
    icon: Lock,
    title: "Authentication & Security",
    desc: "Google Firebase Auth, JWT/session auth, RBAC, protected routes, and audit logging where required.",
  },
  {
    icon: LineChart,
    title: "Code Quality & Reporting",
    desc: "Clean code standards, commented critical logic, QA/SQA checks, and progress reporting.",
  },
];

const mernBreakdown = [
  {
    icon: Database,
    title: "M â€” MongoDB",
    desc: "Flexible document database for scalable data storage and fast iteration.",
  },
  {
    icon: Boxes,
    title: "E â€” Express.js",
    desc: "Backend framework for robust APIs, middleware control, and business logic layers.",
  },
  {
    icon: Code2,
    title: "R â€” React",
    desc: "Component-based frontend for interactive dashboards, portals, and admin interfaces.",
  },
  {
    icon: Workflow,
    title: "N â€” Node.js",
    desc: "Runtime for high-performance server-side processing and integration-heavy workflows.",
  },
];

const deliveryModels = [
  {
    icon: Workflow,
    title: "Agile Methodology",
    desc: "Popular iterative approach focused on flexibility, sprint delivery, and client feedback.",
  },
  {
    icon: Layers,
    title: "Waterfall",
    desc: "Linear model where requirements, design, build, and testing run in fixed sequence.",
  },
  {
    icon: ShieldCheck,
    title: "V-Model",
    desc: "Validation and verification driven model where each build phase maps to a testing phase.",
  },
  {
    icon: Gauge,
    title: "Spiral Model",
    desc: "Iterative model with strong risk analysis, suitable for complex and large-scale systems.",
  },
  {
    icon: FileText,
    title: "Prototyping Model",
    desc: "Early prototype creation to clarify requirements before full engineering starts.",
  },
  {
    icon: Boxes,
    title: "Incremental Model",
    desc: "Software is delivered in small functional increments and expanded over time.",
  },
  {
    icon: Rocket,
    title: "Big Bang (Limited Use)",
    desc: "High-risk low-planning model used only for very small proof-of-concept scopes.",
  },
];

const howWeWorkFlow = [
  "Client shares goals, current pain points, and expected outcomes",
  "Requirement analysis by business and engineering team",
  "Architecture planning with module scope and timeline",
  "UI/UX and workflow approval before development",
  "Development with clean code, code comments, and version control",
  "QA/SQA testing, bug fixing, and validation before handover",
  "Deployment, training, and post-launch support roadmap",
];

const whyChooseUs = [
  {
    icon: Code2,
    title: "Clean and maintainable code",
    desc: "We follow structured architecture and keep critical logic commented for easier maintenance.",
  },
  {
    icon: ShieldCheck,
    title: "QA/SQA before handover",
    desc: "Each module goes through functional validation, bug checks, and workflow testing before delivery.",
  },
  {
    icon: FileText,
    title: "Professional documentation",
    desc: "You receive handover notes, module guide, and deployment instructions for your internal team.",
  },
];

const industries = [
  {
    icon: Building2,
    title: "Custom Software Solution for Enterprises",
    desc: "Internal tools, portals, reporting & automation.",
  },
  {
    icon: Users,
    title: "Custom Software Solution for HR/Teams",
    desc: "Role-based dashboards, approvals, and workflows.",
  },
  {
    icon: Database,
    title: "Custom Software Solution for Inventory/ERP",
    desc: "Modules, stock logs, approvals and audit trail.",
  },
  {
    icon: ShieldCheck,
    title: "Custom Software Solution for Institutions",
    desc: "Portals, permissions, secure access and data rules.",
  },
];

const solutionKeywords = [
  {
    icon: Building2,
    title: "Visitor Management System",
    desc: "Visitor check-in, pass generation, approval flow, and visit logs.",
  },
  {
    icon: Users,
    title: "School Management System",
    desc: "Student, attendance, results, fees, notice, and admin workflow modules.",
  },
  {
    icon: ShieldCheck,
    title: "Employee Management System",
    desc: "Tasks, attendance, productivity logs, and policy-based activity reporting.",
  },
  {
    icon: FileText,
    title: "Accounts Management System",
    desc: "Income-expense, ledger, invoice generation, payment records, and reporting dashboards.",
  },
  {
    icon: Layers,
    title: "Rental Management System",
    desc: "Tenant, property, rent tracking, dues, agreements, and reminders.",
  },
  {
    icon: Boxes,
    title: "Super Shop Management System",
    desc: "POS, stock movement, supplier records, purchase, and sales analytics.",
  },
  {
    icon: Workflow,
    title: "Small Shop Management App",
    desc: "Lightweight billing, stock, customer ledger, and daily sales reports.",
  },
  {
    icon: Cloud,
    title: "Ecommerce (Single & Multi Vendor)",
    desc: "Catalog, order flow, payment integration, seller panel, and admin control.",
  },
  {
    icon: BadgeCheck,
    title: "LED Display Builder Platform",
    desc: "Product configuration, quote builder, and order-ready specification output.",
  },
  {
    icon: Wrench,
    title: "Computer Parts Builder Tool",
    desc: "Component compatibility logic, bundle creation, pricing, and checkout flow.",
  },
  {
    icon: Code2,
    title: "Custom Web Application",
    desc: "Business-focused web apps built for automation, reporting, and scale.",
  },
  {
    icon: Rocket,
    title: "Custom Mobile Application",
    desc: "Cross-platform mobile apps including invoice-ready flows connected to core APIs.",
  },
];

const caseStudies = [
  {
    title: "Custom Software Solution: Admin Portal + RBAC",
    desc: "Role-based dashboard with secure modules and reporting for faster internal operations.",
    points: ["RBAC + permissions", "Reports + exports", "Clean UI & workflow"],
  },
  {
    title: "Custom Software Solution: Automation + Approvals",
    desc: "Automated workflow to reduce manual approvals and improve turnaround time.",
    points: ["Automation rules", "Approvals + notifications", "Audit logs (optional)"],
  },
  {
    title: "Custom Software Solution: API Integration System",
    desc: "Integrated third-party services via API/webhooks for smoother operations.",
    points: ["API + webhooks", "Error handling", "Reliable deployment"],
  },
];

const testimonials = [
  {
    name: "Operations Team",
    role: "Internal Tool",
    quote: "Our workflow became faster and reporting is now consistent.",
  },
  {
    name: "Business Owner",
    role: "Portal System",
    quote: "Role-based access helped us control data securely.",
  },
  {
    name: "Admin Team",
    role: "Automation",
    quote: "Approvals became structured; fewer errors and less manual work.",
  },
];

const relatedLinks = [
  { title: "Web Development Service", href: "/services/frontend" },
  { title: "SEO Service", href: "/services/seo" },
  { title: "ERP / Business Automation", href: "/services/software-solution/erp-inventory-solution" },
];

const keywordPages = [
  {
    title: "Custom Software Development",
    desc: "Tailored apps, dashboards, and workflows for your business.",
    href: "/services/software-solution/custom-software-development",
  },
  {
    title: "Business Process Automation",
    desc: "Automate approvals, tasks, and internal workflows.",
    href: "/services/software-solution/business-process-automation",
  },
  {
    title: "Internal Management System",
    desc: "Role-based internal systems for teams and operations.",
    href: "/services/software-solution/internal-management-system",
  },
  {
    title: "ERP & Inventory Solution",
    desc: "Inventory, modules, and reporting in one system.",
    href: "/services/software-solution/erp-inventory-solution",
  },
  {
    title: "Custom Web Application",
    desc: "Web apps built for performance, security, and scale.",
    href: "/services/software-solution/custom-web-application",
  },
];

export default function SoftwareSolutionPage() {
  const jsonLd = buildJsonLd();

  return (
    <main className="bg-white">
      {/* âœ… JSON-LD graph */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ===========================
          HERO
         =========================== */}
      <section className="relative isolate overflow-hidden bg-slate-950">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_12%_8%,rgba(56,189,248,0.22),transparent_34%),radial-gradient(circle_at_85%_14%,rgba(250,204,21,0.18),transparent_36%),radial-gradient(circle_at_68%_82%,rgba(147,51,234,0.24),transparent_42%),linear-gradient(120deg,#020617_0%,#0b1932_48%,#22183e_100%)]" />
        <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.18] [background:radial-gradient(circle_at_1px_1px,rgba(255,255,255,.35)_1px,transparent_0)] [background-size:22px_22px]" />
        <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-slate-900/20 via-transparent to-slate-950/45" />

        <div className="mx-auto max-w-6xl px-4 pb-10 pt-24 sm:pb-12 sm:pt-28">
          <nav className="text-xs font-bold text-white/70">
            <Link prefetch={false} href="/" className="hover:text-white">
              Home
            </Link>
            <span className="mx-2 text-white/45">/</span>
            <Link prefetch={false} href="/services" className="hover:text-white">
              Services
            </Link>
            <span className="mx-2 text-white/45">/</span>
            <span className="text-white">Custom Software Solution</span>
          </nav>

          <div className="mt-8 grid gap-10 lg:grid-cols-2 lg:items-center">
            {/* LEFT */}
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-extrabold text-white backdrop-blur">
                <Sparkles className="h-4 w-4 text-yellow-300" />
                SCALABLE OPERATIONS ENGINE
              </div>

              <h1 className="mt-4 text-4xl font-extrabold leading-[1.05] text-white sm:text-5xl">
                Custom Software Solutions for scalable operations
              </h1>

              <p className="mt-4 max-w-2xl text-base leading-8 text-white/85">
                We build dashboards, portals, automation tools, and role-based systems with clean
                architecture. Discovery â†’ build â†’ deploy â†’ supportâ€”clear and reliable.
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <MiniBulletDark icon={Workflow} text="Custom Software Solution discovery + scope" />
                <MiniBulletDark icon={Layers} text="Custom Software Solution modular structure" />
                <MiniBulletDark icon={ShieldCheck} text="Custom Software Solution RBAC + security" />
                <MiniBulletDark icon={Rocket} text="Custom Software Solution deploy + support" />
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href="/contact/"
                  className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-yellow-400 px-7 py-3.5 text-sm font-extrabold text-slate-900 shadow-[0_20px_45px_rgba(15,23,42,.35)] transition hover:-translate-y-0.5 hover:bg-yellow-300"
                >
                  Request Consultation
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </a>

                <a
                  href="#custom-software-solution-packages"
                  className="group inline-flex items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/10 px-7 py-3.5 text-sm font-extrabold text-white backdrop-blur transition hover:bg-white/15"
                >
                  View Packages
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </a>
              </div>
            </div>

            {/* RIGHT: blueprint mock */}
            <div className="relative">
              <div className="overflow-hidden rounded-[28px] border border-white/15 bg-white/5 shadow-[0_25px_80px_rgba(0,0,0,0.45)] backdrop-blur">
                <div className="flex items-center justify-between gap-3 border-b border-white/10 bg-white/5 px-4 py-3">
                  <div className="flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-red-400" />
                    <span className="h-3 w-3 rounded-full bg-yellow-400" />
                    <span className="h-3 w-3 rounded-full bg-emerald-400" />
                  </div>
                  <div className="text-xs font-extrabold text-white/80">Product Blueprint</div>
                  <div className="rounded-full bg-yellow-400 px-3 py-1 text-xs font-extrabold text-slate-900">
                    READY
                  </div>
                </div>

                <div className="p-6">
                  <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                    <div className="flex items-center justify-between">
                      <div className="text-xs font-extrabold text-white/70">MODULES</div>
                      <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-extrabold text-white/90">
                        v1 Scope
                      </span>
                    </div>

                    <div className="mt-4 grid gap-4 sm:grid-cols-2">
                      <ModuleCardDark icon={Users} title="Users & Roles" desc="RBAC, permissions" />
                      <ModuleCardDark icon={Database} title="Data Layer" desc="DB + API rules" />
                      <ModuleCardDark icon={Boxes} title="Core Modules" desc="CRUD, workflows" />
                      <ModuleCardDark icon={Lock} title="Security" desc="auth, logs, guards" />
                    </div>

                    <div className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-4">
                      <div className="flex items-center justify-between">
                        <div className="text-sm font-extrabold text-white">Delivery Pipeline</div>
                        <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-extrabold text-white/90">
                          Week 1â€“4
                        </span>
                      </div>

                      <div className="mt-4 grid gap-3">
                        <StepRowDark label="Discovery & wireframe" active />
                        <StepRowDark label="Build modules + API" active />
                        <StepRowDark label="QA + deploy" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pointer-events-none absolute -left-4 top-10 hidden sm:block">
                <FloatNoteDark title="Discovery" desc="Requirements + scope breakdown" />
              </div>
              <div className="pointer-events-none absolute -right-4 bottom-10 hidden sm:block">
                <FloatNoteDark title="Support" desc="Maintenance + improvements" />
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-6xl px-4">
          <div className="h-px w-full bg-white/10" />
        </div>
      </section>

      <ServiceCustomerGuide pillar="software-solution" />

      <section id="custom-software-solution-what-is" className="mx-auto max-w-6xl px-4 py-12">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <p className="text-xs font-extrabold tracking-[0.28em] text-slate-500">
            WHAT IS CUSTOM SOFTWARE SOLUTION
          </p>
          <h2 className="mt-2 text-3xl font-extrabold text-slate-900">
            What is Custom Software Solution
          </h2>
          <p className="mt-2 max-w-3xl text-sm leading-7 text-slate-600">
            A custom software solution is a system built specifically around your business workflow instead of
            forcing your team to adapt to generic tools. It is ideal for enterprise operations, role-based
            approvals, reporting, invoice workflows, and integrated web/mobile applications.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Workflow, title: "Workflow Fit", desc: "Modules and permissions mapped to your real process." },
              { icon: Lock, title: "Control & Security", desc: "Role-based access, validation, and secure operations." },
              { icon: LineChart, title: "Reporting Clarity", desc: "Dashboards and analytics built for decisions." },
              { icon: Rocket, title: "Scalable Growth", desc: "Architecture designed for future features and volume." },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <div className="grid h-10 w-10 place-items-center rounded-2xl bg-slate-900 text-white">
                  <item.icon className="h-5 w-5" />
                </div>
                <div className="mt-3 text-sm font-extrabold text-slate-900">{item.title}</div>
                <p className="mt-1 text-xs leading-6 text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===========================
          SOLUTION
         =========================== */}
      <section id="custom-software-solution-overview" className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <p className="text-xs font-extrabold tracking-[0.28em] text-slate-500">
            CUSTOM SOFTWARE SOLUTION
          </p>
          <h2 className="mt-2 text-3xl font-extrabold text-slate-900">
            Custom software for your workflow
          </h2>
          <p className="mt-2 max-w-3xl text-sm leading-7 text-slate-600">
            We design business-first software systems with clear module planning, role-based access,
            integration readiness, and long-term support so your team can operate faster and safer.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              "Module architecture mapped to real business operations and approvals",
              "Secure role-based access with predictable data flow and controls",
              "Integration-ready foundation for APIs, CRM, payment, or internal tools",
              "Deployment plus support roadmap for stable growth after launch",
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
            <a
              href="/contact/"
              className="inline-flex items-center gap-2 rounded-2xl bg-slate-900 px-6 py-3 text-sm font-extrabold text-white hover:bg-slate-800"
            >
              Get Software Solution <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#custom-software-solution-process"
              className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-6 py-3 text-sm font-extrabold text-slate-900 hover:bg-slate-100"
            >
              View process <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      <section id="custom-software-solution-benefits" className="mx-auto max-w-6xl px-4 pb-14">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">
          <p className="text-xs font-extrabold tracking-[0.28em] text-slate-500">
            CUSTOM SOFTWARE BENEFITS
          </p>
          <h2 className="mt-2 text-3xl font-extrabold text-slate-900">
            Benefits of custom software solutions
          </h2>
          <div className="mt-6">
            <h3 className="text-sm font-extrabold uppercase tracking-[0.16em] text-slate-500">Why It Works</h3>
            <div className="mt-3 grid gap-3 sm:grid-cols-2">
              {[
                "Systems aligned with your exact workflow and approval process",
                "Higher operational efficiency through automation and role-based access",
                "Cleaner data flow with reliable reporting and audit visibility",
                "Scalable architecture with long-term maintenance flexibility",
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
                "Enterprise teams get centralized control with role-based dashboards",
                "Finance and operations teams automate invoice, ledger, and approval tasks",
                "Management gets accurate reports for faster decision-making",
                "Mobile and web users work from one connected system with fewer manual errors",
              ].map((item) => (
                <div key={item} className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm font-semibold text-slate-700">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="custom-software-solution-comparison" className="mx-auto max-w-6xl px-4 pb-14">
        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
          <p className="text-xs font-extrabold tracking-[0.28em] text-slate-500">
            CUSTOM SOFTWARE COMPARISON
          </p>
          <h2 className="mt-2 text-3xl font-extrabold text-slate-900">
            Custom software vs ready-made alternatives
          </h2>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {[
              "Custom software: built around your exact workflow, roles, and reporting needs",
              "Ready-made tools: faster onboarding, but limited fit for unique business rules",
              "Plugin-heavy workaround: lower initial effort, but harder long-term maintenance",
              "Custom architecture approach: stronger control, scalability, and system ownership",
            ].map((item) => (
              <div key={item} className="rounded-2xl border border-slate-200 bg-white p-4 text-sm font-semibold text-slate-700">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===========================
          TOC
         =========================== */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="text-sm font-extrabold text-slate-900">
            Custom Software Solution â€” Quick Links
          </div>
          <div className="mt-4 flex flex-wrap gap-3">
            {[
              ["#custom-software-solution-what-is", "What is custom software"],
              ["#custom-software-solution-what-we-build", "What we build"],
              ["#custom-software-solution-models", "Delivery models"],
              ["#custom-software-solution-keywords", "Systems we build"],
              ["#custom-software-solution-process", "Process"],
              ["#custom-software-solution-workflow", "How we work"],
              ["#custom-software-solution-why-us", "Why choose us"],
              ["#custom-software-solution-deliverables", "Deliverables"],
              ["#custom-software-solution-tech-stack", "Tech stack"],
              ["#custom-software-solution-industries", "Industries"],
              ["#custom-software-solution-case-studies", "Case studies"],
              ["#custom-software-solution-packages", "Packages"],
              ["#custom-software-solution-faq", "FAQ"],
            ].map(([href, label]) => (
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
          WHAT WE BUILD
         =========================== */}
      <section
        id="custom-software-solution-what-we-build"
        className="mx-auto max-w-6xl px-4 py-14"
      >
        <p className="text-xs font-extrabold tracking-[0.28em] text-slate-500">
          CUSTOM SOFTWARE SOLUTION WHAT WE BUILD
        </p>
        <h2 className="mt-2 text-3xl font-extrabold text-slate-900">
          Software solutions for dashboards and automation
        </h2>
        <p className="mt-2 max-w-2xl text-sm text-slate-600">
          Perfect for internal tools and business workflows: role-based dashboards, admin panels,
          booking systems, CRMs, automation tools and API integrations.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whatWeBuild.map((f) => (
            <FeatureCard
              key={f.title}
              icon={f.icon}
              title={f.title}
              desc={f.desc}
              tags={f.tags}
            />
          ))}
        </div>
      </section>

      {/* ===========================
          KEYWORD SYSTEMS
         =========================== */}
      <section
        id="custom-software-solution-keywords"
        className="bg-slate-50"
      >
        <div className="mx-auto max-w-6xl px-4 py-14">
          <p className="text-xs font-extrabold tracking-[0.28em] text-slate-500">
            SOFTWARE SYSTEMS WE BUILD
          </p>
          <h2 className="mt-2 text-3xl font-extrabold text-slate-900">
            Business software systems and builder tools we develop
          </h2>
          <p className="mt-2 max-w-3xl text-sm leading-7 text-slate-600">
            We build custom software for operations, management, ecommerce, and specialized builder tools.
            Each system is planned around your workflow, user roles, and reporting needs.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {solutionKeywords.map((item) => (
              <SimpleCard key={item.title} icon={item.icon} title={item.title} desc={item.desc} />
            ))}
          </div>

          <p className="mt-8 max-w-3xl text-sm leading-7 text-slate-600">
            Note: For employee activity tracking features, we implement policy-based, consent-driven setups
            according to your company compliance rules.
          </p>
        </div>
      </section>

      {/* ===========================
          PROCESS
         =========================== */}
      <section id="custom-software-solution-process" className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <p className="text-xs font-extrabold tracking-[0.28em] text-slate-500">
            CUSTOM SOFTWARE SOLUTION PROCESS
          </p>
          <h2 className="mt-2 text-3xl font-extrabold text-slate-900">
            Software solution process: discovery to deployment
          </h2>
          <p className="mt-2 max-w-3xl text-sm leading-7 text-slate-600">
            Clear workflow: scope â†’ UI/UX â†’ modules â†’ QA â†’ deploy â†’ support. No confusion, no messy
            handover.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {processSteps.map((s) => (
              <StepCard key={s.n} n={s.n} icon={s.icon} title={s.title} desc={s.desc} />
            ))}
          </div>
        </div>
      </section>

      {/* ===========================
          DELIVERABLES
         =========================== */}
      <section
        id="custom-software-solution-deliverables"
        className="mx-auto max-w-6xl px-4 py-14"
      >
        <p className="text-xs font-extrabold tracking-[0.28em] text-slate-500">
          CUSTOM SOFTWARE SOLUTION DELIVERABLES
        </p>
        <h2 className="mt-2 text-3xl font-extrabold text-slate-900">
          Software solution deliverables you will receive
        </h2>
        <p className="mt-2 max-w-3xl text-sm leading-7 text-slate-600">
          We keep it clear: documentation, handover, deployment notes and support options.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {deliverables.map((d) => (
            <DeliverableCard key={d.title} icon={d.icon} title={d.title} desc={d.desc} />
          ))}
        </div>
      </section>

      {/* ===========================
          TECH STACK
         =========================== */}
      <section id="custom-software-solution-tech-stack" className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <p className="text-xs font-extrabold tracking-[0.28em] text-slate-500">
            CUSTOM SOFTWARE SOLUTION TECH STACK
          </p>
          <h2 className="mt-2 text-3xl font-extrabold text-slate-900">
            Software solution tech stack by requirement
          </h2>
          <p className="mt-2 max-w-3xl text-sm leading-7 text-slate-600">
            We choose the stack based on data volume, performance, security, budget, hosting and
            future scaling.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {techStack.map((t) => (
              <SimpleCard key={t.title} icon={t.icon} title={t.title} desc={t.desc} />
            ))}
          </div>

          <div className="mt-10 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <h3 className="text-xl font-extrabold text-slate-900">MERN stack breakdown (with practical use)</h3>
            <p className="mt-2 max-w-3xl text-sm leading-7 text-slate-600">
              For many enterprise dashboards and workflow apps, we use MERN with Firebase/Auth and scalable
              deployment pipelines.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {mernBreakdown.map((m) => (
                <SimpleCard key={m.title} icon={m.icon} title={m.title} desc={m.desc} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===========================
          INDUSTRIES
         =========================== */}
      <section
        id="custom-software-solution-industries"
        className="mx-auto max-w-6xl px-4 py-14"
      >
        <p className="text-xs font-extrabold tracking-[0.28em] text-slate-500">
          CUSTOM SOFTWARE SOLUTION INDUSTRIES
        </p>
        <h2 className="mt-2 text-3xl font-extrabold text-slate-900">
          Software solutions for teams and industries
        </h2>
        <p className="mt-2 max-w-3xl text-sm leading-7 text-slate-600">
          From internal portals to automation systemsâ€”your workflow decides the solution
          architecture.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((i) => (
            <SimpleCard key={i.title} icon={i.icon} title={i.title} desc={i.desc} />
          ))}
        </div>
      </section>

      {/* ===========================
          CASE STUDIES
         =========================== */}
      <section id="custom-software-solution-case-studies" className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <p className="text-xs font-extrabold tracking-[0.28em] text-slate-500">
            CUSTOM SOFTWARE SOLUTION CASE STUDIES
          </p>
          <h2 className="mt-2 text-3xl font-extrabold text-slate-900">
            Software solution case studies and builds
          </h2>
          <p className="mt-2 max-w-3xl text-sm leading-7 text-slate-600">
            Add real projects later (screenshots/links). Even these example blocks help SEO
            structure.
          </p>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {caseStudies.map((c) => (
              <CaseCard key={c.title} title={c.title} desc={c.desc} points={c.points} />
            ))}
          </div>
        </div>
      </section>

      <section id="custom-software-solution-workflow" className="mx-auto max-w-6xl px-4 py-14">
        <p className="text-xs font-extrabold tracking-[0.28em] text-slate-500">
          HOW WE WORK
        </p>
        <h2 className="mt-2 text-3xl font-extrabold text-slate-900">
          How our team executes your software project
        </h2>
        <p className="mt-2 max-w-3xl text-sm leading-7 text-slate-600">
          We follow a clear workflow from requirement analysis to production handover with clean code,
          documented logic, and QA/SQA validation before release.
        </p>

        <div className="mt-10 grid gap-3 sm:grid-cols-2">
          {howWeWorkFlow.map((step) => (
            <div key={step} className="rounded-2xl border border-slate-200 bg-white p-4 text-sm font-semibold text-slate-700">
              {step}
            </div>
          ))}
        </div>
      </section>

      <section id="custom-software-solution-why-us" className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <p className="text-xs font-extrabold tracking-[0.28em] text-slate-500">
            WHY CHOOSE US
          </p>
          <h2 className="mt-2 text-3xl font-extrabold text-slate-900">
            Why clients choose our custom software team
          </h2>
          <p className="mt-2 max-w-3xl text-sm leading-7 text-slate-600">
            We focus on professional engineering quality, clear communication, and reliable post-delivery support.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whyChooseUs.map((w) => (
              <SimpleCard key={w.title} icon={w.icon} title={w.title} desc={w.desc} />
            ))}
          </div>
        </div>
      </section>

      {/* ===========================
          TESTIMONIALS
         =========================== */}
      <section className="mx-auto max-w-6xl px-4 py-14">
        <p className="text-xs font-extrabold tracking-[0.28em] text-slate-500">
          CUSTOM SOFTWARE SOLUTION TESTIMONIALS
        </p>
        <h2 className="mt-2 text-3xl font-extrabold text-slate-900">
          Software solution feedback from teams
        </h2>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {testimonials.map((t) => (
            <TestimonialCard key={t.name} name={t.name} role={t.role} quote={t.quote} />
          ))}
        </div>
      </section>

      {/* ===========================
          PACKAGES (NO PRICE)
         =========================== */}
      <section id="custom-software-solution-packages" className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-extrabold tracking-[0.28em] text-slate-500">
                CUSTOM SOFTWARE SOLUTION PACKAGES
              </p>
              <h2 className="mt-2 text-3xl font-extrabold text-slate-900">
                Software solution packages by scope
              </h2>
              <p className="mt-2 max-w-2xl text-sm text-slate-600">
                Pricing depends on modules, roles, integrations and delivery timeline.
              </p>
            </div>

            <a
              href="/contact/"
              className="inline-flex w-fit items-center justify-center gap-2 rounded-2xl bg-slate-900 px-6 py-3 text-sm font-extrabold text-white transition hover:bg-slate-800"
            >
              Request Quote <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            <PlanCard
              title="Starter MVP"
              subtitle="Basic workflow + core module"
              items={[
                "Discovery + scope",
                "1â€“2 core modules",
                "Basic auth (if needed)",
                "Deploy + handover",
              ]}
              cta="Get Quotation"
            />
            <PlanCard
              featured
              title="Business System"
              subtitle="Dashboards + roles + reports"
              items={[
                "Multiple modules",
                "Role-based access",
                "Admin dashboard",
                "Reporting + deploy",
              ]}
              cta="Get Quotation"
            />
            <PlanCard
              title="Enterprise / Custom"
              subtitle="Integrations + scaling"
              items={[
                "Advanced integrations",
                "SLA support option",
                "Security hardening",
                "Scaling plan",
              ]}
              cta="Get Quotation"
            />
          </div>
        </div>
      </section>

      <section id="custom-software-solution-models" className="mx-auto max-w-6xl px-4 py-14">
        <p className="text-xs font-extrabold tracking-[0.28em] text-slate-500">
          SOFTWARE DELIVERY MODELS
        </p>
        <h2 className="mt-2 text-3xl font-extrabold text-slate-900">
          Software models we follow by project type
        </h2>
        <p className="mt-2 max-w-3xl text-sm leading-7 text-slate-600">
          We choose the delivery model based on project complexity, risk, timeline, and feedback cycle.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {deliveryModels.map((m) => (
            <SimpleCard key={m.title} icon={m.icon} title={m.title} desc={m.desc} />
          ))}
        </div>
      </section>

      {/* ===========================
          KEYWORD PAGES
         =========================== */}
      <section className="mx-auto max-w-6xl px-4 py-14">
        <p className="text-xs font-extrabold tracking-[0.28em] text-slate-500">
          CUSTOM SOLUTION KEYWORDS
        </p>
        <h2 className="mt-2 text-3xl font-extrabold text-slate-900">
          Custom solution services by search intent
        </h2>
        <p className="mt-2 max-w-3xl text-sm leading-7 text-slate-600">
          Focused pages for common custom solution keywords. Each page is unique and built for
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

      {/* ===========================
          FAQ + CTA + Related
         =========================== */}
      <section
        id="custom-software-solution-faq"
        className="mx-auto max-w-6xl px-4 py-14"
      >
        <p className="text-xs font-extrabold tracking-[0.28em] text-slate-500">
          CUSTOM SOFTWARE SOLUTION FAQ
        </p>
        <h2 className="mt-2 text-3xl font-extrabold text-slate-900">
          Software solution FAQs before you start
        </h2>

        <div className="mt-10 grid gap-4 lg:grid-cols-2">
          {faqs.map((f) => (
            <details
              key={f.q}
              className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <summary className="cursor-pointer list-none text-sm font-extrabold text-slate-900">
                {f.q}
                <span className="float-right text-slate-400 transition group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 text-sm leading-7 text-slate-600">{f.a}</p>
            </details>
          ))}
        </div>

        <div className="mt-12 rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="min-w-0">
              <div className="text-lg font-extrabold text-slate-900">
                Want a Custom Software Solution for your business?
              </div>
              <p className="mt-1 text-sm text-slate-600">
                Share your workflow â€” weâ€™ll reply with scope, plan & estimate.
              </p>
              <div className="mt-3 flex flex-wrap gap-3 text-sm text-slate-600">
                <span className="inline-flex items-center gap-2">
                  <Quote className="h-4 w-4" /> Clear scope & roadmap
                </span>
                <span className="inline-flex items-center gap-2">
                  <FileText className="h-4 w-4" /> Documentation handover
                </span>
                <span className="inline-flex items-center gap-2">
                  <PhoneCall className="h-4 w-4" /> Support options
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Link prefetch={false}
                href="/contact/"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-yellow-400 px-6 py-3 text-sm font-extrabold text-slate-900 transition hover:bg-yellow-500"
              >
                Get in touch <ArrowRight className="h-4 w-4" />
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

        <div className="mt-10 rounded-3xl border border-slate-200 bg-white p-6">
          <div className="text-sm font-extrabold text-slate-900">
            Custom Software Solution â€” Related services
          </div>
          <div className="mt-4 flex flex-wrap gap-3">
            {relatedLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-slate-50 px-5 py-3 text-sm font-extrabold text-slate-900 hover:bg-slate-100"
              >
                {l.title} <ArrowRight className="h-4 w-4" />
              </a>
            ))}
          </div>
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

function ModuleCardDark({
  icon: Icon,
  title,
  desc,
}: {
  icon: LucideIcon;
  title: string;
  desc: string;
}) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-4">
      <div className="flex items-start gap-3">
        <div className="grid h-11 w-11 place-items-center rounded-2xl bg-yellow-400 text-slate-900">
          <Icon className="h-5 w-5" />
        </div>
        <div>
          <div className="text-sm font-extrabold text-white">{title}</div>
          <div className="mt-1 text-sm text-white/70">{desc}</div>
        </div>
      </div>
    </div>
  );
}

function StepRowDark({ label, active }: { label: string; active?: boolean }) {
  return (
    <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-3">
      <span
        className={[
          "grid h-8 w-8 place-items-center rounded-xl font-black",
          active ? "bg-yellow-400 text-slate-900" : "bg-white/25 text-white",
        ].join(" ")}
      >
        âœ“
      </span>
      <div className="text-sm font-semibold text-white/85">{label}</div>
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
      <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-indigo-200/55 blur-2xl opacity-0 transition-opacity group-hover:opacity-100" />
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

      <div className="mt-6 flex items-center gap-2 text-sm font-extrabold text-slate-900">
        Learn more <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
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

function DeliverableCard({
  icon: Icon,
  title,
  desc,
}: {
  icon: LucideIcon;
  title: string;
  desc: string;
}) {
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

function CaseCard({ title, desc, points }: { title: string; desc: string; points: string[] }) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="text-lg font-extrabold text-slate-900">{title}</div>
      <p className="mt-2 text-sm leading-7 text-slate-600">{desc}</p>
      <div className="mt-4 space-y-2">
        {points.map((p) => (
          <div key={p} className="flex items-start gap-2 text-sm text-slate-700">
            <span className="mt-1 grid h-5 w-5 place-items-center rounded-full bg-emerald-50 ring-1 ring-emerald-100">
              <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
            </span>
            <span className="leading-7">{p}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function TestimonialCard({
  name,
  role,
  quote,
}: {
  name: string;
  role: string;
  quote: string;
}) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex items-start gap-3">
        <span className="grid h-12 w-12 place-items-center rounded-2xl bg-slate-900 text-white">
          <Quote className="h-6 w-6" />
        </span>
        <div className="min-w-0">
          <div className="text-sm font-extrabold text-slate-900">{name}</div>
          <div className="mt-1 text-xs font-bold text-slate-500">{role}</div>
        </div>
      </div>
      <p className="mt-4 text-sm leading-7 text-slate-600">â€œ{quote}â€</p>
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

      <div className="mt-3 inline-flex items-center rounded-full bg-slate-100 px-4 py-2 text-sm font-extrabold text-slate-900">
        Get Quotation
      </div>

      <div className="mt-3 text-sm text-slate-600">{subtitle}</div>

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
          featured ? "bg-yellow-400 text-slate-900 hover:bg-yellow-500" : "bg-slate-900 text-white hover:bg-slate-800",
        ].join(" ")}
      >
        {cta}
        <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
      </a>
    </div>
  );
}




