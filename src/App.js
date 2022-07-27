import React from "react";
import "./App.css";
import data from "./data.json"
import GlobalStyles from "./config/GlobalStyles";
import { ThemeProvider } from "styled-components";
import theme from "./config/theme.js";
import Header from "./Components/Header";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import Dash from "./Views/Dash";
import Join from "./Views/Join";
import Checkin from "./Views/Checkin";
import Profile from "./Views/Profile";
import Login from "./Views/Login";
import PageNotFound from "./Views/PageNotFound";

const checkins = data

function App() {


  return (
    <div>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Router>
          <Routes>
            <Route path="/" element={<Dash checkins={checkins} />}></Route>
            <Route path="/profile" element={<Profile />}></Route>
            <Route path="/checkin" element={<Checkin />}></Route>
            <Route path="/join" element={<Join />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="*" element={<PageNotFound />}></Route>
          </Routes>
        </Router>

      </ThemeProvider>
    </div>
  );
}

export default App;
