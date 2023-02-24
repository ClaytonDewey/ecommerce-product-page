import React, { ReactElement } from 'react';
import styled from 'styled-components';

type ButtonProps = {
  icon?: ReactElement;
  text: string;
};

const StyledButton = styled.button`
  background-color: hsl(26, 100%, 55%);
  border: 0;
  cursor: pointer;
  color: #fff;
  height: 5.5rem;
  width: 25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 1rem;
  font-weight: 700;

  svg {
    fill: white;
    stroke: white;
  }

  img {
    margin-right: 2rem;
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
