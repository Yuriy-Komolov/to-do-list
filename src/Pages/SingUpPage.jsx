import React from "react";
import styled from "styled-components";
import LoginSignUpHeader from "../Components/LogIn&SignUp/LoginSignUpHeader";
import { backgroundColor } from "../UI/Constants";
import SignUpForm from "../UI/Forms/SignUpForm";

export default function SingUpPage() {
  return (
    <>
      <Wrapper>
        <ViewBox>
          <LoginSignUpHeader pageTitle="Sign up" />
          <SignUpForm />
        </ViewBox>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: ${backgroundColor};
`;
const ViewBox = styled.div`
  padding: 20px 30px;
  background-color: #fff;
`;
