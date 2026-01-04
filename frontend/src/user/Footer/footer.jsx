import { Link } from "react-router-dom";

function Footer() {
  return (
   <div
        className="h-full  grid place-items-center md:h-full md:w-full md:bg-[#eeeffb] lg:h-[50vh] lg:px-10 "
        style={{ backgroundColor: "var(--sky_blue)" }}
      >
        <div className="flex flex-col md:flex-row w-[90vw] lg:w-[80vw] md:w-screen justify-around items-start md:gap-8 lg:gap-12">
          <div>
            <div className=" flex flex-col space-y-6 p-1 md:p-1 ">
              <div className="font-bold">
                <h1 className="text-2xl lg:text-4xl">Hekto</h1>
              </div>
              <div className="flex gap-1 w-full max-w-md flex-wrap md:flex-nowrap lg:flex-nowrap">
                <input
                  className="border-2 text-gray-400 border-white bg-white rounded px-2 flex-1 lg:px-4"
                  type="text"
                  placeholder="Enter Email Address"
                />
                <button className=" text-white border-2 border-[#FB2E86] bg-[#FB2E86] rounded px-4 py-1 cursor-pointer lg:px-6 lg:py-2">
                  Sign Up
                </button>
              </div>
            </div>
            <div className="mt-4 ml-1">
              <p className="text-gray-600">contact info</p>
              <p className="text-gray-600">
                17 Princess Road, London,Greater London NW1 8JR, UK
              </p>
            </div>
          </div>

          <div className="flex flex-col space-y-2 lg:flex lg:flex-col ml-1 md:ml-5 mt-6 md:mt-0 lg:mt-0">
              <h1 className=" text-2xl font-bold mt-2 md:mt-0">Catagories</h1>
            <div className="flex flex-col mt-2">
              <Link className="hover:text-pink-500">
                <span>Laptop & Computers</span>
              </Link>
              <br />
              <Link className="hover:text-pink-500">
                <span>Camera & Photography</span>
              </Link>
              <br />
              <Link className="hover:text-pink-500">
                <span>Smart Phones & Tablets</span>
              </Link>
              <br />
              <Link className="hover:text-pink-500">
                <span>Video Games & Consoles</span>
              </Link>
              <br />
              <Link className="hover:text-pink-500">
                <span>Waterproof Headphones</span>
              </Link>
            </div>
          </div>

          <div className="flex flex-col space-y-2 ml-1  md:ml-5 mt-6 md:mt-0">
            <h2 className=" text-2xl font-bold mt-4 md:mt-0">Customer Care</h2>

            <div className="flex flex-col mt-2">
              <Link className="hover:text-pink-500">
                <span>My Account</span>
              </Link>
              <br />
              <Link className="hover:text-pink-500">
                <span>Discount</span>
              </Link>
              <br />
              <Link className="hover:text-pink-500">
                <span>Returns</span>
              </Link>
              <br />
              <Link className="hover:text-pink-500">
                <span>Order History</span>
              </Link>
              <br />
              <Link className="hover:text-pink-500">
                <span>Order Tracking</span>
              </Link>
            </div>
          </div>

          <div className="flex flex-col space-y-2 ml-1 md:ml-5 mt-6 md:mt-0">
            <h2 className=" text-2xl font-bold mt-2 md:mt-0">Pages</h2>

            <div className="flex flex-col mt-1 ">
              <Link className="hover:text-pink-500">
                <span className="mt-1">Blog</span>
              </Link>
              <br />
              <Link className="hover:text-pink-500">
                <span>Browse the shop</span>
              </Link>
              <br />
              <Link className="hover:text-pink-500">
                <span>Category</span>
              </Link>
              <br />
              <Link className="hover:text-pink-500">
                <span>Pre-Build Pages</span>
              </Link>
              <br />
              <Link className="hover:text-pink-500">
                <span>Visual Composer Elements</span>
              </Link>
              <br />
              <Link className="hover:text-pink-500">
                <span>WooCommerce Pages</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
  );
}

export default Footer;
