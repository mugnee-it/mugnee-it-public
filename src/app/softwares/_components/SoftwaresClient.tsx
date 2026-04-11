"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Container from "@/components/ui/Container";
import { withTrailingSlash } from "@/lib/utils";
import {
  ArrowRight,
  BadgeCheck,
  BookOpen,
  Building2,
  Calculator,
  CalendarCheck,
  Clock,
  Cloud,
  Code2,
  CreditCard,
  Factory,
  FileStack,
  Globe2,
  GraduationCap,
  HeartHandshake,
  Home,
  Hotel,
  Layers,
  LayoutGrid,
  Package,
  Pill,
  Rocket,
  Shield,
  ShoppingCart,
  Smartphone,
  Sparkles,
  Target,
  Ticket,
  Truck,
  UserCheck,
  Users,
  UtensilsCrossed,
  Zap,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { SoftwareCategory } from "../_data/softwareCatalog";
import {
  CATEGORY_LABELS,
  FAQ_ITEMS,
  SOFTWARE_PRODUCTS,
  TECH_STACK,
} from "../_data/softwareCatalog";
import { TechStackIcon } from "./TechStackIcon";

const iconBySlug: Record<string, LucideIcon> = {
  "visitor-management-system": UserCheck,
  "hr-solutions": Users,
  worklog: Clock,
  "employee-management": Users,
  "crm-sales-pipeline": Target,
  "document-management-dms": FileStack,
  "appointment-booking-system": CalendarCheck,
  "accounts-management": Calculator,
  "hotel-management": Hotel,
  "school-management": GraduationCap,
  "lms-training-platform": BookOpen,
  "restaurant-fnb": UtensilsCrossed,
  "pharmacy-clinic": Pill,
  "real-estate-property": Home,
  "manufacturing-production": Factory,
  "transport-fleet-lite": Truck,
  "ngo-donor-management": HeartHandshake,
  "office-management": Building2,
  "saas-products": Cloud,
  "pos-point-of-sale": CreditCard,
  "inventory-erp": Package,
  "membership-subscription": Ticket,
  "ecommerce-suite": ShoppingCart,
  "custom-web-applications": Code2,
  "mobile-applications": Smartphone,
};

function HeroIllustration({ animateFloat }: { animateFloat: boolean }) {
  const floatA = animateFloat
    ? { animate: { y: [0, -7, 0] }, transition: { duration: 5.5, repeat: Infinity, ease: "easeInOut" as const } }
    : {};
  const floatB = animateFloat
    ? {
        animate: { y: [0, -6, 0] },
        transition: { duration: 5.5, repeat: Infinity, ease: "easeInOut" as const, delay: 0.45 },
      }
    : {};

  return (
    <svg
      viewBox="0 0 440 280"
      className="h-auto w-full max-w-md"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <defs>
        <linearGradient id="sw-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#facc15" stopOpacity="0.95" />
          <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.85" />
        </linearGradient>
        <linearGradient id="sw-panel" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1e293b" />
          <stop offset="100%" stopColor="#0f172a" />
        </linearGradient>
        <filter id="sw-sh" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="10" stdDeviation="12" floodColor="#0f172a" floodOpacity="0.2" />
        </filter>
      </defs>
      <rect width="440" height="280" rx="28" fill="#0f172a" opacity="0.06" />
      <motion.g {...floatA}>
        <g filter="url(#sw-sh)">
          <rect x="48" y="44" width="200" height="200" rx="20" fill="url(#sw-panel)" stroke="#334155" strokeWidth="1.5" />
          <rect x="64" y="60" width="168" height="14" rx="6" fill="#334155" />
          <rect x="64" y="86" width="120" height="8" rx="3" fill="#475569" />
          <rect x="64" y="104" width="148" height="8" rx="3" fill="#475569" opacity="0.7" />
          <rect x="64" y="128" width="168" height="92" rx="14" fill="#1e293b" stroke="#475569" />
          <path d="M100 168h96M100 186h72M100 204h88" stroke="#64748b" strokeWidth="3" strokeLinecap="round" />
          <circle cx="188" cy="152" r="10" fill="url(#sw-grad)" />
        </g>
      </motion.g>
      <motion.g {...floatB}>
        <g filter="url(#sw-sh)">
          <rect x="232" y="72" width="168" height="118" rx="16" fill="#fff" stroke="#e2e8f0" strokeWidth="1.5" />
          <rect x="248" y="88" width="100" height="10" rx="4" fill="#e2e8f0" />
          <rect x="248" y="106" width="136" height="8" rx="3" fill="#cbd5e1" />
          <rect x="248" y="124" width="120" height="8" rx="3" fill="#cbd5e1" opacity="0.8" />
          <rect x="248" y="148" width="56" height="28" rx="8" fill="url(#sw-grad)" opacity="0.9" />
        </g>
      </motion.g>
      <motion.path
        d="M248 140c24-8 48 8 72 0"
        stroke="#94a3b8"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        initial={false}
        animate={
          animateFloat
            ? { pathLength: [0.85, 1, 0.85], opacity: [0.5, 1, 0.5] }
            : { pathLength: 1, opacity: 0.7 }
        }
        transition={{ duration: 3.2, repeat: animateFloat ? Infinity : 0, ease: "easeInOut" }}
      />
    </svg>
  );
}

function CatalogBackdrop() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <div className="absolute -left-40 top-20 h-80 w-80 rounded-full bg-violet-400/15 blur-3xl" />
      <div className="absolute -right-32 bottom-10 h-72 w-72 rounded-full bg-amber-300/20 blur-3xl" />
      <div className="absolute left-1/2 top-0 h-64 w-[min(100%,48rem)] -translate-x-1/2 rounded-full bg-sky-200/25 blur-3xl" />
      <div
        className="absolute inset-0 opacity-[0.4] [background-image:radial-gradient(circle_at_1px_1px,rgba(99,102,241,0.09)_1px,transparent_0)] [background-size:20px_20px]"
        aria-hidden
      />
    </div>
  );
}

