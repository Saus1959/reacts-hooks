import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faBell } from "@fortawesome/free-solid-svg-icons";
import ProfileDropdown from "./profileDropdown";

const Headbar = () => {
  return (
    <div className="px-5 py-7 flex items-center justify-between">
      <div className="flex justify-center gap-2">
        <h1 className="text-2xl">FOOTBAL SCOUTING</h1>
        <p className="text-md text-zinc-400 self-end">Baku, AZE</p>
      </div>
      <div className="flex items-center justify-center gap-2 text-zinc-400">
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
