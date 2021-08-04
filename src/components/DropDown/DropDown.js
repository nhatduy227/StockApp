import React from "react";
const tickers = require('../../data/tickers.json')

export default function DropDown() {
  return (
    <select name="tickers" id="dropdown-ticker">
      {tickers.map((ticker) => {
        return <option value={`${ticker}`}>{`${ticker}`}</option>;
      })}
    </select>
  );
}
