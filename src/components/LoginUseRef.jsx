import React from "react";
import { useRef, useState } from "react";
export default function LoginUseRef() {
  const [message, setMessage] = useState();
  const emailRef = useRef();
  const passwordRef = useRef();
  const handleSubmit = () => {
    if (emailRef.current.value==="john@gmail.com" && passwordRef.current.value==="1234"){
        setMessage("Welcome John")
    }
    else {
        setMessage("Access Denied")
    }
  };
  return (
    <div>
      <h2>Login Form</h2>
      {message}
      <p>
        <input type="text" placeholder="Email Address" ref={emailRef} />
      </p>
      <p>
        <input type="password" placeholder="Password" ref={passwordRef} />
      </p>
      <button onClick={handleSubmit}>Log In</button>
      
    </div>
  );
}
