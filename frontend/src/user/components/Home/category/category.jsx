import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function CategoryPage() {
  const { categoryName } = useParams(); // Get category from URL
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        // Filter products by category
        const filtered = data.filter(
          (product) =>
            product.category.toLowerCase() === categoryName.toLowerCase()
        );
        setProducts(filtered);
      })
      .catch((err) => console.error(err));
  }, [categoryName]);

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-8 capitalize text-center">
        {categoryName} Products
      </h1>

      {products.length === 0 ? (
        <p className="text-center text-gray-500">
          No products found in this category.
        </p>
      ) : (
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
              <h3 className="text-lg font-semibold mb-2">{product.title}</h3>
              <p className="text-pink-600 font-bold mb-2">
                ${product.price.toFixed(2)}
              </p>
              <p className="text-gray-600 text-sm line-clamp-3">
                {product.description}
              </p>
              <button className="mt-4 w-full bg-pink-600 text-white py-2 rounded hover:bg-pink-700 transition">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default CategoryPage;
