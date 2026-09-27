import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserPlus,
  faFloppyDisk,
  faShieldHalved,
} from "@fortawesome/free-solid-svg-icons";
import PlayerRow from "../../components/PlayerRow/index";
import axios from "axios";
import { toast } from "sonner";

const endpoint = "http://localhost:3000/created%20clubs";

const emptyPlayer = (id) => ({
  id,
  name: "",
  number: "",
  position: "",
  country: "",
  isCaptain: false,
});

const CreateClubForm = () => {
  const [club, setClub] = useState({
    name: "",
    logo: "",
    stadium: "",
    league: "",
    budget: "",
    coach: "",
    formation: "",
  });

  const [players, setPlayers] = useState([emptyPlayer(1)]);
  const nextIdRef = 2;
  const [nextId, setNextId] = useState(nextIdRef);

  const handleClubField = (field) => (e) => {
    setClub((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const addPlayer = () => {
    setPlayers((prev) => [...prev, emptyPlayer(nextId)]);
    setNextId((prev) => prev + 1);
  };

  const removePlayer = (id) => {
    setPlayers((prev) => prev.filter((player) => player.id !== id));
  };

  const updatePlayerField = (id, field, value) => {
    setPlayers((prev) =>
      prev.map((player) =>
        player.id === id ? { ...player, [field]: value } : player,
      ),
    );
  };

  const setCaptain = (id) => {
    setPlayers((prev) =>
      prev.map((player) => ({ ...player, isCaptain: player.id === id })),
    );
  };

  const handleSubmit = (e) => {
    console.log("submit called");
    e.preventDefault();

    const payload = {
      ...club,
      budget: Number(club.budget) || 0,
      players: players.map((player) => ({
        ...player,
        number: Number(player.number) || 0,
      })),
    };

    axios
      .post(endpoint, payload)
      .then(({ status, data }) => {
        console.log(data);
        if (status === 201) {
          toast.success("New club created");
        }
      })
      .catch((err) => {
        toast.error("Failed to create");
        console.error(err);
      });
  };

  return (
    <div className="w-full px-3 sm:px-6 py-6 md:py-8 max-w-7xl mx-auto">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-lg bg-[#20D99A] flex items-center justify-center shrink-0">
          <FontAwesomeIcon icon={faShieldHalved} className="text-[#0e121b]" />
        </div>
        <div>
          <h1 className="text-xl md:text-2xl uppercase tracking-wider">
            Create a club
          </h1>
          <p className="text-xs md:text-sm text-zinc-400">
            Fill the form and submit the creation
          </p>
        </div>
      </div>

      <form
        onSubmit={handleSubmit}
        className="w-full bg-[#111722] border border-zinc-700 rounded-lg p-4 sm:p-6 space-y-8 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-12 md:gap-y-8"
      >
        <section className="space-y-4">
          <h2 className="text-lg uppercase tracking-wider text-zinc-300">
            Club info
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-zinc-400 mb-1.5">
                Club name
              </label>
              <input
                type="text"
                required
                value={club.name}
                onChange={handleClubField("name")}
                placeholder="FC Real Madrid"
                className="w-full border border-zinc-600 rounded-lg px-3 py-2 text-sm bg-[#0e121b] focus:outline-none focus:border-[#20D99A] transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm text-zinc-400 mb-1.5">
                Logo URL
              </label>
              <input
                type="url"
                value={club.logo}
                onChange={handleClubField("logo")}
                placeholder="https://example.com/logo.png"
                className="w-full border border-zinc-600 rounded-lg px-3 py-2 text-sm bg-[#0e121b] focus:outline-none focus:border-[#20D99A] transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm text-zinc-400 mb-1.5">
                Stadium
              </label>
              <input
                type="text"
                value={club.stadium}
                onChange={handleClubField("stadium")}
                placeholder="Camp Nou"
                className="w-full border border-zinc-600 rounded-lg px-3 py-2 text-sm bg-[#0e121b] focus:outline-none focus:border-[#20D99A] transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm text-zinc-400 mb-1.5">
                League
              </label>
              <input
                type="text"
                value={club.league}
                onChange={handleClubField("league")}
                placeholder="EPL"
                className="w-full border border-zinc-600 rounded-lg px-3 py-2 text-sm bg-[#0e121b] focus:outline-none focus:border-[#20D99A] transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm text-zinc-400 mb-1.5">
                Budget ($)
              </label>
              <input
                type="number"
                value={club.budget}
                onChange={handleClubField("budget")}
                placeholder="150000000"
                className="w-full border border-zinc-600 rounded-lg px-3 py-2 text-sm bg-[#0e121b] focus:outline-none focus:border-[#20D99A] transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm text-zinc-400 mb-1.5">
                Head Coach
              </label>
              <input
                type="text"
                value={club.coach}
                onChange={handleClubField("coach")}
                placeholder="Jose Mourinho"
                className="w-full border border-zinc-600 rounded-lg px-3 py-2 text-sm bg-[#0e121b] focus:outline-none focus:border-[#20D99A] transition-colors"
              />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm text-zinc-400 mb-1.5">
                Team formation
              </label>
              <input
                type="text"
                value={club.formation}
                onChange={handleClubField("formation")}
                placeholder="4-3-3"
                className="w-full sm:w-1/2 border border-zinc-600 rounded-lg px-3 py-2 text-sm bg-[#0e121b] focus:outline-none focus:border-[#20D99A] transition-colors"
              />
            </div>
          </div>
        </section>

        {/* ===== Players ===== */}
        <section className="space-y-4 md:border-l md:border-zinc-800 md:pl-8">
          <div className="flex items-center justify-between">
            <h2 className="text-lg uppercase tracking-wider text-zinc-300">
              Players
            </h2>
            <span className="text-sm text-zinc-400">
              {players.length} players in club
            </span>
          </div>

          <div className="space-y-3">
            {players.map((player) => (
              <PlayerRow
                key={player.id}
                player={player}
                onChange={updatePlayerField}
                onRemove={removePlayer}
                onSetCaptain={setCaptain}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={addPlayer}
            className="flex items-center justify-center gap-2 w-full border border-dashed border-zinc-600 rounded-lg py-3 text-sm text-zinc-400 hover:border-[#20D99A] hover:text-[#20D99A] transition-colors"
          >
            <FontAwesomeIcon icon={faUserPlus} />
            Add player
          </button>
        </section>

        {/* ===== Submit ===== */}
        <div className="md:col-span-2 flex flex-col sm:flex-row gap-3 pt-6 border-t border-zinc-800">
          <button
            type="submit"
            className="w-full md:w-auto md:px-12 flex items-center justify-center gap-2 bg-[#20D99A] hover:bg-[#1ab881] text-[#0e121b] font-semibold rounded-lg py-3 transition-colors ml-auto"
          >
            <FontAwesomeIcon icon={faFloppyDisk} />
            Save Club
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateClubForm;
