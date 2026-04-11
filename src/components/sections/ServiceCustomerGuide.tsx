import PillarIllustration from "@/components/services/PillarIllustration";
import type { ServicePillarKey } from "@/components/services/servicePillarTypes";
import { getServiceGuide } from "@/components/services/serviceGuideContent";
import {
  BadgeCheck,
  LayoutList,
  Lightbulb,
  Palette,
  Sparkles,
  Workflow,
  type LucideIcon,
} from "lucide-react";

type Props = {
  pillar: ServicePillarKey;
  contextLabel?: string;
};

const stepIcons: LucideIcon[] = [Lightbulb, Workflow, BadgeCheck];

export function ServiceCustomerGuide({ pillar, contextLabel }: Props) {
  const guide = getServiceGuide(pillar, contextLabel);

  return (
    <section
      className="relative scroll-mt-24 overflow-hidden border-y border-slate-200/80 bg-slate-50"
      aria-labelledby={`customer-guide-${pillar}`}
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-0 h-[420px] w-[420px] rounded-full bg-gradient-to-br from-violet-300/45 via-fuchsia-200/25 to-transparent blur-3xl" />
        <div className="absolute -right-24 bottom-0 h-[380px] w-[380px] rounded-full bg-gradient-to-bl from-amber-300/40 via-yellow-200/20 to-transparent blur-3xl" />
        <div className="absolute left-1/2 top-1/2 h-[280px] w-[min(100%,720px)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-200/20 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.55] [background-image:radial-gradient(circle_at_1px_1px,rgba(99,102,241,0.11)_1px,transparent_0)] [background-size:28px_28px]"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.92)_0%,rgba(248,250,252,0.4)_45%,rgba(255,255,255,0.85)_100%)]"
          aria-hidden
        />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 py-14 sm:py-16">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="inline-flex items-center gap-2 rounded-full border border-violet-200/80 bg-white/90 px-4 py-2 text-[11px] font-extrabold tracking-[0.2em] text-violet-700 shadow-sm backdrop-blur">
            <Sparkles className="h-3.5 w-3.5 text-amber-500" aria-hidden />
            VISUAL GUIDE
          </div>
          <nav
            className="flex gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            aria-label="This service at a glance"
          >
            <a
              href={`#customer-guide-plain-${pillar}`}
              className="group inline-flex shrink-0 items-center gap-2 rounded-full border border-slate-200/90 bg-white/95 px-4 py-2.5 text-xs font-extrabold text-slate-700 shadow-md shadow-slate-900/5 ring-1 ring-white/80 transition hover:border-violet-300 hover:shadow-lg hover:shadow-violet-500/10"
            >
              <LayoutList className="h-3.5 w-3.5 text-violet-500 transition group-hover:scale-110" />
              Simple summary
            </a>
            <a
              href={`#customer-guide-visual-${pillar}`}
              className="group inline-flex shrink-0 items-center gap-2 rounded-full border border-slate-200/90 bg-white/95 px-4 py-2.5 text-xs font-extrabold text-slate-700 shadow-md shadow-slate-900/5 ring-1 ring-white/80 transition hover:border-amber-300 hover:shadow-lg hover:shadow-amber-500/10"
            >
              <Palette className="h-3.5 w-3.5 text-amber-500 transition group-hover:scale-110" />
              Visual overview
            </a>
          </nav>
        </div>

        <div id={`customer-guide-plain-${pillar}`} className="scroll-mt-28 pt-6">
          <p className="text-xs font-extrabold tracking-[0.28em] text-violet-600/90">FOR YOUR CUSTOMERS</p>
          <h2
            id={`customer-guide-${pillar}`}
            className="mt-3 max-w-3xl text-balance text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl"
          >
            How this service works —{" "}
            <span className="bg-gradient-to-r from-violet-600 via-fuchsia-600 to-amber-500 bg-clip-text text-transparent">
              plain & visual
            </span>
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">
            Three quick steps anyone can follow, then a diagram that shows the moving parts—before the long read below.
          </p>

          <div className="relative mt-12 grid gap-6 md:grid-cols-3">
            <div
              className="pointer-events-none absolute left-[16%] right-[16%] top-11 hidden h-0.5 bg-gradient-to-r from-transparent via-violet-300 to-transparent md:block"
              aria-hidden
            />
            {guide.steps.map((s, i) => {
              const Icon = stepIcons[i] ?? Sparkles;
              return (
                <div key={s.title} className="relative">
                  <div
                    className={[
                      "relative h-full rounded-[1.35rem] p-[1px] shadow-[0_20px_50px_-12px_rgba(15,23,42,0.12)]",
                      "bg-gradient-to-br from-violet-200/90 via-white to-amber-200/70",
                    ].join(" ")}
                  >
                    <div className="flex h-full flex-col rounded-[1.3rem] border border-white/80 bg-white/95 p-6 backdrop-blur-sm">
                      <div className="flex items-start justify-between gap-3">
                        <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-violet-600 to-indigo-600 text-white shadow-lg shadow-violet-500/30">
                          <Icon className="h-5 w-5" strokeWidth={2.2} />
                        </div>
                        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-slate-900 text-sm font-black text-amber-300 ring-4 ring-amber-400/20">
                          {i + 1}
                        </span>
                      </div>
                      <h3 className="mt-5 text-lg font-extrabold text-slate-900">{s.title}</h3>
                      <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{s.body}</p>
                      <div
                        className="mt-5 h-1 w-12 rounded-full bg-gradient-to-r from-violet-500 to-amber-400"
                        aria-hidden
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div id={`customer-guide-visual-${pillar}`} className="scroll-mt-28 mt-16">
          <div className="relative overflow-hidden rounded-[2rem] border border-slate-800/80 bg-slate-950 shadow-[0_32px_80px_-16px_rgba(15,23,42,0.45)] ring-1 ring-white/10">
            <div
              className="pointer-events-none absolute inset-x-0 top-0 z-10 h-px bg-gradient-to-r from-transparent via-violet-400/70 to-transparent"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_80%_at_20%_0%,rgba(139,92,246,0.35),transparent_50%),radial-gradient(ellipse_70%_60%_at_90%_100%,rgba(251,191,36,0.22),transparent_45%)]"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.35] [background-image:radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.07)_1px,transparent_0)] [background-size:20px_20px]"
              aria-hidden
            />
            <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-violet-500/20 blur-3xl" aria-hidden />
            <div className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-amber-400/15 blur-3xl" aria-hidden />

            <div className="relative grid gap-10 p-6 sm:p-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] lg:items-center lg:gap-12">
              <div>
                <p className="text-[11px] font-extrabold tracking-[0.25em] text-violet-300/90">DIAGRAM</p>
                <h3 className="mt-2 text-2xl font-extrabold leading-tight text-white sm:text-3xl">
                  {guide.visualTitle}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-white/75 sm:text-base">{guide.visualCaption}</p>
                <div className="mt-8 flex flex-wrap gap-2">
                  {["Scope", "Delivery", "Quality"].map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-white/85 backdrop-blur"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div
                  className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-violet-500/40 via-transparent to-amber-400/30 opacity-80 blur-sm"
                  aria-hidden
                />
                <div className="relative overflow-hidden rounded-2xl border border-white/20 bg-white p-4 shadow-2xl shadow-black/25 sm:p-6">
                  <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-violet-50/50"
                    aria-hidden
                  />
                  <div className="relative">
                    <PillarIllustration pillar={pillar} className="mx-auto w-full max-w-xl sm:max-w-2xl" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
