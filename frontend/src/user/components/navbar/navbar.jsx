import { NavLink } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { HiMenu, HiX } from "react-icons/hi";
import { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    isActive
      ? "text-pink-500 font-semibold"
      : "hover:text-pink-500";

  return (
    <div className="border-b">
      <nav className="flex justify-between items-center px-6 py-4">

  
        <h1 className="text-xl md:text-2xl font-bold">Hekto</h1>

     
        <div className="hidden md:flex gap-6 text-sm md:text-base">
          <NavLink to="/" className={linkClass}>Home</NavLink>
          <NavLink to="/page" className={linkClass}>Page</NavLink>
          <NavLink to="/products" className={linkClass}>Products</NavLink>
          <NavLink to="/blog" className={linkClass}>Blog</NavLink>
          <NavLink to="/shop" className={linkClass}>Shop</NavLink>
          <NavLink to="/contact" className={linkClass}>Contact</NavLink>
        </div>

        {/* Search */}
        <div className="hidden md:flex border rounded">
          <input
            className="px-3 py-1 outline-none text-sm"
            placeholder="Search..."
          />
          <button
            style={{ backgroundColor: "var(--pink_color)" }}
            className="px-3 text-white"
          >
            <CiSearch />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-3xl"
          onClick={() => setOpen(!open)}
        >
          {open ? <HiX /> : <HiMenu />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden flex flex-col gap-3 px-6 pb-4 text-sm">
          <NavLink to="/" onClick={() => setOpen(false)}>Home</NavLink>
          <NavLink to="/page" onClick={() => setOpen(false)}>Page</NavLink>
          <NavLink to="/products" onClick={() => setOpen(false)}>Products</NavLink>
          <NavLink to="/blog" onClick={() => setOpen(false)}>Blog</NavLink>
          <NavLink to="/shop" onClick={() => setOpen(false)}>Shop</NavLink>
          <NavLink to="/contact" onClick={() => setOpen(false)}>Contact</NavLink>

          <div className="flex border rounded mt-2">
            <input className="px-3 py-1 w-full" placeholder="Search..." />
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
  );
}

export default Navbar;
