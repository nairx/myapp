import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
export default function CRUD() {
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState({});
  const url = "https://mern-backend-drab-rho.vercel.app/api/products/";
  const fetchProducts = async () => {
    try {
      const response = await axios.get(url);
      setProducts(response.data.products);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchProducts();
  }, []);

  const addProduct = async () => {
    try {
      const response = await axios.post(url, product);
      fetchProducts();
    } catch (err) {
      console.log(err);
    }
  };

  const deleteProduct = async (id) => {
    try{
      const response = await axios.delete(url+id)
      fetchProducts()
    }catch(err){
      console.log(err)
    }
  }
  return (
    <div>
      <h1>API Lesson</h1>
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
            placeholder="Image URL"
            onChange={(e) => setProduct({ ...product, imgUrl: e.target.value })}
          />
          <button onClick={addProduct}>Add</button>
        </p>
      </div>
      <div>
        {products &&
          products.map((product) => (
            <div key={product._id}>
              <img src={product.imgUrl} alt="" />
              <h2>{product.productName}</h2>
              <p>{product.description}</p>
              <strong>{product.price}</strong>
              <p>
                <button onClick={()=>deleteProduct(product._id)}>Delete</button>
              </p>
            </div>
          ))}
      </div>
    </div>
  );
}
