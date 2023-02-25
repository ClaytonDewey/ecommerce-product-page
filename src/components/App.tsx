import React from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import GlobalStyle from '../globalStyles';
import Navbar from './Navbar';
import Container from './Container';
import ImageSlider from './ImageSlider';
import Footer from './Footer';
import Product from './Product';

type AppProps = {};

const App: React.FC<AppProps> = () => {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Container>
        <ImageSlider />
        <Product />
      </Container>
      <Footer />
    </>
  );
};
export default App;
