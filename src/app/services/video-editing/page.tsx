import type { Metadata } from "next";
import Image from "next/image";
import {
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Scissors,
  Captions,
  AudioLines,
  Wand2,
  Film,
  Camera,
  Youtube,
  Instagram,
  Globe2,
  Timer,
  BadgeCheck,
  Layers,
  Gauge,
  ShieldCheck,
  Wrench,
  Users,
  LineChart,
  HelpCircle,
  ClipboardCheck,
  FileText,
  Workflow,
  MonitorPlay,
  Star,
} from "lucide-react";
import {
  ServiceCustomerGuide,
  ServiceFlowStrip,
  ServiceQuickSummary,
  ServiceUseCasesGrid,
} from "@/components/sections/ServiceVisualBlocks";

/** ✅ PRODUCTION DOMAIN (no localhost fallback) */
const SITE_URL = "https://mugneeit.com";

const PAGE_PATH = "/services/video-editing";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

/** ✅ SEO title (~60 chars) */
const META_TITLE = "Video Editing Service | Reels + YouTube";

const META_DESC =
  "Professional video editing service: Reels/Shorts, YouTube videos, vlogs & travel films — captions, pacing, color grading, motion graphics and audio polish.";

/** ✅ Turbopack-safe public path */
const HERO_BG = "/images/video-editing-hero.webp";

export const metadata: Metadata = {
  title: META_TITLE,
  description: META_DESC,
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: META_TITLE,
    description:
      "We edit short-form and long-form videos with captions, color, sound polish, and premium pacing.",
    url: PAGE_URL,
    siteName: "Mugnee IT Solutions",
    type: "website",
  },
  robots: { index: true, follow: true },
};

const faqs = [
  {
    q: "What files do you need to start video editing?",
    a: "Raw footage (Google Drive/Dropbox link), target platform (Reels/Shorts/YouTube), desired duration, language, and any reference style (optional).",
  },
  {
    q: "Do you do captions and subtitles (Bangla/English)?",
    a: "Yes. We add clean captions/subtitles (BN/EN) with correct timing, readable style, and safe margins for Reels/Shorts/YouTube.",
  },
  {
    q: "Do you edit long YouTube videos and vlogs?",
    a: "Yes. We handle storytelling, pacing, clean cuts, b-roll placement, audio polish, and YouTube-ready export settings.",
  },
  {
    q: "How many revisions do you provide?",
    a: "Most projects include 1-2 revision rounds. We keep revisions structured so you get fast output without endless back-and-forth.",
  },
  {
    q: "Can you maintain a consistent style for my channel?",
    a: "Yes. We create a simple style system (captions, transitions, pacing rules, audio targets) so your weekly uploads stay consistent.",
  },
  {
    q: "Do you work with international clients?",
    a: "Yes. We work worldwide and deliver via Drive links with clear timelines and checklists.",
  },
];

function buildJsonLd() {
  const org = {
    "@type": "Organization",
    name: "Mugnee IT Solutions",
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
  };

  const website = {
    "@type": "WebSite",
    name: "Mugnee IT Solutions",
    url: SITE_URL,
  };

  const webpage = {
    "@type": "WebPage",
    name: META_TITLE,
    url: PAGE_URL,
    description:
      "Video editing service for Reels/Shorts, YouTube videos, vlogs and travel videos: captions, pacing, color grading, motion graphics and audio polish.",
    isPartOf: website,
  };

  const breadcrumb = {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
      { "@type": "ListItem", position: 2, name: "Services", item: `${SITE_URL}/services` },
      { "@type": "ListItem", position: 3, name: "Video Editing", item: PAGE_URL },
    ],
  };

  const service = {
    "@type": "Service",
    name: "Video Editing Service",
    serviceType: "Video Editing / Post Production",
    provider: { "@type": "Organization", name: "Mugnee IT Solutions", url: SITE_URL },
    areaServed: ["Bangladesh", "Worldwide"],
    url: PAGE_URL,
    description:
      "Video editing for Reels/Shorts, YouTube videos, vlogs and travel films: captions, hook-first pacing, color grading, motion graphics, and audio polish.",
    // ✅ No fake price. Keep quotation-based.
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      url: `${SITE_URL}/contact/`,
      description:
        "Quotation depends on footage length, complexity, target platform requirements, delivery timeline, and revision scope.",
    },
  };

  const faq = {
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return {
    "@context": "https://schema.org",
    "@graph": [org, website, webpage, breadcrumb, service, faq],
  };
}

/* ================= DATA ================= */

