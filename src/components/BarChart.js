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
`;

const Inner = styled.div`
  display: flex;
  width: 80%;
`;

export default function BarChart() {
  const [isOpen, setIsOpen] = useState(false);

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
  };

  const [legend, setLegend] = useState("top");

  return (
    <Outter>
      <div>
        <div>Legend</div>
        <button onClick={() => setLegend("top")}>Top</button>
        <button onClick={() => setLegend("right")}>Right</button>
        <button onClick={() => setLegend("bottom")}>Bottom</button>
        <button onClick={() => setLegend("left")}>Left</button>
      </div>
      <Inner>
        <Bar
          onClick={onClick}
          ref={chartRef}
          options={BarOptions(legend)}
          data={data}
          key="data"
        />
        <Modal isOpen={isOpen} setIsOpen={setIsOpen} data={modalData} />
      </Inner>
    </Outter>
  );
}
