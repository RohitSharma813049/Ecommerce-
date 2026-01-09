import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function BuyPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [related, setRelated] = useState([]);
  const [activeTab, setActiveTab] = useState("description");
  const [quantity, setQuantity] = useState(1);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);

        // Fetch related products (same category)
        fetch("https://fakestoreapi.com/products")
          .then((res) => res.json())
          .then((all) => {
            const filtered = all.filter(
              (p) => p.category === data.category && p.id !== data.id
            );
            setRelated(filtered.slice(0, 4));
          });
      });
  }, [id]);

  if (!product) {
    return <p className="text-center mt-10">Loading product...</p>;
  }

  const handleBuyNow = () => {
    setShowModal(true);
  };

  const totalPrice = (product.price * quantity).toFixed(2);

  return (
    <div className="bg-gray-50 relative">
      {/* Breadcrumb */}
      <div className="bg-gray-100 py-6">
        <div className="max-w-7xl mx-auto px-6 text-sm text-gray-600">
          <Link to="/" className="hover:text-pink-600">
            Home
          </Link>{" "}
          / <span className="text-pink-600"> Product Details</span>
        </div>
      </div>

      {/* Product Section */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Image Gallery */}
        <div className="flex gap-4">
          <div className="flex flex-col gap-3">
            {[1, 2, 3].map((i) => (
              <img
                key={i}
                src={product.image}
                alt=""
                className="w-20 h-20 object-contain bg-white border rounded cursor-pointer"
              />
            ))}
          </div>

          <div className="bg-white border rounded flex-1 flex items-center justify-center">
            <img
              src={product.image}
              alt={product.title}
              className="h-96 object-contain"
            />
          </div>
        </div>

        {/* Product Info */}
        <div className="flex flex-col">
          <h1 className="text-3xl font-bold mb-2">{product.title}</h1>

          <div className="flex items-center gap-2 mb-4">
            <span className="text-yellow-400">★★★★★</span>
            <span className="text-sm text-gray-500">
              ({product.rating?.count || 0} reviews)
            </span>
          </div>

          <div className="text-2xl font-bold text-pink-600 mb-4">
            ${product.price}
          </div>

          <p className="text-gray-600 mb-6">{product.description}</p>

          {/* Color */}
          <div className="mb-4">
            <p className="font-semibold mb-2">Color</p>
            <div className="flex gap-2">
              <span className="w-5 h-5 rounded-full bg-black border"></span>
              <span className="w-5 h-5 rounded-full bg-red-500 border"></span>
              <span className="w-5 h-5 rounded-full bg-blue-500 border"></span>
            </div>
          </div>

          {/* Quantity + Buy Now */}
          <div className="flex items-center gap-4 mt-6">
            <input
              type="number"
              min="1"
              value={quantity}
              onChange={(e) =>
                setQuantity(Math.max(1, parseInt(e.target.value) || 1))
              }
              className="w-20 border rounded px-2 py-1"
            />

            <button
              onClick={handleBuyNow}
              className="bg-pink-600 text-white px-6 py-3 rounded hover:bg-pink-700 transition"
            >
              Buy Now
            </button>
          </div>

          <p className="mt-6 text-sm">
            <strong>Category:</strong> {product.category}
          </p>
        </div>
      </div>

      {/* Tabs */}
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex gap-6 border-b mb-6">
          {["description", "additional", "reviews", "video"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-2 capitalize ${
                activeTab === tab
                  ? "border-b-2 border-pink-600 text-pink-600"
                  : "text-gray-600"
              }`}
            >
              {tab.replace("-", " ")}
            </button>
          ))}
        </div>

        {activeTab === "description" && (
          <p className="text-gray-600 leading-relaxed">{product.description}</p>
        )}

        {activeTab === "additional" && (
          <ul className="list-disc pl-6 text-gray-600">
            <li>High quality material</li>
            <li>Modern design</li>
            <li>Lightweight & durable</li>
          </ul>
        )}

        {activeTab === "reviews" && <p className="text-gray-600">No reviews yet.</p>}

        {activeTab === "video" && (
          <p className="text-gray-600">Product video coming soon.</p>
        )}
      </div>

      {/* Related Products */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold mb-6">Related Products</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {related.map((item) => (
            <Link
              to={`/product/${item.id}`}
              key={item.id}
              className="bg-white p-4 rounded shadow hover:shadow-lg transition"
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-40 w-full object-contain mb-4"
              />
              <h3 className="text-sm font-semibold mb-1 line-clamp-2">
                {item.title}
              </h3>
              <p className="text-pink-600 font-bold">${item.price}</p>
            </Link>
          ))}
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={() => setShowModal(false)}
        >
          <div
            className="bg-white p-6 rounded shadow-lg max-w-md w-full"
            onClick={(e) => e.stopPropagation()} // prevent modal close on inner click
          >
            <h2 className="text-xl font-bold mb-4">Purchase Confirmation</h2>
            <p>
              You are about to buy <strong>{quantity}</strong> x{" "}
              <strong>{product.title}</strong>.
            </p>
            <p className="mt-2 font-semibold">
              Total Price: <span className="text-pink-600">${totalPrice}</span>
            </p>

            <div className="mt-6 flex justify-end space-x-4">
              <button
                className="px-4 py-2 rounded border border-gray-300 hover:bg-gray-100"
                onClick={() => setShowModal(false)}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 rounded bg-pink-600 text-white hover:bg-pink-700"
                onClick={() => {
                  setShowModal(false);
                  alert(
                    `Thank you for buying ${quantity} x "${product.title}" for $${totalPrice}!`
                  );
                }}
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default BuyPage;
