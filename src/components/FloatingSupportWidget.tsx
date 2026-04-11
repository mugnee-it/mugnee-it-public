"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  MessageCircle,
  X,
  MessageSquareText,
  PhoneCall,
  Mail,
  ArrowUpRight,
  CalendarCheck,
} from "lucide-react";
import { withTrailingSlash } from "@/lib/utils";

type Props = {
  whatsappNumber?: string; // "8801958645415"
  messengerUrl?: string; // "https://m.me/yourpage"
  phoneNumber?: string; // "+880 1958-645415"
  email?: string; // "mugnee.it@gmail.com"
  defaultMessage?: string;
};

export default function FloatingChatButton({
  whatsappNumber = "8801958645415",
  messengerUrl = "https://m.me/",
  phoneNumber = "+880 1958-645415",
  email = "mugnee.it%40gmail.com",
  defaultMessage = "Hi Mugnee IT Solutions, I need help with a project.",
}: Props) {
  const [open, setOpen] = useState(false);
  const [showHint, setShowHint] = useState(true);
  const panelRef = useRef<HTMLDivElement | null>(null);

  const emailMailto = email.includes("%40") ? email : email.replace("@", "%40");
  const emailDisplay = emailMailto.replace("%40", " at ");

  const WA_LINK = `https://wa.me/${String(whatsappNumber).replace(
    /\D/g,
    ""
  )}?text=${encodeURIComponent(defaultMessage)}`;

  useEffect(() => {
    const t = window.setTimeout(() => setShowHint(false), 6500);
    return () => window.clearTimeout(t);
  }, []);

  useEffect(() => {
    const onDown = (e: MouseEvent) => {
      if (!open) return;
      const target = e.target as Node;
      if (panelRef.current && !panelRef.current.contains(target)) setOpen(false);
    };
    window.addEventListener("mousedown", onDown);
    return () => window.removeEventListener("mousedown", onDown);
  }, [open]);

  return (
    <div className="fixed bottom-5 right-5 z-[70]">
      <style jsx global>{`
        @keyframes subtle-bounce {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-3px);
          }
        }
      `}</style>
      {/* hint bubble */}
      {showHint && !open && (
        <div className="mb-3 flex justify-end">
          <div className="max-w-[240px] rounded-2xl border border-slate-200 bg-white px-4 py-3 text-xs font-semibold text-slate-700 shadow-lg">
            Need help? Chat with us.
            <button
              className="ml-2 text-slate-400 hover:text-slate-700"
              onClick={() => setShowHint(false)}
              aria-label="Close hint"
              type="button"
            >
              <X className="inline h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      )}

      {/* panel */}
      {open && (
        <div
          ref={panelRef}
          className="absolute bottom-16 right-0 w-[320px] overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl"
        >
          <div className="bg-slate-900 px-5 py-4 text-white">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm font-extrabold">Contact Mugnee IT</div>
                <div className="text-xs font-semibold text-white/80">
                  WhatsApp / Messenger / Call / Email
                </div>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="rounded-full bg-white/10 p-2 hover:bg-white/15"
                aria-label="Close panel"
                type="button"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>

          <div className="p-4">
            <Link
              prefetch={false}
              href={withTrailingSlash("/schedule-consultation")}
              onClick={() => setOpen(false)}
              className="group mb-3 flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 transition hover:bg-slate-50"
            >
              <span className="grid h-11 w-11 place-items-center rounded-2xl bg-yellow-400 text-slate-900">
                <CalendarCheck className="h-5 w-5" />
              </span>
              <span className="flex-1">
                <span className="block text-sm font-extrabold text-slate-900">Free consultation</span>
                <span className="block text-xs font-semibold text-slate-500">Book a call — how it works on the page</span>
              </span>
              <ArrowUpRight className="h-4 w-4 text-slate-300 transition group-hover:text-slate-700" />
            </Link>

            <ActionLink
              href={WA_LINK}
              icon={<MessageSquareText className="h-5 w-5" />}
              title="WhatsApp"
              desc="Fastest reply"
              tone="emerald"
            />

            <ActionLink
              href={messengerUrl}
              icon={<MessageCircle className="h-5 w-5" />}
              title="Messenger"
              desc="Send a message"
              tone="sky"
            />

            <ActionLink
              href={`tel:${phoneNumber.replace(/\s/g, "")}`}
              icon={<PhoneCall className="h-5 w-5" />}
              title="Call"
              desc={phoneNumber}
              tone="amber"
            />

            <ActionLink
              href={`mailto:${emailMailto}`}
              icon={<Mail className="h-5 w-5" />}
              title="Email"
              desc={emailDisplay}
              tone="slate"
            />

            <div className="mt-3 rounded-2xl bg-slate-50 px-4 py-3 text-xs font-semibold text-slate-600">
              Share your website link + goal for faster support.
            </div>
          </div>
        </div>
      )}

      {/* single floating button */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="relative grid h-14 w-14 place-items-center rounded-full bg-yellow-400 text-slate-900 shadow-xl shadow-yellow-500/35 transition hover:bg-yellow-500 active:scale-95"
        aria-label={open ? "Close chat options" : "Open chat options"}
      >
        {/* ✅ guaranteed animation (Tailwind built-in) */}
        {!open && (
          <>
            {/* outer ping ring */}
            <span className="pointer-events-none absolute inset-0 rounded-full animate-ping bg-yellow-400/35" />
            {/* soft pulse glow */}
            <span className="pointer-events-none absolute -inset-2 rounded-full animate-pulse bg-yellow-300/30 blur-lg" />
          </>
        )}

        {/* subtle inner shine always */}
        <span className="pointer-events-none absolute -inset-1 rounded-full bg-yellow-300 opacity-35 blur-md" />

        {open ? (
          <X className="h-6 w-6" />
        ) : (
          <MessageCircle className="h-6 w-6 animate-[subtle-bounce_2.6s_ease-in-out_infinite]" />
        )}
      </button>
    </div>
  );
}

function ActionLink({
  href,
  icon,
  title,
  desc,
  tone,
}: {
  href: string;
  icon: React.ReactNode;
  title: string;
  desc: string;
  tone: "emerald" | "sky" | "amber" | "slate";
}) {
  const toneMap: Record<string, string> = {
    emerald: "bg-emerald-600",
    sky: "bg-sky-600",
    amber: "bg-amber-500",
    slate: "bg-slate-900",
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group mb-3 flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 transition hover:bg-slate-50"
    >
      <span
        className={`grid h-11 w-11 place-items-center rounded-2xl ${toneMap[tone]} text-white`}
      >
        {icon}
      </span>

      <span className="flex-1">
        <span className="block text-sm font-extrabold text-slate-900">
          {title}
        </span>
        <span className="block text-xs font-semibold text-slate-500">
          {desc}
        </span>
      </span>

      <ArrowUpRight className="h-4 w-4 text-slate-300 transition group-hover:text-slate-700" />
    </a>
  );
}


