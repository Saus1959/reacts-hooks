import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShieldHalved,
  faLocationDot,
  faUserTie,
  faChessBoard,
  faStar,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";

const formatBudget = (value) => {
  const num = Number(value) || 0;
  if (num >= 1_000_000_000) return `$${(num / 1_000_000_000).toFixed(1)}B`;
  if (num >= 1_000_000) return `$${(num / 1_000_000).toFixed(1)}M`;
  if (num >= 1_000) return `$${(num / 1_000).toFixed(0)}K`;
  return `$${num}`;
};

const NewTeamCard = ({ club }) => {
  const { id, players, logo, name, league, stadium, budget, formation, coach } =
    club;
  const captain = players.find((p) => p.isCaptain);

  return (
    <Link
      to={`/custom/${id}`}
      className="group block bg-[#111722] border border-zinc-700 hover:border-[#20D99A] rounded-lg transition-shadow duration-100 hover:shadow-[0_0_15px_#20D99A] p-4"
    >
      <div className="flex items-center gap-3 mb-3">
        <div className="w-12 h-12 rounded-lg bg-[#0e121b] border border-zinc-700 flex items-center justify-center overflow-hidden shrink-0">
          {logo ? (
            <img
              src={logo}
              alt={name}
              className="w-full h-full object-contain"
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
            />
          ) : (
            <FontAwesomeIcon icon={faShieldHalved} className="text-zinc-500" />
          )}
        </div>
        <div className="min-w-0 flex-1">
          <h3 className="text-base font-medium truncate">{name}</h3>
          <p className="text-xs text-zinc-400 truncate">
            {league || "No league"}
          </p>
        </div>
      </div>

      <div className="space-y-1.5 text-xs text-zinc-400 border-t border-zinc-700 pt-3">
        <div className="flex items-center gap-2 truncate">
          <FontAwesomeIcon icon={faLocationDot} className="w-3 shrink-0" />
          <span className="truncate">{stadium || "—"}</span>
        </div>
        <div className="flex items-center gap-2 truncate">
          <FontAwesomeIcon icon={faUserTie} className="w-3 shrink-0" />
          <span className="truncate">{coach || "—"}</span>
        </div>
        <div className="flex items-center gap-2 truncate">
          <FontAwesomeIcon icon={faChessBoard} className="w-3 shrink-0" />
          <span className="truncate">{formation || "—"}</span>
        </div>
      </div>

      <div className="flex items-center justify-between mt-3 pt-3 border-t border-zinc-700">
        <span className="flex items-center gap-1.5 text-xs text-zinc-400">
          <FontAwesomeIcon icon={faUserGroup} className="text-[#20D99A]" />
          {players?.length || 0} players
        </span>
        <span className="text-sm font-semibold text-[#20D99A]">
          {formatBudget(budget)}
        </span>
      </div>

      {captain && (
        <div className="flex items-center gap-1.5 mt-2 text-xs text-zinc-500 truncate">
          <FontAwesomeIcon icon={faStar} className="text-yellow-500 shrink-0" />
          <span className="truncate">Capitan: {captain.name}</span>
        </div>
      )}
    </Link>
  );
};

export default NewTeamCard;
