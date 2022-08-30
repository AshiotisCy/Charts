import React from "react";
import styled from "styled-components/macro";
import { BoxShadow } from "../../config/boxShadow";
import { colors } from "../../config/ColorPalette";

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100px;
  box-shadow: ${BoxShadow};
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

const DisplayBorder = ({ isAxisEnabled, setIsAxisEnabled }) => {
  return (
    <Wrapper>
      <Inner>
        <Header>Arc Border</Header>
        <Body onClick={() => setIsAxisEnabled(!isAxisEnabled)}>
          <input type="checkbox" checked={isAxisEnabled}></input>
          <Label>Show/Hide</Label>
        </Body>
      </Inner>
    </Wrapper>
  );
};

export default DisplayBorder;
