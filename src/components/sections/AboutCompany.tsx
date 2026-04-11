"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, PhoneCall, CheckCircle2, BadgeCheck } from "lucide-react";

type Props = {
  phone?: string;
  phoneText?: string;
};

export default function AboutCompany({
  phone = "+8801958645415",
  phoneText = "017-50050088",
}: Props) {
  const reduce = useReducedMotion();
  const tel = `tel:${phone.replace(/\s/g, "")}`;

  return (
    <section className="relative overflow-hidden bg-white">
      {/* soft background accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-28 top-16 h-[520px] w-[520px] rounded-full bg-yellow-100 blur-3xl opacity-70" />
        <div className="absolute -right-28 bottom-10 h-[520px] w-[520px] rounded-full bg-sky-100 blur-3xl opacity-70" />
        <div className="absolute left-1/2 top-0 h-24 w-[70%] -translate-x-1/2 rounded-full bg-slate-100 blur-2xl opacity-70" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 py-14 sm:py-16">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          {/* LEFT: Image collage + spinning badge */}
          <motion.div
            initial={{ opacity: 0, y: reduce ? 0 : 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative"
          >
            {/* Collage grid */}
            <div className="grid grid-cols-2 gap-5">
              <ImageTile
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80"
                alt="Team planning and strategy for web development"
              />
              <ImageTile
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
                alt="Business meeting and collaboration for digital growth"
              />
              <ImageTile
                src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=80"
                alt="SEO and performance optimization discussion"
              />
              {/* ✅ FIX: replaced the one that wasn't loading */}
              <ImageTile
                src="/office-job.jpg"
                alt="Website development workflow and technical execution"
              />
            </div>

            {/* Center spinning badge */}
            <div className="pointer-events-none absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2">
              <div className="relative">
                {/* outer rotating ring */}
                <motion.div
                  aria-hidden
                  className="relative grid h-[144px] w-[144px] place-items-center rounded-full bg-[#ffb100] shadow-[0_18px_60px_rgba(255,177,0,0.30)] ring-8 ring-white"
                  animate={reduce ? {} : { rotate: 360 }}
                  transition={
                    reduce
                      ? {}
                      : { duration: 10, repeat: Infinity, ease: "linear" }
                  }
                >
                  {/* ✅ make ring feel a bit more black (but keep yellow bg) */}
                  <div className="absolute inset-[10px] rounded-full border border-black/25" />

                  <div className="absolute inset-0 grid place-items-center">
                    <div className="h-[114px] w-[114px] rounded-full bg-[#ffb100] opacity-90" />
                  </div>

                  {/* ✅ ticks darker (black tone increased) */}
                  <div className="absolute inset-0 grid place-items-center">
                    <div className="h-[124px] w-[124px] rounded-full [background:repeating-conic-gradient(from_0deg,rgba(0,0,0,.35)_0_2deg,transparent_2deg_10deg)] opacity-[0.18]" />
                  </div>

                  {/* ✅ subtle inner shadow to add black depth */}
                  <div className="absolute inset-0 rounded-full shadow-[inset_0_0_0_2px_rgba(0,0,0,0.10),inset_0_22px_40px_rgba(0,0,0,0.18)]" />
                </motion.div>

                {/* inner mark */}
                <div className="absolute inset-0 grid place-items-center">
                  <div className="flex h-[90px] w-[90px] flex-col items-center justify-center rounded-full bg-white shadow-lg ring-1 ring-black/5">
                    <span className="text-[11px] font-extrabold tracking-widest leading-none text-slate-900">
                      MUGNEE
                    </span>
                    <span className="mt-[2px] text-[10px] font-semibold leading-none text-slate-500">
                      IT SOLUTIONS
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* extra subtle glows */}
            <div className="pointer-events-none absolute -left-10 -top-10 -z-10 h-48 w-48 rounded-full bg-blue-100 blur-3xl opacity-60" />
            <div className="pointer-events-none absolute -right-10 -bottom-10 -z-10 h-52 w-52 rounded-full bg-yellow-100 blur-3xl opacity-60" />
          </motion.div>

          {/* RIGHT: Copy */}
          <motion.div
            initial={{ opacity: 0, y: reduce ? 0 : 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.05 }}
            className="lg:pt-2"
          >
            <p className="text-xs font-extrabold tracking-[0.25em] text-[#ffb100]">
              ABOUT OUR COMPANY
            </p>

            {/* ✅ SEO-friendly H2 */}
            <h2 className="mt-3 max-w-[40rem] text-2xl font-extrabold leading-[1.15] text-slate-900 sm:text-3xl lg:text-4xl">
              Complete IT solutions: websites, software, SEO, automation, and long-term support.
            </h2>

            {/* ✅ SEO-friendly paragraph (IT company tone) */}
            <p className="mt-4 max-w-[40rem] text-sm leading-7 text-slate-600 sm:text-base">
              Mugnee IT Solutions helps businesses grow with modern websites, technical SEO,
              conversion-focused landing pages, and lead generation systems. We deliver clean UI,
              fast performance, and reliable support — for Bangladesh and worldwide clients.
            </p>

            {/* ✅ What an IT company should highlight (services + trust) */}
            <div className="mt-6 grid max-w-[44rem] gap-3 sm:grid-cols-2">
              {[
                "MERN / Next.js websites & web apps with scalable architecture",
                "WordPress, Shopify & Wix setup with speed + security",
                "SEO services (technical + content) for long-term ranking",
                "LinkedIn outreach + lead generation for B2B growth",
                "Creative support: video editing for reels & YouTube",
                "Business solutions: custom software + webmail setup & support",
              ].map((t) => (
                <div key={t} className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 text-blue-600" />
                  <span className="text-sm leading-6 text-slate-700">{t}</span>
                </div>
              ))}
            </div>

            {/* Experience pill */}
            <div className="mt-7 flex items-center gap-3 rounded-3xl border border-slate-200 bg-white/70 px-5 py-4 shadow-sm backdrop-blur">
              <div className="grid h-11 w-11 place-items-center rounded-2xl bg-white shadow-sm ring-1 ring-slate-200">
                <BadgeCheck className="h-6 w-6 text-blue-600" />
              </div>

              <div>
                <p className="text-sm font-extrabold text-slate-900">
                  Clear process, measurable results
                </p>
                <p className="text-sm text-slate-600">
                  Audit → Strategy → Build → Optimize → Report
                </p>
              </div>
            </div>

            {/* CTAs */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="/about"
                className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-yellow-400 px-7 py-3 text-sm font-extrabold text-slate-900 shadow-[0_14px_40px_rgba(250,204,21,0.20)] transition hover:-translate-y-[1px] hover:bg-yellow-500"
              >
                <span className="pointer-events-none absolute -left-10 top-0 h-full w-10 rotate-12 bg-white/35 blur-sm transition-all duration-500 group-hover:left-[120%]" />
                Discover More
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </a>

              <a
                href={tel}
                className="group inline-flex items-center justify-center gap-3 rounded-full border border-yellow-200 bg-white px-6 py-3 text-sm font-extrabold text-slate-900 shadow-sm transition hover:-translate-y-[1px] hover:bg-yellow-50"
              >
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-yellow-100 text-yellow-700 ring-1 ring-yellow-200">
                  <PhoneCall className="h-5 w-5" />
                </span>
                Call Anytime: {phoneText}
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ImageTile({ src, alt }: { src: string; alt: string }) {
  const reduce = useReducedMotion();

  return (
    <div className="group relative overflow-hidden rounded-[28px] bg-slate-100 shadow-sm ring-1 ring-slate-200">
      {/* tiny highlight layer */}
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <div className="absolute -left-16 -top-16 h-40 w-40 rounded-full bg-yellow-200 blur-2xl opacity-60" />
      </div>

      <motion.img
        src={src}
        alt={alt}
        loading="lazy"
        className="h-[240px] w-full object-cover transition duration-700 group-hover:scale-[1.04]"
        initial={reduce ? {} : { scale: 1 }}
        whileHover={reduce ? {} : { scale: 1.04 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      />
    </div>
  );
}