function CatalogRibbon() {
  return (
    <svg
      viewBox="0 0 1200 120"
      className="mb-10 h-auto w-full text-violet-600/90"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <defs>
        <linearGradient id="sw-rib" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.2" />
          <stop offset="50%" stopColor="#a855f7" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#fbbf24" stopOpacity="0.25" />
        </linearGradient>
        <linearGradient id="sw-node" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#6366f1" />
          <stop offset="100%" stopColor="#4f46e5" />
        </linearGradient>
      </defs>
      <path
        d="M0 88c200-40 400 40 600 0s400-40 600 0v32H0V88z"
        fill="url(#sw-rib)"
        opacity="0.85"
      />
      <g opacity="0.9">
        <rect x="80" y="28" width="140" height="52" rx="12" fill="#fff" stroke="#e9d5ff" strokeWidth="1.5" />
        <rect x="96" y="42" width="60" height="8" rx="3" fill="#e9d5ff" />
        <rect x="96" y="56" width="100" height="6" rx="2" fill="#f3e8ff" />
        <circle cx="198" cy="54" r="14" fill="url(#sw-node)" opacity="0.9" />
        <rect x="280" y="32" width="100" height="44" rx="10" fill="#fff" stroke="#fde68a" strokeWidth="1.5" />
        <path d="M310 52l12 8 20-24" stroke="#22c55e" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="420" y="30" width="160" height="48" rx="10" fill="#0f172a" opacity="0.88" />
        <text x="500" y="60" textAnchor="middle" fill="#fbbf24" fontSize="11" fontWeight="800" fontFamily="system-ui,sans-serif">
          MERN · DJANGO · FLUTTER
        </text>
        <rect x="620" y="34" width="120" height="40" rx="10" fill="#fff" stroke="#c7d2fe" strokeWidth="1.5" />
        <rect x="636" y="48" width="88" height="6" rx="2" fill="#c7d2fe" opacity="0.7" />
        <rect x="636" y="58" width="64" height="6" rx="2" fill="#e2e8f0" />
        <rect x="780" y="28" width="130" height="52" rx="12" fill="#fff" stroke="#a5b4fc" strokeWidth="1.5" />
        <rect x="796" y="44" width="40" height="24" rx="6" fill="#818cf8" opacity="0.35" />
        <rect x="844" y="44" width="50" height="24" rx="6" fill="#c7d2fe" opacity="0.5" />
        <path d="M960 56h180" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" strokeDasharray="6 8" />
        <polygon points="1140,52 1155,56 1140,60" fill="#6366f1" />
      </g>
    </svg>
  );
}

