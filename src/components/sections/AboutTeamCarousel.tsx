"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

type TeamMember = {
  name: string;
  role: string;
  img: string;
};

/** Time between steps — faster so right → center → left reads clearly */
const ROTATE_MS = 2200;

function useMediaMd() {
  const [md, setMd] = useState(true);
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const sync = () => setMd(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);
  return md;
}

type SlotCfg = {
  x: number;
  y: number;
  scale: number;
  opacity: number;
  rotateY: number;
  z: number;
  dim: boolean;
};

function slotConfigsDesktop(): Record<number, SlotCfg> {
  /* Asymmetric: longer arm on the right = “next” waits on the right; left = already passed */
  return {
    "-2": { x: -228, y: 4, scale: 0.62, opacity: 0.38, rotateY: 16, z: 1, dim: true },
    "-1": { x: -120, y: 2, scale: 0.76, opacity: 0.78, rotateY: 9, z: 4, dim: true },
    0: { x: 0, y: -6, scale: 1.04, opacity: 1, rotateY: 0, z: 20, dim: false },
    1: { x: 142, y: 2, scale: 0.78, opacity: 0.82, rotateY: -10, z: 4, dim: true },
    2: { x: 272, y: 5, scale: 0.62, opacity: 0.42, rotateY: -18, z: 1, dim: true },
  };
}

function slotConfigsMobile(): Record<number, SlotCfg> {
  return {
    "-1": { x: -86, y: 2, scale: 0.78, opacity: 0.8, rotateY: 11, z: 4, dim: true },
    0: { x: 0, y: -4, scale: 1.02, opacity: 1, rotateY: 0, z: 20, dim: false },
    1: { x: 102, y: 2, scale: 0.78, opacity: 0.82, rotateY: -11, z: 4, dim: true },
  };
}

const glideEase = [0.4, 0, 0.2, 1] as const;

export default function AboutTeamCarousel({
  members,
}: {
  members: TeamMember[];
}) {
  const reduce = useReducedMotion();
  const isMd = useMediaMd();
  const [activeIndex, setActiveIndex] = useState(0);
  const n = members.length;

  const slots = useMemo(() => (isMd ? ([-2, -1, 0, 1, 2] as const) : ([-1, 0, 1] as const)), [isMd]);
  const cfgMap = useMemo(
    () => (isMd ? slotConfigsDesktop() : slotConfigsMobile()),
    [isMd]
  );

  useEffect(() => {
    if (reduce || n <= 1) return;
    const t = window.setInterval(() => {
      setActiveIndex((i) => (i + 1) % n);
    }, ROTATE_MS);
    return () => window.clearInterval(t);
  }, [reduce, n]);

  const memberAtSlot = (slot: number) => {
    const idx = ((activeIndex + slot) % n + n) % n;
    return members[idx];
  };

  const transition = reduce
    ? { duration: 0.15 }
    : { type: "tween" as const, duration: 0.5, ease: glideEase };

  return (
    <div
      className="relative min-h-0 w-full select-none overflow-visible"
      style={{ touchAction: "manipulation" }}
    >
      <div className="relative overflow-visible py-2 sm:py-4" style={{ perspective: "1200px" }}>
        <p className="sr-only" aria-live="polite">
          Featured team member: {memberAtSlot(0).name}, {memberAtSlot(0).role}
        </p>

        {/* No outer “box” — cards float on page bg; stage tall enough for photo + name + role */}
        <div className="relative mx-auto min-h-[min(470px,88vw)] h-[min(470px,88vw)] w-full max-w-full overflow-visible sm:min-h-[510px] sm:h-[510px] lg:min-h-[530px] lg:h-[530px] lg:max-w-none">
          {/* Pivot left of center so the fan sits in the column without clipping on the right */}
          <div className="absolute left-[46%] top-[36%] h-0 w-0 -translate-x-1/2 sm:left-[41%] sm:top-[34%] lg:left-[39%]">
            {slots.map((slot) => {
              const m = memberAtSlot(slot);
              const cfg = cfgMap[slot];
              const isCenter = slot === 0;

              return (
                <motion.article
                  key={slot}
                  initial={false}
                  className="absolute w-[200px] -translate-x-1/2 -translate-y-1/2 sm:w-[236px]"
                  animate={{
                    x: cfg.x,
                    y: cfg.y,
                    scale: cfg.scale,
                    opacity: cfg.opacity,
                    rotateY: reduce ? 0 : cfg.rotateY,
                    zIndex: cfg.z,
                  }}
                  transition={transition}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <motion.div
                    className="relative"
                    animate={
                      isCenter && !reduce ? { y: [0, -6, 0] } : { y: 0 }
                    }
                    transition={
                      isCenter && !reduce
                        ? { duration: 2.1, repeat: Infinity, ease: "easeInOut" }
                        : { duration: 0.2 }
                    }
                  >
                    <div
                      className={[
                        "overflow-hidden rounded-[26px] bg-white shadow-[0_20px_44px_rgba(15,23,42,0.14)] ring-1 ring-slate-200/80",
                        isCenter
                          ? "shadow-[0_28px_56px_rgba(15,23,42,0.2)] ring-yellow-400/35"
                          : "",
                      ].join(" ")}
                    >
                      <div className="relative overflow-hidden rounded-[22px] bg-slate-100">
                        <img
                          src={m.img}
                          alt={m.name}
                          className="h-[min(250px,50vw)] w-full object-cover object-top sm:h-[286px]"
                          draggable={false}
                        />
                        {cfg.dim ? (
                          <div
                            className="pointer-events-none absolute inset-0 bg-slate-900/25 transition-opacity duration-300"
                            aria-hidden
                          />
                        ) : null}
                      </div>

                      <div className="px-3 pb-4 pt-3 sm:px-4 sm:pb-5">
                        <div className="text-[15px] font-extrabold leading-snug text-slate-900 sm:text-base">
                          {m.name}
                        </div>
                        <div className="mt-1.5 text-xs font-semibold leading-snug text-slate-600 sm:text-sm">
                          {m.role}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
