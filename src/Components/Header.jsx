import React, { useState } from "react";
import styled from "styled-components";

import { primaryColor } from "../UI/Constants";

import HeaderButton from "../UI/Buttons/HeaderButton";
import InputSearch from "../UI/Inputs/InputSearch";

import HomePageIcon from "../UI/Icons/Header/HomePageIcon";
import PlusIcon from "../UI/Icons/Header/PlusIcon";
import InfoIcon from "../UI/Icons/Header/InfoIcon";
import BellIcon from "../UI/Icons/Header/BellIcon";
import ProductivityIcon from "../UI/Icons/Header/ProductivityIcon";

export default function Header({ handlerClick, burgerHandler }) {
  const [burger, setBurger] = useState(false);
  return (
    <>
      <HeaderWrapper>
        <Container>
          <Navbar>
            <LeftPart>
              {/*** Burger */}
              <Burger
                hint={burger ? `Close menu M` : "Open menu M"}
                onClick={() => {
                  setBurger(burger ? false : true);
                  burgerHandler();
                }}
              >
                <span></span>
              </Burger>
              {/***Home page btn */}
              <HeaderHomeButton hint={`Go to home G then H`}>
                <a href="/">
                  <HomePageIcon />
                </a>
              </HeaderHomeButton>

              {/*** Search */}
              <InputSearch hint="Search F" />
            </LeftPart>

            <RightPart>
              <HeaderButton hint="Quick Add Q" onClick={handlerClick}>
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
const HeaderHomeButton = styled(HeaderButton)`
  & a {
    line-height: 0;
  }
`;
const RightPart = styled(LeftPart)`
  column-gap: 8px;
  & button {
    min-width: 32px;
    height: 32px;
  }
`;
