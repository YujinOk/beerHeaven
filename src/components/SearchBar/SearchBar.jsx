import React from "react";
import styles from "./SearchBar.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const SearchBar = () => {
  return (
    <div className="searchBar">
      <input type="text" placeholder="Search products, brands or phrases" />
      <button type="submit">
        <FontAwesomeIcon icon={faSearch} />
      </button>
    </div>
  );
};

export default SearchBar;
