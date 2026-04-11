"use client";

import { useReducedMotion } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import Container from "@/components/ui/Container";
import { withTrailingSlash } from "@/lib/utils";
import {
  ArrowRight,
  Menu,
  X,
  ChevronDown,
  Sparkles,
  Phone,
  Mail,
  Search,
  Facebook,
  Linkedin,
  Youtube,
  MessageCircle,
  CalendarCheck,
} from "lucide-react";

type NavItem = { label: string; href?: string; children?: NavItem[] };
type Group = { title: string; items: NavItem[] };

function HeaderScheduleCtaInner({
  label,
  reduceMotion,
  iconSize = "md",
}: {
  label: string;
  reduceMotion: boolean | null;
  iconSize?: "sm" | "md";
}) {
  const isConsult = label === "Free consultation";
  const Icon = isConsult ? CalendarCheck : MessageCircle;
  const ic = iconSize === "sm" ? "h-3.5 w-3.5" : "h-4 w-4";
  return (
    <span
      key={label}
      className={[
        "inline-flex items-center",
        iconSize === "sm" ? "gap-1.5" : "gap-2",
        reduceMotion ? "" : "animate-[header-cta-label_0.4s_ease-out]",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <Icon className={`${ic} shrink-0 text-slate-900/90`} strokeWidth={2.25} aria-hidden />
      <span>{label}</span>
    </span>
  );
}

export default function Header() {
  const reduceCtaMotion = useReducedMotion();
  const [scrolled, setScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchOpen, setSearchOpen] = useState(false);

  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [servicesMobileOpen, setServicesMobileOpen] = useState(false);
  const [aboutMobileOpen, setAboutMobileOpen] = useState(false);

  // ✅ ONLY for CMS parent click toggle (desktop + mobile)
  const [cmsOpen, setCmsOpen] = useState(false);
  const [cmsMobileOpen, setCmsMobileOpen] = useState(false);

  const closeTimer = useRef<number | null>(null);
  const aboutCloseTimer = useRef<number | null>(null);
  const searchRef = useRef<HTMLDivElement | null>(null);
  const pathname = usePathname();
  const router = useRouter();

  const scheduleCtaLabels = useMemo(
    () => ["Let's Talk", "Free consultation"] as const,
    []
  );
  const [scheduleCtaPhase, setScheduleCtaPhase] = useState(0);
  const scheduleCtaText = scheduleCtaLabels[scheduleCtaPhase % 2];

  useEffect(() => {
    const t = window.setInterval(() => {
      setScheduleCtaPhase((p) => (p + 1) % 2);
    }, 3500);
    return () => window.clearInterval(t);
  }, []);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(href + "/");
  };

  const isItemActive = (it: NavItem) => {
    if (it.href && it.href !== "#") return isActive(it.href);
    if (it.children?.length) return it.children.some((c) => c.href && isActive(c.href));
    return false;
  };

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 40);
    };
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileOpen(false);
        setServicesOpen(false);
        setAboutOpen(false);
        setServicesMobileOpen(false);
        setAboutMobileOpen(false);
        setCmsOpen(false);
        setCmsMobileOpen(false);
        setSearchOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [mobileOpen]);

  useEffect(() => {
    const onDown = (e: MouseEvent) => {
      const target = e.target as Node;
      if (searchRef.current && !searchRef.current.contains(target)) {
        setSearchOpen(false);
      }
    };
    window.addEventListener("mousedown", onDown);
    return () => window.removeEventListener("mousedown", onDown);
  }, []);

  const groups: Group[] = useMemo(
    () => [
      {
        title: "Web Development",
        items: [
          { label: "MERN Stack Development", href: "/services/mern-stack" },
          { label: "Next.js Website Development", href: "/services/nextjs" },
          { label: "Frontend (React) Development", href: "/services/frontend" },
          { label: "Mobile App Development", href: "/services/mobile-app-development" },

          // ✅ ONLY CHANGE: 3 items under one title
          {
            label: "CMS / E-commerce Websites",
            href: "#",
            children: [
              { label: "WordPress Website", href: "/services/wordpress" },
              { label: "Shopify Store", href: "/services/shopify" },
              { label: "Wix Website", href: "/services/wix" },
            ],
          },

          { label: "Web Scraping", href: "/services/web-scraping" },
        ],
      },
      {
        title: "SEO & Marketing",
        items: [
          { label: "SEO Services (Technical + Content)", href: "/services/seo" },
          { label: "LinkedIn Outreach (Setter)", href: "/services/linkedin-setter" },
          { label: "Lead Generation", href: "/services/lead-generation" },
        ],
      },
      {
        title: "Creative",
        items: [
          { label: "Video Editing", href: "/services/video-editing" },
          { label: "Graphic Design", href: "/services/graphic-design" },
        ],
      },
      {
        title: "Business Solutions",
        items: [
          { label: "Custom Software Solution", href: "/services/software-solution" },
          { label: "Webmail / Setup & Support", href: "/services/webmail" },
        ],
      },
    ],
    []
  );

  const searchItems = useMemo(
    () => [
      { label: "Softwares (Products & Licenses)", href: "/softwares" },
      { label: "Next.js Website Development", href: "/services/nextjs" },
      { label: "Next.js Business Website", href: "/services/nextjs/business-website" },
      { label: "Next.js Core Web Vitals", href: "/services/nextjs/core-web-vitals" },
      { label: "Next.js Technical SEO", href: "/services/nextjs/technical-seo" },
      { label: "Next.js Worldwide", href: "/services/nextjs/worldwide" },
      { label: "MERN Stack Development", href: "/services/mern-stack" },
      { label: "MERN API Development", href: "/services/mern-stack/api-development" },
      { label: "MERN Auth RBAC", href: "/services/mern-stack/auth-rbac" },
      { label: "MERN Dashboard Admin", href: "/services/mern-stack/mern-dashboard-admin" },
      { label: "MERN Maintenance", href: "/services/mern-stack/mern-maintenance" },
      { label: "Mobile App Development", href: "/services/mobile-app-development" },
      { label: "Frontend Development", href: "/services/frontend" },
      { label: "Frontend Bangladesh", href: "/services/frontend/bangladesh" },
      { label: "Frontend Performance Optimization", href: "/services/frontend/frontend-performance-optimization" },
      { label: "Landing Page Development", href: "/services/frontend/landing-page-development" },
      { label: "React Frontend Development", href: "/services/frontend/react-frontend-development" },
      { label: "UI UX Implementation", href: "/services/frontend/ui-ux-implementation" },
      { label: "Frontend Worldwide", href: "/services/frontend/worldwide" },
      { label: "WordPress Website", href: "/services/wordpress" },
      { label: "WordPress Speed Optimization", href: "/services/wordpress/speed-optimization" },
      { label: "WooCommerce Development", href: "/services/wordpress/woocommerce-development" },
      { label: "Shopify Store", href: "/services/shopify" },
      { label: "Shopify SEO Service", href: "/services/shopify/shopify-seo-service" },
      { label: "Shopify Speed Optimization", href: "/services/shopify/shopify-speed-optimization" },
      { label: "Shopify Store Setup Service", href: "/services/shopify/shopify-store-setup-service" },
      { label: "Shopify Theme Customization", href: "/services/shopify/shopify-theme-customization" },
      { label: "Shopify Website Development", href: "/services/shopify/shopify-website-development" },
      { label: "Wix Website", href: "/services/wix" },
      { label: "SEO Services", href: "/services/seo" },
      { label: "Technical SEO Service", href: "/services/seo/technical-seo-service" },
      { label: "SEO Audit Service", href: "/services/seo/seo-audit-service" },
      { label: "On Page SEO Service", href: "/services/seo/on-page-seo-service" },
      { label: "Local SEO Service", href: "/services/seo/local-seo-service" },
      { label: "Ecommerce SEO Service", href: "/services/seo/ecommerce-seo-service" },
      { label: "Lead Generation", href: "/services/lead-generation" },
      { label: "LinkedIn Setter", href: "/services/linkedin-setter" },
      { label: "Video Editing", href: "/services/video-editing" },
      { label: "Corporate Video Editing", href: "/services/video-editing/corporate-video-editing" },
      { label: "Podcast Video Editing", href: "/services/video-editing/podcast-video-editing" },
      { label: "Shorts Reels Editing", href: "/services/video-editing/shorts-reels-editing" },
      { label: "Video Editing Service", href: "/services/video-editing/video-editing-service" },
      { label: "YouTube Video Editing", href: "/services/video-editing/youtube-video-editing" },
      { label: "Graphic Design", href: "/services/graphic-design" },
      { label: "Banner Design Service", href: "/services/graphic-design/banner-design-service" },
      { label: "Flyer Design Service", href: "/services/graphic-design/flyer-design-service" },
      { label: "Label Design Service", href: "/services/graphic-design/label-design-service" },
      { label: "Logo Design Service", href: "/services/graphic-design/logo-design-service" },
      { label: "Packaging Design Service", href: "/services/graphic-design/packaging-design-service" },
      { label: "Poster Design Service", href: "/services/graphic-design/poster-design-service" },
      { label: "Software Solution", href: "/services/software-solution" },
      { label: "Business Process Automation", href: "/services/software-solution/business-process-automation" },
      { label: "Custom Software Development", href: "/services/software-solution/custom-software-development" },
      { label: "Custom Web Application", href: "/services/software-solution/custom-web-application" },
      { label: "ERP Inventory Solution", href: "/services/software-solution/erp-inventory-solution" },
      { label: "Internal Management System", href: "/services/software-solution/internal-management-system" },
      { label: "Webmail Support", href: "/services/webmail" },
      { label: "Webmail Bangladesh", href: "/services/webmail/bangladesh" },
      { label: "Business Email Setup", href: "/services/webmail/business-email-setup" },
      { label: "Email Deliverability Fix", href: "/services/webmail/deliverability-fix" },
      { label: "Email Migration", href: "/services/webmail/email-migration" },
      { label: "SPF DKIM DMARC", href: "/services/webmail/spf-dkim-dmarc" },
      { label: "Web Scraping", href: "/services/web-scraping" },
      { label: "Web Scraping Bangladesh", href: "/services/web-scraping/bangladesh" },
      { label: "Data Extraction", href: "/services/web-scraping/data-extraction" },
      { label: "Google Sheets Automation", href: "/services/web-scraping/google-sheets-automation" },
      { label: "Lead Scraping", href: "/services/web-scraping/lead-scraping" },
      { label: "Product Price Scraping", href: "/services/web-scraping/product-price-scraping" },
    ],
    []
  );

  const filteredSearchItems = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return searchItems.slice(0, 8);
    return searchItems
      .filter((item) => item.label.toLowerCase().includes(q))
      .slice(0, 8);
  }, [searchItems, searchQuery]);

  // ✅ same behavior as your previous code (no topbar now)
  const solidOnTop = useMemo(() => {
    if (pathname === "/") return false;
    return true;
  }, [pathname]);

  const shouldSolid = scrolled || solidOnTop;

  const navText = shouldSolid ? "text-slate-800" : "text-white";
  /* Solid bar (no backdrop-blur): blur behind fixed header while scrolling looks smeary on many GPUs */
  const headerBg = shouldSolid ? "bg-white shadow-md" : "bg-transparent";
  const logoSrc = shouldSolid ? "/MugneeIT-Logo.png" : "/MugneeIT.svg";

  const onServicesEnter = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setServicesOpen(true);
  };

  const onServicesLeave = () => {
    closeTimer.current = window.setTimeout(() => setServicesOpen(false), 120);
  };

  const onAboutEnter = () => {
    if (aboutCloseTimer.current) clearTimeout(aboutCloseTimer.current);
    setAboutOpen(true);
  };

  const onAboutLeave = () => {
    aboutCloseTimer.current = window.setTimeout(() => setAboutOpen(false), 120);
  };

  const closeMobile = () => {
    setMobileOpen(false);
    setServicesMobileOpen(false);
    setAboutMobileOpen(false);
    setCmsMobileOpen(false);
  };

  const topLinkClass = (href: string) =>
    [
      "rounded-full px-3 py-1.5 transition-all duration-200",
      isActive(href)
        ? shouldSolid
          ? "bg-gradient-to-r from-slate-900 to-slate-800 text-white ring-1 ring-slate-800/80 shadow-[0_8px_18px_rgba(15,23,42,0.18)]"
          : "bg-white/28 text-white ring-1 ring-white/40"
        : shouldSolid
        ? "text-slate-700 hover:bg-slate-100 hover:text-slate-900"
        : "text-white/90 hover:bg-white/10 hover:text-white",
    ].join(" ");

  const serviceItemClassActive = (active: boolean) =>
    [
      "group flex items-center justify-start gap-2 rounded-lg px-3 py-2 text-sm transition"
,
      active ? "bg-slate-900 text-white" : "text-slate-700 hover:text-slate-900 hover:bg-slate-50",
    ].join(" ");

  const serviceArrowClassActive = (active: boolean) =>
    [
      "h-4 w-4 transition group-hover:translate-x-1",
      active ? "text-white" : "text-slate-400 group-hover:text-slate-900",
    ].join(" ");

  const submitSearch = (href?: string) => {
    const target = href || filteredSearchItems[0]?.href;
    if (!target) return;
    setSearchOpen(false);
    setSearchQuery("");
    router.push(withTrailingSlash(target));
  };

  const TOPBAR_H = 40;
  const HEADER_H = 80;
  const headerStackHeight = TOPBAR_H + HEADER_H;

  return (
    <>
    <header className="fixed inset-x-0 top-0 z-50">
      {/* Top Bar */}
      <div
        className={[
          "text-white/85",
          shouldSolid
            ? "bg-slate-950/95"
            : "bg-gradient-to-r from-slate-950/90 via-slate-950/85 to-slate-950/90",
          "border-b border-white/10",
        ].join(" ")}
      >
        <Container className="flex items-center justify-between gap-3" style={{ height: TOPBAR_H }}>
          <div className="flex items-center gap-3 text-xs font-semibold">
            <a
              href="tel:+8801958645415"
              className="inline-flex items-center gap-1.5 rounded-full px-2 py-1.5 transition hover:bg-white/10 sm:gap-2"
              aria-label="Call Mugnee IT Solutions"
              title="Call +880 1958-645415"
            >
              <Phone className="h-4 w-4 shrink-0 text-yellow-300" />
              <span className="whitespace-nowrap text-[11px] font-semibold tabular-nums tracking-tight sm:text-xs">
                +880 1958-645415
              </span>
            </a>

            <span className="hidden sm:inline h-4 w-px bg-white/15" aria-hidden="true" />

            <a
              href="https://wa.me/8801958645415"
              className="inline-flex items-center gap-2 rounded-full px-2 py-1.5 transition hover:bg-white/10"
              aria-label="WhatsApp Mugnee IT Solutions"
              title="WhatsApp"
            >
              <MessageCircle className="h-4 w-4 text-emerald-300" />
              <span className="hidden sm:inline">WhatsApp</span>
            </a>
          </div>

          <div className="flex min-w-0 items-center justify-end gap-2 sm:gap-3">
            <a
              href="mailto:mugnee.it@gmail.com"
              className="inline-flex min-w-0 items-center gap-1 rounded-full px-1.5 py-1 transition hover:bg-white/10 sm:gap-1.5 sm:px-2 sm:py-1.5"
              aria-label="Email Mugnee IT Solutions at mugnee.it@gmail.com"
              title="mugnee.it@gmail.com"
            >
              <Mail className="h-3.5 w-3.5 shrink-0 text-sky-300 sm:h-4 sm:w-4" />
              <span className="min-w-0 truncate text-[10px] font-semibold tracking-tight text-white/90 sm:max-w-none sm:whitespace-nowrap sm:text-xs">
                mugnee.it@gmail.com
              </span>
            </a>

            <span className="hidden h-4 w-px shrink-0 bg-white/15 sm:block" aria-hidden="true" />

            <div className="hidden items-center gap-2 sm:flex">
              <span className="mr-1 text-[10px] font-extrabold tracking-[0.22em] text-white/55">
                FOLLOW
              </span>
              <a
                href="#"
                className="inline-flex h-8 w-8 items-center justify-center rounded-full text-white/80 transition hover:bg-white/10 hover:text-[#1877F2]"
                aria-label="Facebook"
                title="Facebook"
              >
                <Facebook className="h-[18px] w-[18px]" />
              </a>
              <a
                href="#"
                className="inline-flex h-8 w-8 items-center justify-center rounded-full text-white/80 transition hover:bg-white/10 hover:text-[#0A66C2]"
                aria-label="LinkedIn"
                title="LinkedIn"
              >
                <Linkedin className="h-[18px] w-[18px]" />
              </a>
              <a
                href="#"
                className="inline-flex h-8 w-8 items-center justify-center rounded-full text-white/80 transition hover:bg-white/10 hover:text-[#FF0000]"
                aria-label="YouTube"
                title="YouTube"
              >
                <Youtube className="h-[18px] w-[18px]" />
              </a>
            </div>
          </div>
        </Container>
      </div>

      {/* ✅ MAIN HEADER */}
      <div className={`transition-all duration-300 ${headerBg}`}>
        <Container className="flex h-20 flex-nowrap items-center justify-between gap-3 md:gap-4">
          <div className="hidden shrink-0 md:flex items-center gap-3 lg:gap-4">
            <Link prefetch={false} href="/" className="flex items-center">
              <img
                src={logoSrc}
                alt="Mugnee IT Solutions"
                width={200}
                height={56}
                className="h-auto w-[200px] transition-opacity"
              />
            </Link>

            <div ref={searchRef} className="relative">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  submitSearch();
                }}
                className={[
                  "flex h-11 w-[200px] max-w-[min(200px,28vw)] items-center gap-2 rounded-full px-4 transition-all duration-200 md:max-w-[min(180px,32vw)] md:w-[180px] lg:w-[220px] xl:w-[240px]",
                  shouldSolid
                    ? "bg-white text-slate-900 ring-1 ring-yellow-300 shadow-[0_10px_24px_rgba(250,204,21,0.16)] focus-within:ring-yellow-400"
                    : "bg-white/22 text-white ring-1 ring-yellow-300/80 shadow-[0_10px_24px_rgba(250,204,21,0.22)] focus-within:bg-white/30",
                ].join(" ")}
              >
                <Search className={`h-4 w-4 ${shouldSolid ? "text-yellow-600" : "text-yellow-300"}`} />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setSearchOpen(true);
                  }}
                  onFocus={() => setSearchOpen(true)}
                  placeholder="Search..."
                  className={`w-full bg-transparent text-sm outline-none ${shouldSolid ? "placeholder:text-slate-400" : "placeholder:text-white/75"}`}
                />
              </form>

              {searchOpen && filteredSearchItems.length > 0 ? (
                <div className="absolute left-0 top-[calc(100%+10px)] w-[320px] overflow-hidden rounded-3xl bg-white p-2 shadow-xl ring-1 ring-slate-200">
                  {filteredSearchItems.map((item) => (
                    <button
                      key={item.href}
                      type="button"
                      onClick={() => submitSearch(item.href)}
                      className="flex w-full items-center justify-between rounded-2xl px-4 py-3 text-left transition hover:bg-slate-50"
                    >
                      <span className="block text-sm font-bold text-slate-900">{item.label}</span>
                      <ArrowRight className="h-4 w-4 text-slate-400" />
                    </button>
                  ))}
                </div>
              ) : null}
            </div>
          </div>

          <Link prefetch={false} href="/" className="md:hidden flex items-center">
            <img
              src={logoSrc}
              alt="Mugnee IT Solutions"
              width={200}
              height={56}
              className="h-auto w-[200px] transition-opacity"
            />
          </Link>

          {/* Desktop Nav */}
          <nav
            className={`hidden shrink-0 md:flex items-center justify-end gap-2 text-sm font-semibold lg:gap-3 xl:gap-4 ${navText}`}
          >
            <Link prefetch={false} href="/" className={topLinkClass("/")}>
              Home
            </Link>
            {/* Services Mega Menu */}
            <div className="relative" onMouseEnter={onServicesEnter} onMouseLeave={onServicesLeave}>
              <Link
                prefetch={false}
                href={withTrailingSlash("/services")}
                className={[
                  "flex items-center gap-2 rounded-full px-3 py-1.5 transition-all duration-200",
                  pathname.startsWith("/services")
                    ? shouldSolid
                      ? "bg-gradient-to-r from-slate-900 to-slate-800 text-white ring-1 ring-slate-800/80 shadow-[0_8px_18px_rgba(15,23,42,0.18)]"
                      : "bg-white/28 text-white ring-1 ring-white/40"
                    : shouldSolid
                    ? "text-slate-700 hover:bg-slate-100 hover:text-slate-900"
                    : "text-white/90 hover:bg-white/10 hover:text-white",
                ].join(" ")}
              >
                Services
                <span className={`text-xs transition-transform ${servicesOpen ? "rotate-180" : ""}`}>▼</span>
              </Link>

              {servicesOpen && (
                <div className="absolute left-1/2 top-[calc(100%+14px)] w-[920px] -translate-x-1/2 rounded-3xl bg-white p-6 shadow-xl ring-1 ring-slate-200">
                  {/* Header */}
                  <div className="flex justify-between">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-widest text-blue-600">Our Services</p>
                      <p className="mt-1 text-sm text-slate-600">Choose a service page</p>
                    </div>

                    <Link
                      prefetch={false}
                      href={withTrailingSlash("/services")}
                      className="rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white hover:bg-slate-800"
                    >
                      View All
                    </Link>
                    
                  </div>

                  {/* Services Grid */}
                  <div className="mt-6 grid grid-cols-4 gap-6">
                    {groups.map((g) => (
                      <div key={g.title}>
                        <div className="inline-block">
                          <p className="text-sm font-extrabold text-slate-900">{g.title}</p>
                          <span className="mt-2 block h-[2px] w-14 bg-slate-900" />
                        </div>

                        <div className="mt-4 space-y-2">
                          {g.items.map((it) => {
                            const active = isItemActive(it);

                            // ✅ ONLY CHANGE: CMS parent is clickable (toggles its submenu)
                            if (it.children?.length) {
                              return (
                                <div key={it.label}>
                                  <button
                                    type="button"
                                    onClick={() => setCmsOpen((v) => !v)}
                                    className={serviceItemClassActive(active)}
                                    aria-expanded={cmsOpen}
                                  >
                                    <span className="pr-3 flex-1 text-left">{it.label}</span>

                                    <ChevronDown
                                      className={[
                                        "h-4 w-4 transition",
                                        cmsOpen ? "rotate-180" : "",
                                        active ? "text-white" : "text-slate-400 group-hover:text-slate-900",
                                      ].join(" ")}
                                    />
                                  </button>

                                  {cmsOpen && (
                                    <div className="mt-1 space-y-1 pl-3">
                                      {it.children.map((c) => {
                                        const childActive = !!c.href && isActive(c.href);
                                        return (
                                          <Link
                                            prefetch={false}
                                            key={c.href || c.label}
                                            href={withTrailingSlash(c.href || "#")}
                                            className={[
                                              "group flex items-center justify-between rounded-xl px-3 py-2 text-sm transition",
                                              childActive
                                                ? "bg-slate-900 text-white"
                                                : "text-slate-800 hover:bg-slate-50 hover:text-slate-900",
                                            ].join(" ")}
                                          >
                                            <span className="pr-3">{c.label}</span>
                                            <ArrowRight
                                              className={[
                                                "h-4 w-4 transition group-hover:translate-x-1",
                                                childActive
                                                  ? "text-white"
                                                  : "text-slate-400 group-hover:text-slate-900",
                                              ].join(" ")}
                                            />
                                          </Link>
                                        );
                                      })}
                                    </div>
                                  )}
                                </div>
                              );
                            }

                            // ✅ normal link
                            return (
                              <Link
                                prefetch={false}
                                key={it.href}
                                href={withTrailingSlash(it.href || "#")}
                                className={serviceItemClassActive(active)}
                              >
                                <span className="pr-3">{it.label}</span>
                                <ArrowRight className={serviceArrowClassActive(active)} />
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Bottom CTA */}
                  <div className="mt-6 flex justify-between rounded-2xl bg-slate-50 px-5 py-4">
                    <p className="text-sm text-slate-700">
                      Need a complete package? <b>SEO + Web | Custom Application / Software Solution</b>
                    </p>
                    <Link
                      prefetch={false}
                      href={withTrailingSlash("/schedule-consultation")}
                      className="inline-flex min-w-[13.5rem] shrink-0 items-center justify-center whitespace-nowrap rounded-full bg-yellow-400 px-5 py-2.5 text-sm font-semibold text-slate-900 transition-colors hover:bg-yellow-500"
                    >
                      <HeaderScheduleCtaInner label={scheduleCtaText} reduceMotion={reduceCtaMotion} />
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link prefetch={false} href={withTrailingSlash("/softwares")} className={topLinkClass("/softwares")}>
              Softwares
            </Link>

            {/* Top Links */}
            <Link prefetch={false} href={withTrailingSlash("/projects")} className={topLinkClass("/projects")}>
              Portfolio
            </Link>
            <div className="relative" onMouseEnter={onAboutEnter} onMouseLeave={onAboutLeave}>
              <Link
                prefetch={false}
                href={withTrailingSlash("/about")}
                className={[
                  "flex items-center gap-2 rounded-full px-3 py-1.5 transition-all duration-200",
                  pathname.startsWith("/about")
                    ? shouldSolid
                      ? "bg-gradient-to-r from-slate-900 to-slate-800 text-white ring-1 ring-slate-800/80 shadow-[0_8px_18px_rgba(15,23,42,0.18)]"
                      : "bg-white/28 text-white ring-1 ring-white/40"
                    : shouldSolid
                    ? "text-slate-700 hover:bg-slate-100 hover:text-slate-900"
                    : "text-white/90 hover:bg-white/10 hover:text-white",
                ].join(" ")}
              >
                About
                <ChevronDown className={`h-4 w-4 transition ${aboutOpen ? "rotate-180" : ""}`} />
              </Link>

              {aboutOpen && (
                <div className="absolute left-1/2 top-[calc(100%+12px)] w-56 -translate-x-1/2 rounded-2xl border border-slate-200 bg-white p-2 shadow-xl">
                  <Link
                    prefetch={false}
                    href={withTrailingSlash("/about")}
                    className="block rounded-xl px-3 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 hover:text-slate-900"
                  >
                    About Overview
                  </Link>
                  <Link
                    prefetch={false}
                    href={withTrailingSlash("/about/ceo-message")}
                    className="block rounded-xl px-3 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 hover:text-slate-900"
                  >
                    CEO Message
                  </Link>
                </div>
              )}
            </div>
            <Link prefetch={false} href={withTrailingSlash("/contact")} className={topLinkClass("/contact")}>
              Contact
            </Link>
          </nav>

          {/* Right side */}
          <div className="flex shrink-0 items-center gap-2 md:gap-3">
            <Link
              prefetch={false}
              href={withTrailingSlash("/schedule-consultation")}
              className="hidden min-w-[13.5rem] shrink-0 items-center justify-center whitespace-nowrap rounded-full bg-yellow-400 px-4 py-2.5 text-sm font-semibold text-slate-900 transition hover:bg-yellow-500 md:inline-flex lg:min-w-[14.5rem] lg:px-6"
            >
              <HeaderScheduleCtaInner label={scheduleCtaText} reduceMotion={reduceCtaMotion} />
            </Link>

            <button
              type="button"
              className={`md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full ring-1 transition ${
                shouldSolid
                  ? "bg-white text-slate-900 ring-slate-200"
                  : "bg-white/18 text-white ring-white/30"
              }`}
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Open menu"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </Container>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileOpen && (
        <div className="md:hidden">
          <div className="fixed inset-0 z-40 bg-black/40" onClick={closeMobile} aria-hidden="true" />

          <div
            className="fixed inset-x-0 z-50 overflow-auto bg-white shadow-xl"
            style={{ top: headerStackHeight, maxHeight: `calc(100vh - ${headerStackHeight}px)` }}
          >
            <Container className="py-4">
              <div className="space-y-2">
                <div className="pb-2">
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      submitSearch();
                      closeMobile();
                    }}
                    className="flex h-12 items-center gap-2 rounded-2xl bg-white px-4 ring-1 ring-yellow-300 shadow-[0_8px_18px_rgba(250,204,21,0.14)]"
                  >
                    <Search className="h-4 w-4 text-yellow-600" />
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => {
                        setSearchQuery(e.target.value);
                        setSearchOpen(true);
                      }}
                      onFocus={() => setSearchOpen(true)}
                      placeholder="Search services..."
                      className="w-full bg-transparent text-sm text-slate-900 outline-none placeholder:text-slate-400"
                    />
                  </form>

                  {searchOpen && filteredSearchItems.length > 0 ? (
                    <div className="mt-2 overflow-hidden rounded-3xl bg-white p-2 ring-1 ring-slate-200">
                      {filteredSearchItems.map((item) => (
                        <button
                          key={`mobile-${item.href}`}
                          type="button"
                          onClick={() => {
                            submitSearch(item.href);
                            closeMobile();
                          }}
                          className="flex w-full items-center justify-between rounded-2xl px-4 py-3 text-left transition hover:bg-slate-50"
                        >
                          <span className="block text-sm font-bold text-slate-900">{item.label}</span>
                          <ArrowRight className="h-4 w-4 text-slate-400" />
                        </button>
                      ))}
                    </div>
                  ) : null}
                </div>

                <button
                  type="button"
                  onClick={() => setServicesMobileOpen((v) => !v)}
                  className={[
                    "flex w-full items-center justify-between rounded-2xl px-4 py-3 text-left text-sm font-semibold",
                    pathname.startsWith("/services") ? "bg-slate-900 text-white" : "bg-slate-50 text-slate-900",
                  ].join(" ")}
                >
                  <span className="inline-flex items-center gap-2">
                    <Sparkles className={`h-4 w-4 ${pathname.startsWith("/services") ? "text-yellow-300" : "text-slate-700"}`} />
                    Services
                  </span>
                  <ChevronDown className={`h-4 w-4 transition ${servicesMobileOpen ? "rotate-180" : ""}`} />
                </button>

                {servicesMobileOpen && (
                  <div className="rounded-2xl border border-slate-200 bg-white p-3">
                    {groups.map((g) => (
                      <div key={g.title} className="py-2">
                        <div className="inline-block px-2">
                          <p className="text-xs font-extrabold uppercase tracking-widest text-slate-600">{g.title}</p>
                          <span className="mt-2 block h-[2px] w-12 bg-slate-900" />
                        </div>

                        <div className="mt-2 space-y-1">
                          {g.items.map((it) => {
                            // ✅ ONLY CHANGE for mobile: CMS parent toggles children
                            if (it.children?.length) {
                              const active = isItemActive(it);
                              return (
                                <div key={it.label} className="rounded-xl bg-slate-50/60 p-2">
                                  <button
                                    type="button"
                                    onClick={() => setCmsMobileOpen((v) => !v)}
                                    className={[
                                      "flex w-full items-center justify-between rounded-xl px-3 py-2 text-sm font-semibold transition",
                                      active ? "bg-slate-900 text-white" : "text-slate-900 hover:bg-slate-100",
                                    ].join(" ")}
                                    aria-expanded={cmsMobileOpen}
                                  >
                                    <span>{it.label}</span>
                                    <ChevronDown className={`h-4 w-4 transition ${cmsMobileOpen ? "rotate-180" : ""}`} />
                                  </button>

                                  {cmsMobileOpen && (
                                    <div className="mt-1 space-y-1 pl-2">
                                      {it.children.map((c) => {
                                        const childActive = !!c.href && isActive(c.href);
                                        return (
                                          <a
                                            key={c.href || c.label}
                                            href={withTrailingSlash(c.href || "#")}
                                            onClick={closeMobile}
                                            className={[
                                              "group flex items-center justify-between rounded-xl px-3 py-2 text-sm transition",
                                              childActive ? "bg-slate-900 text-white" : "text-slate-800 hover:bg-slate-100",
                                            ].join(" ")}
                                          >
                                            <span className="pr-3">{c.label}</span>
                                            <ArrowRight
                                              className={[
                                                "h-4 w-4 transition group-hover:translate-x-1",
                                                childActive ? "text-white" : "text-slate-400 group-hover:text-slate-900",
                                              ].join(" ")}
                                            />
                                          </a>
                                        );
                                      })}
                                    </div>
                                  )}
                                </div>
                              );
                            }

                            const active = isItemActive(it);
                            return (
                              <a
                                key={it.href || it.label}
                                href={withTrailingSlash(it.href || "#")}
                                onClick={closeMobile}
                                className={[
                                  "group flex items-center justify-between rounded-xl px-3 py-2 text-sm transition",
                                  active ? "bg-slate-900 text-white" : "text-slate-800 hover:bg-slate-100",
                                ].join(" ")}
                              >
                                <span className="pr-3">{it.label}</span>
                                <ArrowRight
                                  className={[
                                    "h-4 w-4 transition group-hover:translate-x-1",
                                    active ? "text-white" : "text-slate-400 group-hover:text-slate-900",
                                  ].join(" ")}
                                />
                              </a>
                            );
                          })}
                        </div>
                      </div>
                    ))}

                    <div className="mt-3 flex gap-2">
                      <Link
                        prefetch={false}
                        href={withTrailingSlash("/services")}
                        onClick={closeMobile}
                        className="inline-flex flex-1 items-center justify-center rounded-full bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white"
                      >
                        View All
                      </Link>
                      <Link
                        prefetch={false}
                        href={withTrailingSlash("/schedule-consultation")}
                        onClick={closeMobile}
                        className="inline-flex min-w-0 flex-1 items-center justify-center whitespace-nowrap rounded-full bg-yellow-400 px-3 py-2.5 text-xs font-semibold text-slate-900 hover:bg-yellow-500 sm:px-4 sm:text-sm"
                      >
                        <HeaderScheduleCtaInner
                          label={scheduleCtaText}
                          reduceMotion={reduceCtaMotion}
                          iconSize="sm"
                        />
                      </Link>
                    </div>
                  </div>
                )}

                <Link
                  prefetch={false}
                  href={withTrailingSlash("/softwares")}
                  onClick={closeMobile}
                  className={[
                    "block rounded-2xl px-4 py-3 text-sm font-semibold",
                    isActive("/softwares") ? "bg-slate-900 text-white" : "bg-slate-50 text-slate-900",
                  ].join(" ")}
                >
                  Softwares
                </Link>

                <Link
                  prefetch={false}
                  href="/"
                  onClick={closeMobile}
                  className={[
                    "block rounded-2xl px-4 py-3 text-sm font-semibold",
                    isActive("/") ? "bg-slate-900 text-white" : "bg-slate-50 text-slate-900",
                  ].join(" ")}
                >
                  Home
                </Link>

                <Link
                  prefetch={false}
                  href={withTrailingSlash("/projects")}
                  onClick={closeMobile}
                  className={[
                    "block rounded-2xl px-4 py-3 text-sm font-semibold",
                    isActive("/projects") ? "bg-slate-900 text-white" : "bg-slate-50 text-slate-900",
                  ].join(" ")}
                >
                  Portfolio
                </Link>

                <button
                  type="button"
                  onClick={() => setAboutMobileOpen((v) => !v)}
                  className={[
                    "flex w-full items-center justify-between rounded-2xl px-4 py-3 text-sm font-semibold transition",
                    pathname.startsWith("/about") ? "bg-slate-900 text-white" : "bg-slate-50 text-slate-900",
                  ].join(" ")}
                >
                  About
                  <ChevronDown className={`h-4 w-4 transition ${aboutMobileOpen ? "rotate-180" : ""}`} />
                </button>

                {aboutMobileOpen && (
                  <div className="space-y-1 rounded-2xl border border-slate-200 bg-white p-2">
                    <Link
                      prefetch={false}
                      href={withTrailingSlash("/about")}
                      onClick={closeMobile}
                      className="block rounded-xl px-3 py-2 text-sm font-semibold text-slate-800 hover:bg-slate-100"
                    >
                      About Overview
                    </Link>
                    <Link
                      prefetch={false}
                      href={withTrailingSlash("/about/ceo-message")}
                      onClick={closeMobile}
                      className="block rounded-xl px-3 py-2 text-sm font-semibold text-slate-800 hover:bg-slate-100"
                    >
                      CEO Message
                    </Link>
                  </div>
                )}

                <Link
                  prefetch={false}
                  href={withTrailingSlash("/contact")}
                  onClick={closeMobile}
                  className={[
                    "block rounded-2xl px-4 py-3 text-sm font-semibold",
                    isActive("/contact") ? "bg-slate-900 text-white" : "bg-slate-50 text-slate-900",
                  ].join(" ")}
                >
                  Contact
                </Link>

                <Link
                  prefetch={false}
                  href={withTrailingSlash("/schedule-consultation")}
                  onClick={closeMobile}
                  className="mt-2 inline-flex w-full min-w-0 items-center justify-center whitespace-nowrap rounded-full bg-yellow-400 px-4 py-3 text-sm font-semibold text-slate-900 hover:bg-yellow-500"
                >
                  <HeaderScheduleCtaInner label={scheduleCtaText} reduceMotion={reduceCtaMotion} />
                </Link>

                {/* ✅ Mobile quick contact (kept) */}
                <div className="mt-3 grid grid-cols-2 gap-2">
                  <a
                    href="tel:+8801958645415"
                    className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-900"
                  >
                    <Phone className="h-4 w-4" /> Call
                  </a>
                  <a
                    href="mailto:mugnee.it%40gmail.com"
                    className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-900"
                  >
                    <Mail className="h-4 w-4" /> Email
                  </a>
                </div>
              </div>
            </Container>
          </div>
        </div>
      )}
    </header>
    {/* Flow spacer: must sit OUTSIDE fixed header so <main> content is not hidden underneath */}
    <div
      aria-hidden
      className="w-full shrink-0"
      style={{ height: headerStackHeight }}
    />
    </>
  );
}


