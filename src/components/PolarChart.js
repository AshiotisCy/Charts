import React from "react";
import {
  Chart as ChartJS,
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import { PolarArea } from "react-chartjs-2";

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);
import { polarData } from "../config/ChartData";

const PolarChart = () => {
  return <PolarArea data={polarData} key="polar" />;
};

export default PolarChart;
