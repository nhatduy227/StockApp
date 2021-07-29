import React, { useState, useEffect } from "react";
import Stock from "./components/Stock/Stock";
import SearchBar from "./components/SearchBar/SearchBar";
import "./App.css";
import db from "./firebase";
// import firebase from "firebase";

function App() {
  const [stocks, setStocks] = useState([]);
  useEffect(() => {
    db.collection("stocks").onSnapshot((snapshot) => {
      setStocks(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          image: doc.data().image,
          price: doc.data().price,
          title: doc.data().title,
        }))
      );
    });
  }, []);
  

  return (
    <div className="grid-container">
      <header>
        <a href="/">StockApp</a>
      </header>
      <main>
        <div className="content">
          <div className="main">
            <SearchBar />
            <Stock stocks={stocks} />
          </div>
        </div>
      </main>
      <footer>All right is reserved.</footer>
    </div>
  );
}

export default App;
