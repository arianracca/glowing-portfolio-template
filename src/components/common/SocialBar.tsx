import React from "react";
import styles from "./styles.module.css";
import SocialLinkComponent from "./SocialLinkComponent";
import { socialMediaData } from "../../Config";

export const SocialBar: React.FC = () => {
  return (
    <div className={styles["social-links"]}>
      {socialMediaData.map((data, index) => (
        <SocialLinkComponent
          key={index}
          socialMedia={data.socialMedia}
          link={data.link}
        />
      ))}
    </div>
  );
};
