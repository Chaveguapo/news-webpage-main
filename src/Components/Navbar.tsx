import logo from "../assets/images/logo.svg";
import { useState } from "react";
import "./Navbar.css";

export function Navbar() {
  const [isMenuOpen, setIsMenuIsOpen] = useState(false);

  const toogleMenu = () => {
    setIsMenuIsOpen(!isMenuOpen);
  };
  return (
    <>
      <header className="navbar-container">
        <img src={logo} alt={logo}></img>
        <div
          className={`hamburger-menu ${isMenuOpen ? "open" : ""}`}
          onClick={toogleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className={`navmenu ${isMenuOpen ? "open" : ""}`}>
          <li>
            <a href="#home">Home</a>
          </li>
          <li className="navlink">
            <a href="#news">New</a>
          </li>
          <li className="navlink">
            <a href="#popular">Popular</a>
          </li>
          <li className="navlink">
            <a href="#trending">Trending</a>
          </li>
          <li className="navlink">
            <a href="#categories">Categories</a>
          </li>
        </ul>
      </header>
    </>
  );
}
