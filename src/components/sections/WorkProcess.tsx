"use client";

import { motion, useReducedMotion, useInView } from "framer-motion";
import Link from "next/link";
import { CheckCircle2, ArrowRight, Search, Settings, Rocket } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { withTrailingSlash } from "@/lib/utils";

/* ================= UTIL ================= */

const fadeUpProps = (reduce: boolean, delay = 0) => ({
  initial: { opacity: 0, y: reduce ? 0 : 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.25 },
  transition: { duration: 0.6, ease: "easeOut" as const, delay },
});

/* ================= MAIN ================= */

export default function WorkProcess() {
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden text-slate-900">
      {/* ===== BACKGROUND ===== */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#fffdf7_0%,#f7faff_55%,#ffffff_100%)]" />
        <div className="absolute -top-32 -left-40 h-[520px] w-[520px] rounded-full bg-yellow-300/35 blur-[140px]" />
        <div className="absolute top-40 -right-40 h-[520px] w-[520px] rounded-full bg-sky-300/35 blur-[140px]" />
        <div
          className="absolute inset-0 opacity-[0.18]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(0,0,0,0.06) 1px, transparent 0)",
            backgroundSize: "22px 22px",
          }}
        />
      </div>

      {/* ===== CONTENT ===== */}
      <div className="relative mx-auto max-w-6xl px-4 py-12 sm:py-14">
        {/* ===== STATS ===== */}
        <motion.div {...fadeUpProps(reduce)} className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          <StatCount value={10} suffix="+" label="Years Experience" />
          <StatCount value={240} suffix="+" label="Projects Delivered" />
          <StatCount value={15} suffix="+" label="Countries Served" />
          <StatCount value={99} suffix="%" label="Client Satisfaction" />
        </motion.div>

        <div className="mt-8 h-px w-full bg-slate-200" />

        {/* ===== HEADING ===== */}
        <motion.div {...fadeUpProps(reduce, 0.06)} className="mx-auto mt-9 max-w-3xl text-center">
          <p className="text-xs font-extrabold tracking-[0.3em] text-yellow-600">
            WORKING PROCESS
          </p>

          <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl text-slate-900">
            Our proven process for building
            <span className="block text-yellow-600">high-performing IT solutions</span>
          </h2>

          <p className="mt-3 text-sm text-slate-600 sm:text-base">
            A clear workflow — strategy → execution → launch — with transparency,
            speed and measurable growth.
          </p>
        </motion.div>

        {/* ===== STEPS ===== */}
        <div className="relative mt-10">
          <div className="grid gap-6 lg:grid-cols-3">
            <Step
              step="01"
              title="Discover & Plan"
              desc="We analyze goals, audience and competitors — then build a clear roadmap (tech + SEO)."
              icon={Search}
            accent="amber"
            />
            <Step
              step="02"
              title="Build & Optimize"
              desc="We design, develop and optimize for speed, usability and search visibility."
              icon={Settings}
            accent="slate"
            />
            <Step
              step="03"
              title="Launch & Scale"
              desc="We deploy, monitor KPIs and continuously improve for long-term growth."
              icon={Rocket}
            accent="amber"
            />
          </div>
        </div>

        {/* ===== CTA ===== */}
        <motion.div {...fadeUpProps(reduce, 0.14)} className="mt-10 flex flex-col items-center gap-3">
          <Link
            prefetch={false}
            href={withTrailingSlash("/schedule-consultation")}
            className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-yellow-400 px-8 py-4 text-sm font-extrabold text-slate-900 shadow-[0_18px_45px_rgba(250,204,21,0.35)] transition hover:-translate-y-[1px] hover:bg-yellow-500"
          >
            <span className="pointer-events-none absolute -left-10 top-0 h-full w-10 rotate-12 bg-white/60 blur-sm transition-all duration-500 group-hover:left-[120%]" />
            Request Free Consultation
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
          </Link>

          <div className="flex items-center gap-2 text-sm text-slate-500">
            <CheckCircle2 className="h-4 w-4 text-yellow-500" />
            Clear roadmap • Weekly updates • No hidden promises
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ================= STAT ================= */

function StatCount({
  value,
  suffix = "",
  label,
  duration = 900,
}: {
  value: number;
  suffix?: string;
  label: string;
  duration?: number;
}) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, amount: 0.35 });
  const [n, setN] = useState(reduce ? value : 0);

  useEffect(() => {
    if (!inView) return;
    if (reduce) return;

    let raf = 0;
    const start = performance.now();

    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setN(Math.round(value * eased));
      if (t < 1) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, reduce, value, duration]);

  return (
    <div
      ref={ref}
      className="rounded-3xl border border-slate-200 bg-white/70 p-4 text-center backdrop-blur"
    >
      <div className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
        {n}
        {suffix}
      </div>
      <div className="mt-1 text-xs font-semibold uppercase tracking-wider text-slate-500">
        {label}
      </div>
    </div>
  );
}

/* ================= STEP ================= */

