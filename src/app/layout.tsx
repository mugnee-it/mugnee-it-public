import type { Metadata } from "next";
import "./globals.css";
import { Inter, Poppins } from "next/font/google";
import Footer from "@/components/sections/Footer";
import Header from "@/components/header/Header";
import FloatingSupportWidget from "@/components/FloatingSupportWidget";
import ScrollToTop from "@/components/ScrollToTop";
import SitePreloader from "@/components/SitePreloader";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mugneeit.com"),
  alternates: { canonical: "/" },
  title: "Mugnee IT Solution | Software & Web Services",
  description:
    "We design and build powerful software and modern web platforms that transform ideas into scalable digital experiences for ambitious businesses worldwide.",
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Mugnee IT Solutions",
    url: "https://mugneeit.com",
    telephone: "+8801958645415",
  };

  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Mugnee IT Solutions",
    url: "https://mugneeit.com",
    telephone: "+8801958645415",
    address: {
      "@type": "PostalAddress",
      streetAddress: "3rd Floor, 36-37 Umesh Datta Road, Bakshibazar",
      addressLocality: "Dhaka",
      postalCode: "1211",
      addressCountry: "BD",
    },
  };

  return (
    <html
      lang="en"
      className={`${inter.variable} ${poppins.variable}`}
      suppressHydrationWarning
    >
      <body suppressHydrationWarning className="min-h-dvh bg-white">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        <SitePreloader />
        <Header />
        {/* Header renders a flow spacer below the fixed bar so page content is not covered. */}
        <main className="min-h-[calc(100dvh-1px)]">{children}</main>
        <ScrollToTop />
        <FloatingSupportWidget />
        <Footer />
      </body>
    </html>
  );
}

