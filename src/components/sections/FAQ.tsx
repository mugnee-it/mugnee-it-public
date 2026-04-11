"use client";

import Container from "@/components/ui/Container";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { Plus, HelpCircle, CheckCircle2, ArrowRight } from "lucide-react";
import { useMemo } from "react";
import { HOME_FAQS } from "@/data/homeFaqs";

export default function FAQ() {
  const reduce = useReducedMotion();
  const ease = useMemo(() => [0.2, 1, 0.3, 1] as const, []);
  const half = Math.ceil(HOME_FAQS.length / 2);
  const leftFaqs = HOME_FAQS.slice(0, half);
  const rightFaqs = HOME_FAQS.slice(half);

  const wrap: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: reduce
        ? { duration: 0.01 }
        : { staggerChildren: 0.08, delayChildren: 0.05 },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 12 },
    show: {
      opacity: 1,
      y: 0,
      transition: reduce ? { duration: 0.01 } : { duration: 0.45, ease },
    },
  };

  return (
    <section id="faq" className="relative overflow-hidden py-16 sm:py-20">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#ffffff_0%,#f8fafc_50%,#ffffff_100%)]" />
        <div className="absolute -left-40 top-24 h-[520px] w-[520px] rounded-full bg-cyan-200/25 blur-3xl" />
        <div className="absolute -right-40 bottom-12 h-[520px] w-[520px] rounded-full bg-amber-200/25 blur-3xl" />
        <div className="absolute inset-0 opacity-[0.08] [background:radial-gradient(circle_at_1px_1px,rgba(15,23,42,0.14)_1px,transparent_0)] [background-size:26px_26px]" />
      </div>

      <Container>
        <motion.div
          variants={wrap}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="mx-auto max-w-6xl"
        >
          {/* Title */}
          <motion.div variants={item} className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-extrabold uppercase tracking-[0.28em] text-slate-500">
              FAQ
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Answers before you start
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
              Short, practical answers about delivery timeline, SEO safety, and support—so you can decide fast.
            </p>
          </motion.div>

          {/* Two columns */}
          <div className="mt-10 grid gap-4 lg:grid-cols-2 lg:gap-6">
            <motion.div variants={wrap} className="space-y-4">
              {leftFaqs.map((faq) => (
                <FAQItem key={faq.q} faq={faq} item={item} />
              ))}
            </motion.div>
            <motion.div variants={wrap} className="space-y-4">
              {rightFaqs.map((faq) => (
                <FAQItem key={faq.q} faq={faq} item={item} />
              ))}
            </motion.div>
          </div>

          {/* CTA bottom */}
          <motion.div variants={item} className="mt-10 flex flex-col items-center gap-3 text-center">
            <div className="inline-flex flex-wrap items-center justify-center gap-2 text-sm text-slate-600">
              <CheckCircle2 className="h-4 w-4 text-emerald-600" />
              Clear scope • Weekly updates • Support after launch
            </div>
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-900 px-8 py-3.5 text-sm font-extrabold text-white shadow-[0_16px_44px_rgba(15,23,42,0.16)] transition hover:-translate-y-[1px] hover:bg-slate-800"
            >
              Talk to us
              <ArrowRight className="h-4 w-4" />
            </a>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}

function FAQItem({
  faq,
  item,
}: {
  faq: { q: string; a: string };
  item: Variants;
}) {
  return (
    <motion.details
      variants={item}
      className="group rounded-3xl bg-white p-0 shadow-[0_18px_55px_rgba(15,23,42,0.08)] ring-1 ring-slate-200/80 transition hover:ring-slate-300"
    >
      <summary className="flex cursor-pointer list-none items-start justify-between gap-4 p-6">
        <div className="flex items-start gap-3">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-50 text-slate-700 ring-1 ring-slate-200 transition group-open:bg-yellow-50 group-open:text-yellow-700 group-open:ring-yellow-200">
            <HelpCircle className="h-5 w-5" />
          </span>

          <div>
            <div className="text-sm font-extrabold leading-6 text-slate-900 sm:text-base">
              {faq.q}?
            </div>
            <div className="mt-1 text-xs text-slate-500">Short answer, no fluff</div>
          </div>
        </div>

        <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-slate-50 text-slate-700 ring-1 ring-slate-200 transition group-open:bg-slate-900 group-open:text-white group-open:ring-slate-900">
          <Plus className="h-4 w-4 transition group-open:rotate-45" />
        </span>
      </summary>

      <div className="px-6 pb-6 pt-0">
        <div className="h-px w-full bg-slate-200/80" />
        <p className="mt-4 text-sm leading-7 text-slate-600">{faq.a}</p>
      </div>
    </motion.details>
  );
}
