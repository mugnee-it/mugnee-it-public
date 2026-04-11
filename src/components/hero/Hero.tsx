import { ArrowRight, Award, CheckCircle2, FolderKanban, Globe2, ShieldCheck } from "lucide-react";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";
import { withTrailingSlash } from "@/lib/utils";

const HERO_IMAGES = {
  mobileAvif: "/hero/banner-hero-mobile.avif",
  mobileWebp: "/hero/banner-hero-mobile.webp",
  desktopAvif: "/hero/banner-hero-desktop.avif",
  desktopWebp: "/hero/banner-hero-desktop.webp",
};

const SERVICE_POINTS = [
  "Web Development",
  "Mobile App Development",
  "WordPress / Shopify / Wix",
  "Technical + Content SEO",
  "Video Editing",
  "Graphic Design",
  "Lead Generation",
  "Web Scraping",
  "Webmail Setup",
];

/** Pixels: must match Header.tsx TOPBAR_H (40) + main bar (80). Pulls hero bg under the fixed header so transparent header sits on dark imagery, not body bg-white. */
const HEADER_STACK_PX = 120;

export default function Hero() {
  return (
    <section
      className="relative isolate overflow-hidden bg-[#0b1020]"
      style={{ marginTop: -HEADER_STACK_PX, paddingTop: HEADER_STACK_PX }}
    >
      <div className="pointer-events-none absolute inset-0">
        {/* No scale on bg image — avoids subpixel blur while scrolling */}
        <div
          className="absolute inset-0"
          style={{ filter: "saturate(1.08) contrast(1.04)", opacity: 0.95 }}
        >
          <picture>
            <source media="(max-width: 767px)" srcSet={HERO_IMAGES.mobileAvif} type="image/avif" />
            <source media="(max-width: 767px)" srcSet={HERO_IMAGES.mobileWebp} type="image/webp" />
            <source srcSet={HERO_IMAGES.desktopAvif} type="image/avif" />
            <source srcSet={HERO_IMAGES.desktopWebp} type="image/webp" />
            <img
              src={HERO_IMAGES.desktopWebp}
              alt="Mugnee IT Solutions services hero banner"
              fetchPriority="high"
              loading="eager"
              decoding="async"
              className="h-full w-full object-cover"
            />
          </picture>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#070b14]/65 via-[#070b14]/35 to-[#070b14]/20" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-transparent to-black/35" />
        <div
          className="absolute -left-40 top-24 hidden h-[520px] w-[520px] rounded-full md:block"
          style={{
            background:
              "radial-gradient(circle at 30% 30%, rgba(34,211,238,0.22), rgba(34,211,238,0.05) 55%, transparent 70%)",
            filter: "blur(18px)",
          }}
        />
        <div
          className="absolute -right-44 -top-24 hidden h-[560px] w-[560px] rounded-full md:block"
          style={{
            background:
              "radial-gradient(circle at 60% 40%, rgba(236,72,153,0.2), rgba(236,72,153,0.06) 55%, transparent 70%)",
            filter: "blur(22px)",
          }}
        />
        <div
          className="absolute left-[42%] bottom-[-260px] hidden h-[520px] w-[520px] rounded-full sm:block"
          style={{
            background:
              "radial-gradient(circle at 45% 55%, rgba(255,177,0,0.2), rgba(255,177,0,0.06) 55%, transparent 70%)",
            filter: "blur(24px)",
          }}
        />
        <div
          className="absolute inset-0 hidden opacity-[0.08] mix-blend-overlay sm:block"
          style={{
            backgroundImage: "url(/wave-pattern.svg)",
            backgroundSize: "900px",
            backgroundPosition: "top left",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 pb-16 pt-28 md:pb-20 md:pt-32">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <div className="inline-flex items-center gap-3">
              <span className="text-xs font-extrabold tracking-[0.25em] text-[#ffb100]">
                BANGLADESH + GLOBAL | RELIABLE IT SOLUTIONS
              </span>
              <span className="h-[2px] w-14 bg-[#ffb100]/70" />
            </div>

            <h1 className="mt-5 text-[44px] font-extrabold leading-[1.02] text-white sm:text-[56px] md:text-[64px]">
              Reliable IT Solutions for
            </h1>
            <p className="mt-2 text-[30px] font-semibold leading-none text-[#ffb100] sm:text-[34px] md:text-[40px]">
              Web, Software & Digital Solutions
            </p>

            <p className="mt-5 max-w-xl text-sm leading-relaxed text-white/80 sm:text-base">
              We help businesses with websites, web apps, SEO, automation, hosting and
              ongoing support using a clear roadmap, measurable KPIs and transparent
              reporting.
            </p>
            <p className="mt-3 max-w-xl text-sm font-semibold text-white/85">
              Helped 240+ projects over 10+ years with performance-first delivery.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={withTrailingSlash("/schedule-consultation")}
                className="group inline-flex items-center gap-3 rounded-full bg-[#ffb100] px-6 py-3 text-sm font-extrabold text-black transition hover:brightness-95"
              >
                GET FREE CONSULTATION
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-black/15">
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                </span>
              </a>

              <Link
                prefetch={false}
                href={withTrailingSlash("/services")}
                className="inline-flex items-center gap-2 rounded-full border border-white/30 px-5 py-3 text-sm font-bold text-white transition hover:bg-white/10"
              >
                Explore Services
              </Link>

              <div className="grid w-full gap-2 rounded-2xl border border-white/15 bg-black/40 p-3 sm:w-auto sm:grid-cols-3 sm:gap-3 sm:p-3.5">
                <TrustStat icon={FolderKanban} value="240+" label="Projects Delivered" />
                <TrustStat icon={Award} value="10+ Years" label="Experience" />
                <TrustStat icon={Globe2} value="BD + Global" label="Coverage" />
              </div>

              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-300/30 bg-emerald-400/10 px-4 py-2 text-xs font-extrabold uppercase tracking-wider text-emerald-200">
                <ShieldCheck className="h-4 w-4" />
                ISO Certified Company
              </div>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="relative mx-auto max-w-[520px] min-h-[500px]">
              <div className="absolute -top-4 right-10 h-[3px] w-24 rounded-full bg-gradient-to-r from-[#ff2aa1] to-[#ffb100]" />
              <div className="absolute right-2 top-14 h-[3px] w-20 rounded-full bg-gradient-to-r from-[#00e5ff] to-[#00c2a8]" />

              <FloatCard z="z-[30]" className="left-[18px] bottom-[155px] w-[250px]">
                <div className="text-[11px] font-semibold text-slate-600">Execution flow</div>
                <div className="mt-1 text-base font-extrabold text-slate-900">How We Work</div>
                <div className="mt-3 space-y-2 text-[11px] text-slate-700">
                  <div className="rounded-xl border border-slate-200 bg-white p-2">
                    <span className="font-extrabold text-slate-900">1. Discovery</span>
                    <div className="mt-1 text-[10px] font-semibold text-slate-600">
                      Goals, scope, priorities
                    </div>
                  </div>
                  <div className="rounded-xl border border-slate-200 bg-white p-2">
                    <span className="font-extrabold text-slate-900">2. Build + QA</span>
                    <div className="mt-1 text-[10px] font-semibold text-slate-600">
                      Clean implementation and testing
                    </div>
                  </div>
                  <div className="rounded-xl border border-slate-200 bg-white p-2">
                    <span className="font-extrabold text-slate-900">3. Launch + Support</span>
                    <div className="mt-1 text-[10px] font-semibold text-slate-600">
                      Handover, monitoring, improvements
                    </div>
                  </div>
                </div>
              </FloatCard>

              <FloatCard z="z-[20]" className="left-[280px] bottom-[280px] w-[250px]">
                <div className="flex items-start gap-3">
                  <div className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-black text-white">
                    *
                  </div>
                  <div className="min-w-0">
                    <div className="text-sm font-extrabold text-slate-900">Trusted Delivery</div>
                    <div className="mt-0.5 text-[11px] text-slate-600">
                      Weekly updates | Clear milestones | Support after launch
                    </div>
                    <div className="mt-3 grid gap-1.5 sm:grid-cols-2">
                      {SERVICE_POINTS.map((point) => (
                        <div key={point} className="flex items-start gap-1.5">
                          <CheckCircle2 className="mt-[2px] h-3.5 w-3.5 shrink-0 text-[#ffb100]" />
                          <span className="text-[10px] font-semibold leading-tight text-slate-700">
                            {point}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </FloatCard>

              <FloatCard z="z-[25]" className="left-[280px] bottom-[-8px] hidden w-[250px] md:block">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-[11px] font-semibold text-slate-600">KPI Focus</div>
                    <div className="mt-1 text-sm font-extrabold text-slate-900">Growth & Performance</div>
                  </div>
                  <span className="rounded-full bg-[#ffb100]/20 px-3 py-1 text-[10px] font-extrabold text-slate-900">
                    + Leads
                  </span>
                </div>

                <div className="mt-3 rounded-2xl border border-slate-200 bg-white p-3">
                  <div className="flex items-end justify-between gap-2">
                    {[30, 44, 34, 54, 48, 64, 58].map((h, i) => (
                      <div key={i} className="flex-1">
                        <div
                          className="w-full rounded-xl"
                          style={{
                            height: `${h}px`,
                            background:
                              i >= 4
                                ? "linear-gradient(180deg, rgba(255,177,0,0.95), rgba(255,177,0,0.45))"
                                : "linear-gradient(180deg, rgba(2,132,199,0.75), rgba(2,132,199,0.25))",
                          }}
                        />
                      </div>
                    ))}
                  </div>

                  <div className="mt-2 flex items-center justify-between text-[10px] font-semibold text-slate-600">
                    <span>Traffic</span>
                    <span>SEO</span>
                    <span>Leads</span>
                  </div>

                  <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-slate-100">
                    <div
                      className="h-full rounded-full"
                      style={{
                        width: "72%",
                        background:
                          "linear-gradient(90deg, rgba(2,132,199,0.95), rgba(255,177,0,0.95))",
                      }}
                    />
                  </div>

                  <div className="mt-2 text-[10px] text-slate-600">
                    Conversion-ready pages | Tracking | Reporting
                  </div>
                </div>
              </FloatCard>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 z-10 w-full">
        <svg viewBox="0 0 1440 120" className="w-full">
          <path
            fill="#ffffff"
            d="M0,80 C240,120 480,120 720,90 C960,60 1200,0 1440,40 L1440,120 L0,120 Z"
          />
        </svg>
      </div>
    </section>
  );
}

function TrustStat({
  icon: Icon,
  value,
  label,
}: {
  icon: LucideIcon;
  value: string;
  label: string;
}) {
  return (
    <div className="flex items-center gap-2.5 rounded-xl border border-white/12 bg-white/5 px-3 py-2">
      <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#ffb100]/20 text-[#ffcc47] ring-1 ring-[#ffb100]/35">
        <Icon className="h-4 w-4" />
      </span>
      <div className="min-w-0">
        <div className="truncate text-sm font-extrabold leading-none text-white">{value}</div>
        <div className="truncate text-[11px] font-semibold text-white/70">{label}</div>
      </div>
    </div>
  );
}

function FloatCard({
  children,
  className = "",
  z = "z-[20]",
}: {
  children: ReactNode;
  className?: string;
  z?: string;
}) {
  return (
    <div
      className={`absolute ${z} rounded-2xl border border-white/25 bg-white/95 p-3.5 shadow-xl ${className}`}
    >
      {children}
    </div>
  );
}
