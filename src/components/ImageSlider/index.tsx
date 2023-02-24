import React, { useState } from 'react';
import SwiperCore, { Navigation, Thumbs } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { productImages } from '../../assets';

type ImageSliderProps = {};

const ImageSlider: React.FC<ImageSliderProps> = () => {
  const [activeThumb, setActiveThumb] = useState<SwiperCore>();

  return (
    <div className='image-container'>
      <Swiper
        loop={true}
        spaceBetween={10}
        navigation={true}
        modules={[Navigation, Thumbs]}
        grabCursor={true}
        thumbs={{
          swiper: activeThumb && !activeThumb.destroyed ? activeThumb : null,
        }}
        className='product-images-slider'
      >
        {productImages.map((image, idx) => {
          return (
            <SwiperSlide key={idx}>
              <img className='img-responsive' src={image} alt='product thumb' />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <Swiper
        onSwiper={setActiveThumb}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        modules={[Navigation, Thumbs]}
        className='product-images-slider-thumbs'
      >
        {productImages.map((image, idx) => {
          return (
            <SwiperSlide key={idx}>
              <div className='product-images-slider-thumbs-wrapper'>
                <img
                  className='img-responsive'
                  src={image}
                  alt='product thumb'
                />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};
export default ImageSlider;
