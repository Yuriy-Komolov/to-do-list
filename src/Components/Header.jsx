import React from "react";
import styled from "styled-components";

import { primaryColor } from "../UI/Constants";

import HeaderButton from "../UI/Buttons/HeaderButton";
import HomePageIcon from "../UI/Icons/Header/HomePageIcon";
import SearchIcon from "../UI/Icons/Header/SearchIcon";
import PlusIcon from "../UI/Icons/Header/PlusIcon";
import InfoIcon from "../UI/Icons/Header/InfoIcon";
import BellIcon from "../UI/Icons/Header/BellIcon";
import ProductivityIcon from "../UI/Icons/Header/ProductivityIcon";

export default function Header({ handlerClick }) {
  return (
    <>
      <HeaderWrapper>
        <Container>
          <Navbar>
            <LeftPart>
              <Burger hint="Open menu">
                <span></span>
              </Burger>

              <HeaderButton hint={`Go to home G then H`}>
                <HomePageIcon />
              </HeaderButton>

              <HeaderButton hint="Search">
                <SearchIcon />
              </HeaderButton>
            </LeftPart>

            <RightPart>
              <HeaderButton hint="Quick Add" onClick={handlerClick}>
                <PlusIcon />
              </HeaderButton>

              <HeaderButton hint="Open Productivity O then P">
                <ProductivityIcon /> 0 / 5
              </HeaderButton>
              <HeaderButton hint="Open help & information O then H">
                <InfoIcon />
              </HeaderButton>
              <HeaderButton hint="Open help & information O then N">
                <BellIcon />
              </HeaderButton>
            </RightPart>
          </Navbar>
        </Container>
      </HeaderWrapper>
    </>
  );
}

const HeaderWrapper = styled.div`
  width: 100%;
  height: 50px;
  background-color: ${primaryColor};
  position: fixed;
  top: 0;
  z-index: 3;
`;

const Container = styled.div`
  max-width: 1260px;
  margin: 0 auto;
  padding: 10px;
`;

const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
`;
const LeftPart = styled.div`
  display: flex;
  align-items: center;
  column-gap: 5px;
`;

const Burger = styled(HeaderButton)`
  & span {
    width: 18px;
    height: 1px;
    background-color: #fff;
    position: relative;
    &::before,
    ::after {
      content: "";
      width: 18px;
      height: 1px;
      background-color: #fff;
      position: absolute;
      left: 0;
    }
    &::before {
      top: 6px;
    }
    &::after {
      bottom: 6px;
    }
  }
`;

const RightPart = styled(LeftPart)`
  column-gap: 8px;
  & button {
    min-width: 32px;
    height: 32px;
  }
`;
