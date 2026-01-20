import React from "react";
import { useCart } from "../../context/CartContext";

function CartPage() {
  const { cart, addToCart, removeFromCart, subtotal } = useCart();

  if (cart.length === 0)
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-500">
        Your cart is empty 🛒
      </div>
    );

  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* LEFT: Cart Items */}
          <div className="lg:col-span-2 bg-white rounded-lg shadow p-6">
            <table className="w-full">
              <thead className="border-b">
                <tr className="text-left text-sm text-gray-600">
                  <th className="py-3">Product</th>
                  <th className="py-3">Price</th>
                  <th className="py-3">Qty</th>
                  <th className="py-3">Total</th>
                  <th className="py-3">Action</th>
                </tr>
              </thead>

              <tbody className="divide-y">
                {cart.map((item) => (
                  <tr key={item.id}>
                    <td className="py-4 flex items-center gap-4">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-16 h-16 object-contain rounded"
                      />
                      <div>
                        <p className="font-medium">{item.title}</p>
                      </div>
                    </td>

                    <td>${item.price.toFixed(2)}</td>

                    <td>
                      <input
                        type="number"
                        min="1"
                        value={item.quantity}
                        onChange={(e) =>
                          addToCart({
                            ...item,
                            quantity: Number(e.target.value) - item.quantity,
                          })
                        }
                        className="w-16 border rounded px-2 py-1"
                      />
                    </td>

                    <td>${(item.price * item.quantity).toFixed(2)}</td>

                    <td>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-red-500 hover:underline"
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* RIGHT: Summary */}
          <div className="bg-white rounded-lg shadow p-6 h-fit">
            <h2 className="text-lg font-semibold mb-4">Cart Summary</h2>

            <div className="flex justify-between mb-2">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>

            <div className="text-sm text-gray-500 mb-4">
              Taxes & shipping calculated at checkout
            </div>

            <button className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartPage;
