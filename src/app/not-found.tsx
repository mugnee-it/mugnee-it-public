import Link from "next/link";

export default function NotFound() {
  return (
    <main className="bg-white">
      <section className="mx-auto max-w-3xl px-4 py-24 text-center">
        <p className="text-xs font-extrabold tracking-[0.2em] text-slate-500">404 ERROR</p>
        <h1 className="mt-3 text-4xl font-extrabold text-slate-900 sm:text-5xl">
          Page not found
        </h1>
        <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
          The page you are looking for does not exist or has been moved.
        </p>
        <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/"
            prefetch={false}
            className="rounded-full bg-slate-900 px-6 py-3 text-sm font-extrabold text-white hover:bg-slate-800"
          >
            Go Home
          </Link>
          <Link
            href="/services/"
            prefetch={false}
            className="rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-extrabold text-slate-900 hover:bg-slate-50"
          >
            Explore Services
          </Link>
        </div>
      </section>
    </main>
  );
}
