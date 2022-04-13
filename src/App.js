import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./Pages/HomePage";
import UpcomingPage from "./Pages/UpcomingPage";
import store from "./Components/Store";
import { Provider } from "react-redux";
import Header from "./Components/Header/Header";
import styled from "styled-components";
import HeroPage from "./Pages/HeroPage";

export default function App() {
  const [burger, setBurger] = useState(false);
  return (
    <Provider store={store}>
      {/* <Header burger={burger} setBurger={setBurger} /> */}
      <Main active={burger}>
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/hero" element={<HeroPage />} />
            <Route path="/upcoming" element={<UpcomingPage />} />
          </Routes>
        </Router>
      </Main>
    </Provider>
  );
}

const Main = styled.main`
  margin-left: ${(props) => (props.active ? "328px" : "0")};
  transition: all 0.4s ease-in-out;
`;
