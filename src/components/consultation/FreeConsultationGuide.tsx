import Link from "next/link";
import {
  CalendarCheck,
  CheckCircle2,
  ClipboardList,
  Headphones,
  HelpCircle,
  Mail,
  MessageSquare,
  Sparkles,
  Video,
} from "lucide-react";
import { withTrailingSlash } from "@/lib/utils";

export function ConsultationPageHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-[#0b1020] px-4 py-14 text-white sm:py-16">
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-yellow-400/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-sky-500/15 blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-6xl">
        <p className="text-xs font-extrabold tracking-[0.28em] text-yellow-400/90">
          NO OBLIGATION · INTRO CALL
        </p>
        <h1 className="mt-4 max-w-3xl text-3xl font-extrabold leading-tight sm:text-4xl md:text-[2.65rem] md:leading-[1.08]">
          Free consultation — how it works, start to finish
        </h1>
        <p className="mt-4 max-w-2xl text-sm leading-7 text-white/80 sm:text-base">
          Book a slot, tell us your goal, and join a focused call (usually 20–30 minutes). We clarify
          scope, suggest a realistic path, and you decide if you want a written proposal or quote next.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#book-consultation"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-yellow-400 px-6 py-3 text-sm font-extrabold text-slate-900 shadow-lg shadow-yellow-500/25 transition hover:bg-yellow-300"
          >
            <CalendarCheck className="h-4 w-4" aria-hidden />
            Fill the booking form
          </a>
          <Link
            prefetch={false}
            href={withTrailingSlash("/contact")}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/5 px-6 py-3 text-sm font-extrabold text-white transition hover:bg-white/10"
          >
            General contact instead
          </Link>
        </div>
      </div>
    </section>
  );
}

const STEPS = [
  {
    n: 1,
    title: "You submit the form below",
    body:
      "Share your name, email, phone, preferred date & time, how you want to meet (Meet / Zoom / WhatsApp / phone), and what you want to discuss. That is enough for us to prepare.",
    icon: ClipboardList,
  },
  {
    n: 2,
    title: "We confirm by email or WhatsApp",
    body:
      "We usually respond within 24 hours on business days. If your slot needs adjusting for timezone or availability, we propose 1–2 alternatives so you do not wait in the dark.",
    icon: Mail,
  },
  {
    n: 3,
    title: "Join the call at the agreed time",
    body:
      "Use the link or number we send. Calls are typically 20–30 minutes: we ask clarifying questions, you share constraints (timeline, budget ballpark, who decides).",
    icon: Video,
  },
  {
    n: 4,
    title: "We align on scope and next steps",
    body:
      "You get a clear picture of what we recommend (e.g. website vs app vs SEO vs automation), rough phases, and what we would need from you if you move forward.",
    icon: Headphones,
  },
  {
    n: 5,
    title: "Optional: proposal or quote",
    body:
      "If you want to proceed, we can follow up with a short written summary, milestone plan, and pricing range — only after you ask; the intro call itself stays free and no-pressure.",
    icon: Sparkles,
  },
] as const;

export function ConsultationHowItWorks() {
  return (
    <section className="border-b border-slate-200 bg-white px-4 py-12 sm:py-14" aria-labelledby="how-it-works-title">
      <div className="mx-auto max-w-6xl">
        <h2 id="how-it-works-title" className="text-2xl font-extrabold text-slate-900 sm:text-3xl">
          Step by step: what happens after you click
        </h2>
        <p className="mt-2 max-w-2xl text-sm leading-7 text-slate-600">
          Same flow many agencies use — spelled out here so you know exactly what to expect.
        </p>
        <ol className="mt-10 space-y-6">
          {STEPS.map(({ n, title, body, icon: Icon }) => (
            <li
              key={n}
              className="flex gap-4 rounded-3xl border border-slate-200 bg-slate-50/80 p-5 sm:gap-5 sm:p-6"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-yellow-400 text-slate-900 shadow-sm">
                <Icon className="h-5 w-5" aria-hidden />
              </div>
              <div className="min-w-0">
                <div className="flex flex-wrap items-baseline gap-2">
                  <span className="text-xs font-extrabold tracking-wider text-slate-500">STEP {n}</span>
                  <h3 className="text-base font-extrabold text-slate-900 sm:text-lg">{title}</h3>
                </div>
                <p className="mt-2 text-sm leading-7 text-slate-600">{body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

const PREPARE = [
  "Business or project name, and your role (founder, marketing, IT, etc.)",
  "If you have a website or product link, share it — we review before the call when possible",
  "Main goal in one line (e.g. “new corporate site in 8 weeks” or “fix slow WooCommerce”)",
  "Rough timeline and whether a deadline is fixed (launch date, campaign, etc.)",
  "Budget ballpark or range — helps us suggest realistic options without back-and-forth",
  "Anyone else who should join the call (decision-maker, designer, developer)",
] as const;

const FAQ = [
  {
    q: "Is the consultation really free?",
    a: "Yes. The first intro call to understand your needs and outline direction is free. Detailed specs, formal quotes, or long audits may be scoped separately if you want them.",
  },
  {
    q: "What if I am not in Bangladesh?",
    a: "We work BD + global clients. We schedule in your timezone where possible and use Google Meet, Zoom, or WhatsApp as you prefer.",
  },
  {
    q: "Do I need a technical brief ready?",
    a: "No. A short description of the problem and goal is enough. We ask questions during the call to fill gaps.",
  },
  {
    q: "Can we sign an NDA before sharing details?",
    a: "Yes. Mention it in the form or on the call — we can use a simple mutual NDA before deeper discussions.",
  },
] as const;

export function ConsultationPrepareAndFaq() {
  return (
    <section className="bg-slate-50 px-4 py-12 sm:py-14">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2 lg:gap-12">
        <div>
          <h2 className="text-xl font-extrabold text-slate-900 sm:text-2xl">What to prepare (5 minutes)</h2>
          <p className="mt-2 text-sm leading-7 text-slate-600">
            Optional but recommended — makes the call efficient and actionable.
          </p>
          <ul className="mt-6 space-y-3">
            {PREPARE.map((line) => (
              <li key={line} className="flex gap-3 text-sm leading-7 text-slate-700">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" aria-hidden />
                <span>{line}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="flex items-center gap-2 text-xl font-extrabold text-slate-900 sm:text-2xl">
            <HelpCircle className="h-6 w-6 text-slate-700" aria-hidden />
            Common questions
          </h2>
          <div className="mt-6 space-y-3">
            {FAQ.map(({ q, a }) => (
              <details
                key={q}
                className="group rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm open:shadow-md"
              >
                <summary className="cursor-pointer list-none text-sm font-extrabold text-slate-900 [&::-webkit-details-marker]:hidden">
                  <span className="flex items-center justify-between gap-2">
                    {q}
                    <span className="text-slate-400 transition group-open:rotate-180">▼</span>
                  </span>
                </summary>
                <p className="mt-3 border-t border-slate-100 pt-3 text-sm leading-7 text-slate-600">{a}</p>
              </details>
            ))}
          </div>
          <div className="mt-8 flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
            <MessageSquare className="mt-0.5 h-5 w-5 shrink-0 text-slate-700" aria-hidden />
            <p className="text-sm leading-7 text-slate-600">
              After the call, we normally send a short recap (what we understood + suggested next steps) by email
              or WhatsApp so you have it in writing.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
