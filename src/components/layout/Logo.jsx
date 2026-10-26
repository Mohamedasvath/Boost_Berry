import React from "react";

export default function BoostBerryLogo({ className = "w-10 h-10" }) {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <svg
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-[0_0_12px_rgba(34,211,238,0.4)]"
      >
        <defs>
          <linearGradient id="berryGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#22d3ee" />
            <stop offset="40%" stopColor="#06b6d4" />
            <stop offset="70%" stopColor="#0284c7" />
            <stop offset="100%" stopColor="#1e3a8a" />
          </linearGradient>
          <linearGradient id="berryLeaf" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#34d399" />
            <stop offset="100%" stopColor="#059669" />
          </linearGradient>
          <radialGradient id="berrySphere" cx="35%" cy="35%" r="65%">
            <stop offset="0%" stopColor="#67e8f9" />
            <stop offset="50%" stopColor="#0891b2" />
            <stop offset="100%" stopColor="#083344" />
          </radialGradient>
        </defs>

        {/* Berry Leaf */}
        <path
          d="M32 38 C30 20 46 16 52 24 C52 36 38 42 32 38 Z"
          fill="url(#berryLeaf)"
        />

        {/* Main 'B' Body with upward dynamic cut */}
        <path
          d="M48 20 H74 C88 20 98 29 98 42 C98 52 90 60 78 63 C92 66 102 75 102 90 C102 105 88 114 70 114 H44 C41 114 39 112 39 109 L39 25 C39 22 41 20 48 20 Z"
          fill="url(#berryGrad)"
        />
        
        {/* Negative Cut / Arrow Curve Accent */}
        <path
          d="M40 76 Q65 65 88 42 L82 34 L106 32 L104 56 L97 48 Q70 74 44 86 Z"
          fill="#38bdf8"
        />

        {/* Berries Cluster */}
        <circle cx="34" cy="52" r="12" fill="url(#berrySphere)" />
        <circle cx="46" cy="62" r="11" fill="url(#berrySphere)" />
        <circle cx="35" cy="74" r="12" fill="url(#berrySphere)" />
        
        {/* Berry Highlights */}
        <circle cx="31" cy="48" r="2.5" fill="#ffffff" opacity="0.8" />
        <circle cx="43" cy="58" r="2.2" fill="#ffffff" opacity="0.8" />
        <circle cx="32" cy="70" r="2.5" fill="#ffffff" opacity="0.8" />
      </svg>
    </div>
  );
}