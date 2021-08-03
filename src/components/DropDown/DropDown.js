import React from "react";

let tickers = ["appl", "tsla", "mmm", "abt"];

export default function DropDown() {
  return (
    <select name="tickers" id="dropdown-ticker">
      {tickers.map((ticker) => {
        return <option value={`${ticker}`}>{`${ticker}`}</option>;
      })}
    </select>
  );
}
