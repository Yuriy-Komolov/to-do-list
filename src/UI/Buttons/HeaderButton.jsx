import React from "react";
import styled from "styled-components";

export default function HeaderButton(props) {
  return (
    <>
      <ButtonBox {...props}></ButtonBox>
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
  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
    &::before {
      content: "${(props) => props.hint}";
      white-space: nowrap;
      color: #fff;
      background-color: #46403f;
      padding: 6px 8px;
      border-radius: 3px;
      position: absolute;
      bottom: -41px;
    }
  }
`;
