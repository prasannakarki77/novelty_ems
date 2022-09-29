import React, { useContext } from "react";
import { Link } from "react-router-dom";
import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
  LineChart,
  Line,
} from "recharts";
import UserContext from "../Context/UserContext";
import "../styles/dashboard.scss";
import logo from "../assets/novelty.svg";
import { RiDashboardFill } from "react-icons/ri";
import { BsPersonLinesFill } from "react-icons/bs";
import { FaUserCog } from "react-icons/fa";
import { MdLogout } from "react-icons/md";
import Button from "react-bootstrap/Button";
const Dashboard = () => {
  const { barChartData, LineChartData, userList } = useContext(UserContext);
  const loggedUser = localStorage.getItem("currentUser");
  const logout = () => {
    localStorage.setItem("currentUser", "");
    window.location.replace("/login");
  };
  return (
    <div className="dashboard">
      <div className="dashboard__header">
        <div className="dashboard__logo">
          <img src={logo} alt="novelty logo" />
        </div>
        <Button
          variant="danger"
          className="my-3 dashboard__logout-btn"
          onClick={logout}
        >
          <MdLogout /> Logout
        </Button>
      </div>
      <h1 className="dashboard__heading">
        <RiDashboardFill />
        <p>Dashboard</p>
      </h1>
      <div className="boxes">
        <Link to="/employees" className="box">
          <h3 className="box__heading employee-heading">
            <BsPersonLinesFill className="employee-icon" /> Employees
          </h3>

          <p className="user-count">{userList.length}</p>
        </Link>
        <div className="box">
          <FaUserCog className="box__icon" />
          <h4 className="user">{loggedUser}</h4>
        </div>
        <div className="box">
          <h3 className="box__heading">Novelty Employees Growth</h3>
          <BarChart width={480} height={250} data={barChartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="employees" fill="#C4A484" />
          </BarChart>
        </div>
        <div className="box">
          <h3 className="box__heading">Novelty Projects Growth</h3>
          <LineChart
            width={480}
            height={250}
            data={LineChartData}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="projects" stroke="#8884d8" />
          </LineChart>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
