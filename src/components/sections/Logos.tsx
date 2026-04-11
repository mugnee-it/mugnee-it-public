import Container from "@/components/ui/Container";

const logos = [
  "Mugnee Cambodia",
  "Renex",
  "Salvia",
  "Nexen",
  "LEDDISPLAY",
  "Mugnee Service",
];

export default function Logos() {
  return (
    <section className="relative overflow-hidden bg-white py-14 sm:py-16">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-16 top-6 h-44 w-44 rounded-full bg-cyan-100/60 blur-3xl" />
        <div className="absolute -right-16 bottom-6 h-44 w-44 rounded-full bg-amber-100/60 blur-3xl" />
      </div>

      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[11px] font-extrabold uppercase tracking-[0.22em] text-slate-500">
            Trusted Collaborations
          </p>
          <h3 className="mt-3 text-2xl font-extrabold text-slate-900 sm:text-3xl">
            Brands we proudly work with
          </h3>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            Partnership-driven delivery across branding, websites, SEO and digital growth.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {logos.map((l) => (
            <div
              key={l}
              className="group flex min-h-[78px] items-center justify-center rounded-2xl border border-slate-200 bg-gradient-to-b from-white to-slate-50 px-3 text-center text-sm font-extrabold text-slate-700 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-200 hover:shadow-md"
            >
              <span className="transition group-hover:text-slate-900">{l}</span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
