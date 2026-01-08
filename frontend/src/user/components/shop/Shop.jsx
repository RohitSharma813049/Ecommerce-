// src/user/components/shop/Shop.jsx
import React, { useEffect, useState } from "react";
import Card from "../card/card"; // <-- import the reusable Card component

function Shop() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        const uniqueCategories = ["all", ...new Set(data.map((p) => p.category))];
        setCategories(uniqueCategories);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="bg-gray-100 py-8">
        <h1 className="text-4xl font-bold text-center">Shop</h1>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Category Filter */}
        <div className="flex flex-wrap gap-3 justify-center mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded border capitalize transition ${
                selectedCategory === cat
                  ? "bg-pink-600 text-white border-pink-600"
                  : "bg-white text-gray-700 hover:bg-pink-50"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Loading */}
        {loading && (
          <p className="text-center text-gray-500">Loading products...</p>
        )}

        {/* Products Grid */}
        {!loading && filteredProducts.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <Card key={product.id} product={product} />
            ))}
          </div>
        )}

        {/* No products found */}
        {!loading && filteredProducts.length === 0 && (
          <p className="text-center text-gray-500">No products found.</p>
        )}
      </div>
    </div>
  );
}

export default Shop;
