import React from 'react';
import logo from './logo.svg';
import './App.scss';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </header>
      <div>
        Collections Men Women About Contact Sneaker Company Fall Limited Edition
        Sneakers These low-profile sneakers are your perfect casual wear
        companion. Featuring a durable rubber outer sole, they’ll withstand
        everything the weather can offer. $125.00 50% $250.00 0 Add to cart
        <div className='attribution'>
          Challenge by{' '}
          <a
            href='https://www.frontendmentor.io?ref=challenge'
            rel='noreferrer'
            target='_blank'
          >
            Frontend Mentor
          </a>
          . Coded by{' '}
          <a
            href='https://www.claytondewey.io/'
            rel='noreferrer'
            target='_blank'
          >
            Your Name Here
          </a>
          .
        </div>
      </div>
    </div>
  );
}

export default App;
