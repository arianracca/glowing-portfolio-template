import styles from './socialLink.module.css';
import SocialLinkComponent from './SocialLinkComponent';

export const SocialBar: React.FC = () => {
  return (
    
    <div className={styles["social-links"]}>
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
  )
}
