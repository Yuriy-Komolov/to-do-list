import React, { useState } from "react";
import styled from "styled-components";
import CrossedTheEyeImage from "../Icons/LogInSignUp/CrossedTheEyeImage";

import TheEyeImage from "../Icons/LogInSignUp/TheEyeImage";
import FormInput from "./FormInput";

export default function FormPassword({ ...otherProps }) {
  const [showPassword, setShowPassword] = useState(true);
  return (
    <>
      <Container>
        <FormInput
          label="Password"
          type={showPassword ? "password" : "text"}
          {...otherProps}
        />
        <TheEye
          onClick={() =>
            showPassword ? setShowPassword(false) : setShowPassword(true)
          }
        >
          {showPassword ? <TheEyeImage /> : <CrossedTheEyeImage />}
        </TheEye>
      </Container>
    </>
  );
}
const Container = styled.div`
  width: 100%;
  position: relative;
`;
const TheEye = styled.div`
  position: absolute;
  top: 30px;
  right: 10px;
  height: 24px;
  cursor: pointer;
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;
