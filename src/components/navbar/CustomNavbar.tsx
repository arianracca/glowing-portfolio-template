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

  const navbarClasses = cn('navbar flex-space-between', styles.navbar, styles['flex-space-between']);

  const navContentContainerSpaceBetween = cn('flex-space-between', styles['flex-space-between'])

  const logoImageClass = cn('d-inline-block align-top ml-3', styles['navbar-logo']);

  const brandClasses = cn('align-items-start ml-3 navbar-brand', styles['navbar-brand']);

  const toggleClasses = cn(styles['navbar-toggler'], { 'active' : isMenuOpen }, {[styles.active] : isMenuOpen});

  const togglerLineClasses = cn('navbar-toggler-line', styles['navbar-toggler-line'])

  const navbarNavClasses = cn(styles['navbar-nav'])

  const navCollapseClasses = cn('navbar-collapse', styles['navbar-nav'], styles['navbar-collapse'], { show: isMenuOpen });


  return (
    <Navbar expand="md" className={navbarClasses}>
      <div className={navContentContainerSpaceBetween}>
        <Navbar.Brand href="/" className={brandClasses}>
          <img
            src={logo}
            alt="Logo"
            height="40"
            className={logoImageClass}
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
          <Nav.Link className={styles['nav-link']} href="#welcome">Home</Nav.Link>
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
