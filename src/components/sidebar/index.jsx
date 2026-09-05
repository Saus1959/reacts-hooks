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
    <div className="py-2 pb-10 row-span-full flex flex-col items-center justify-between gap-10 text-zinc-400">
      <div className="flex flex-col items-center gap-10">
        <div className="">
          <img src={logo} alt="logo" className="w-full h-full" />
        </div>
        <div className="flex flex-col items-center gap-5">
          <button className="flex justify-center items-center border border-zinc-600 hover:border-[#20D99A] p-5 rounded-lg transition-shadow duration-100 hover:shadow-[0_0_15px_#20D99A] cursor-pointer">
            <FontAwesomeIcon icon={faMagnifyingGlass} className="text-2xl" />
          </button>
          <button className="flex justify-center items-center border border-zinc-600 hover:border-[#20D99A] p-5 rounded-lg transition-shadow duration-100 hover:shadow-[0_0_15px_#20D99A] cursor-pointer">
            <FontAwesomeIcon icon={faPeopleGroup} className="text-2xl" />
          </button>
          <button className="flex justify-center items-center border border-zinc-600 hover:border-[#20D99A] p-5 rounded-lg transition-shadow duration-100 hover:shadow-[0_0_15px_#20D99A] cursor-pointer">
            <FontAwesomeIcon icon={faStar} className="text-2xl" />
          </button>
        </div>
      </div>
      <button className="cursor-pointer group">
        <FontAwesomeIcon
          icon={faGear}
          className="text-2xl group-hover:text-[#20D99A]"
        />
      </button>
    </div>
  );
};

export default Sidebar;
