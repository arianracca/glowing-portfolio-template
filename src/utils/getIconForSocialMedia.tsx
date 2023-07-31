import { FaLinkedin, FaGithub, FaEnvelope, FaWhatsapp, FaFileDownload } from 'react-icons/fa';

const getIconForSocialMedia = (socialMedia: string) => {
  switch (socialMedia.toLowerCase()) {
    case 'linkedin':
      return FaLinkedin;
    case 'github':
      return FaGithub;
    case 'email':
      return FaEnvelope;
    case 'whatsapp':
      return FaWhatsapp;
    case 'download cv':
      return FaFileDownload;
  }
};

export default getIconForSocialMedia;
