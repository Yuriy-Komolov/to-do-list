import React from "react";
import styled from "styled-components";
import LoginSignUpHeader from "../Components/LogIn&SignUp/LoginSignUpHeader";
import { Line } from "../UI/Atoms/Line";
import SignUpLoginViewBox from "../UI/Atoms/SignUpLoginViewBox";
import { primaryColor, primaryGrey } from "../Constants/UI.Constants";
import LoginForm from "../UI/Forms/LoginForm";

export default function LoginPage() {
  return (
    <>
      <SignUpLoginViewBox>
        <LoginSignUpHeader
          pageTitle="Log in"
          // googleHandler={signInWithGoogle}
        />
        <LoginForm />
        <RestorePassword href="#">Forgot your password?</RestorePassword>
        <Line />
        <RedirectingBlock>
          Don't have an account? <a href="/sign-up">Sign up</a>
        </RedirectingBlock>
        <SupportBtn href="#">TodoList Support</SupportBtn>
      </SignUpLoginViewBox>
    </>
  );
}

const RedirectingBlock = styled.div`
  margin: 28px 0;
  text-align: center;
  & a {
    color: ${primaryColor};
  }
`;
const RestorePassword = styled.a`
  display: inline-block;
  font-size: 13px;
  color: ${primaryGrey};
  margin-bottom: 24px;
  &:hover {
    text-decoration: underline;
  }
`;

const SupportBtn = styled.a`
  display: block;
  text-align: center;
  font-size: 13px;
  color: ${primaryGrey};
`;
