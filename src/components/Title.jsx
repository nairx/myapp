import React from "react";
import { useState, useRef } from "react";
export default function Title() {
  const messageRef = useRef();
  //   const [value, setValue] = useState();
  const valueRef = useRef();
  const handleSubmit = () => {
    messageRef.current.style.color = valueRef.current.value
  };
  return (
    <div>
      <p>
        <input type="text" ref={valueRef}  />
        <button onClick={handleSubmit}>Submit</button>
      </p>
      <p ref={messageRef}>Hello World</p>
    </div>
  );
}
