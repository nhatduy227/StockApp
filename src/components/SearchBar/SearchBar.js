import React from "react";
import "./SearchBar.css";

export default function SearchBar({ onChange, value }) {
  return (
    <input
      className="searchbar"
      onInput={onChange}
      value={value}
      placeholder="Search for a Stock..."
    />
  );
}
