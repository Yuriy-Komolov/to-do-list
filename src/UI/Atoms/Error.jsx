import React from "react";
import styled from "styled-components";
export default function Error({ children }) {
  return (
    <>
      <ErrorContainer>{children}</ErrorContainer>
    </>
  );
}

const ErrorContainer = styled.p`
  font-size: 12px;
  color: #d1453b;
`;