function GapFillIllustration() {
  return (
    <svg viewBox="0 0 360 200" className="h-auto w-full max-w-sm shrink-0" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <defs>
        <linearGradient id="gf-g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#a78bfa" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#fcd34d" stopOpacity="0.4" />
        </linearGradient>
        <linearGradient id="gf-bar" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#6366f1" />
          <stop offset="100%" stopColor="#4f46e5" />
        </linearGradient>
      </defs>
      <rect width="360" height="200" rx="18" fill="url(#gf-g)" opacity="0.25" />
      <rect x="24" y="32" width="120" height="140" rx="14" fill="#fff" stroke="#e9d5ff" strokeWidth="1.5" />
      <rect x="40" y="52" width="88" height="8" rx="3" fill="#ede9fe" />
      <rect x="40" y="70" width="64" height="6" rx="2" fill="#e2e8f0" />
      <rect x="40" y="88" width="72" height="6" rx="2" fill="#e2e8f0" opacity="0.8" />
      <rect x="40" y="118" width="88" height="40" rx="8" fill="#f5f3ff" stroke="#c4b5fd" />
      <rect x="160" y="48" width="176" height="100" rx="14" fill="#0f172a" stroke="#334155" strokeWidth="1.5" />
      <rect x="176" y="64" width="100" height="8" rx="3" fill="#475569" />
      <rect x="176" y="82" width="80" height="6" rx="2" fill="#334155" />
      <rect x="176" y="100" width="144" height="36" rx="8" fill="#1e293b" stroke="#475569" />
      <rect x="188" y="112" width="16" height="12" rx="2" fill="url(#gf-bar)" opacity="0.9" />
      <rect x="210" y="116" width="16" height="8" rx="2" fill="#64748b" />
      <rect x="232" y="110" width="16" height="14" rx="2" fill="#64748b" opacity="0.8" />
      <path d="M152 108h8" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" />
      <polygon points="160,104 168,108 160,112" fill="#94a3b8" />
      <text x="248" y="178" textAnchor="middle" fill="#64748b" fontSize="9" fontWeight="800" fontFamily="system-ui,sans-serif" letterSpacing="0.08em">
        WEB + MOBILE + API
      </text>
    </svg>
  );
}

function CatalogGridGaps({
  count,
  onViewAll,
}: {
  count: number;
  onViewAll: () => void;
}) {
  const rem2 = count % 2;
  const rem3 = count % 3;
  const totalLines = SOFTWARE_PRODUCTS.length;

  const narrowCard = (
    <div className="flex h-full min-h-[260px] flex-col justify-between rounded-[1.35rem] border border-violet-100/90 bg-gradient-to-b from-white to-violet-50/40 p-6 shadow-[0_12px_32px_-14px_rgba(99,102,241,0.2)] ring-1 ring-violet-100/60">
      <div>
        <p className="text-[10px] font-extrabold uppercase tracking-wider text-violet-600">MUGNEE IT</p>
        <p className="mt-3 font-[family-name:var(--font-poppins)] text-3xl font-black text-slate-900">{totalLines}+</p>
        <p className="text-sm font-bold text-slate-600">software lines & custom builds</p>
        <ul className="mt-4 space-y-2 text-xs font-semibold text-slate-500">
          <li className="flex gap-2">
            <span className="text-amber-500">●</span> Visitor, HR, CRM, POS, School…
          </li>
          <li className="flex gap-2">
            <span className="text-amber-500">●</span> MERN · Django · Flutter · Native
          </li>
        </ul>
      </div>
      <Link
        href={withTrailingSlash("/contact?service=softwares")}
        className="mt-4 inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2.5 text-xs font-extrabold text-white transition hover:bg-slate-800"
      >
        Talk to sales
        <ArrowRight className="h-3.5 w-3.5" />
      </Link>
    </div>
  );

  return (
    <>
      {rem3 === 1 ? (
        <aside
          className="hidden min-h-[280px] flex-col justify-center rounded-[1.35rem] border border-violet-200/70 bg-gradient-to-br from-violet-50/95 via-white to-amber-50/40 p-6 shadow-[0_16px_40px_-18px_rgba(99,102,241,0.15)] ring-1 ring-violet-100/80 lg:col-span-2 lg:flex"
          aria-label="More software options"
        >
          <div className="grid items-center gap-6 lg:grid-cols-2">
            <div>
              <p className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-violet-600">FILL THE GAPS</p>
              <h3 className="mt-2 font-[family-name:var(--font-poppins)] text-xl font-extrabold leading-snug text-slate-900 sm:text-2xl">
                Not seeing the exact mix? We combine modules or build from zero.
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Same engineering team behind this catalog—<strong className="text-slate-800">web dashboards, APIs, Flutter apps,</strong> and{" "}
                <strong className="text-slate-800">native iOS/Android</strong> when you need them.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                <Link
                  href={withTrailingSlash("/contact?service=softwares")}
                  className="inline-flex items-center gap-2 rounded-full bg-yellow-400 px-5 py-2.5 text-xs font-extrabold text-slate-900 shadow-md transition hover:bg-yellow-300"
                >
                  Request a bundle quote
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
                <button
                  type="button"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-2.5 text-xs font-extrabold text-slate-800 transition hover:border-violet-200"
                  onClick={onViewAll}
                >
                  View all products
                </button>
              </div>
            </div>
            <GapFillIllustration />
          </div>
        </aside>
      ) : null}

      {rem3 === 2 ? (
        <aside className="hidden lg:block lg:col-span-1" aria-label="Software catalog summary">
          {narrowCard}
        </aside>
      ) : null}

      {rem2 === 1 ? (
        <aside className="col-span-1 hidden sm:block lg:hidden" aria-label="Software catalog summary">
          {narrowCard}
        </aside>
      ) : null}
    </>
  );
}

