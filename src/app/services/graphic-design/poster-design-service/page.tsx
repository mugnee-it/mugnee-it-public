import type { Metadata } from "next";
import GraphicDesignServiceTemplate, {
  buildGraphicDesignServiceMetadata,
} from "../_components/GraphicDesignServiceTemplate";

const CFG = {
  slug: "poster-design-service",
  title: "Poster Design Service",
  description:
    "Poster design service for events, promotions, and brand campaigns with clear messaging and visual impact.",
  heroTag: "PROMOTIONAL POSTER SERVICE",
  intro:
    "Our poster design service delivers bold and readable promotional creatives for events, product campaigns, and local or global marketing.",
  benefits: [
    "Attention-grabbing poster visuals",
    "Strong message hierarchy",
    "Print and digital poster versions",
    "Brand-consistent campaign adaptation",
  ],
  deliverables: [
    "Event and campaign poster design",
    "Print-ready and social-ready exports",
    "Multiple size adaptation",
    "Editable source files on request",
  ],
  process: [
    { title: "Plan", desc: "Set poster objective, audience, and message priority." },
    { title: "Design", desc: "Build composition with visual focus and readability." },
    { title: "Refine", desc: "Improve typography, hierarchy, and branding." },
    { title: "Deliver", desc: "Provide final posters in required formats and sizes." },
  ],
  faqs: [
    {
      q: "Can you design posters for both print and social media?",
      a: "Yes. We provide both print-ready and digital poster variants.",
    },
    {
      q: "Do you support urgent event poster delivery?",
      a: "Yes. Priority delivery is available based on project queue and timeline.",
    },
    {
      q: "Is your poster design service available globally?",
      a: "Yes. We work with global clients using a remote-first workflow.",
    },
  ],
} as const;

export const metadata: Metadata = buildGraphicDesignServiceMetadata(CFG);

export default function PosterDesignServicePage() {
  return <GraphicDesignServiceTemplate cfg={CFG} />;
}
