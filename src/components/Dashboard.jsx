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
const Dashboard = () => {
  const { barChartData, LineChartData } = useContext(UserContext);
  return (
    <>
      <h1>Novelty Dashboard</h1>

      <div className="dashboard">
        <Link to="/employees">
          <div>Employees</div>
        </Link>
        <div className="">
          <h3 className="text-center">Novelty Employees Growth</h3>
          <BarChart width={530} height={250} data={barChartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="employees" fill="#C4A484" />
          </BarChart>
        </div>
        <div className="">
          <h3>Novelty Projects Growth</h3>
          <LineChart
            width={530}
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
    </>
  );
};

export default Dashboard;
