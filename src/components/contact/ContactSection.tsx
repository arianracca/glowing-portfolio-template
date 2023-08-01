import { SocialBar } from "../common/SocialBar";
import styles from './contact.module.css'

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className={styles["contact-section"]}>
      <h2 className={styles["contact-header"]}>Contact me</h2>
      <SocialBar />
    </section>
  );
};

export default ContactSection;
