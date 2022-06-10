import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { NavLink } from "react-router-dom";
function Header() {
  return (
    <div className="header">
      <NavLink to="/">
        <div className="header__logo">
          <img
            src="https://www.linkpicture.com/q/flipkartUse.png"
            alt="company logo"
          />
        </div>
      </NavLink>

      <div className="header__search">
        <input type="text" placeholder="Search for products,brands and more" />
        <SearchIcon className="header__searchIcon" />
      </div>
      <div>
        <div className="header__nav">
          <NavLink to="/login">
            <div className="header__login">
              <span className="header__navLogin">Login</span>
            </div>
          </NavLink>
          <NavLink to="/becomeseller">
            <div className="header__becomeASeller">
              <span className="header__navBecomeSeller">Become a seller</span>
            </div>
          </NavLink>
          <NavLink to="/more">
            <div className="header__more">
              <span className="header__navMore">More</span>
            </div>
          </NavLink>

          <NavLink to="/cart">
            <div className="header__cart">
              <ShoppingCartIcon />
              <span className="header__navCart">Cart</span>
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Header;
