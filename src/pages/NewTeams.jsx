import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import axios from "axios";
import Loading from "../components/loading/index";
import { toast } from "sonner";
import NewTeamCard from "../components/NewTeamCard";

const NewTeams = () => {
  const endpoint = "http://localhost:3000/created%20clubs";

  const [customClubs, setCustomClubs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get(endpoint)
      .then(({ data }) => {
        setCustomClubs(data);
      })
      .catch((err) => {
        toast.error(err.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  if (isLoading) return <Loading variant="dots" size="lg" fullscreen />;

  return (
    <div className="px-2 pt-2 md:pt-4 lg:pt-5 w-full">
      <div className="pt-2 px-5 md:pt-3 lg:pt-4 min-w-0 rounded-lg bg-[#111722]">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold"> Your custom teams</h2>
          <Link
            to="/custom/create"
            className="bg-[#20D99A] px-2 py-1 rounded-md text-[#0e121b] font-semibold flex justify-center items-center gap-3"
          >
            <p>Create</p>
            <FontAwesomeIcon icon={faPlus} />
          </Link>
        </div>
        <div className="py-10 grid grid-cols-2 gap-5 md:gap-4 md:grid-cols-3">
          {customClubs.map((club) => (
            <NewTeamCard club={club} key={club.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewTeams;
