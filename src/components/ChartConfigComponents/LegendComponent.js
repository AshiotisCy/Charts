import React from "react";
import styled from "styled-components/macro";
import { BoxShadow } from "../../config/boxShadow";
import { colors } from "../../config/ColorPalette";

const LegendWrapper = styled.div`
  display: flex;
  box-shadow: ${BoxShadow};
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

  &.active {
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

  &.active {
    background-color: ${colors.offWhite};
    border: 2px solid ${colors.offNavyBlue};
    color: ${colors.black};
  }
`;

const LegendComponent = ({ legend, setLegend }) => {
  return (
    <LegendWrapper>
      <LegendOuter>
        <LegendTitle>Modily Legend: </LegendTitle>
        <LegendInner>
          <LegendButtonTopBottom>
            <LegendTopBottom
              className={legend === "top" && "active"}
              onClick={() => setLegend("top")}
            >
              Top
            </LegendTopBottom>
          </LegendButtonTopBottom>
          <LegendButtonLeftRight>
            <LegendLeftRight
              className={legend === "left" && "active"}
              onClick={() => setLegend("left")}
            >
              Left
            </LegendLeftRight>
            <LegendLeftRight
              className={legend === "right" && "active"}
              onClick={() => setLegend("right")}
            >
              Right
            </LegendLeftRight>
          </LegendButtonLeftRight>
          <LegendButtonTopBottom>
            <LegendTopBottom
              className={legend === "bottom" && "active"}
              onClick={() => setLegend("bottom")}
            >
              Bottom
            </LegendTopBottom>
          </LegendButtonTopBottom>
        </LegendInner>
      </LegendOuter>
    </LegendWrapper>
  );
};

export default LegendComponent;
