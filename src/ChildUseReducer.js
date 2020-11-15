import React, { useReducer } from "react";
import counterReducer from "./CounterReducer";

const ChildUseReducer = () => {
  let [state, dispatch] = useReducer(counterReducer, 10);

  return (
    <div>
      <h1>This is Use Reducer Child.js Component</h1>
      <p>Use Reducer Counter Value is: {state} </p>
      <button onClick={() => dispatch("INCREMENT")}>
        Increment Use Reducer
      </button>
      <button onClick={() => dispatch("DECREMENT")}>
        Decrement Use Reducer
      </button>
    </div>
  );
};

export default ChildUseReducer;
