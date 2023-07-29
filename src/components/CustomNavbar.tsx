import { Navbar, Nav } from 'react-bootstrap';
import logo from '../assets/logo.png';

const CustomNavbar = () => {
  return (
    <Navbar expand="md" className="navbar">
      <Navbar.Toggle aria-controls="navbar-nav" />
      <Navbar.Collapse id="navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="#welcome-section">About</Nav.Link>
          <Nav.Link href="#projects">Work</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
          <Nav.Link href="PENDIENTE">Blog</Nav.Link>
        </Nav>
      </Navbar.Collapse>
      <Navbar.Brand href="/" className="align-items-start">
        <img
          src={logo}
          id="navbar-log"
          alt="Logo"
          height="40"
          className="d-inline-block align-top ml-3"
        />
      </Navbar.Brand>
    </Navbar>
  );
};

export default CustomNavbar;
