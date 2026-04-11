import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";
import ScheduleConsultationForm from "@/components/forms/ScheduleConsultationForm";
import {
  ConsultationHowItWorks,
  ConsultationPageHero,
  ConsultationPrepareAndFaq,
} from "@/components/consultation/FreeConsultationGuide";
import { CalendarDays, Clock3, MessageSquareText } from "lucide-react";

const SITE_URL = "https://mugneeit.com";
const PAGE_PATH = "/schedule-consultation";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Free Consultation | Book a Call | Mugnee IT Solutions",
  description:
    "Book a free consultation: how it works, what to prepare, and a simple form to pick date, time, and topic. We reply within 24 hours.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Free Consultation | Mugnee IT Solutions",
    description:
      "Step-by-step guide plus booking form — website, SEO, software, design, and more.",
    url: PAGE_URL,
    siteName: "Mugnee IT Solutions",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function ScheduleConsultationPage() {
  return (
    <>
      <ConsultationPageHero />
      <ConsultationHowItWorks />
      <ConsultationPrepareAndFaq />

      <div className="bg-slate-50">
        <section
          id="book-consultation"
          className="mx-auto max-w-6xl scroll-mt-[calc(120px+1rem)] px-4 pt-12 pb-20 sm:scroll-mt-32"
        >
          <nav className="text-xs font-bold text-slate-500">
            <Link prefetch={false} href="/" className="hover:text-slate-900">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="text-slate-900">Free consultation</span>
          </nav>

          <div className="mt-8 grid gap-6 lg:grid-cols-[1.05fr_.95fr]">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <p className="text-xs font-extrabold tracking-[0.2em] text-slate-500">BOOKING FORM</p>
              <h2 className="mt-3 text-2xl font-extrabold text-slate-900 sm:text-3xl">
                Request your free consultation
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600">
                Pick your preferred date and time, choose how you want to meet, and describe your topic.
                We follow up on <span className="font-bold">mugnee.it at gmail.com</span> or WhatsApp.
              </p>
              <ScheduleConsultationForm />
            </div>

            <div className="space-y-4">
              <InfoCard
                icon={<CalendarDays className="h-5 w-5 text-slate-900" />}
                title="Choose your date"
                desc="Select your preferred consultation date based on your schedule."
              />
              <InfoCard
                icon={<Clock3 className="h-5 w-5 text-slate-900" />}
                title="Pick your time slot"
                desc="Share your convenient time so we can coordinate quickly."
              />
              <InfoCard
                icon={<MessageSquareText className="h-5 w-5 text-slate-900" />}
                title="Share discussion topic"
                desc="Tell us your exact requirements so the consultation is practical and focused."
              />
              <div className="rounded-3xl border border-slate-200 bg-slate-900 p-6 text-white shadow-sm">
                <div className="text-lg font-extrabold">Quick contact</div>
                <div className="mt-2 text-sm text-white/80">Phone/WhatsApp: +880 1958-645415</div>
                <div className="text-sm text-white/80">Email: mugnee.it at gmail.com</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

function InfoCard({
  icon,
  title,
  desc,
}: {
  icon: ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="grid h-10 w-10 place-items-center rounded-2xl bg-yellow-400">{icon}</div>
      <div className="mt-3 text-base font-extrabold text-slate-900">{title}</div>
      <p className="mt-1 text-sm leading-7 text-slate-600">{desc}</p>
    </div>
  );
}
