import { Swiper, SwiperSlide } from "swiper/react";
import "bootstrap/dist/css/bootstrap.min.css";
import "swiper/css";
import styles from "./styles.module.css";

interface Swiper {
  images: string[];
}

const SwiperComponent: React.FC<Swiper> = ({ images }) => {
  const swiperParams = {
    spaceBetween: 10,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  };

  return (
    <div>
      <Swiper {...swiperParams}>
        {images.map((image, index) => (
          <div key={index} className="swiper-slide">
            <SwiperSlide>
              <img
                className={styles["swiper-image"]}
                src={image}
                title={`Image ${index}`}
                alt={`Image ${index}`}
              />
            </SwiperSlide>
          </div>
        ))}
      </Swiper>
      <div className="swiper-button-next"></div>
      <div className="swiper-button-prev"></div>
    </div>
  );
};

export default SwiperComponent;
