import React from "react";
import styled from "styled-components";
import { colors } from "../../config/ColorPalette";

const LegendWrapper = styled.div`
  display: flex;
  box-shadow: 0 0.46875rem 2.1875rem rgb(0 0 0 / 3%),
    0 0.9375rem 1.40625rem rgb(0 0 0 / 3%), 0 0.25rem 0.53125rem rgb(0 0 0 / 5%),
    0 0.125rem 0.1875rem rgb(0 0 0 / 3%);
`;

const LegendOuter = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  padding: 20px;
  width: 200px;
  height: 200px;
  background-color: ${colors.navyBlue};
`;

const LegendTitle = styled.div`
  font-size: 18px;
  font-weight: 500;
  color: ${colors.offWhite};
`;

const LegendInner = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const LegendButtonTopBottom = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const LegendTopBottom = styled.div`
  width: 70px;
  height: 30px;
  border-radius: 5px;
  border: none;
  background: ${colors.orange};
  border: 2px solid transparent;
  color: ${colors.offWhite};
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease;
  cursor: pointer;

  :hover {
    background-color: ${colors.offWhite};
    border: 2px solid ${colors.orange};
    color: ${colors.black};
  }
`;

const LegendButtonLeftRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const LegendLeftRight = styled.div`
  width: 50px;
  height: 30px;
  border-radius: 5px;
  border: none;
  background: ${colors.offNavyBlue};
  border: 2px solid transparent;
  color: ${colors.offWhite};
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease;
  cursor: pointer;

  :hover {
    background-color: ${colors.offWhite};
    border: 2px solid ${colors.offNavyBlue};
    color: ${colors.black};
  }
`;

const LegendComponent = ({ setLegend }) => {
  return (
    <LegendWrapper>
      <LegendOuter>
        <LegendTitle>Modily Legend: </LegendTitle>
        <LegendInner>
          <LegendButtonTopBottom>
            <LegendTopBottom onClick={() => setLegend("top")}>
              Top
            </LegendTopBottom>
          </LegendButtonTopBottom>
          <LegendButtonLeftRight>
            <LegendLeftRight onClick={() => setLegend("left")}>
              Left
            </LegendLeftRight>
            <LegendLeftRight onClick={() => setLegend("right")}>
              Right
            </LegendLeftRight>
          </LegendButtonLeftRight>
          <LegendButtonTopBottom>
            <LegendTopBottom onClick={() => setLegend("bottom")}>
              Bottom
            </LegendTopBottom>
          </LegendButtonTopBottom>
        </LegendInner>
      </LegendOuter>
    </LegendWrapper>
  );
};

export default LegendComponent;
