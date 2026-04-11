"use client";

import { Code2 } from "lucide-react";
import { useMemo, useState } from "react";

type Props = {
  label: string;
  /** Simple Icons CDN */
  slug?: string;
  hex?: string;
  /** Full URL (e.g. jsDelivr SVG); shown inverted for dark badges */
  iconUrl?: string;
};

export function TechStackIcon({ label, slug, hex, iconUrl }: Props) {
  const [failed, setFailed] = useState(false);

  const src = useMemo(() => {
    if (iconUrl) return iconUrl;
    if (slug) return `https://cdn.simpleicons.org/${slug}/${hex ?? "FFFFFF"}`;
    return "";
  }, [iconUrl, slug, hex]);

  const invert = Boolean(iconUrl);

  if (failed || !src) {
    return <Code2 className="h-5 w-5 shrink-0 text-amber-300" aria-hidden />;
  }

  return (
    <img
      src={src}
      alt=""
      width={20}
      height={20}
      loading="lazy"
      decoding="async"
      className={[
        "h-5 w-5 shrink-0 object-contain",
        invert ? "opacity-95 brightness-0 invert" : "",
      ].join(" ")}
      aria-hidden
      onError={() => setFailed(true)}
      title={label}
    />
  );
}
