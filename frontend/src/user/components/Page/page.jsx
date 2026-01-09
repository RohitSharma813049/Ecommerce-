import { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { FaShoppingCart, FaHeart } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";

function Page() {
  const [params] = useSearchParams();
  const search = params.get("search") || "";

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) return <p className="p-6">Loading...</p>;

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <h1 className="text-2xl font-semibold mb-4">Products</h1>

      {search && (
        <p className="mb-6 text-gray-700">
          Showing results for: <b>{search}</b>
        </p>
      )}

      {filteredProducts.length === 0 ? (
        <p>No products found.</p>
      ) : (
        <div className="space-y-6">
          {filteredProducts.map(product => (
            <div
              key={product.id}
              className="flex bg-white rounded shadow-sm p-4 hover:shadow-md transition"
            >
              {/* Image */}
              <img
                src={product.image}
                alt={product.title}
                className="h-24 w-24 object-contain rounded cursor-pointer"
                onClick={() => navigate(`/product/${product.id}`)}
              />

              {/* Details */}
              <div className="ml-6 flex flex-col flex-grow">
                <h2
                  className="font-semibold text-sm text-blue-900 hover:underline cursor-pointer"
                  onClick={() => navigate(`/product/${product.id}`)}
                >
                  {product.title.length > 50
                    ? product.title.slice(0, 50) + "..."
                    : product.title}
                </h2>

                {/* Colored dots */}
                <div className="flex space-x-1 mt-1">
                  <span className="w-3 h-3 rounded-full bg-pink-500"></span>
                  <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
                  <span className="w-3 h-3 rounded-full bg-purple-600"></span>
                </div>

                {/* Price */}
                <div className="mt-1">
                  <span className="text-pink-500 font-semibold text-base">${product.price.toFixed(2)}</span>{" "}
                  <span className="line-through text-gray-400 text-sm ml-2">${(product.price * 1.2).toFixed(2)}</span>
                </div>

                {/* Description excerpt */}
                <p className="text-gray-600 text-xs mt-1 line-clamp-3">
                  {product.description}
                </p>

                {/* Action icons */}
                <div className="flex space-x-4 mt-auto pt-2 text-gray-500 text-lg">
                  <button
                    aria-label="Add to cart"
                    className="hover:text-pink-500 transition"
                    onClick={() => alert(`Add product ${product.id} to cart`)}
                  >
                    <FaShoppingCart />
                  </button>
                  <button
                    aria-label="Add to wishlist"
                    className="hover:text-pink-500 transition"
                    onClick={() => alert(`Add product ${product.id} to wishlist`)}
                  >
                    <FaHeart />
                  </button>
                  <button
                    aria-label="View details"
                    className="hover:text-pink-500 transition"
                    onClick={() => navigate(`/product/${product.id}`)}
                  >
                    <AiOutlineSearch />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Page;
