import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import GlobalStyle from '../globalStyles';
import App from './App';
import Footer from './Footer';
import Navbar from './Navbar';

const Router: React.FC = () => {
  return (
    <HashRouter>
      <GlobalStyle />
      <Navbar />
      <Routes>
        <Route path='/' element={<App />} />
        {/* <Route path='/admin' element={<Admin />} />
        <Route path='/profile' element={<Profile />} /> */}
        <Route element={<App />} />
      </Routes>
      <Footer />
    </HashRouter>
  );
};
export default Router;
