import React from "react";
import styled from "styled-components";
import { colors } from "../../config/ColorPalette";

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100px;
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
`;

const Label = styled.label`
  font-size: 16px;
  color: ${colors.offWhite};
  font-weight: 500;
`;

const DisplayAxis = ({ isAxisEnabled, setIsAxisEnabled }) => {
  return (
    <Wrapper>
      <Inner>
        <Header>Show or Hide Axis</Header>
        <Body onClick={() => setIsAxisEnabled(!isAxisEnabled)}>
          <input type="checkbox"></input>
          <Label>Show/Hide</Label>
        </Body>
      </Inner>
    </Wrapper>
  );
};

export default DisplayAxis;
