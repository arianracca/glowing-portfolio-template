import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import "swiper/css";
import styles from "./styles.module.css";

interface SwiperProps {
  images: string[];
}

const SwiperComponent: React.FC<SwiperProps> = ({ images }) => {
  const swiperParams = {
    spaceBetween: 10,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  };

  return (
    <div className={styles["swiper-container"]}>
      <Swiper {...swiperParams}>
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img
              className={styles["swiper-image"]}
              src={image}
              title={`Image ${index}`}
              alt={`Image ${index}`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className={styles["swiper-button-next"]}>
        <FontAwesomeIcon icon={faChevronRight} />
      </div>
      <div className={styles["swiper-button-prev"]}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </div>
    </div>
  );
};

export default SwiperComponent;
