import type { Metadata } from "next";
import {
  LayoutDashboard,
  ShieldCheck,
  Database,
  Users,
  LineChart,
} from "lucide-react";
import MernServiceTemplate, {
  buildMetadata,
  type MernServiceConfig,
} from "../_components/MernServiceTemplate";

const SITE_URL = "https://mugneeit.com";

const cfg: MernServiceConfig = {
  siteUrl: SITE_URL,
  pagePath: "/services/mern-stack/mern-dashboard-admin/",
  metaTitle: "MERN Dashboard & Admin Panel Development",
  ogTitle: "MERN Dashboard Development — Admin Panel, Roles & Reports",
  metaDescription:
    "MERN dashboard and admin panel development with role-based access (RBAC), CRUD modules, reporting, filters and secure backend APIs. Bangladesh + worldwide delivery.",
  heroTitle: "MERN Dashboard & Admin Panel Development",
  heroSubtitle:
    "Build modern dashboards, admin panels and internal portals with role-based permissions, clean UX, reporting-ready structure and secure APIs—designed for growth.",
  heroImage: "/images/mern-hero.png",
  breadcrumbName: "Dashboard & Admin",
  targetKeyword: "MERN Dashboard & Admin Panel Development",

  highlights: ["RBAC Roles", "CRUD Modules", "Reports", "Secure API"],

  deliverables: [
    {
      icon: LayoutDashboard,
      title: "Admin dashboard UI",
      items: ["Clean layout & navigation", "Tables + filters + pagination", "Mobile-friendly structure"],
    },
    {
      icon: ShieldCheck,
      title: "Role-based access (RBAC)",
      items: ["User roles & permissions", "Protected routes", "Secure admin actions"],
    },
    {
      icon: LineChart,
      title: "Reporting-ready modules",
      items: ["KPI cards & charts (scope-based)", "Export guidance (scope-based)", "Data clarity for decisions"],
    },
  ],

  panels: [
    {
      icon: Database,
      title: "Data model planned for scale",
      desc: "We plan collections/tables based on workflow, reporting needs and future features.",
      bullets: ["Clean schema planning", "Indexes basics", "Audit fields (created/updated)"],
    },
    {
      icon: Users,
      title: "User management built-in",
      desc: "Admin can manage users, roles, status and access safely.",
      bullets: ["Create / update / disable", "Role mapping", "Secure policies"],
    },
  ],

  processSteps: [
    { title: "1) Scope", items: ["Modules list", "Roles & permission matrix", "Reports & KPI needs"] },
    { title: "2) Build", items: ["Dashboard UI", "API + validations", "RBAC guards"] },
    { title: "3) QA + Handover", items: ["Test flows", "Admin usage notes", "Deployment support"] },
  ],

  faqs: [
    { q: "Can you build multiple admin roles?", a: "Yes. We can implement super admin, admin, manager, operator roles with permission-based controls." },
    { q: "Do you include CRUD modules?", a: "Yes. We build CRUD modules with filters, search, pagination and safe validation rules." },
    { q: "Can the dashboard include charts?", a: "Yes (scope-based). We can add KPI cards and chart sections depending on reporting data." },
    { q: "Is the dashboard secure?", a: "We apply auth + RBAC, protected routes and safe API validation to reduce risk." },
    { q: "Do you provide documentation?", a: "Yes. We provide admin usage notes and technical handover guidance." },
  ],

  backToPillarHref: "/services/mern-stack",
  relatedLinks: [
    { href: "/services/mern-stack/api-development", label: "API Development" },
    { href: "/services/mern-stack/auth-rbac", label: "Auth & RBAC" },
    { href: "/services/mern-stack/mern-maintenance", label: "MERN Maintenance" },
  ],
};

export const metadata: Metadata = buildMetadata(cfg);
export default function Page() {
  return <MernServiceTemplate cfg={cfg} />;
}

