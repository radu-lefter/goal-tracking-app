import React from "react";
import "./App.css";
import data from "./data.json"

import DaysCompleted from "./Components/DaysCompleted";

const checkins = data

function App() {
  return (
    <div>
      <DaysCompleted days={15} checkins={checkins}>
        {" "}
      </DaysCompleted>
    </div>
  );
}

export default App;
