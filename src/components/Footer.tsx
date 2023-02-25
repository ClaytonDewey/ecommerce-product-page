import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  .attribution {
    font-size: 11px;
    text-align: center;
  }

  .attribution a {
    color: hsl(228, 45%, 44%);
  }
`;

const Footer: React.FC = () => {
  return (
    <StyledFooter>
      <div className='attribution'>
        Challenge by{' '}
        <a
          href='https://www.frontendmentor.io?ref=challenge'
          rel='noreferrer'
          target='_blank'>
          Frontend Mentor
        </a>
        . Coded by{' '}
        <a href='https://www.claytondewey.io/' rel='noreferrer' target='_blank'>
          Clayton Dewey
        </a>
        .
      </div>
    </StyledFooter>
  );
};
export default Footer;
