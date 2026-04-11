import type { Metadata } from "next";
import {
  Wrench,
  Gauge,
  ShieldCheck,
  RefreshCw,
  Headphones,
} from "lucide-react";
import MernServiceTemplate, {
  buildMetadata,
  type MernServiceConfig,
} from "../_components/MernServiceTemplate";

const SITE_URL = "https://mugneeit.com";

const cfg: MernServiceConfig = {
  siteUrl: SITE_URL,
  pagePath: "/services/mern-stack/mern-maintenance/",
  metaTitle: "MERN App Maintenance & Support",
  ogTitle: "MERN Maintenance — Bug Fix, Performance & Support",
  metaDescription:
    "MERN maintenance service for bug fixing, feature improvements, performance tuning, security checks and ongoing support. Stable delivery for Bangladesh + worldwide clients.",
  heroTitle: "MERN Maintenance & Support",
  heroSubtitle:
    "Keep your MERN app stable with bug fixing, improvements, performance tuning and security-minded maintenance—so your system runs smoothly long-term.",
  heroImage: "/images/mern-hero.png",
  breadcrumbName: "Maintenance",
  targetKeyword: "MERN Maintenance Support",

  highlights: ["Bug Fix", "Performance", "Security Checks", "Ongoing Support"],

  deliverables: [
    {
      icon: Wrench,
      title: "Fixes & improvements",
      items: ["Bug fixing", "UI improvements", "Feature updates (scope-based)"],
    },
    {
      icon: Gauge,
      title: "Performance tuning",
      items: ["Query tuning basics", "Cleanup heavy parts", "Speed-focused guidance"],
    },
    {
      icon: ShieldCheck,
      title: "Stability & security",
      items: ["Safe config review", "Auth flow checks", "Validation & error handling review"],
    },
  ],

  panels: [
    {
      icon: RefreshCw,
      title: "Clean maintenance workflow",
      desc: "We diagnose, fix, test and report—so you know exactly what changed.",
      bullets: ["Issue analysis", "Fix + QA", "Change summary"],
    },
    {
      icon: Headphones,
      title: "Support & communication",
      desc: "We keep support structured with clear scope and response flow.",
      bullets: ["Priority handling (scope-based)", "Clear updates", "Post-fix monitoring tips"],
    },
  ],

  processSteps: [
    { title: "1) Diagnose", items: ["Review issue", "Check logs (if available)", "Confirm scope"] },
    { title: "2) Fix + QA", items: ["Apply patch", "Test affected flows", "Prevent regressions"] },
    { title: "3) Report", items: ["Summary of changes", "Next-step advice", "Optional support plan"] },
  ],

  faqs: [
    { q: "Do you offer monthly support?", a: "Yes. Monthly support is available depending on scope and system size." },
    { q: "Can you maintain an existing codebase built by another team?", a: "Yes. We can audit and take over maintenance after reviewing code quality and access." },
    { q: "Do you improve performance?", a: "Yes. We can optimize queries, reduce heavy UI parts and improve API efficiency (scope-based)." },
    { q: "Do you provide deployment help?", a: "Yes. We can help with VPS/Vercel deployment checks and environment updates." },
    { q: "Will you provide a change report?", a: "Yes. We share what was fixed, what was improved and what to monitor next." },
  ],

  backToPillarHref: "/services/mern-stack",
  relatedLinks: [
    { href: "/services/mern-stack/api-development", label: "API Development" },
    { href: "/services/mern-stack/auth-rbac", label: "Auth & RBAC" },
    { href: "/services/mern-stack/mern-dashboard-admin", label: "Dashboard & Admin Panel" },
  ],
};

export const metadata: Metadata = buildMetadata(cfg);
export default function Page() {
  return <MernServiceTemplate cfg={cfg} />;
}

