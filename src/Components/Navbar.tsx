import logo from "../assets/images/logo.svg";

import "./Navbar.css";

export function Navbar() {
  return (
    <header className="navbar-container">
      <img src={logo} alt={logo}></img>
      <div className="hamburger-menu"></div>
      <ul className="navmenu">
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
  );
}
