import React from "react";
import styled from "styled-components";

import FormInput from "../Inputs/FormInput";
import AddTaskButton from "../Buttons/AddTaskButton";
import { primaryColor } from "../Constants";

export default function SignUpForm() {
  return (
    <>
      <form>
        <FormInput label="Email" />
        <StyledButton text="Sign up with email" />
      </form>
    </>
  );
}

const StyledButton = styled(AddTaskButton)`
  width: 100%;
  padding: 10px 0;
  margin-bottom: 32px;
  &:hover {
    background-color: rgba();
  }
`;
