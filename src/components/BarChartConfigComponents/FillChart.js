import React from "react";
import styled from "styled-components/macro";
import { colors } from "../../config/ColorPalette";

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  box-shadow: 0 0.46875rem 2.1875rem rgb(0 0 0 / 3%),
    0 0.9375rem 1.40625rem rgb(0 0 0 / 3%), 0 0.25rem 0.53125rem rgb(0 0 0 / 5%),
    0 0.125rem 0.1875rem rgb(0 0 0 / 3%);
`;

const Inner = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 20px;
  background-color: ${colors.orange};
  border-radius: 5px;
  gap: 10px;
`;

const Header = styled.div`
  font-size: 18px;
  font-weight: 500;
  color: ${colors.offWhite};
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const Label = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.label`
  font-size: 16px;
  color: ${colors.offWhite};
  font-weight: 500;
`;

const Box = styled.div`
  width: 15px;
  height: 15px;
  background-color: ${({ bgcolor }) => bgcolor};
`;

const FillChart = ({ fillDs1, setFillDs1, fillDs2, setFillDs2 }) => {
  return (
    <Wrapper>
      <Inner>
        <Header>Fill Graph:</Header>
        <Body onClick={() => setIsAxisEnabled(!isAxisEnabled)}>
          <Label>
            <div>
              <input
                key={"fillDs1"}
                type={"checkbox"}
                checked={fillDs1}
                onClick={() => setFillDs1(!fillDs1)}
              />
              <Title>Blue</Title>
            </div>
            <Box bgcolor={colors.blue} />
          </Label>
          <Label>
            <div>
              <input
                key={"fillDs2"}
                type={"checkbox"}
                checked={fillDs2}
                onClick={() => setFillDs2(!fillDs2)}
              />
              <Title>Pink</Title>
            </div>
            <Box bgcolor={colors.babypink} />
          </Label>
        </Body>
      </Inner>
    </Wrapper>
  );
};

export default FillChart;
