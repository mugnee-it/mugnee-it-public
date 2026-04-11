"use client";

import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Link from "next/link";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { ArrowRight, CheckCircle2, Play } from "lucide-react";
import { withTrailingSlash } from "@/lib/utils";

export default function Hero() {
  const reduce = useReducedMotion();
  const ease = [0.22, 1, 0.36, 1] as const;

  const v: Variants = {
    hidden: { opacity: 0, y: 18, filter: "blur(8px)" },
    show: { opacity: 1, y: 0, filter: "blur(0px)", transition: reduce ? { duration: 0.01 } : { duration: 0.7, ease } },
  };

  return (
    <section className="relative overflow-hidden bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(900px_circle_at_20%_-10%,rgba(37,99,235,0.35),transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(900px_circle_at_80%_110%,rgba(99,102,241,0.22),transparent_55%)]" />
      <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(#60a5fa_1px,transparent_1px)] [background-size:22px_22px]" />

      <Container className="relative py-16 sm:py-20 lg:py-24">
        <motion.div variants={v} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.6 }}>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-slate-200">
            <span className="h-2 w-2 rounded-full bg-blue-400" />
            SEO-first web development for IT companies
          </div>

          <h1 className="mt-6 max-w-3xl text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Grow with <span className="text-blue-300">SEO</span> +{" "}
            <span className="text-blue-300">Performance</span>
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
            We build fast, conversion-ready websites and growth systems—optimized for Core Web Vitals, ranking, and leads.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link prefetch={false} href={withTrailingSlash("/contact")}>
              <Button>
                Get a proposal <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>

            <Link prefetch={false}
              href={withTrailingSlash("/projects")}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              <Play className="h-4 w-4" /> See case studies
            </Link>
          </div>

          <div className="mt-10 grid gap-3 text-sm text-slate-300 sm:grid-cols-3">
            {[
              "Core Web Vitals optimized",
              "Technical SEO + schema",
              "Clear delivery & support",
            ].map((t) => (
              <div key={t} className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-5 w-5 text-blue-300" />
                <span>{t}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </Container>

      <div className="h-10 bg-gradient-to-b from-slate-950 to-white" />
    </section>
  );
}
