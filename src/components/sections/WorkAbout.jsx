"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Section, Container } from "@/components/ui/Section";
import { ArrowRight, CheckCircle2, ShieldCheck, Sparkles } from "lucide-react";

export default function WorkAbout() {
  const reduce = useReducedMotion();

  const fadeUp = {
    hidden: { opacity: 0, y: reduce ? 0 : 18 },
    show: { opacity: 1, y: 0 },
  };

  const stagger = {
    hidden: {},
    show: {
      transition: reduce
        ? { duration: 0.01 }
        : { staggerChildren: 0.08, delayChildren: 0.05 },
    },
  };

  return (
    <Section alt>
      <section className="relative overflow-hidden">
        {/* soft background accents */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-44 top-8 h-[560px] w-[560px] rounded-full bg-slate-200/70 blur-3xl" />
          <div className="absolute -right-44 bottom-0 h-[560px] w-[560px] rounded-full bg-sky-200/55 blur-3xl" />
          <div className="absolute left-1/2 top-0 h-24 w-[72%] -translate-x-1/2 rounded-full bg-white blur-2xl opacity-80" />
          <div className="absolute inset-0 opacity-[0.18] [background:radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.06)_1px,transparent_0)] [background-size:22px_22px]" />
        </div>

        <Container>
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="relative py-14 sm:py-16"
          >
            <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
              {/* LEFT */}
              <motion.div
                variants={fadeUp}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="lg:col-span-5"
              >
                <div className="flex items-center gap-4">
                  <span className="h-[2px] w-12 bg-[#ffb100]" />
                  <p className="text-xs font-extrabold uppercase tracking-[0.28em] text-[#ffb100]">
                    Work about
                  </p>
                </div>

                <motion.h2
                  variants={fadeUp}
                  transition={{ duration: 0.7, ease: "easeOut", delay: 0.02 }}
                  className="mt-5 max-w-[28rem] text-[30px] font-extrabold leading-[1.12] tracking-tight text-slate-900 sm:text-4xl"
                >
                  Trusted delivery with
                  <br className="hidden sm:block" />
                  clear process & results
                </motion.h2>

                <motion.p
                  variants={fadeUp}
                  transition={{ duration: 0.7, ease: "easeOut", delay: 0.04 }}
                  className="mt-4 max-w-[30rem] text-sm leading-7 text-slate-600 sm:text-base"
                >
                  We build fast, clean and SEO-ready websites with a structured
                  workflow. Clear milestones, weekly updates and measurable
                  performance from day one.
                </motion.p>

                {/* bullets */}
                <div className="mt-7 space-y-4">
                  {[
                    "Client-first communication",
                    "SEO + performance from day one",
                    "Clear milestones + weekly updates",
                  ].map((t, i) => (
                    <motion.div
                      key={t}
                      initial={{ opacity: 0, x: reduce ? 0 : -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.4 }}
                      transition={{
                        duration: 0.55,
                        ease: "easeOut",
                        delay: i * 0.06,
                      }}
                      className="flex items-start gap-3"
                    >
                      <span className="mt-0.5 inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-900 text-white ring-1 ring-slate-900/15">
                        <CheckCircle2 className="h-4 w-4" />
                      </span>
                      <span className="text-sm font-semibold leading-6 text-slate-900">{t}</span>
                    </motion.div>
                  ))}
                </div>

                {/* CTA */}
                <motion.a
                  variants={fadeUp}
                  transition={{ duration: 0.7, ease: "easeOut", delay: 0.08 }}
                  href="/contact"
                  className="group relative mt-8 inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-yellow-400 px-8 py-3.5 text-sm font-extrabold text-slate-900 shadow-[0_16px_44px_rgba(15,23,42,0.10)] transition hover:-translate-y-[1px] hover:bg-yellow-500"
                >
                  <span className="pointer-events-none absolute -left-10 top-0 h-full w-10 rotate-12 bg-white/35 blur-sm transition-all duration-500 group-hover:left-[120%]" />
                  Talk to a consultant
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </motion.a>

                <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-4 py-2 text-xs font-semibold text-slate-600 shadow-sm backdrop-blur">
                  <ShieldCheck className="h-4 w-4 text-slate-700" />
                  Transparent workflow • Performance-first delivery
                </div>
              </motion.div>

              {/* RIGHT */}
              <motion.div
                variants={fadeUp}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.05 }}
                className="lg:col-span-7"
              >
                <div className="relative">
                  {/* image */}
                  <motion.div
                    initial={{
                      opacity: 0,
                      y: reduce ? 0 : 18,
                      scale: reduce ? 1 : 0.985,
                    }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.75, ease: "easeOut" }}
                    className="group relative overflow-hidden rounded-[2rem] bg-slate-100 shadow-[0_18px_48px_rgba(15,23,42,0.10)] ring-1 ring-slate-200"
                  >
                    <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                      <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-slate-200/80 blur-2xl" />
                      <div className="absolute -left-16 -bottom-16 h-48 w-48 rounded-full bg-sky-200/55 blur-2xl" />
                    </div>

                    <img
                      src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1400&q=60"
                      alt="Team"
                      loading="lazy"
                      className="h-[360px] w-full object-cover sm:h-[420px] transition duration-700 group-hover:scale-[1.04]"
                    />

                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                  </motion.div>

                  {/* floating stat */}
                  <motion.div
                    initial={{
                      opacity: 0,
                      y: reduce ? 0 : 14,
                      scale: reduce ? 1 : 0.985,
                    }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, amount: 0.35 }}
                    animate={reduce ? undefined : { y: [0, -6, 0] }}
                    transition={
                      reduce
                        ? { duration: 0.01 }
                        : {
                            duration: 3.8,
                            ease: "easeInOut",
                            repeat: Infinity,
                            repeatType: "mirror",
                            delay: 0.2,
                          }
                    }
                    className="group absolute -bottom-10 left-6 rounded-3xl bg-white/95 px-8 py-6 shadow-[0_22px_60px_rgba(15,23,42,0.14)] ring-1 ring-slate-200/70 backdrop-blur sm:left-10"
                  >
                    <div className="flex items-center gap-3">
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-900 text-white ring-1 ring-slate-900/15">
                        <Sparkles className="h-5 w-5" />
                      </span>
                      <div>
                        <div className="text-3xl font-extrabold text-slate-900">
                          240<span className="text-[#ffb100]">+</span>
                        </div>
                        <div className="mt-0.5 text-sm font-semibold text-slate-600">
                          Projects delivered
                        </div>
                      </div>
                    </div>

                    {/* shine */}
                    <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-2xl">
                      <div className="absolute -left-10 top-0 h-full w-10 rotate-12 bg-yellow-200/35 blur-sm opacity-0 transition-all duration-500 group-hover:left-[120%] group-hover:opacity-100" />
                    </div>
                  </motion.div>

                  <div className="h-12" />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </Container>
      </section>
    </Section>
  );
}
