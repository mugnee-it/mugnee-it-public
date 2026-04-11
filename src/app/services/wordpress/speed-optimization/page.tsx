import type { Metadata } from "next";
import { Gauge, Search, FileCheck2, Globe2, Lock, Zap, Settings2 } from "lucide-react";
import WPServiceTemplate, {
  buildMetadata,
  type WPServiceConfig,
} from "../_components/WPServiceTemplate";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "https://mugneeit.com";

const cfg: WPServiceConfig = {
  siteUrl: SITE_URL,
  pagePath: "/services/wordpress/speed-optimization/",
  metaTitle: "WordPress Speed Optimization Service",
  ogTitle: "WordPress Speed Optimization — Core Web Vitals",
  metaDescription:
    "WordPress speed optimization service for Bangladesh and worldwide clients. Core Web Vitals improvements, PageSpeed audit, image optimization, caching guidance, plugin cleanup, and performance checklist (results depend on hosting/theme/plugins).",
  heroTitle: "WordPress Speed Optimization Service",
  heroSubtitle:
    "Fix slow WordPress websites with a practical optimization pass—Core Web Vitals-focused, image optimization, caching guidance, and a performance checklist (final results depend on hosting, theme, plugins, and third-party scripts).",
  heroImage: "/images/wordpress.webp",
  breadcrumbName: "Speed Optimization",
  targetKeyword: "WordPress Speed Optimization Service",

  highlights: [
    "Core Web Vitals Focus",
    "PageSpeed Audit + Fixes",
    "Image & Asset Optimization",
    "Caching Guidance",
  ],

  deliverables: [
    {
      icon: Gauge,
      title: "Performance audit & optimization",
      items: [
        "Identify slow pages and heavy sections (theme/plugins/assets)",
        "Reduce layout shift and improve page stability (scope-based)",
        "Remove obvious bloat and unused features (scope-based)",
      ],
    },
    {
      icon: Zap,
      title: "Real-world speed improvements",
      items: [
        "Image optimization and modern formats guidance",
        "Asset cleanup (CSS/JS) and load-order improvements (scope-based)",
        "Better mobile experience to reduce bounce risk",
      ],
    },
    {
      icon: Search,
      title: "SEO + crawl efficiency",
      items: [
        "Faster pages help SEO via user signals and UX",
        "Cleaner structure improves crawling and indexing",
        "Optimization checklist + next-step recommendations",
      ],
    },
    {
      icon: Lock,
      title: "Safe optimization approach",
      items: [
        "Avoid risky changes without backup planning",
        "Plugin hygiene and update safety guidance",
        "Changes depend on admin/hosting access and scope",
      ],
    },
  ],

  panels: [
    {
      icon: FileCheck2,
      title: "Core Web Vitals focused (SEO + UX)",
      desc: "We prioritize practical improvements that impact real user experience and search performance.",
      bullets: [
        "Improve page stability (reduce CLS risk)",
        "Optimize heavy images and slow sections",
        "Reduce unnecessary bloat (scope-based)",
      ],
    },
    {
      icon: Settings2,
      title: "Caching + hosting-aware guidance",
      desc: "Caching settings and hosting environment affect results—so we keep recommendations realistic and safe.",
      bullets: [
        "Caching guidance (plugin/hosting dependent)",
        "Database + media organization tips (scope-based)",
        "Third-party script impact review",
      ],
    },
    {
      icon: Globe2,
      title: "Bangladesh + worldwide delivery",
      desc: "Remote speed optimization works well with clear scope and access (admin/hosting).",
      bullets: [
        "Audit → Fix → Test workflow",
        "Clear reporting and checklist handover",
        "Timezone-friendly communication",
      ],
    },
  ],

  processSteps: [
    {
      title: "1) Audit",
      items: [
        "Identify slow templates/pages and bottlenecks",
        "Check theme, plugins, images, scripts and hosting limits",
        "Confirm safe scope and access requirements",
      ],
    },
    {
      title: "2) Optimize",
      items: [
        "Image + asset optimization (scope-based)",
        "Caching guidance and safe configuration suggestions",
        "Reduce bloat and improve layout stability (scope-based)",
      ],
    },
    {
      title: "3) Test & report",
      items: [
        "Re-test key pages after changes",
        "Share what was improved and what needs next steps",
        "Provide a performance checklist for ongoing maintenance",
      ],
    },
  ],

  faqs: [
    {
      q: "Do you guarantee a specific PageSpeed or Core Web Vitals score?",
      a: "No fixed guarantee because results depend on hosting, theme, plugins, content size, and third-party scripts. We focus on meaningful improvements and safe best practices.",
    },
    {
      q: "What access do you need for WordPress speed optimization?",
      a: "For deeper work, we typically need WordPress admin access and sometimes hosting/cPanel access. If hosting access isn’t available, we can still apply safe WordPress-level improvements.",
    },
    {
      q: "Can you optimize WooCommerce store speed?",
      a: "Yes. We can optimize key ecommerce pages (home, category, product, cart, checkout) depending on theme/plugins and the store setup.",
    },
    {
      q: "How long does a speed optimization project take?",
      a: "Small sites can be improved quickly, while complex sites (heavy themes, many plugins, large media libraries) may take longer. We define scope after an audit.",
    },
    {
      q: "Will speed optimization improve SEO ranking?",
      a: "Speed improvements can help SEO indirectly by improving user experience and Core Web Vitals signals. Rankings depend on many factors (content, authority, competition), so we treat speed as a strong foundation.",
    },
    {
      q: "Do you optimize images and media?",
      a: "Yes. We provide practical image optimization (compression, sizing guidance, modern formats where possible) and help reduce media-related slowdowns.",
    },
    {
      q: "Do you remove plugins to make the site faster?",
      a: "We review plugin impact and recommend removing or replacing unnecessary/heavy plugins (scope-based). We avoid breaking site features and follow a safe approach.",
    },
    {
      q: "Can you speed up a website on shared hosting?",
      a: "Often yes, but shared hosting has limits. We optimize within realistic constraints and may recommend a hosting upgrade if it’s the main bottleneck.",
    },
    {
      q: "Do you optimize for mobile speed?",
      a: "Yes. Mobile performance is critical for SEO and conversions. We focus on layout stability, media weight, and script impact to improve mobile experience.",
    },
    {
      q: "Will caching alone fix my slow WordPress site?",
      a: "Caching helps, but it’s not the only factor. Heavy images, scripts, theme bloat, and slow hosting can still keep a site slow. We address the real bottlenecks, then apply caching guidance.",
    },
    {
      q: "Do you handle third-party scripts (chat widgets, tracking, etc.)?",
      a: "We can review third-party script impact and suggest safer loading strategies or alternatives (scope-based). Some scripts are required for business needs and may affect speed.",
    },
    {
      q: "Do you provide a report after optimization?",
      a: "Yes. We share what was improved, what couldn’t be changed due to constraints, and a checklist for maintaining performance going forward.",
    },
  ],

  backToPillarHref: "/services/wordpress",
  relatedLinks: [
    { href: "/services/wordpress/woocommerce-development", label: "WooCommerce Development" },
    { href: "/services/wordpress/security-hardening", label: "WordPress Security Hardening" },
    { href: "/services/wordpress/maintenance-support", label: "WordPress Maintenance Support" },
    { href: "/services/wordpress", label: "WordPress Website Development" },
  ],
};

export const metadata: Metadata = buildMetadata(cfg);

export default function Page() {
  return <WPServiceTemplate cfg={cfg} />;
}

