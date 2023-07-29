import React from 'react';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="contact-section">
      <h2 className="contact-header">Contact me</h2>
      <p className="subtitle">and let's work together</p>
      <div className="contact-list">
        <a id="profile-link" className="buttons contact-via" href="https://api.whatsapp.com/send?phone=5493413555676" target="_blank">
          <i className="fab fa-whatsapp"></i> Whatsapp
        </a>
        <a id="profile-link" className="buttons contact-via" href="mailto:arianracca@gmail.com">
          <i className="fas fa-at"></i> Send a mail
        </a>
        <a id="profile-link" className="buttons contact-via" href="https://github.com/arianracca" target="_blank">
          <i className="fab fa-github"></i> GitHub
        </a>
        <a id="profile-link" className="buttons contact-via" href="https://www.linkedin.com/in/arianracca/" target="_blank">
          <i className="fab fa-linkedin"></i> Contact me
        </a>
      </div>
    </section>
  );
};

export default ContactSection;
