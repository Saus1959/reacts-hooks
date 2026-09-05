import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBorderAll, faList } from "@fortawesome/free-solid-svg-icons";
import ClubBox from "./clubBox";

const GridList = ({ clubs, clubsCount }) => {
  return (
    <div>
      <div className="flex items-center justify-between px-5 py-3">
        <div className="flex justify-center items-center gap-2">
          <h2 className="text-xl">CLUB RESULTS</h2>
          <p className="text-zinc-400">{clubsCount} found</p>
        </div>
        <div className="flex justify-center items-center gap-3">
          <button className="p-4 border border-zinc-600 rounded-lg hover:border-[#20D99A] cursor-pointer group">
            <FontAwesomeIcon
              icon={faBorderAll}
              className="text-xl text-zinc-400 group-hover:text-[#20D99A]"
            />
          </button>
          <button className="p-4 border border-zinc-600 rounded-lg hover:border-[#20D99A] cursor-pointer group">
            <FontAwesomeIcon
              icon={faList}
              className="text-xl text-zinc-400 group-hover:text-[#20D99A]"
            />
          </button>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4 px-5">
        {clubs.map((club) => {
          return (
            <ClubBox
              clubName={club.name}
              clubLeague={club.league}
              clubCountry={club.country}
              clubCity={club.city}
              clubLogoUrl={club.logo}
            />
          );
        })}
      </div>
    </div>
  );
};

export default GridList;
