import React from 'react';

const Navbar: React.FC = () => {
  return (
    <header id="header">
      <div>
        <nav id="navbar" className="nav">
          <ul className="nav-list">
            <li>
              <a href="#welcome-section">About</a>
            </li>
            <li>
              <a href="#projects">Work</a>
            </li>
            <li>
              <a href="PENDIENTE">Blog</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
