import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { usePlayerData } from "./usePlayerData";

const PlayerCard = ({ playerName }) => {
  const { data, isLoading, error } = usePlayerData(playerName);

  const photoUrl = data?.strCutout || data?.strThumb || null;

  return (
    <div className="flex flex-col items-center gap-2 p-3 bg-[#0e121b] rounded-lg border border-zinc-700">
      <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-zinc-800 flex items-center justify-center overflow-hidden shrink-0">
        {isLoading ? (
          <div className="w-8 h-8 rounded-full border-2 border-zinc-600 border-t-[#20D99A] animate-spin" />
        ) : photoUrl && !error ? (
          <img
            src={photoUrl}
            alt={playerName}
            className="w-full h-full object-cover object-top"
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
          />
        ) : (
          <FontAwesomeIcon icon={faUser} className="text-3xl text-zinc-500" />
        )}
      </div>

      <div className="text-center min-w-0 w-full">
        <p className="text-sm font-medium truncate">{playerName}</p>
        {data?.strPosition && (
          <p className="text-xs text-zinc-400 truncate">{data.strPosition}</p>
        )}
        {data?.strNationality && (
          <p className="text-xs text-zinc-500 truncate">
            {data.strNationality}
          </p>
        )}
      </div>
    </div>
  );
};

export default PlayerCard;
