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
import LegendComponent from "./ChartConfigComponents/LegendComponent";
import { BoxShadow } from "../config/boxShadow";
import { PolarOptions } from "../config/ChartOptions";
import DisplayBorder from "./ChartConfigComponents/DisplayBorder";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const Outer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 20px;
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

const PolarChart = ({ showLegendOptions = true, innerWidth = "750px" }) => {
  const [legend, setLegend] = useState("top");
  const [display, setDisplay] = useState(true);

  console.log(legend);

  return (
    <Wrapper>
      <Outer>
        {showLegendOptions && (
          <GraphOptions>
            <LegendComponent legend={legend} setLegend={setLegend} />
            <DisplayBorder
              isAxisEnabled={display}
              setIsAxisEnabled={setDisplay}
            />
          </GraphOptions>
        )}
        <Inner innerWidth={innerWidth}>
          <PolarArea
            data={polarData}
            options={PolarOptions(legend, display)}
            key="polar"
          />
        </Inner>
      </Outer>
    </Wrapper>
  );
};

export default PolarChart;
