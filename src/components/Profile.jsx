import React from "react";
import { useContext } from "react";
import { AppContext } from "../App";
import { useNavigate } from "react-router-dom";
export default function Profile() {
  const { currentCustomer, setCurrentCustomer } = useContext(AppContext);
  const Navigate = useNavigate();
  const handleLogout = () => {
    setCurrentCustomer({});
    Navigate("/login");
  };
  return (
    <div>
      Profile
      <p>
        <button onClick={handleLogout}>Logout</button>
      </p>
    </div>
  );
}
