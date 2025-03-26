import { useState } from "react";
import { Menu, X } from "lucide-react";
import "./HamburgerMenu.module.css";

export function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="hamburger-container">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="hamburger-button"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
      <nav className={`hamburger-nav ${isOpen ? "open" : ""}`}>
        <ul className="hamburger-list">
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
    </div>
  );
}
