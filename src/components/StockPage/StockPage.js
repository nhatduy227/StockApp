import React, { useState, useEffect } from "react";
import Fade from "react-reveal/Fade";
import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";
import "./StockPage.css";
import db from "../../firebase";
// carousel imports
// not needed -> import "./App.css";
//import { useState } from "react";
import Slider from "react-slick";

//images
import microsoft from "./assets/ms.jpeg";
import apple from "./assets/apple.jpeg";
import fb from "./assets/fb.jpeg";
import amazon from "./assets/amazon.jpeg";
import capital from "./assets/capital.jpeg";
import coca from "./assets/coca.jpeg";
import hp from "./assets/hp.jpeg";
import inituit from "./assets/inituit.jpeg";
import intel from "./assets/intel.jpeg";
import martin from "./assets/martin.jpeg";
//

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

// export default function StockPage() {
//   const [stocks, setStocks] = useState([]);
//   const [search, setSearch] = useState("");
//   const [filter, setFilter] = useState("all");
//   useEffect(() => {
//     db.collection("stocks").onSnapshot((snapshot) => {
//       setStocks(
//         snapshot.docs.map((doc) => ({
//           id: doc.id,
//           image: doc.data().image,
//           score: doc.data().score,
//           title: doc.data().title,
//           sector: doc.data().sector,
//           symbol: doc.data().symbol,
//         }))
//       );
//     });
//   }, []);
//   function handleSearch(e) {
//     console.log(e.target.value);
//     setSearch(e.target.value);
//   }

//   function filterBySearch(array) {
//     const filtered_by_search = array.filter((s) =>
//       s.title.toLowerCase().includes(search.toLowerCase())
//     );
//     return filter === "all"
//       ? filtered_by_search
//       : filtered_by_search.filter((s) => s.sector.toLowerCase() === filter);
//   }
//   function compareScore(a, b) {
//     if (a.score > b.score) return -1;
//     if (a.score < b.score) return 1;
//     return 0;
//   }

//   function TopStock({ stocks }) {
//     const topstocks = stocks.filter((s) => s.score > 70).sort(compareScore);
//     return <Stock stocks={topstocks} />;
//   }
//   function Stock({ stocks }) {
//     if (stocks.length === 0) {
//       return <h2>No Matching Stock</h2>;
//     }
//     return (
//       <div>
//         <Fade bottom cascade={true}>
//           <ul className="stocks">
//             {stocks.map((stock) => (
//               <li key={stock.id}>
//                 <div className="stock">
//                   <img src={stock.image} alt={stock.title}></img>
//                   <p>
//                     {stock.title} - {stock.sector}
//                   </p>
//                   <div className="stock-price">
//                     <div>{stock.score}</div>
//                     <Link
//                       to={{
//                         pathname: `/graphpage/${stock.symbol}`,
//                       }}
//                       className="nav-links"
//                     >
//                       <button className="button primary">
//                         View Stock in detail
//                       </button>
//                     </Link>
//                   </div>
//                 </div>
//               </li>
//             ))}
//           </ul>
//         </Fade>
//       </div>
//     );
//   }
//   function Filter() {
//     return (
//       <section id="Filters">
//         <select value={filter} onChange={(e) => setFilter(e.target.value)}>
//           <option value="all">All</option>
//           <option value="energy">Energy</option>
//           <option value="financials">Financials</option>
//           <option value="industrials">Industrials</option>
//           <option value="real estate">Real Estate</option>
//           <option value="consumer staples">Consumer Staples</option>
//           <option value="consumer discretionary">Consumer Discretionary</option>
//           <option value="information technology">Information Technology</option>
//           <option value="health care">Health Care</option>
//           <option value="utilities">Utilities</option>
//         </select>
//       </section>
//     );
//   }
//   return (
//     <div>
//       <div className="filter-div">
//         <SearchBar onChange={handleSearch} value={search} />
//         {search === "" ? null : <Filter />}
//       </div>
//       {search === "" ? null : <Stock stocks={filterBySearch(stocks)} />}
//       <div className="trending-div">
//         <h1>Top Trending</h1>
//         {/* <TopStock stocks={stocks} /> */}

//       </div>
//     </div>
//   );
// }
