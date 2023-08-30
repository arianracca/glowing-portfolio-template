import React from "react";
import { generalData } from "../../Config";

interface Section {
  id: string;
  title: string;
  href: string;
}

interface FooterProps {
  sectionsFooter: Section[];
}

const Footer: React.FC<FooterProps> = ({ sectionsFooter }) => {
  return (
    <footer>
      <ul>
        {sectionsFooter.map((section) => (
          <li key={section.id}>
            <a href={section.href}>{section.title}</a>
          </li>
        ))}
      </ul>
      <span> {generalData.footerSignature} </span>
    </footer>
  );
};

export default Footer;
