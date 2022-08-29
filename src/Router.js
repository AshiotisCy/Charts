import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import App from "./App";
import AreaChart from "./components/AreaChart";
import BarChart from "./components/BarChart";
import Homepage from "./components/Homepage";
import PolarChart from "./components/PolarChart";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" element={<Homepage />} />
          <Route path="bar" element={<BarChart />} />
          <Route path="line" element={<AreaChart />} />
          <Route path="polar" element={<PolarChart />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