const includes = [
  {
    icon: Scissors,
    title: "Pacing + Storytelling Cuts",
    desc: "Hook-first pacing, clean cuts, jump cuts, b-roll placement, and retention-focused flow.",
    pills: ["Hook", "Pacing", "Retention"],
  },
  {
    icon: Captions,
    title: "Captions (BN/EN) + Styling",
    desc: "Clean captions/subtitles with safe margins, readable timing, and consistent style.",
    pills: ["BN/EN", "Safe Margin", "Readable"],
  },
  {
    icon: AudioLines,
    title: "Audio Cleanup + Mix",
    desc: "Noise reduction, leveling, music mix, and crisp dialogue for a professional sound.",
    pills: ["Cleanup", "Level", "Mix"],
  },
  {
    icon: Wand2,
    title: "Color Grade + Finishing",
    desc: "Balanced exposure, skin tones, cinematic look, and final polish for premium vibes.",
    pills: ["Grade", "Look", "Finish"],
  },
  {
    icon: Film,
    title: "Ads / Promo Editing",
    desc: "Short message, strong CTA, and platform-ready exports for performance marketing.",
    pills: ["Promo", "CTA", "Exports"],
  },
  {
    icon: Layers,
    title: "Style System (Monthly)",
    desc: "Consistent templates for captions, transitions, pacing rules—perfect for weekly publishing.",
    pills: ["Consistent", "Templates", "Weekly"],
  },
];

const deliverables = [
  "Platform-ready exports (Reels/Shorts/YouTube)",
  "Clean captions/subtitles (BN/EN) with safe margins",
  "Audio cleanup + leveling + music mix",
  "Color correction + grading + final polish",
  "Thumbnail frame suggestion (optional)",
  "Drive delivery + organized file naming",
];

const useCases = [
  { icon: Instagram, title: "Reels / Shorts", desc: "Hook-first edits that keep attention and look premium." },
  { icon: Youtube, title: "YouTube Videos", desc: "Story structure, pacing, b-roll, and clean sound." },
  { icon: Globe2, title: "Travel Films", desc: "Cinematic pacing + grading to highlight moments." },
  { icon: MonitorPlay, title: "Product/Promo", desc: "Short, clear message with branding and CTA." },
];

const workflow = [
  { icon: Camera, title: "Share footage", desc: "Send Drive link + goal + platform + duration." },
  { icon: Scissors, title: "Edit structure", desc: "Cuts, pacing, story flow, b-roll placement." },
  { icon: Captions, title: "Polish", desc: "Captions, sound cleanup, leveling, music mix." },
  { icon: Wand2, title: "Finish + export", desc: "Color grade + platform-ready exports + revisions." },
];

const plans = [
  {
    title: "Short-form Editing",
    subtitle: "Reels / Shorts / TikTok",
    items: ["Hook-first pacing", "Captions + styling", "Music + SFX (basic)", "Platform export settings"],
    featured: false,
  },
  {
    title: "YouTube / Vlog Editing",
    subtitle: "Long-form storytelling edits",
    items: ["Story structure + pacing", "Jump cuts + b-roll", "Audio cleanup + mix", "Structured revisions (typical 1-2)"],
    featured: true,
  },
  {
    title: "Monthly Editing Package",
    subtitle: "Consistent weekly output",
    items: ["Multiple videos/week", "Channel style system", "Priority delivery", "Workflow checklist + reporting"],
    featured: false,
  },
];

const keywordPages = [
  {
    title: "Video Editing Service",
    desc: "General video editing for brands, creators, and teams.",
    href: "/services/video-editing/video-editing-service",
  },
  {
    title: "YouTube Video Editing Service",
    desc: "Long‑form edits with pacing, audio, and storytelling.",
    href: "/services/video-editing/youtube-video-editing",
  },
  {
    title: "Shorts & Reels Editing Service",
    desc: "Hook‑first short‑form edits for social platforms.",
    href: "/services/video-editing/shorts-reels-editing",
  },
  {
    title: "Podcast Video Editing",
    desc: "Clean multi‑cam edits, audio polish, and clips.",
    href: "/services/video-editing/podcast-video-editing",
  },
  {
    title: "Corporate Video Editing Service",
    desc: "Professional edits for explainers, ads, and brand videos.",
    href: "/services/video-editing/corporate-video-editing",
  },
];

