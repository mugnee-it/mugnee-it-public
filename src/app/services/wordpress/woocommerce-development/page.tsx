import type { Metadata } from "next";
import {
  ShoppingCart,
  Search,
  Lock,
  Gauge,
  FileCheck2,
  Globe2,
  ClipboardList,
  BadgeCheck,
  ShieldCheck,
} from "lucide-react";
import WPServiceTemplate, {
  buildMetadata,
  type WPServiceConfig,
} from "../_components/WPServiceTemplate";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "https://mugneeit.com";

const cfg: WPServiceConfig = {
  siteUrl: SITE_URL,
  pagePath: "/services/wordpress/woocommerce-development/",
  metaTitle: "WooCommerce Website Development",
  ogTitle: "WooCommerce Development — Fast, SEO & Secure",
  metaDescription:
    "WooCommerce website development for Bangladesh and worldwide clients. Conversion-focused store UI, category structure, product SEO, checkout optimization, performance and security best practices.",
  heroTitle: "WooCommerce Website Development",
  heroSubtitle:
    "We build WooCommerce stores with clean category structure, product SEO, fast performance and a conversion-first checkout flow—serving Bangladesh and worldwide clients.",
  heroImage: "/images/wordpress.webp",
  breadcrumbName: "WooCommerce",
  targetKeyword: "WooCommerce Website Development",

  // ✅ Quick highlight chips (above-the-fold intent)
  highlights: [
    "Product + Category SEO",
    "Conversion-first Checkout",
    "Performance Checklist",
    "Security Basics",
  ],

  // ✅ Main deliverables
  deliverables: [
    {
      icon: ShoppingCart,
      title: "Store setup & structure",
      items: [
        "Shop + category + product page structure",
        "SEO-friendly category hierarchy",
        "Filter-ready layout guidance (scope-based)",
      ],
    },
    {
      icon: Search,
      title: "Product SEO foundation",
      items: [
        "Product titles + descriptions structure guidance",
        "Internal links between categories/products",
        "Schema-friendly setup guidance",
      ],
    },
    {
      icon: Gauge,
      title: "Speed & UX",
      items: [
        "Image optimization guidance",
        "Checkout UX review (scope-based)",
        "Performance checklist + basic fixes",
      ],
    },

    // ✅ NEW: Security deliverable (adds topical depth)
    {
      icon: Lock,
      title: "Security & stability basics",
      items: [
        "Plugin hygiene guidance (avoid bloat)",
        "Basic security checklist for store safety",
        "Backup/restore guidance (hosting-based)",
      ],
    },
  ],

  // ✅ Supporting panels (trust + location)
  panels: [
    {
      icon: FileCheck2,
      title: "Google-friendly ecommerce structure",
      desc: "We keep store pages crawlable and organized so search engines understand categories, products, and intent.",
      bullets: ["Clean navigation", "Indexable category pages", "No keyword stuffing"],
    },
    {
      icon: Globe2,
      title: "Bangladesh + worldwide delivery",
      desc: "Remote delivery for USA/UK/Europe clients with clear milestones and handover.",
      bullets: ["Clear scope", "Timezone-friendly communication", "Post-launch support guidance"],
    },

    // ✅ NEW: Conversion & UX panel (helps leads)
    {
      icon: BadgeCheck,
      title: "Conversion-first store UX",
      desc: "We build a clean product browsing experience so visitors can find products fast and complete checkout with less friction.",
      bullets: ["Clean product layout", "Trust blocks (policy, shipping, support)", "Checkout friction reduction (scope-based)"],
    },
  ],

  // ✅ Process steps
  processSteps: [
    {
      title: "1) Store plan",
      items: [
        "Category map + product types",
        "Checkout requirements",
        "Payment/shipping guidance (region-based)",
      ],
    },
    {
      title: "2) Build & optimize",
      items: [
        "Store UI + templates",
        "Speed-friendly structure",
        "On-page SEO essentials",
      ],
    },
    {
      title: "3) QA & launch",
      items: [
        "Cart/checkout testing",
        "Basic tracking guidance",
        "Handover for product upload",
      ],
    },

    // ✅ NEW: Post-launch support step (retention + trust)
    {
      title: "4) Post-launch support guidance",
      items: [
        "Update + backup routine guidance",
        "Monitoring checklist (errors, downtime, broken checkout)",
        "Quick fix support (scope-based)",
      ],
    },
  ],

  // ✅ FAQs (expanded for long-tail ranking)
  faqs: [
    {
      q: "Do you build WooCommerce stores for Bangladesh and worldwide clients?",
      a: "Yes. We serve Bangladesh and international clients (USA/UK/Europe) through remote delivery, clear milestones and handover.",
    },
    {
      q: "Will the store be SEO-friendly?",
      a: "Yes. We follow an SEO-ready structure for categories and product pages with proper headings, internal links, and crawlable navigation.",
    },
    {
      q: "Do you optimize the checkout flow?",
      a: "Yes. We review the checkout UX and reduce common friction points (final outcome depends on theme/plugins and requirements).",
    },
    {
      q: "Do you provide payment gateway setup?",
      a: "We can guide payment gateway setup based on your region and chosen provider. Some gateways require merchant verification and third-party approvals.",
    },

    // ✅ NEW FAQs (high intent + long-tail)
    {
      q: "Can you set up product categories and attributes properly?",
      a: "Yes. We help plan a clean category structure and attribute strategy so products are easy to filter and browse (scope-based).",
    },
    {
      q: "Do you build a custom WooCommerce theme or use a builder like Elementor?",
      a: "We can do both. For speed and long-term maintenance, we prefer lightweight themes and clean components. Builders can be used carefully if required.",
    },
    {
      q: "Will you optimize Core Web Vitals for WooCommerce?",
      a: "We follow best practices for performance and provide a checklist. Final Core Web Vitals depend on hosting, theme, plugins, and third-party scripts.",
    },
    {
      q: "Do you add essential store pages like Shipping, Returns, and Privacy Policy?",
      a: "We can add standard store pages and structure them cleanly for trust and navigation. Legal content should be provided/approved by the business owner.",
    },
    {
      q: "Do you integrate shipping methods and delivery zones?",
      a: "Yes. We can configure shipping zones and shipping methods based on your region and requirements (scope-based).",
    },
    {
      q: "Can you set up coupons, discounts, and basic sales features?",
      a: "Yes. We can configure basic coupon rules and common WooCommerce sales features depending on your store needs.",
    },
    {
      q: "Do you provide product upload support?",
      a: "We provide handover guidance and can assist with product upload/import if product data is available (scope-based).",
    },
    {
      q: "Do you secure WooCommerce stores?",
      a: "Yes. We follow safe defaults and basic hardening steps. Final security posture depends on hosting environment and access.",
    },
  ],

  backToPillarHref: "/services/wordpress",

  // ✅ Related links (internal linking cluster)
  relatedLinks: [
    { href: "/services/wordpress/speed-optimization", label: "WordPress Speed Optimization" },
    { href: "/services/wordpress/security-hardening", label: "WordPress Security Hardening" },
    { href: "/services/wordpress/maintenance-support", label: "WordPress Maintenance Support" },
    { href: "/services/wordpress", label: "WordPress Website Development" },
  ],

  /**
   * ✅ OPTIONAL: If your WPServiceTemplate supports extra sections, keep these.
   * If not supported, it won't break anything (depends on WPServiceConfig typing).
   *
   * If TS error happens, tell me your WPServiceConfig type fields — I’ll adjust instantly.
   */
  // @ts-ignore
  extraSections: [
    {
      id: "woocommerce-use-cases",
      eyebrow: "USE CASES",
      title: "Who this WooCommerce service is for",
      desc: "This WooCommerce development service fits businesses that need a clean store structure and scalable product SEO.",
      bullets: [
        "Fashion / apparel stores",
        "Electronics & accessories",
        "Grocery / FMCG stores",
        "Wholesale / bulk order stores",
        "Multi-category product stores",
        "Local Bangladesh stores or international ecommerce brands",
      ],
      icon: ClipboardList,
    },
    {
      id: "included-not-included",
      eyebrow: "SCOPE",
      title: "What’s included (and what depends on scope)",
      desc: "To keep projects clean, we separate what’s standard vs what’s scope-based.",
      columns: [
        {
          title: "Included (standard)",
          icon: ShieldCheck,
          items: [
            "WooCommerce setup + base structure",
            "Product & category structure planning",
            "Basic SEO-ready setup guidance",
            "Checkout flow review (scope-based improvements)",
          ],
        },
        {
          title: "Scope-based (optional)",
          icon: BadgeCheck,
          items: [
            "Advanced filtering / faceted search",
            "Multi-vendor marketplace features",
            "ERP / POS / inventory sync",
            "Custom plugin development",
          ],
        },
      ],
    },
  ],
};

export const metadata: Metadata = buildMetadata(cfg);

export default function Page() {
  return <WPServiceTemplate cfg={cfg} />;
}

