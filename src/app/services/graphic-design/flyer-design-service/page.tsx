import type { Metadata } from "next";
import GraphicDesignServiceTemplate, {
  buildGraphicDesignServiceMetadata,
} from "../_components/GraphicDesignServiceTemplate";

const CFG = {
  slug: "flyer-design-service",
  title: "Flyer Design Service",
  description:
    "Flyer design service for business promotion, product offers, and local campaign communication with clean conversion-focused layout.",
  heroTag: "PROMOTIONAL FLYER SERVICE",
  intro:
    "We design high-converting flyers for business promotions, product offers, and events with clear structure and strong brand presence.",
  benefits: [
    "Offer-focused flyer layout",
    "Readable typography and spacing",
    "Print-ready and web-ready delivery",
    "Single-page and bi-fold options",
  ],
  deliverables: [
    "Business and offer flyer concepts",
    "Front and back flyer layout",
    "Print-ready files with bleed",
    "Web and social distribution versions",
  ],
  process: [
    { title: "Brief", desc: "Collect service offer, audience, and key message." },
    { title: "Layout", desc: "Create flyer composition and visual hierarchy." },
    { title: "Review", desc: "Refine copy flow, CTA, and branding details." },
    { title: "Handover", desc: "Deliver final print and digital flyer exports." },
  ],
  faqs: [
    {
      q: "Can you design flyers for local business promotions?",
      a: "Yes. We design flyers for local campaigns, services, and event promotions.",
    },
    {
      q: "Do you provide bi-fold or multi-panel flyer design?",
      a: "Yes. We can design standard flyers, bi-folds, and other formats as needed.",
    },
    {
      q: "Is this flyer design service available worldwide?",
      a: "Yes. We provide flyer design services for international clients remotely.",
    },
  ],
} as const;

export const metadata: Metadata = buildGraphicDesignServiceMetadata(CFG);

export default function FlyerDesignServicePage() {
  return <GraphicDesignServiceTemplate cfg={CFG} />;
}
