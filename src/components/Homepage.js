import React from "react";
import styled from "styled-components/macro";
import AreaChart from "./AreaChart";
import PolarChart from "./PolarChart";
import DoughnutChart from "./DoughnutChart";
import BarChart from "./BarChart";
import BubbleChart from "./BubbleChart";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background: #dadada;
`;

const Outer = styled.div`
  display: flex;
  justify-content: center;
  height: 50%;
  align-items: center;
  padding: 10px 20px 0;
  gap: 15px;
`;

const Chart = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  box-sizing: border-box;
  box-shadow: 0 0.46875rem 2.1875rem rgb(0 0 0 / 3%),
    0 0.9375rem 1.40625rem rgb(0 0 0 / 3%), 0 0.25rem 0.53125rem rgb(0 0 0 / 5%),
    0 0.125rem 0.1875rem rgb(0 0 0 / 3%);
  background-color: white;
  border-radius: 5px;

  &.full-page {
    width: 100vw;
  }
  &.large {
    width: 60vw;
  }
  &.medium {
    width: 20vw;
  }
`;

const Homepage = () => {
  return (
    <Wrapper>
      <Outer>
        <Chart className="large">
          <BarChart />
        </Chart>
        <Chart className="medium">
          <PolarChart />
        </Chart>
        <Chart className="medium">
          <DoughnutChart />
        </Chart>
      </Outer>
      <Outer>
        <Chart className="full-page">
          <BubbleChart />
        </Chart>
      </Outer>
    </Wrapper>
  );
};

export default Homepage;
