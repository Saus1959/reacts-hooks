import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faStar,
  faArrowUpRightDots,
} from "@fortawesome/free-solid-svg-icons";

const ClubBox = ({
  clubName,
  clubLeague,
  clubCountry,
  clubCity,
  clubLogoUrl,
}) => {
  return (
    <div className="p-4 border border-zinc-600 hover:border-[#20D99A] p-5 rounded-lg transition-shadow duration-100 hover:shadow-[0_0_15px_#20D99A] cursor-pointer">
      <div className="flex justify-center gap-3">
        <div className="max-w-50 max-h-50 p-5 size-40">
          <img src={clubLogoUrl} alt={clubName} className="size-full" />
        </div>
        <div>
          <h3>{clubName}</h3>
          <p>{clubLeague}</p>
          <div>rating</div>
          <div className="flex justify-center items-center gap-2">
            <FontAwesomeIcon icon={faLocationDot} />
            <p>
              {clubCountry},{clubCity}
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <button className="flex justify-center items-center gap-2 px-4 py-4 border border-zinc-600 rounded-lg">
          <FontAwesomeIcon icon={faStar} />
          <p>Add to my saved list</p>
        </button>
        <button className="flex justify-center items-center gap-2 px-8 py-4 border border-zinc-600 rounded-lg">
          <FontAwesomeIcon icon={faArrowUpRightDots} />
          <p>Stats</p>
        </button>
      </div>
    </div>
  );
};

export default ClubBox;
