import React from 'react';
import { Link } from 'react-router-dom'; 
import "../Style/Style.css";

const Navbar = () => {
  const menuItems = ['Home', 'Sign In', 'Sign Up', 'Contact Us'];

  return (
    <header className="header">
      <span className="logo">Bravo Travel</span>
      <nav>
        <ul className="navList">
          {menuItems.map((item, index) => (
            <li className="navItem" key={index}>
              <Link 
                to={`/${item.toLowerCase().replace(' ', '')}`} 
                className="navButton"
                onMouseEnter={(e) => e.target.classList.add('navButtonHover')}
                onMouseLeave={(e) => e.target.classList.remove('navButtonHover')}
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;