"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollTop}
      aria-label="Scroll to top"
      className="
        fixed bottom-24 right-5 z-[60]
        grid h-14 w-14 place-items-center rounded-full
        border border-slate-200 bg-white text-slate-900
        shadow-[0_12px_28px_rgba(15,23,42,0.16)]
        transition hover:-translate-y-[1px] hover:bg-yellow-400 hover:text-slate-900
        active:scale-95
      "
    >
      <ArrowUp className="h-5 w-5" />
    </button>
  );
}
