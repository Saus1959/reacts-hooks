import React, { useEffect, useState } from "react";
import SearchInput from "./searchInput";
import SavedZone from "./savedZone";
import GridList from "./gridList";
import axios from "axios";
import Loading from "../loading/index";

const API_ENDPOINT = "http://localhost:3000/clubs";

const ScoutWorkspace = () => {
  const [clubs, setClubs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [inputVal, setInputVal] = useState("");

  useEffect(() => {
    axios
      .get(API_ENDPOINT)
      .then(({ data }) => {
        setClubs(data);
      })
      .catch((err) => {
        setError("We have some problems with data");
        console.error(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  if (isLoading) return <Loading variant="dots" size="lg" fullscreen />;
  if (error)
    return <div className="p-4 text-red-500 md:row-start-2">{error}</div>;

  const filteredClubs = clubs.filter((club) => {
    if (!inputVal) return true;

    const searchableFields = [club.name, club.league, club.city, club.country];

    return searchableFields.some(
      (field) => field && field.toLowerCase().includes(inputVal.toLowerCase()),
    );
  });

  const filteredClubsBySave = clubs.filter((club) => club.isSaved);

  const saveClub = (clubId) => {
    setClubs((prevClubs) =>
      prevClubs.map((club) =>
        club.id === clubId ? { ...club, isSaved: true } : club,
      ),
    );
  };

  const unsaveClub = (clubId) => {
    setClubs((prevClubs) =>
      prevClubs.map((club) =>
        club.id === clubId ? { ...club, isSaved: false } : club,
      ),
    );
  };

  const openStats = (clubId) => {
    alert(clubId);
  };

  return (
    <div className="px-2 pt-2 md:pt-4 lg:pt-5 md:row-start-2 flex flex-col w-full lg:items-start lg:grid lg:grid-cols-[1fr_260px] gap-4 lg:gap-6">
      <div className="pt-2 md:pt-3 lg:pt-4 min-w-0 rounded-lg bg-[#111722]">
        <SearchInput onChange={(e) => setInputVal(e.target.value)} />
        <GridList
          clubs={filteredClubs}
          clubsCount={filteredClubs.length}
          onChangeSaved={saveClub}
          onOpen={openStats}
        />
      </div>
      <SavedZone
        savedCount={filteredClubsBySave.length}
        savedClubs={filteredClubsBySave}
        onChange={unsaveClub}
      />
    </div>
  );
};

export default ScoutWorkspace;
