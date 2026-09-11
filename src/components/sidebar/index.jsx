import React from "react";
import logo from "../../assets/logov2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faPeopleGroup,
  faStar,
  faGear,
} from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  return (
    <div className="px-4 py-3 md:px-0 md:py-2 md:pb-10 md:row-span-full flex flex-row md:flex-col items-center justify-between gap-4 md:gap-10 text-zinc-400 overflow-x-auto">
      <div className="flex flex-row md:flex-col items-center gap-4 md:gap-10">
        <div className="w-10 h-10 md:w-auto md:h-auto shrink-0">
          <img src={logo} alt="logo" className="w-full h-full" />
        </div>
        <div className="flex flex-row md:flex-col items-center gap-3 md:gap-5">
          <button className="flex justify-center items-center border border-zinc-600 hover:border-[#20D99A] p-3 md:p-5 rounded-lg transition-shadow duration-100 hover:shadow-[0_0_15px_#20D99A] cursor-pointer shrink-0">
            <FontAwesomeIcon icon={faMagnifyingGlass} className="text-xl md:text-2xl" />
          </button>
          <button className="flex justify-center items-center border border-zinc-600 hover:border-[#20D99A] p-3 md:p-5 rounded-lg transition-shadow duration-100 hover:shadow-[0_0_15px_#20D99A] cursor-pointer shrink-0">
            <FontAwesomeIcon icon={faPeopleGroup} className="text-xl md:text-2xl" />
          </button>
          <button className="flex justify-center items-center border border-zinc-600 hover:border-[#20D99A] p-3 md:p-5 rounded-lg transition-shadow duration-100 hover:shadow-[0_0_15px_#20D99A] cursor-pointer shrink-0">
            <FontAwesomeIcon icon={faStar} className="text-xl md:text-2xl" />
          </button>
        </div>
      </div>
      <button className="cursor-pointer group shrink-0">
        <FontAwesomeIcon
          icon={faGear}
          className="text-xl md:text-2xl group-hover:text-[#20D99A]"
        />
      </button>
    </div>
  );
};

export default Sidebar;
