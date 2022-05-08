import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { auth } from "../../FireBase/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { setUser } from "../../Store/slices/userSlice";

import AddTaskButton from "../Buttons/AddTaskButton";
import { primaryGrey } from "../../Constants/UI.Constants";
import FormInput from "../Inputs/FormInput";
import FormPassword from "../Inputs/FormPassword";
import Error from "../Atoms/Error";
import {
  signUpEmailValidation,
  signUpPasswordValidation,
} from "../../Utils/validationModule";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    if (auth.currentUser) {
      navigate("/");
    }
  });

  const submitHendler = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      dispatch(
        setUser({
          email: userCredential.user.email,
          userName: userCredential.user.displayName,
          id: userCredential.user.uid,
          token: userCredential.user.accessToken,
        })
      );
      navigate("/");
    } catch (error) {
      console.log(error);
      setPasswordError(signUpPasswordValidation(error));
      setEmailError(signUpEmailValidation(error));
    }
  };

  return (
    <>
      <form action="">
        <Container>
          <FormInput
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoFocus
          />
          <Error>{emailError}</Error>
          <FormPassword
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Error>{passwordError}</Error>
          <StyledButton text="Log in" onClick={submitHendler} />
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
