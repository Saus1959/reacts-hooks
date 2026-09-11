import React from "react";

const Loading = ({
  variant = "ring",
  size = "md",
  label,
  fullscreen = false,
}) => {
  const dims = {
    sm: { box: 18, gap: "gap-2", text: "text-xs", dot: 5, bar: 3 },
    md: { box: 28, gap: "gap-3", text: "text-sm", dot: 7, bar: 4 },
    lg: { box: 40, gap: "gap-3", text: "text-base", dot: 9, bar: 5 },
  }[size];

  const indicator =
    variant === "dots" ? (
      <div className="flex items-center" style={{ gap: dims.dot * 0.7 }}>
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className="rounded-full bg-current animate-bounce"
            style={{
              width: dims.dot,
              height: dims.dot,
              animationDelay: `${i * 0.12}s`,
              animationDuration: "0.9s",
            }}
          />
        ))}
      </div>
    ) : variant === "bar" ? (
      <div
        className="relative overflow-hidden rounded-full bg-current/15"
        style={{ width: dims.box * 3.2, height: dims.bar }}
      >
        <span className="absolute inset-y-0 w-1/3 rounded-full bg-current animate-[loading-bar_1.1s_ease-in-out_infinite]" />
      </div>
    ) : (
      <svg
        className="animate-spin"
        style={{ width: dims.box, height: dims.box }}
        viewBox="0 0 24 24"
        fill="none"
      >
        <circle
          className="opacity-20"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="3"
        />
        <path
          d="M22 12a10 10 0 0 0-10-10"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
    );

  const content = (
    <div
      className={`flex items-center ${dims.gap} text-current`}
      role="status"
      aria-live="polite"
    >
      {indicator}
      {label && <span className={`${dims.text} text-current/80`}>{label}</span>}
      <span className="sr-only">{label || "Loading"}</span>
    </div>
  );

  if (!fullscreen) return content;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm z-50 text-white">
      {content}
    </div>
  );
};

export default Loading;

/*
  For the "bar" variant's sweep animation, add this once to your global CSS:

  @keyframes loading-bar {
    0%   { transform: translateX(-100%); }
    50%  { transform: translateX(150%); }
    100% { transform: translateX(-100%); }
  }
*/
