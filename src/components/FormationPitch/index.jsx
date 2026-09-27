import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const parseFormation = (formation) => {
  const parts = String(formation || "")
    .split("-")
    .map((n) => parseInt(n, 10))
    .filter((n) => Number.isFinite(n) && n > 0);
  return parts.length ? parts : [4, 4, 2];
};

const PlaceholderDot = () => (
  <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-full flex items-center justify-center border-2 border-zinc-500 bg-[#0e121b]/70">
    <FontAwesomeIcon
      icon={faUser}
      className="text-xs sm:text-sm text-zinc-500"
    />
  </div>
);

const FormationPitch = ({ formation }) => {
  const lines = parseFormation(formation);
  const rows = [1, ...lines];

  return (
    <div
      className="relative rounded-xl border border-zinc-700 overflow-hidden"
      style={{
        background:
          "repeating-linear-gradient(180deg, rgba(16,90,60,0.35) 0px, rgba(16,90,60,0.35) 40px, rgba(12,70,46,0.35) 40px, rgba(12,70,46,0.35) 80px)",
      }}
    >
      <div className="absolute inset-3 border border-zinc-400/25 rounded-md pointer-events-none">
        <div className="absolute top-1/2 left-0 right-0 border-t border-zinc-400/25" />
        <div className="absolute top-1/2 left-1/2 w-16 h-16 sm:w-24 sm:h-24 -translate-x-1/2 -translate-y-1/2 rounded-full border border-zinc-400/25" />
      </div>

      <div className="relative flex flex-col-reverse justify-between py-6 sm:py-8 min-h-[340px] sm:min-h-[420px]">
        {rows.map((count, i) => (
          <div key={i} className="flex items-center justify-evenly px-2">
            {Array.from({ length: count }).map((_, j) => (
              <PlaceholderDot key={j} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FormationPitch;
