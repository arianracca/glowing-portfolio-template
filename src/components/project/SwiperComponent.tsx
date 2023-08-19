import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./styles.module.css";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

SwiperCore.use([Navigation]);

interface SwiperProps {
  index: number;
  images: string[];
}

const SwiperComponent: React.FC<SwiperProps> = ({ index, images }) => {
  const swiperRef = useRef<SwiperCore | null>(null);

  const nextButtonId = `swiper-button-next-${index}`;
  const prevButtonId = `swiper-button-prev-${index}`;

  const swiperParams = {
    spaceBetween: 10,
    loop: true,
    navigation: {
      nextEl: `#${nextButtonId}`,
      prevEl: `#${prevButtonId}`,
    },
  };

  return (
    <div className={styles["swiper-container"]}>
      <Swiper
        {...swiperParams}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
      >
        {images.map((image, imgIndex) => (
          <SwiperSlide key={imgIndex}>
            <img
              loading="lazy"
              className={styles["swiper-image"]}
              src={image}
              title={`Image ${imgIndex}`}
              alt={`Image ${imgIndex}`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div
        id={nextButtonId}
        className={`${styles["swiper-button-next"]} swiper-button-next`}
      ></div>
      <div
        id={prevButtonId}
        className={`${styles["swiper-button-prev"]} swiper-button-prev`}
      ></div>
    </div>
  );
};

export default SwiperComponent;
