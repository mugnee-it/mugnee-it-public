import type { Metadata } from "next";
import {
  Server,
  Braces,
  ShieldCheck,
  Database,
  Gauge,
} from "lucide-react";
import MernServiceTemplate, {
  buildMetadata,
  type MernServiceConfig,
} from "../_components/MernServiceTemplate";

const SITE_URL = "https://mugneeit.com";

const cfg: MernServiceConfig = {
  siteUrl: SITE_URL,
  pagePath: "/services/mern-stack/api-development/",
  metaTitle: "Node.js & Express API Development",
  ogTitle: "API Development — Node.js, Express & Secure REST APIs",
  metaDescription:
    "API development service using Node.js + Express: secure REST APIs, validation, error handling, clean response structure and database integration (MongoDB/PostgreSQL).",
  heroTitle: "API Development (Node.js + Express)",
  heroSubtitle:
    "Build secure, maintainable REST APIs for web apps, dashboards and integrations—clean structure, validation, and scalable database strategy.",
  heroImage: "/images/mern-hero.png",
  breadcrumbName: "API Development",
  targetKeyword: "API Development Service",

  highlights: ["REST API", "Validation", "DB Integration", "Scalable"],

  deliverables: [
    {
      icon: Server,
      title: "Clean API architecture",
      items: ["Routes / controllers / services", "Consistent response format", "Error handling patterns"],
    },
    {
      icon: ShieldCheck,
      title: "Security & validation",
      items: ["Input validation", "Auth guards (if needed)", "Safe config practices"],
    },
    {
      icon: Database,
      title: "Database integration",
      items: ["MongoDB/PostgreSQL support", "Query tuning basics", "Indexing guidance (scope-based)"],
    },
  ],

  panels: [
    {
      icon: Braces,
      title: "Integration-ready APIs",
      desc: "APIs designed for frontend apps, admin dashboards and 3rd-party integrations.",
      bullets: ["Documentation friendly", "Versioning guidance", "Webhook support (scope-based)"],
    },
    {
      icon: Gauge,
      title: "Performance mindset",
      desc: "We reduce unnecessary payloads and optimize request flow for speed.",
      bullets: ["Pagination", "Selective fields", "Caching advice (optional)"],
    },
  ],

  processSteps: [
    { title: "1) Define", items: ["Endpoints list", "Request/response schema", "Auth rules"] },
    { title: "2) Build", items: ["Implement API", "Validation + errors", "DB integration"] },
    { title: "3) Deliver", items: ["API documentation", "Test guidance", "Deployment support"] },
  ],

  faqs: [
    { q: "Do you build REST APIs only?", a: "Mostly REST. If you need GraphQL, it can be scope-based." },
    { q: "Can you integrate payment gateways or SMS/email?", a: "Yes (scope-based). We can integrate third-party APIs depending on requirements." },
    { q: "Do you provide API documentation?", a: "Yes. We can provide endpoint docs and request/response examples." },
    { q: "Is the API secure?", a: "We apply validation, auth guards (if required) and safe config patterns." },
    { q: "Which database do you support?", a: "MongoDB, PostgreSQL/MySQL, and Firebase depending on the app needs." },
  ],

  backToPillarHref: "/services/mern-stack",
  relatedLinks: [
    { href: "/services/mern-stack/mern-dashboard-admin", label: "Dashboard & Admin Panel" },
    { href: "/services/mern-stack/auth-rbac", label: "Auth & RBAC" },
    { href: "/services/mern-stack/mern-maintenance", label: "MERN Maintenance" },
  ],
};

export const metadata: Metadata = buildMetadata(cfg);
export default function Page() {
  return <MernServiceTemplate cfg={cfg} />;
}

