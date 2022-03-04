import React from "react";
import styled from "styled-components";

export default function CloseIconButton({ clickHandler }) {
  return (
    <>
      <CloseIconBtn onClick={clickHandler} />
    </>
  );
}
const CloseIconBtn = styled.span`
  height: 25px;
  width: 25px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background-color: rgba(20, 20, 20, 0.1);
    border-radius: 4px;
  }
  &::before,
  ::after {
    content: "";
    height: 1px;
    width: 19px;
    position: absolute;
    background-color: grey;
    transform: rotate(-45deg);
  }
  &::after {
    transform: rotate(45deg);
  }
`;
