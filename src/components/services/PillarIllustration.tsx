import type { ReactNode } from "react";
import type { ServicePillarKey } from "./servicePillarTypes";

type Props = { pillar: ServicePillarKey; className?: string };

export default function PillarIllustration({ pillar, className }: Props) {
  const uid = pillar.replace(/[^a-z-]/g, "");
  return (
    <div className={className} aria-hidden>
      {pillar === "nextjs" && <ArtNext uid={uid} />}
      {pillar === "frontend" && <ArtFrontend uid={uid} />}
      {pillar === "mern" && <ArtMern uid={uid} />}
      {pillar === "wordpress" && <ArtWordPress uid={uid} />}
      {pillar === "shopify" && <ArtShopify uid={uid} />}
      {pillar === "wix" && <ArtWix uid={uid} />}
      {pillar === "seo" && <ArtSeo uid={uid} />}
      {pillar === "lead-generation" && <ArtLead uid={uid} />}
      {pillar === "linkedin-setter" && <ArtLinkedin uid={uid} />}
      {pillar === "video-editing" && <ArtVideo uid={uid} />}
      {pillar === "graphic-design" && <ArtGraphic uid={uid} />}
      {pillar === "software-solution" && <ArtSoftware uid={uid} />}
      {pillar === "webmail" && <ArtWebmail uid={uid} />}
      {pillar === "web-scraping" && <ArtScrape uid={uid} />}
    </div>
  );
}

function DefsBase({ uid }: { uid: string }) {
  return (
    <defs>
      <linearGradient id={`${uid}-bg`} x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#f8fafc" />
        <stop offset="45%" stopColor="#f1f5f9" />
        <stop offset="100%" stopColor="#eef2ff" />
      </linearGradient>
      <radialGradient id={`${uid}-glow1`} cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#a78bfa" stopOpacity="0.35" />
        <stop offset="100%" stopColor="#a78bfa" stopOpacity="0" />
      </radialGradient>
      <radialGradient id={`${uid}-glow2`} cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#fcd34d" stopOpacity="0.4" />
        <stop offset="100%" stopColor="#fcd34d" stopOpacity="0" />
      </radialGradient>
      <filter id={`${uid}-sh`} x="-8%" y="-8%" width="116%" height="116%">
        <feDropShadow dx="0" dy="6" stdDeviation="10" floodColor="#0f172a" floodOpacity="0.12" />
      </filter>
      <pattern id={`${uid}-dots`} width="22" height="22" patternUnits="userSpaceOnUse">
        <circle cx="2" cy="2" r="1.2" fill="#6366f1" opacity="0.11" />
      </pattern>
      <linearGradient id={`${uid}-rim`} x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#ffffff" stopOpacity="0.55" />
        <stop offset="22%" stopColor="#ffffff" stopOpacity="0.08" />
        <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
      </linearGradient>
      <linearGradient id={`${uid}-floor`} x1="50%" y1="0%" x2="50%" y2="100%">
        <stop offset="0%" stopColor="#0f172a" stopOpacity="0" />
        <stop offset="100%" stopColor="#6366f1" stopOpacity="0.06" />
      </linearGradient>
    </defs>
  );
}

function Canvas({ uid, children }: { uid: string; children: ReactNode }) {
  return (
    <svg viewBox="0 0 560 280" className="h-auto w-full" fill="none" xmlns="http://www.w3.org/2000/svg">
      <DefsBase uid={uid} />
      <rect width="560" height="280" rx="22" fill={`url(#${uid}-bg)`} />
      <rect width="560" height="280" rx="22" fill={`url(#${uid}-dots)`} />
      <ellipse cx="100" cy="70" rx="120" ry="95" fill={`url(#${uid}-glow1)`} />
      <ellipse cx="480" cy="220" rx="140" ry="100" fill={`url(#${uid}-glow2)`} />
      <rect width="560" height="280" rx="22" fill={`url(#${uid}-floor)`} />
      {children}
      <rect x="1" y="1" width="558" height="278" rx="21" fill="none" stroke={`url(#${uid}-rim)`} strokeWidth="1" />
    </svg>
  );
}

