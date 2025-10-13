import React from "react";
import { IconButton } from "@mui/material";
import StorefrontIcon from "@mui/icons-material/Storefront";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="header__logo">
        <IconButton color="primary">
          <StorefrontIcon fontSize="large" className="header__logoImage" />
        </IconButton>
        <h2 className="header__logoTitle">eShop</h2>
      </div>
      <div className="header__search">
        <input
          type="text"
          className="header__searchInput"
          placeholder="Search"
        />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <div className="nav__items">
          <span className="nav__itemLineone">Hello Guest</span>
          <span className="nav__itemLinetwo">Sign In</span>
        </div>
        <div className="nav__items">
          <span className="nav__itemLineone">My</span>
          <span className="nav__itemLinetwo">Shop</span>
        </div>
        <IconButton color="primary">
          <ShoppingBasketIcon />
        </IconButton>
        <div className="nav__items">0</div>
      </div>
    </div>
  );
}

export default Header;
