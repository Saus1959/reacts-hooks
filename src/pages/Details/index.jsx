import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { toast } from "sonner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faShieldHalved,
  faLocationDot,
  faUserTie,
  faChessBoard,
  faSackDollar,
  faUserGroup,
  faPen,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import FormationPitch from "../../components/FormationPitch/index";
import Loading from "../../components/loading";

const API_ENDPOINT = "http://localhost:3000/created%20clubs";

const formatBudget = (value) => {
  const num = Number(value) || 0;
  return `$${num.toLocaleString("en-US")}`;
};

const TeamDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [club, setClub] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${API_ENDPOINT}/${id}`)
      .then(({ data }) => setClub(data))
      .catch((err) => {
        toast.error(err.message);
      })
      .finally(() => setIsLoading(false));
  }, [id]);

  const handleDelete = () => {
    const confirmed = window.confirm("Do you want to delete?");
    if (!confirmed) return;

    axios
      .delete(`${API_ENDPOINT}/${id}`)
      .then(() => {
        toast.success("Club deleted");
        navigate("/custom");
      })
      .catch((err) => {
        toast.error("Failed to delete");
        console.error(err);
      });
  };

  if (isLoading) {
    return <Loading variant="dots" size="lg" fullscreen />;
  }

  if (!club) {
    return (
      <div className="px-2 pt-2 md:pt-4 lg:pt-5 w-full">
        <div className="p-5 rounded-lg bg-surface text-red-500">
          Клуб не найден
        </div>
      </div>
    );
  }

  return (
    <div className="px-2 pt-2 md:pt-4 lg:pt-5 pb-8 w-full">
      <Link
        to="/custom"
        className="inline-flex items-center gap-2 text-sm border-muted hover:text-[#20D99A] transition-colors mb-4"
      >
        <FontAwesomeIcon icon={faArrowLeft} className="text-xs" />
        Back to list
      </Link>

      <div className="w-full rounded-lg bg-surface border border-line p-4 sm:p-6">
        <div className="flex items-center gap-4 pb-6 mb-6 border-b border-zinc-800">
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-lg bg-base border border-line flex items-center justify-center overflow-hidden shrink-0">
            {club.logo ? (
              <img
                src={club.logo}
                alt={club.name}
                className="w-full h-full object-contain"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
            ) : (
              <FontAwesomeIcon
                icon={faShieldHalved}
                className="border-muted text-2xl"
              />
            )}
          </div>
          <div className="min-w-0">
            <h1 className="text-xl sm:text-2xl uppercase tracking-wider truncate">
              {club.name}
            </h1>
            <p className="text-sm border-muted truncate">
              {club.league || "No league"}
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-6">
          <section>
            <h2 className="text-lg uppercase tracking-wider pb-1 text-secondary">
              Club information
            </h2>
            <dl className="divide-y divide-zinc-800 border border-zinc-800 rounded-lg">
              <div className="flex items-center justify-between px-5 py-3.5">
                <dt className="flex items-center gap-3 text-sm border-muted">
                  <FontAwesomeIcon
                    icon={faLocationDot}
                    className="w-4 text-center"
                  />
                  Stadium
                </dt>
                <dd className="text-sm font-medium truncate max-w-[60%] text-right">
                  {club.stadium || "—"}
                </dd>
              </div>
              <div className="flex items-center justify-between px-5 py-3.5">
                <dt className="flex items-center gap-3 text-sm border-muted">
                  <FontAwesomeIcon
                    icon={faUserTie}
                    className="w-4 text-center"
                  />
                  Coach
                </dt>
                <dd className="text-sm font-medium truncate max-w-[60%] text-right">
                  {club.coach || "—"}
                </dd>
              </div>
              <div className="flex items-center justify-between px-5 py-3.5">
                <dt className="flex items-center gap-3 text-sm border-muted">
                  <FontAwesomeIcon
                    icon={faChessBoard}
                    className="w-4 text-center"
                  />
                  Formation
                </dt>
                <dd className="text-sm font-medium">{club.formation || "—"}</dd>
              </div>
              <div className="flex items-center justify-between px-5 py-3.5">
                <dt className="flex items-center gap-3 text-sm border-muted">
                  <FontAwesomeIcon
                    icon={faUserGroup}
                    className="w-4 text-center"
                  />
                  Players
                </dt>
                <dd className="text-sm font-medium">
                  {club.players?.length || 0} игроков
                </dd>
              </div>
              <div className="flex items-center justify-between px-5 py-3.5">
                <dt className="flex items-center gap-3 text-sm border-muted">
                  <FontAwesomeIcon
                    icon={faSackDollar}
                    className="w-4 text-center"
                  />
                  Budget
                </dt>
                <dd className="text-sm font-semibold text-[#20D99A]">
                  {formatBudget(club.budget)}
                </dd>
              </div>
            </dl>

            <div className="flex flex-col sm:flex-row gap-3 mt-6">
              <Link
                to={`/custom/${id}/edit`}
                className="flex-1 inline-flex items-center justify-center gap-2 bg-zinc-700 hover:bg-zinc-600 text-primary text-sm font-medium px-5 py-3 rounded-lg transition-colors"
              >
                <FontAwesomeIcon icon={faPen} />
                Edit
              </Link>
              <button
                onClick={handleDelete}
                className="flex-1 inline-flex items-center justify-center gap-2 bg-red-800 hover:bg-red-700 text-primary text-sm font-medium px-5 py-3 rounded-lg transition-colors"
              >
                <FontAwesomeIcon icon={faTrash} />
                Delete
              </button>
            </div>
          </section>

          <section>
            <h2 className="text-lg uppercase tracking-wider text-secondary mb-4">
              Formation {club.formation ? `(${club.formation})` : ""}
            </h2>
            <FormationPitch formation={club.formation} />
          </section>
        </div>
      </div>
    </div>
  );
};

export default TeamDetails;
