import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import styled from "styled-components";

import HomePage from "./Pages/HomePage";
import UpcomingPage from "./Pages/UpcomingPage";
import SingUpPage from "./Pages/SingUpPage";
import LoginPage from "./Pages/LoginPage";

import Header from "./Components/Header/Header";
import { useAuth } from "./Components/Hooks/useAuth";

export default function App() {
  const [burger, setBurger] = useState(false);

  const userInfo = useAuth();

  return (
    <>
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
