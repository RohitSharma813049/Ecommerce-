import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Slider from "../Home/slider/slider";
import Card from "../card/card"; // <-- Import Card here

function Home() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        const uniqueCategories = [...new Set(data.map((p) => p.category))];
        setCategories(uniqueCategories);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      {/* Slider */}
      <Slider />

      {/* Loading */}
      {loading && (
        <p className="text-center py-20 text-gray-500">
          Loading products...
        </p>
      )}

      {/* Categories & Products */}
      {!loading && (
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

                {/* Products Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {categoryProducts.slice(0, 4).map((product) => (
                    <Card key={product.id} product={product} />
                  ))}
                </div>

                {/* View More */}
                {categoryProducts.length > 4 && (
                  <div className="text-center mt-6">
                    <Link
                      to={`/category/${encodeURIComponent(category)}`}
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
      )}
    </div>
  );
}

export default Home;
