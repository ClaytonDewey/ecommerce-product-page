import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

type AppProps = {};

const App: React.FC<AppProps> = () => {
  return (
    <>
      <Navbar />
      <main>
        Collections Men Women About Contact Sneaker Company Fall Limited Edition
        Sneakers These low-profile sneakers are your perfect casual wear
        companion. Featuring a durable rubber outer sole, they'll withstand
        everything the weather can offer. $125.00 50% $250.00 0 Add to cart
      </main>
      <Footer />
    </>
  );
};
export default App;
