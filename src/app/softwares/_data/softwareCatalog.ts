export type SoftwareCategory = "workforce" | "commerce" | "verticals" | "platforms";

export type SoftwareProduct = {
  slug: string;
  name: string;
  short: string;
  highlights: string[];
  category: SoftwareCategory;
  /** Short stack hints shown on the card (MERN, Django, Flutter, etc.) */
  stackTags: string[];
};

export const CATEGORY_LABELS: Record<SoftwareCategory, string> = {
  workforce: "Workforce & operations",
  commerce: "Commerce & finance",
  verticals: "Industry suites",
  platforms: "SaaS, mobile & custom",
};

export const SOFTWARE_PRODUCTS: SoftwareProduct[] = [
  {
    slug: "visitor-management-system",
    name: "Visitor Management System",
    short:
      "Digitize front-desk check-in, visitor badges, host notifications, and audit-ready logs for offices, factories, and secure facilities.",
    highlights: ["Pre-registration & walk-in", "Real-time host alerts", "Visitor history & exports"],
    category: "workforce",
    stackTags: ["MERN", "Next.js"],
  },
  {
    slug: "hr-solutions",
    name: "HR Solutions",
    short:
      "End-to-end HR operations: employee records, onboarding, policies, leave, attendance hooks, and reporting tailored to your org structure.",
    highlights: ["Employee master data", "Leave & attendance ready", "Role-based access"],
    category: "workforce",
    stackTags: ["MERN", "Django"],
  },
  {
    slug: "worklog",
    name: "Worklog",
    short:
      "Time tracking, task notes, and productivity visibility for teams—ideal for agencies, dev shops, and distributed crews billing by effort.",
    highlights: ["Projects & tasks", "Timesheets", "Manager dashboards"],
    category: "workforce",
    stackTags: ["React", "Node"],
  },
  {
    slug: "employee-management",
    name: "Employee Management",
    short:
      "Operational control for workforce data, departments, shifts (where needed), and internal communication workflows in one place.",
    highlights: ["Org chart friendly", "Document slots", "Performance hooks"],
    category: "workforce",
    stackTags: ["MERN"],
  },
  {
    slug: "crm-sales-pipeline",
    name: "CRM & Sales Pipeline",
    short:
      "Leads, deals, activities, and pipeline boards for B2B teams—keep follow-ups, quotations, and handoff to delivery in one workspace.",
    highlights: ["Lead → deal stages", "Activity timeline", "Team visibility"],
    category: "workforce",
    stackTags: ["MERN", "Next.js"],
  },
  {
    slug: "document-management-dms",
    name: "Document Management (DMS)",
    short:
      "Central library with folders, versioning, access control, and search—so contracts, SOPs, and compliance files are not lost in chat threads.",
    highlights: ["Role-based folders", "Audit trail", "Secure sharing"],
    category: "workforce",
    stackTags: ["Django", "React"],
  },
  {
    slug: "appointment-booking-system",
    name: "Appointment & Booking",
    short:
      "Slot booking for clinics, salons, consultants, and service desks—calendar rules, reminders, and staff rosters without spreadsheet chaos.",
    highlights: ["Public booking pages", "Staff calendars", "Notifications"],
    category: "workforce",
    stackTags: ["Next.js", "Node"],
  },
  {
    slug: "accounts-management",
    name: "Accounts Management",
    short:
      "Financial visibility for SMEs: invoicing, expenses, basic ledger views, and reports—extendable to your accountant’s workflow.",
    highlights: ["Invoices & payments", "Expense tracking", "Export for audit"],
    category: "commerce",
    stackTags: ["MERN", "Python"],
  },
  {
    slug: "pos-point-of-sale",
    name: "POS (Point of Sale)",
    short:
      "Retail and outlet billing: barcode/SKU ready flows, receipts, daily sales summaries, and inventory sync options.",
    highlights: ["Fast checkout UI", "Sales reports", "Stock awareness"],
    category: "commerce",
    stackTags: ["React", "Flutter"],
  },
  {
    slug: "inventory-erp",
    name: "Inventory & ERP-lite",
    short:
      "Stock movements, purchase orders, suppliers, and warehouse-friendly views—stepping stone to full ERP when you scale.",
    highlights: ["SKU & batches", "PO workflow", "Low-stock alerts"],
    category: "commerce",
    stackTags: ["MERN", "Django"],
  },
  {
    slug: "membership-subscription",
    name: "Membership & Subscriptions",
    short:
      "Gyms, clubs, and subscription businesses: plans, renewals, member portals, and payment hooks—ready for recurring revenue models.",
    highlights: ["Tiered plans", "Member self-service", "Renewal tracking"],
    category: "commerce",
    stackTags: ["Next.js", "Node"],
  },
  {
    slug: "ecommerce-suite",
    name: "E-commerce Suite",
    short:
      "Catalog, cart, checkout flows, and order admin for brands that want owned commerce—not only marketplace dependence—with room for custom rules.",
    highlights: ["Product catalog", "Order management", "Promo hooks"],
    category: "commerce",
    stackTags: ["Next.js", "MERN"],
  },
  {
    slug: "hotel-management",
    name: "Hotel Management",
    short:
      "Reservations, room inventory, guest profiles, housekeeping status, and front-desk tools designed for boutique to mid-size properties.",
    highlights: ["Booking calendar", "Room status", "Guest folio"],
    category: "verticals",
    stackTags: ["MERN", "Flutter app"],
  },
  {
    slug: "school-management",
    name: "School Management",
    short:
      "Student records, classes, attendance, exams, fees, and parent communication—reducing paperwork for institutes and training centers.",
    highlights: ["Student & class roster", "Fees & notices", "Report cards ready"],
    category: "verticals",
    stackTags: ["Django", "React"],
  },
  {
    slug: "lms-training-platform",
    name: "LMS / Training Platform",
    short:
      "Courses, lessons, quizzes, progress, and certificates for corporates and training institutes—self-paced or cohort-based delivery.",
    highlights: ["Course builder", "Assessments", "Progress analytics"],
    category: "verticals",
    stackTags: ["Next.js", "MERN"],
  },
  {
    slug: "restaurant-fnb",
    name: "Restaurant & F&B",
    short:
      "Table plans, KOT/kitchen flow, menu & modifiers, split bills, and daily sales—built for cafés, restaurants, and cloud kitchens.",
    highlights: ["Floor & tables", "Kitchen display", "Shift closing"],
    category: "verticals",
    stackTags: ["React", "Flutter POS"],
  },
  {
    slug: "pharmacy-clinic",
    name: "Pharmacy & Clinic Desk",
    short:
      "Prescription-friendly counters, stock by batch/expiry, supplier purchases, and patient visit logs where regulations allow—aligned to your compliance scope.",
    highlights: ["Sales & returns", "Expiry alerts", "Purchase orders"],
    category: "verticals",
    stackTags: ["MERN"],
  },
  {
    slug: "real-estate-property",
    name: "Real Estate & Property",
    short:
      "Listings, inquiries, site visits, owner/tenant records, and commission tracking for agencies and property managers.",
    highlights: ["Listing CRM", "Visit scheduling", "Deal tracking"],
    category: "verticals",
    stackTags: ["Next.js", "Node"],
  },
  {
    slug: "manufacturing-production",
    name: "Manufacturing & Production",
    short:
      "Work orders, BOM-lite, production steps, and QC checkpoints for light manufacturing—integrate later with inventory and accounts.",
    highlights: ["Job cards", "Stage tracking", "Yield basics"],
    category: "verticals",
    stackTags: ["Django", "React"],
  },
  {
    slug: "transport-fleet-lite",
    name: "Transport & Fleet (lite)",
    short:
      "Trips, vehicles, drivers, and basic dispatch views for shuttle services, couriers, and small fleets—expandable with GPS integrations.",
    highlights: ["Trip sheets", "Vehicle register", "Driver roster"],
    category: "verticals",
    stackTags: ["MERN", "Flutter"],
  },
  {
    slug: "ngo-donor-management",
    name: "NGO & Donor Management",
    short:
      "Donors, pledges, campaigns, and transparent reporting for nonprofits—keep fundraising and program visibility organized.",
    highlights: ["Donor CRM", "Campaign tags", "Export reports"],
    category: "verticals",
    stackTags: ["Django", "React"],
  },
  {
    slug: "office-management",
    name: "Office Management",
    short:
      "Unified admin for meetings, assets, tickets, and internal requests—so daily office operations do not live in scattered spreadsheets.",
    highlights: ["Ticket / request queue", "Asset register", "Meeting rooms"],
    category: "workforce",
    stackTags: ["MERN"],
  },
  {
    slug: "saas-products",
    name: "SaaS Products",
    short:
      "Subscription-ready multi-tenant software: billing hooks, tenant isolation, and scalable cloud deployment when you are going to market.",
    highlights: ["Multi-tenant design", "API-ready", "Cloud deployment"],
    category: "platforms",
    stackTags: ["Next.js", "Node", "Stripe-ready"],
  },
  {
    slug: "custom-web-applications",
    name: "Custom Web Applications",
    short:
      "Bespoke browser-based systems on MERN, Next.js, or Python/Django—exactly mapped to your process, branding, and integrations.",
    highlights: ["MERN & Next.js", "Python / Django", "APIs & dashboards"],
    category: "platforms",
    stackTags: ["MERN", "Django", "Next.js"],
  },
  {
    slug: "mobile-applications",
    name: "Mobile Applications",
    short:
      "Flutter cross-platform or native iOS/Android (Swift, Kotlin) when performance, hardware access, or store policies demand it.",
    highlights: ["Flutter", "Swift & Kotlin", "App Store / Play ready"],
    category: "platforms",
    stackTags: ["Flutter", "Swift", "Kotlin"],
  },
];

