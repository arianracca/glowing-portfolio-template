/* eslint-disable @typescript-eslint/no-unsafe-return */
import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaWhatsapp,
  FaFileDownload,
  FaTwitter,
  FaInstagram,
  FaBehance,
  FaDribbble,
  FaMediumM,
  FaYoutube,
  FaTwitch,
  FaPinterestP,
  FaSpotify,
  FaTelegram,
} from "react-icons/fa";

const getIconForSocialMedia = (socialMedia: string): React.ElementType => {
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
    case "download resume":
    case "cv":
    case "resume":
      return FaFileDownload;
    case "twitter":
      return FaTwitter;
    case "telegram":
      return FaTelegram;
    case "instagram":
      return FaInstagram;
    case "behance":
      return FaBehance;
    case "dribbble":
      return FaDribbble;
    case "medium":
      return FaMediumM;
    case "youtube":
      return FaYoutube;
    case "twitch":
      return FaTwitch;
    case "pinterest":
      return FaPinterestP;
    case "spotify":
      return FaSpotify;
    default:
      throw new Error("Invalid social media");
  }
};

export default getIconForSocialMedia;
