/** Decorative vector for /services hub hero — no text inside SVG (accessibility). */
export default function ServicesHubIllustration({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 520 380"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <defs>
        <linearGradient id="hub-g1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#6366f1" stopOpacity="0.2" />
        </linearGradient>
        <linearGradient id="hub-g2" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#facc15" stopOpacity="0.45" />
          <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.15" />
        </linearGradient>
        <filter id="hub-blur" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="12" />
        </filter>
      </defs>
      <ellipse cx="380" cy="90" rx="120" ry="80" fill="url(#hub-g1)" filter="url(#hub-blur)" />
      <ellipse cx="120" cy="280" rx="100" ry="70" fill="url(#hub-g2)" filter="url(#hub-blur)" />

      {/* Main “browser” frame */}
      <rect
        x="48"
        y="56"
        width="320"
        height="220"
        rx="16"
        className="fill-white stroke-slate-200"
        strokeWidth="2"
      />
      <rect x="48" y="56" width="320" height="44" rx="16" className="fill-slate-50" />
      <rect x="48" y="88" width="320" height="12" className="fill-slate-50" />
      <circle cx="72" cy="78" r="5" className="fill-red-400/80" />
      <circle cx="92" cy="78" r="5" className="fill-amber-400/80" />
      <circle cx="112" cy="78" r="5" className="fill-emerald-400/80" />
      <rect x="140" y="73" width="180" height="10" rx="5" className="fill-slate-200/80" />

      {/* Content blocks inside browser */}
      <rect x="72" y="118" width="120" height="72" rx="8" className="fill-sky-100/90 stroke-sky-200/80" strokeWidth="1.5" />
      <rect x="208" y="118" width="136" height="16" rx="4" className="fill-slate-200/90" />
      <rect x="208" y="142" width="100" height="12" rx="3" className="fill-slate-100" />
      <rect x="208" y="162" width="120" height="12" rx="3" className="fill-slate-100" />
      <rect x="72" y="206" width="272" height="44" rx="8" className="fill-slate-900/[0.04] stroke-slate-200/60" strokeWidth="1" />

      {/* Floating cards */}
      <g transform="translate(300, 200)">
        <rect width="168" height="112" rx="14" className="fill-white stroke-slate-200" strokeWidth="2" />
        <rect x="16" y="20" width="80" height="10" rx="3" className="fill-indigo-200/80" />
        <rect x="16" y="40" width="120" height="8" rx="2" className="fill-slate-100" />
        <rect x="16" y="54" width="100" height="8" rx="2" className="fill-slate-100" />
        <rect x="16" y="76" width="56" height="20" rx="6" className="fill-yellow-400/90" />
      </g>

      <g transform="translate(340, 48)">
        <rect width="140" height="88" rx="12" className="fill-white stroke-slate-200" strokeWidth="2" />
        <path
          d="M28 52 L52 28 L76 44 L100 24 L112 36 L112 64 L28 64 Z"
          className="fill-emerald-200/70 stroke-emerald-300/80"
          strokeWidth="1.5"
        />
      </g>

      {/* Spark / connection */}
      <path
        d="M 400 120 Q 440 180 360 240"
        className="stroke-sky-300/50"
        strokeWidth="2"
        strokeDasharray="6 6"
        fill="none"
      />
    </svg>
  );
}
