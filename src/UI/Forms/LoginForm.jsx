import React from "react";
import styled from "styled-components";
import AddTaskButton from "../Buttons/AddTaskButton";
import { primaryGrey } from "../Constants";
import FormInput from "../Inputs/FormInput";
import FormPassword from "../Inputs/FormPassword";

export default function LoginForm() {
  return (
    <>
      <form action="">
        <Container>
          <FormInput label="Email" type="email" autoFocus />
          <FormPassword />
          <StyledButton text="Log in" />
          <LoginCheckbox htmlFor="checkbox">
            <input type="checkbox" id="checkbox" /> Keep me logged in
          </LoginCheckbox>
        </Container>
      </form>
    </>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 12px;
`;

const StyledButton = styled(AddTaskButton)`
  padding: 10px 0;
`;

const LoginCheckbox = styled.label`
  font-size: 13px;
  color: ${primaryGrey};
  margin-bottom: 14px;
`;
