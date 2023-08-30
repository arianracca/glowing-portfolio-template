import { SocialBar } from "../common/SocialBar";
import StackCard from "./StackCard";
import styles from "./styles.module.css";
import { stackCardsData, aboutMe } from "../../Config";

const AboutSection: React.FC = () => {
  return (
    <section id="about">
      <div className={styles["about-section"]}>
        <div className={`container ${styles["container-width"]}`}>
          <div className="row">
            <div className="col-lg-4">
              <div className={styles["profile-image"]}>
                <img src={aboutMe.imgProfile} alt="My Photo" />
                <SocialBar />
              </div>
            </div>
            <div className="col-lg-8">
              <div className={styles["about-info"]}>
                <h2>{aboutMe.name} </h2>
                <div className={styles["sub-heading"]}>
                  <h3>{aboutMe.role} </h3>
                  <h4> {aboutMe.mainStack} </h4>
                </div>
                <div
                  className={styles["about-content"]}
                  dangerouslySetInnerHTML={{ __html: aboutMe.content }}
                ></div>
              </div>
            </div>
          </div>
          <div className={styles["grid"]}>
            {stackCardsData.map((data, index) => (
              <StackCard
                key={index}
                title={data.title}
                technologies={data.technologies}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
