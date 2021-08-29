import React, { useState } from "react";
import './TopTrending.css'
// carousel imports
// not needed -> import "./App.css";
//import { useState } from "react";
import Slider from "react-slick";

//images
import microsoft from "./assets/ms.jpeg";
import apple from "./assets/apple.jpeg";
import fb from "./assets/fb.jpeg";
import amazon from "./assets/amazon.jpeg";
import capital from "./assets/capitol.jpeg"
import coca from "./assets/coca.jpeg";
import hp from "./assets/hp.jpeg";
import inituit from "./assets/intuit.jpeg";
import intel from "./assets/intel.jpeg";
import martin from "./assets/martin.jpeg";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const images = [
  microsoft,
  apple,
  fb,
  amazon,
  capital,
  coca,
  hp,
  inituit,
  intel,
  martin,
];

const titles = [
  "Microsoft",
  "Apple",
  "Facebook",
  "Amazon",

  "CapitalOne",
  "Cocacola",
  "HewlettPackard",
  "Inituit",
  "Intel",
  "LockheedMartin",
];

const ranks = [92, 96, 94, 96, 91, 92, 94, 99, 97, 95];

const linksss = [
  "https://www.google.com/",
  "https://www.google.com/",
  "https://www.google.com/",
  "https://www.google.com/",
  "https://www.google.com/",
  "https://www.google.com/",
  "https://www.google.com/",
  "https://www.google.com/",
  "https://www.google.com/",
  "https://www.google.com/",
];

function StockPage() {
  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <FaArrowRight />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        <FaArrowLeft />
      </div>
    );
  };

  const [imageIndex, setImageIndex] = useState(0);

  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 600,
    slidesToShow: 3,
    slideTraySize: useState.slideTraySize,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    dots: true,
    beforeChange: (current, next) => setImageIndex(next),
  };

  return (
    <div className="App">
      {" "}
      <h3 className="companies">
        Top Trending Information Technology Companies
      </h3>
      <Slider {...settings}>
        {images.map((img, idx) => (
          <div>
            <div className={idx === imageIndex ? "slide activeSlide" : "slide"}>
              <a href={linksss[idx]}>
                <img src={img} alt={img} />
              </a>
            </div>

            <p
              style={{
                textAlign: "center",
                fontWeight: "bold",
                marginLeft: "4%",
              }}
            >
              {titles[idx]}
            </p>
            <p
              style={{
                textAlign: "center",
                fontWeight: "bold",
                marginLeft: "4%",
              }}
            >
              {ranks[idx]}
            </p>
            {/*  if you want to add buttons */}
            {/* <button className="button primary btn btn-small">
              {" "}
              View Stock{" "}
            </button> */}
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default StockPage;