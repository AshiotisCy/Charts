import React, { useState } from "react";
import styled from "styled-components/macro";
import { NavLink, Outlet } from "react-router-dom";
import { colors } from "./config/ColorPalette";
import { ButtonData } from "./config/Buttons";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: ${colors.offWhite};
`;

const Header = styled.div`
  width: 100%;
  background-color: ${colors.navyBlue};
  display: flex;
`;

const LinksWrapper = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  justify-content: space-around;
  align-items: center;

  a {
    text-decoration: none;
  }
`;

const Body = styled.div`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

const Button = styled.div`
  width: 200px;
  border: 1px solid transparent;
  border-radius: 5px;
  background-color: ${colors.offWhite};
  background-image: ${({ bgImg }) => bgImg};
  background-repeat: no-repeat;
  background-size: 50px 50px;
  background-position: 10px 50%;
  color: ${colors.black};
  padding: 20px;
  justify-content: center;
  align-items: center;
  text-align: center;
  transition: all 0.3s ease;
  font-size: 18px;
  font-weight: 500;

  cursor: pointer;
  :hover {
    background-color: ${colors.offNavyBlue};
    border: 1px solid ${colors.offWhite};
    color: ${colors.offWhite};
    scale: 1.02;
  }

  &.isActive {
    background-color: ${colors.offNavyBlue};
    border: 1px solid ${colors.offWhite};
    color: ${colors.offWhite};
  }
`;

export default function App() {
  const [isActive, setIsActive] = useState(0);
  return (
    <Wrapper>
      <Header>
        <LinksWrapper>
          {ButtonData.map((btn, idx) => (
            <NavLink to={btn.to} key={btn.id}>
              <Button
                bgImg={`url(${btn.img})`}
                className={isActive === idx && "isActive"}
                onClick={() => setIsActive(idx)}
              >
                {/* <img width="20px" src={btn.img} alt="bar" /> */}
                {btn.name}
              </Button>
            </NavLink>
          ))}
        </LinksWrapper>
      </Header>
      <Body>
        <Outlet />
      </Body>
    </Wrapper>
  );
}
