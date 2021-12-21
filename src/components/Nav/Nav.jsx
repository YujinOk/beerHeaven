import React from "react";
import styles from "./Nav.module.scss";
import SearchBar from "../SearchBar/SearchBar";

const Nav = () => {
  return (
    <div className={styles.navContainer}>
      <div className={styles.searchBar}>
        <SearchBar />
      </div>

      <nav className={styles.nav}>
        <a href="#">New</a>
        <a href="#">Wine</a>
        <a href="#">Spirits</a>
        <a href="#">Beer</a>
        <a href="#">Cider</a>
        <a href="#">Premix</a>
        <a href="#">Non & Low Alcohol</a>
        <a href="#">Gifts & Occasions</a>
        <a href="#">Offers</a>
      </nav>
    </div>
  );
};

export default Nav;
