import React, { useContext } from "react";
import CounterContext from "./CounterContext";

const ChildContextApi = () => {
  let counterState = useContext(CounterContext);
  console.log(counterState);
  return (
    <div>
      <h1>This is Child.js Component</h1>
      <p>Counter Value With Context Api is :{counterState[0]}</p>
      <button onClick={() => counterState[1](counterState[0] + 1)}>
        Increment Counter Context Api
      </button>{" "}
      <button onClick={() => counterState[1](counterState[0] - 1)}>
        Decrement Counter Context Api
      </button>
    </div>
  );
};

export default ChildContextApi;
