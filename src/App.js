import React, { useState } from "react";
import Parent from "./Parent";
import CounterContext from "./CounterContext";
import ChildUseReducer from "./ChildUseReducer";

const App = () => {
  let countState = useState(11);

  return (
    <CounterContext.Provider value={countState}>
      <div>
        <h1>This is App.js Component</h1>
        <Parent />
        <br />
        <hr />
        <ChildUseReducer />
      </div>
    </CounterContext.Provider>
  );
};

export default App;
