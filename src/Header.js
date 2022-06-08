import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
function Header() {
  return (
    <div className="header">
      <div className="header__logo">
        <img
          src="https://www.linkpicture.com/q/flipkartUse.png"
          alt="company logo"
        />
      </div>
      <div className="header__search">
        <input type="text" placeholder="Search for products,brands and more" />
        <SearchIcon className="header__searchIcon" />
      </div>
      <div>
        <div className="header__nav">
          <div className="header__login">
            <span>Login</span>
          </div>
          <div className="header__becomeASeller">
            <span>Become a seller</span>
          </div>
          <div className="header__more">
            <span>More</span>
          </div>
          <div className="header__cart">
            <ShoppingCartIcon />
            <span>Cart</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
