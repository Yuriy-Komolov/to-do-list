import React from "react";
import styled from "styled-components";

export default function HeaderButton({ hint, keybord, children, ...props }) {
  return (
    <>
      <ButtonBox {...props}>
        {children}
        <HintMessage>
          {hint} <KeybordButton>{keybord}</KeybordButton>
        </HintMessage>
      </ButtonBox>
    </>
  );
}

const ButtonBox = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 28px;
  height: 28px;
  border-radius: 3px;
  background: transparent;
  border: none;
  cursor: pointer;
  position: relative;
  color: #fff;
  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
    & div {
      display: inline-block;
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

const KeybordButton = styled.div`
  padding: 0 4px;
  background-color: grey;
  border-radius: 4px;
  font-size: 12px;
`;