/**
 * Tech badge: default Simple Icons CDN `https://cdn.simpleicons.org/{iconSlug}/{iconHex}`.
 * Use `iconUrl` when slug missing on CDN (SVG shown inverted on dark pills).
 */
export type TechStackItem = {
  name: string;
  group: string;
  iconSlug?: string;
  iconHex?: string;
  iconUrl?: string;
};

export const TECH_STACK: TechStackItem[] = [
  { name: "MongoDB", group: "Data", iconSlug: "mongodb", iconHex: "47A248" },
  { name: "PostgreSQL", group: "Data", iconSlug: "postgresql", iconHex: "4169E1" },
  { name: "Supabase", group: "Backend", iconSlug: "supabase", iconHex: "3FCF8E" },
  { name: "Firebase", group: "BaaS", iconSlug: "firebase", iconHex: "FFCA28" },
  { name: "Express", group: "Backend", iconSlug: "express", iconHex: "FFFFFF" },
  { name: "Node.js", group: "Runtime", iconSlug: "nodedotjs", iconHex: "339933" },
  { name: "React", group: "Frontend", iconSlug: "react", iconHex: "61DAFB" },
  { name: "Next.js", group: "Web", iconSlug: "nextdotjs", iconHex: "FFFFFF" },
  { name: "TypeScript", group: "Language", iconSlug: "typescript", iconHex: "3178C6" },
  { name: "Python", group: "Backend", iconSlug: "python", iconHex: "3776AB" },
  { name: "Django", group: "Backend", iconSlug: "django", iconHex: "092E20" },
  { name: "Tailwind CSS", group: "UI", iconSlug: "tailwindcss", iconHex: "06B6D4" },
  { name: "Flutter", group: "Mobile", iconSlug: "flutter", iconHex: "02569B" },
  { name: "Swift", group: "iOS", iconSlug: "swift", iconHex: "F05138" },
  { name: "Kotlin", group: "Android", iconSlug: "kotlin", iconHex: "7F52FF" },
  { name: "GraphQL", group: "APIs", iconSlug: "graphql", iconHex: "E10098" },
  { name: "Docker", group: "Ops", iconSlug: "docker", iconHex: "2496ED" },
  {
    name: "AWS",
    group: "Cloud",
    iconUrl: "https://cdn.jsdelivr.net/npm/simple-icons@11.6.0/icons/amazonaws.svg",
  },
  { name: "Google Cloud", group: "Cloud", iconSlug: "googlecloud", iconHex: "4285F4" },
  { name: "Vercel", group: "Deploy", iconSlug: "vercel", iconHex: "FFFFFF" },
  { name: "Netlify", group: "Deploy", iconSlug: "netlify", iconHex: "00C7B7" },
  { name: "GitHub Actions", group: "CI/CD", iconSlug: "githubactions", iconHex: "2088FF" },
];

