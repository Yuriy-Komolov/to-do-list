import React from "react";
import styled from "styled-components";
import LogoImage from "../UI/Icons/HeroPage/LogoImage";

import { primaryColor, textColor } from "../UI/Constants";

export default function HeroPage() {
  return (
    <>
      <HeroWrapper>
        <Header>
          <Container>
            <HeaderInner>
              <Logo href="/hero">
                <LogoImage />
                todoList
              </Logo>
              <HeaderButtons>
                <Button href="/log-in">Log in</Button>
                <Button href="/sign-up">Sign up</Button>
              </HeaderButtons>
            </HeaderInner>
          </Container>
        </Header>
        <HeroInner>
          <Title>Organize it all with todoList</Title>
          <HeroButton href="/sign-up">Get Started</HeroButton>
        </HeroInner>
      </HeroWrapper>
    </>
  );
}

const HeroWrapper = styled.div`
  height: 100vh;
  width: 100%;
  background-color: #fafafa;
`;
const Header = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
`;
const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 10px;
`;
const HeaderInner = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 64px;
`;
const Logo = styled.a`
  display: flex;
  align-items: center;
  column-gap: 10px;
  font-size: 28px;
  font-weight: 700;
  color: ${primaryColor};
`;
const HeaderButtons = styled.div`
  display: flex;
  align-items: flex-end;
  height: 100%;
`;

const Button = styled.a`
  display: flex;
  align-items: center;
  font-size: 16px;
  padding: 0 16px;
  height: 100%;
  border-bottom: 2px solid #fafafa;
  &:hover {
    background-color: rgba(0, 0, 0, 0.021);
    border-bottom: 2px solid ${primaryColor};
  }
`;

const HeroInner = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 32px;
`;
const Title = styled.h1`
  font-size: 68px;
  line-height: 76px;
  font-weight: 700;
  text-align: center;
  max-width: 456px;
  color: ${textColor};
`;
const HeroButton = styled.a`
  padding: 12px 28px;
  border-radius: 8px;
  font-size: 18px;
  color: #fff;
  font-weight: 700;
  background-color: ${primaryColor};
`;
