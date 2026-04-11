import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import ContactEnquiryForm from "@/components/forms/ContactEnquiryForm";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  Clock3,
  Facebook,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
  PhoneCall,
  ShieldCheck,
  Sparkles,
  Youtube,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

const SITE_URL =
  (process.env.NEXT_PUBLIC_SITE_URL || "https://mugneeit.com").replace(/\/$/, "");
const PAGE_PATH = "/contact";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}/`;

const socialLinks: Array<{
  label: string;
  href: string;
  icon: LucideIcon;
  brandClass: string;
}> = [
  {
    label: "WhatsApp",
    href: "https://wa.me/8801958645415",
    icon: MessageCircle,
    brandClass: "text-emerald-600",
  },
  {
    label: "Facebook",
    href: "#",
    icon: Facebook,
    brandClass: "text-[#1877F2]",
  },
  {
    label: "LinkedIn",
    href: "#",
    icon: Linkedin,
    brandClass: "text-[#0A66C2]",
  },
  {
    label: "YouTube",
    href: "#",
    icon: Youtube,
    brandClass: "text-[#FF0000]",
  },
];

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Contact",
  description:
    "Contact Mugnee IT Solutions for web development, SEO, graphics, automation, and technical support. Share your requirement and get a clear plan.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Contact",
    description: "Talk to Mugnee IT Solutions and get a clear project plan.",
    url: PAGE_URL,
    siteName: "Mugnee IT Solutions",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact",
    description: "Share your requirement and get a clear project roadmap.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

function jsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact",
    url: PAGE_URL,
    mainEntity: {
      "@type": "Organization",
      name: "Mugnee IT Solutions",
      url: SITE_URL,
      telephone: "+8801958645415",
      contactPoint: [
        {
          "@type": "ContactPoint",
          contactType: "sales",
          telephone: "+8801958645415",
          availableLanguage: ["en", "bn"],
        },
        {
          "@type": "ContactPoint",
          contactType: "support",
          telephone: "+8801958645415",
          availableLanguage: ["en", "bn"],
        },
      ],
      address: {
        "@type": "PostalAddress",
        streetAddress: "3rd Floor, 36-37 Umesh Datta Road, Bakshibazar",
        addressLocality: "Dhaka",
        addressRegion: "Dhaka",
        postalCode: "1211",
        addressCountry: "BD",
      },
    },
  };
}

export default function ContactPage() {
  const schema = jsonLd();
  const preSelectedService = "";

  return (
    <main className="bg-slate-50">
      <Script
        id="contactpage-jsonld"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(2,132,199,0.18),transparent_40%),radial-gradient(circle_at_80%_20%,_rgba(234,179,8,0.16),transparent_35%)]" />
        <div className="relative mx-auto max-w-7xl px-4 pt-16 pb-10">
          <nav className="text-xs font-bold text-slate-500" aria-label="Breadcrumb">
            <Link prefetch={false} href="/" className="hover:text-slate-900">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="text-slate-900">Contact</span>
          </nav>

          <div className="mt-8 grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-4 py-2 text-xs font-extrabold tracking-[0.18em] text-sky-700">
                <Sparkles className="h-3.5 w-3.5" />
                CONTACT MUGNEE IT SOLUTIONS
              </p>
              <h1 className="mt-4 max-w-3xl text-4xl font-extrabold leading-tight text-slate-900 sm:text-5xl">
                Build your next project with a clear execution plan.
              </h1>
              <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base">
                Tell us your requirement once. We will respond with scope clarity, timeline,
                budget direction, and the safest way to deliver your project.
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:max-w-2xl">
                <TrustMini title="Fast response" text="Usually within a few hours" />
                <TrustMini title="Clear roadmap" text="No confusing scope or hidden steps" />
                <TrustMini title="SEO + performance" text="Structure built for growth from day one" />
                <TrustMini title="Post-launch care" text="Support available after delivery" />
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="text-xs font-extrabold tracking-[0.2em] text-slate-500">DIRECT CONTACT</div>
              <div className="mt-3 grid gap-3">
                <QuickContact
                  icon={Mail}
                  label="Email"
                  value="mugnee.it at gmail.com"
                  href="mailto:mugnee.it%40gmail.com"
                />
                <QuickContact
                  icon={PhoneCall}
                  label="Phone"
                  value="+880 1958-645415"
                  href="tel:+8801958645415"
                />
                <QuickContact
                  icon={MessageCircle}
                  label="WhatsApp"
                  value="+880 1958-645415"
                  href="https://wa.me/8801958645415"
                  external
                />
              </div>

              <div className="mt-5 border-t border-slate-200 pt-4">
                <div className="text-xs font-extrabold tracking-[0.2em] text-slate-500">
                  FOLLOW US
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {socialLinks.map((social) => (
                    <SocialIconLink key={social.label} social={social} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20">
        <div className="grid gap-6 lg:grid-cols-[1.08fr_0.92fr]">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="text-xs font-extrabold tracking-[0.2em] text-slate-500">
                  PROJECT ENQUIRY FORM
                </div>
                <h2 className="mt-2 text-2xl font-extrabold text-slate-900">Send your requirement</h2>
                <p className="mt-2 text-sm text-slate-600">
                  Fill up the form and we will reply with a clear proposal and next steps.
                </p>
              </div>
              <div className="grid h-11 w-11 place-items-center rounded-2xl bg-slate-900">
                <ShieldCheck className="h-5 w-5 text-white" />
              </div>
            </div>
            <ContactEnquiryForm preSelectedService={preSelectedService} />
          </div>

          <div className="space-y-6">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="text-xs font-extrabold tracking-[0.2em] text-slate-500">OFFICE DETAILS</div>
              <div className="mt-4 space-y-4">
                <InfoRow icon={Building2} title="Company" text="Mugnee IT Solutions" />
                <InfoRow
                  icon={MapPin}
                  title="Address"
                  text="3rd Floor, 36-37 Umesh Datta Road, Bakshibazar, Dhaka - 1211, Bangladesh"
                />
                <InfoRow icon={Clock3} title="Working Hours" text="Saturday - Thursday, 10:00 AM - 8:00 PM" />
              </div>
            </div>

            <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white p-3 shadow-sm">
              <div className="px-2 pb-3 pt-2">
                <div className="text-xs font-extrabold tracking-[0.2em] text-slate-500">MAP</div>
                <div className="mt-1 text-sm font-extrabold text-slate-900">
                  Bakshibazar, Dhaka - 1211
                </div>
              </div>
              <iframe
                title="Mugnee IT Solutions Location"
                src="https://www.google.com/maps?q=3rd%20Floor%2C%2036-37%20Umesh%20Datta%20Road%2C%20Bakshibazar%2C%20Dhaka%201211%2C%20Bangladesh&output=embed"
                className="h-[320px] w-full rounded-2xl border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <a
                href="https://maps.google.com/?q=3rd%20Floor%2C%2036-37%20Umesh%20Datta%20Road%2C%20Bakshibazar%2C%20Dhaka%201211%2C%20Bangladesh"
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-extrabold text-slate-900 hover:bg-slate-50"
              >
                Open in Google Maps
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-slate-900 p-6 text-white shadow-sm">
              <div className="text-lg font-extrabold">Need quick support?</div>
              <p className="mt-2 text-sm text-slate-200">
                For urgent discussion, message us directly on WhatsApp.
              </p>
              <a
                href="https://wa.me/8801958645415"
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-white px-5 py-3 text-sm font-extrabold text-slate-900 hover:bg-slate-100"
              >
                WhatsApp Now
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function SocialIconLink({
  social,
}: {
  social: { label: string; href: string; icon: LucideIcon; brandClass: string };
}) {
  const Icon = social.icon;

  return (
    <a
      href={social.href}
      target="_blank"
      rel="noreferrer"
      aria-label={social.label}
      className="group inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 transition hover:-translate-y-0.5 hover:bg-white hover:shadow-sm"
    >
      <Icon className={`h-4 w-4 transition group-hover:brightness-110 ${social.brandClass}`} />
    </a>
  );
}

function TrustMini({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white/95 p-4 shadow-sm">
      <div className="flex items-start gap-3">
        <div className="mt-0.5">
          <CheckCircle2 className="h-4 w-4 text-emerald-600" />
        </div>
        <div>
          <div className="text-sm font-extrabold text-slate-900">{title}</div>
          <div className="text-xs text-slate-600">{text}</div>
        </div>
      </div>
    </div>
  );
}

function QuickContact({
  icon: Icon,
  label,
  value,
  href,
  external,
}: {
  icon: LucideIcon;
  label: string;
  value: string;
  href: string;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className="group flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 p-4 transition hover:border-slate-300 hover:bg-white"
    >
      <div className="flex items-center gap-3">
        <div className="grid h-10 w-10 place-items-center rounded-xl bg-slate-900">
          <Icon className="h-5 w-5 text-white" />
        </div>
        <div>
          <div className="text-xs font-extrabold tracking-[0.15em] text-slate-500">{label}</div>
          <div className="text-sm font-extrabold text-slate-900">{value}</div>
        </div>
      </div>
      <ArrowRight className="h-4 w-4 text-slate-500 transition group-hover:translate-x-1 group-hover:text-slate-900" />
    </a>
  );
}

function InfoRow({
  icon: Icon,
  title,
  text,
}: {
  icon: LucideIcon;
  title: string;
  text: string;
}) {
  return (
    <div className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4">
      <div className="grid h-10 w-10 place-items-center rounded-xl bg-slate-900">
        <Icon className="h-5 w-5 text-white" />
      </div>
      <div>
        <div className="text-xs font-extrabold tracking-[0.15em] text-slate-500">{title}</div>
        <div className="mt-1 text-sm font-bold text-slate-900">{text}</div>
      </div>
    </div>
  );
}



