import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { AppContext } from "../App";
import { useNavigate } from "react-router-dom";
export default function Profile() {
  const { currentCustomer, setCurrentCustomer, orders } =
    useContext(AppContext);
  const Navigate = useNavigate();
  const [myOrders, setMyOrders] = useState([]);
  const handleLogout = () => {
    setCurrentCustomer({});
    Navigate("/login");
  };
  useEffect(() => {
    setMyOrders(
      orders.filter((value) => value.email === currentCustomer.email)
    );
  }, []);
  return (
    <div>
      Profile
      <div>
        {myOrders &&
          myOrders.map((item) => (
            <li key={item.id}>
              {item.email}-{item.orderValue}-{item.items.length}-
              {item.items.map(value=>(
                <div key={value.id}>{value.name}-{value.price}-{value.qty}</div>
              ))}
            </li>
          ))}
      </div>
      <p>
        <button onClick={handleLogout}>Logout</button>
      </p>
    </div>
  );
}
