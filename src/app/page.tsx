import Hero from "@/components/hero/Hero";
import ServiceQuickGrid from "@/components/sections/ServiceQuickGrid";
import { HOME_FAQS } from "@/data/homeFaqs";
import type { Metadata } from "next";
import dynamic from "next/dynamic";

const AboutCompany = dynamic(() => import("@/components/sections/AboutCompany"));
const WorkProcess = dynamic(() => import("@/components/sections/WorkProcess"));
const TrustedPartners = dynamic(
  () => import("@/components/sections/TrustedPartners")
);
const WorkAbout = dynamic(() => import("@/components/sections/WorkAbout"));
const Testimonials = dynamic(
  () => import("@/components/sections/Testimonials")
);
const FAQ = dynamic(() => import("@/components/sections/FAQ"));
const GetInTouch = dynamic(() => import("@/components/sections/GetInTouch"));

const SITE_URL = "https://mugneeit.com";
const PAGE_URL = `${SITE_URL}/`;

export const metadata: Metadata = {
  title: "Mugnee IT Solution | Software & Web Services",
  description:
    "We design and build powerful software and modern web platforms that transform ideas into scalable digital experiences for ambitious businesses worldwide.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Mugnee IT Solution | Software & Web Services",
    description:
      "We design and build powerful software and modern web platforms that transform ideas into scalable digital experiences for ambitious businesses worldwide.",
    url: PAGE_URL,
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function Home() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: HOME_FAQS.map((f) => ({
      "@type": "Question",
      name: `${f.q}?`,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a,
      },
    })),
  };
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Mugnee IT Solutions",
    url: SITE_URL,
    telephone: "+8801958645415",
    areaServed: ["Bangladesh", "Worldwide"],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <main>
        <Hero />
        <ServiceQuickGrid />
        <AboutCompany phone="+8801958645415" phoneText="+880 1958-645415" />
        <WorkProcess />
        <TrustedPartners />
        <WorkAbout />
        <Testimonials />
        <FAQ />
        <GetInTouch />
      </main>
    </>
  );
}

