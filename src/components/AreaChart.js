import React, { useState } from "react";
import styled from "styled-components/macro";
import { colors } from "../config/ColorPalette";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { AreaChartOptions } from "../config/ChartOptions";
import { AreaChartData } from "../config/ChartData";
import LegendComponent from "./ChartConfigComponents/LegendComponent";
import FillChart from "./ChartConfigComponents/FillChart";
import { BoxShadow } from "../config/boxShadow";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  gap: 20px;
`;

const GraphOptions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Inner = styled.div`
  display: flex;
  width: 80%;
  box-shadow: ${BoxShadow} canvas {
    padding: 10px;
    height: 82vh;
    border-radius: 5px;
    border: 2px solid ${colors.orange};
    box-shadow: ${BoxShadow};
  }
`;

const AreaChart = () => {
  const [legend, setLegend] = useState("top");
  const [fillDs1, setFillDs1] = useState(true);
  const [fillDs2, setFillDs2] = useState(true);
  return (
    <Wrapper>
      <GraphOptions>
        <LegendComponent legend={legend} setLegend={setLegend} />
        <FillChart
          fillDs1={fillDs1}
          fillDs2={fillDs2}
          setFillDs1={setFillDs1}
          setFillDs2={setFillDs2}
        />
      </GraphOptions>
      <Inner>
        <Line
          options={AreaChartOptions(legend)}
          data={AreaChartData(fillDs1, fillDs2)}
        />
      </Inner>
    </Wrapper>
  );
};

export default AreaChart;
