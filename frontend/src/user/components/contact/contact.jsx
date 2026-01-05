function Contact() {
  return (
    <div className="bg-white">
      {/* Header */}
      <div className="bg-[#F6F5FF] py-12 px-6 md:px-20">
        <h1 className="text-3xl font-bold text-[#0D0E43]">Contact Us</h1>
        <p className="text-sm text-gray-500 mt-2">
          Home · Pages · <span className="text-pink-500">Contact Us</span>
        </p>
      </div>

   

      <div className="px-6 md:px-20 py-20 grid md:grid-cols-2 gap-16">
      
        <div>
          <h2 className="text-2xl font-semibold text-[#0D0E43]">
            Information About us
          </h2>
          <p className="text-gray-500 mt-4 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque
            ultrices mattis aliquam, malesuada diam est.
          </p>

    
          <div className="flex gap-3 mt-6">
            <span className="w-3 h-3 rounded-full bg-purple-600"></span>
            <span className="w-3 h-3 rounded-full bg-pink-500"></span>
            <span className="w-3 h-3 rounded-full bg-green-400"></span>
          </div>

       
          <h2 className="text-2xl font-semibold text-[#0D0E43] mt-12">
            Get In Touch
          </h2>
          <p className="text-gray-500 mt-4 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque
            ultrices tristique.
          </p>

  
          <form className="mt-8 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your Name*"
                className="border border-gray-200 p-3 w-full outline-none"
              />
              <input
                type="email"
                placeholder="Your E-mail"
                className="border border-gray-200 p-3 w-full outline-none"
              />
            </div>

            <input
              type="text"
              placeholder="Subject*"
              className="border border-gray-200 p-3 w-full outline-none"
            />

            <textarea
              placeholder="Type Your Message*"
              className="border border-gray-200 p-3 w-full h-32 resize-none outline-none"
            ></textarea>

            <button className="bg-pink-500 text-white px-8 py-3 mt-2 hover:bg-pink-600 transition">
              Send Mail
            </button>
          </form>
        </div>

        {/* Right Section */}
        <div>
          <h2 className="text-2xl font-semibold text-[#0D0E43] mb-8">
            Contact Way
          </h2>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <span className="w-10 h-10 rounded-full bg-purple-600"></span>
              <div className="text-gray-600">
                <p>Tel: 877-67-88-99</p>
                <p>E-Mail: shop@store.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="w-10 h-10 rounded-full bg-pink-500"></span>
              <div className="text-gray-600">
                <p>Support Forum</p>
                <p>For over 24hr</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="w-10 h-10 rounded-full bg-orange-400"></span>
              <div className="text-gray-600">
                <p>20 Margaret st, London</p>
                <p>Great Britain, 3NM98-LK</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="w-10 h-10 rounded-full bg-green-400"></span>
              <div className="text-gray-600">
                <p>Free standard shipping</p>
                <p>on all orders.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
