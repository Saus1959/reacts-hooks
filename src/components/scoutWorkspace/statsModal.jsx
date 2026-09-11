import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import PlayerCard from "./playerCard";

const StatsModal = ({ isOpen, onClose, clubName, topPlayers = [] }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
      onClick={onClose}
    >
      <div
        className="w-full max-w-md bg-[#111722] rounded-lg p-5 border border-zinc-700"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold truncate">{clubName}</h2>
          <button
            onClick={onClose}
            className="p-1.5 rounded-md hover:bg-zinc-700 transition-colors shrink-0"
          >
            <FontAwesomeIcon icon={faXmark} />
          </button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {topPlayers.map((playerName) => (
            <PlayerCard key={playerName} playerName={playerName} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsModal;
