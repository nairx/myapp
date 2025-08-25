import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function LoginUseState() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [message, setMessage] = useState();
  const Navigate = useNavigate();
  const handleSubmit = () => {
    if (email === "john@gmail.com" && password === "1234") {
      setMessage("Welcome John");
    } else {
      setMessage(`Access denied for user ${email}`);
    }
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
