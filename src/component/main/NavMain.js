import React from "react";
import Friends from "./Friends";
import Navbar from "./Navbar";
import Home from "./Home";
import Heading from "./Header";
import { Route, Routes } from "react-router-dom";
import Calendar from "../calendar/Calendar";

export const NavMain = () => {
  return (
    <div>
      <Navbar />
      <Heading />
      <div className="containers">
        <Routes>
          <Route path="/schedule" element={<Calendar />} />
          <Route path="/friends" element={<Friends />} />
        </Routes>
      </div>
    </div>
  );
};