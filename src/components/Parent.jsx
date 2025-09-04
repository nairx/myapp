import React from "react";
import { useState } from "react";
import SomeComponent from "./SomeComponent";
export default function Parent() {
const [counter,setCounter] = useState(0)
const [flag,setFlag] = useState(0)
const increment = () => {
    setCounter(counter+1)
}
const incrementFlag = () => {
    setFlag(flag+1)
}
  return (
    <div>
      <h3>Parent</h3>
      <p>Flag - {flag}</p>
      <p>Counter - {counter}</p>
      <button onClick={increment}>Update Counter</button>
      <button onClick={incrementFlag}>Update Flag</button>
      <SomeComponent count={counter} />
    </div>
  );
}
