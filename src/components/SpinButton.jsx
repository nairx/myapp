import React from "react";
import { useState, useEffect } from "react";
export default function SpinButton() {
  const [message, setMessage] = useState("Green");
  const [message1, setMessage1] = useState("Red");
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);
  useEffect(() => {
    if (count <= 10) {
      setMessage("Green");
    } else {
      setMessage("Red");
    }
  }, [count]);
  useEffect(() => {
    if (count1 > 10) {
      setMessage1("Green");
    } else {
      setMessage1("Red");
    }
  }, [count1]);

  
  useEffect(() => {
    alert("Hello World");
  }, [count1, count]);

  return (
    <div>
      <p>
        <input type="number" onChange={(e) => setCount(e.target.value)} />
      </p>
      {message}
      <p>
        <input type="number" onChange={(e) => setCount1(e.target.value)} />
      </p>
      {message1}
    </div>
  );
}
