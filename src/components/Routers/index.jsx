import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../../pages/Home";
import NewTeams from "../../pages/NewTeams";
import CreateClubForm from "../../pages/CreateClubForm/index";
import TeamDetails from "../../pages/Details";

const Routers = () => {
  const routes = [
    { path: "/", element: <Home /> },
    { path: "/custom", element: <NewTeams /> },
    { path: "/custom/create", element: <CreateClubForm /> },
    { path: "/custom/:id", element: <TeamDetails /> },
  ];

  return (
    <Routes>
      {routes.map((r) => {
        return <Route path={r.path} element={r.element} />;
      })}
    </Routes>
  );
};

export default Routers;