function fadeUp(reduce: boolean | null) {
  if (reduce) return {};
  return {
    initial: { opacity: 0, y: 18 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-60px" },
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] as const },
  };
}

const FILTER_KEYS: Array<"all" | SoftwareCategory> = [
  "all",
  "workforce",
  "commerce",
  "verticals",
  "platforms",
];

export default function SoftwaresClient() {
  const reduceMotion = useReducedMotion();
  const animateFloat = !reduceMotion;
  const [catalogFilter, setCatalogFilter] = useState<"all" | SoftwareCategory>("all");

  const filteredProducts = useMemo(() => {
    if (catalogFilter === "all") return SOFTWARE_PRODUCTS;
    return SOFTWARE_PRODUCTS.filter((p) => p.category === catalogFilter);
  }, [catalogFilter]);

  return (
    <div className="bg-white text-slate-900">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-slate-200/80 bg-slate-950 text-white">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(900px_circle_at_15%_-20%,rgba(250,204,21,0.22),transparent_55%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(800px_circle_at_90%_120%,rgba(99,102,241,0.2),transparent_50%)]" />
        <div
          className="pointer-events-none absolute inset-0 opacity-30 [background-image:radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.08)_1px,transparent_0)] [background-size:24px_24px]"
          aria-hidden
        />

        <Container className="relative grid gap-12 pb-16 pt-24 sm:pt-28 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:pb-20 lg:pt-32">
          <div>
            <motion.p
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-[11px] font-extrabold tracking-[0.22em] text-amber-200/95"
              {...fadeUp(reduceMotion)}
            >
              <Sparkles className="h-3.5 w-3.5 text-yellow-300" />
              LICENSE · DEMO · CUSTOM BUILD
            </motion.p>
            <motion.h1
              className="mt-6 font-[family-name:var(--font-poppins)] text-4xl font-extrabold leading-[1.12] tracking-tight sm:text-5xl lg:text-[3.15rem]"
              {...fadeUp(reduceMotion)}
            >
              Business{" "}
              <span className="bg-gradient-to-r from-yellow-300 via-amber-200 to-yellow-400 bg-clip-text text-transparent">
                software you can buy
              </span>{" "}
              — and platforms we engineer for you
            </motion.h1>
            <motion.p
              className="mt-5 max-w-xl text-base leading-relaxed text-white/78 sm:text-lg"
              {...fadeUp(reduceMotion)}
            >
              Mugnee IT Solutions ships ready-made systems (visitor desk, HR, POS, schools, hotels, SaaS, and more) while
              leading custom web and mobile delivery across Bangladesh and worldwide using{" "}
              <strong className="font-semibold text-white/95">MERN, Next.js, Python, Django, Flutter,</strong> and{" "}
              <strong className="font-semibold text-white/95">native Swift & Kotlin</strong> where it matters.
            </motion.p>
            <motion.div className="mt-8 flex flex-wrap gap-3" {...fadeUp(reduceMotion)}>
              <Link
                href={withTrailingSlash("/contact?service=softwares")}
                className="inline-flex items-center gap-2 rounded-full bg-yellow-400 px-6 py-3.5 text-sm font-extrabold text-slate-900 shadow-lg shadow-yellow-500/25 transition hover:bg-yellow-300"
              >
                Request demo & pricing
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href={withTrailingSlash("/services/software-solution")}
                className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-6 py-3.5 text-sm font-bold text-white backdrop-blur transition hover:bg-white/10"
              >
                Custom software services
              </Link>
            </motion.div>
            <motion.div
              className="mt-10 flex flex-wrap gap-4 text-xs font-semibold text-white/65"
              {...fadeUp(reduceMotion)}
            >
              <span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1.5 ring-1 ring-white/10">
                <Globe2 className="h-3.5 w-3.5 text-sky-300" />
                BD + global delivery
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1.5 ring-1 ring-white/10">
                <Zap className="h-3.5 w-3.5 text-amber-300" />
                Latest stable stacks
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1.5 ring-1 ring-white/10">
                <Shield className="h-3.5 w-3.5 text-emerald-300" />
                ISO-minded process
              </span>
            </motion.div>
          </div>
          <motion.div className="relative flex justify-center lg:justify-end" {...fadeUp(reduceMotion)}>
            <div className="relative w-full max-w-md">
              <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-yellow-400/25 via-violet-500/15 to-transparent blur-2xl" />
              <HeroIllustration animateFloat={animateFloat} />
            </div>
          </motion.div>
        </Container>
      </section>

      {/* Intro SEO block */}
      <section className="border-b border-slate-100 bg-slate-50/80">
        <Container className="py-14 sm:py-16">
          <motion.div
            className="mx-auto w-full max-w-6xl text-center xl:max-w-7xl"
            {...fadeUp(reduceMotion)}
          >
            <h2 className="font-[family-name:var(--font-poppins)] text-2xl font-extrabold text-slate-900 sm:text-3xl">
              Pioneering practical software — from Dhaka to global teams
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base sm:leading-8">
              Organizations choose Mugnee when they need either{" "}
              <strong className="font-semibold text-slate-800">proven product lines</strong> they can deploy quickly or a{" "}
              <strong className="font-semibold text-slate-800">greenfield build</strong> mapped to internal SOPs. We
              standardize on modern JavaScript and Python ecosystems, cloud-friendly hosting, and security-aware
              defaults—so your investment ages well whether you are buying a license or commissioning a full product.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Product grid */}
      <section id="catalog" className="relative scroll-mt-28 overflow-hidden py-16 sm:py-20">
        <CatalogBackdrop />
        <Container className="relative">
          <motion.div className="w-full max-w-6xl xl:max-w-7xl" {...fadeUp(reduceMotion)}>
            <p className="text-xs font-extrabold tracking-[0.28em] text-violet-600">PRODUCT CATALOG</p>
            <h2 className="mt-3 font-[family-name:var(--font-poppins)] text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Software lines we keep ready — and extend for you
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base sm:leading-8">
              Each item below can be sold as a licensed deployment. Tell us your user count, locations, and integrations;
              we tailor modules, branding, and training. Stacks we use across products include{" "}
              <strong className="font-semibold text-slate-800">MERN, Next.js, Python, Django, Flutter,</strong> and{" "}
              <strong className="font-semibold text-slate-800">native Swift & Kotlin</strong>. Need something unique? Our{" "}
              <Link href={withTrailingSlash("/services/mobile-app-development")} className="font-semibold text-violet-700 underline-offset-2 hover:underline">
                mobile
              </Link>{" "}
              and{" "}
              <Link href={withTrailingSlash("/services/mern-stack")} className="font-semibold text-violet-700 underline-offset-2 hover:underline">
                web engineering
              </Link>{" "}
              teams build from the same foundations.
            </p>
          </motion.div>

          <motion.div className="mt-10" {...fadeUp(reduceMotion)}>
            <CatalogRibbon />
          </motion.div>

          <motion.div
            className="flex flex-wrap gap-2"
            role="tablist"
            aria-label="Filter software by category"
            {...fadeUp(reduceMotion)}
          >
            {FILTER_KEYS.map((key) => {
              const label =
                key === "all" ? "All products" : CATEGORY_LABELS[key as SoftwareCategory];
              const active = catalogFilter === key;
              return (
                <button
                  key={key}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setCatalogFilter(key)}
                  className={[
                    "inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-xs font-extrabold transition",
                    active
                      ? "bg-slate-900 text-white shadow-lg shadow-slate-900/20 ring-2 ring-yellow-400/90"
                      : "border border-slate-200/90 bg-white/90 text-slate-700 shadow-sm hover:border-violet-200 hover:text-violet-800",
                  ].join(" ")}
                >
                  {key === "all" ? <LayoutGrid className="h-3.5 w-3.5" /> : null}
                  {label}
                </button>
              );
            })}
          </motion.div>

          <p className="mt-4 text-xs font-semibold text-slate-500">
            Showing <span className="text-slate-800">{filteredProducts.length}</span> of {SOFTWARE_PRODUCTS.length}{" "}
            lines
          </p>

          <motion.div
            key={catalogFilter}
            className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
            initial={reduceMotion ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.35 }}
          >
            {filteredProducts.map((p) => {
              const Icon = iconBySlug[p.slug] ?? Layers;
              return (
                <motion.article
                  key={p.slug}
                  id={p.slug}
                  layout={!reduceMotion}
                  className="group relative flex h-full flex-col overflow-hidden rounded-[1.35rem] border border-slate-200/90 bg-white/95 p-6 shadow-[0_16px_40px_-18px_rgba(15,23,42,0.12)] ring-1 ring-slate-900/[0.03] backdrop-blur-sm transition hover:-translate-y-0.5 hover:border-violet-200 hover:shadow-[0_22px_50px_-16px_rgba(99,102,241,0.2)]"
                >
                  <div
                    className="pointer-events-none absolute -right-12 -top-12 h-28 w-28 rounded-full bg-gradient-to-br from-violet-400/25 to-amber-300/15 blur-2xl transition group-hover:opacity-100"
                    aria-hidden
                  />
                  <div className="relative flex items-start justify-between gap-3">
                    <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-violet-600 to-indigo-600 text-white shadow-lg shadow-violet-500/25 ring-2 ring-white/20">
                      <Icon className="h-5 w-5" strokeWidth={2.2} />
                    </div>
                    <BadgeCheck className="h-5 w-5 shrink-0 text-emerald-500 opacity-0 transition group-hover:opacity-100" />
                  </div>
                  <p className="relative mt-3 text-[10px] font-extrabold uppercase tracking-wider text-violet-600/90">
                    {CATEGORY_LABELS[p.category]}
                  </p>
                  <h3 className="relative mt-1 text-lg font-extrabold text-slate-900">{p.name}</h3>
                  <p className="relative mt-2 flex-1 text-sm leading-relaxed text-slate-600">{p.short}</p>
                  <div className="relative mt-3 flex flex-wrap gap-1.5">
                    {p.stackTags.map((t) => (
                      <span
                        key={t}
                        className="rounded-md border border-slate-200/80 bg-slate-50 px-2 py-0.5 text-[10px] font-bold text-slate-600"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <ul className="relative mt-4 space-y-1.5 text-xs font-semibold text-slate-500">
                    {p.highlights.map((h) => (
                      <li key={h} className="flex items-center gap-2">
                        <span className="h-1 w-1 shrink-0 rounded-full bg-amber-400" />
                        {h}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={withTrailingSlash(`/contact?service=softwares`)}
                    className="relative mt-5 inline-flex items-center gap-1 text-sm font-extrabold text-violet-700 transition group-hover:gap-2"
                  >
                    Ask about this product
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </motion.article>
              );
            })}
            <CatalogGridGaps
              count={filteredProducts.length}
              onViewAll={() => {
                setCatalogFilter("all");
                requestAnimationFrame(() =>
                  document.getElementById("catalog")?.scrollIntoView({ behavior: "smooth", block: "start" })
                );
              }}
            />
          </motion.div>
        </Container>
      </section>

      {/* Tech */}
      <section className="border-y border-slate-200/80 bg-slate-950 py-16 text-white">
        <Container>
          <motion.div className="mx-auto w-full max-w-7xl text-center" {...fadeUp(reduceMotion)}>
            <p className="text-[11px] font-extrabold tracking-[0.28em] text-amber-300/90">TECHNOLOGY</p>
            <h2 className="mt-3 font-[family-name:var(--font-poppins)] text-3xl font-extrabold sm:text-4xl">
              Core technologies we build with
            </h2>
            <p className="mx-auto mt-5 max-w-7xl text-sm leading-relaxed text-white/75 sm:text-base sm:leading-8 lg:text-[1.05rem] lg:leading-9">
              We ship products on <strong className="font-semibold text-white/95">MERN</strong> and{" "}
              <strong className="font-semibold text-white/95">Next.js</strong> with{" "}
              <strong className="font-semibold text-white/95">TypeScript</strong>; backends in{" "}
              <strong className="font-semibold text-white/95">Python</strong> &{" "}
              <strong className="font-semibold text-white/95">Django</strong>; data and realtime with{" "}
              <strong className="font-semibold text-white/95">MongoDB</strong>,{" "}
              <strong className="font-semibold text-white/95">PostgreSQL</strong>,{" "}
              <strong className="font-semibold text-white/95">Supabase</strong>, and{" "}
              <strong className="font-semibold text-white/95">Firebase</strong>; mobile with{" "}
              <strong className="font-semibold text-white/95">Flutter</strong> plus native{" "}
              <strong className="font-semibold text-white/95">Swift</strong> &{" "}
              <strong className="font-semibold text-white/95">Kotlin</strong>; APIs with{" "}
              <strong className="font-semibold text-white/95">GraphQL</strong> / REST; UI with{" "}
              <strong className="font-semibold text-white/95">Tailwind CSS</strong>; and cloud delivery with{" "}
              <strong className="font-semibold text-white/95">Docker</strong>,{" "}
              <strong className="font-semibold text-white/95">AWS</strong>,{" "}
              <strong className="font-semibold text-white/95">Google Cloud</strong>,{" "}
              <strong className="font-semibold text-white/95">Vercel</strong>,{" "}
              <strong className="font-semibold text-white/95">Netlify</strong>, and{" "}
              <strong className="font-semibold text-white/95">GitHub Actions</strong>.
            </p>
          </motion.div>
          <motion.div
            className="mx-auto mt-12 flex w-full max-w-7xl flex-wrap justify-center gap-2.5 sm:gap-3"
            {...fadeUp(reduceMotion)}
          >
            {TECH_STACK.map((t) => (
              <span
                key={t.name}
                className="inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/[0.07] px-4 py-2.5 text-xs font-bold text-white/95 shadow-sm shadow-black/20 backdrop-blur transition hover:border-amber-300/35 hover:bg-white/10"
              >
                <TechStackIcon
                  label={t.name}
                  slug={t.iconSlug}
                  hex={t.iconHex}
                  iconUrl={t.iconUrl}
                />
                <span>{t.name}</span>
                <span className="text-[10px] font-semibold uppercase tracking-wider text-white/40">{t.group}</span>
              </span>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* Process */}
      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <motion.div {...fadeUp(reduceMotion)}>
              <p className="text-xs font-extrabold tracking-[0.28em] text-violet-600">HOW BUYING WORKS</p>
              <h2 className="mt-3 font-[family-name:var(--font-poppins)] text-3xl font-extrabold text-slate-900 sm:text-4xl">
                From first call to trained users
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
                Whether you are licensing a packaged module or scoping a custom web/mobile program, we keep sales and
                engineering aligned—so proposals reflect reality, not slide-deck fiction.
              </p>
              <ul className="mt-8 space-y-4">
                {[
                  { t: "Discovery & demo", d: "We validate roles, workflows, and integrations you cannot compromise on." },
                  { t: "Proposal & pilot", d: "Fixed license scope or sprint-based build—with clear acceptance tests." },
                  { t: "Deploy & train", d: "Staging, go-live checklist, admin handover, and user training materials." },
                  { t: "Support & roadmap", d: "SLA options, backups, and a backlog for the next growth phase." },
                ].map((s, i) => (
                  <li key={s.t} className="flex gap-4">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-amber-400 text-sm font-black text-slate-900">
                      {i + 1}
                    </span>
                    <div>
                      <p className="font-extrabold text-slate-900">{s.t}</p>
                      <p className="mt-1 text-sm text-slate-600">{s.d}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              className="relative overflow-hidden rounded-[1.75rem] border border-slate-200 bg-gradient-to-br from-violet-50 via-white to-amber-50 p-8 shadow-xl shadow-violet-500/10"
              {...fadeUp(reduceMotion)}
            >
              <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-violet-400/20 blur-3xl" />
              <Rocket className="h-10 w-10 text-violet-600" />
              <p className="mt-4 text-lg font-extrabold text-slate-900">Custom web & mobile — same team</p>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                When off-the-shelf only gets you 70% there, we extend with bespoke portals, APIs, and companion apps—so
                leadership gets one vendor accountable for the full stack.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                <Link
                  href={withTrailingSlash("/services/mobile-app-development")}
                  className="rounded-full bg-slate-900 px-4 py-2 text-xs font-extrabold text-white transition hover:bg-slate-800"
                >
                  Mobile app studio
                </Link>
                <Link
                  href={withTrailingSlash("/services/mern-stack")}
                  className="rounded-full border border-slate-300 bg-white px-4 py-2 text-xs font-extrabold text-slate-800 transition hover:border-violet-300"
                >
                  MERN engineering
                </Link>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="border-t border-slate-200 bg-slate-50 py-16">
        <Container>
          <motion.div className="mx-auto w-full max-w-5xl text-center xl:max-w-6xl" {...fadeUp(reduceMotion)}>
            <p className="text-xs font-extrabold tracking-[0.28em] text-violet-600">FAQ</p>
            <h2 className="mt-3 font-[family-name:var(--font-poppins)] text-3xl font-extrabold text-slate-900">
              Common questions about our software sales
            </h2>
          </motion.div>
          <div className="mx-auto mt-10 w-full max-w-5xl space-y-3 xl:max-w-6xl">
            {FAQ_ITEMS.map((item) => (
              <details
                key={item.q}
                className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm open:shadow-md"
              >
                <summary className="cursor-pointer list-none font-extrabold text-slate-900 [&::-webkit-details-marker]:hidden">
                  <span className="flex items-center justify-between gap-3">
                    {item.q}
                    <span className="text-violet-600 transition group-open:rotate-45">+</span>
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{item.a}</p>
              </details>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="pb-20">
        <Container>
          <motion.div
            className="relative overflow-hidden rounded-[2rem] bg-gradient-to-r from-slate-900 via-violet-950 to-slate-900 px-8 py-12 text-center text-white shadow-2xl sm:px-12"
            {...fadeUp(reduceMotion)}
          >
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_0%,rgba(250,204,21,0.18),transparent_45%)]" />
            <h2 className="relative font-[family-name:var(--font-poppins)] text-2xl font-extrabold sm:text-3xl">
              Ready to shortlist software for your team?
            </h2>
            <p className="relative mx-auto mt-3 max-w-3xl text-sm leading-relaxed text-white/75 sm:text-base sm:leading-8">
              Tell us which product line fits—visitor desk, HR, POS, school, hotel, SaaS, or a net-new web/mobile build.
              We will respond with demo slots and a clear commercial outline.
            </p>
            <div className="relative mt-8 flex flex-wrap justify-center gap-3">
              <Link
                href={withTrailingSlash("/contact?service=softwares")}
                className="inline-flex items-center gap-2 rounded-full bg-yellow-400 px-7 py-3.5 text-sm font-extrabold text-slate-900 transition hover:bg-yellow-300"
              >
                Contact sales
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href={withTrailingSlash("/schedule-consultation")}
                className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-7 py-3.5 text-sm font-bold text-white backdrop-blur transition hover:bg-white/10"
              >
                Book consultation
              </Link>
            </div>
          </motion.div>
        </Container>
      </section>
    </div>
  );
}
