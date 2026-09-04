import React from "react";
import Sidebar from "./components/sidebar";
import Headbar from "./components/headbar";
import ScoutWorkspace from "./components/scoutWorkspace";

const App = () => {
  return (
    <div className="min-h-screen grid grid-cols-[10%_90%] grid-rows-[auto_1fr]">
      <Sidebar />
      <Headbar />
      <ScoutWorkspace />
    </div>
  );
};

export default App;
