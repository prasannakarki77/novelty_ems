import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import Employees from "./Employees";
import Login from "./Login";
const Body = () => {
  return (
    <div className="body-container">
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/employees" element={<Employees />}></Route>
      </Routes>
    </div>
  );
};

export default Body;
