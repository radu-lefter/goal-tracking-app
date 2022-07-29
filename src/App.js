import React, {useState} from "react";
import "./App.css";
import data from "./data.json"
import GlobalStyles from "./config/GlobalStyles";
import { ThemeProvider } from "styled-components";
import theme from "./config/theme.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dash from "./Views/Dash";
import Join from "./Views/Join";
import Checkin from "./Views/Checkin";
import Profile from "./Views/Profile";
import Login from "./Views/Login";
import PageNotFound from "./Views/PageNotFound";
import {Context} from "./config/context" 
import { UserAuthContextProvider } from "./config/UserAuthContext";
import ProtectedRoute from "./Components/ProtectedRoute"

const checkins = data

function App() {
const [sidebarOpen, setSidebarOpen] = useState(false)
function toggleSidebar(){
  setSidebarOpen(!sidebarOpen)
}

  return (
    <div>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Context.Provider value={{isOpen: sidebarOpen, toggle: toggleSidebar }}>
        <UserAuthContextProvider>
        <Router>
          <Routes>
            <Route path="/" element={<ProtectedRoute><Dash checkins={checkins} /></ProtectedRoute>}></Route>
            <Route path="/profile" element={<Profile />}></Route>
            <Route path="/checkin" element={<Checkin />}></Route>
            <Route path="/join" element={<Join />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="*" element={<PageNotFound />}></Route>
          </Routes>
        </Router>
        </UserAuthContextProvider>
        </Context.Provider>
      </ThemeProvider>
    </div>
  );
}

export default App;
