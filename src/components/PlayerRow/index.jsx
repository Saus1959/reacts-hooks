import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faStar } from "@fortawesome/free-solid-svg-icons";

const PlayerRow = ({ player, onChange, onRemove, onSetCaptain }) => {
  const handleField = (field) => (e) => {
    onChange(player.id, field, e.target.value);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-[70px_1fr_1fr_1fr_auto_auto] gap-3 items-center border border-zinc-700 rounded-lg p-3 bg-[#0e121b]">
      <input
        type="number"
        value={player.number}
        onChange={handleField("number")}
        placeholder="№"
        className="w-full border border-zinc-600 rounded-lg px-3 py-2 text-sm bg-transparent focus:outline-none focus:border-[#20D99A] transition-colors"
      />
      <input
        type="text"
        value={player.name}
        onChange={handleField("name")}
        placeholder="name"
        className="w-full border border-zinc-600 rounded-lg px-3 py-2 text-sm bg-transparent focus:outline-none focus:border-[#20D99A] transition-colors"
      />
      <input
        type="text"
        value={player.position}
        onChange={handleField("position")}
        placeholder="Position"
        className="w-full border border-zinc-600 rounded-lg px-3 py-2 text-sm bg-transparent focus:outline-none focus:border-[#20D99A] transition-colors"
      />
      <input
        type="text"
        value={player.country}
        onChange={handleField("country")}
        placeholder="Country"
        className="w-full border border-zinc-600 rounded-lg px-3 py-2 text-sm bg-transparent focus:outline-none focus:border-[#20D99A] transition-colors"
      />

      <button
        type="button"
        onClick={() => onSetCaptain(player.id)}
        title="Capitan"
        className={`shrink-0 flex items-center justify-center w-10 h-10 border rounded-lg transition-colors ${
          player.isCaptain
            ? "bg-[#20D99A] border-[#20D99A] text-[#0e121b]"
            : "border-zinc-600 text-zinc-400 hover:border-[#20D99A] hover:text-[#20D99A]"
        }`}
      >
        <FontAwesomeIcon icon={faStar} className="text-sm" />
      </button>

      <button
        type="button"
        onClick={() => onRemove(player.id)}
        title="Delete player"
        className="shrink-0 flex items-center justify-center w-10 h-10 border border-zinc-600 rounded-lg text-zinc-400 hover:border-red-500 hover:text-red-500 transition-colors"
      >
        <FontAwesomeIcon icon={faTrash} className="text-sm" />
      </button>
    </div>
  );
};

export default PlayerRow;
