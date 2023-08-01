import React from 'react';
import getIconForSocialMedia from '../../utils/getIconForSocialMedia';
import styles from './socialLink.module.css';

type SocialLinkProps = {
  socialMedia: string;
  link: string;
};

const SocialLinkComponent: React.FC<SocialLinkProps> = ({ socialMedia, link }) => {
  const Icon = getIconForSocialMedia(socialMedia);

  return (
    <a href={link} target="_blank" rel="noopener noreferrer" aria-label={socialMedia}>
      <button className={styles["social-link-btn"]}>
        {Icon && <Icon />}
      </button>
    </a>
  );
};

export default SocialLinkComponent;
