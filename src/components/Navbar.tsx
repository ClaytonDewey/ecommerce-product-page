import React from 'react';
import styled from 'styled-components';

type NavbarProps = {};

const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 3rem;
  padding-bottom: 4rem;
  margin-bottom: 9rem;
  height: 11.3rem;
  border-bottom: 1px solid var(--grayish-blue);

  h1 {
    font-size: 3.3rem;
    letter-spacing: 0.5px;
    margin: 0;
    padding: 0;
  }

  ul {
    color: var(--grayish-blue);

    li {
      display: inline-block;

      &:not(:last-child) {
        margin-right: 3rem;
      }
    }
  }
`;

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <StyledNav>
      <h1>sneakers</h1>
      <ul>
        <li>Collections</li>
        <li>Men</li>
        <li>Women</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </StyledNav>
  );
};
export default Navbar;
