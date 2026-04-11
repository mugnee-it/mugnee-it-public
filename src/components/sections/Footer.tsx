"use client";

import Container from "@/components/ui/Container";
import { withTrailingSlash } from "@/lib/utils";
import Link from "next/link";
import {
  Mail,
  MapPin,
  Phone,
  Instagram,
  Dribbble,
  Github,
  Truck,
  Gauge,
  LifeBuoy,
  ShieldCheck,
} from "lucide-react";

const SITE = {
  name: "Mugnee IT",
  tagline:
    "We ship fast, findable digital products—web, apps, and automation—with clear scope, disciplined delivery, and support that doesn’t end at launch.",
  emailLocal: "mugnee.it",
  emailDomain: "gmail.com",
  phone: "+880 1958-645415",
  address: "3rd Floor, 36-37 Umesh Datta Road, Bakshibazar, Dhaka - 1211, Bangladesh",
  coverage: "Serving clients in Bangladesh and worldwide.",
  website: "https://mugneeit.com",
};

const links = [
  {
    title: "Services",
    items: [
      { label: "Next.js Development", href: "/services/nextjs" },
      { label: "MERN Stack", href: "/services/mern-stack" },
      { label: "Mobile App Development", href: "/services/mobile-app-development" },
      { label: "SEO Services", href: "/services/seo" },
      { label: "Webmail Setup", href: "/services/webmail" },
      { label: "E-commerce", href: "/services/shopify" },
      { label: "Video Editing", href: "/services/video-editing" },
      { label: "Graphic Design", href: "/services/graphic-design" },
    ],
  },
  {
    title: "Company",
    items: [
      { label: "About", href: "/about" },
      { label: "Portfolio", href: "/projects" },
      { label: "Softwares", href: "/softwares" },
      { label: "Services", href: "/services" },
      { label: "Free consultation", href: "/schedule-consultation" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Resources",
    items: [
      { label: "Blog", href: "/blog" },
      { label: "Case Studies", href: "/projects" },
      { label: "SEO Checklist", href: "/services/seo/seo-audit-service" },
      { label: "Support", href: "/contact" },
      { label: "Privacy Policy", href: "/privacy" },
    ],
  },
];

const socials = [
  { label: "Instagram", href: "#", icon: Instagram },
  { label: "Pinterest", href: "#", icon: PinterestIcon },
  { label: "Behance", href: "#", icon: BehanceIcon },
  { label: "Dribbble", href: "#", icon: Dribbble },
  { label: "GitHub", href: "#", icon: Github },
];

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={withTrailingSlash(href)}
      prefetch={false}
      className="group inline-flex items-center gap-2 text-sm text-slate-300 transition hover:text-white"
    >
      <span className="h-1.5 w-1.5 rounded-full bg-slate-500 transition group-hover:bg-blue-400" />
      {children}
    </Link>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-slate-950">
      {/* background */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(900px_circle_at_20%_-10%,rgba(37,99,235,0.25),transparent_55%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(900px_circle_at_80%_110%,rgba(99,102,241,0.18),transparent_55%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-20 [background-image:radial-gradient(#60a5fa_1px,transparent_1px)] [background-size:22px_22px]" />

      <Container className="relative">
        {/* middle: brand + columns */}
        <div className="grid gap-10 py-14 lg:grid-cols-12">
          {/* brand */}
          <div className="lg:col-span-4">
            <Link prefetch={false} href="/" className="inline-flex items-center">
              <img
                src="/MugneeIT.svg"
                alt="Mugnee IT Solutions"
                width={180}
                height={52}
                className="h-auto w-[180px]"
              />
            </Link>

            <p className="mt-4 max-w-sm text-sm leading-8 text-slate-200">
              {SITE.tagline}
            </p>

            {/* contact */}
            <div className="mt-6 space-y-3">
              <a
                href={`mailto:${SITE.emailLocal}%40${SITE.emailDomain}`}
                className="flex items-center gap-3 text-sm text-slate-300 transition hover:text-white"
              >
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-white/5 ring-1 ring-white/10">
                  <Mail className="h-4 w-4" />
                </span>
                {SITE.emailLocal} at {SITE.emailDomain}
              </a>

              <a
                href={`tel:${SITE.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-3 text-sm text-slate-300 transition hover:text-white"
              >
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-white/5 ring-1 ring-white/10">
                  <Phone className="h-4 w-4" />
                </span>
                {SITE.phone}
              </a>

              <div className="flex items-center gap-3 text-sm text-slate-300">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-white/5 ring-1 ring-white/10">
                  <MapPin className="h-4 w-4" />
                </span>
                {SITE.address}
              </div>
              <div className="pl-12 text-xs font-semibold text-slate-400">
                {SITE.coverage}
              </div>
            </div>

            {/* socials (✅ ONLY CHANGE: brand colors) */}
            <div className="mt-8 flex flex-wrap gap-2">
              {socials.map((s) => {
                const Icon = s.icon;

                const brand =
                  s.label === "Instagram"
                    ? "text-[#E4405F]"
                    : s.label === "Pinterest"
                    ? "text-[#E60023]"
                    : s.label === "Behance"
                    ? "text-[#1769FF]"
                    : s.label === "Dribbble"
                    ? "text-[#EA4C89]"
                    : s.label === "GitHub"
                    ? "text-white"
                    : "text-slate-200";

                return (
                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    className="group inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5 ring-1 ring-white/10 transition hover:bg-white/10"
                  >
                    <Icon
                      className={[
                        "h-5 w-5 transition",
                        brand,
                        "group-hover:brightness-110",
                      ].join(" ")}
                    />
                  </a>
                );
              })}
            </div>
          </div>

          {/* link columns */}
          <div className="lg:col-span-8">
            <div className="grid gap-10 sm:grid-cols-3">
              {links.map((col) => (
                <div key={col.title}>
                  <p className="text-base font-extrabold text-white">
                    {col.title}
                  </p>
                  <span className="mt-2 block h-[2px] w-14 rounded-full bg-gradient-to-r from-yellow-300/80 to-sky-300/80" />
                  <div className="mt-4 flex flex-col gap-3">
                    {col.items.map((l) => (
                      <FooterLink key={l.href} href={l.href}>
                        {l.label}
                      </FooterLink>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* trust row */}
            <div className="mt-12 grid gap-4 rounded-3xl border border-white/10 bg-white/5 p-6 sm:grid-cols-2 lg:grid-cols-4">
              <div className="text-sm">
                <p className="font-extrabold text-white inline-flex items-center gap-2">
                  <Truck className="h-4 w-4 text-yellow-300" />
                  Fast delivery
                </p>
                <p className="mt-1 text-slate-300">
                  Clear milestones & weekly updates.
                </p>
              </div>
              <div className="text-sm">
                <p className="font-extrabold text-white inline-flex items-center gap-2">
                  <Gauge className="h-4 w-4 text-cyan-300" />
                  SEO-ready builds
                </p>
                <p className="mt-1 text-slate-300">
                  Core Web Vitals + technical SEO.
                </p>
              </div>
              <div className="text-sm">
                <p className="font-extrabold text-white inline-flex items-center gap-2">
                  <LifeBuoy className="h-4 w-4 text-emerald-300" />
                  Support
                </p>
                <p className="mt-1 text-slate-300">
                  Setup, migration & ongoing help.
                </p>
              </div>
              <div className="text-sm">
                <p className="font-extrabold text-white inline-flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-emerald-300" />
                  ISO Certified Company
                </p>
                <p className="mt-1 text-slate-300">
                  Verified company status for client trust.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* bottom bar */}
        <div className="flex flex-col gap-4 border-t border-white/10 py-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-slate-400">
            © {year} {SITE.name}. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
            <a
              href={withTrailingSlash("/privacy")}
              className="text-slate-400 transition hover:text-white"
            >
              Privacy
            </a>
            <a
              href={withTrailingSlash("/terms")}
              className="text-slate-400 transition hover:text-white"
            >
              Terms
            </a>
            <a
              href={withTrailingSlash("/contact")}
              className="text-slate-400 transition hover:text-white"
            >
              Contact
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}

function PinterestIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M12 2a10 10 0 0 0-3.64 19.31c-.05-.82-.09-2.08.02-2.98.1-.78.66-4.95.66-4.95s-.17-.35-.17-.87c0-.82.47-1.43 1.06-1.43.5 0 .74.37.74.82 0 .5-.32 1.25-.48 1.95-.14.58.29 1.05.87 1.05 1.04 0 1.84-1.1 1.84-2.69 0-1.4-1-2.38-2.44-2.38-1.66 0-2.64 1.25-2.64 2.54 0 .5.2 1.04.44 1.33a.18.18 0 0 1 .04.18c-.05.2-.16.58-.18.66-.03.1-.1.13-.23.08-.85-.4-1.38-1.66-1.38-2.67 0-2.17 1.58-4.16 4.56-4.16 2.4 0 4.26 1.71 4.26 4 0 2.38-1.5 4.3-3.58 4.3-.7 0-1.36-.36-1.58-.79l-.43 1.64c-.16.61-.58 1.37-.86 1.83A10 10 0 1 0 12 2z" />
    </svg>
  );
}

function BehanceIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M8.4 11.2c1.02-.34 1.6-1.05 1.6-2.07C10 7.34 8.74 6 6.56 6H2v12h4.78c2.26 0 3.66-1.2 3.66-3.2 0-1.56-.8-2.66-2.04-3.1zM4.4 7.9h2.05c.9 0 1.4.4 1.4 1.16 0 .75-.5 1.16-1.4 1.16H4.4V7.9zm2.24 8.18H4.4V12h2.24c1.08 0 1.66.67 1.66 1.98 0 1.3-.58 2.1-1.66 2.1zM14.6 8.2h5.2v1.3h-5.2zM21.7 14.24c0-2.64-1.57-4.24-4.15-4.24-2.58 0-4.35 1.76-4.35 4.24 0 2.54 1.7 4.26 4.32 4.26 2.1 0 3.5-1.01 4.03-2.72H19.4c-.3.63-.9.94-1.78.94-1.2 0-1.95-.62-2.06-1.84h6.1c.02-.2.04-.43.04-.64zm-6.13-.43c.14-1.12.83-1.75 1.93-1.75 1.12 0 1.82.66 1.9 1.75h-3.83z" />
    </svg>
  );
}



