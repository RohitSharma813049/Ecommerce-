import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Card from "../card/card";

function Shop() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [loading, setLoading] = useState(true);

  const [params] = useSearchParams();
  const search = params.get("search") || "";

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setCategories(["all", ...new Set(data.map((p) => p.category))]);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      selectedCategory === "all" || product.category === selectedCategory;

    const matchesSearch =
      product.title.toLowerCase().includes(search.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="bg-gray-100 py-8">
        <h1 className="text-4xl font-bold text-center">Shop</h1>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-12 gap-8">
        {/* Sidebar */}
        <aside className="md:col-span-3 space-y-10">
          {/* Category Filter */}
          <section>
            <h2 className="font-semibold text-lg mb-4">Product Brand</h2>
            <ul className="space-y-2">
              {categories.map((cat) => (
                <li key={cat}>
                  <label className="inline-flex items-center cursor-pointer">
                    <input
                      type="radio"
                      name="category"
                      value={cat}
                      checked={selectedCategory === cat}
                      onChange={() => setSelectedCategory(cat)}
                      className="form-radio text-pink-600"
                    />
                    <span className="ml-2 capitalize">{cat}</span>
                  </label>
                </li>
              ))}
            </ul>
          </section>

          {/* Price Filter */}
          <section>
            <h2 className="font-semibold text-lg mb-4">Price Filter</h2>
            <div className="space-y-1 text-sm text-gray-600">
              <label className="inline-flex items-center cursor-pointer">
                <input type="checkbox" className="form-checkbox text-pink-600" />
                <span className="ml-2">$0 - $150.00</span>
              </label>
              <label className="inline-flex items-center cursor-pointer">
                <input type="checkbox" className="form-checkbox text-pink-600" />
                <span className="ml-2">$150.00 - $350.00</span>
              </label>
              <label className="inline-flex items-center cursor-pointer">
                <input type="checkbox" className="form-checkbox text-pink-600" />
                <span className="ml-2">$350.00 - $540.00</span>
              </label>
              <label className="inline-flex items-center cursor-pointer">
                <input type="checkbox" className="form-checkbox text-pink-600" />
                <span className="ml-2">$450.00 +</span>
              </label>
            </div>
          </section>

          {/* Rating Filter */}
          <section>
            <h2 className="font-semibold text-lg mb-4">Rating Item</h2>
            <div className="space-y-1 text-sm text-gray-600">
              {/* Example stars */}
              <div className="flex items-center space-x-2">
                <div className="text-yellow-400">★★★★☆</div>
                <span>(154)</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="text-yellow-400">★★★☆☆</div>
                <span>(076)</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="text-yellow-400">★★☆☆☆</div>
                <span>(151)</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="text-yellow-400">★☆☆☆☆</div>
                <span>(095)</span>
              </div>
            </div>
          </section>

          {/* Filter By Color */}
          <section>
            <h2 className="font-semibold text-lg mb-4">Filter By Color</h2>
            <div className="flex space-x-4">
              <span className="w-5 h-5 rounded-full bg-blue-500 cursor-pointer border border-gray-300"></span>
              <span className="w-5 h-5 rounded-full bg-orange-500 cursor-pointer border border-gray-300"></span>
              <span className="w-5 h-5 rounded-full bg-brown-500 cursor-pointer border border-gray-300"></span>
              <span className="w-5 h-5 rounded-full bg-green-500 cursor-pointer border border-gray-300"></span>
              <span className="w-5 h-5 rounded-full bg-purple-500 cursor-pointer border border-gray-300"></span>
              <span className="w-5 h-5 rounded-full bg-sky-400 cursor-pointer border border-gray-300"></span>
            </div>
          </section>
        </aside>

        {/* Main Products Section */}
        <main className="md:col-span-9">
          {/* Search Result Text */}
          {search && (
            <p className="mb-6 text-gray-600">
              Showing results for: <b>{search}</b>
            </p>
          )}

          {/* Loading */}
          {loading && (
            <p className="text-center text-gray-500">Loading products...</p>
          )}

          {/* Products Grid */}
          {!loading && filteredProducts.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <Card key={product.id} product={product} />
              ))}
            </div>
          )}

          {/* No products found */}
          {!loading && filteredProducts.length === 0 && (
            <p className="text-center text-gray-500">No products found.</p>
          )}
        </main>
      </div>
    </div>
  );
}

export default Shop;
