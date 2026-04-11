import type { Metadata } from "next";
import {
  RefreshCw,
  Headphones,
  ShieldCheck,
  FileCheck2,
  Globe2,
  Lock,
} from "lucide-react";
import WixServiceTemplate, {
  buildMetadata,
  type WixServiceConfig,
} from "../_components/WixServiceTemplate";

const SITE_URL = "https://mugneeit.com";

const cfg: WixServiceConfig = {
  siteUrl: SITE_URL,
  pagePath: "/services/wix/wix-maintenance-support/",
  metaTitle: "Wix Maintenance Support",
  ogTitle: "Wix Maintenance Support — Fix, Update & Keep Stable",
  metaDescription:
    "Wix maintenance support for Bangladesh and worldwide clients. Issue fixing, content updates, layout adjustments, SEO-safe changes and ongoing support to keep your Wix website stable.",
  heroTitle: "Wix Maintenance Support",
  heroSubtitle:
    "Keep your Wix website stable with ongoing support—issue fixing, content updates, layout adjustments and safe improvements (scope-based).",
  heroImage: "/images/wix.webp",
  breadcrumbName: "Maintenance Support",
  targetKeyword: "Wix Maintenance Support",

  highlights: [
    "Issue Fix Support",
    "Content Updates",
    "Layout Adjustments",
    "SEO-safe Changes",
    "Bangladesh + Worldwide",
  ],

  deliverables: [
    {
      icon: RefreshCw,
      title: "Maintenance & updates",
      items: [
        "Content updates (text/images/sections)",
        "Minor layout adjustments (spacing/mobile)",
        "Safe improvements without breaking design",
      ],
    },
    {
      icon: Headphones,
      title: "Support & issue fixing",
      items: [
        "Diagnose common Wix issues",
        "Fix forms/CTA issues (scope-based)",
        "Clear communication + update status",
      ],
    },
    {
      icon: ShieldCheck,
      title: "Stability & quality checks",
      items: [
        "Safe change approach (avoid risky edits)",
        "Quick QA on key pages after fixes",
        "Handover notes so you stay in control",
      ],
    },
  ],

  panels: [
    {
      icon: Lock,
      title: "Safe maintenance approach",
      desc: "We keep changes controlled and avoid anything that can break your live website.",
      bullets: [
        "Controlled edits (no random changes)",
        "Mobile + desktop check after updates",
        "Scope-based support with clear limits",
      ],
    },
    {
      icon: FileCheck2,
      title: "Google-safe fixes (SEO-friendly)",
      desc: "Maintenance is done in a way that keeps your website clean and crawlable.",
      bullets: [
        "No keyword stuffing / spam edits",
        "Preserve headings & page structure",
        "Internal linking guidance (optional)",
      ],
    },
    {
      icon: Globe2,
      title: "Bangladesh + worldwide clients",
      desc: "Remote maintenance support for local and international Wix websites.",
      bullets: [
        "USA / UK / EU clients supported",
        "Timezone-friendly communication",
        "Clear workflow & reporting",
      ],
    },
  ],

  processSteps: [
    {
      title: "1) Review & scope",
      items: [
        "Understand the issue/request",
        "Check affected pages/sections",
        "Confirm scope + priority level",
      ],
    },
    {
      title: "2) Fix & test",
      items: [
        "Apply changes safely",
        "Test key pages (mobile/desktop)",
        "Verify forms/CTA flow (if included)",
      ],
    },
    {
      title: "3) Report & next steps",
      items: [
        "Confirm resolution with screenshots/notes",
        "Share what changed",
        "Recommend next improvements (optional)",
      ],
    },
  ],

  faqs: [
    {
      q: "Do you offer monthly Wix maintenance support?",
      a: "Yes. Monthly maintenance is available based on scope (pages, frequency of updates, and support needs).",
    },
    {
      q: "What tasks are included in Wix maintenance?",
      a: "Common tasks include content updates, small layout fixes, mobile spacing improvements, form/CTA troubleshooting and stability checks (scope-based).",
    },
    {
      q: "Can you fix Wix form, WhatsApp or call button issues?",
      a: "Yes. We can diagnose and fix common CTA/form issues depending on your setup and access scope.",
    },
    {
      q: "Will maintenance affect my SEO?",
      a: "We apply SEO-safe changes and try to preserve page structure (headings, content clarity, internal links). Proper maintenance usually helps stability and UX.",
    },
    {
      q: "Do you support international (USA/UK) clients?",
      a: "Yes. We work with Bangladesh and worldwide clients remotely with clear workflow and updates.",
    },
    {
      q: "How fast can you respond?",
      a: "Response time depends on workload and severity. For urgent issues, share details and priority; we respond as fast as possible (scope-based).",
    },
    {
      q: "Is this a one-time service or ongoing?",
      a: "Both are possible. We can do one-time fixes or ongoing monthly support depending on your needs.",
    },
    {
      q: "Do you also help with Wix SEO updates during maintenance?",
      a: "Yes (optional). We can help keep titles/meta/headings clean, and suggest internal links while doing maintenance tasks.",
    },
  ],

  backToPillarHref: "/services/wix",
  relatedLinks: [
    { href: "/services/wix/wix-speed-optimization", label: "Wix Speed Optimization" },
    { href: "/services/wix/wix-seo-setup", label: "Wix SEO Setup" },
    { href: "/services/wix/wix-redesign", label: "Wix Website Redesign" },
    { href: "/services/wix/wix-studio-development", label: "Wix Studio Development" },
  ],
};

export const metadata: Metadata = buildMetadata(cfg);

export default function Page() {
  return <WixServiceTemplate cfg={cfg} />;
}

