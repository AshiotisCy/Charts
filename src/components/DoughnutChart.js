import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { doughnutData } from "../config/ChartData";

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = () => {
  return <Doughnut data={doughnutData} />;
};

export default DoughnutChart;
