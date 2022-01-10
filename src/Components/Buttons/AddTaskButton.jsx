import React from "react";
import styled, { css } from "styled-components";

export default function AddTaskButton(props) {
  return (
    <>
      <StyledButton {...props}>
        <IconWrapper>
          <IconPlus />
        </IconWrapper>
        {props.text}
      </StyledButton>
    </>
  );
}

const primaryColor = "#1e78fa";

const StyledButton = styled.button`
  ${(props) => {
    switch (props.$mode) {
      case "withIcon":
        return css`
          border: none;
          color: grey;
          cursor: pointer;
          display: flex;
          align-items: center;
          margin: 15px 0 0 0;
          &:hover {
            color: ${primaryColor};
            & div {
              background-color: ${primaryColor};
            }
            & svg path {
              fill: #fff;
            }
          }
        `;

      default:
        return css`
          border: none;
          color: #fff;
          cursor: pointer;
          margin: 15px 0 0 0;
          padding: 5px 10px;
          background-color: ${primaryColor};
          border-radius: 4px;
          & div {
            display: none;
          }
        `;
    }
  }}
`;

const IconWrapper = styled.div`
  height: 17px;
  width: 17px;
  border-radius: 50%;
  margin-right: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  & svg {
    z-index: 2;
  }
`;

const IconPlus = () => {
  return (
    <svg width="13" height="13">
      <path
        d="M6 6V.5a.5.5 0 0 1 1 0V6h5.5a.5.5 0 1 1 0 1H7v5.5a.5.5 0 1 1-1 0V7H.5a.5.5 0 0 1 0-1H6z"
        fill={primaryColor}
        fillRule="evenodd"
      ></path>
    </svg>
  );
};
