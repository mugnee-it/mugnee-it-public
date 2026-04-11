import type { Metadata } from "next";
import { notFound, permanentRedirect } from "next/navigation";

const SITE_URL =
  (process.env.NEXT_PUBLIC_SITE_URL || "https://mugneeit.com").replace(/\/$/, "");

const LEGACY_SERVICE_REDIRECTS: Record<string, string> = {
  nextjs: "/services/nextjs/",
  "mern-stack": "/services/mern-stack/",
  seo: "/services/seo/",
  ecommerce: "/services/shopify/",
};

type Props = {
  params: { slug: string };
};

export function generateStaticParams() {
  return Object.keys(LEGACY_SERVICE_REDIRECTS).map((slug) => ({ slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const targetPath = LEGACY_SERVICE_REDIRECTS[params.slug];
  if (!targetPath) {
    return {
      title: "Service Not Found",
      robots: { index: false, follow: false },
    };
  }

  return {
    title: "Service Moved",
    robots: { index: false, follow: true },
    alternates: { canonical: `${SITE_URL}${targetPath}` },
  };
}

export default function LegacyServiceRedirectPage({ params }: Props) {
  const targetPath = LEGACY_SERVICE_REDIRECTS[params.slug];
  if (!targetPath) return notFound();
  permanentRedirect(targetPath);
}
