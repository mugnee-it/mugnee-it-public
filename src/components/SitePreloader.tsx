"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

export default function SitePreloader() {
  const [showHomeOverlay, setShowHomeOverlay] = useState(false);
  const [homeOverlayVisible, setHomeOverlayVisible] = useState(false);
  const [showRouteLoader, setShowRouteLoader] = useState(false);
  const pathname = usePathname();
  const prevPathRef = useRef<string | null>(null);
  const routeTimerRef = useRef<number | null>(null);
  const hideOverlayTimerRef = useRef<number | null>(null);
  const isMountedRef = useRef(false);

  useEffect(() => {
    isMountedRef.current = true;
    return () => {
      isMountedRef.current = false;
    };
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const isInitialRender = prevPathRef.current === null;
    const hasPathChanged =
      prevPathRef.current !== null && prevPathRef.current !== pathname;
    const isMobile = window.matchMedia("(max-width: 767px)").matches;
    const disableHomePreloader = pathname === "/" && isMobile;
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const clearRouteTimer = () => {
      if (routeTimerRef.current !== null) {
        window.clearTimeout(routeTimerRef.current);
        routeTimerRef.current = null;
      }
    };

    const clearOverlayTimer = () => {
      if (hideOverlayTimerRef.current !== null) {
        window.clearTimeout(hideOverlayTimerRef.current);
        hideOverlayTimerRef.current = null;
      }
    };

    const showRoutePulse = () => {
      clearRouteTimer();
      if (!isMountedRef.current) return;
      setShowRouteLoader(true);
      routeTimerRef.current = window.setTimeout(
        () => {
          if (!isMountedRef.current) return;
          setShowRouteLoader(false);
        },
        reduceMotion ? 220 : 560
      );
    };

    const runEntryOverlay = () => {
      let done = false;
      let canceled = false;
      let minTimer: number | null = null;
      let hardStopTimer: number | null = null;
      const start = performance.now();
      const minDuration = reduceMotion ? 140 : 280;
      const maxDuration = reduceMotion ? 360 : 700;

      clearOverlayTimer();
      if (!isMountedRef.current) return;
      setShowHomeOverlay(true);
      setHomeOverlayVisible(true);

      const finish = () => {
        if (done || canceled) return;
        done = true;
        const elapsed = performance.now() - start;
        const wait = Math.max(0, minDuration - elapsed);

        minTimer = window.setTimeout(() => {
          if (canceled || !isMountedRef.current) return;
          setHomeOverlayVisible(false);
          hideOverlayTimerRef.current = window.setTimeout(
            () => {
              if (!isMountedRef.current) return;
              setShowHomeOverlay(false);
            },
            220
          );
        }, wait);
      };

      const waitForWindowReady = new Promise<void>((resolve) => {
        if (document.readyState === "complete" || document.readyState === "interactive") {
          resolve();
          return;
        }
        const onLoad = () => resolve();
        window.addEventListener("load", onLoad, { once: true });
      });

      const waitForPaint = new Promise<void>((resolve) => {
        requestAnimationFrame(() => {
          requestAnimationFrame(() => resolve());
        });
      });

      Promise.all([waitForWindowReady, waitForPaint]).then(finish);
      hardStopTimer = window.setTimeout(finish, maxDuration);

      return () => {
        canceled = true;
        if (minTimer !== null) window.clearTimeout(minTimer);
        if (hardStopTimer !== null) window.clearTimeout(hardStopTimer);
      };
    };

    let cleanupHome: (() => void) | undefined;

    if (isInitialRender) {
      const seenKey = "mugnee_preloader_seen";
      const hasSeenOverlay = window.sessionStorage.getItem(seenKey) === "1";

      if (disableHomePreloader) {
        window.sessionStorage.setItem(seenKey, "1");
      } else if (hasSeenOverlay) {
        cleanupHome = runEntryOverlay();
      } else {
        window.sessionStorage.setItem(seenKey, "1");
      }
    } else if (hasPathChanged) {
      showRoutePulse();
    }

    prevPathRef.current = pathname;

    return () => {
      if (cleanupHome) cleanupHome();
      clearRouteTimer();
      clearOverlayTimer();
    };
  }, [pathname]);

  return (
    <>
      {showHomeOverlay ? (
        <div
          aria-hidden="true"
          className={[
            "pointer-events-none fixed inset-0 z-[120] grid place-items-center bg-[#070b14]",
            "transition-opacity duration-500",
            homeOverlayVisible ? "opacity-100" : "opacity-0",
          ].join(" ")}
        >
          <div className="preloader-glow preloader-glow-a" />
          <div className="preloader-glow preloader-glow-b" />

          <div className="relative flex flex-col items-center">
            <div className="preloader-ring preloader-ring-lg" />
            <div className="preloader-ring preloader-ring-sm" />

            <div className="relative z-10 rounded-2xl border border-white/15 bg-white/5 px-6 py-4 backdrop-blur">
              <div className="text-center text-[11px] font-bold tracking-[0.28em] text-[#ffb100]">
                MUGNEE IT
              </div>
            </div>

            <div className="mt-5 h-1 w-44 overflow-hidden rounded-full bg-white/10">
              <span className="preloader-bar block h-full rounded-full bg-gradient-to-r from-[#22d3ee] via-[#ffb100] to-[#ec4899]" />
            </div>
          </div>
        </div>
      ) : null}

      <div
        aria-hidden="true"
        className={[
          "pointer-events-none fixed inset-x-0 top-0 z-[121] h-[3px] overflow-hidden transition-opacity duration-200",
          showRouteLoader ? "opacity-100" : "opacity-0",
        ].join(" ")}
      >
        <div className="preloader-route-sweep h-full w-[35%] rounded-r-full bg-gradient-to-r from-[#22d3ee] via-[#ffb100] to-[#ec4899]" />
      </div>
    </>
  );
}
