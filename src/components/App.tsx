import React from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import Container from './Container';
import ImageSlider from './ImageSlider';
import Product from './Product';

type AppProps = {};

const App: React.FC<AppProps> = () => {
  return (
    <>
      <Container>
        <ImageSlider />
        <Product />
      </Container>
    </>
  );
};
export default App;
