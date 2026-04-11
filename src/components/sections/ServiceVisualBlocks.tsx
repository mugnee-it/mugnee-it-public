import type { LucideIcon } from "lucide-react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export { ServiceCustomerGuide } from "./ServiceCustomerGuide";

export type ServiceVisualItem = {
  icon: LucideIcon;
  title: string;
  desc: string;
  pills?: string[];
};

export type ServiceFlowItem = {
  title: string;
  desc: string;
  icon?: LucideIcon;
};

export function ServiceQuickSummary({
  eyebrow = "AT A GLANCE",
  title,
  intro,
  items,
}: {
  eyebrow?: string;
  title: string;
  intro: string;
  items: ServiceVisualItem[];
}) {
  return (
    <section className="mx-auto max-w-6xl px-4 py-10">
      <div className="rounded-[2rem] bg-white p-6 shadow-[0_16px_44px_rgba(15,23,42,0.06)] ring-1 ring-slate-200 sm:p-8">
        <p className="text-xs font-extrabold tracking-[0.24em] text-slate-500">{eyebrow}</p>
        <h2 className="mt-2 text-2xl font-extrabold text-slate-900 sm:text-3xl">{title}</h2>
        <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600">{intro}</p>

        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {items.map((item) => (
            <article
              key={item.title}
              className="rounded-3xl bg-slate-50 p-5 shadow-[0_8px_24px_rgba(15,23,42,0.04)] ring-1 ring-slate-200"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-yellow-100 via-white to-cyan-100 text-slate-900 shadow-sm ring-1 ring-white">
                <item.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-base font-extrabold text-slate-900">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{item.desc}</p>
              {item.pills?.length ? (
                <div className="mt-4 flex flex-wrap gap-2">
                  {item.pills.map((pill) => (
                    <span
                      key={pill}
                      className="rounded-full bg-white px-3 py-1 text-[11px] font-extrabold text-slate-600 ring-1 ring-slate-200"
                    >
                      {pill}
                    </span>
                  ))}
                </div>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ServiceUseCasesGrid({
  eyebrow = "BEST FIT",
  title,
  intro,
  items,
}: {
  eyebrow?: string;
  title: string;
  intro: string;
  items: ServiceVisualItem[];
}) {
  return (
    <section className="mx-auto max-w-6xl px-4 pb-10">
      <div className="rounded-[2rem] bg-slate-50 p-6 ring-1 ring-slate-200 sm:p-8">
        <p className="text-xs font-extrabold tracking-[0.24em] text-slate-500">{eyebrow}</p>
        <h2 className="mt-2 text-2xl font-extrabold text-slate-900 sm:text-3xl">{title}</h2>
        <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600">{intro}</p>

        <div className="mt-6 grid gap-4 lg:grid-cols-3">
          {items.map((item) => (
            <article key={item.title} className="rounded-3xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-start gap-4">
                <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-yellow-50 text-slate-900 ring-1 ring-yellow-200">
                  <item.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-base font-extrabold text-slate-900">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{item.desc}</p>
                  {item.pills?.length ? (
                    <ul className="mt-3 space-y-2">
                      {item.pills.map((pill) => (
                        <li key={pill} className="flex items-start gap-2 text-sm text-slate-700">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-600" />
                          <span>{pill}</span>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ServiceFlowStrip({
  eyebrow = "HOW IT WORKS",
  title,
  intro,
  steps,
}: {
  eyebrow?: string;
  title: string;
  intro: string;
  steps: ServiceFlowItem[];
}) {
  return (
    <section className="mx-auto max-w-6xl px-4 pb-12">
      <div className="rounded-[2rem] bg-white p-6 shadow-[0_16px_44px_rgba(15,23,42,0.06)] ring-1 ring-slate-200 sm:p-8">
        <p className="text-xs font-extrabold tracking-[0.24em] text-slate-500">{eyebrow}</p>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="mt-2 text-2xl font-extrabold text-slate-900 sm:text-3xl">{title}</h2>
            <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600">{intro}</p>
          </div>
        </div>

        <div className="mt-6 grid gap-4 lg:grid-cols-4">
          {steps.map((step, index) => (
            <article key={`${index}-${step.title}`} className="rounded-3xl bg-slate-50 p-5 ring-1 ring-slate-200">
              <div className="flex items-center justify-between">
                <span className="text-xs font-extrabold tracking-[0.25em] text-slate-400">
                  {(index + 1).toString().padStart(2, "0")}
                </span>
                {step.icon ? (
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-white text-slate-900 ring-1 ring-slate-200">
                    <step.icon className="h-5 w-5" />
                  </span>
                ) : (
                  <ArrowRight className="h-5 w-5 text-slate-300" />
                )}
              </div>
              <h3 className="mt-4 text-base font-extrabold text-slate-900">{step.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{step.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
