import React from "react";
import styled from "styled-components";

export default function TaskItemButton({ clickHandler, children }) {
  return (
    <>
      <Button onClick={clickHandler}>{children}</Button>
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
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
    & svg path {
      fill: #000;
    }
  }
`;
