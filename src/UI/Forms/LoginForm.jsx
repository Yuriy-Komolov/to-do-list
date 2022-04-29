import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { auth } from "../../FireBase/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { setUser } from "../../Store/slices/userSlice";

import AddTaskButton from "../Buttons/AddTaskButton";
import { primaryGrey } from "../Constants";
import FormInput from "../Inputs/FormInput";
import FormPassword from "../Inputs/FormPassword";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
          id: userCredential.user.uid,
          token: userCredential.user.accessToken,
        })
      );
      navigate("/");
      // dispatch({ type: "SET_CURRENT_USER", payload: auth.currentUser });
      console.log(userCredential.user);

      const user = auth.currentUser();

      console.log(user);
    } catch (error) {
      console.log(error);
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
          <FormPassword
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
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
