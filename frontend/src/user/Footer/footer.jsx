import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="bg-[#eeeffb] py-10">
      <div className="w-[90%] md:w-[70%] mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">

        <div>
          <h1 className="text-xl md:text-2xl font-bold mb-3">Hekto</h1>

<div className="flex w-full max-w-md overflow-hidden rounded border focus-within:ring-2 focus-within:ring-pink-400">
  <input
    type="email"
    placeholder="Enter Email"
    className="flex-1 px-3 py-2 text-sm outline-none"
  />
  <button
    className="px-4 text-white text-sm transition"
    style={{ backgroundColor: "var(--pink_color)" }}
  >
    Sign Up
  </button>
</div>


          <p className="text-sm text-gray-600 mt-3">
            17 Princess Road, London NW1
          </p>
        </div>


        <div>
          <h2 className="font-bold mb-2">Categories</h2>
          <div className="flex flex-col text-sm space-y-1">
            <Link className="hover:text-pink-500">Laptop</Link>
            <Link className="hover:text-pink-500">Camera</Link>
            <Link className="hover:text-pink-500">Smartphones</Link>
            <Link className="hover:text-pink-500">Games</Link>
            <Link className="hover:text-pink-500">Headphones</Link>
          </div>
        </div>

   
        <div>
          <h2 className="font-bold mb-2">Customer Care</h2>
          <div className="flex flex-col text-sm space-y-1">
            <Link>My Account</Link>
            <Link>Returns</Link>
            <Link>Orders</Link>
            <Link>Tracking</Link>
          </div>
        </div>


        <div>
          <h2 className="font-bold mb-2">Pages</h2>
          <div className="flex flex-col text-sm space-y-1">
            <Link>Blog</Link>
            <Link>Shop</Link>
            <Link>Category</Link>
            <Link>WooCommerce</Link>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Footer;
