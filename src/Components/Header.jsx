import React from "react";
import styled from "styled-components";

import { primaryColor } from "../UI/Constants";

import HeaderButton from "../UI/Buttons/HeaderButton";
import HomePageIcon from "../UI/Icons/Header/HomePageIcon";
import SearchIcon from "../UI/Icons/Header/SearchIcon";

export default function Header() {
  return (
    <>
      <HeaderWrapper>
        <Container>
          <Navbar>
            <LeftPart>
              <HeaderButton hint="Open menu">
                <Burger>
                  <span></span>
                </Burger>
              </HeaderButton>

              <HeaderButton hint={`Go to home G then H`}>
                <HomePageIcon />
              </HeaderButton>

              <HeaderButton hint="Search">
                <SearchIcon />
              </HeaderButton>
              <SearchBar></SearchBar>
            </LeftPart>
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
`;

const Container = styled.div`
  max-width: 1260px;
  margin: 0 auto;
  padding: 10px;
`;

const Navbar = styled.nav`
  display: flex;
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

const SearchBar = styled.div``;