export const FAQ_ITEMS = [
  {
    q: "Do you sell ready-made software or only custom development?",
    a: "Both. We offer completed solutions such as visitor management, HR, POS, CRM, LMS, school/hotel suites, and more that you can license and deploy. We also build fully custom web and mobile applications when your workflow is unique.",
  },
  {
    q: "Can we request a demo before purchase?",
    a: "Yes. We walk you through a guided demo, discuss user roles, hosting, and integrations, then provide licensing or implementation options that match your timeline.",
  },
  {
    q: "Which technologies do you use for new products?",
    a: "We build with the MERN stack, Next.js and TypeScript, Python and Django, MongoDB and PostgreSQL, Supabase and Firebase where realtime or BaaS fits, Flutter plus native Swift or Kotlin for mobile, GraphQL or REST APIs, Tailwind for UI, and Docker with AWS, Google Cloud, Vercel, Netlify, and GitHub Actions for hosting and deployment.",
  },
  {
    q: "Do you support clients outside Bangladesh?",
    a: "Yes. We deliver remotely for global teams with milestone-based releases, staging environments, and documentation—same process we use for Bangladesh enterprises.",
  },
  {
    q: "Can you extend a product with custom modules later?",
    a: "Absolutely. Many clients start with a standard module set and add reporting, integrations, or mobile apps in later phases without replacing the core system.",
  },
  {
    q: "How do we get pricing?",
    a: "Share your user count, locations, integrations, and go-live date. We respond with a clear proposal covering license, setup, training, and optional managed hosting.",
  },
  {
    q: "Do you cover regulated sectors like healthcare or pharmacy?",
    a: "We implement operational software (inventory, billing desk, appointments) to your agreed scope. Final compliance with local medical or drug regulations remains your responsibility with your legal and clinical advisors—we align features to the workflow you approve.",
  },
];
