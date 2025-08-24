import React from "react";
import { useState } from "react";
export default function Child2() {
  const [name, setName] = useState("Mike");
  const handleClick = () => {
    setName("John");
  };
    const handleClick1 = () => {
    setName("Cathy");
  };

  return (
    <div>
      <p>
        <button onClick={handleClick}>Click</button>
      </p>
       <p>
        <button onClick={handleClick1}>Click1</button>
      </p>
      {name}
    </div>
  );
}
