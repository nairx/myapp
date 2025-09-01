import React from "react";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../App.jsx";
export default function LoginUseState() {
  const { customers, setCustomers,currentCustomer,setCurrentCustomer } = useContext(AppContext);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [message, setMessage] = useState();
  const Navigate = useNavigate();
  const handleSubmit = () => {
    const found = customers.find(
      (value) => value.email === email && value.password === password
    );
    if (found) {
      //setMessage(`Welcome ${found.name}`)
      setCurrentCustomer(found)
      Navigate("/");
    } else {
      setMessage(`Access denied for user ${email}`);
    }
    // if (email === "john@gmail.com" && password === "1234") {
    //   setMessage("Welcome John");
    // } else {
    //   setMessage(`Access denied for user ${email}`);
    // }
  };

  return (
    <div>
      <h2>Login Form</h2>
      {message}
      <p>
        <input
          type="text"
          placeholder="Email Address"
          onChange={(e) => setEmail(e.target.value)}
        />
      </p>
      <p>
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </p>
      <button onClick={handleSubmit}>Log In</button>
      <hr />
      <button onClick={() => Navigate("/register")}>Create Account</button>
    </div>
  );
}
