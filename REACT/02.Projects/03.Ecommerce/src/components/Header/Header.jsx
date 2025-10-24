import React from "react";
import { IconButton } from "@mui/material";
import StorefrontIcon from "@mui/icons-material/Storefront";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { Link } from "react-router-dom";
import "./Header.css";
import NavItem from "../NavItems/NavItems";

function Header() {
  // TODO: wire up real basket count and user state later
  const basketCount = 0;

  return (
    <header className="header">
      <Link
        to="/"
        className="header__logoLink"
        style={{ textDecoration: "none" }}
        aria-label="Homepage"
      >
        <div className="header__logo">
          <IconButton color="primary" aria-label="eShop logo">
            <StorefrontIcon fontSize="large" className="header__logoImage" />
          </IconButton>
          <h2 className="header__logoTitle">eShop</h2>
        </div>
      </Link>

      <div className="header__search" role="search">
        <input
          type="search"
          className="header__searchInput"
          placeholder="Search products"
          aria-label="Search products"
        />
        <SearchIcon className="header__searchIcon" aria-hidden="true" />
      </div>

      <nav className="header__nav" aria-label="Main navigation">
        <NavItem lineOne="Hello Guest" lineTwo="Sign In" />
        <NavItem lineOne="My" lineTwo="Shop" />

        <Link
          to="/checkout"
          style={{ textDecoration: "none" }}
          aria-label="Checkout"
        >
          <div className="header__basket">
            <IconButton color="primary" aria-label="Shopping basket">
              <ShoppingBasketIcon />
            </IconButton>
            <div className="nav__items nav__basketCount">{basketCount}</div>
          </div>
        </Link>
      </nav>
    </header>
  );
}

export default Header;
