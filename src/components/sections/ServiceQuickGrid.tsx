"use client";

import Link from "next/link";
import {
  ArrowRight,
  Blocks,
  BriefcaseBusiness,
  Brush,
  Code2,
  Globe2,
  Mail,
  Search,
  ShoppingCart,
  Smartphone,
  Sparkles,
  Video,
  Workflow,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { withTrailingSlash } from "@/lib/utils";

type QuickService = {
  title: string;
  href: string;
  icon: LucideIcon;
  accent: string;
  blurb: string;
};

const quickServices: QuickService[] = [
  {
    title: "Next.js",
    href: "/services/nextjs",
    icon: Code2,
    accent: "from-sky-500/15 to-cyan-500/5 text-sky-700",
    blurb: "SEO-ready websites",
  },
  {
    title: "MERN Stack",
    href: "/services/mern-stack",
    icon: Workflow,
    accent: "from-violet-500/15 to-fuchsia-500/5 text-violet-700",
    blurb: "Custom web apps",
  },
  {
    title: "Frontend",
    href: "/services/frontend",
    icon: Globe2,
    accent: "from-blue-500/15 to-indigo-500/5 text-blue-700",
    blurb: "React UI systems",
  },
  {
    title: "Mobile apps",
    href: "/services/mobile-app-development",
    icon: Smartphone,
    accent: "from-violet-500/15 to-fuchsia-500/5 text-violet-700",
    blurb: "iOS & Android builds",
  },
  {
    title: "WordPress",
    href: "/services/wordpress",
    icon: Blocks,
    accent: "from-slate-700/15 to-slate-500/5 text-slate-700",
    blurb: "Business websites",
  },
  {
    title: "Shopify",
    href: "/services/shopify",
    icon: ShoppingCart,
    accent: "from-emerald-500/15 to-green-500/5 text-emerald-700",
    blurb: "Store growth setup",
  },
  {
    title: "Wix",
    href: "/services/wix",
    icon: Sparkles,
    accent: "from-amber-500/15 to-yellow-500/5 text-amber-700",
    blurb: "Premium small sites",
  },
  {
    title: "SEO",
    href: "/services/seo",
    icon: Search,
    accent: "from-rose-500/15 to-orange-500/5 text-rose-700",
    blurb: "Technical + content",
  },
  {
    title: "Video Editing",
    href: "/services/video-editing",
    icon: Video,
    accent: "from-purple-500/15 to-indigo-500/5 text-purple-700",
    blurb: "Shorts, reels, YouTube",
  },
  {
    title: "Graphic Design",
    href: "/services/graphic-design",
    icon: Brush,
    accent: "from-orange-500/15 to-amber-500/5 text-orange-700",
    blurb: "Brand visuals",
  },
  {
    title: "Software",
    href: "/services/software-solution",
    icon: BriefcaseBusiness,
    accent: "from-cyan-500/15 to-sky-500/5 text-cyan-700",
    blurb: "Internal systems",
  },
  {
    title: "Webmail",
    href: "/services/webmail",
    icon: Mail,
    accent: "from-teal-500/15 to-emerald-500/5 text-teal-700",
    blurb: "Email setup & support",
  },
];

export default function ServiceQuickGrid() {
  return (
    <section className="relative bg-white pt-10 pb-6 sm:pt-14 sm:pb-8">
      <div className="mx-auto max-w-7xl px-4">
        <div className="overflow-hidden rounded-[2rem] bg-white p-4 shadow-[0_24px_70px_rgba(15,23,42,0.08)] sm:p-5">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-extrabold tracking-[0.22em] text-slate-500">
                EXPLORE SERVICES
              </p>
              <h2 className="mt-2 text-2xl font-extrabold text-slate-900 sm:text-3xl">
                Find the right service for your business
              </h2>
              <p className="mt-2 max-w-2xl text-sm text-slate-600">
                Web, software, SEO, creative, outreach, and support services in one place.
              </p>
            </div>

            <Link
              prefetch={false}
              href={withTrailingSlash("/services")}
              className="inline-flex items-center gap-2 text-sm font-extrabold text-slate-900 transition hover:text-sky-700"
            >
              View all services
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {quickServices.map((service) => {
              const Icon = service.icon;

              return (
                <Link
                  key={service.href}
                  prefetch={false}
                  href={withTrailingSlash(service.href)}
                  className="group rounded-[1.4rem] bg-white p-4 shadow-[0_2px_8px_rgba(15,23,42,0.06),0_10px_24px_rgba(15,23,42,0.05)] transition hover:-translate-y-1 hover:shadow-[0_10px_22px_rgba(15,23,42,0.08),0_18px_40px_rgba(15,23,42,0.08)]"
                >
                  <div
                    className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${service.accent} shadow-[0_6px_18px_rgba(255,255,255,0.65)_inset,0_6px_16px_rgba(15,23,42,0.06)]`}
                  >
                    <Icon className="h-5 w-5" />
                  </div>

                  <h3 className="mt-4 text-sm font-extrabold text-slate-900 sm:text-[15px]">
                    {service.title}
                  </h3>
                  <p className="mt-1 text-xs leading-5 text-slate-600">
                    {service.blurb}
                  </p>

                  <div className="mt-3 inline-flex items-center gap-1 text-xs font-bold text-slate-500 transition group-hover:text-sky-700">
                    Learn more
                    <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-1" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
