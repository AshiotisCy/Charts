import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import App from "./App";
import BarChart from "./components/BarChart";
import Homepage from "./components/Homepage";
import LineChart from "./components/LineChart";
import PieChart from "./components/PieChart";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" element={<Homepage />} />
          <Route path="bar" element={<BarChart />} />
          <Route path="line" element={<LineChart />} />
          <Route path="pie" element={<PieChart />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
