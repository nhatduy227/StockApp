import React from "react";
import "./SearchBar.css";

export default function SearchBar() {
  return (
    <div className="searchbar">
      <input
        type="text"
        id="header-search"
        placeholder="Search for a Stock"
        name="s"
      />
    </div>
  );
}
