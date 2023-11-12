import React from "react";
import { Routes, Route } from "react-router-dom";
import BusinessLanding from "./pages/BusinessLanding";
import Home from "./pages/Home";

const MainRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/business" element={<BusinessLanding />}></Route>
    </Routes>
  );
};

export default MainRouter;
