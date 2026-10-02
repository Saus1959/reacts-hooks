import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBorderAll, faList } from "@fortawesome/free-solid-svg-icons";
import ClubBox from "./clubBox";

const GridList = ({ clubs, clubsCount, onChangeSaved, onOpen }) => {
  const [clubsPosition, setClubsPosition] = useState("grid");

  const setList = () => {
    if (clubsPosition === "grid") {
      setClubsPosition("list");
    }
  };

  const setGrid = () => {
    if (clubsPosition === "list") {
      setClubsPosition("grid");
    }
  };

  return (
    <div>
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 px-4 md:px-5 py-3">
        <div className="flex justify-center items-center gap-2">
          <h2 className="text-lg md:text-xl">CLUB RESULTS</h2>
          <p className="border-muted text-sm md:text-base">
            {clubsCount} found
          </p>
        </div>
        <div className="flex justify-center items-center gap-3">
          <button
            className={`p-3 md:p-4 border rounded-lg cursor-pointer group ${
              clubsPosition === "grid"
                ? " border-[#20D99A]  shadow-[0_0_15px_#20D99A]"
                : " border-line  hover:border-[#20D99A]"
            }`}
            onClick={() => setGrid()}
          >
            <FontAwesomeIcon
              icon={faBorderAll}
              className={`text-lg md:text-xl ${clubsPosition === "grid" ? "text-[#20D99A]" : "border-muted group-hover:text-[#20D99A]"}`}
            />
          </button>
          <button
            className={`p-3 md:p-4 border rounded-lg cursor-pointer group ${
              clubsPosition === "list"
                ? " border-[#20D99A]  shadow-[0_0_15px_#20D99A]"
                : " border-line  hover:border-[#20D99A]"
            }`}
            onClick={() => setList()}
          >
            <FontAwesomeIcon
              icon={faList}
              className={`text-lg md:text-xl ${clubsPosition === "list" ? "text-[#20D99A]" : "border-muted group-hover:text-[#20D99A]"}`}
            />
          </button>
        </div>
      </div>
      <div
        className={
          clubsPosition === "grid"
            ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-4 md:px-5"
            : "flex flex-col gap-5"
        }
      >
        {clubs.map((club) => {
          return (
            <ClubBox
              key={club.id}
              clubId={club.id}
              clubName={club.name}
              clubLeague={club.league}
              clubCountry={club.country}
              clubCity={club.city}
              clubLogoUrl={club.logo}
              clubRating={club.rating}
              isSaved={club.isSaved}
              topPlayers={club.topPlayers}
              isList={clubsPosition === "list"}
              onChangeSaved={onChangeSaved}
            />
          );
        })}
      </div>
    </div>
  );
};

export default GridList;
