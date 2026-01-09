import { NavLink, Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { HiMenu, HiX } from "react-icons/hi";
import { useState } from "react";
import { FaPhoneAlt, FaHeart, FaShoppingCart } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import Search from "./search/search";

function Navbar() {
  const [open, setOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    isActive
      ? "text-pink-500 font-semibold"
      : "hover:text-pink-500";

  const email = "mhhasanul@gmail.com";
  const phone = "1234567890";

  return (
    <>
      {/* ================= TOP INFO BAR (DESKTOP ONLY) ================= */}
      <div
        style={{ backgroundColor: "var(--light_navi)" }}
        className="w-full text-white text-sm hidden md:block"
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between py-3">

            {/* Left */}
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <IoMail />
                <a href={`mailto:${email}`} className="hover:text-gray-300">
                  {email}
                </a>
              </div>

              <div className="flex items-center gap-2">
                <FaPhoneAlt />
                <a href={`tel:${phone}`} className="hover:text-gray-300">
                  (12345) 67890
                </a>
              </div>
            </div>

            {/* Right */}
            <div className="flex items-center gap-5">
              <Link to="/login" className="hover:text-gray-300">
                Login
              </Link>

              <select className="bg-transparent outline-none cursor-pointer">
                <option className="text-black">English</option>
                <option className="text-black">Hindi</option>
              </select>

              <select className="bg-transparent outline-none cursor-pointer">
                <option className="text-black">USD</option>
                <option className="text-black">BDT</option>
              </select>

              <Link to="/wishlist" className="flex items-center gap-2 hover:text-gray-300">
                <FaHeart /> Wishlist
              </Link>

              <Link to="/cart" className="flex items-center gap-2 hover:text-gray-300">
                <FaShoppingCart /> Cart
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ================= MAIN NAVBAR ================= */}
      <div className="border-b bg-white">
        <nav className="flex justify-between items-center px-6 py-4">

          {/* Logo */}
          <h1 className="text-xl md:text-2xl font-bold">Hekto</h1>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-6 text-sm md:text-base">
            <NavLink to="/" className={linkClass}>Home</NavLink>
            <NavLink to="/products" className={linkClass}>Products</NavLink>
            <NavLink to="/about" className={linkClass}>About</NavLink>
            <NavLink to="/shop" className={linkClass}>Shop</NavLink>
            <NavLink to="/contact" className={linkClass}>Contact</NavLink>
          </div>
             

             <Search/>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-3xl"
            onClick={() => setOpen(!open)}
          >
            {open ? <HiX /> : <HiMenu />}
          </button>
        </nav>

        {/* ================= MOBILE MENU ================= */}
        {open && (
          <div className="md:hidden flex flex-col gap-3 px-6 pb-4 text-sm border-t bg-white">

            <NavLink to="/" onClick={() => setOpen(false)}>Home</NavLink>
            <NavLink to="/products" onClick={() => setOpen(false)}>Products</NavLink>
            <NavLink to="/blog" onClick={() => setOpen(false)}>Blog</NavLink>
            <NavLink to="/shop" onClick={() => setOpen(false)}>Shop</NavLink>
            <NavLink to="/contact" onClick={() => setOpen(false)}>Contact</NavLink>

            {/* Mobile Search (same UI) */}
            <div className="flex border rounded mt-2">
              <input
                className="px-3 py-2 w-full outline-none"
                placeholder="Search..."
              />
              <button
                style={{ backgroundColor: "var(--pink_color)" }}
                className="px-3 text-white"
              >
                <CiSearch />
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Navbar;
