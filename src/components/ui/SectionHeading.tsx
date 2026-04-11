"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

type Props = {
  eyebrow?: string;
  title: string;
  desc?: string;
  align?: "left" | "center";
};

export default function SectionHeading({ eyebrow, title, desc, align = "left" }: Props) {
  const reduce = useReducedMotion();
  const ease = [0.22, 1, 0.36, 1] as const;

  const v: Variants = {
    hidden: { opacity: 0, y: 12, filter: "blur(6px)" },
    show: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: reduce ? { duration: 0.01 } : { duration: 0.55, ease },
    },
  };

  const alignCls = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <motion.div
      variants={v}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.6 }}
      className={`${alignCls} max-w-3xl`}
    >
      {eyebrow ? (
        <p className="text-xs font-semibold uppercase tracking-widest text-blue-600">
          {eyebrow}
        </p>
      ) : null}

      <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
        {title}
      </h2>

      {desc ? (
        <p className="mt-3 text-base leading-7 text-slate-600">{desc}</p>
      ) : null}

      <div className={`mt-5 h-[2px] w-16 bg-blue-600 ${align === "center" ? "mx-auto" : ""}`} />
    </motion.div>
  );
}
