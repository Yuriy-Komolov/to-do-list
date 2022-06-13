import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./App.css";
import styled from "styled-components";

import HomePage from "./Pages/HomePage";
import UpcomingPage from "./Pages/UpcomingPage";
import SingUpPage from "./Pages/SingUpPage";
import LoginPage from "./Pages/LoginPage";
import Page404 from "./Pages/Page404";

import Header from "./Components/Header/Header";
import { useAuth } from "./Components/Hooks/useAuth";

export default function App() {
  const [burger, setBurger] = useState(false);
  const userInfo = useAuth();
  const authChecking = (page) => (userInfo.isAuth ? <Navigate to="/" /> : page);

  return (
    <>
      {userInfo.isAuth && <Header burger={burger} setBurger={setBurger} />}
      <Router>
        <Main active={burger}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/upcoming" element={<UpcomingPage />} />
            <Route path="/sign-up" element={authChecking(<SingUpPage />)} />
            <Route path="/log-in" element={authChecking(<LoginPage />)} />
            <Route path="*" element={<Page404 />} />
          </Routes>
        </Main>
      </Router>
    </>
  );
}

const Main = styled.main`
  margin-left: ${({ active }) => (active ? "328px" : "0")};
  transition: all 0.4s ease-in-out;
`;
