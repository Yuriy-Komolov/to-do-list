import React from "react";
import styled from "styled-components";
import { Line } from "../../UI/Atoms/Line";

import { primaryColor } from "../../UI/Constants";
import LogoImage from "../../UI/Icons/HeroPage/LogoImage";

export default function LoginSignUpHeader({ pageTitle }) {
  return (
    <>
      <Container>
        <Logo href="/hero">
          <LogoImage />
          todoList
        </Logo>
        <PageTitle>{pageTitle}</PageTitle>
        <SocialsButton>
          <img
            width="16"
            height="16"
            src="https://d3ptyyxy2at9ui.cloudfront.net/google-32ae27.svg"
            alt="Goggle"
          />
          Continue with Google
        </SocialsButton>
        <StyledLine />
      </Container>
    </>
  );
}
const Container = styled.div`
  max-width: 400px;
  width: 400px;
  margin-bottom: 32px;
`;

const Logo = styled.a`
  display: flex;
  align-items: center;
  column-gap: 10px;
  font-size: 16px;
  font-weight: 700;
  color: ${primaryColor};
  margin-bottom: 16px;
`;

const PageTitle = styled.h2`
  font-size: 26px;
  font-weight: 700;
  margin-bottom: 28px;
`;
const SocialsButton = styled.button`
  font-size: 13px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 0;
  column-gap: 10px;
  width: 100%;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  border: 1px solid rgba(0, 0, 0, 0.2);
  margin-bottom: 28px;
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
    border: 1px solid rgba(0, 0, 0, 0.5);
  }
`;

const StyledLine = styled(Line)`
  &::before {
    content: "OR";
    color: grey;
    background-color: #fff;
    padding: 2px 16px;
    position: relative;
    top: -10px;
    left: 43%;
  }
`;
