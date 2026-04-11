"use client";

import { useEffect, useMemo, useState } from "react";
import { Quote, Star, BriefcaseBusiness } from "lucide-react";

type T = {
  name: string;
  role: string;
  company: string;
  comment: string;
  rating?: 5 | 4;
  service?: string;
};

export default function TestimonialTicker4() {
  const items: T[] = useMemo(
    () => [
      {
        name: "Ayesha Rahman",
        role: "Founder",
        company: "SaaSUp",
        comment:
          "Premium UI and fast performance. Delivery felt enterprise-level and well-structured.",
        rating: 5,
        service: "SaaS Product (Web App)",
      },
      {
        name: "Daniel Brooks",
        role: "Product Lead",
        company: "NorthPeak",
        comment:
          "Clear roadmap, clean execution, and strong communication. Exactly what we needed.",
        rating: 4,
        service: "High‑end Software Delivery",
      },
      {
        name: "Nafisa Islam",
        role: "CEO",
        company: "StudioNext",
        comment:
          "The frontend quality is top-tier. Smooth UX and a very professional finish.",
        rating: 5,
        service: "Next.js (Web App)",
      },
      {
        name: "Michael Chen",
        role: "CTO",
        company: "CloudOps",
        comment:
          "They shipped a stable MERN app with a clean admin flow and solid backend structure.",
        rating: 5,
        service: "MERN (Web App)",
      },
      {
        name: "Sabrina Ahmed",
        role: "Founder",
        company: "AppMint",
        comment:
          "Flutter delivery was smooth—clean UI, consistent components, and reliable handover.",
        rating: 5,
        service: "Flutter (Mobile App)",
      },
      {
        name: "Omar Faruk",
        role: "Co-founder",
        company: "D2C Labs",
        comment:
          "Our Wix site looks premium now. Clean layout, fast load, and clear sections.",
        rating: 4,
        service: "Wix Website",
      },
      {
        name: "Rafi Hasan",
        role: "Owner",
        company: "LocalMart",
        comment:
          "WordPress setup was fast and secure. Great support and a clean final result.",
        rating: 5,
        service: "WordPress Website",
      },
      {
        name: "Emily Stone",
        role: "Growth Manager",
        company: "Skyline",
        comment:
          "High-quality delivery with clear milestones. Everything was on time and polished.",
        rating: 5,
        service: "Web + Mobile Delivery",
      },
    ],
    []
  );

  const [reducedMotion, setReducedMotion] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const set = () => setReducedMotion(!!mq.matches);
    set();
    mq.addEventListener?.("change", set);
    return () => mq.removeEventListener?.("change", set);
  }, []);

  const loop = useMemo(() => [...items, ...items], [items]);

  return (
    <section className="relative bg-white">
      <style jsx>{`
        .marquee {
          --duration: 32s;
          animation: scroll var(--duration) linear infinite;
          will-change: transform;
          transform: translate3d(0, 0, 0);
        }

        .marquee-wrap:hover .marquee {
          animation-play-state: paused;
        }

        @keyframes scroll {
          from {
            transform: translate3d(0, 0, 0);
          }
          to {
            transform: translate3d(-50%, 0, 0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .marquee {
            animation: none !important;
            transform: none !important;
          }
          .marquee-wrap:hover .marquee {
            animation-play-state: running;
          }
        }
      `}</style>

      <div className="relative isolate overflow-hidden py-12 sm:py-14">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[linear-gradient(180deg,#ffffff_0%,#f8fafc_55%,#ffffff_100%)]" />
          <div className="absolute -top-40 left-10 h-[420px] w-[420px] rounded-full bg-yellow-200/25 blur-3xl" />
          <div className="absolute -bottom-44 right-0 h-[520px] w-[520px] rounded-full bg-sky-200/25 blur-3xl" />
          <div className="absolute inset-0 opacity-[0.08] [background:radial-gradient(circle_at_1px_1px,rgba(15,23,42,.14)_1px,transparent_0)] [background-size:26px_26px]" />
        </div>

        <div className="mx-auto max-w-6xl px-4">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-extrabold tracking-[0.28em] text-slate-500">
              TESTIMONIALS
            </p>
            <h2 className="mt-3 text-3xl font-extrabold text-slate-900 sm:text-4xl">
              What our clients say
            </h2>
            <p className="mt-3 text-sm text-slate-600 sm:text-base">
              Premium delivery, clear communication and measurable outcomes.
            </p>
            <div className="mt-5 flex flex-wrap items-center justify-center gap-2">
              {[
                "Role and company shown",
                "Service context included",
                "Project-based client feedback",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-slate-200 bg-white px-3 py-1 text-[11px] font-extrabold text-slate-700"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="relative mt-12">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-white via-white/80 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-white via-white/80 to-transparent" />

          <div className="marquee-wrap overflow-hidden">
            <div
              className={[
                "marquee flex w-[200%] items-start gap-5 px-4 sm:px-8",
                reducedMotion ? "flex-wrap w-full justify-center" : "",
              ].join(" ")}
              style={
                reducedMotion
                  ? { width: "100%", animation: "none" as any }
                  : undefined
              }
            >
              {loop.map((t, idx) => (
                <Card key={`${t.name}-${idx}`} t={t} />
              ))}
            </div>
          </div>
        </div>

          <div className="mx-auto mt-10 max-w-6xl px-4 text-center text-sm text-slate-600">
            Real-world delivery feedback — pause on hover.
          </div>
      </div>
    </section>
  );
}

function Card({ t }: { t: T }) {
  const initials = (t.name || "Client")
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase())
    .join("");

  return (
    <article
      className="
        group relative
        w-[270px] sm:w-[300px] lg:w-[320px]
        rounded-[28px]
        bg-white/95
        p-6
        shadow-[0_14px_40px_rgba(15,23,42,0.10)]
        ring-1 ring-slate-200/80
        transition
        hover:-translate-y-1
        hover:shadow-[0_22px_65px_rgba(15,23,42,0.14)]
      "
    >
      <div className="flex items-center justify-between gap-3">
        <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-2xl bg-slate-900 text-xs font-extrabold text-white">
          {initials}
        </span>
        <Stars n={t.rating ?? 5} />
      </div>
      <div className="mt-3 min-w-0">
        <span className="inline-flex max-w-full items-center gap-2 overflow-x-auto whitespace-nowrap rounded-full bg-slate-900 py-1 pl-2.5 pr-3 text-[11px] font-extrabold text-white [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <BriefcaseBusiness className="h-3.5 w-3.5 shrink-0 text-yellow-300" />
          {t.service ?? "Client Feedback"}
        </span>
      </div>

      <div className="relative mt-5 rounded-3xl bg-slate-50 p-5 ring-1 ring-slate-200/70 transition group-hover:bg-slate-50/70">
        <Quote className="absolute -top-3 left-5 h-7 w-7 text-slate-300" />
        <p className="line-clamp-3 text-sm leading-relaxed text-slate-800">{t.comment}</p>
        <span className="absolute -bottom-3 left-10 h-6 w-6 rotate-45 bg-slate-50" />
      </div>

      <div className="mt-5 min-w-0 border-t border-slate-100 pt-4">
        <div className="truncate text-sm font-extrabold text-slate-900">{t.name}</div>
        <div className="truncate text-xs text-slate-600">
          {t.role} at <span className="font-semibold">{t.company}</span>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-sky-50/50 to-transparent" />
    </article>
  );
}

function Stars({ n }: { n: number }) {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${i < n ? "text-amber-400" : "text-slate-200"}`}
          fill={i < n ? "currentColor" : "none"}
        />
      ))}
    </div>
  );
}
