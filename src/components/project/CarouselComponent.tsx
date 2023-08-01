import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

interface Carousel {
    images: string[];
  }

const CarouselComponent: React.FC<Carousel> = ( { images } ) => {
  const swiperParams = {
    spaceBetween: 10,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  };

  return (
    <div>
      <Swiper {...swiperParams}>
        {images.map((image, index) => (
          <div key={index} className="swiper-slide">
            <SwiperSlide><img src={image} title={`Image ${index}`} alt={`Image ${index}`}/></SwiperSlide> 
          </div>
        ))}
      </Swiper>
      <div className="swiper-button-next"></div>
      <div className="swiper-button-prev"></div>
    </div>
  );
};

export default CarouselComponent;
