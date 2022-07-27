import React from "react";
import "./App.css";
import data from "./data.json"
import GlobalStyles from "./config/GlobalStyles";
import { ThemeProvider } from "styled-components";
import theme from "./config/theme.js";
import Header from "./Components/Header";
import CheckinComment from "./Components/CheckinComment";
import DaysCompleted from "./Components/DaysCompleted";

const checkins = data

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Header />
        <GlobalStyles />
        <DaysCompleted days={15} checkins={checkins}>
          {" "}
        </DaysCompleted>
       
       <CheckinComment />

      </ThemeProvider>
    </div>
  );
}

export default App;
