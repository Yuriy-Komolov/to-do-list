import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { setUser } from "../../Store/slices/userSlice";

import FormInput from "../Inputs/FormInput";
import FormPassword from "../Inputs/FormPassword";
import AddTaskButton from "../Buttons/AddTaskButton";
import { logout } from "../../FireBase/firebase";

export default function SignUpForm() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const navigate = useNavigate();
  const auth = getAuth();
  useEffect(() => {
    if (auth.currentUser) {
      navigate("/");
    }
  });

  const submitHendler = async (e) => {
    e.preventDefault();

    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    updateProfile(userCredential.user, { displayName: userName });
    dispatch(
      setUser({
        email: userCredential.user.email,
        id: userCredential.user.uid,
        token: userCredential.user.accessToken,
      })
    );
    navigate("/");
    console.log(userCredential.user);
  };

  return (
    <>
      <form>
        <Container>
          <FormInput
            label="Your name"
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            autoFocus
          />
          <FormInput
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <FormPassword
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <StyledButton text="Sign up with email" onClick={submitHendler} />
          <button onClick={logout}>Logout</button>
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
  width: 100%;
  padding: 10px 0;
  margin-bottom: 32px;
  &:hover {
    background-color: rgba();
  }
`;
