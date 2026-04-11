import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";

const cases = [
  {
    title: "IT company lead growth",
    desc: "Rebuilt landing + SEO structure for service pages.",
    metric: "+120% qualified leads",
    href: "/projects/renex-digital-website-react-tailwind-seo",
  },
  {
    title: "Speed + Core Web Vitals",
    desc: "Optimized Next.js build and reduced JS payload.",
    metric: "1.2s LCP",
    href: "/projects/mugnee-corporate-profile-design-pack",
  },
  {
    title: "E-commerce conversion uplift",
    desc: "Improved UX + checkout flow and category SEO.",
    metric: "+28% conversion",
    href: "/projects/renex-brand-identity",
  },
];

export default function CaseStudies() {
  return (
    <section className="bg-slate-50 py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Case studies"
          title="Results that prove the work"
          desc="Short, outcome-driven portfolio work that shows what we deliver."
          align="left"
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {cases.map((c) => (
            <a key={c.title} href={c.href} className="block">
              <Card className="bg-white">
                <div className="inline-flex rounded-full border border-blue-200/60 bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
                  {c.metric}
                </div>
                <h3 className="mt-4 text-lg font-extrabold text-slate-900">{c.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{c.desc}</p>
                <p className="mt-6 text-sm font-semibold text-slate-900">View case study →</p>
              </Card>
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}
