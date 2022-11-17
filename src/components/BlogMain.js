import React from "react";
import { Outlet, useOutletContext } from "react-router-dom";
import Header from "../components/Header";
import Cards from "../components/Cards";
import Aboutblog from "./Aboutblog";

function BlogMain() {
  const { stateBackgroundMode } = useOutletContext();

  return (
    <main className="BlogMain">
      <Header stateBackgroundMode={stateBackgroundMode} />
      <Aboutblog stateBackgroundMode={stateBackgroundMode} />
      <Cards />
    </main>
  );
}

export default BlogMain;
