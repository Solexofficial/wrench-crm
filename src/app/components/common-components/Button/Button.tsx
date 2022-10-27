import React from 'react';

type ButtonProps = {
  type?: 'submit' | 'button' | 'reset';
  onClick?: () => void;
  children: React.ReactNode;
};

const Button: React.FC<ButtonProps> = ({ type, onClick, children, ...rest }) => {
  return (
    <button className='button' type={type} onClick={onClick} {...rest}>
      {children}
    </button>
  );
};

export default Button;
