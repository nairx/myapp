import React from "react";
import { useState, useEffect, useContext } from "react";
import { AppContext } from "../App";
import "./Home.css";

function CartButton({ product }) {
  const { cart, setCart, currentCustomer } = useContext(AppContext);
  const found = cart.find((value) => value.id === product.id);

  const addToCart = (product) => {
    const found = cart.find((value) => value.id === product.id);
    if (!found) {
      product.qty = 1;
      setCart([...cart, product]);
    }
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

  if (!found) {
    return <button onClick={() => addToCart(product)}>Add to Cart</button>;
  } else {
    return (
      <>
        <button onClick={() => reduceQty(found.id, found.qty)}>-</button>
        {found.qty}
        <button onClick={() => addQty(found.id, found.qty)}>+</button>
      </>
    );
  }
}

export default function Home(props) {
  // const [cart, setCart] = useState([]);
  const { cart, setCart, currentCustomer } = useContext(AppContext);

  const products = [
    {
      id: 1,
      name: "Product 1",
      desc: "This is the description of Product 1",
      price: 45,
    },
    {
      id: 2,
      name: "Product 2",
      desc: "This is the description of Product 2",
      price: 40,
    },
    {
      id: 3,
      name: "Product 3",
      desc: "This is the description of Product 3",
      price: 50,
    },
  ];

  // useEffect(() => {
  //   //cart.reduce((sum,value)=>{},0)
  //   setTotal(
  //     cart.reduce((sum, value) => {
  //       return sum + value.qty * value.price;
  //     }, 0)
  //   );
  // }, [cart]);

  return (
    <div>
      <h3>Welcome {currentCustomer.email}</h3>
      <div className="row">
        {products.map((product) => (
          <div key={product.id}>
            <h3>{product.name}</h3>
            <p>{product.desc}</p>
            <h4>{product.price}</h4>
            <CartButton product={product} />
          </div>
        ))}
      </div>
      <hr />
    </div>
  );
}
