import React, { ReactNode } from 'react';

type ContainerProps = {
  children: ReactNode;
};

const Container: React.FC<ContainerProps> = ({ children, ...rest }) => {
  return (
    <div className='container' {...rest}>
      {children}
    </div>
  );
};

export default Container;
