"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  Code2,
  Globe2,
  ShoppingCart,
  Search,
  Users,
  ArrowRight,
  Sparkles,
} from "lucide-react";

type Service = {
  title: string;
  desc: string;
  href: string;
  icon: any;
  tags: string[];
};

export default function ServicesSection() {
  const services: Service[] = [
    {
      title: "MERN / Next.js Web Development",
      desc: "Fast, scalable websites & web apps built for performance and clean UI.",
      href: "/services/mern-stack",
      icon: Code2,
      tags: ["Next.js", "MERN", "UI/UX", "Performance"],
    },
    {
      title: "Frontend (React) Development",
      desc: "Modern UI, component systems, dashboards and conversion-first pages.",
      href: "/services/frontend",
      icon: Globe2,
      tags: ["React", "Tailwind", "Animations", "Landing Pages"],
    },
    {
      title: "WordPress Website Development",
      desc: "Business websites with speed optimization, security and easy editing.",
      href: "/services/wordpress",
      icon: Globe2,
      tags: ["Elementor", "Speed", "Security", "SEO-ready"],
    },
    {
      title: "Shopify / Wix Store Setup",
      desc: "Store design, product upload, checkout optimization & essential apps.",
      href: "/services/shopify",
      icon: ShoppingCart,
      tags: ["E-commerce", "Theme", "Checkout", "Apps"],
    },
    {
      title: "SEO Services (Technical + Content)",
      desc: "Improve visibility with technical fixes, on-page SEO and content plan.",
      href: "/services/seo",
      icon: Search,
      tags: ["Technical", "On-page", "Content", "Reporting"],
    },
    {
      title: "Webmail / Setup & Support",
      desc: "Domain/DNS configuration, professional email setup, MX/SPF/DKIM/DMARC, migration.",
      href: "/services/webmail",
      icon: Users,
      tags: ["Lead Gen", "Setter", "Reels", "YouTube"],
    },
  ];

  return (
    <section className="relative bg-white">
      <div className="pointer-events-none absolute inset-0">
        {/* ✅ REMOVED: left yellow blob */}
        <div className="absolute -right-24 top-28 h-[420px] w-[420px] rounded-full bg-blue-50 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 py-14 sm:py-16">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-extrabold tracking-[0.25em] text-slate-500">
              WHAT WE DO
            </p>

            <h2 className="mt-2 text-3xl font-extrabold text-slate-900 sm:text-4xl">
              Services built for growth.
              <span className="ml-2 inline-flex items-center gap-1 rounded-full bg-yellow-100 px-3 py-1 text-xs font-extrabold text-yellow-700 align-middle">
                <Sparkles className="h-3.5 w-3.5" />
                Premium
              </span>
            </h2>

            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">
              Choose a service and see details. Every service page is SEO-ready
              with clear deliverables, timeline and process.
            </p>
          </div>

          <a
            href="/services"
            className="group relative inline-flex w-fit items-center gap-2 overflow-hidden rounded-full bg-yellow-400 px-6 py-3 text-sm font-extrabold text-slate-900 shadow-[0_14px_40px_rgba(250,204,21,0.22)] transition hover:-translate-y-[1px] hover:bg-yellow-500"
          >
            <span className="pointer-events-none absolute -left-10 top-0 h-full w-10 rotate-12 bg-white/35 blur-sm transition-all duration-500 group-hover:left-[120%]" />
            View All Services
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
          </a>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <ServiceCard key={s.href} s={s} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ s }: { s: Service }) {
  const Icon = s.icon;

  return (
    <motion.a
      href={s.href}
      className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
      initial="rest"
      whileHover="hover"
      animate="rest"
    >
      <BorderDrawBlueHalfHover />

      <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-yellow-200 blur-2xl opacity-0 transition-opacity group-hover:opacity-100" />

      <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-900 text-white">
        <Icon className="h-6 w-6" />
      </div>

      <h3 className="mt-5 text-lg font-extrabold text-slate-900">{s.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-600">{s.desc}</p>

      <div className="mt-auto" />

      <div className="mt-6 inline-flex items-center gap-2 text-sm font-extrabold text-yellow-700">
        <span className="relative">
          Learn more
          <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-yellow-400 transition-all duration-300 group-hover:w-full" />
        </span>
        <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
      </div>
    </motion.a>
  );
}

/* ✅ Hover-only border (left half + right half meet in the middle) */
function BorderDrawBlueHalfHover() {
  const reduce = useReducedMotion();
  const dur = reduce ? 0 : 0.65;

  return (
    <div className="pointer-events-none absolute inset-0 z-10 rounded-3xl">
      <motion.div
        className="absolute inset-0 rounded-3xl"
        variants={{
          rest: { opacity: 0 },
          hover: { opacity: 1 },
        }}
        transition={{ duration: reduce ? 0 : 0.2, ease: "easeOut" }}
        style={{
          boxShadow:
            "0 0 0 1px rgba(59,130,246,0.18), 0 0 14px rgba(59,130,246,0.10)",
        }}
      />

      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="blueStrokeHalfHover" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="rgba(59,130,246,0.95)" />
            <stop offset="60%" stopColor="rgba(56,189,248,0.92)" />
            <stop offset="100%" stopColor="rgba(37,99,235,0.95)" />
          </linearGradient>
        </defs>

        <motion.path
          d="M 50 1.2 H 8
             Q 1.2 1.2 1.2 8
             V 92
             Q 1.2 98.8 8 98.8
             H 50"
          fill="none"
          stroke="url(#blueStrokeHalfHover)"
          strokeWidth="0.9"
          strokeLinecap="round"
          strokeLinejoin="round"
          pathLength={1}
          variants={{
            rest: { pathLength: 0, opacity: 0 },
            hover: { pathLength: 1, opacity: 1 },
          }}
          transition={{ duration: dur, ease: "easeInOut" }}
        />

        <motion.path
          d="M 50 1.2 H 92
             Q 98.8 1.2 98.8 8
             V 92
             Q 98.8 98.8 92 98.8
             H 50"
          fill="none"
          stroke="url(#blueStrokeHalfHover)"
          strokeWidth="0.9"
          strokeLinecap="round"
          strokeLinejoin="round"
          pathLength={1}
          variants={{
            rest: { pathLength: 0, opacity: 0 },
            hover: { pathLength: 1, opacity: 1 },
          }}
          transition={{ duration: dur, ease: "easeInOut" }}
        />
      </svg>
    </div>
  );
}