function BrowserChrome({ x, y, w, h, uid }: { x: number; y: number; w: number; h: number; uid: string }) {
  const r = 14;
  return (
    <g filter={`url(#${uid}-sh)`}>
      <rect x={x} y={y} width={w} height={h} rx={r} fill="#fff" stroke="#e2e8f0" strokeWidth="1.5" />
      <rect x={x} y={y} width={w} height={36} rx={r} fill="#f8fafc" />
      <line x1={x} y1={y + 36} x2={x + w} y2={y + 36} stroke="#e2e8f0" strokeWidth="1" />
      <circle cx={x + 18} cy={y + 18} r="5" fill="#fecaca" />
      <circle cx={x + 34} cy={y + 18} r="5" fill="#fde68a" />
      <circle cx={x + 50} cy={y + 18} r="5" fill="#bbf7d0" />
      <rect x={x + w - 120} y={y + 11} width={100} height={14} rx={7} fill="#fff" stroke="#e2e8f0" strokeWidth="1" />
    </g>
  );
}

function ArtNext({ uid }: { uid: string }) {
  return (
    <Canvas uid={uid}>
      <BrowserChrome x={28} y={36} w={220} h={210} uid={uid} />
      <defs>
        <linearGradient id={`${uid}-nx`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#38bdf8" />
          <stop offset="100%" stopColor="#6366f1" />
        </linearGradient>
      </defs>
      <rect x={44} y={92} width={188} height={100} rx={12} fill={`url(#${uid}-nx)`} opacity="0.18" />
      <text x={138} y={158} textAnchor="middle" fill="#0f172a" fontSize="42" fontWeight="900" fontFamily="system-ui,sans-serif">
        N
      </text>
      <rect x={44} y={204} width={100} height={10} rx={4} fill="#e2e8f0" />
      <rect x={44} y={220} width={160} height={8} rx={3} fill="#cbd5e1" />
      <g filter={`url(#${uid}-sh)`}>
        <rect x={268} y={48} width={264} height={198} rx={16} fill="#0f172a" stroke="#334155" strokeWidth="1.5" />
        <rect x={288} y={72} width={180} height="10" rx={4} fill="#334155" />
        <rect x={288} y={92} width={140} height="8" rx={3} fill="#475569" />
        <rect x={288} y={112} width={220} height={8} rx={3} fill="#475569" opacity="0.7" />
        <rect x={288} y={136} width={220} height={72} rx={10} fill="#1e293b" stroke="#475569" />
        <text x={398} y={182} textAnchor="middle" fill="#fbbf24" fontSize="12" fontWeight="800" fontFamily="system-ui,sans-serif">
          SSR · SEO · CWV
        </text>
      </g>
      <path
        d="M248 140h12l8 8-8 8h-12"
        stroke="#94a3b8"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Canvas>
  );
}

function ArtFrontend({ uid }: { uid: string }) {
  return (
    <Canvas uid={uid}>
      <g filter={`url(#${uid}-sh)`}>
        <circle cx="140" cy="140" r="72" fill="#fff" stroke="#e2e8f0" strokeWidth="2" />
        <circle cx="140" cy="140" r="58" stroke="#22d3ee" strokeWidth="2.5" fill="none" opacity="0.9" />
        <ellipse cx="140" cy="140" rx="28" ry="12" stroke="#22d3ee" strokeWidth="2" fill="none" />
        <path d="M140 82v116M86 140h108" stroke="#22d3ee" strokeWidth="1.5" opacity="0.45" />
        <circle cx="140" cy="140" r="8" fill="#0ea5e9" />
      </g>
      <BrowserChrome x={248} y={40} w={284} h={200} uid={uid} />
      <rect x={268} y={92} width={100} height="10" rx={3} fill="#64748b" />
      <rect x={268} y={110} width={160} height="8" rx={2} fill="#cbd5e1" />
      <rect x={268} y={130} width={244} height={88} rx={12} fill="#eef2ff" stroke="#a5b4fc" strokeWidth="1.5" />
      <rect x={284} y={148} width={80} height="52" rx={8} fill="#fff" stroke="#c7d2fe" />
      <rect x={376} y={148} width={120} height="24" rx={6} fill="#c7d2fe" opacity="0.5" />
      <rect x={376} y={180} width={100} height="20" rx={5} fill="#818cf8" opacity="0.35" />
    </Canvas>
  );
}

function ArtMern({ uid }: { uid: string }) {
  const blocks = [
    { x: 36, t: "M", f: "#10b981", s: "#059669" },
    { x: 156, t: "E", f: "#f59e0b", s: "#d97706" },
    { x: 276, t: "R", f: "#0ea5e9", s: "#0284c7" },
    { x: 396, t: "N", f: "#22c55e", s: "#16a34a" },
  ];
  return (
    <Canvas uid={uid}>
      <defs>
        {blocks.map((b, i) => (
          <linearGradient key={b.t} id={`${uid}-m${i}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={b.f} />
            <stop offset="100%" stopColor={b.s} />
          </linearGradient>
        ))}
      </defs>
      <text x="280" y="32" textAnchor="middle" fill="#64748b" fontSize="11" fontWeight="800" letterSpacing="0.2em" fontFamily="system-ui,sans-serif">
        FULL STACK LANE
      </text>
      {blocks.map((b, i) => (
        <g key={b.t} filter={`url(#${uid}-sh)`}>
          <rect x={b.x} y={56} width={88} height={196} rx={16} fill="#fff" stroke="#e2e8f0" strokeWidth="1.5" />
          <rect x={b.x + 8} y={72} width={72} height={120} rx={12} fill={`url(#${uid}-m${i})`} opacity="0.92" />
          <text x={b.x + 44} y={150} textAnchor="middle" fill="#fff" fontSize="32" fontWeight="900" fontFamily="system-ui,sans-serif">
            {b.t}
          </text>
          <rect x={b.x + 14} y={206} width={60} height={6} rx={2} fill="#e2e8f0" />
          <rect x={b.x + 14} y={218} width={44} height={6} rx={2} fill="#cbd5e1" />
        </g>
      ))}
      <path
        d="M124 136h20M244 136h20M364 136h20"
        stroke="#94a3b8"
        strokeWidth="2.5"
        strokeLinecap="round"
        opacity="0.85"
      />
      <path
        d="M80 248c120-28 280-28 400 0"
        stroke="#c4b5fd"
        strokeWidth="1.25"
        fill="none"
        strokeLinecap="round"
        opacity="0.45"
      />
    </Canvas>
  );
}

function ArtWordPress({ uid }: { uid: string }) {
  return (
    <Canvas uid={uid}>
      <g filter={`url(#${uid}-sh)`}>
        <circle cx="150" cy="140" r="88" fill="#fff" stroke="#e2e8f0" strokeWidth="2" />
        <circle cx="150" cy="140" r="70" fill="#21759b" opacity="0.12" />
        <circle cx="150" cy="140" r="54" stroke="#21759b" strokeWidth="3" fill="#fff" />
        <text x="150" y="152" textAnchor="middle" fill="#21759b" fontSize="44" fontWeight="900" fontFamily="Georgia,serif">
          W
        </text>
      </g>
      <BrowserChrome x={268} y={44} w={264} h={192} uid={uid} />
      <rect x={288} y={96} width={120} height="10" rx={3} fill="#6ee7b7" opacity="0.6" />
      <rect x={288} y={116} width={180} height="8" rx={2} fill="#e2e8f0" />
      <rect x={288} y={136} width={200} height="72" rx={10} fill="#ecfdf5" stroke="#6ee7b7" strokeWidth="1.5" />
      <rect x={304} y={152} width={72} height="40" rx={6} fill="#fff" stroke="#d1fae5" />
      <rect x={388} y={152} width={84} height="12" rx={3} fill="#d1fae5" />
      <rect x={388} y={172} width={64} height="8" rx={2} fill="#e2e8f0" />
    </Canvas>
  );
}

function ArtShopify({ uid }: { uid: string }) {
  return (
    <Canvas uid={uid}>
      <g filter={`url(#${uid}-sh)`}>
        <path
          d="M130 210 L130 95 Q130 58 168 58 L188 58 Q226 58 226 95 L226 210 Z"
          fill="#95bf47"
          stroke="#7cb342"
          strokeWidth="2"
        />
        <path d="M150 100 L178 88 L206 100" stroke="#fff" strokeWidth="2" fill="none" opacity="0.5" strokeLinecap="round" />
      </g>
      <BrowserChrome x={268} y={44} w={264} h={192} uid={uid} />
      <rect x={288} y={96} width={224} height="48" rx={8} fill="#ecfccb" stroke="#bef264" />
      <rect x={288} y={156} width={100} height="64" rx={10} fill="#fff" stroke="#e2e8f0" />
      <rect x={300} y={170} width={76} height="36" rx={4} fill="#f1f5f9" />
      <rect x={404} y={156} width={108} height="40" rx={10} fill="#0f172a" />
      <text x="458" y="182" textAnchor="middle" fill="#fbbf24" fontSize="11" fontWeight="800" fontFamily="system-ui,sans-serif">
        Checkout
      </text>
    </Canvas>
  );
}

function ArtWix({ uid }: { uid: string }) {
  return (
    <Canvas uid={uid}>
      <g filter={`url(#${uid}-sh)`}>
        <rect x={40} y={52} width={200} height={176} rx={18} fill="#fff" stroke="#fde047" strokeWidth="2" />
        <path
          d="M90 200 L120 88 L150 200 M170 200 L200 88 L230 200"
          stroke="#fbbf24"
          strokeWidth="12"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </g>
      <BrowserChrome x={260} y={52} w={268} h={176} uid={uid} />
      <rect x={280} y={104} width={100} height="10" rx={3} fill="#fde68a" />
      <rect x={280} y={124} width={140} height="8" rx={2} fill="#e2e8f0" />
      <rect x={280} y={144} width={228} height="64" rx={10} fill="#fffbeb" stroke="#fde047" strokeWidth="1.5" />
      <circle cx="396" cy="176" r="20" fill="#fef3c7" stroke="#fbbf24" />
    </Canvas>
  );
}

function ArtSeo({ uid }: { uid: string }) {
  return (
    <Canvas uid={uid}>
      <g filter={`url(#${uid}-sh)`}>
        <rect x={48} y={56} width={200} height={168} rx={16} fill="#fff" stroke="#e2e8f0" strokeWidth="1.5" />
        <circle cx="148" cy="120" r="44" stroke="#64748b" strokeWidth="3" fill="none" />
        <line x1="178" y1="150" x2="210" y2="180" stroke="#64748b" strokeWidth="3" strokeLinecap="round" />
        <path d="M72 200 L100 160 L130 178 L200 90" stroke="#22c55e" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="200" cy="90" r="6" fill="#22c55e" />
      </g>
      <BrowserChrome x={272} y={56} w={240} h={168} uid={uid} />
      <rect x={292} y={108} width={140} height="10" rx={3} fill="#86efac" opacity="0.7" />
      <rect x={292} y={128} width={100} height="8" rx={2} fill="#e2e8f0" />
      <rect x={292} y={146} width={180} height="8" rx={2} fill="#e2e8f0" />
      <rect x={292} y={164} width={160} height="8" rx={2} fill="#e2e8f0" />
      <rect x={292} y={188} width={80} height={20} rx={6} fill="#0f172a" />
      <text x="332" y="202" textAnchor="middle" fill="#fbbf24" fontSize="9" fontWeight="800" fontFamily="system-ui,sans-serif">
        Rank
      </text>
    </Canvas>
  );
}

function ArtLead({ uid }: { uid: string }) {
  return (
    <Canvas uid={uid}>
      <g filter={`url(#${uid}-sh)`}>
        <path
          d="M120 48 L210 130 L120 212 L30 130 Z"
          fill="#fef9c3"
          stroke="#eab308"
          strokeWidth="2"
        />
        <text x="120" y="138" textAnchor="middle" fill="#854d0e" fontSize="13" fontWeight="900" fontFamily="system-ui,sans-serif">
          ADS
        </text>
      </g>
      <path d="M230 130h40" stroke="#94a3b8" strokeWidth="3" strokeDasharray="8 6" strokeLinecap="round" />
      <polygon points="265,125 280,130 265,135" fill="#94a3b8" />
      <g filter={`url(#${uid}-sh)`}>
        <rect x={292} y={64} width={220} height={152} rx={16} fill="#fff" stroke="#818cf8" strokeWidth="2" />
        <rect x={312} y={88} width={180} height="36" rx={8} fill="#eef2ff" />
        <rect x={312} y={136} width={120} height="12" rx={4} fill="#c7d2fe" />
        <rect x={312} y={158} width={180} height="10" rx={3} fill="#e2e8f0" />
        <rect x={312} y={180} width={100} height="24" rx={8} fill="#4f46e5" />
        <text x="362" y="197" textAnchor="middle" fill="#fff" fontSize="10" fontWeight="800" fontFamily="system-ui,sans-serif">
          Convert
        </text>
      </g>
    </Canvas>
  );
}

function ArtLinkedin({ uid }: { uid: string }) {
  return (
    <Canvas uid={uid}>
      <text x="280" y="32" textAnchor="middle" fill="#64748b" fontSize="10" fontWeight="800" letterSpacing="0.18em" fontFamily="system-ui,sans-serif">
        B2B PIPELINE
      </text>
      {[0, 1, 2, 3].map((i) => (
        <g key={i} filter={`url(#${uid}-sh)`}>
          <circle cx={100 + i * 110} cy={88} r={26} fill={i === 3 ? "#0ea5e9" : "#0a66c2"} opacity={0.15 + i * 0.08} />
          <circle cx={100 + i * 110} cy={88} r={20} fill="#fff" stroke="#0a66c2" strokeWidth="2" />
        </g>
      ))}
      <line x1="126" y1="88" x2="154" y2="88" stroke="#0a66c2" strokeWidth="2" />
      <line x1="236" y1="88" x2="264" y2="88" stroke="#0a66c2" strokeWidth="2" />
      <line x1="346" y1="88" x2="374" y2="88" stroke="#0a66c2" strokeWidth="2" />
      <g filter={`url(#${uid}-sh)`}>
        <rect x={72} y={140} width={416} height={108} rx={16} fill="#fff" stroke="#e2e8f0" strokeWidth="1.5" />
        <rect x={92} y={162} width={240} height="12" rx={4} fill="#bfdbfe" />
        <rect x={92} y={186} width={180} height="8" rx={2} fill="#e2e8f0" />
        <rect x={92} y={204} width={200} height="8" rx={2} fill="#e2e8f0" />
        <rect x={380} y={168} width={88} height="52" rx={12} fill="#0a66c2" />
        <text x="424" y="200" textAnchor="middle" fill="#fff" fontSize="10" fontWeight="800" fontFamily="system-ui,sans-serif">
          Book
        </text>
      </g>
    </Canvas>
  );
}

function ArtVideo({ uid }: { uid: string }) {
  return (
    <Canvas uid={uid}>
      <g filter={`url(#${uid}-sh)`}>
        <rect x={48} y={48} width={320} height={184} rx={16} fill="#0f172a" stroke="#334155" strokeWidth="1.5" />
        <rect x={48} y={48} width={320} height={36} rx={16} fill="#1e293b" />
        <circle cx="72" cy="66" r="4" fill="#f87171" />
        <circle cx="88" cy="66" r="4" fill="#fbbf24" />
        <circle cx="104" cy="66" r="4" fill="#4ade80" />
        <path d="M208 118 L268 148 L208 178 Z" fill="#fbbf24" opacity="0.95" />
        <rect x={72} y={200} width={120} height="4" rx={2} fill="#475569" />
        <rect x={72} y={210} width={200} height="4" rx={2} fill="#334155" />
      </g>
      <g filter={`url(#${uid}-sh)`}>
        {[0, 1, 2, 3, 4].map((i) => (
          <rect key={i} x={392 + i * 22} y={100 - i * 8} width={14} height={80 + i * 16} rx={3} fill={`hsl(${220 + i * 12}, 70%, ${55 + i * 3}%)`} opacity={0.85} />
        ))}
      </g>
      <text x="480" y="232" textAnchor="middle" fill="#64748b" fontSize="9" fontWeight="700" fontFamily="system-ui,sans-serif">
        WAVEFORM
      </text>
    </Canvas>
  );
}

function ArtGraphic({ uid }: { uid: string }) {
  return (
    <Canvas uid={uid}>
      <g filter={`url(#${uid}-sh)`}>
        <rect x={56} y={48} width={180} height={184} rx={14} fill="#fff" stroke="#fb923c" strokeWidth="2" strokeDasharray="8 6" />
        <rect x={76} y={72} width={140} height={100} rx={8} fill="#fff7ed" stroke="#fed7aa" />
        <circle cx="146" cy="122" r="24" fill="#fdba74" opacity="0.5" />
      </g>
      <g filter={`url(#${uid}-sh)`}>
        <path d="M300 200 L360 56 L420 200" stroke="#0f172a" strokeWidth="5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="360" cy="138" r="10" fill="#f97316" stroke="#fff" strokeWidth="3" />
        <rect x={320} y={208} width={80} height="8" rx={2} fill="#e2e8f0" />
      </g>
    </Canvas>
  );
}

function ArtSoftware({ uid }: { uid: string }) {
  const cols = [
    { x: 48, label: "UI", c: "#6366f1" },
    { x: 208, label: "API", c: "#8b5cf6" },
    { x: 368, label: "DB", c: "#0ea5e9" },
  ];
  return (
    <Canvas uid={uid}>
      {cols.map((c) => (
        <g key={c.label} filter={`url(#${uid}-sh)`}>
          <rect x={c.x} y={64} width={144} height={168} rx={14} fill="#fff" stroke="#e2e8f0" strokeWidth="1.5" />
          <rect x={c.x + 12} y={80} width={120} height="72" rx={10} fill={c.c} opacity="0.15" />
          <rect x={c.x + 12} y={164} width={80} height="8" rx={2} fill="#e2e8f0" />
          <rect x={c.x + 12} y={180} width={100} height="8" rx={2} fill="#cbd5e1" />
          <text x={c.x + 72} y={132} textAnchor="middle" fill={c.c} fontSize="22" fontWeight="900" fontFamily="system-ui,sans-serif">
            {c.label}
          </text>
        </g>
      ))}
      <path d="M192 130h12M352 130h12" stroke="#cbd5e1" strokeWidth="2" />
    </Canvas>
  );
}

function ArtWebmail({ uid }: { uid: string }) {
  return (
    <Canvas uid={uid}>
      <g filter={`url(#${uid}-sh)`}>
        <rect x={48} y={64} width={200} height={152} rx={14} fill="#fff" stroke="#0ea5e9" strokeWidth="2" />
        <rect x={48} y={64} width={200} height={40} rx={14} fill="#f0f9ff" />
        <path d="M48 84 L148 130 L248 84" stroke="#0ea5e9" strokeWidth="2" fill="none" />
        <rect x={72} y={124} width={152} height="10" rx={2} fill="#e0f2fe" />
        <rect x={72} y={144} width={120} height="8" rx={2} fill="#e2e8f0" />
      </g>
      <g filter={`url(#${uid}-sh)`}>
        <rect x={280} y={72} width={232} height={136} rx={14} fill="#0f172a" stroke="#334155" />
        <rect x={300} y={92} width={80} height="8" rx={2} fill="#475569" />
        <rect x={300} y={108} width={140} height="6" rx={2} fill="#334155" />
        <rect x={300} y={128} width={192} height="56" rx={8} fill="#1e293b" stroke="#475569" />
        <text x="396" y="162" textAnchor="middle" fill="#38bdf8" fontSize="11" fontWeight="800" fontFamily="ui-monospace,monospace">
          SPF · DKIM · DMARC
        </text>
      </g>
    </Canvas>
  );
}

function ArtScrape({ uid }: { uid: string }) {
  return (
    <Canvas uid={uid}>
      <g filter={`url(#${uid}-sh)`}>
        <rect x={40} y={44} width={160} height={192} rx={12} fill="#fff" stroke="#cbd5e1" strokeWidth="1.5" />
        <rect x={56} y={60} width={128} height="12" rx={3} fill="#e2e8f0" />
        <circle cx="100" cy="110" r="8" fill="#64748b" />
        <circle cx="140" cy="140" r="8" fill="#64748b" />
        <circle cx="80" cy="160" r="8" fill="#64748b" />
        <line x1="100" y1="110" x2="140" y2="140" stroke="#94a3b8" strokeWidth="2" />
        <line x1="140" y1="140" x2="80" y2="160" stroke="#94a3b8" strokeWidth="2" />
        <rect x={56} y={180} width={128} height="40" rx={6} fill="#f8fafc" stroke="#e2e8f0" />
      </g>
      <path d="M220 130h48l16 16h96" stroke="#22d3ee" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <polygon points="372,124 388,130 372,136" fill="#22d3ee" />
      <g filter={`url(#${uid}-sh)`}>
        <rect x={400} y={72} width={120} height={136} rx={12} fill="#ecfeff" stroke="#22d3ee" strokeWidth="2" />
        <text x="460" y="124" textAnchor="middle" fill="#0e7490" fontSize="11" fontWeight="900" fontFamily="ui-monospace,monospace">
          CSV
        </text>
        <rect x={420} y={140} width={80} height="6" rx={2} fill="#99f6e4" />
        <rect x={420} y={154} width={64} height="6" rx={2} fill="#a5f3fc" />
        <rect x={420} y={168} width={72} height="6" rx={2} fill="#cffafe" />
      </g>
    </Canvas>
  );
}
