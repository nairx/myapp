import React from "react";
import { useState, useEffect } from "react";

import axios from "axios";
export default function ProductTest() {
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState({});
  const url = "https://mern-backend-drab-rho.vercel.app/api/products/";
  const fetchProducts = async () => {
    const response = await axios.get(url);
    setProducts(response.data.products);
  };
  useEffect(() => {
    fetchProducts();
  }, []);

  const addProduct = async () => {
    const response = await axios.post(url, product);
    fetchProducts();
  };

  const deleteProduct = async (id) => {
    const result = confirm("Are you sure you want to delete?");
    if (result) {
      const response = await axios.delete(url + id);
      fetchProducts();
    }
  };
  return (
    <div>
      ProductTest
      <div>
        <p>
          <input
            type="text"
            placeholder="Name"
            onChange={(e) =>
              setProduct({ ...product, productName: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Description"
            onChange={(e) =>
              setProduct({ ...product, description: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Price"
            onChange={(e) => setProduct({ ...product, price: e.target.value })}
          />
          <input
            type="text"
            placeholder="Image Url"
            onChange={(e) => setProduct({ ...product, imgUrl: e.target.value })}
          />
          <button onClick={addProduct}>Add</button>
        </p>
      </div>
      {products &&
        products.map((product) => (
          <li keys={product._id}>
            {product.productName}-{product.description}-{product.price}
            <button onClick={() => deleteProduct(product._id)}>Delete</button>
          </li>
        ))}
    </div>
  );
}
