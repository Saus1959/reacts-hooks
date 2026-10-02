import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faSun,
  faMoon,
} from "@fortawesome/free-solid-svg-icons";
import ProfileDropdown from "./profileDropdown";

const Headbar = () => {
  const [mode, setMode] = useState("dark");

  useEffect(() => {
    if (mode === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [mode]);

  const changeMode = () => {
    if (mode === "dark") {
      setMode("light");
    } else {
      setMode("dark");
    }
  };

  return (
    <div className="px-4 md:px-5 py-4 md:py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-2">
      <div className="flex flex-wrap items-baseline justify-center gap-2">
        <h1 className="text-lg sm:text-xl md:text-2xl">FOOTBAL SCOUTING</h1>
        <p className="text-sm md:text-md border-muted self-end">Baku, AZE</p>
      </div>
      <div className="flex items-center justify-center gap-3 sm:gap-2 border-muted">
        <button>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
        <button onClick={changeMode}>
          <FontAwesomeIcon icon={mode === "dark" ? faSun : faMoon} />
        </button>
        <ProfileDropdown />
      </div>
    </div>
  );
};

export default Headbar;
