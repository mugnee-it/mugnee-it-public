import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Download, ExternalLink, FileText } from "lucide-react";
import { getProjectPdfPath, projects } from "@/data/projects";

type Props = {
  params: Promise<{ slug: string }>;
};

const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || "https://mugneeit.com").replace(
  /\/$/,
  ""
);

function absoluteCoverUrl(src: string) {
  if (/^https?:\/\//i.test(src)) return src;
  const path = src.startsWith("/") ? src : `/${src}`;
  return `${SITE_URL}${path}`;
}

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) {
    return { title: "Portfolio item not found" };
  }

  const desc = project.summaryOnly
    ? project.shortDesc
    : `${project.shortDesc} View full portfolio screenshots and details in PDF format.`;

  return {
    title: `${project.title} | Portfolio`,
    description: desc,
    alternates: { canonical: `${SITE_URL}/projects/${project.slug}/` },
    openGraph: {
      title: `${project.title} | Portfolio`,
      description: project.shortDesc,
      type: "article",
      url: `${SITE_URL}/projects/${project.slug}/`,
      images: [{ url: absoluteCoverUrl(project.cover.src), alt: project.cover.alt }],
    },
    robots: { index: true, follow: true },
  };
}

export default async function ProjectPdfPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return notFound();

  if (project.summaryOnly) {
    return (
      <main className="bg-white">
        <section className="mx-auto max-w-7xl scroll-mt-32 px-4 pb-20 pt-32 sm:pt-36">
          <nav className="text-xs font-bold text-slate-500">
            <Link prefetch={false} href="/">
              Home
            </Link>{" "}
            <span className="mx-2">/</span>
            <Link prefetch={false} href="/projects">
              Portfolio
            </Link>{" "}
            <span className="mx-2">/</span>
            <span className="text-slate-900">{project.displayTitle ?? project.title}</span>
          </nav>

          <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-start">
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-4">
              <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-slate-100">
                <Image
                  src={project.cover.src}
                  alt={project.cover.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className={
                    project.coverFit === "contain" ? "object-contain" : "object-cover"
                  }
                />
              </div>
            </div>

            <div>
              <p className="text-xs font-extrabold uppercase tracking-wider text-slate-500">
                {project.type}
                {project.year ? ` · ${project.year}` : ""}
              </p>
              <h1 className="mt-2 text-3xl font-extrabold text-slate-900 sm:text-4xl">
                {project.title}
              </h1>
              <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
                {project.shortDesc}
              </p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-slate-200 bg-slate-50/80 p-4">
                  <div className="text-xs font-extrabold text-slate-500">Challenge</div>
                  <p className="mt-2 text-sm text-slate-700">{project.problem}</p>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-slate-50/80 p-4">
                  <div className="text-xs font-extrabold text-slate-500">What we built</div>
                  <p className="mt-2 text-sm text-slate-700">{project.solution}</p>
                </div>
              </div>

              <ul className="mt-6 space-y-2 text-sm text-slate-700">
                {project.deliverables.slice(0, 5).map((d) => (
                  <li key={d} className="flex gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400" />
                    {d}
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  prefetch={false}
                  href="/projects"
                  className="inline-flex items-center gap-2 rounded-2xl border border-slate-300 bg-white px-5 py-2.5 text-sm font-extrabold text-slate-900 hover:bg-slate-50"
                >
                  <ArrowLeft className="h-4 w-4" /> Back to portfolio
                </Link>
                {project.liveUrl ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-2xl border border-slate-300 bg-white px-5 py-2.5 text-sm font-extrabold text-slate-900 hover:bg-slate-50"
                  >
                    <ExternalLink className="h-4 w-4" />
                    {project.backlinkAnchorText || "Live link"}
                  </a>
                ) : null}
                <Link
                  prefetch={false}
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-2xl bg-slate-900 px-5 py-2.5 text-sm font-extrabold text-white hover:bg-slate-800"
                >
                  Discuss a similar build
                </Link>
                <Link
                  prefetch={false}
                  href="/softwares"
                  className="inline-flex items-center gap-2 rounded-2xl bg-yellow-400 px-5 py-2.5 text-sm font-extrabold text-slate-900 hover:bg-yellow-500"
                >
                  Software lineup
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  }

  const pdfPath = getProjectPdfPath(project);
  const isPdf = /\.pdf($|\?)/i.test(pdfPath);

  return (
    <main className="bg-white">
      <section className="mx-auto max-w-7xl scroll-mt-32 px-4 pb-16 pt-32 sm:pt-36">
        <nav className="text-xs font-bold text-slate-500">
          <Link prefetch={false} href="/">
            Home
          </Link>{" "}
          <span className="mx-2">/</span>
          <Link prefetch={false} href="/projects">
            Portfolio
          </Link>{" "}
          <span className="mx-2">/</span>
          <span className="text-slate-900">{project.title}</span>
        </nav>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
              {project.title}
            </h1>
            <p className="mt-2 max-w-3xl text-sm text-slate-600">{project.shortDesc}</p>
          </div>
          <div className="flex flex-wrap gap-2">
            <Link
              prefetch={false}
              href="/projects"
              className="inline-flex items-center gap-2 rounded-2xl border border-slate-300 bg-white px-4 py-2 text-sm font-extrabold text-slate-900 hover:bg-slate-50"
            >
              <ArrowLeft className="h-4 w-4" /> Back to portfolio
            </Link>
            <a
              href={pdfPath}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl bg-slate-900 px-4 py-2 text-sm font-extrabold text-white hover:bg-slate-800"
            >
              <Download className="h-4 w-4" />{" "}
              {isPdf ? "Open PDF in New Tab" : "Open File in New Tab"}
            </a>
            {project.liveUrl ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-2xl border border-slate-300 bg-white px-4 py-2 text-sm font-extrabold text-slate-900 hover:bg-slate-50"
              >
                <ExternalLink className="h-4 w-4" />
                {project.backlinkAnchorText || "Visit Live Website"}
              </a>
            ) : null}
          </div>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-4">
            <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-slate-100">
              <Image
                src={project.cover.src}
                alt={project.cover.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-contain"
              />
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-3 shadow-sm">
            <div className="mb-3 flex items-center gap-2 px-2 text-sm font-extrabold text-slate-800">
              <FileText className="h-4 w-4" />{" "}
              {isPdf ? "Full Project PDF Preview" : "Project File Preview"}
            </div>
            {isPdf ? (
              <iframe
                src={pdfPath}
                title={`${project.title} PDF`}
                className="h-[78vh] w-full rounded-2xl border border-slate-200"
              />
            ) : (
              <div className="relative h-[78vh] w-full overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
                <Image
                  src={pdfPath}
                  alt={`${project.title} file preview`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 55vw"
                  className="object-contain"
                />
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
