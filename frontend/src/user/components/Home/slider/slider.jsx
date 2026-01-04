import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

function Slider() {

const sliderData = [

  {
    id: 1,
    lamp: "../../../../../public/home/slider.jsx/lamp.png",
    sofa: "../../../../../public/home/slider.jsx/sofa.png",
    subtitle: "Best Furniture For Your Castle...",
    title1: "New Furniture Collection",
    title2: "Trends in 2020",
    desc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },

  {
    id: 2,
     lamp: "../../../../../public/home/slider.jsx/lamp.png",
    sofa: "../../../../../public/home/slider.jsx/sofa.png",
    subtitle: "Top Quality Designs",
    title1: "Modern Furniture",
    title2: "Trends in 2021",
    desc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },

  {
    id: 3,
      lamp: "../../../../../public/home/slider.jsx/lamp.png",
    sofa: "../../../../../public/home/slider.jsx/sofa.png",
    subtitle: "Best Choice For Home",
    title1: "Luxury Furniture",
    title2: "Trends in 2022",
    desc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  }
  
];


  return (
    <Swiper
      modules={[Autoplay]}
      slidesPerView={1}
      loop={true}
      autoplay={{ delay: 3500, disableOnInteraction: false }}
      className="bg-[#eeeffb]"
    >
      {sliderData.map((item) => (
        <SwiperSlide key={item.id}>
          <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-3 items-center gap-10">

            {/* Lamp */}
            <div className="flex justify-center md:justify-start">
              <img src={item.lamp} alt="Lamp" className="w-24 md:w-32" />
            </div>

         
            <div className="text-center md:text-left">
              <p className="text-pink-600 font-medium mb-2">
                {item.subtitle}
              </p>

              <h2 className="text-3xl md:text-5xl font-bold">
                {item.title1}
              </h2>
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                {item.title2}
              </h2>

              <p className="text-gray-500 mb-6 max-w-md">
                {item.desc}
              </p>

              <button className="bg-pink-600 text-white px-6 py-3 rounded">
                Shop Now
              </button>
            </div>

            {/* Sofa */}
            <div className="flex justify-center relative">
              <div className="absolute w-72 h-72 bg-pink-100 rounded-full -z-10"></div>
              <img src={item.sofa} alt="Sofa" className="w-64 md:w-80" />
            </div>

          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Slider;
