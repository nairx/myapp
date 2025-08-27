import React from "react";
import { useNavigate,Link } from "react-router-dom";
export default function NavButton() {
  const Navigate = useNavigate();
  return (
    <div>
      <button onClick={() => Navigate("/")}>Goto Home</button>
      <Link to="/">Goto Home</Link>
    <Link to="/lifeCycle">LifeCycle</Link>
    </div>
  );
}
