import React from "react";
import { useEffect, useState, useRef } from "react";
import axios from "axios";

export default function Users() {
  const [users, setUsers] = useState([]);
  const API_URL = import.meta.env.VITE_API_URL
  //   const [counter, setCounter] = useState(0);
  const counterRef = useRef();
  const username = "John";
  const fetchUsers = async () => {
    const url = `${API_URL}/users`;
    // const url = "https://jsonplaceholder.typicode.com/users"
    const res = await axios.get(url);
    setUsers(res.data);
  };

  //   useEffect(() => {
  //     fetchUsers();
  //   }, []);

//   useEffect(() => {
//     if (counter > 0) {
//       fetchUsers();
//     }
//   }, []);

  return (
    <div>
      <h2> User List</h2>
      <p>
        <button onClick={fetchUsers}>Get Users</button>
      </p>
      <p>
        <input type="number" ref={counterRef} />
        <button onClick={fetchUsers}>Submit</button>
      </p>
      {/* {users &&
        users.map(
          (value) =>
            value.id === Number(counterRef.current.value) && (
              <li key={value.id}>
                {value.id}-{value.name}-{value.email}
              </li>
            )
        )} */}

      {users &&
        users.map((value) =>
          value.id === Number(counterRef.current.value) ? (
            <li key={value.id}>
              {value.name}-{value.email}
            </li>
          ) : (
            <li key={value.id} style={{ color: "grey" }}>
              {value.name}-{value.email}
            </li>
          )
        )}
    </div>
  );
}
