import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaWhatsapp,
  FaFileDownload,
} from "react-icons/fa";

type SocialMedia = "linkedin" | "github" | "email" | "whatsapp" | "download cv";

const getIconForSocialMedia = (socialMedia: SocialMedia): React.ElementType => {
  switch (socialMedia.toLowerCase()) {
    case "linkedin":
      return FaLinkedin;
    case "github":
      return FaGithub;
    case "email":
      return FaEnvelope;
    case "whatsapp":
      return FaWhatsapp;
    case "download cv":
      return FaFileDownload;
    default:
      throw new Error("Invalid social media");
  }
};

export default getIconForSocialMedia;
