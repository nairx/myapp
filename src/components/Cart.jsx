import React from "react";
import { useContext, useState, useEffect } from "react";
import App, { AppContext } from "../App.jsx";
export default function Cart() {
  const { cart, setCart } = useContext(AppContext);
  const [total, setTotal] = useState(0);
  const deleteItem = (id) => {
    const newCart = cart.filter((value) => value.id !== id);
    setCart(newCart);
  };

  const addQty = (id, qty) => {
    setCart(
      cart.map((value) =>
        value.id === id ? { ...value, qty: qty + 1 } : value
      )
    );
  };

  const reduceQty = (id, qty) => {
    setCart(
      cart.map((value) =>
        value.id === id ? { ...value, qty: qty - 1 } : value
      )
    );
  };

  useEffect(() => {
    //cart.reduce((sum,value)=>{},0)
    const orderValue = cart.reduce((sum, value) => {
      return sum + value.qty * value.price;
    }, 0);
    setTotal(orderValue);
  }, [cart]);

  return (
    <div>
      <div>
        <h3>My Cart</h3>

        {cart &&
          cart.map(
            (item) =>
              item.qty > 0 && (
                <li key={item.id}>
                  {item.name}-{item.price}-
                  <button onClick={() => reduceQty(item.id, item.qty)}>
                    -
                  </button>
                  {item.qty}
                  <button onClick={() => addQty(item.id, item.qty)}>+</button>
                  {item.qty * item.price}
                  <button onClick={() => deleteItem(item.id)}>Delete</button>
                </li>
              )
          )}
        {total === 0 ? (
          <h3>Your cart is empty</h3>
        ) : (
          <h3>Order Value:{total}</h3>
        )}
      </div>
    </div>
  );
}
