import { useState } from "react";
import "./navbar.css";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="nav__container">
      <img className="nav__logo" src={process.env.PUBLIC_URL + "/logo.svg"} alt="odessy logo" />
      <nav className="nav">
        <ul className="nav__list">
          <li>Stay Connected</li>
          <li>Education</li>
          <li>Community</li>
          <li>About Us</li>
        </ul>
        <button className="nav__sign-in-btn">Sign in</button>
      </nav>
      {isMenuOpen && (
        <nav className="nav__mobile">
          <ul>
            <li>Stay Connected</li>
            <li>Education</li>
            <li>Community</li>
            <li>About Us</li>
          </ul>
          <button className="nav__sign-in-btn">Sign in</button>
        </nav>
      )}
      <button
        className="nav__menu-btn"
        onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
      >
        <img src={process.env.PUBLIC_URL + "/icons/menu.svg"} alt="mobile menu button" />
      </button>
    </div>
  );
}
