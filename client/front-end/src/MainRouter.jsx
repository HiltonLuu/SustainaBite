import React from "react";
import { Routes, Route } from "react-router-dom";
import BusinessLanding from "./pages/BusinessLanding";
import NPOLanding from "./pages/NPOLanding";
import Home from "./pages/Home";
import NPORequest from "./pages/NPORequest";
import NPOOrder from "./pages/NPOOrder";
import NPOPay from "./pages/NPOPay"
import DonationsPage from "./DonationsPage";
import Signin from "./pages/Signin";

const MainRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/sign-in" element={<Signin />}></Route>
      <Route path="/business" element={<BusinessLanding />}></Route>
      <Route path="/not-for-profit" element={<NPOLanding />}></Route>
      <Route path="/not-for-profit/request/:id" element={<NPORequest />}></Route>
      <Route path="/not-for-profit/order/:id" element={<NPOOrder />}></Route>
      <Route path="/not-for-profit/pay/:id" element={<NPOPay />}></Route>
      <Route path="/donate" element={<DonationsPage />}></Route>
    </Routes>
  );
};

export default MainRouter;
