import React, { useState, useEffect } from "react";
import useFetch from "react-fetch-hook";
import Stock from "./components/Stock/Stock";
import SearchBar from "./components/SearchBar/SearchBar";
import DropDown from "./components/DropDown/DropDown";
import "./App.css";
import db from "./firebase";

// import firebase from "firebase";

function App() {
  const [stocks, setStocks] = useState([]);
  const apiKey = process.env.ALPHA_VANTAGE_API_KEY
  const url =
    `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=${apiKey}`;
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

  const { data } = useFetch(url);
  console.log(data);

  return (
    <div className="grid-container">
      <header>
        <a href="/">StockApp</a>
      </header>
      <main>
        <div className="content">
          <div className="main">
            <SearchBar />
            <DropDown />
            <Stock stocks={stocks} />
          </div>
        </div>
      </main>
      <footer>All right is reserved.</footer>
    </div>
  );
}

export default App;
