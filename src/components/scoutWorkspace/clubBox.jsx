import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faStar,
  faArrowUpRightDots,
} from "@fortawesome/free-solid-svg-icons";
import Rating from "./rating";
import StatsModal from "./statsModal";

const ClubBox = ({
  clubId,
  clubName,
  clubLeague,
  clubCountry,
  clubCity,
  clubLogoUrl,
  clubRating,
  isList,
  topPlayers,
  onChangeSaved,
  isSaved,
  onOpenStats,
}) => {
  const [isStatsOpen, setIsStatsOpen] = useState(false);

  const shiftSave = () => {
    onChangeSaved(clubId);
  };

  const openStats = () => {
    onOpenStats(clubId);
  };

  return (
    <div
      className={`p-3 sm:p-4 border border-zinc-600 hover:border-[#20D99A] rounded-lg transition-shadow duration-100 hover:shadow-[0_0_15px_#20D99A] cursor-pointer w-full ${
        isList ? "flex flex-row items-center gap-4" : ""
      }`}
    >
      <div
        className={
          isList
            ? "flex flex-row items-center gap-4 flex-1 min-w-0"
            : "flex flex-row items-start gap-3"
        }
      >
        <div
          className={
            isList
              ? "w-16 h-16 sm:w-20 sm:h-20 shrink-0"
              : "w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 shrink-0"
          }
        >
          <img
            src={clubLogoUrl}
            alt={clubName}
            className="size-full object-contain"
          />
        </div>

        <div className="min-w-0 flex-1">
          <h3 className="text-sm sm:text-base font-medium truncate">
            {clubName}
          </h3>
          <p className="text-xs sm:text-sm text-zinc-300 truncate">
            {clubLeague}
          </p>
          <div
            className={
              isList
                ? "text-xs sm:text-sm flex items-center gap-4 mt-1"
                : "text-xs sm:text-sm my-3"
            }
          >
            <Rating clubRating={clubRating} />
            {isList && (
              <span className="flex items-center gap-1.5 text-zinc-400 truncate">
                <FontAwesomeIcon icon={faLocationDot} className="shrink-0" />
                {clubCountry}, {clubCity}
              </span>
            )}
          </div>
          {!isList && (
            <div className="flex items-center gap-1.5 text-xs sm:text-sm text-zinc-400 min-w-0">
              <FontAwesomeIcon icon={faLocationDot} className="shrink-0" />
              <p className="truncate">
                {clubCountry}, {clubCity}
              </p>
            </div>
          )}
        </div>
      </div>

      <div className={isList ? "flex gap-2 shrink-0" : "flex gap-2 mt-3"}>
        <button
          onClick={shiftSave}
          className={`flex justify-center items-center gap-1.5 border border-zinc-600 rounded-lg hover:bg-[#20D99A] hover:text-[#0e121b] transition-colors min-w-0 ${
            isList ? "px-3 py-2 md:py-2.5" : "flex-1 px-2 py-2 md:py-3"
          } ${isSaved ? "bg-[#20D99A] text-[#0e121b]" : ""}`}
        >
          <FontAwesomeIcon icon={faStar} className="shrink-0 text-sm" />
          <p className="text-xs md:text-sm truncate">
            {isList ? "" : "Saved list"}
          </p>
        </button>
        <button
          onClick={() => setIsStatsOpen(true)}
          className={`flex justify-center items-center gap-1.5 border border-zinc-600 rounded-lg hover:bg-[#20D99A] hover:text-[#0e121b] transition-colors min-w-0 ${
            isList ? "px-3 py-2 md:py-2.5" : "flex-1 px-2 py-2 md:py-3"
          }`}
        >
          <FontAwesomeIcon
            icon={faArrowUpRightDots}
            className="shrink-0 text-sm"
          />
          <p className="text-xs md:text-sm">{isList ? "" : "Stats"}</p>
        </button>
        <StatsModal
          isOpen={isStatsOpen}
          onClose={() => setIsStatsOpen(false)}
          clubName={clubName}
          topPlayers={topPlayers}
        />
      </div>
    </div>
  );
};

export default ClubBox;
