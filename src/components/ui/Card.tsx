import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function Card({ children, className = "" }: Props) {
  return (
    <div
      className={`group relative overflow-hidden rounded-3xl bg-white p-8 ring-1 ring-slate-200/70 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900/10 ${className}`}
    >
      {children}
    </div>
  );
}
