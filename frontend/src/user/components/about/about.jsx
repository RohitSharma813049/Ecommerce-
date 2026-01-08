import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="bg-gray-50">
      {/* Page Header */}
      <div className="bg-indigo-50 py-10">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-3xl font-bold text-gray-800">About Us</h1>
          <p className="text-sm text-gray-500 mt-2">
            Home <span className="mx-1">/</span> Pages <span className="mx-1">/</span>{" "}
            <span className="text-indigo-600">About Us</span>
          </p>
        </div>
      </div>

      {/* About Section */}
      <section className="max-w-7xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-10 items-center">
        {/* Image */}
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1551836022-d5d88e9218df"
            alt="Business discussion"
            className="rounded-lg shadow-lg"
          />
          <div className="absolute -left-4 -bottom-4 w-full h-full border-4 border-indigo-600 rounded-lg -z-10"></div>
        </div>

        {/* Content */}
        <div>
          <h2 className="text-2xl font-bold text-indigo-600 mb-4">
            Know About Our Ecommerce Business, History
          </h2>
          <p className="text-gray-600 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestiae
            possimus modi, consectetur dignissimos magni error est vitae optio
            doloribus.
          </p>
          <Link to={"/contact"}>
           <button className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-md transition cursor-pointer">
            Contact Us
          </button>
          </Link>
        </div>
      </section>

      <section className="border-t border-b py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h3 className="text-center text-2xl font-bold mb-12">Our Features</h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Free Delivery", icon: "🚚" },
              { title: "100% Cash Back", icon: "💰" },
              { title: "Quality Product", icon: "🏆" },
              { title: "24/7 Support", icon: "📞" },
            ].map((feature, index) => (
              <div
                key={index}
                className="text-center p-6 border rounded-lg hover:shadow-lg transition"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h4 className="font-semibold text-lg mb-2">{feature.title}</h4>
                <p className="text-gray-500 text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto text-center px-4">
          <h3 className="text-2xl font-bold mb-8">Our Client Say!</h3>

          <img
            src="https://randomuser.me/api/portraits/women/44.jpg"
            alt="Client"
            className="w-20 h-20 rounded-full mx-auto mb-4"
          />
          <h4 className="font-semibold">Selina Gomez</h4>
          <p className="text-gray-600 mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non ducimus
            cum vel distinctio aliquid sed.
          </p>

          {/* Dots */}
          <div className="flex justify-center mt-6 space-x-2">
            <span className="w-2 h-2 bg-indigo-600 rounded-full"></span>
            <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
            <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
