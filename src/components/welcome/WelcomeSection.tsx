import { SocialBar } from '../common/SocialBar';
import styles from './welcome.module.css';

const WelcomeSection: React.FC = () => {
  return (
    <section id="welcome" className={styles["welcome-section"]}>
      <div className={styles["welcome-text"]}>
        <h2 className={styles["welcome-subtitle"]}>Hello, my name is</h2>
        <h1>Arian Racca</h1>
        <h2 className={styles["welcome-subtitle"]}>This is my Profile</h2>
      </div>
      <SocialBar />
    </section>
  );
};

export default WelcomeSection;
