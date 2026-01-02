import { IoMail } from "react-icons/io5";
import { FaPhoneAlt, FaHeart, FaShoppingCart } from "react-icons/fa";

function Navbar1() {
  const email = "mhhasanul@gmail.com";
  const phone = "1234567890";

  return (
    <div
      style={{ backgroundColor: "var(--light_navi)" }}
      className="w-full text-white text-sm"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col gap-3 py-3
                        md:flex-row md:items-center md:justify-between">

          {/* Left: Email + Phone */}
          <div className="flex flex-col gap-2 md:flex-row md:items-center md:gap-6">
            
            <div className="flex items-center gap-2">
              <IoMail className="text-base" />
              <a
                href={`mailto:${email}`}
                className="hover:text-gray-300"
              >
                {email}
              </a>
            </div>

            <div className="flex items-center gap-2">
              <FaPhoneAlt className="text-sm" />
              <a
                href={`tel:${phone}`}
                className="hover:text-gray-300"
              >
                (12345) 67890
              </a>
            </div>

          </div>

          {/* Right actions */}
          <div className="flex flex-wrap items-center gap-5">

            <span className="cursor-pointer hover:text-gray-300">
              Login
            </span>

            <select className="bg-transparent outline-none cursor-pointer text-white">
              <option className="text-black">English</option>
              <option className="text-black">Bangla</option>
            </select>

            <select className="bg-transparent outline-none cursor-pointer text-white">
              <option className="text-black">USD</option>
              <option className="text-black">BDT</option>
            </select>

            <span className="flex items-center gap-2 cursor-pointer hover:text-gray-300">
              <FaHeart />
              Wishlist
            </span>

            <span className="flex items-center gap-2 cursor-pointer hover:text-gray-300">
              <FaShoppingCart />
              Cart
            </span>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar1;
