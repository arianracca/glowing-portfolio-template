import { useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import logo from '../../assets/logo-wh.png';
import styles from './customNavbar.module.css'
import cn from 'classnames';
const CustomNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navbarClasses = cn('navbar', styles.navbar, 'flex-space-between', styles['flex-space-between']);

  const brandClasses = cn('navbar-brand', styles['navbar-brand'], 'align-items-start', 'ml-3');

  const toggleClasses = cn('navbar-toggler', { 'active' : isMenuOpen }, {[styles.active] : isMenuOpen});

  const togglerLineClasses = cn('navbar-toggler-line', styles['navbar-toggler-line'])

  const navbarNavClasses = cn('navbar-nav', styles['navbar-nav'])

  const navCollapseClasses = cn('navbar-collapse', { show: isMenuOpen });


  return (
    <Navbar expand="md" className={navbarClasses}>
      <div className={cn('flex-space-between', styles['flex-space-between'])}>
        <Navbar.Brand href="/" className={brandClasses}>
          <img
            src={logo}
            id="navbar-logo"
            alt="Logo"
            height="40"
            className="d-inline-block align-top ml-3"
          />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls={navbarNavClasses}
          className={toggleClasses}
          onClick={handleMenuToggle}
        >
          <span className={togglerLineClasses}></span>
          <span className={togglerLineClasses}></span>
          <span className={togglerLineClasses}></span>
        </Navbar.Toggle>
      </div>
      <Navbar.Collapse id="navbar-nav" className={navCollapseClasses}>
        <Nav className="ml-auto">
          <Nav.Link className={styles['nav-link']} href="#">Home</Nav.Link>
          <Nav.Link className={styles['nav-link']} href="#about">About</Nav.Link>
          <Nav.Link className={styles['nav-link']} href="#projects">Projects</Nav.Link>
          <Nav.Link className={styles['nav-link']}  href="#contact">Contact</Nav.Link>
          <Nav.Link className={styles['nav-link']} href="TODO">Blog</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default CustomNavbar;
