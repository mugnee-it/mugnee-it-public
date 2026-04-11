import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BadgeCheck, Lightbulb, ShieldCheck } from "lucide-react";

const SITE_URL =
  (process.env.NEXT_PUBLIC_SITE_URL || "https://mugneeit.com").replace(/\/$/, "");
const PAGE_URL = `${SITE_URL}/about/ceo-message/`;

export const metadata: Metadata = {
  title: "CEO Message | Mugnee IT Solutions",
  description:
    "Read the CEO message from Mugnee IT Solutions about mission, values, and commitment to practical digital growth.",
  alternates: { canonical: PAGE_URL },
  robots: { index: true, follow: true },
  openGraph: {
    title: "CEO Message | Mugnee IT Solutions",
    description:
      "A leadership note from the CEO of Mugnee IT Solutions on innovation, integrity, and long-term partnership.",
    url: PAGE_URL,
    type: "article",
  },
};

export default function CeoMessagePage() {
  return (
    <main className="bg-white">
      <section className="mx-auto max-w-7xl px-4 pt-16 pb-16">
        <nav className="text-xs font-bold text-slate-500" aria-label="Breadcrumb">
          <Link prefetch={false} href="/" className="hover:text-slate-700">
            Home
          </Link>
          <span className="mx-2">/</span>
          <Link prefetch={false} href="/about" className="hover:text-slate-700">
            About
          </Link>
          <span className="mx-2">/</span>
          <span className="text-slate-900">CEO Message</span>
        </nav>

        <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <div className="grid gap-8 lg:grid-cols-[0.38fr_0.62fr] lg:items-start">
            <div>
              <div className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-50">
                <div className="relative aspect-[4/5]">
                  <Image
                    src="/profile/ceo.png"
                    alt="Md. Saiful Islam Shajib, Chief Executive Officer"
                    fill
                    sizes="(max-width: 1024px) 100vw, 36vw"
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
              <div className="mt-4 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-extrabold text-slate-900">Md. Saiful Islam Shajib</p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                  Chief Executive Officer
                </p>
                <p className="mt-1 text-xs text-slate-600">Mugnee IT Solutions</p>
              </div>
            </div>

            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-slate-500">
                CEO Message
              </p>
              <h1 className="mt-2 text-3xl font-extrabold text-slate-900 sm:text-4xl">
                Welcome to Mugnee IT Solutions
              </h1>

              <div className="mt-5 space-y-4 text-sm leading-7 text-slate-700">
                <p>
                  In today&apos;s rapidly evolving digital world, technology is no longer a luxury - it is
                  the foundation of sustainable business growth. At Mugnee IT Solutions, our mission is
                  simple: to empower businesses through smart technology, innovation, and reliable
                  digital solutions.
                </p>
                <p>
                  We started this journey with a clear vision - to help companies transform digitally,
                  automate their processes, and build a strong online presence that delivers real
                  results. From website development and software solutions to SEO, automation, and
                  digital infrastructure, our team works with one goal in mind: creating practical,
                  scalable, and future-ready solutions for our clients.
                </p>
                <p>
                  What makes Mugnee IT different is our hands-on industry experience. We don&apos;t just
                  build technology - we use it daily across our own businesses. This allows us to
                  understand real operational challenges and design solutions that actually work in the
                  real world.
                </p>
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <div className="flex items-center gap-2">
                    <span className="grid h-8 w-8 place-items-center rounded-xl bg-white ring-1 ring-slate-200">
                      <ShieldCheck className="h-4 w-4 text-slate-700" />
                    </span>
                    <p className="text-sm font-extrabold text-slate-900">Integrity</p>
                  </div>
                  <p className="mt-1 text-xs leading-6 text-slate-600">
                    We believe in transparent communication and long-term partnerships.
                  </p>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <div className="flex items-center gap-2">
                    <span className="grid h-8 w-8 place-items-center rounded-xl bg-white ring-1 ring-slate-200">
                      <Lightbulb className="h-4 w-4 text-slate-700" />
                    </span>
                    <p className="text-sm font-extrabold text-slate-900">Innovation</p>
                  </div>
                  <p className="mt-1 text-xs leading-6 text-slate-600">
                    We continuously adapt to new technologies and smarter workflows.
                  </p>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <div className="flex items-center gap-2">
                    <span className="grid h-8 w-8 place-items-center rounded-xl bg-white ring-1 ring-slate-200">
                      <BadgeCheck className="h-4 w-4 text-slate-700" />
                    </span>
                    <p className="text-sm font-extrabold text-slate-900">Commitment</p>
                  </div>
                  <p className="mt-1 text-xs leading-6 text-slate-600">
                    Every project is treated with responsibility, precision, and care.
                  </p>
                </div>
              </div>

              <div className="mt-6 space-y-4 text-sm leading-7 text-slate-700">
                <p>
                  As CEO, I strongly believe that growth comes from continuous learning, collaboration,
                  and trust. We are proud to support startups, enterprises, and international clients
                  by providing dependable IT services tailored to their needs.
                </p>
                <p>
                  Thank you for choosing Mugnee IT Solutions. We look forward to building your digital
                  future - together.
                </p>
                <p className="font-semibold text-slate-900">
                  Warm regards,
                  <br />
                  Md. Saiful Islam Shajib
                  <br />
                  Chief Executive Officer
                  <br />
                  Mugnee IT Solutions
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
