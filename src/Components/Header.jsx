import React from "react";
import styled from "styled-components";

import { primaryColor } from "../UI/Constants";
import HomePageIcon from "../UI/Icons/Header/HomePageIcon";
import SearchIcon from "../UI/Icons/Header/SearchIcon";

export default function Header() {
  return (
    <>
      <HeaderWrapper>
        <Container>
          <Navbar>
            <LeftPart>
              <Burger>
                <span></span>
              </Burger>

              <BtnBox>
                <HomePageIcon />
              </BtnBox>
              <BtnBox>
                <SearchIcon />
              </BtnBox>
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
const BtnBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  //padding: 0 5px;
  min-width: 28px;
  height: 28px;
  border-radius: 3px;
  cursor: pointer;
  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
`;

const Burger = styled(BtnBox)`
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
