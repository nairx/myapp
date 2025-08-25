import React from "react";
import { useState } from "react";
export default function Register() {
  const [customer, setCustomer] = useState({});
  const [customers, setCustomers] = useState([]);
  const handleSubmit = () => {
    setCustomers([...customers, customer]);
  };
  return (
    <div>
      <h2>Registration Form</h2>

      <p>
        <input
          type="text"
          placeholder="Enter Name"
          onChange={(e) => setCustomer({ ...customer, name: e.target.value })}
        />
      </p>
      <p>
        <input
          type="text"
          placeholder="Email Address"
          onChange={(e) => setCustomer({ ...customer, email: e.target.value })}
        />
      </p>
      <p>
        <input
          type="password"
          placeholder="Password"
          onChange={(e) =>
            setCustomer({ ...customer, password: e.target.value })
          }
        />
      </p>
      <button onClick={handleSubmit}>Submit</button>
      <hr />
      {customers &&
        customers.map((value, index) => (
          <li key={index}>
            {value.name}-{value.email}-{value.password}
          </li>
        ))}
    </div>
  );
}
