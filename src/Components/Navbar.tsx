import logo from "../assets/images/logo.svg";
import { useState } from "react";
import "./Navbar.css";

export function Navbar() {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const closeClick = () => {
    setIsMenuVisible(false);
  };

  const hamburgerClick = () => {
    setIsMenuVisible(true);
    console.log("I did it!");
  };

  return (
    <>
      {/* Wrapper container */}
      <div className="navbar-container">
        <img src={logo} alt={logo}></img>
        {/* Hamburger lines */}
        <div className="menutoggle">
          {/* Menu items */}
          <button type="button" className="buttonmenu" onClick={hamburgerClick}>
            U
          </button>
          <div>
            <ul
              className="navmenu"
              style={{ visibility: isMenuVisible ? "visible" : "hidden" }}
            >
              <div className="close-menu">
                <h3 onClick={closeClick}>X</h3>
              </div>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#news">New</a>
              </li>
              <li>
                <a href="#popular">Popular</a>
              </li>
              <li>
                <a href="#trending">Trending</a>
              </li>
              <li>
                <a href="#categories">Categories</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
