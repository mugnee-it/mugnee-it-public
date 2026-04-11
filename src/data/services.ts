export type ServiceData = {
  slug: string;
  title: string;
  short: string;

  heroImage: string;   // banner background
  coverImage: string;  // main content image

  bullets: string[];

  contentTitle: string;
  content: string[];

  process: { title: string; desc: string }[];
  faqs: { q: string; a: string }[];
};

export const SERVICES: ServiceData[] = [
  {
    slug: "nextjs",
    title: "Next.js Web Development",
    short: "Fast, SEO-ready websites built for conversions and Core Web Vitals.",
    heroImage:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=2200&q=80",
    coverImage:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2200&q=80",
    bullets: ["SEO-ready structure", "Core Web Vitals", "Conversion-first UI"],
    contentTitle: "Digital Marketing",
    content: [
      "We build a performance-first Next.js website designed to rank, load fast and convert visitors into leads.",
      "You get a clean site architecture, SEO setup (metadata + schema), and a scalable page system for services and content.",
      "We also optimize your pages for user experience so people stay longer, trust faster, and take action.",
    ],
    process: [
      { title: "Request For Service", desc: "We collect your goals, scope and required features to plan the best approach." },
      { title: "Service Planning", desc: "We design page structure, content flow and the conversion funnel." },
      { title: "Quality Control", desc: "We test performance, responsiveness, SEO checks and on-page consistency." },
      { title: "Follow-up & Support", desc: "After launch, we support updates, improvements and ongoing optimization." },
    ],
    faqs: [
      { q: "How fast can you deliver?", a: "Typically 7-14 days depending on scope and content readiness." },
      { q: "Is the website SEO-ready?", a: "Yes. We include technical SEO foundation, metadata, and schema setup." },
      { q: "Do you support after delivery?", a: "Yes. We provide maintenance, speed optimization and SEO improvements." },
    ],
  },

  {
    slug: "mern-stack",
    title: "MERN Stack Development",
    short: "Full-stack web apps with clean architecture and scalable APIs.",
    heroImage:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=2200&q=80",
    coverImage:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=2200&q=80",
    bullets: ["Clean APIs", "Scalable architecture", "Admin dashboards"],
    contentTitle: "Custom Web Applications",
    content: [
      "We develop scalable MERN applications with clean database design and secure API development.",
      "Perfect for CRMs, dashboards, booking systems, internal tools, and SaaS products.",
      "We focus on maintainable code, speed, and reliable deployment pipelines.",
    ],
    process: [
      { title: "Request For Service", desc: "We understand features, roles, and business rules." },
      { title: "Service Planning", desc: "We propose the architecture, roadmap and UI flow." },
      { title: "Quality Control", desc: "We test security, performance and edge cases." },
      { title: "Follow-up & Support", desc: "We support improvements, new features and maintenance." },
    ],
    faqs: [
      { q: "Can you build admin panel?", a: "Yes. We build role-based dashboards and admin systems." },
      { q: "Is it secure?", a: "We implement auth, validation, rate limits, and best practices." },
      { q: "Do you deploy?", a: "Yes. We deploy to Vercel, VPS, or cloud based on your needs." },
    ],
  },

  {
    slug: "seo",
    title: "SEO Services",
    short: "Technical + on-page + content system designed for long-term rankings.",
    heroImage:
      "https://images.unsplash.com/photo-1556155092-8707de31f9c4?auto=format&fit=crop&w=2200&q=80",
    coverImage:
      "https://images.unsplash.com/photo-1556155092-8707de31f9c4?auto=format&fit=crop&w=2200&q=80",
    bullets: ["Technical SEO", "On-page strategy", "Content plan"],
    contentTitle: "Search Engine Optimization",
    content: [
      "We fix technical SEO issues that block ranking and build a long-term on-page and content strategy.",
      "You get a clean service page system, internal linking plan, and keyword clusters built for your market.",
      "We track results and continuously improve based on real data.",
    ],
    process: [
      { title: "Request For Service", desc: "We collect your market, competitors and current status." },
      { title: "Service Planning", desc: "We create an SEO roadmap: technical, on-page and content." },
      { title: "Quality Control", desc: "We validate indexing, schema and performance metrics." },
      { title: "Follow-up & Support", desc: "Monthly reporting + continuous improvements." },
    ],
    faqs: [
      { q: "How soon results?", a: "SEO is compounding-early movement often shows in 4-12 weeks." },
      { q: "Do you do technical SEO?", a: "Yes. We handle indexing, schema, site structure and speed basics." },
      { q: "Do you provide content?", a: "We can provide content plan + writing support if needed." },
    ],
  },

  {
    slug: "ecommerce",
    title: "E-commerce (Shopify / WP)",
    short: "Conversion-first stores and landing pages that sell.",
    heroImage:
      "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=2200&q=80",
    coverImage:
      "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=2200&q=80",
    bullets: ["High-converting UI", "Payment setup", "SEO categories"],
    contentTitle: "E-commerce Growth",
    content: [
      "We design stores that look premium and guide customers to purchase.",
      "You get category SEO, product structure, and fast pages that improve conversion.",
      "Perfect for brands, dropshipping, local stores and global selling.",
    ],
    process: [
      { title: "Request For Service", desc: "We gather product categories, payment needs and target market." },
      { title: "Service Planning", desc: "We propose layout, product pages and conversion improvements." },
      { title: "Quality Control", desc: "We test checkout flow, mobile usability and speed." },
      { title: "Follow-up & Support", desc: "We support campaigns, changes and ongoing optimization." },
    ],
    faqs: [
      { q: "Do you setup payment?", a: "Yes. We help integrate payment gateways and checkout." },
      { q: "Can you migrate existing store?", a: "Yes. We can migrate products, categories and content." },
      { q: "Do you optimize conversion?", a: "Yes. We improve UI, trust signals, and purchase flow." },
    ],
  },
];

