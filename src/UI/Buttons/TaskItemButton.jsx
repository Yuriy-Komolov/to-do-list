import React from "react";
import styled from "styled-components";

export default function TaskItemButton({
  clickHandler,
  hint,
  keybord,
  children,
}) {
  return (
    <>
      <Button onClick={clickHandler}>
        {children}
        <HintMessage>
          {hint} <KeybordButton>{keybord}</KeybordButton>
        </HintMessage>
      </Button>
    </>
  );
}
const Button = styled.button`
  border: none;
  cursor: pointer;
  height: 24px;
  width: 24px;
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
  top: 30px;
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
  padding: 0 4px;
  background-color: grey;
  border-radius: 4px;
  font-size: 12px;
`;
