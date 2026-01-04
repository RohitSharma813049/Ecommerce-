import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Slider from "../Home/slider/slider";

function Home() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        const uniqueCategories = [...new Set(data.map((p) => p.category))];
        setCategories(uniqueCategories);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      {/* Top Slider */}
      <div>
        <Slider products={products.slice(0, 5)} />
      </div>

      {/* Products by category (show only 4 + View More link) */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        {categories.map((category) => {
          const categoryProducts = products.filter(
            (product) => product.category === category
          );

          return (
            <div key={category} className="mb-12">
              <h2 className="text-3xl font-bold mb-6 capitalize text-center md:text-left">
                {category}
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {categoryProducts.slice(0, 4).map((product) => (
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

              {/* View More Button */}
              {categoryProducts.length > 4 && (
                <div className="text-center mt-6">
                  <Link
                    to={`/category/${category}`}
                    className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
                  >
                    View More
                  </Link>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Home;
