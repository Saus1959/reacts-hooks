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
      className="group block bg-surface border border-line hover:border-[#20D99A] rounded-lg transition-shadow duration-100 hover:shadow-[0_0_15px_#20D99A] p-4"
    >
      <div className="flex items-center gap-3 mb-3">
        <div className="w-12 h-12 rounded-lg bg-base border border-line flex items-center justify-center overflow-hidden shrink-0">
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
            <FontAwesomeIcon icon={faShieldHalved} className="border-muted" />
          )}
        </div>
        <div className="min-w-0 flex-1">
          <h3 className="text-primary font-medium truncate">{name}</h3>
          <p className="text-xs border-muted truncate">
            {league || "No league"}
          </p>
        </div>
      </div>

      <div className="space-y-1.5 text-xs border-muted border-t border-line pt-3">
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

      <div className="flex items-center justify-between mt-3 pt-3 border-t border-line">
        <span className="flex items-center gap-1.5 text-xs border-muted">
          <FontAwesomeIcon icon={faUserGroup} className="text-[#20D99A]" />
          {players?.length || 0} players
        </span>
        <span className="text-sm font-semibold text-[#20D99A]">
          {formatBudget(budget)}
        </span>
      </div>

      {captain && (
        <div className="flex items-center gap-1.5 mt-2 text-xs border-muted truncate">
          <FontAwesomeIcon icon={faStar} className="text-yellow-500 shrink-0" />
          <span className="truncate">Capitan: {captain.name}</span>
        </div>
      )}
    </Link>
  );
};

export default NewTeamCard;
