import React from "react";
import styled from "styled-components";

export default function CloseIconButton() {
  return (
    <>
      <CloseIconBtn />
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
