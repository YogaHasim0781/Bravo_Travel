import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Style/Style.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <span className="logo">Bravo Travel</span>
      <span className="menuIcon" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </span>
      <nav>
        <ul className={`navList ${menuOpen ? "active" : ""}`}>
          {[
            { name: 'Home', path: '/' },
            { name: 'Sign In', path: '/signin' },
            { name: 'Sign Up', path: '/signup' },
            { name: 'Buy Ticket?', path: '/buyticket' }
          ].map((item, index) => (
            <li className="navItem" key={index}>
              <Link
                to={item.path}
                className="navButton"
                onMouseEnter={(e) => e.target.classList.add('navButtonHover')}
                onMouseLeave={(e) => e.target.classList.remove('navButtonHover')}
                onClick={() => setMenuOpen(false)}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
