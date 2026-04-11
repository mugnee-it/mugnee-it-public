/** Decorative SVGs for the mobile app service page (no external assets). */

export function HeroPhonesIllustration({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 440 360"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <defs>
        <linearGradient id="hp-gold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fbbf24" />
          <stop offset="100%" stopColor="#f59e0b" />
        </linearGradient>
        <linearGradient id="hp-violet" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#8b5cf6" />
          <stop offset="100%" stopColor="#6366f1" />
        </linearGradient>
        <filter id="hp-soft" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <ellipse cx="220" cy="300" rx="160" ry="28" fill="rgba(255,255,255,0.06)" />
      <rect x="48" y="40" width="168" height="300" rx="28" stroke="rgba(255,255,255,0.35)" strokeWidth="2" fill="rgba(255,255,255,0.06)" />
      <rect x="60" y="58" width="144" height="36" rx="10" fill="rgba(255,255,255,0.1)" />
      <rect x="68" y="110" width="128" height="12" rx="4" fill="url(#hp-violet)" opacity="0.85" />
      <rect x="68" y="132" width="96" height="8" rx="3" fill="rgba(255,255,255,0.2)" />
      <rect x="68" y="148" width="112" height="8" rx="3" fill="rgba(255,255,255,0.12)" />
      <rect x="68" y="180" width="128" height="64" rx="12" fill="rgba(139,92,246,0.25)" stroke="rgba(167,139,250,0.5)" />
      <circle cx="132" cy="212" r="18" fill="url(#hp-gold)" opacity="0.9" />
      <rect x="68" y="258" width="128" height="40" rx="10" fill="url(#hp-gold)" opacity="0.35" />
      <rect x="224" y="72" width="168" height="300" rx="28" stroke="rgba(255,255,255,0.45)" strokeWidth="2" fill="rgba(255,255,255,0.08)" filter="url(#hp-soft)" />
      <rect x="236" y="90" width="144" height="36" rx="10" fill="rgba(255,255,255,0.12)" />
      <rect x="244" y="142" width="120" height="10" rx="3" fill="rgba(251,191,36,0.5)" />
      <rect x="244" y="160" width="88" height="8" rx="3" fill="rgba(255,255,255,0.18)" />
      <rect x="244" y="188" width="128" height="100" rx="14" fill="rgba(15,23,42,0.5)" stroke="rgba(251,191,36,0.35)" />
      <path d="M260 228h96M260 244h72M260 260h104" stroke="rgba(255,255,255,0.25)" strokeWidth="4" strokeLinecap="round" />
      <rect x="244" y="302" width="128" height="36" rx="10" fill="rgba(99,102,241,0.4)" />
      <circle cx="380" cy="64" r="36" fill="rgba(251,191,36,0.15)" stroke="rgba(251,191,36,0.4)" strokeWidth="2" />
      <path d="M368 64l8 8 16-20" stroke="#fbbf24" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function AppArchitectureIllustration({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 520 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <defs>
        <linearGradient id="arch-line" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#94a3b8" />
          <stop offset="50%" stopColor="#6366f1" />
          <stop offset="100%" stopColor="#94a3b8" />
        </linearGradient>
      </defs>
      <rect x="24" y="48" width="100" height="120" rx="16" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="2" />
      <rect x="40" y="64" width="68" height="12" rx="4" fill="#e2e8f0" />
      <rect x="40" y="88" width="56" height="8" rx="2" fill="#cbd5e1" />
      <rect x="40" y="108" width="68" height="44" rx="8" fill="#eef2ff" stroke="#c7d2fe" />
      <text x="72" y="136" textAnchor="middle" fill="#4f46e5" fontSize="11" fontWeight="700" fontFamily="system-ui,sans-serif">
        App
      </text>
      <path d="M124 108H200" stroke="url(#arch-line)" strokeWidth="2" strokeDasharray="6 4" />
      <polygon points="196,102 210,108 196,114" fill="#6366f1" />
      <rect x="210" y="40" width="120" height="136" rx="18" fill="#ffffff" stroke="#6366f1" strokeWidth="2" />
      <ellipse cx="270" cy="78" rx="36" ry="22" fill="#eef2ff" />
      <text x="270" y="84" textAnchor="middle" fill="#4338ca" fontSize="10" fontWeight="700" fontFamily="system-ui,sans-serif">
        API
      </text>
      <rect x="228" y="102" width="84" height="10" rx="2" fill="#e2e8f0" />
      <rect x="228" y="120" width="72" height="10" rx="2" fill="#e2e8f0" />
      <rect x="228" y="138" width="84" height="10" rx="2" fill="#e2e8f0" />
      <rect x="228" y="156" width="60" height="10" rx="2" fill="#e2e8f0" />
      <path d="M330 108H406" stroke="url(#arch-line)" strokeWidth="2" strokeDasharray="6 4" />
      <polygon points="402,102 416,108 402,114" fill="#6366f1" />
      <rect x="416" y="56" width="88" height="104" rx="12" fill="#0f172a" />
      <rect x="432" y="72" width="56" height="8" rx="2" fill="#334155" />
      <rect x="432" y="88" width="48" height="8" rx="2" fill="#475569" />
      <rect x="432" y="108" width="56" height="36" rx="6" fill="#1e293b" stroke="#334155" />
      <text x="460" y="130" textAnchor="middle" fill="#94a3b8" fontSize="9" fontWeight="600" fontFamily="system-ui,sans-serif">
        DB
      </text>
    </svg>
  );
}

export function TechChoiceIllustration({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 400 220"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <rect width="400" height="220" rx="24" fill="#f8fafc" />
      <rect x="20" y="24" width="110" height="172" rx="16" fill="#fff" stroke="#e2e8f0" strokeWidth="2" />
      <text x="75" y="52" textAnchor="middle" fill="#0f172a" fontSize="11" fontWeight="800" fontFamily="system-ui,sans-serif">
        Flutter
      </text>
      <rect x="36" y="64" width="78" height="6" rx="2" fill="#dbeafe" />
      <rect x="36" y="78" width="58" height="6" rx="2" fill="#e2e8f0" />
      <rect x="36" y="96" width="78" height="40" rx="8" fill="#dbeafe" stroke="#93c5fd" />
      <text x="75" y="120" textAnchor="middle" fill="#1d4ed8" fontSize="8" fontFamily="system-ui,sans-serif">
        1 codebase
      </text>
      <rect x="36" y="148" width="78" height="32" rx="8" fill="#fef3c7" />
      <rect x="145" y="24" width="110" height="172" rx="16" fill="#fff" stroke="#c7d2fe" strokeWidth="2" />
      <text x="200" y="52" textAnchor="middle" fill="#0f172a" fontSize="11" fontWeight="800" fontFamily="system-ui,sans-serif">
        React Native
      </text>
      <rect x="161" y="64" width="78" height="6" rx="2" fill="#ede9fe" />
      <rect x="161" y="78" width="58" height="6" rx="2" fill="#e2e8f0" />
      <rect x="161" y="96" width="78" height="40" rx="8" fill="#ede9fe" stroke="#c4b5fd" />
      <text x="200" y="120" textAnchor="middle" fill="#5b21b6" fontSize="8" fontFamily="system-ui,sans-serif">
        JS / TS team
      </text>
      <rect x="161" y="148" width="78" height="32" rx="8" fill="#ede9fe" />
      <rect x="270" y="24" width="110" height="172" rx="16" fill="#fff" stroke="#e2e8f0" strokeWidth="2" strokeDasharray="6 4" />
      <text x="325" y="52" textAnchor="middle" fill="#64748b" fontSize="11" fontWeight="800" fontFamily="system-ui,sans-serif">
        Native*
      </text>
      <text x="325" y="110" textAnchor="middle" fill="#94a3b8" fontSize="8" fontFamily="system-ui,sans-serif">
        When product
      </text>
      <text x="325" y="124" textAnchor="middle" fill="#94a3b8" fontSize="8" fontFamily="system-ui,sans-serif">
        demands it
      </text>
      <text x="325" y="178" textAnchor="middle" fill="#64748b" fontSize="7" fontFamily="system-ui,sans-serif">
        *case by case
      </text>
    </svg>
  );
}
