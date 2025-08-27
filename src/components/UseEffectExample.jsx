import React from "react";
import { useEffect, useState } from "react";
export default function UseEffectExample() {
  const [flag, setFlag] = useState(0);
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    if (counter > 0) alert("Counter Changed");
    return () => {
      alert("Thank you!");
      
    };
  }, [counter]);

  return (
    <div>
      <button onClick={(e) => setFlag(flag + 1)}> Flag({flag})</button>
      <button onClick={(e) => setCounter(counter + 1)}>
        Counter({counter})
      </button>
    </div>
  );
}
