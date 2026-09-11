import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faBell } from "@fortawesome/free-solid-svg-icons";
import ProfileDropdown from "./profileDropdown";

const Headbar = () => {
  return (
    <div className="px-4 md:px-5 py-4 md:py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-2">
      <div className="flex flex-wrap items-baseline justify-center gap-2">
        <h1 className="text-lg sm:text-xl md:text-2xl">FOOTBAL SCOUTING</h1>
        <p className="text-sm md:text-md text-zinc-400 self-end">Baku, AZE</p>
      </div>
      <div className="flex items-center justify-center gap-3 sm:gap-2 text-zinc-400">
        <button>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
        <button>
          <FontAwesomeIcon icon={faBell} />
        </button>
        <ProfileDropdown />
      </div>
    </div>
  );
};

export default Headbar;
