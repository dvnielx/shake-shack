import React from 'react';
import '../styles/Header.css';

const Header = () => {
  return (
        <nav>

          <div className="navbar-left">
            <div className="navbar-email">admin@shakeshack.com</div>
          </div>
          <div className="navbar-right">
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/">Profile</a>
              </li>
              <li>
                <a href="/">Log Out</a>
              </li>
            </ul>
          </div>

        </nav>
  );
};

export default Header;