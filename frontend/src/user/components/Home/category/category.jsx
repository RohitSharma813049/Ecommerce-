import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function CategoryPage() {
  const { categoryName } = useParams();
  const decodedCategory = decodeURIComponent(categoryName);

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        const filtered = data.filter(
          (product) =>
            product.category.toLowerCase() === decodedCategory.toLowerCase()
        );
        setProducts(filtered);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [decodedCategory]);

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-8 capitalize text-center">
        {decodedCategory} Products
      </h1>

      {/* Loading */}
      {loading && (
        <p className="text-center text-gray-500">Loading products...</p>
      )}

      {/* Empty */}
      {!loading && products.length === 0 && (
        <p className="text-center text-gray-500">
          No products found in this category.
        </p>
      )}

      {/* Products */}
      {!loading && products.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white p-4 rounded shadow hover:shadow-lg transition hover:scale-105 duration-300"
            >
              {/* Image */}
              <Link to={`/product/${product.id}`}>
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-48 object-contain mb-4 cursor-pointer"
                />
              </Link>

              {/* Title */}
              <h3 className="text-lg font-semibold mb-2">
                <Link
                  to={`/product/${product.id}`}
                  className="hover:text-pink-600"
                >
                  {product.title}
                </Link>
              </h3>

              {/* Price */}
              <p className="text-pink-600 font-bold mb-2">
                ${product.price.toFixed(2)}
              </p>

              {/* Description */}
              <p className="text-gray-600 text-sm line-clamp-3">
                {product.description}
              </p>

              {/* Button */}
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
