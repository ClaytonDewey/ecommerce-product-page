import React from 'react';

type ImageSliderProps = {};

const ImageSlider: React.FC<ImageSliderProps> = () => {
  return (
    <img
      className='img-responsive'
      src='./images/image-product-1.jpg'
      alt='a shoe!'
    />
  );
};
export default ImageSlider;
