import React, { useState, useEffect, useRef } from "react";

import styled from "styled-components";

import { primaryColor } from "../../Constants/UI.Constants";

import HeaderButton from "../../UI/Buttons/HeaderButton";
import InputSearch from "../Header/SearchBar/InputSearch";

import HomePageIcon from "../../UI/Icons/Header/HomePageIcon";
import PlusIcon from "../../UI/Icons/Header/PlusIcon";
import InfoIcon from "../../UI/Icons/Header/InfoIcon";
import BellIcon from "../../UI/Icons/Header/BellIcon";
import ProductivityIcon from "../../UI/Icons/Header/ProductivityIcon";
import ModalQuickAddForm from "../Modals/QuickAddForm/ModalQuickAddForm";
import BurgerNavigation from "./BurgerNavigation";
import ProfileAvatar from "../../UI/Atoms/ProfileAvatar";
import ProfileComponent from "../Profile/ProfileComponent";

export default function Header({ burger, setBurger }) {
  const [quickTaskForm, setQuickTaskForm] = useState(false);
  const [inputSearch, setInputSearch] = useState(false);
  const [userProfile, setUserProfile] = useState(false);

  const windowFocus = useRef(null);

  useEffect(() => {
    windowFocus.current.focus();
  }, []);

  const keyboardPress = (press) => {
    if (!quickTaskForm && !inputSearch) {
      switch (press.key) {
        case "m":
          return setBurger(burger ? false : true);
        case "q":
          return setQuickTaskForm(true);
        case "f":
          return setInputSearch(true);
        default:
          break;
      }
    }
  };

  return (
    <>
      <HeaderWrapper onKeyPress={keyboardPress} tabIndex={1} ref={windowFocus}>
        <Container>
          <Navbar>
            <LeftPart>
              {/*** Burger */}
              <Burger
                hint={burger ? `Close menu` : "Open menu"}
                keybord="M"
                onClick={() => {
                  setBurger(burger ? false : true);
                }}
              >
                <span></span>
              </Burger>
              {/***HomePage btn */}
              <HeaderHomeButton hint="Go to home" keybord="G then H">
                <a href="/">
                  <HomePageIcon />
                </a>
              </HeaderHomeButton>

              {/*** Search */}
              <InputSearch
                hint="Search"
                active={inputSearch}
                setActiveFocus={setInputSearch}
              />
            </LeftPart>

            <RightPart>
              {/* Quick Add Button */}
              <HeaderButton
                hint="Quick Add"
                keybord="Q"
                onClick={() => {
                  setQuickTaskForm(true);
                }}
              >
                <PlusIcon />
              </HeaderButton>

              <ProductivityButton hint="Open Productivity " keybord="O then P">
                <ProductivityIcon />0 / 5
              </ProductivityButton>
              <HeaderButton hint="Open help & information " keybord="O then H">
                <InfoIcon />
              </HeaderButton>
              <HeaderButton hint="Open help & information " keybord="O then N">
                <BellIcon />
              </HeaderButton>

              <ProfileButton
                hint="Open profile photo menu"
                keybord="O then U"
                onClick={() => {
                  setUserProfile(true);
                }}
              >
                <ProfileAvatar />
              </ProfileButton>
            </RightPart>
          </Navbar>
        </Container>
      </HeaderWrapper>
      <BurgerNavigation active={burger} />
      <ModalQuickAddForm
        active={quickTaskForm}
        setFormActive={setQuickTaskForm}
        windowFocus={windowFocus}
      />
      <ProfileComponent
        userProfile={userProfile}
        setUserProfile={setUserProfile}
      />
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
  outline: none;
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
const ProductivityButton = styled(HeaderButton)`
  display: flex;
  column-gap: 6px;
`;
const ProfileButton = styled(HeaderButton)`
  &:hover {
    & div {
      display: flex;
      left: -130px;
    }
    background: unset;
  }
`;
const RightPart = styled(LeftPart)`
  column-gap: 8px;
  & button {
    min-width: 32px;
    height: 32px;
  }
`;
