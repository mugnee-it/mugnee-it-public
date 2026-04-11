import { Section, Container } from "@/components/ui/Section";
import { card } from "@/components/ui/styles";

const SERVICES = [
  { title: "Next.js Web Development", desc: "Fast, SEO-ready websites built for conversions and Core Web Vitals." },
  { title: "MERN Stack Development", desc: "Full-stack web apps with clean architecture and scalable APIs." },
  { title: "SEO Services", desc: "Technical + on-page + content system designed for long-term rankings." },
  { title: "LinkedIn Lead Generation", desc: "Targeted outreach systems to bring B2B leads consistently." },
  { title: "E-commerce (Shopify / WP)", desc: "Conversion-first stores and landing pages that sell." },
  { title: "Video Editing", desc: "Reels, YouTube edits, motion graphics—optimized for engagement." },
];

const TESTIMONIALS = [
  { quote: "Website speed + SEO structure improved massively. Communication was fast and clear.", name: "Client (BD)", role: "Business Owner" },
  { quote: "Delivered clean Next.js work and helped us set up a proper SEO-ready service site.", name: "Client (UK)", role: "Agency Partner" },
  { quote: "Great UI, fast delivery, and the site feels premium. Highly recommended.", name: "Client (USA)", role: "Startup Founder" },
];

const FAQS = [
  { q: "React or Next.js — which is better for an agency site?", a: "Next.js is usually best for SEO + speed + routing. React works too, but needs extra setup." },
  { q: "How fast can you launch the full website?", a: "A standard agency site can be launched in 7–14 days depending on content and sections." },
  { q: "Do you support international clients?", a: "Yes. We work via WhatsApp/Zoom and deliver with clear milestones." },
];

export default function HomeSections() {
  return (
    <>
      {/* SERVICES */}
      <Section>
        <Container>
          <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">Services</p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Everything you need to grow online
          </h2>
          <p className="mt-3 text-slate-600">
            We combine design, development and SEO into one growth-focused system.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s) => (
              <div key={s.title} className={`${card} p-7`}>
                <h3 className="text-lg font-bold text-slate-900">{s.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{s.desc}</p>
                <a className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-slate-900 hover:text-slate-700" href="#">
                  Learn more <span aria-hidden>→</span>
                </a>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* TESTIMONIALS */}
      <Section alt>
        <Container>
          <div className="rounded-3xl bg-white p-8 sm:p-10 shadow-sm ring-1 ring-slate-200/70">
            <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">Testimonials</p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Trusted by clients worldwide
            </h2>
            <p className="mt-3 text-slate-600">
              Add real screenshots and names later—this section is built for trust.
            </p>

            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              {TESTIMONIALS.map((t) => (
                <div key={t.name} className={`${card} p-6`}>
                  <p className="text-sm leading-6 text-slate-600">“{t.quote}”</p>
                  <div className="mt-5 text-sm font-bold text-slate-900">{t.name}</div>
                  <div className="text-xs text-slate-500">{t.role}</div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* FAQ */}
      <Section>
        <Container>
          <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">FAQ</p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Common questions
          </h2>

          <div className="mt-8 space-y-3">
            {FAQS.map((x) => (
              <details key={x.q} className="group rounded-2xl bg-slate-50 p-6 ring-1 ring-slate-200/70">
                <summary className="cursor-pointer list-none text-sm font-semibold text-slate-900">
                  {x.q}
                  <span className="float-right text-slate-500 transition group-open:rotate-180">▼</span>
                </summary>
                <p className="mt-3 text-sm text-slate-600">{x.a}</p>
              </details>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
