import React from "react";
import ChildContextApi from "./ChildContextApi";

const Parent = () => {
  return (
    <div>
      <h1>This is Parent.js Component</h1>
      <ChildContextApi />
    </div>
  );
};

export default Parent;
