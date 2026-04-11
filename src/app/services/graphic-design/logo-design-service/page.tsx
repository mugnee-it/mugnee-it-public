import type { Metadata } from "next";
import GraphicDesignServiceTemplate, {
  buildGraphicDesignServiceMetadata,
} from "../_components/GraphicDesignServiceTemplate";

const CFG = {
  slug: "logo-design-service",
  title: "Logo Design Service",
  description:
    "Professional logo design service for startups and established brands with scalable identity systems.",
  heroTag: "BRAND IDENTITY SERVICE",
  intro:
    "Our logo design service builds memorable brand marks with clear typography, color logic, and usage consistency for digital and print channels.",
  benefits: [
    "Concept-driven logo directions",
    "Typography and color system",
    "Brand consistency across media",
    "Final files for print and web",
  ],
  deliverables: [
    "Primary logo and alternate versions",
    "Color and monochrome formats",
    "Icon and social profile variant",
    "Basic logo usage guide",
  ],
  process: [
    { title: "Research", desc: "Understand brand values, market, and competitors." },
    { title: "Concept", desc: "Develop multiple logo concepts and direction." },
    { title: "Refinement", desc: "Revise chosen concept and finalize system." },
    { title: "Delivery", desc: "Provide organized export and source assets." },
  ],
  faqs: [
    {
      q: "Do you provide source files for logo design?",
      a: "Yes, we provide editable source files and final exports in required formats.",
    },
    {
      q: "Can you redesign an existing logo?",
      a: "Yes. We can modernize existing logos while preserving brand familiarity.",
    },
    {
      q: "Is this logo design service available worldwide?",
      a: "Yes. We work with global clients through a fully remote workflow.",
    },
  ],
} as const;

export const metadata: Metadata = buildGraphicDesignServiceMetadata(CFG);

export default function LogoDesignServicePage() {
  return <GraphicDesignServiceTemplate cfg={CFG} />;
}
