import React from 'react';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="contact-section">
      <h2 className="contact-header">Contact me</h2>
      <div className="contact-list">
        <a aria-label="Chat on WhatsApp" id="profile-link" className="buttons contact-via" href="https://wa.me/5493413555676/?text=I'm%20interested%20in%20your%work!" target="_blank">
          <i className="fab fa-whatsapp"></i>
        </a>
        <a aria-label="Send a mail" id="profile-link" className="buttons contact-via" href="mailto:arianracca@gmail.com">
          <i className="fas fa-at"></i>
        </a>
        <a aria-label="Check on my Github repository" id="profile-link" className="buttons contact-via" href="https://github.com/arianracca" target="_blank">
          <i className="fab fa-github"></i>
        </a>
        <a aria-label="Reach me on Linkedin" id="profile-link" className="buttons contact-via" href="https://www.linkedin.com/in/arianracca/" target="_blank">
          <i className="fab fa-linkedin"></i>
        </a>
      </div>
    </section>
  );
};

export default ContactSection;
