import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Mic } from "lucide-react";

const SITE_URL = "https://mugneeit.com";
const PAGE_PATH = "/services/video-editing/podcast-video-editing";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;
const KEYWORD = "Podcast Video Editing";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: `${KEYWORD}`,
  description:
    "Podcast video editing with multiâ€‘cam cuts, audio cleanup, captions, and clip exports.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: KEYWORD,
    description: "Clean podcast edits with clips and export-ready delivery.",
    url: PAGE_URL,
    siteName: "Mugnee IT Solutions",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function PodcastVideoEditingPage() {
  return (
    <main className="bg-white">
      <section className="mx-auto max-w-6xl px-4 pt-16 pb-16">
        <nav className="text-xs font-bold text-slate-500">
          <Link prefetch={false} href="/" className="hover:text-slate-900">Home</Link>
          <span className="mx-2">/</span>
          <Link prefetch={false} href="/services" className="hover:text-slate-900">Services</Link>
          <span className="mx-2">/</span>
          <Link prefetch={false} href="/services/video-editing" className="hover:text-slate-900">Video Editing</Link>
          <span className="mx-2">/</span>
          <span className="text-slate-900">Podcast Editing</span>
        </nav>

        <div className="mt-8 grid gap-8 lg:grid-cols-[1.1fr_.9fr] lg:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border bg-white px-4 py-2 text-xs font-extrabold text-slate-700">
              <Mic className="h-4 w-4 text-indigo-700" />
              PODCAST EDITING
            </div>
            <h1 className="mt-4 text-4xl font-extrabold text-slate-900 sm:text-5xl">
              {KEYWORD}
            </h1>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Multiâ€‘cam podcast edits, clean audio, speaker focus, and highlight clips for
              social or YouTube.
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <Bullet text={`${KEYWORD} multiâ€‘cam cuts`} />
              <Bullet text={`${KEYWORD} audio cleanup`} />
              <Bullet text={`${KEYWORD} captions`} />
              <Bullet text={`${KEYWORD} clip exports`} />
            </div>

            <div className="mt-7 flex flex-wrap gap-3">
              <Link prefetch={false}
                href="/contact/"
                className="rounded-2xl bg-slate-900 px-6 py-3 text-sm font-extrabold text-white hover:bg-slate-800"
              >
                Get Quote <ArrowRight className="inline h-4 w-4" />
              </Link>
              <Link prefetch={false}
                href="/services/video-editing"
                className="rounded-2xl border px-6 py-3 text-sm font-extrabold text-slate-900 hover:bg-slate-50"
              >
                View Main Service
              </Link>
            </div>
          </div>

          <div className="rounded-3xl border bg-slate-50 p-6">
            <div className="text-sm font-extrabold text-slate-900">
              {KEYWORD} benefits
            </div>
            <div className="mt-4 space-y-3 text-sm text-slate-700">
              <Mini text={`${KEYWORD} clean dialogue`} />
              <Mini text={`${KEYWORD} speaker focus`} />
              <Mini text={`${KEYWORD} highlight clips`} />
              <Mini text={`${KEYWORD} export-ready`} />
            </div>
          </div>
        </div>
      </section>
      <Section
        title={`${KEYWORD} solutions`}
        items={[
          `Tailored ${KEYWORD} strategy for your business goals`,
          "Clear scope, timeline, and delivery milestones",
          "Google-safe execution with clean structure",
          "Ongoing support and post-launch guidance",
        ]}
      />
      <Section
        title={`${KEYWORD} benefits`}
        items={[
          `Clear ${KEYWORD} execution aligned with business goals`,
          "Structured implementation with clean handover",
          "Performance, quality, and maintainability focus",
          "Post-launch support and improvement guidance",
        ]}
      />
      <Section
        title={`${KEYWORD} comparison`}
        items={[
          `${KEYWORD}: tailored implementation for business-specific goals`,
          "Generic alternatives: faster start, but limited control for advanced needs",
          "Low-cost quick setups: lower upfront budget, variable long-term quality",
          "Managed delivery model: clearer scope, QA, and post-launch support",
        ]}
      />
      <Section
        title={`${KEYWORD} workflow`}
        items={[
          "Receive multiâ€‘cam files",
          "Sync + cut by speakers",
          "Clean audio + captions",
          "Export full + clips",
        ]}
      />

      <Section
        title={`${KEYWORD} deliverables`}
        items={[
          "Full episode export",
          "Short clips for social",
          "Clean audio mix",
          "Organized delivery links",
        ]}
      />

      <Section
        title={`${KEYWORD} support`}
        items={[
          "Revision rounds",
          "Style consistency",
          "Clip batch delivery",
          "Clear documentation",
        ]}
      />

      <Faq
        title={`${KEYWORD} FAQ`}
        items={[
          ["Do you handle multiâ€‘cam?", "Yes, multiâ€‘cam is supported."],
          ["Do you make clips?", "Yes, highlight clips are included."],
          ["Do you add captions?", "Yes, captions are available."],
          ["Can you deliver weekly?", "Yes, weekly schedules are supported."],
        ]}
      />
    </main>
  );
}

function Bullet({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-2 text-sm text-slate-800">
      <CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-600" />
      {text}
    </div>
  );
}

function Mini({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-2">
      <span className="mt-1 h-2 w-2 rounded-full bg-indigo-600" />
      <span>{text}</span>
    </div>
  );
}

function Section({ title, items }: { title: string; items: string[] }) {
  return (
    <section className="mx-auto max-w-6xl px-4 pb-12">
      <h2 className="text-2xl font-extrabold text-slate-900">{title}</h2>
      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        {items.map((t) => (
          <div key={t} className="rounded-2xl border border-slate-200 bg-white p-4 text-sm text-slate-700">
            {t}
          </div>
        ))}
      </div>
    </section>
  );
}

function Faq({
  title,
  items,
}: {
  title: string;
  items: [string, string][];
}) {
  return (
    <section className="mx-auto max-w-6xl px-4 pb-16">
      <h2 className="text-2xl font-extrabold text-slate-900">{title}</h2>
      <div className="mt-6 grid gap-4 lg:grid-cols-2">
        {items.map(([q, a]) => (
          <details key={q} className="rounded-2xl border border-slate-200 bg-white p-5">
            <summary className="cursor-pointer text-sm font-extrabold text-slate-900">{q}</summary>
            <p className="mt-2 text-sm leading-7 text-slate-600">{a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}





