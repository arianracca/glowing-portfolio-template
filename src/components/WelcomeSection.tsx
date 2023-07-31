import SocialLinkComponent from './SocialLinkComponent';

const WelcomeSection: React.FC = () => {
  return (
    <section id="welcome-section" className="welcome-section">
      <div className="welcome-text">
        <div className='align-left'>
          <h2 className="welcome-subtitle">Hello, my name is</h2>
        </div>
        <h1>Arian Racca</h1>
        <div className='align-right'>
          <h2 className="welcome-subtitle">This is my Profile</h2>
        </div>
      </div>
      <div className="social-links">
        <div aria-label="LinkedIn">
          <SocialLinkComponent socialMedia="LinkedIn" link="https://www.linkedin.com/in/arianracca" />
        </div>
        <div aria-label="GitHub">
          <SocialLinkComponent socialMedia="GitHub" link="https://github.com/arianracca" />
        </div>
        <div aria-label="Email">
          <SocialLinkComponent socialMedia="Email" link="mailto:info@arianracca.ar" />
        </div>
        <div aria-label="WhatsApp">
          <SocialLinkComponent socialMedia="WhatsApp" link="https://wa.me/5493413555676/?text=I'm%20interested%20in%20your%20work!" />
        </div>
        <div aria-label="Download CV">
          <SocialLinkComponent socialMedia="Download CV" link="https://drive.google.com/file/d/1u62YhHn7AjGtYWBbCt5TK7FhOzZXSSJw/view?usp=drive_link" />
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
