import React from "react";
import styled from "styled-components";
import { useAuth } from "../../Components/Hooks/useAuth";

export default function ProfileAvatar() {
  const { userName } = useAuth();

  return (
    <>
      <Container>{userName?.slice(0, 1).toUpperCase()}</Container>
    </>
  );
}

const Container = styled.div`
  width: 32px;
  height: 32px;
  background-color: #fff;
  border: 2px solid #07e91b;
  border-radius: 50%;
  color: #07e91b;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  font-weight: 700;
`;
