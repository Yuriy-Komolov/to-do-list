import styled, { css } from "styled-components";

export const Tab = styled.button`
  border: none;
  display: flex;
  justify-content: center;
  flex: 1;
  padding: 6px 0;
  color: grey;
  font-size: 13px;
  cursor: pointer;
  border-bottom: 1px solid #e0e0e0;
  ${(props) =>
    props.active
      ? css`
          color: #000;
          font-weight: 700;
          border-bottom: 1px solid #000;
          z-index: 5;
        `
      : null}

  &:hover {
    color: #000;
  }
`;
export const Content = styled.div`
  display: ${(props) => (props.active ? "block" : "none")};
  & h1 {
    color: red;
    font-size: 40px;
    line-height: 40px;
  }
`;
