import React from 'react';
import styled from 'styled-components';

type ContainerProps = {
  children: {};
};

const StyledContainer = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 117rem;
  margin: 0 auto;

  /* height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        
        
        
        width: '500px',
          backgroundColor: '#fff',
          padding: '2rem',*/
`;

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <StyledContainer>
      <>{children}</>
    </StyledContainer>
  );
};
export default Container;