function Step({
  step,
  title,
  desc,
  icon: Icon,
  accent,
}: {
  step: string;
  title: string;
  desc: string;
  icon: LucideIcon;
  accent: "amber" | "slate";
}) {
  const accentText = accent === "amber" ? "text-yellow-700" : "text-slate-700";
  const accentBg = accent === "amber" ? "bg-yellow-100" : "bg-slate-100";
  const glow = accent === "amber" ? "bg-yellow-300/35" : "bg-slate-300/25";
  const hoverRing = accent === "amber" ? "group-hover:ring-yellow-300/55" : "group-hover:ring-slate-400/45";
  const hoverTint =
    accent === "amber"
      ? "group-hover:bg-[linear-gradient(180deg,rgba(255,251,235,0.85),rgba(255,255,255,0.92))]"
      : "group-hover:bg-[linear-gradient(180deg,rgba(248,250,252,0.92),rgba(255,255,255,0.92))]";

  return (
    <motion.div
      initial="rest"
      animate="rest"
      whileHover="hover"
      className={[
        "group relative overflow-hidden rounded-3xl bg-white p-7",
        "ring-1 ring-slate-200/90 shadow-[0_10px_28px_rgba(15,23,42,0.06)]",
        "transition hover:-translate-y-1 hover:shadow-[0_22px_55px_rgba(15,23,42,0.10)]",
        hoverRing,
        hoverTint,
      ].join(" ")}
    >
      <BorderDrawHover accent={accent} id={`work-step-${step}`} />

      <div
        className={[
          "pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full blur-3xl opacity-0 transition group-hover:opacity-100",
          glow,
        ].join(" ")}
      />

      <div className="flex items-center justify-between">
        <span className={`text-xs font-extrabold tracking-widest ${accentText}`}>
          STEP {step}
        </span>

        <div className={["grid h-12 w-12 place-items-center rounded-2xl ring-1 ring-slate-200", accentBg].join(" ")}>
          <Icon className={`h-6 w-6 ${accentText}`} />
        </div>
      </div>

      <h3 className="mt-5 text-lg font-extrabold text-slate-900">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-600">{desc}</p>

      <div className="mt-6 h-px w-full bg-slate-200" />
      <div className="mt-4 text-xs font-semibold text-slate-500">
        Timeline: 2–7 days depending on scope
      </div>
    </motion.div>
  );
}

/* ================= BORDER (HOVER ONLY) ================= */

function BorderDrawHover({
  accent,
  id,
}: {
  accent: "amber" | "slate";
  id: string;
}) {
  const reduce = useReducedMotion();
  const dur = reduce ? 0 : 0.65;
  const gradId = `${id}-${accent}-stroke`;
  const boxShadow =
    accent === "amber"
      ? "0 0 0 1px rgba(250,204,21,0.22), 0 0 16px rgba(250,204,21,0.10)"
      : "0 0 0 1px rgba(100,116,139,0.16), 0 0 16px rgba(15,23,42,0.06)";

  return (
    <div className="pointer-events-none absolute inset-0 z-10 rounded-3xl">
      <motion.div
        className="absolute inset-0 rounded-3xl"
        variants={{ rest: { opacity: 0 }, hover: { opacity: 1 } }}
        transition={{ duration: reduce ? 0 : 0.2 }}
        style={{ boxShadow }}
      />

      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        <defs>
          <linearGradient id={gradId} x1="0" y1="0" x2="1" y2="1">
            {accent === "amber" ? (
              <>
                <stop offset="0%" stopColor="rgba(250,204,21,0.98)" />
                <stop offset="58%" stopColor="rgba(245,158,11,0.95)" />
                <stop offset="100%" stopColor="rgba(234,179,8,0.98)" />
              </>
            ) : (
              <>
                <stop offset="0%" stopColor="rgba(15,23,42,0.88)" />
                <stop offset="58%" stopColor="rgba(51,65,85,0.86)" />
                <stop offset="100%" stopColor="rgba(15,23,42,0.88)" />
              </>
            )}
          </linearGradient>
        </defs>

        <motion.path
          d="M 50 1.2 H 8 Q 1.2 1.2 1.2 8 V 92 Q 1.2 98.8 8 98.8 H 50"
          fill="none"
          stroke={`url(#${gradId})`}
          strokeWidth="0.9"
          pathLength={1}
          variants={{ rest: { pathLength: 0 }, hover: { pathLength: 1 } }}
          transition={{ duration: dur, ease: "easeInOut" }}
        />

        <motion.path
          d="M 50 1.2 H 92 Q 98.8 1.2 98.8 8 V 92 Q 98.8 98.8 92 98.8 H 50"
          fill="none"
          stroke={`url(#${gradId})`}
          strokeWidth="0.9"
          pathLength={1}
          variants={{ rest: { pathLength: 0 }, hover: { pathLength: 1 } }}
          transition={{ duration: dur, ease: "easeInOut" }}
        />
      </svg>
    </div>
  );
}
