import React from 'react';

type ContainerProps = {
  children: {};
};

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <main>
      <>{children}</>
    </main>
  );
};
export default Container;
