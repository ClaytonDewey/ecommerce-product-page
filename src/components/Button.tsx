import React, { ReactElement } from 'react';
import styled from 'styled-components';

type ButtonProps = {
  icon?: ReactElement;
  text: string;
};

const StyledButton = styled.button`
  background-color: var(--brand);
  cursor: pointer;
  border: 0;
  color: var(--white);
  height: 5.5rem;
  width: 27rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 1rem;
  font-weight: 700;
  transition: opacity 0.25s ease-in-out, box-shadow 0.25s ease-in-out;
  font-size: 1.6rem;

  svg {
    fill: white;
    margin-right: 1.5rem;
    /* height: 1.6rem;
    width: 1.6rem; */
  }

  &:hover {
    opacity: 0.8;
    cursor: pointer;
    transition: opacity 0.25s ease-in-out, box-shadow 0.25s ease-in-out;
    box-shadow: 0 3rem 2rem hsla(26, 100%, 55%, 0.2);
  }
`;

const Button: React.FC<ButtonProps> = ({ text, icon }) => {
  return (
    <StyledButton>
      <>
        {icon} {text}
      </>
    </StyledButton>
  );
};
export default Button;
