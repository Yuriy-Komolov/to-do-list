import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import styled from "styled-components";

import { setUser } from "./Store/slices/userSlice";
import { useDispatch } from "react-redux";
import { auth } from "./FireBase/firebase";
import { onAuthStateChanged } from "firebase/auth";

import HomePage from "./Pages/HomePage";
import UpcomingPage from "./Pages/UpcomingPage";
import SingUpPage from "./Pages/SingUpPage";
import LoginPage from "./Pages/LoginPage";

import Header from "./Components/Header/Header";
import { useAuth } from "./Components/Hooks/useAuth";
import Spinner from "./UI/Atoms/Spinner";

export default function App() {
  const [burger, setBurger] = useState(false);
  const [loading, setLoading] = useState(true);

  const userInfo = useAuth();
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(
          setUser({
            email: user.email,
            userName: user.displayName,
            id: user.uid,
            token: user.accessToken,
          })
        );
      }
    });
  }, []);

  return (
    <>
      {loading ? <Spinner setLoading={setLoading} /> : null}

      {userInfo.isAuth ? (
        <Header burger={burger} setBurger={setBurger} />
      ) : null}
      <Main active={burger}>
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/upcoming" element={<UpcomingPage />} />
            <Route path="/sign-up" element={<SingUpPage />} />
            <Route path="/log-in" element={<LoginPage />} />
          </Routes>
        </Router>
      </Main>
    </>
  );
}

const Main = styled.main`
  margin-left: ${(props) => (props.active ? "328px" : "0")};
  transition: all 0.4s ease-in-out;
`;
