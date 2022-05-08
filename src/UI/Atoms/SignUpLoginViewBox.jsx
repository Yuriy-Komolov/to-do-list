import React from "react";
import styled from "styled-components";
import { backgroundColor } from "../../Constants/UI.Constants";
export default function SignUpLoginViewBox({ children }) {
  return (
    <>
      <Wrapper>
        <ViewBox>{children}</ViewBox>
      </Wrapper>
    </>
  );
}
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 42px 0;
  background-color: ${backgroundColor};
`;

const ViewBox = styled.div`
  border: 1px solid #ddd;
  border-radius: 12px;
  padding: 20px 30px;
  background-color: #fff;
`;
