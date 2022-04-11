import React from "react";
import styled from "styled-components";

import HeaderButton from "../../UI/Buttons/HeaderButton";

import InboxIcon from "../../UI/Icons/Navigation/InboxIcon";
import FilterLabelIcon from "../../UI/Icons/Navigation/FilterLabelsIcon";
import TodayIcon from "../../UI/Icons/Navigation/TodayIcon";
import UpcomingIcon from "../../UI/Icons/Navigation/UpcomingIcon";

export default function BurgerNavigation({ active }) {
  return (
    <>
      <NavigationWrapper active={active}>
        <NavigationInner>
          <a href="/">
            <NavigationBtn hint="Go to Inbox G then i">
              <InboxIcon /> Inbox
            </NavigationBtn>
          </a>

          <a href="/">
            <NavigationBtn hint="Go to Today G then T">
              <TodayIcon /> Today
            </NavigationBtn>
          </a>

          <a href="/upcoming">
            <NavigationBtn hint="Go to Upcoming G then U">
              <UpcomingIcon /> Upcoming
            </NavigationBtn>
          </a>

          <a href="/">
            <NavigationBtn hint="Go to Inbox G then V">
              <FilterLabelIcon /> Filters & Labels
            </NavigationBtn>
          </a>
        </NavigationInner>
      </NavigationWrapper>
    </>
  );
}

const NavigationWrapper = styled.div`
  height: 100vh;
  background-color: #fafafa;
  padding: 80px 10px 0 35px;
  position: fixed;
  width: ${(props) => (props.active ? "328px" : "0")};
  left: ${(props) => (props.active ? "0" : "-30%")};
  transition: all 0.4s ease-in-out;
`;

const NavigationInner = styled.div`
  width: 100%;
`;

const NavigationBtn = styled(HeaderButton)`
  width: 100%;
  padding: 17px 0 17px 10px;
  justify-content: flex-start;
  color: #333;
  &::before {
    left: 290px;
    bottom: 0;
    top: 0;
    z-index: 1000;
    height: 20px;
  }
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;
