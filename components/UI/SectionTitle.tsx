import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle: string;
  align?: 'left' | 'center';
  color?: 'dark' | 'white';
}

export const SectionTitle: React.FC<SectionTitleProps> = ({ 
  title, 
  subtitle, 
  align = 'center',
  color = 'dark' 
}) => {
  return (
    <div className={`mb-12 ${align === 'center' ? 'text-center' : 'text-left'}`}>
      <span className={`block text-sm font-bold tracking-widest uppercase mb-2 ${color === 'white' ? 'text-yellow-300' : 'text-brand-orange'}`}>
        {subtitle}
      </span>
      <h2 className={`text-3xl md:text-4xl font-bold ${color === 'white' ? 'text-white' : 'text-gray-800'}`}>
        {title}
      </h2>
      <div className={`h-1 w-16 mt-4 rounded-full ${align === 'center' ? 'mx-auto' : ''} ${color === 'white' ? 'bg-white' : 'bg-brand-orange'}`}></div>
    </div>
  );
};