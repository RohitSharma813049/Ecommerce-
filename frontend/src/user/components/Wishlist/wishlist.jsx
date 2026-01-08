import React from "react";
import { Link } from "react-router-dom";
import { useWishlist } from "../../context/WishlistContext";

function Wishlist() {
  const { wishlist, removeFromWishlist } = useWishlist();

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="bg-gray-100 py-8">
        <h1 className="text-4xl font-bold text-center">Wishlist</h1>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        {wishlist.length === 0 ? (
          <div className="text-center">
            <p className="text-gray-500 mb-4">
              Your wishlist is empty.
            </p>
            <Link
              to="/shop"
              className="bg-pink-600 text-white px-6 py-2 rounded hover:bg-pink-700 transition"
            >
              Go to Shop
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {wishlist.map((product) => (
              <div
                key={product.id}
                className="bg-white p-4 rounded shadow hover:shadow-lg transition"
              >
                <Link to={`/product/${product.id}`}>
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-48 object-contain mb-4"
                  />
                </Link>

                <h3 className="text-lg font-semibold mb-2 line-clamp-2">
                  <Link
                    to={`/product/${product.id}`}
                    className="hover:text-pink-600"
                  >
                    {product.title}
                  </Link>
                </h3>

                <p className="text-pink-600 font-bold mb-3">
                  ${product.price}
                </p>

                <button
                  onClick={() => removeFromWishlist(product.id)}
                  className="w-full bg-red-500 text-white py-2 rounded hover:bg-red-600 transition"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Wishlist;
