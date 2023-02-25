import React, { useState } from 'react';
import SwiperCore, { Navigation, Thumbs } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { productImages } from '../../assets';
import styled from 'styled-components';

type ImageSliderProps = {};

const StyledImageContainer = styled.div`
  .product-images-slider {
    max-width: 44.5rem;
    height: auto;
    margin-bottom: 3rem;

    .swiper-slide {
      padding-top: 100%;
      overflow: hidden;
      position: relative;
      border-radius: 2rem;

      img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        border-radius: 2rem;
      }
    }

    .swiper-button-prev,
    .swiper-button-next {
      cursor: pointer;
      position: absolute;
      color: var(--black);
    }

    .swiper-button-prev {
      left: 0;
    }

    .swiper-button-next {
      right: 0;
    }
  }

  .product-images-slider-thumbs {
    max-width: 44.5rem;

    .swiper-slide {
      cursor: pointer;
      border: 1px solid #ddddbd;
      border-radius: 1rem;
      max-width: 8.9rem;

      &-thumb-active {
        border-color: #ff0000;

        img {
          opacity: 0.65;
        }
      }
    }

    &-wrapper {
      width: 100%;
      padding-top: 100%;
      overflow: hidden;
      position: relative;

      img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        border-radius: 1rem;
      }
    }

    .swiper-wrapper {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
`;

const ImageSlider: React.FC<ImageSliderProps> = () => {
  const [activeThumb, setActiveThumb] = useState<SwiperCore>();

  return (
    <StyledImageContainer>
      <Swiper
        loop={true}
        spaceBetween={10}
        navigation={true}
        modules={[Navigation, Thumbs]}
        grabCursor={true}
        thumbs={{
          swiper: activeThumb && !activeThumb.destroyed ? activeThumb : null,
        }}
        className='product-images-slider'>
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
        slidesPerView={4}
        modules={[Navigation, Thumbs]}
        className='product-images-slider-thumbs'>
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
    </StyledImageContainer>
  );
};
export default ImageSlider;
