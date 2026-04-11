import type { Metadata } from "next";
import GraphicDesignServiceTemplate, {
  buildGraphicDesignServiceMetadata,
} from "../_components/GraphicDesignServiceTemplate";

const CFG = {
  slug: "banner-design-service",
  title: "Banner Design Service",
  description:
    "Banner design service for websites, campaigns, and paid ads with strong visual hierarchy and conversion-focused messaging.",
  heroTag: "MARKETING BANNER SERVICE",
  intro:
    "We create website and ad banner designs that present offers clearly, maintain brand consistency, and drive better click-through results.",
  benefits: [
    "High-clarity CTA-first layouts",
    "Cross-platform banner sizing",
    "Brand-consistent campaign sets",
    "Fast revisions for active campaigns",
  ],
  deliverables: [
    "Website hero and section banners",
    "Google and Meta ad banner sets",
    "Promo and seasonal banner creatives",
    "Web-optimized export files",
  ],
  process: [
    { title: "Brief", desc: "Define campaign goal, audience, and offer priorities." },
    { title: "Draft", desc: "Create banner concepts with hierarchy and CTA focus." },
    { title: "Optimize", desc: "Refine visuals for readability and engagement." },
    { title: "Export", desc: "Deliver platform-specific banner sizes and files." },
  ],
  faqs: [
    {
      q: "Do you design banner sets for both website and paid ads?",
      a: "Yes. We design complete sets for web banners and paid campaign formats.",
    },
    {
      q: "Can you provide multiple sizes in one package?",
      a: "Yes. We provide multi-size packages based on platform requirements.",
    },
    {
      q: "Is this banner design service suitable for global campaigns?",
      a: "Yes. We support worldwide teams with remote collaboration and quick turnaround.",
    },
  ],
} as const;

export const metadata: Metadata = buildGraphicDesignServiceMetadata(CFG);

export default function BannerDesignServicePage() {
  return <GraphicDesignServiceTemplate cfg={CFG} />;
}
