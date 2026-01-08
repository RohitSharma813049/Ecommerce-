import React from "react";
import { Link } from "react-router-dom";
import { useWishlist } from "../../../context/WishlistContext";

function Card({ product }) {
  const { addToWishlist } = useWishlist();

  return (
    <div className="bg-white p-4 rounded shadow hover:shadow-lg transition hover:scale-105 duration-300">
      {/* Product Image */}
      <Link to={`/product/${product.id}`}>
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-48 object-contain mb-4 cursor-pointer"
        />
      </Link>

      {/* Product Title */}
      <h3 className="text-lg font-semibold mb-2 line-clamp-2">
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
      <p className="text-gray-600 text-sm line-clamp-3 mb-4">
        {product.description}
      </p>

      {/* Buttons */}
      <div className="flex gap-2">
        <button
          className="flex-1 bg-pink-600 text-white py-2 rounded hover:bg-pink-700 transition"
        >
          Add to Cart
        </button>

        <button
          onClick={() => addToWishlist(product)}
          className="w-12 border border-pink-600 text-pink-600 rounded hover:bg-pink-600 hover:text-white transition"
          title="Add to Wishlist"
        >
          ♥
        </button>
      </div>
    </div>
  );
}

export default Card;
