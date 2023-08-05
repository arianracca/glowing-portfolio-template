import { SocialBar } from '../common/SocialBar';
import styles from './styles.module.css';
import cn from 'classnames';

const sub1 = cn(styles['welcome-subtitle'], styles.sub1)
const sub2 = cn(styles['welcome-subtitle'], styles.sub2)

const WelcomeSection: React.FC = () => {
  return (
    <section id="welcome" className={styles["welcome-section"]}>
      <div className={styles["welcome-text"]}>
        <h2 className={sub1}>Hello, my name is</h2>
        <h1>Arian Racca</h1>
        <h2 className={sub2}>This is my Profile</h2>
      </div>
      <SocialBar />
    </section>
  );
};

export default WelcomeSection;
