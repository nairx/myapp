import React from "react";
import "./Home.css";
export default function Home(props) {
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
  return (
    <div className="row">
      {products.map((product) => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <p>{product.desc}</p>
          <h4>{product.price}</h4>
          <button>Add to Cart</button>
        </div>
      ))}

    </div>
  );
}
