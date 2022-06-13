import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./App.css";

import HomePage from "./Pages/HomePage";
import UpcomingPage from "./Pages/UpcomingPage";
import SingUpPage from "./Pages/SingUpPage";
import LoginPage from "./Pages/LoginPage";
import Page404 from "./Pages/Page404";

import { useAuth } from "./Components/Hooks/useAuth";
import MainLayout from "./UI/Templates/MainLayout";

export default function App() {
  const userInfo = useAuth();
  const authChecking = (page) => (userInfo.isAuth ? <Navigate to="/" /> : page);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<HomePage />} />
            <Route path="upcoming" element={<UpcomingPage />} />
            <Route path="sign-up" element={authChecking(<SingUpPage />)} />
            <Route path="log-in" element={authChecking(<LoginPage />)} />
            <Route path="*" element={<Page404 />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}
