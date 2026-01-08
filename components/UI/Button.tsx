import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'white';
  children: React.ReactNode;
  className?: string;
  href?: string;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  children, 
  className = '', 
  href,
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center px-6 py-3 rounded-full font-bold transition-all duration-300 shadow-md transform hover:-translate-y-0.5";
  
  const variants = {
    primary: "bg-gradient-to-r from-yellow-400 to-brand-orange text-white hover:shadow-lg hover:from-yellow-300 hover:to-orange-500",
    outline: "border-2 border-brand-orange text-brand-orange hover:bg-brand-orange hover:text-white",
    white: "bg-white text-brand-orange hover:bg-gray-100",
  };

  const combinedClassName = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={combinedClassName}>
        {children}
      </a>
    );
  }

  return (
    <button className={combinedClassName} {...props}>
      {children}
    </button>
  );
};