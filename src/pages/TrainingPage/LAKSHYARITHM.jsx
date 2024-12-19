import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image from "./image.jpeg";

const LAKSHYARITHM = () => {
  const settings = {
    dots: true, // Enable dots for navigation
    infinite: true, // Infinite looping
    speed: 500, // Transition speed in ms
    slidesToShow: 1, // Show one slide at a time
    slidesToScroll: 1, // Scroll one slide at a time
    arrows: false, // Disable navigation arrows
    autoplay: true, // Enable autoplay
    autoplaySpeed: 2000, // Transition every 2 seconds
  };

  const obj = [
    {
      image: image,
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis alias, soluta nostrum assumenda nobis excepturi cupiditate fugit ipsa officiis nam perferendis culpa libero, ipsum quos maiores at ratione, modi quidem.",
    },
    {
      image:
        image,
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis alias, soluta nostrum assumenda nobis excepturi cupiditate fugit ipsa officiis nam perferendis culpa libero, ipsum quos maiores at ratione, modi quidem.",
    },
  ];

  return (
    <>
    
    <div className="flex space-x-12 items-end justify-center mt-28">
      {/* Slider Section */}
      <Slider
        className="bg-color-2 rounded-xl flex justify-center items-center px-8 w-[407px] h-[347.31px]"
        {...settings}
      >
        {obj.map((element, index) => (
          <div key={index} className="relative  rounded-xl">
            {" "}
            {/* Make this container relative */}
            <img
              src={element.image}
              alt={`Slide ${index + 1}`}
              className="w-[350.88px] h-[277.65px] object-cover rounded-xl"
            />
            {/* Absolute div placed over the image */}
            <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center bg-opacity-50">
              <div className="w-20 h-20 rounded-full bg-color-1"></div>

              <h1 className="text-sm pl-8 text-white p-4">{element.content}</h1>
            </div>
          </div>
        ))}
      </Slider>
      {/* Static Section */}
      <div>
        <h1 className="text-5xl text-white text-center pb-8">LAKSHYARITHM</h1>
        <div className="flex space-x-5">
          {Array(4)
            .fill(null)
            .map((_, i) => (
              <div
                key={i}
                className="bg-color h-[222px] w-[160px] flex flex-col px-3 justify-evenly items-center text-white rounded-xl"
              >
                <h1 className="font-serif">Title</h1>
                <div className="w-12 h-12 rounded-full bg-color-1"></div>
                <p className="text-[10px] pl-3 tracking-wider">
                  Lorem, ipsum dolor sit amet consectetur
                </p>
              </div>
            ))}
        </div>
      </div>
    </div>
          <h1 className="px-12 pt-20 text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam odit doloribus illum! Nihil corporis deserunt eum voluptatibus aliquam ipsa ab harum incidunt libero dolores, nulla, ad odio? Voluptates, labore rerum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam odit doloribus illum! Nihil corporis deserunt eum voluptatibus aliquam ipsa ab harum incidunt libero dolores, nulla, ad odio? Voluptates, labore rerum.</h1>

          </>
  );
};

export default LAKSHYARITHM;
