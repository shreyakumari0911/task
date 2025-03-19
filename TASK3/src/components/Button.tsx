import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick = () => console.log('Button clicked!'),
  className = '',
}) => {
  return (
    <button
      className={`bg-blue-500 text-white font-medium px-4 py-2 rounded-md hover:bg-blue-600 transition-colors ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button; 