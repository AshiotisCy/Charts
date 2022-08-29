import React, { useState } from "react";
import {
  Chart as ChartJS,
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import styled from "styled-components/macro";
import { colors } from "../config/ColorPalette";
import { PolarArea } from "react-chartjs-2";

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);
import { polarData } from "../config/ChartData";
import LegendComponent from "./BarChartConfigComponents/LegendComponent";
import { BoxShadow } from "../config/boxShadow";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 20px;
`;

const GraphOptions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Inner = styled.div`
  width: ${({ innerWidth }) => innerWidth};
  display: flex;
  justify-content: center;
  align-items: center;

  canvas {
    padding: 10px;
    height: 82vh;
    border-radius: 5px;
    border: 2px solid ${colors.orange};
    box-shadow: ${BoxShadow};
  }
`;

const PolarChart = ({ showLegendOptions = true, innerWidth = "800px" }) => {
  const [legend, setLegend] = useState("top");
  return (
    <Wrapper>
      {showLegendOptions && (
        <GraphOptions>
          <LegendComponent setLegend={setLegend} />
        </GraphOptions>
      )}
      <Inner innerWidth={innerWidth}>
        <PolarArea data={polarData} key="polar" />
      </Inner>
    </Wrapper>
  );
};

export default PolarChart;
