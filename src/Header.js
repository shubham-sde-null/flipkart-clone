import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { NavLink } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();
  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };
  console.log("this is header", user);
  return (
    <div className="header ">
      <NavLink to="/">
        <div className="header__logo">
          <img
            src="https://www.linkpicture.com/q/flipkartUse.png"
            alt="company logo"
          />
        </div>{" "}
      </NavLink>{" "}
      <div className="header__search ">
        <input type="text" placeholder="Search for products,brands and more" />
        <SearchIcon className="header__searchIcon" />
      </div>
      <div>
        <div className="header__nav ">
          <NavLink to={!user && "/login"}>
            <div onClick={handleAuthentication} className="header__login">
              <span className="header__navLogin">
                {user ? user.email : "Hello"}
              </span>
              <span
                style={{ marginLeft: "10px" }}
                className="header__navLogin2"
              >
                {user ? "Sign Out" : "Sign In"}
              </span>
            </div>
          </NavLink>
          <NavLink to="/becomeseller">
            <div className="header__becomeASeller">
              <span className="header__navBecomeSeller"> Become a seller </span>
            </div>
          </NavLink>
          <NavLink to="/more">
            <div className="header__more">
              <span className="header__navMore"> More </span>
            </div>
          </NavLink>
          <NavLink to="/cart">
            <div className="header__cart">
              <ShoppingCartIcon />
              <sup className="header__cartCounter"> {basket.length} </sup>{" "}
              <span className="header__navCart"> Cart </span>{" "}
            </div>{" "}
          </NavLink>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}

export default Header;
