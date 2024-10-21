import React from "react";
import "../Style/Style.css"; // Assuming your CSS file is named 'Style.css'

const Navbar = () => {
  return (
    <header className="header">
      <span className="logo">Bravo Travel</span>
      <nav>
        <ul className="navList">
          {['Home', 'Sign In', 'Sign Up', 'Contact Us'].map((item, index) => (
            <li className="navItem" key={index}>
              <button
                className="navButton"
                onMouseEnter={(e) => {
                  e.target.classList.add('navButtonHover');
                }}
                onMouseLeave={(e) => {
                  e.target.classList.remove('navButtonHover');
                }}
              >
                {item}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;