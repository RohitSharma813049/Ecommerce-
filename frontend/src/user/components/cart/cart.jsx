function Cart() {
  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="max-w-7xl mx-auto px-4">
        {/* Page Title */}
        <h1 className="text-3xl font-bold text-gray-800 mb-8">
          Shopping Cart
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* LEFT: Cart Table */}
          <div className="lg:col-span-2 bg-white rounded-lg shadow p-6">
            <table className="w-full">
              <thead className="border-b">
                <tr className="text-left text-sm text-gray-600">
                  <th className="py-3">Product</th>
                  <th className="py-3">Price</th>
                  <th className="py-3">Quantity</th>
                  <th className="py-3">Total</th>
                </tr>
              </thead>

              <tbody className="divide-y">
                {[1, 2, 3, 4, 5].map((item) => (
                  <tr key={item}>
                    <td className="py-4 flex items-center gap-4">
                      <img
                        src="https://via.placeholder.com/60"
                        alt="product"
                        className="rounded"
                      />
                      <div>
                        <p className="font-medium text-gray-800">
                          Product Name
                        </p>
                        <p className="text-sm text-gray-500">
                          Color: Brown · Size: XL
                        </p>
                      </div>
                    </td>

                    <td className="text-gray-700">$32.00</td>

                    <td>
                      <input
                        type="number"
                        defaultValue={1}
                        className="w-16 border rounded px-2 py-1"
                      />
                    </td>

                    <td className="font-medium text-gray-800">$32.00</td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Cart Actions */}
            <div className="flex justify-between mt-6">
              <button className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600">
                Update Cart
              </button>
              <button className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600">
                Clear Cart
              </button>
            </div>
          </div>

          {/* RIGHT: Cart Summary */}
          <div className="space-y-6">
            {/* Cart Totals */}
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-lg font-semibold mb-4">Cart Totals</h2>

              <div className="flex justify-between text-sm mb-2">
                <span>Subtotal</span>
                <span>$219.00</span>
              </div>

              <div className="flex justify-between font-semibold mb-4">
                <span>Total</span>
                <span>$325.00</span>
              </div>

              <p className="text-xs text-gray-500 mb-4">
                Shipping & taxes calculated at checkout
              </p>

              <button className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600">
                Proceed to Checkout
              </button>
            </div>

            {/* Shipping Calculator */}
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-lg font-semibold mb-4">
                Calculate Shipping
              </h2>

              <input
                type="text"
                placeholder="Country"
                className="w-full border rounded px-3 py-2 mb-3"
              />
              <input
                type="text"
                placeholder="City"
                className="w-full border rounded px-3 py-2 mb-3"
              />
              <input
                type="text"
                placeholder="Postal Code"
                className="w-full border rounded px-3 py-2 mb-4"
              />

              <button className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600">
                Calculate Shipping
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
