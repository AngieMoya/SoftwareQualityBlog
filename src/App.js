import React, { useState } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  createRoutesFromElements,
  Outlet,
} from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import BlogMain from "./components/BlogMain";
import Footer from "./components/Footer";
import Aboutme from "./components/Aboutme";
import QualityConcepts from "./components/QualityConcepts";
import ProcessQuality from "./components/ProcessQuality";
import QualityPlan from "./components/QualityPlan";
import TechnicalReviews from "./components/TechnicalReviews";


const Root = () => {
  const [stateBackgroundMode, setStateBackgroundMode] = useState(false);

  const modeBackground = stateBackgroundMode ? "light" : "dark";

  return (
    <div className={`App ${modeBackground}`}>
      <Navbar setStateBackgroundMode={setStateBackgroundMode} />
      <Outlet context={{ stateBackgroundMode }}></Outlet>
      <Footer stateBackgroundMode={stateBackgroundMode} />
    </div>
  );
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route path="/" element={<BlogMain />}></Route>
      <Route path="aboutme" element={<Aboutme />}></Route>
      <Route path="qualityconcepts" element={<QualityConcepts />}></Route>
      <Route path="processquality" element={<ProcessQuality />}></Route>
      <Route path="qualityplan" element={<QualityPlan />}></Route>
      <Route path="technicalreviews" element={<TechnicalReviews />}></Route>
    </Route>
  )
);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
