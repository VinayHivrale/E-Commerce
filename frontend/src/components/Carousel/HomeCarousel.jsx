import React from "react";
import Slider from "react-slick";
import Data from "../Carousel/CarouselData";
import "./Carousel.css";
import { IconButton } from "@mui/material";
import { NavigateNext, NavigateBefore } from "@mui/icons-material";


// Function to generate a random color
const generateRandomColor = () => {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
};

const CustomNextArrow = (props) => {
  const { onClick } = props;
  return (
    <button className="custom-next-arrow" onClick={onClick} style={{ position: "absolute", right: "10px", top: "50%", transform: "translateY(-50%)", zIndex: 1, boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.5)", backgroundColor: 'white', border: 'none', borderRadius: '50%', padding: '5px' }}>
      <NavigateNext />
    </button>
  );
};

const CustomPrevArrow = (props) => {
  const { onClick } = props;
  return (
    <button className="custom-prev-arrow" onClick={onClick} style={{ position: "absolute", left: "10px", top: "50%", transform: "translateY(-50%)", zIndex: 1, boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.5)", backgroundColor: 'white', border: 'none', borderRadius: '50%', padding: '5px' }}>
      <NavigateBefore />
    </button>
  );
};

function HomeCarousel() {
  const settings = {
    dots: false,
    infinite: true,
    fade: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    cssEase: "linear",
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };


  return (
    <div className="slider-container w-full h-[550px] relative">
      <Slider {...settings}>
        {Data.map((data, i) => (
          <div className="my-6">
            <div className="w-full h-full p-3 bg-slate-400 overflow-hidden">
              <img className="w-full h-[500px] object-cover object-center" src={data.image} alt="Your Image" />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default HomeCarousel;

  {/* <div
             key={data.id}
             className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl dark:bg-gray-800 bg-primary/10 relative"
           >
             <div className="mb-4">
               <img
                 src={data.image}
                 alt=""
                 className="rounded-full w-20 h-20"
               />
             </div>
             <div className="flex flex-col items-center gap-4">
               <div className="space-y-3">
                 <p className="text-xs text-gray-500">dfndghdghdgndgndgn</p>
                 <h1 className="text-xl font-bold text-black/80 dark:text-light">
                   sfgndfndghnghndgdghngh
                 </h1>
               </div>
             </div>
             <p className="text-black/20 text-9xl font-serif absolute top-0 right-0">
               ,,
             </p>
           </div> */}
