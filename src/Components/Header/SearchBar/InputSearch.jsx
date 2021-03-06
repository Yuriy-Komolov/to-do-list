import React, { useState, useEffect, useRef } from "react";
import styled, { css } from "styled-components";

import SearchIcon from "../../../UI/Icons/Header/SearchIcon";
import InfoIcon from "../../../UI/Icons/Header/InfoIcon";
import HeaderButton from "../../../UI/Buttons/HeaderButton";
import SearchResultBox from "./SearchResultBox";

export default function InputSearch({ hint, active, setActiveFocus }) {
  const [hover, setHover] = useState(false);
  const [searchInput, setSearchInput] = useState("");

  const focusByPress = useRef(null);

  useEffect(() => {
    if (active) {
      focusByPress.current.focus();
    } else {
      focusByPress.current.value = "";
    }
  });

  return (
    <>
      <InputWrapper
        onMouseOver={() => setHover(true)}
        onMouseOut={() => setHover(false)}
        onFocus={() => setActiveFocus(true)}
        onBlur={() => {
          setActiveFocus(false);
          setSearchInput("");
        }}
      >
        <StyledIconWrapper
          hover={hover}
          focus={active}
          onMouseOver={() => setHover(true)}
        >
          <SearchIcon />
        </StyledIconWrapper>

        <Input
          hover={hover}
          focus={active}
          placeholder="Search"
          ref={focusByPress}
          onChange={(e) => setSearchInput(e.target.value)}
          value={searchInput}
        />
        <ShortCutButton
          hint={hint}
          keybord="F"
          hover={hover}
          focus={active}
          onClick={() => setActiveFocus(true)}
        >
          f
        </ShortCutButton>

        <InfoButton
          href="https://todoist.com/ru/help/articles/how-to-use-search"
          focus={active}
          target="_blank"
        >
          <InfoIcon />
        </InfoButton>

        <CloseInput focus={active} />
        <SearchResultBox active={active} searchInput={searchInput} />
      </InputWrapper>
    </>
  );
}
const InputWrapper = styled.div`
  height: unset;
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
`;

const Input = styled.input`
  color: #202020;
  background-color: rgba(255, 255, 255, 0.3);
  border: 1px solid transparent;
  border-radius: 4px;
  padding: 5px 34px;
  position: relative;
  transition: 0.3s;
  width: ${(props) => (props.focus ? "450px" : " 198px")};

  &:focus {
    outline: none;
  }
  &::placeholder {
    color: #fff;
    opacity: 1;
    font-size: 13px;
  }

  ${(props) =>
    props.hover || props.focus
      ? css`
          background-color: #fff;
          &::placeholder {
            color: grey;
          }
        `
      : null}
`;

const StyledIconWrapper = styled.div`
  position: absolute;
  left: 5px;
  top: 4px;
  z-index: 1;
  pointer-events: none;
  & svg path {
    fill: ${(props) => (props.hover || props.focus ? "#000" : "#fff")};
  }
`;

const ShortCutButton = styled(HeaderButton)`
  font-size: 14px;
  line-height: 14px;
  color: #202020;
  padding: 0 5px;
  min-width: unset;
  height: unset;
  background-color: #fff;
  border: 1px solid #c1c7c3;
  opacity: 0.6;
  border-radius: 2px;
  position: absolute;
  right: 15px;
  visibility: ${(props) => (props.hover ? "visible" : "hidden")};
  visibility: ${(props) => (props.focus ? "hidden" : null)};
  :hover {
    opacity: 1;
    ::before {
      bottom: -43px;
    }
  }
`;

const InfoButton = styled.a`
  visibility: ${(props) => (props.focus ? "visible" : "hidden")};
  height: 24px;
  width: 24px;
  position: absolute;
  right: 30px;
  top: 3px;
  transition: visibility 0.1s;
  &:hover {
    background-color: rgba(20, 20, 20, 0.1);
    border-radius: 4px;
  }
  & svg path {
    fill: grey;
  }
`;

const CloseInput = styled.span`
  height: 20px;
  width: 20px;
  cursor: pointer;
  display: ${(props) => (props.focus ? "flex" : "none")};
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 5px;
  right: 4px;
  &:hover {
    background-color: rgba(20, 20, 20, 0.1);
    border-radius: 4px;
  }
  &::before {
    content: "";
    height: 1px;
    width: 16px;
    position: absolute;
    background-color: grey;
    transform: rotate(-45deg);
  }
  &::after {
    content: "";
    height: 1px;
    width: 16px;
    background-color: grey;
    transform: rotate(45deg);
    position: absolute;
  }
`;
