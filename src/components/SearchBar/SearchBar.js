import React from "react";
import "./SearchBar.css";

export default function SearchBar({onChange, value}) {
  
  
  return (
    <div className="searchbar">
      <input
        onInput={onChange}
        value={value}
        placeholder="Search for a Stock"
      />
    </div>
  );
}
