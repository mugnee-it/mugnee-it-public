import type { Metadata } from "next";
import {
  Lock,
  ShieldCheck,
  Users,
  Server,
  BadgeCheck,
} from "lucide-react";
import MernServiceTemplate, {
  buildMetadata,
  type MernServiceConfig,
} from "../_components/MernServiceTemplate";

const SITE_URL = "https://mugneeit.com";

const cfg: MernServiceConfig = {
  siteUrl: SITE_URL,
  pagePath: "/services/mern-stack/auth-rbac/",
  metaTitle: "Authentication & RBAC for MERN Apps",
  ogTitle: "MERN Authentication — Login, JWT, Roles & RBAC",
  metaDescription:
    "Authentication and RBAC setup for MERN apps: secure login, JWT/session patterns, role-based access control, protected routes and safe API guards.",
  heroTitle: "Authentication & RBAC (MERN Apps)",
  heroSubtitle:
    "Secure your MERN application with authentication, protected routes and role-based permissions—designed to reduce risk and keep access controlled.",
  heroImage: "/images/mern-hero.png",
  breadcrumbName: "Auth & RBAC",
  targetKeyword: "MERN Authentication & RBAC",

  highlights: ["JWT / Session", "RBAC Roles", "Protected Routes", "API Guards"],

  deliverables: [
    {
      icon: Lock,
      title: "Secure login system",
      items: ["JWT or session-based auth", "Password & policy guidance", "Optional social login (scope-based)"],
    },
    {
      icon: Users,
      title: "Roles & permissions",
      items: ["Role matrix planning", "Permission-based UI", "Admin-only actions protected"],
    },
    {
      icon: ShieldCheck,
      title: "Security mindset",
      items: ["Validation + guards", "Secure environment config", "Safe error responses"],
    },
  ],

  panels: [
    {
      icon: Server,
      title: "Backend guards",
      desc: "We enforce access control on APIs—not only on frontend routes.",
      bullets: ["Route guards", "Permission checks", "Audit hints (scope-based)"],
    },
    {
      icon: BadgeCheck,
      title: "Production-ready approach",
      desc: "We follow clean patterns to reduce security mistakes and future bugs.",
      bullets: ["Consistent auth flow", "Token handling guidance", "Protected admin operations"],
    },
  ],

  processSteps: [
    { title: "1) Plan", items: ["Roles list", "Permission mapping", "Auth method selection"] },
    { title: "2) Implement", items: ["Login/signup flow", "RBAC guards", "Protected routes"] },
    { title: "3) Verify", items: ["Test roles", "Edge case testing", "Handover guidance"] },
  ],

  faqs: [
    { q: "JWT or session — which is better?", a: "Depends on product needs. JWT works well for APIs; sessions are also great for some apps. We select based on your scope." },
    { q: "Can you build multiple user roles?", a: "Yes. We can implement admin/manager/operator/customer roles with permission checks." },
    { q: "Do you protect both UI and API?", a: "Yes. We protect routes and enforce permission checks on backend APIs as well." },
    { q: "Can you add social login?", a: "Yes (scope-based). Google/Facebook login can be added depending on requirements." },
    { q: "Do you provide security best-practice guidance?", a: "Yes. We provide safe config guidance and handover notes for ongoing maintenance." },
  ],

  backToPillarHref: "/services/mern-stack",
  relatedLinks: [
    { href: "/services/mern-stack/api-development", label: "API Development" },
    { href: "/services/mern-stack/mern-dashboard-admin", label: "Dashboard & Admin Panel" },
    { href: "/services/mern-stack/mern-maintenance", label: "MERN Maintenance" },
  ],
};

export const metadata: Metadata = buildMetadata(cfg);
export default function Page() {
  return <MernServiceTemplate cfg={cfg} />;
}

