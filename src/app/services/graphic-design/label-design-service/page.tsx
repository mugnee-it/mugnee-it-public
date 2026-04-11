import type { Metadata } from "next";
import GraphicDesignServiceTemplate, {
  buildGraphicDesignServiceMetadata,
} from "../_components/GraphicDesignServiceTemplate";

const CFG = {
  slug: "label-design-service",
  title: "Label Design Service",
  description:
    "Label design service for FMCG, cosmetics, food, and consumer products with clear compliance-friendly layout.",
  heroTag: "PRODUCT LABEL SERVICE",
  intro:
    "Our label design service creates high-clarity product labels that look premium, follow brand rules, and prepare correctly for print workflows.",
  benefits: [
    "Readable product information hierarchy",
    "Clean and premium visual style",
    "Print-compliant layout planning",
    "Multi-variant label consistency",
  ],
  deliverables: [
    "Primary label design",
    "SKU and variant label adaptation",
    "Barcode and legal info placement support",
    "Final print-ready files",
  ],
  process: [
    { title: "Input", desc: "Collect product data, size specs, and required content." },
    { title: "Design", desc: "Develop clear label concepts with strong readability." },
    { title: "Review", desc: "Revise layout, hierarchy, and final visual alignment." },
    { title: "Delivery", desc: "Deliver production-ready files and exports." },
  ],
  faqs: [
    {
      q: "Can you design labels for different product flavors or variants?",
      a: "Yes. We can create master systems and variant-ready label sets.",
    },
    {
      q: "Do you include barcode and text alignment support?",
      a: "Yes. We structure label areas for barcode and mandatory product details.",
    },
    {
      q: "Is your label design service available for global clients?",
      a: "Yes. We provide label design service worldwide with remote collaboration.",
    },
  ],
} as const;

export const metadata: Metadata = buildGraphicDesignServiceMetadata(CFG);

export default function LabelDesignServicePage() {
  return <GraphicDesignServiceTemplate cfg={CFG} />;
}
