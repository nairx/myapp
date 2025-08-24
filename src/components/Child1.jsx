import React from "react";

export default function Child1(props) {
  const handleClick = () => {
    alert("Hello World");
  };
  const handleClick1 = (name) => {
    alert(`Hello ${name}`);
  };
  const handleClick2 = () => {
    alert(`Hello ${props.firstName}`);
  };
  return (
    <div>
      <button onClick={handleClick}>Click</button>
      <button onClick={() => handleClick1("John")}>Click1</button>
      <button onClick={handleClick2}>Click2</button>
    </div>
  );
}
