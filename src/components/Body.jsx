import React from "react";
import { Routes, Route } from "react-router-dom";
import PrivateRoute from "../ProtectedRoute";
import Dashboard from "./Dashboard";
import Employees from "./Employees";
import Login from "./Login";
const Body = () => {
  return (
    <div className="body-container">
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/employees"
          element={
            <PrivateRoute>
              <Employees />
            </PrivateRoute>
          }
        ></Route>
      </Routes>
    </div>
  );
};

export default Body;
