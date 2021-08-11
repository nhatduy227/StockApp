import React, { useState, useEffect } from "react";
import Fade from "react-reveal/Fade";
import SearchBar from "../SearchBar/SearchBar";
import "./StockPage.css";
import db from "../../firebase";

export default function StockPage() {
  const [stocks, setStocks] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    db.collection("stocks").onSnapshot((snapshot) => {
      setStocks(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          image: doc.data().image,
          score: doc.data().score,
          title: doc.data().title,
        }))
      );
    });
  }, []);
  function handleSearch(e) {
    console.log(e.target.value);
    setSearch(e.target.value);
  }
  function filterBySearch(array) {
    const filtered_by_search = array.filter((s) =>
      s.title.toLowerCase().includes(search.toLowerCase())
    );
    return filtered_by_search;
  }
  function Stock({ stocks }) {
    return (
      <div>
        <Fade bottom cascade={true}>
          <ul className="stocks">
            {stocks.map((stock) => (
              <li key={stock.id}>
                <div className="stock">
                  <img src={stock.image} alt={stock.title}></img>
                  <p>{stock.title}</p>
                  <div className="stock-price">
                    <div>{stock.score}</div>
                    <button className="button primary">
                      View Stock in detail
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </Fade>
      </div>
    );
  }
  return (
    <>
      <SearchBar onChange={handleSearch} value={search} />
      <Stock stocks={filterBySearch(stocks)} />
    </>
  );
}
