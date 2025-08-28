import React from "react";
import { useState } from "react";
import "./Home.css";
export default function Home(props) {
  const [cart, setCart] = useState([]);
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

  const addToCart = (product) => {
    const found = cart.find((value) => value.id === product.id);
    if (!found) {
      product.qty = 1;
      setCart([...cart, product]);
    }
  };

  const deleteItem = (id) => {
    const newCart = cart.filter((value) => value.id !== id);
    setCart(newCart);
  };

  const addQty = (id, qty) => {
    const found = cart.find((value) => value.id === id);
    if (found) {
      found.qty = qty + 1;
      // setCart([...cart,])
      setCart([...cart, found]);
    }
  };
  return (
    <div>
      <div className="row">
        {products.map((product) => (
          <div key={product.id}>
            <h3>{product.name}</h3>
            <p>{product.desc}</p>
            <h4>{product.price}</h4>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
      <hr />
      <div>
        <h3>My Cart</h3>
        {cart &&
          cart.map((item) => (
            <li key={item.id}>
              {item.name}-{item.price}-<button>-</button>
              {item.qty}
              <button onClick={() => addQty(item.id, item.qty)}>+</button>
              <button onClick={() => deleteItem(item.id)}>Delete</button>
            </li>
          ))}
      </div>
    </div>
  );
}
