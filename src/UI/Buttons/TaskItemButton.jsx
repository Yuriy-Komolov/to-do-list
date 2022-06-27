import React from "react";
import styled from "styled-components";

export default function TaskItemButton({
  clickHandler,
  hint,
  keybord,
  children,
  ...otherProps
}) {
  return (
    <>
      <Button onClick={clickHandler} {...otherProps}>
        {children}
        <HintMessage>
          {hint} <KeybordButton keybord={keybord}>{keybord}</KeybordButton>
        </HintMessage>
      </Button>
    </>
  );
}
const Button = styled.button`
  border: none;
  cursor: pointer;
  height: 32px;
  width: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  position: relative;
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
    & div {
      display: inline-block;
    }
    & svg path {
      fill: #000;
    }
  }
`;
const HintMessage = styled.div`
  display: none;
  position: absolute;
  top: 40px;
  left: -40px;
  white-space: nowrap;
  width: fit-content;
  background-color: #46403f;
  color: #fff;
  font-size: 13px;
  padding: 6px 8px;
  border-radius: 4px;
  z-index: 5;
`;

const KeybordButton = styled.span`
  padding: ${(props) => (props.keybord ? "0 4px" : "0 0")};
  background-color: grey;
  border-radius: 4px;
  font-size: 12px;
`;
