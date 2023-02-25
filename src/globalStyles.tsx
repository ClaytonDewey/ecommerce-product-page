import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
/* 
# Front-end Style Guide

## Layout

The designs were created to the following widths:

- Mobile: 375px
- Desktop: 1440px


## Typography

### Body Copy

- Font size (paragraph): 16px
*/
  :root {
    // Colors
    // Primary
    --brand: hsl(26, 100%, 55%);
    --pale-brand: hsl(25, 100%, 94%);

    // Neutral
    --very-dark-blue: hsl(220, 13%, 13%);
    --dark-grayish-blue: hsl(219, 9%, 45%);
    --grayish-blue: hsl(220, 14%, 75%);
    --light-grayish-blue: hsl(223, 64%, 98%);
    --white: hsl(0, 0%, 100%);
    --black: hsl(0, 0%, 0%); //  (with 75% opacity for lightbox background)
  }

  $bp-small: 46em; // 736px;
  $mq-small: "screen and (min-width: #{$bp-small})";

  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }

  html,
  body {
    margin: 0px auto;
    width: 100%;
    background: $white;
    color: $black;
    box-sizing: border-box;
  }

  html {
    // This defines what 1rem is.
    font-size: 62.5%; // 1rem = 10px;
    font-style: normal;
    font-weight: normal;
  }

  body {
    width: 100%;
    max-width: 111.2rem;
    margin: 0auto;
    font-family: 'Kumbh Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: var(--white);
    color: var(--black);
    font-weight: 400;
    font-size: 1.6rem;
  }

  .img-responsive,
  .thumbnail > img,
  .thumbnail a > img,
  .carousel-inner > .item > img,
  .carousel-inner > .item > a > img {
    display: block;
    max-width: 100%;
    height: auto;
  }
`;

export default GlobalStyle;
