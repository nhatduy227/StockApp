import React from "react";
import Fade from "react-reveal/Fade";
import "./Stock.css";

export default function Stock(props) {
  function formatCurrency(num) {
    return "$" + Number(num.toFixed(1).toLocaleString() + " ");
  }
  return (
    <div>
      <Fade bottom cascade={true}>
        <ul className="stocks">
          {props.stocks.map((stock) => (
            <li key={stock.id}>
              <div className="stock">
                <img src={stock.image} alt={stock.title}></img>
                <p>{stock.title}</p>
                <div className="stock-price">
                  <div>{formatCurrency(stock.price)}</div>
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
