import type { ServicePillarKey } from "./servicePillarTypes";

export type GuideStep = { title: string; body: string };

export type ServiceGuideBundle = {
  steps: GuideStep[];
  visualTitle: string;
  visualCaption: string;
};

const bundles: Record<ServicePillarKey, ServiceGuideBundle> = {
  nextjs: {
    steps: [
      {
        title: "You share goals",
        body: "Pages you need, brand assets, SEO priorities, and whether you need a CMS or store.",
      },
      {
        title: "We architect the site",
        body: "Next.js structure, components, metadata, performance plan, and launch checklist.",
      },
      {
        title: "Launch + handover",
        body: "Deploy (e.g. Vercel/VPS), domain/SSL, and guidance so your team can extend safely.",
      },
    ],
    visualTitle: "How a Next.js site is structured",
    visualCaption:
      "Server-ready React, clean routes, and SEO-friendly pages—one codebase for marketing sites and light apps.",
  },
  frontend: {
    steps: [
      {
        title: "Design or reference",
        body: "Figma files, brand rules, or examples of UI you want matched.",
      },
      {
        title: "We build the UI layer",
        body: "React components, responsive layouts, states, forms, and API wiring as scoped.",
      },
      {
        title: "Performance + QA pass",
        body: "CWV-minded tweaks, cross-browser checks, and tidy handover for your backend team.",
      },
    ],
    visualTitle: "Frontend sits where users click",
    visualCaption:
      "We focus on the visible product: fast, consistent UI that plugs into your APIs or Next.js/MERN backend.",
  },
  mern: {
    steps: [
      {
        title: "Product & data model",
        body: "Users, roles, entities, integrations, and what “done” means for v1.",
      },
      {
        title: "API + dashboard build",
        body: "MongoDB/Postgres choice, Express APIs, React admin or client UI—in milestones.",
      },
      {
        title: "Deploy & stabilize",
        body: "Hosting, envs, auth hardening, monitoring basics, and support options.",
      },
    ],
    visualTitle: "Full-stack flow (typical MERN shape)",
    visualCaption:
      "Browser UI talks to Node APIs and your database—same language end-to-end for faster delivery.",
  },
  wordpress: {
    steps: [
      {
        title: "Site map & content",
        body: "Pages, forms, blog, WooCommerce (if any), and who will edit text later.",
      },
      {
        title: "Build + speed + SEO base",
        body: "Theme/build, mobile layout, security hardening, and technical SEO setup.",
      },
      {
        title: "Training + support",
        body: "Editor walkthrough, backups/update plan, and a clear support channel.",
      },
    ],
    visualTitle: "WordPress: content + engine",
    visualCaption:
      "Editor-friendly CMS with themes/plugins chosen for speed, security, and your business model.",
  },
  shopify: {
    steps: [
      {
        title: "Store goals",
        body: "Catalog size, markets, payments, shipping, and apps you already use.",
      },
      {
        title: "Theme + conversion UX",
        body: "Storefront, collections, PDP, checkout friction checks, and brand polish.",
      },
      {
        title: "Launch checklist",
        body: "DNS, pixels, basic SEO, speed pass, and handover for day-to-day operations.",
      },
    ],
    visualTitle: "Shopify: storefront to checkout",
    visualCaption:
      "Product data, cart, and payments in one platform—we customize the experience your buyers see.",
  },
  wix: {
    steps: [
      {
        title: "Sections & story",
        body: "Services, portfolio, lead forms, booking—what each page must achieve.",
      },
      {
        title: "Studio build",
        body: "Layout, mobile spacing, animations, and SEO-ready sections.",
      },
      {
        title: "Go live + care",
        body: "Domain connect, form tests, and optional maintenance for updates.",
      },
    ],
    visualTitle: "Wix: fast business sites",
    visualCaption:
      "Great when you want a polished marketing site with editor control and fewer moving parts.",
  },
  seo: {
    steps: [
      {
        title: "Audit + roadmap",
        body: "Technical health, content gaps, competitors, and realistic timelines.",
      },
      {
        title: "Fix + optimize",
        body: "On-page, internal links, technical cleanup, and new pages where they earn traffic.",
      },
      {
        title: "Report + iterate",
        body: "Monthly KPIs, what changed, and the next priorities—no black box.",
      },
    ],
    visualTitle: "SEO: site → Google → customers",
    visualCaption:
      "Technical foundation plus intent-led content so search engines and humans both understand your pages.",
  },
  "lead-generation": {
    steps: [
      {
        title: "Offer & audience",
        body: "What you sell, ICP, budget band, and which channel fits first.",
      },
      {
        title: "Funnel + tracking",
        body: "Landing page, forms, pixels/UTMs, and lead quality rules.",
      },
      {
        title: "Optimize weekly",
        body: "CPL/CVR focus, creative tests, and CRM-ready handoff.",
      },
    ],
    visualTitle: "Lead engine (simplified)",
    visualCaption:
      "Traffic meets a focused page; every step is measured so we improve numbers—not guesses.",
  },
  "linkedin-setter": {
    steps: [
      {
        title: "ICP & messaging",
        body: "Industries, titles, locations, and scripts that sound human.",
      },
      {
        title: "Daily execution",
        body: "Connections, follow-ups, replies, and qualification notes.",
      },
      {
        title: "Meetings + reporting",
        body: "Booked calls on your calendar with context; weekly KPI review.",
      },
    ],
    visualTitle: "B2B pipeline on LinkedIn",
    visualCaption:
      "Targeted outreach with safe limits—built for replies and booked meetings, not spam volume.",
  },
  "video-editing": {
    steps: [
      {
        title: "Brief & assets",
        body: "Goal, length, style references, logos, and raw footage/links.",
      },
      {
        title: "Edit + revisions",
        body: "Cut, pacing, captions, sound, color pass—within agreed rounds.",
      },
      {
        title: "Delivery specs",
        body: "YouTube, reels, ads—exported in the formats you actually publish.",
      },
    ],
    visualTitle: "From raw clips to publish-ready",
    visualCaption:
      "Story-first editing: hooks, retention, and clean audio so your content looks professional everywhere.",
  },
  "graphic-design": {
    steps: [
      {
        title: "Brand inputs",
        body: "Audience, competitors, must-have elements, and where designs will be used.",
      },
      {
        title: "Concepts + refine",
        body: "Direction lock, revisions within scope, and file prep.",
      },
      {
        title: "Handoff",
        body: "Print/web-ready exports plus simple usage notes for your team.",
      },
    ],
    visualTitle: "Design outputs in context",
    visualCaption:
      "Logos, packaging, social, print—built to real sizes and platforms, not random pretty pictures.",
  },
  "software-solution": {
    steps: [
      {
        title: "Workflow discovery",
        body: "Who uses the system, approvals, data, and integrations.",
      },
      {
        title: "Build modules + APIs",
        body: "RBAC, core screens, automation rules, and third-party hooks.",
      },
      {
        title: "Deploy + train",
        body: "Cloud/VPS, SSL, monitoring, docs, and admin training.",
      },
    ],
    visualTitle: "Custom system building blocks",
    visualCaption:
      "Dashboards, portals, automation—designed around how your team actually works day to day.",
  },
  webmail: {
    steps: [
      {
        title: "Domain & provider",
        body: "Registrar/DNS access, current email host, and mailboxes needed.",
      },
      {
        title: "DNS + deliverability",
        body: "MX, SPF, DKIM, DMARC aligned so mail lands in inbox—not spam.",
      },
      {
        title: "Migration & support",
        body: "Inbox move (if needed), tests, and guidance for your team.",
      },
    ],
    visualTitle: "Email routing (how it should look)",
    visualCaption:
      "Your domain tells the world which server sends mail—we configure records correctly and verify.",
  },
  "web-scraping": {
    steps: [
      {
        title: "Fields & sources",
        body: "Which pages, columns, refresh frequency, and output format.",
      },
      {
        title: "Build + sample",
        body: "Extractor, pagination handling, sample rows for your approval.",
      },
      {
        title: "Deliver + automate",
        body: "Full export, optional scheduling, logs, and handover.",
      },
    ],
    visualTitle: "Data pipeline overview",
    visualCaption:
      "Public pages → structured table → CSV/Sheets/DB—with validation so the data is usable.",
  },
};

export function getServiceGuide(
  pillar: ServicePillarKey,
  contextLabel?: string
): ServiceGuideBundle {
  const base = bundles[pillar];
  if (!contextLabel) return base;
  return {
    ...base,
    visualCaption: `${base.visualCaption} Tailored scope: “${contextLabel}”.`,
  };
}
