import React from "react";
import styled from "styled-components/macro";
import { bubbleChartData, data, polarData } from "../config/ChartData";
import { BarOptions, bubbleChartOptions } from "../config/ChartOptions";
import { colors } from "../config/ColorPalette";
import {
  Chart as ChartJS,
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend,
  LinearScale,
  PointElement,
} from "chart.js";
import { Bar, PolarArea, Bubble } from "react-chartjs-2";
import { Navigate } from "react-router";

ChartJS.register(
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend,
  LinearScale,
  PointElement
);

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const Outer = styled.div`
  display: flex;
  height: 50%;
  align-items: center;
  padding: 20px 20px 0;
  gap: 20px;
`;

const Chart = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0.46875rem 2.1875rem rgb(0 0 0 / 3%),
    0 0.9375rem 1.40625rem rgb(0 0 0 / 3%), 0 0.25rem 0.53125rem rgb(0 0 0 / 5%),
    0 0.125rem 0.1875rem rgb(0 0 0 / 3%);

  &.large {
    width: 800px;
  }
  &.medium {
    width: 400px;
  }
`;

const FullPageChart = styled.div`
  width: 800px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0.46875rem 2.1875rem rgb(0 0 0 / 3%),
    0 0.9375rem 1.40625rem rgb(0 0 0 / 3%), 0 0.25rem 0.53125rem rgb(0 0 0 / 5%),
    0 0.125rem 0.1875rem rgb(0 0 0 / 3%);
`;

const Homepage = () => {
  return (
    <Wrapper>
      <Outer>
        <Chart className="large">
          <Bar options={BarOptions("top", false)} data={data} key="bar" />
        </Chart>
        <Chart className="medium">
          <PolarArea data={polarData} key="polar" />
        </Chart>
      </Outer>
      <Outer>
        <FullPageChart>
          <Bubble
            options={bubbleChartOptions}
            data={bubbleChartData}
            key="buble"
          />
        </FullPageChart>
      </Outer>
    </Wrapper>
  );
};

export default Homepage;
