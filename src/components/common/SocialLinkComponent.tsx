import getIconForSocialMedia from "../../utils/getIconForSocialMedia";
import styles from "./styles.module.css";

type SocialLinkProps = {
  socialMedia: string;
  link: string;
};

const SocialLinkComponent: React.FC<SocialLinkProps> = ({
  socialMedia,
  link,
}) => {
  const Icon: React.ElementType | null = getIconForSocialMedia(socialMedia);

  const handleButtonClick = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <button
      className={styles["social-link-btn"]}
      onClick={() => handleButtonClick(link)}
      rel="noopener noreferrer"
      aria-label={socialMedia}
      title={socialMedia}
    >
      {Icon && <Icon />}
    </button>
  );
};

export default SocialLinkComponent;
