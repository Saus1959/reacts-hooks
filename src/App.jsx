import React from "react";
import Sidebar from "./components/sidebar";
import Headbar from "./components/headbar";
import Routers from "./components/Routers";
import { Toaster } from "sonner";

const App = () => {
  return (
    <div className="min-h-screen w-full flex flex-col items-start md:grid md:grid-cols-[minmax(90px,10%)_1fr] md:grid-rows-[auto_1fr]">
      <Sidebar />
      <Headbar />
      <Routers />
      <Toaster richColors position="top-right" />
    </div>
  );
};

export default App;