export default function VideoEditingServicePage() {
  const jsonLd = buildJsonLd();

  return (
    <main className="bg-white">
      {/* ✅ JSON-LD (single) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ================= HERO ================= */}
      <section className="relative isolate min-h-[560px] overflow-hidden bg-slate-950 sm:min-h-[650px]">
        <div className="absolute inset-0 z-0">
          <Image
            src={HERO_BG}
            alt="Video editing service hero background"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>

        <div className="pointer-events-none absolute inset-0 z-10">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-950/55 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-black/50" />
          <div className="absolute inset-0 opacity-[0.10] [background:radial-gradient(circle_at_1px_1px,rgba(255,255,255,.22)_1px,transparent_0)] [background-size:22px_22px]" />
          <div className="absolute -top-40 right-[-140px] h-[520px] w-[520px] rounded-full bg-fuchsia-300/10 blur-3xl" />
          <div className="absolute -bottom-40 left-[-140px] h-[520px] w-[520px] rounded-full bg-amber-300/10 blur-3xl" />
        </div>

        <div className="relative z-20 mx-auto max-w-6xl px-4 pb-16 pt-24 sm:pb-20 sm:pt-28">

          <nav className="text-[11px] font-bold text-white/70">
            <a href="/" className="hover:text-white">Home</a>
            <span className="mx-2">/</span>
            <a href="/services" className="hover:text-white">Services</a>
            <span className="mx-2">/</span>
            <span className="text-white">Video Editing</span>
          </nav>

          <div className="mt-6 inline-flex flex-wrap items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[11px] font-extrabold text-white backdrop-blur">
            <span className="grid h-6 w-6 place-items-center rounded-full bg-yellow-400 text-slate-900">
              <Sparkles className="h-4 w-4" />
            </span>
            VIDEO EDITING | REELS | YOUTUBE | VLOGS
            <span className="hidden sm:inline text-white/50">|</span>
            <span className="text-white/85">Clean Cuts | Better Pacing</span>
          </div>

          <div className="mt-8 grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <h1 className="text-4xl font-extrabold leading-[1.05] text-white sm:text-5xl">
                Video editing <span className="text-yellow-300">service</span> for premium content
              </h1>

              <p className="mt-4 max-w-xl text-[15px] leading-7 text-white/80">
                We edit Reels/Shorts, YouTube videos, vlogs, travel films, promos—plus captions, audio
                cleanup, color grading, and finishing for a consistent brand-safe style.
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <MiniBulletDark icon={Scissors} text="Hook-first pacing + clean cuts" />
                <MiniBulletDark icon={Captions} text="Captions (BN/EN) + safe margins" />
                <MiniBulletDark icon={AudioLines} text="Audio cleanup + music mix" />
                <MiniBulletDark icon={Wand2} text="Color grading + finishing polish" />
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="/contact/"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-yellow-400 px-6 py-3 text-sm font-extrabold text-slate-900 shadow-[0_10px_30px_rgba(0,0,0,.25)] transition hover:-translate-y-[1px] hover:bg-yellow-500"
                >
                  Get Editing Quote <ArrowRight className="h-4 w-4" />
                </a>

                <a
                  href="#video-editing-process"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/20 bg-white/10 px-6 py-3 text-sm font-extrabold text-white backdrop-blur transition hover:bg-white/15"
                >
                  How it works <ArrowRight className="h-4 w-4" />
                </a>

                <a
                  href="#video-editing-packages"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/20 bg-white/10 px-6 py-3 text-sm font-extrabold text-white backdrop-blur transition hover:bg-white/15"
                >
                  Packages <ArrowRight className="h-4 w-4" />
                </a>
              </div>

              <div className="mt-7 flex flex-wrap items-center gap-3 text-sm text-white/70">
                <span className="inline-flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  Brand-safe style
                </span>
                <span className="inline-flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-fuchsia-400" />
                  Consistent output
                </span>
                <span className="inline-flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-yellow-300" />
                  Fast turnaround
                </span>
              </div>

              <p className="sr-only">
                video editing service, reels editing, shorts editing, youtube video editing,
                vlog editing, travel video editing, captions bangla english, color grading,
                audio cleanup, motion graphics, Mugnee IT Solutions.
              </p>
            </div>

            <div className="relative">
              <div className="relative overflow-hidden rounded-[32px] border border-white/15 bg-white/5 shadow-[0_30px_90px_rgba(0,0,0,0.35)] backdrop-blur">
                <div className="p-6 sm:p-7">
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-extrabold text-white">Delivery Checklist</div>
                    <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-extrabold text-white/90">
                      PRO
                    </span>
                  </div>

                  <div className="mt-5 grid gap-4">
                    <HeroRow icon={Scissors} title="Cut" desc="Clean cuts + hook pacing + story flow" />
                    <HeroRow icon={Captions} title="Captions" desc="BN/EN subtitles with safe margins" />
                    <HeroRow icon={AudioLines} title="Sound" desc="Noise cleanup + leveling + mix" />
                    <HeroRow icon={Wand2} title="Grade" desc="Color + finishing for premium look" />
                  </div>

                  <div className="mt-6 rounded-2xl border border-white/15 bg-white/5 p-4">
                    <div className="flex items-center gap-3">
                      <span className="grid h-10 w-10 place-items-center rounded-2xl bg-yellow-400 text-slate-900">
                        <BadgeCheck className="h-5 w-5" />
                      </span>
                      <div>
                        <div className="text-sm font-extrabold text-white">Platform-ready exports</div>
                        <div className="text-xs text-white/75">Reels/Shorts | YouTube | Ads</div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 grid gap-4 sm:grid-cols-3">
                    <KpiDark label="Turnaround" value="24-72h" icon={Timer} />
                    <KpiDark label="Quality" value="Premium" icon={Star} />
                    <KpiDark label="Consistency" value="Style System" icon={Layers} />
                  </div>
                </div>
              </div>

              <div className="pointer-events-none absolute -left-4 top-10 hidden sm:block">
                <GlassStat icon={Gauge} title="Retention" desc="Hook-first pacing" />
              </div>
              <div className="pointer-events-none absolute -right-4 bottom-10 hidden sm:block">
                <GlassStat icon={LineChart} title="Output" desc="Weekly consistency" />
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-6xl px-4">
          <div className="h-px w-full bg-white/10" />
        </div>
      </section>

      <ServiceCustomerGuide pillar="video-editing" />

      <ServiceQuickSummary
        title="Video editing snapshot"
        intro="These cards make the service easier to understand quickly by showing editing scope in a more visual way."
        items={includes}
      />

      <ServiceUseCasesGrid
        title="Content types this service fits best"
        intro="A quick use-case layer so visitors can identify the style of editing they actually need."
        items={useCases}
      />

      <ServiceFlowStrip
        title="Editing workflow overview"
        intro="A simple flow that explains how footage moves from raw clips to final export."
        steps={workflow}
      />

      {/* ================= SOLUTION ================= */}
      <section id="video-editing-solution" className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <p className="text-xs font-extrabold tracking-[0.28em] text-slate-500">
            VIDEO EDITING SOLUTION
          </p>
          <h2 className="mt-2 text-3xl font-extrabold text-slate-900">
            Video editing solution for consistent brand content
          </h2>
          <p className="mt-2 max-w-3xl text-sm leading-7 text-slate-600">
            Our editing workflow is built for creators and brands who need speed, consistency, and
            quality across short-form and long-form content.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <Outcome text="Retention-focused cut structure for Reels, Shorts, and YouTube videos" />
            <Outcome text="Unified caption, transition, and grading style for clean brand identity" />
            <Outcome text="Platform-safe exports with proper aspect ratio and audio level checks" />
            <Outcome text="Reliable weekly publishing workflow with revision discipline" />
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="/contact/"
              className="inline-flex items-center gap-2 rounded-2xl bg-slate-900 px-6 py-3 text-sm font-extrabold text-white hover:bg-slate-800"
            >
              Get Editing Solution <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#video-editing-process"
              className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-6 py-3 text-sm font-extrabold text-slate-900 hover:bg-slate-100"
            >
              See process <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      <section id="video-editing-benefits" className="mx-auto max-w-6xl px-4 pb-14">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">
          <p className="text-xs font-extrabold tracking-[0.28em] text-slate-500">VIDEO EDITING BENEFITS</p>
          <h2 className="mt-2 text-3xl font-extrabold text-slate-900">Benefits of this editing workflow</h2>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {[
              "Consistent visual style across reels, shorts, and long-form videos",
              "Better retention through pacing, structure, and clean storytelling",
              "Platform-ready output with captions, sound polish, and proper exports",
              "Faster publishing cycle with organized revision and delivery flow",
            ].map((item) => (
              <div key={item} className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm font-semibold text-slate-700">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="video-editing-comparison" className="mx-auto max-w-6xl px-4 pb-14">
        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
          <p className="text-xs font-extrabold tracking-[0.28em] text-slate-500">VIDEO EDITING COMPARISON</p>
          <h2 className="mt-2 text-3xl font-extrabold text-slate-900">Video editing vs basic editing options</h2>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {[
              "Professional workflow: consistent style, pacing, and platform-ready quality",
              "Basic cut-only editing: faster output, but weaker storytelling and polish",
              "Template-only edits: usable for speed, but lower brand uniqueness",
              "Managed editing process: better revision flow, QA, and publishing consistency",
            ].map((item) => (
              <div key={item} className="rounded-2xl border border-slate-200 bg-white p-4 text-sm font-semibold text-slate-700">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= WHAT YOU GET ================= */}
      <section id="video-editing-deliverables" className="mx-auto max-w-6xl px-4 py-14">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-5">
            <p className="text-xs font-extrabold tracking-[0.28em] text-slate-500">
              VIDEO EDITING DELIVERABLES
            </p>
            <h2 className="mt-3 text-3xl font-extrabold text-slate-900">
              What you get from our video editing service
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Clear deliverables + a simple workflow—so you can publish consistently without stress.
            </p>

            <div className="mt-7 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-start gap-3">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-slate-900 text-white">
                  <FileText className="h-6 w-6" />
                </span>
                <div className="min-w-0">
                  <div className="text-sm font-extrabold text-slate-900">Google-safe service page</div>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    No fake pricing, clean schema markup, strong content sections, and internal linking.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="/services"
                className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-extrabold text-slate-900 hover:bg-slate-100"
              >
                Explore all services <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="/contact/"
                className="inline-flex items-center gap-2 rounded-2xl bg-slate-900 px-4 py-2 text-sm font-extrabold text-white hover:bg-slate-800"
              >
                Request quotation <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
              <div className="text-sm font-extrabold text-slate-900">Deliverables</div>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {deliverables.map((d) => (
                  <div key={d} className="flex items-start gap-2 text-sm text-slate-700">
                    <span className="mt-1 grid h-5 w-5 place-items-center rounded-full bg-emerald-50 ring-1 ring-emerald-100">
                      <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
                    </span>
                    <span className="leading-7">{d}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-2xl bg-slate-50 p-5 ring-1 ring-slate-200">
                <div className="flex items-start gap-3">
                  <HelpCircle className="mt-0.5 h-5 w-5 text-slate-900" />
                  <p className="text-sm text-slate-700 leading-7">
                    We keep everything <b>brand-safe</b>, clean, and platform-ready—so your uploads look consistent.
                  </p>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="#video-editing-process"
                  className="inline-flex items-center gap-2 rounded-2xl bg-slate-900 px-5 py-3 text-sm font-extrabold text-white hover:bg-slate-800"
                >
                  See workflow <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="#video-editing-faq"
                  className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-5 py-3 text-sm font-extrabold text-slate-900 hover:bg-slate-50"
                >
                  Read FAQ <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= USE CASES ================= */}
      <section id="video-editing-use-cases" className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <p className="text-xs font-extrabold tracking-[0.28em] text-slate-500">
            VIDEO EDITING USE CASES
          </p>
          <h2 className="mt-2 text-3xl font-extrabold text-slate-900">
            Reels, YouTube, travel films & promo edits
          </h2>
          <p className="mt-2 max-w-3xl text-sm leading-7 text-slate-600">
            Choose the format you publish most—we’ll keep the style consistent and performance-focused.
          </p>

          <div className="mt-10 grid gap-6 lg:grid-cols-4">
            {useCases.map((u) => (
              <MiniUseCase key={u.title} icon={u.icon} title={u.title} desc={u.desc} />
            ))}
          </div>
        </div>
      </section>

      {/* ================= PROCESS ================= */}
      <section id="video-editing-process" className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <p className="text-xs font-extrabold tracking-[0.28em] text-slate-500">
            VIDEO EDITING PROCESS
          </p>
          <h2 className="mt-2 text-3xl font-extrabold text-slate-900">
            Video editing process — step by step
          </h2>
          <p className="mt-2 max-w-3xl text-sm leading-7 text-slate-600">
            Footage + reference → edit structure → captions/sound → color/finish → export → revisions.
          </p>

          <div className="mt-10 grid gap-6 lg:grid-cols-4">
            {workflow.map((s, idx) => (
              <StepCard key={s.title} n={`0${idx + 1}`} icon={s.icon} title={s.title} desc={s.desc} />
            ))}
          </div>

          <div className="mt-10 rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
            <div className="grid gap-6 lg:grid-cols-3">
              <WhyCard
                icon={ClipboardCheck}
                title="Clear checklist"
                desc="Every delivery follows a QA checklist (audio levels, safe margins, export settings)."
              />
              <WhyCard
                icon={Workflow}
                title="Smooth workflow"
                desc="Simple inputs → predictable timelines → organized delivery links."
              />
              <WhyCard
                icon={ShieldCheck}
                title="Brand-safe edits"
                desc="Clean cuts, readable captions, and consistent styling for a premium look."
              />
            </div>
          </div>
        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section id="video-editing-features" className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-5">
              <p className="text-xs font-extrabold tracking-[0.28em] text-slate-500">
                VIDEO EDITING FEATURES
              </p>
              <h2 className="mt-3 text-3xl font-extrabold text-slate-900">
                Captions + sound + grade — done right
              </h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                We don’t just cut clips. We deliver platform-ready edits with a consistent style system.
              </p>

              <div className="mt-7 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="text-sm font-extrabold text-slate-900">Expected outcomes</div>
                <div className="mt-3 space-y-2">
                  <Outcome text="Higher watch time with better pacing" />
                  <Outcome text="Cleaner brand look with consistent captions" />
                  <Outcome text="More professional sound with leveling + cleanup" />
                  <Outcome text="Premium look with color grade + finishing" />
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="/services/seo"
                  className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-2 text-sm font-extrabold text-slate-900 hover:bg-slate-50"
                >
                  SEO Services <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="/services/lead-generation"
                  className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-2 text-sm font-extrabold text-slate-900 hover:bg-slate-50"
                >
                  Lead Generation <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="/contact/"
                  className="inline-flex items-center gap-2 rounded-2xl bg-slate-900 px-4 py-2 text-sm font-extrabold text-white hover:bg-slate-800"
                >
                  Request quotation <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-7 grid gap-6 sm:grid-cols-2">
              {includes.map((c) => (
                <IncludeCard key={c.title} icon={c.icon} title={c.title} desc={c.desc} pills={c.pills} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= WHY US ================= */}
      <section id="video-editing-agency" className="bg-white">
        <div className="mx-auto max-w-6xl px-4 pb-14">
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
            <p className="text-xs font-extrabold tracking-[0.28em] text-slate-500">
              VIDEO EDITING AGENCY
            </p>
            <h2 className="mt-2 text-3xl font-extrabold text-slate-900">
              Video editing service with a professional team
            </h2>
            <p className="mt-2 max-w-3xl text-sm leading-7 text-slate-600">
              You get a structured workflow, a QA checklist, and editors who care about pacing, captions,
              sound, and clean exports—so your content stays premium.
            </p>

            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              <WhyCard
                icon={ShieldCheck}
                title="Brand-safe style"
                desc="We keep captions, pacing, and transitions clean so your brand stays premium."
              />
              <WhyCard
                icon={Wrench}
                title="Revision discipline"
                desc="Clear deliverables + structured revisions—fast output without messy back-and-forth."
              />
              <WhyCard
                icon={Users}
                title="Team workflow"
                desc="Editors + QA checklist ensure consistent output for weekly publishing."
              />
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="/contact/"
                className="inline-flex items-center gap-2 rounded-2xl bg-slate-900 px-6 py-3 text-sm font-extrabold text-white hover:bg-slate-800"
              >
                Get Editing Quote <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#video-editing-faq"
                className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-6 py-3 text-sm font-extrabold text-slate-900 hover:bg-slate-50"
              >
                Read FAQ <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ================= PACKAGES (NO PUBLIC PRICE) ================= */}
      <section id="video-editing-packages" className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-extrabold tracking-[0.28em] text-slate-500">
                VIDEO EDITING PACKAGES
              </p>
              <h2 className="mt-2 text-3xl font-extrabold text-slate-900">
                Choose a plan by scope (quotation-based)
              </h2>
              <p className="mt-2 max-w-2xl text-sm text-slate-600">
                We don’t show fixed public pricing. Quotation depends on footage length, complexity,
                platform, delivery timeline, and revision scope.
              </p>
            </div>

            <a
              href="/contact/"
              className="inline-flex w-fit items-center justify-center gap-2 rounded-2xl bg-slate-900 px-6 py-3 text-sm font-extrabold text-white transition hover:bg-slate-800"
            >
              Get Quote <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {plans.map((p) => (
              <PlanCardNoPrice
                key={p.title}
                title={p.title}
                subtitle={p.subtitle}
                items={p.items}
                featured={p.featured}
                cta="Get Quote"
              />
            ))}
          </div>

          <div className="mt-10 rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="min-w-0">
                <div className="text-lg font-extrabold text-slate-900">Need samples first?</div>
                <p className="mt-1 text-sm text-slate-600">
                  Ask for our latest reels/YouTube samples—then we’ll recommend the best package.
                </p>
              </div>
              <a
                href="/contact/"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-slate-900 px-6 py-3 text-sm font-extrabold text-white hover:bg-slate-800"
              >
                Request Samples <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ================= KEYWORD PAGES ================= */}
      <section className="mx-auto max-w-6xl px-4 py-14">
        <p className="text-xs font-extrabold tracking-[0.28em] text-slate-500">
          VIDEO EDITING KEYWORDS
        </p>
        <h2 className="mt-2 text-3xl font-extrabold text-slate-900">
          Video editing services by intent
        </h2>
        <p className="mt-2 max-w-3xl text-sm leading-7 text-slate-600">
          Targeted pages for common search intents. Each page is unique and focused.
        </p>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {keywordPages.map((k) => (
            <a
              key={k.href}
              href={k.href}
              className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="text-sm font-extrabold text-slate-900">{k.title}</div>
              <p className="mt-2 text-sm text-slate-600">{k.desc}</p>
              <div className="mt-4 inline-flex items-center gap-2 text-sm font-extrabold text-slate-900">
                View page <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* ================= FAQ + FINAL CTA ================= */}
      <section id="video-editing-faq" className="mx-auto max-w-6xl px-4 pb-16 pt-14">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <p className="text-xs font-extrabold tracking-[0.28em] text-slate-500">VIDEO EDITING FAQ</p>
          <h2 className="mt-2 text-3xl font-extrabold text-slate-900">
            Video editing service FAQs
          </h2>

          <div className="mt-8 grid gap-4 lg:grid-cols-2">
            {faqs.map((f) => (
              <details key={f.q} className="group rounded-3xl border border-slate-200 bg-white p-6">
                <summary className="cursor-pointer list-none text-sm font-extrabold text-slate-900">
                  {f.q}
                  <span className="float-right text-slate-400 transition group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-sm leading-7 text-slate-600">{f.a}</p>
              </details>
            ))}
          </div>

          <div className="mt-10 overflow-hidden rounded-3xl border border-slate-200 bg-slate-900 p-6 text-white sm:p-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="min-w-0">
                <div className="text-lg font-extrabold">Want consistent edits every week?</div>
                <p className="mt-1 text-sm text-white/75">
                  Share footage + platform + reference style—we’ll reply with workflow and quotation.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <a
                  href="/contact/"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-yellow-400 px-6 py-3 text-sm font-extrabold text-slate-900 transition hover:bg-yellow-500"
                >
                  Get Quote <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="/services"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/20 bg-white/10 px-6 py-3 text-sm font-extrabold text-white transition hover:bg-white/15"
                >
                  Explore services <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>

            <p className="sr-only">
              video editing service, reels editing, shorts editing, youtube video editing, vlog editing,
              travel video editing, captions bn en, color grading, audio cleanup, export settings.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

/* ================= UI bits ================= */

function MiniBulletDark({ icon: Icon, text }: { icon: any; text: string }) {
  return (
    <div className="flex items-start gap-3 rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur">
      <div className="grid h-10 w-10 place-items-center rounded-2xl bg-white/10">
        <Icon className="h-5 w-5 text-white" />
      </div>
      <p className="text-sm font-semibold leading-6 text-white/85">{text}</p>
    </div>
  );
}

function HeroRow({ icon: Icon, title, desc }: { icon: any; title: string; desc: string }) {
  return (
    <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
      <div className="grid h-11 w-11 place-items-center rounded-2xl bg-white/10">
        <Icon className="h-5 w-5 text-white" />
      </div>
      <div className="min-w-0">
        <div className="text-sm font-extrabold text-white">{title}</div>
        <div className="mt-1 text-xs leading-5 text-white/70">{desc}</div>
      </div>
    </div>
  );
}

function GlassStat({ icon: Icon, title, desc }: { icon: any; title: string; desc: string }) {
  return (
    <div className="rounded-3xl border border-white/15 bg-white/10 px-5 py-4 shadow-[0_20px_60px_rgba(0,0,0,.35)] backdrop-blur">
      <div className="flex items-center gap-3">
        <span className="grid h-10 w-10 place-items-center rounded-2xl bg-yellow-400 text-slate-900">
          <Icon className="h-5 w-5" />
        </span>
        <div className="min-w-0">
          <div className="text-sm font-extrabold text-white">{title}</div>
          <div className="text-xs text-white/70">{desc}</div>
        </div>
      </div>
    </div>
  );
}

function KpiDark({ label, value, icon: Icon }: { label: string; value: string; icon: any }) {
  return (
    <div className="rounded-3xl border border-white/15 bg-white/10 p-5 backdrop-blur">
      <div className="flex items-center justify-between">
        <div className="text-xs font-extrabold text-white/75">{label}</div>
        <span className="grid h-9 w-9 place-items-center rounded-2xl bg-yellow-400 text-slate-900">
          <Icon className="h-4 w-4" />
        </span>
      </div>
      <div className="mt-2 text-lg font-extrabold text-white">{value}</div>
    </div>
  );
}

function StepCard({
  n,
  icon: Icon,
  title,
  desc,
}: {
  n: string;
  icon: any;
  title: string;
  desc: string;
}) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <span className="text-xs font-extrabold text-slate-500">STEP {n}</span>
        <span className="grid h-10 w-10 place-items-center rounded-2xl bg-slate-900 text-white">
          <Icon className="h-5 w-5" />
        </span>
      </div>
      <div className="mt-4 text-lg font-extrabold text-slate-900">{title}</div>
      <p className="mt-2 text-sm leading-7 text-slate-600">{desc}</p>
    </div>
  );
}

function WhyCard({ icon: Icon, title, desc }: { icon: any; title: string; desc: string }) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <div className="flex items-start gap-3">
        <div className="grid h-12 w-12 place-items-center rounded-2xl bg-slate-900">
          <Icon className="h-6 w-6 text-white" />
        </div>
        <div className="min-w-0">
          <div className="text-sm font-extrabold text-slate-900">{title}</div>
          <p className="mt-2 text-sm leading-7 text-slate-600">{desc}</p>
        </div>
      </div>
    </div>
  );
}

function Outcome({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-2 text-sm text-slate-700">
      <span className="mt-1 grid h-5 w-5 place-items-center rounded-full bg-emerald-50 ring-1 ring-emerald-100">
        <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
      </span>
      <span className="leading-6">{text}</span>
    </div>
  );
}

function IncludeCard({
  icon: Icon,
  title,
  desc,
  pills,
}: {
  icon: any;
  title: string;
  desc: string;
  pills: string[];
}) {
  return (
    <div className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-yellow-200/60 blur-2xl opacity-0 transition-opacity group-hover:opacity-100" />
      <div className="flex items-center gap-3">
        <div className="grid h-12 w-12 place-items-center rounded-2xl bg-slate-900">
          <Icon className="h-6 w-6 text-white" />
        </div>
        <div className="min-w-0">
          <h3 className="text-lg font-extrabold text-slate-900">{title}</h3>
          <p className="mt-1 text-sm text-slate-600">{desc}</p>
        </div>
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        {pills.map((p) => (
          <span
            key={p}
            className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-bold text-slate-700"
          >
            {p}
          </span>
        ))}
      </div>

      <div className="mt-6 flex items-center gap-2 text-sm font-extrabold text-slate-900">
        Learn more <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
      </div>
    </div>
  );
}

function PlanCardNoPrice({
  title,
  subtitle,
  items,
  cta,
  featured,
}: {
  title: string;
  subtitle: string;
  items: string[];
  cta: string;
  featured?: boolean;
}) {
  return (
    <div
      className={[
        "relative overflow-hidden rounded-3xl border bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg",
        featured ? "border-yellow-300 ring-1 ring-yellow-200" : "border-slate-200",
      ].join(" ")}
    >
      {featured && (
        <div className="absolute right-4 top-4 rounded-full bg-yellow-100 px-3 py-1 text-xs font-extrabold text-yellow-700">
          Best Fit
        </div>
      )}

      <div className="text-sm font-extrabold text-slate-900">{title}</div>
      <div className="mt-1 text-sm text-slate-600">{subtitle}</div>

      <div className="mt-6 space-y-3">
        {items.map((i) => (
          <div key={i} className="flex items-start gap-2 text-sm text-slate-700">
            <span className="mt-1 grid h-5 w-5 place-items-center rounded-full bg-emerald-50 ring-1 ring-emerald-100">
              <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
            </span>
            <span className="leading-7">{i}</span>
          </div>
        ))}
      </div>

      <a
        href="/contact/"
        className={[
          "group mt-7 inline-flex w-full items-center justify-center gap-2 rounded-2xl px-6 py-3 text-sm font-extrabold transition",
          featured
            ? "bg-yellow-400 text-slate-900 hover:bg-yellow-500"
            : "bg-slate-900 text-white hover:bg-slate-800",
        ].join(" ")}
      >
        {cta}
        <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
      </a>

      <div className="mt-4 text-xs text-slate-500">
        *Quotation depends on footage length, complexity, platform, and revisions.
      </div>
    </div>
  );
}

function MiniUseCase({ icon: Icon, title, desc }: { icon: any; title: string; desc: string }) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <div className="flex items-start gap-3">
        <div className="grid h-12 w-12 place-items-center rounded-2xl bg-slate-900 text-white">
          <Icon className="h-6 w-6" />
        </div>
        <div className="min-w-0">
          <div className="text-sm font-extrabold text-slate-900">{title}</div>
          <p className="mt-2 text-sm leading-7 text-slate-600">{desc}</p>
        </div>
      </div>
    </div>
  );
}


