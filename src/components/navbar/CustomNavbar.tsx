import { useState } from "react";
import { Navbar, Nav } from "react-bootstrap";
import styles from "./styles.module.css";
import cn from "classnames";
import { generalData } from "../../Config";

interface Section {
  id: string;
  title: string;
  href: string;
}

interface CustomNavbarProps {
  sections: Section[];
}

const CustomNavbar: React.FC<CustomNavbarProps> = ({ sections }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navbarClasses = cn(
    "navbar",
    "flex-space-between",
    styles.navbar,
    styles["flex-space-between"],
  );

  const navContentContainerSpaceBetween = cn(
    "flex-space-between",
    styles["flex-space-between"],
  );

  const logoImageClass = cn(
    "d-inline-block align-top ml-3",
    styles["navbar-logo"],
  );

  const brandClasses = cn(
    "align-items-start ml-3 navbar-brand",
    styles["navbar-brand"],
  );

  const toggleClasses = cn(
    styles["navbar-toggler"],
    { active: isMenuOpen },
    { [styles.active]: isMenuOpen },
  );

  const togglerLineClasses = cn(
    "navbar-toggler-line",
    styles["navbar-toggler-line"],
  );

  const navbarNavClasses = cn(styles["navbar-nav"]);

  const navCollapseClasses = cn(
    "navbar-collapse",
    styles["navbar-nav"],
    styles["navbar-collapse"],
    { show: isMenuOpen },
  );

  return (
    <Navbar expand="md" className={navbarClasses}>
      <div className={navContentContainerSpaceBetween}>
        <Navbar.Brand href="/" className={brandClasses}>
          <img
            src={generalData.logo}
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
          {sections.map((section) => (
            <Nav.Link
              key={section.id}
              className={styles["nav-link"]}
              href={section.href}
            >
              {section.title}
            </Nav.Link>
          ))}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default CustomNavbar;
