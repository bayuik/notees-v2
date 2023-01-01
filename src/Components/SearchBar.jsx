import React from "react";
import { useLocation } from "react-router-dom";

const SearchBar = () => {
  const { pathname } = useLocation();

  return (
    <div className="search-bar">
      <h2>{pathname === "/" ? "Active" : "Archive"} Notes</h2>
      <input type="text" placeholder="Search by title ..." />
    </div>
  );
};

export default SearchBar;
