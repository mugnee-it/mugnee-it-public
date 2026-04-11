import type { Metadata } from "next";
import Script from "next/script";
import SoftwaresClient from "./_components/SoftwaresClient";
import { FAQ_ITEMS, SOFTWARE_PRODUCTS } from "./_data/softwareCatalog";

const SITE_URL =
  (process.env.NEXT_PUBLIC_SITE_URL && process.env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, "")) || "https://mugneeit.com";

const PAGE_PATH = "/softwares";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}/`;

const META_DESCRIPTION =
  "Buy business software from Mugnee IT: visitor management, HR, CRM, DMS, worklog, appointments, accounts, POS, e-commerce, membership, inventory, hotel, school, LMS, restaurant, pharmacy desk, real estate, manufacturing, fleet, NGO donor tools, SaaS, plus custom MERN, Next.js, Python/Django, Flutter, and native mobile apps for Bangladesh and global clients.";

const KEYWORDS = [
  "business software Bangladesh",
  "visitor management system",
  "HR software",
  "CRM software Bangladesh",
  "document management system",
  "appointment booking software",
  "POS software",
  "school management software",
  "LMS software",
  "restaurant management software",
  "pharmacy software",
  "real estate CRM software",
  "inventory ERP Bangladesh",
  "hotel management system",
  "office management software",
  "SaaS development Bangladesh",
  "MERN stack software",
  "Django software company",
  "Flutter app development",
  "custom web application",
  "employee management system",
  "accounts management software",
  "inventory software",
  "worklog time tracking",
  "ecommerce suite Bangladesh",
  "NGO donor management software",
];

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Softwares for Sale | HR, POS, School, Hotel, SaaS & Custom Apps | Mugnee IT",
  description: META_DESCRIPTION,
  keywords: KEYWORDS,
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Softwares for Sale | Mugnee IT Solutions",
    description: META_DESCRIPTION,
    url: PAGE_URL,
    type: "website",
    locale: "en_US",
    siteName: "Mugnee IT Solutions",
  },
  twitter: {
    card: "summary_large_image",
    title: "Softwares for Sale | Mugnee IT Solutions",
    description: META_DESCRIPTION,
  },
  robots: { index: true, follow: true },
};

export default function SoftwaresPage() {
  const itemListJson = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Mugnee IT business software catalog",
    description: META_DESCRIPTION,
    itemListElement: SOFTWARE_PRODUCTS.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: p.name,
      url: `${SITE_URL}${PAGE_PATH}/#${p.slug}`,
    })),
  };

  const faqJson = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_ITEMS.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };

  const webPageJson = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Softwares for Sale | Mugnee IT Solutions",
    description: META_DESCRIPTION,
    url: PAGE_URL,
    isPartOf: { "@type": "WebSite", name: "Mugnee IT Solutions", url: SITE_URL },
  };

  const breadcrumbJson = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
      { "@type": "ListItem", position: 2, name: "Softwares", item: PAGE_URL },
    ],
  };

  return (
    <>
      <Script id="ld-softwares-webpage" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(webPageJson)}
      </Script>
      <Script id="ld-softwares-breadcrumb" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(breadcrumbJson)}
      </Script>
      <Script id="ld-softwares-itemlist" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(itemListJson)}
      </Script>
      <Script id="ld-softwares-faq" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(faqJson)}
      </Script>
      <SoftwaresClient />
    </>
  );
}
