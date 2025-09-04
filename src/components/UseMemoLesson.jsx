import React from "react";
import { useState, useMemo } from "react";
export default function UseMemoLesson() {
  const [count, setCount] = useState(0);
  const [flag, setFlag] = useState(10);

  const f1 = () => {
    console.log("f1 function called")
    let i;
    for (i = 0; i < flag ** 2; i++) {}
    return i;
  };

  const incrementFlag = () => {
    setFlag(flag + 1);
  };
  const incrementCount = () => {
    setCount(count + 1);
  };
    // const result = f1();
  const result = useMemo(() => f1(), [flag]);
  return (
    <div>
      <h2>UseMemoLesson</h2>
      <button onClick={incrementCount}>Count({count})</button>
      <button onClick={incrementFlag}>Flag({flag})</button>
      <p>Result:{result}</p>
    </div>
  );
}
