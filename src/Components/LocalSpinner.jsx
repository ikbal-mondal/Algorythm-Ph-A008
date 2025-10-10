import React from "react";


export default function LocalSpinner({
  size = "md",
  message = "",
  className = "",
  ariaLabel = "Loading",
}) {
 
  const sizeMap = {
    sm: 36,
    md: 56,
    lg: 96,
  };
  const px = typeof size === "number" ? size : sizeMap[size] || sizeMap.md;
  const stroke = Math.max(3, Math.round(px / 14));
  const ring = px; 

  return (
    <div
      role="status"
      aria-label={ariaLabel}
      className={`flex flex-col items-center justify-center gap-3 ${className}`}
    >
      <div
        className="relative flex items-center justify-center"
        style={{ width: px, height: px }}
      >
        <svg
          width={ring}
          height={ring}
          viewBox={`0 0 ${ring} ${ring}`}
          className="absolute inset-0 animate-rotate-slow"
        >
          <defs>
            <linearGradient id="g1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#06b6d4" />
              <stop offset="40%" stopColor="#8b5cf6" />
              <stop offset="100%" stopColor="#f97316" />
            </linearGradient>
          </defs>
          <circle
            cx={ring / 2}
            cy={ring / 2}
            r={(ring - stroke) / 2}
            fill="none"
            stroke="url(#g1)"
            strokeWidth={stroke}
            strokeDasharray={`${Math.PI * ring * 0.6} ${Math.PI * ring}`}
            strokeLinecap="round"
            opacity="0.95"
          />
        </svg>
        <div
          className="relative flex items-center justify-center rounded-full shadow-lg"
          style={{
            width: px * 0.56,
            height: px * 0.56,
            background: "linear-gradient(180deg, rgba(255,255,255,0.95), rgba(250,250,250,0.65))",
            backdropFilter: "blur(4px)",
          }}
        >
          <div
            className="rounded-full animate-pulse-fast"
            style={{
              width: px * 0.28,
              height: px * 0.28,
              boxShadow: "0 6px 18px rgba(99,102,241,0.18)",
              background: "radial-gradient(circle at 30% 30%, #ffffff, #a78bfa 60%)",
            }}
          />

          <div className="pointer-events-none absolute inset-0">
            <span
              className="absolute -translate-x-1/2 -translate-y-1/2 animate-orbit-1"
              style={{ left: "12%", top: "50%", width: px * 0.10, height: px * 0.10, borderRadius: "50%", boxShadow: "0 2px 6px rgba(0,0,0,0.12)", background: "#06b6d4" }}
            />
            <span
              className="absolute -translate-x-1/2 -translate-y-1/2 animate-orbit-2"
              style={{ left: "88%", top: "50%", width: px * 0.08, height: px * 0.08, borderRadius: "50%", boxShadow: "0 2px 6px rgba(0,0,0,0.12)", background: "#f97316" }}
            />
            <span
              className="absolute -translate-x-1/2 -translate-y-1/2 animate-orbit-3"
              style={{ left: "50%", top: "14%", width: px * 0.075, height: px * 0.075, borderRadius: "50%", boxShadow: "0 2px 6px rgba(0,0,0,0.12)", background: "#8b5cf6" }}
            />
          </div>
        </div>
      </div>

      {message ? (
        <span className="text-sm text-slate-600 dark:text-slate-300 font-medium select-none">
          {message}
        </span>
      ) : null}

      <style jsx>{`
        @keyframes rotate-slow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes pulse-fast { 0% { transform: scale(1); opacity: 1 } 50% { transform: scale(1.08); opacity: .85 } 100% { transform: scale(1); opacity: 1 } }

        @keyframes orbit-1 { 0% { transform: translate(-50%, -50%) rotate(0deg) translateX(0px) } 100% { transform: translate(-50%, -50%) rotate(360deg) translateX(0px) } }
        @keyframes orbit-2 { 0% { transform: translate(-50%, -50%) rotate(0deg) translateX(0px) } 100% { transform: translate(-50%, -50%) rotate(-360deg) translateX(0px) } }
        @keyframes orbit-3 { 0% { transform: translate(-50%, -50%) rotate(0deg) translateX(0px) } 100% { transform: translate(-50%, -50%) rotate(360deg) translateX(0px) } }

        .animate-rotate-slow { animation: rotate-slow 4s linear infinite; transform-origin: 50% 50%; }
        .animate-pulse-fast { animation: pulse-fast 1.1s ease-in-out infinite; }

        /* Orbit animations - each dot will follow a circular path by rotating their parent offset */
        .animate-orbit-1 { animation: orbit-1 1.9s linear infinite; transform-origin: 50% 50%; }
        .animate-orbit-2 { animation: orbit-2 2.6s linear infinite; transform-origin: 50% 50%; }
        .animate-orbit-3 { animation: orbit-3 1.5s linear infinite; transform-origin: 50% 50%; }

        /* small accessibility-friendly prefers-reduced-motion handling */
        @media (prefers-reduced-motion: reduce) {
          .animate-rotate-slow, .animate-pulse-fast, .animate-orbit-1, .animate-orbit-2, .animate-orbit-3 {
            animation: none !important;
          }
        }
      `}</style>
    </div>
  );
}
