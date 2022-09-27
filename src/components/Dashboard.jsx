import React, { useContext } from "react";
import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
  ScatterChart,
  ZAxis,
  Scatter,
} from "recharts";
import UserContext from "../Context/UserContext";
import "../styles/dashboard.scss";
const Dashboard = () => {
  const { barChartData } = useContext(UserContext);
  return (
    <div className="dashboard">
      <div className="">
        <h3>Novelty Projects Growth</h3>
        <BarChart width={330} height={250} data={barChartData}>
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

      </div>
    </div>
  );
};

export default Dashboard;
