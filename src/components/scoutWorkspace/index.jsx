import React, { useEffect, useState } from "react";
import SearchInput from "./searchInput";
import SavedZone from "./savedZone";
import GridList from "./gridList";
import axios from "axios";

const API_ENDPOINT = "http://localhost:3000/clubs";

const ScoutWorkspace = () => {
  const [clubs, setClubs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

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

  if (isLoading) return <div className="p-4">Загрузка...</div>;
  if (error) return <div className="p-4 text-red-500">{error}</div>;

  return (
    <div className="row-start-2 grid grid-cols-[80%_20%]">
      <div>
        <SearchInput />
        <GridList clubs={clubs} />
      </div>
      <SavedZone />
    </div>
  );
};

export default ScoutWorkspace;
