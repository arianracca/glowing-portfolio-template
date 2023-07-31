import React from 'react';
import SocialLinkComponent from './SocialLinkComponent';

const WelcomeSection: React.FC = () => {
  return (
    <section id="welcome-section" className="welcome-section">
      <h1>Hello, my name is Arian</h1>
      <h2 className="subtitle">This is my Profile</h2>
      <div className="social-links">
        <SocialLinkComponent socialMedia="LinkedIn" link="https://www.linkedin.com/in/arianracca" />
        <SocialLinkComponent socialMedia="GitHub" link="https://github.com/arianracca" />
        <SocialLinkComponent socialMedia="Email" link="mailto:info@arianracca.ar" />
        <SocialLinkComponent socialMedia="WhatsApp" link="https://wa.me/5493413555676/?text=I'm%20interested%20in%20your%20work!" />
        <SocialLinkComponent socialMedia="Download CV" link="https://drive.google.com/file/d/1u62YhHn7AjGtYWBbCt5TK7FhOzZXSSJw/view?usp=drive_link" />
      </div>
    </section>
  );
};

export default WelcomeSection;
