import { useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import logo from '../assets/logo-wh.png';

const CustomNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Navbar expand="md" className="navbar flex-space-between">
      <div className="flex-space-between">
        <Navbar.Brand href="/" className="align-items-start">
          <img
            src={logo}
            id="navbar-logo"
            alt="Logo"
            height="40"
            className="d-inline-block align-top ml-3"
          />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="navbar-nav"
          className={`navbar-toggler ${isMenuOpen ? 'active' : ''}`}
          onClick={handleMenuToggle}
        >
          <span className="navbar-toggler-line"></span>
          <span className="navbar-toggler-line"></span>
          <span className="navbar-toggler-line"></span>
        </Navbar.Toggle>
      </div>
      <Navbar.Collapse id="navbar-nav" className={`${isMenuOpen ? 'show' : ''}`}>
        <Nav className="ml-auto">
          <Nav.Link href="#welcome-section">About</Nav.Link>
          <Nav.Link href="#projects">Work</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
          <Nav.Link href="PENDIENTE">Blog</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default CustomNavbar;
