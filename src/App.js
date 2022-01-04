import React from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import HomePage from "./Pages/HomePage";
import UpcomingPage from "./Pages/UpcomingPage";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/upcoming" element={<UpcomingPage/>}/>
      </Routes>
    </Router>
  )
  ;
}
