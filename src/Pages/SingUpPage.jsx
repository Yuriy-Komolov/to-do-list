import React from "react";
import styled from "styled-components";

import LoginSignUpHeader from "../Components/LogIn&SignUp/LoginSignUpHeader";
import { Line } from "../UI/Atoms/Line";
import SignUpLoginViewBox from "../UI/Atoms/SignUpLoginViewBox";
import { primaryColor } from "../UI/Constants";
import SignUpForm from "../UI/Forms/SignUpForm";

export default function SingUpPage() {
  return (
    <>
      <SignUpLoginViewBox>
        <LoginSignUpHeader pageTitle="Sign up" />
        <SignUpForm />
        <Line />
        <RedirectingBlock>
          Already signed up?
          <a href="/log-in"> Go to login</a>
        </RedirectingBlock>
      </SignUpLoginViewBox>
    </>
  );
}

const RedirectingBlock = styled.div`
  margin: 32px 0;
  text-align: center;
  & a {
    color: ${primaryColor};
  }
`;
