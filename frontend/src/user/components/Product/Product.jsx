import React, { useEffect, useState } from "react";
import { data } from "react-router-dom";

function Product() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .then(console.log(products))
      .catch((err) => console.error("Failed to fetch products:", err));
  }, []);

  if (!products.length) {
    return <p className="text-center mt-10">Loading products...</p>;
  }

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Our Products</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white p-4 rounded shadow hover:shadow-lg transition"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-48 object-contain mb-4"
            />
            <h2 className="text-lg font-semibold mb-2">{product.title}</h2>
            <p className="text-pink-600 font-bold mb-2">${product.price.toFixed(2)}</p>
            <p className="text-gray-600 text-sm line-clamp-3">{product.description}</p>
            <button className="mt-4 w-full bg-pink-600 text-white py-2 rounded hover:bg-pink-700 transition">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Product;
