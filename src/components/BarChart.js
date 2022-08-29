import React, { useRef, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar, getElementAtEvent, getDatasetAtEvent } from "react-chartjs-2";
import styled from "styled-components/macro";
import { data } from "../config/ChartData";
import { BarOptions } from "../config/ChartOptions";
import { AnimatePresence } from "framer-motion";
import Modal from "./Modal/Modal";
import { colors } from "../config/ColorPalette";
import LegendComponent from "./BarChartConfigComponents/LegendComponent";
import DisplayAxis from "./BarChartConfigComponents/DisplayAxis";
import { BoxShadow } from "../config/boxShadow";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Outter = styled.div`
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
  box-shadow: ${BoxShadow};
  canvas {
    padding: 10px;
    border-radius: 5px;
    border: 2px solid ${colors.orange};
    box-shadow: ${BoxShadow};
  }
`;

export default function BarChart() {
  const [isOpen, setIsOpen] = useState(false);
  const [legend, setLegend] = useState("top");
  const [isAxisEnabled, setIsAxisEnabled] = useState(false);

  const [modalData, setModalData] = useState({
    datasetLabel: "",
    value: "",
    month: "",
  });

  const chartRef = useRef();

  const onClick = (event) => {
    const eventData = getElementAtEvent(chartRef.current, event)[0];
    const datasetIndex = eventData?.datasetIndex;
    const index = eventData?.index;
    const month = data.labels[index];
    const value = data.datasets[datasetIndex]?.data[index];
    const label = data.datasets[datasetIndex]?.label;
    setModalData({ datasetLabel: label, month: month, value: value });
    if (eventData) {
      setIsOpen(true);
    }
    console.log("clicked");
  };

  return (
    <Outter>
      <GraphOptions>
        <LegendComponent setLegend={setLegend} />
        <DisplayAxis
          isAxisEnabled={isAxisEnabled}
          setIsAxisEnabled={setIsAxisEnabled}
        />
      </GraphOptions>
      <Inner>
        <Bar
          onClick={onClick}
          ref={chartRef}
          options={BarOptions(legend, isAxisEnabled)}
          data={data}
          key="data"
        />
        <Modal isOpen={isOpen} setIsOpen={setIsOpen} data={modalData} />
      </Inner>
    </Outter>
  );
}
