import Image from "next/image";

type StackItem = {
  name: string;
  logo: string;
  size: { w: number; h: number };
  tone?: "dark" | "color";
};

export default function TrustedBrandsFull() {
  const stack: StackItem[] = [
    { name: "MongoDB", logo: "/tech/mongodb.svg", size: { w: 110, h: 28 } },
    { name: "PostgreSQL", logo: "/tech/postgresql.svg", size: { w: 120, h: 30 } },
    { name: "Supabase", logo: "/tech/supabase.svg", size: { w: 110, h: 28 } },
    { name: "React", logo: "/tech/react.svg", size: { w: 98, h: 28 } },
    { name: "Next.js", logo: "/tech/nextdotjs.svg", size: { w: 110, h: 28 }, tone: "dark" },
    { name: "WordPress", logo: "/tech/wordpress.svg", size: { w: 125, h: 30 } },
    { name: "Shopify", logo: "/tech/shopify.svg", size: { w: 110, h: 30 } },
    { name: "Wix", logo: "/tech/wix.svg", size: { w: 72, h: 28 } },
    { name: "Premiere Pro", logo: "/tech/premierepro.svg", size: { w: 40, h: 40 }, tone: "color" },
    { name: "After Effects", logo: "/tech/aftereffects.svg", size: { w: 40, h: 40 }, tone: "color" },
  ];

  const items = [...stack, ...stack];

  return (
    <section className="relative overflow-x-hidden bg-white py-12 sm:py-14">
      <div className="px-4">
        <div className="relative mx-auto max-w-6xl">
          <div className="h-px w-full bg-slate-200" />
          <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
            <span className="rounded-full border border-slate-200 bg-white px-4 py-1 text-[11px] font-extrabold tracking-[0.28em] text-slate-800">
              ECOSYSTEM EXPERIENCE
            </span>
          </div>
        </div>
      </div>

      <div className="mt-10 w-full">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-white to-transparent" />

        <div className="relative overflow-hidden">
          <div className="partners-marquee-track flex w-max items-center gap-8 px-6 py-2">
            {items.map((it, idx) => (
              <StackChip key={`${it.name}-${idx}`} item={it} />
            ))}
          </div>
        </div>
      </div>

      <div className="mt-6 px-4">
        <div className="mx-auto max-w-6xl text-center text-sm text-slate-600">
          Delivery across modern web stacks, CMS, commerce platforms and creative tooling — chosen per project needs.
        </div>
      </div>
    </section>
  );
}

function StackChip({ item }: { item: StackItem }) {
  return (
    <div className="inline-flex">
      <div className="group relative flex h-[72px] items-center gap-5 rounded-3xl bg-white px-7 shadow-[0_18px_48px_rgba(15,23,42,0.08)] ring-1 ring-slate-200/90 transition hover:-translate-y-0.5 hover:shadow-[0_26px_70px_rgba(15,23,42,0.12)]">
        <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <div className="absolute -left-14 -top-14 h-40 w-40 rounded-full bg-yellow-200/60 blur-2xl" />
          <div className="absolute -right-14 -bottom-14 h-40 w-40 rounded-full bg-sky-200/50 blur-2xl" />
        </div>

        <Image
          src={item.logo}
          alt={`${item.name} logo`}
          width={item.size.w}
          height={item.size.h}
          className={[
            "relative h-9 w-auto object-contain",
            item.tone === "color" ? "opacity-95" : "opacity-85 grayscale-[0.15]",
            "transition duration-200 group-hover:opacity-100 group-hover:grayscale-0",
          ].join(" ")}
          loading="lazy"
          decoding="async"
        />
        <div className="relative">
          <div className="text-sm font-extrabold text-slate-900">{item.name}</div>
          <div className="mt-1 text-[11px] font-semibold text-slate-500">
            Used in delivery workflows
          </div>
        </div>
      </div>
    </div>
  );
}