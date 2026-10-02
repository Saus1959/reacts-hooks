import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark, faStar } from "@fortawesome/free-solid-svg-icons";
import SavedClubBox from "./savedClubBox";

const SavedZone = ({ savedCount, savedClubs, onChange }) => {
  const [onSave, setOnSave] = useState(false);

  const toggleSaves = () => {
    setOnSave((prev) => !prev);
  };

  return (
    <div
      className={`py-4 px-4 bg-surface flex flex-col rounded-lg min-h-[140px] sm:min-h-[180px] lg:min-h-[calc(100vh-100px)] ${savedCount <= 5 ? "lg:sticky lg:top-[20px]" : ""}`}
    >
      <div className="flex justify-between">
        <div className="flex flex-col">
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faStar} className="text-yellow-700" />
            <h2 className="uppercase text-xl letter-sp tracking-wider">
              My League
            </h2>
          </div>
          <p className="border-muted">(ACTIVE SQUAD)</p>
        </div>
        <div className="h-fit rounded-full bg-[#20D99A] px-2 py-0.5 text-xs font-semibold text-[#0E121B]">
          {savedCount}
        </div>
      </div>
      <div className="flex-1 flex flex-col gap-2 my-4 overflow-y-auto">
        {savedClubs.map((savedClub) => {
          return (
            <SavedClubBox
              key={savedClub.id}
              clubId={savedClub.id}
              clubLogoUrl={savedClub.logo}
              clubName={savedClub.name}
              onChange={onChange}
              onSave={onSave}
            />
          );
        })}
      </div>
      <button
        onClick={() => toggleSaves()}
        className="flex items-center justify-center gap-2 rounded-md bg-[#20D99A] py-2 transition-colors duration-200 hover:bg-[#1ab881]"
      >
        <FontAwesomeIcon icon={faBookmark} />
        <h3 className="font-semibold text-[#0E121B]">
          {onSave ? "Change teams" : "Save teams"}
        </h3>
      </button>
    </div>
  );
};

export default SavedZone;
