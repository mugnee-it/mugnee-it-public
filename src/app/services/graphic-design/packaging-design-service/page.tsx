import type { Metadata } from "next";
import GraphicDesignServiceTemplate, {
  buildGraphicDesignServiceMetadata,
} from "../_components/GraphicDesignServiceTemplate";

const CFG = {
  slug: "packaging-design-service",
  title: "Packaging Design Service",
  description:
    "Packaging design service for product brands with shelf-impact visuals and print-ready production files.",
  heroTag: "PRODUCT PACKAGING SERVICE",
  intro:
    "We design product packaging that improves shelf visibility, communicates value clearly, and stays aligned with your brand positioning.",
  benefits: [
    "Shelf-impact packaging concepts",
    "Brand-consistent packaging systems",
    "Print-safe layout and file setup",
    "Variant adaptation support",
  ],
  deliverables: [
    "Front and back packaging layout",
    "Box, pouch, bottle, and label-ready files",
    "CMYK and bleed setup for print",
    "Export assets for manufacturers",
  ],
  process: [
    { title: "Brief", desc: "Collect product details, target market, and packaging specs." },
    { title: "Direction", desc: "Create visual options and hierarchy for messaging." },
    { title: "Pre-press", desc: "Prepare print-safe files with proper bleed and color mode." },
    { title: "Handover", desc: "Deliver organized files with production notes." },
  ],
  faqs: [
    {
      q: "Do you design packaging for multiple product sizes?",
      a: "Yes. We adapt packaging design for size variants while keeping consistency.",
    },
    {
      q: "Can you coordinate with printing vendors?",
      a: "Yes. We provide print-ready files and can support vendor communication.",
    },
    {
      q: "Do you offer packaging design service worldwide?",
      a: "Yes. Our packaging design workflow supports global brands remotely.",
    },
  ],
} as const;

export const metadata: Metadata = buildGraphicDesignServiceMetadata(CFG);

export default function PackagingDesignServicePage() {
  return <GraphicDesignServiceTemplate cfg={CFG} />;
}
