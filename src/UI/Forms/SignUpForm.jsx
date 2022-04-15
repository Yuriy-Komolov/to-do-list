import React from "react";
import styled from "styled-components";

import FormInput from "../Inputs/FormInput";
import AddTaskButton from "../Buttons/AddTaskButton";
import { Line } from "../Atoms/Line";
import { primaryColor } from "../Constants";

export default function SignUpForm() {
  return (
    <>
      <form>
        <FormInput label="Email" />
        <StyledButton text="Sign up with email" />
        <Line />
        <RedirectingBlock>
          Already signed up?
          <a href="/log-in"> Go to login</a>
        </RedirectingBlock>
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

const RedirectingBlock = styled.div`
  margin: 32px 0;
  text-align: center;
  & a {
    color: ${primaryColor};
  }
`;
