import React from "react";

export function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
      {children}
    </div>
  );
}

export function Section({
  alt = false,
  children,
}: {
  alt?: boolean;
  children: React.ReactNode;
}) {
  return (
    <section className={`${alt ? "bg-slate-50" : "bg-white"} py-16 sm:py-20`}>
      {children}
    </section>
  );
}
