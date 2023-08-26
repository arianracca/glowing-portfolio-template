import { SocialBar } from "../common/SocialBar";
import styles from "./styles.module.css";
import cn from "classnames";
import { welcomeData } from "../../Config";

const sub1 = cn(styles["welcome-subtitle"], styles.sub1);
const sub2 = cn(styles["welcome-subtitle"], styles.sub2);

const WelcomeSection: React.FC = () => {
  return (
    <section id="welcome" className={styles["welcome-section"]}>
      <div className={styles["welcome-text"]}>
        <h2 className={sub1}> {welcomeData.upSubtitle} </h2>
        <h1> {welcomeData.nameTitle} </h1>
        <h2 className={sub2}> {welcomeData.downSubtitle} </h2>
      </div>
      <SocialBar />
    </section>
  );
};

export default WelcomeSection;
