import React from "react";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SavedClubBox = ({ clubLogoUrl, clubName, onChange, clubId, onSave }) => {
  const shiftUnsave = () => {
    onChange(clubId);
  };
  return (
    <div className="bg-surface border border-line rounded-lg relative flex items-center gap-2 py-3 px-2">
      <div className="flex justify-center items-center size-12">
        <img
          src={clubLogoUrl}
          alt={clubName}
          className="w-full h-full object-contain"
        />
      </div>
      <h3>{clubName}</h3>
      <button
        onClick={shiftUnsave}
        className={`${onSave ? "hidden" : "absolute right-5 hover:text-[#20D99A]"} `}
      >
        <FontAwesomeIcon icon={faXmark} />
      </button>
    </div>
  );
};

export default SavedClubBox;
