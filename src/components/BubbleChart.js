import React from "react";
import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Bubble } from "react-chartjs-2";
ChartJS.register(LinearScale, PointElement, Tooltip, Legend);
import { bubbleChartData } from "../config/ChartData";
import { bubbleChartOptions } from "../config/ChartOptions";

const BubbleChart = () => {
  return (
    <Bubble options={bubbleChartOptions} data={bubbleChartData} key="buble" />
  );
};

export default BubbleChart;
