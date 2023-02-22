import React from 'react';
import Navbar from './Navbar';
import Container from './Container';
import ImageSlider from './ImageSlider';
import Footer from './Footer';
import Product from './Product';

type AppProps = {};

const App: React.FC<AppProps> = () => {
  return (
    <>
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
