import React, { useEffect, useState } from 'react';

export const ScrollProgress: React.FC = () => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrollPercent = scrollTop / docHeight;
      setWidth(scrollPercent * 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-gray-100 z-[100]">
      <div 
        className="h-full bg-gradient-to-r from-brand-light via-brand-primary to-brand-dark transition-all duration-100 ease-out"
        style={{ width: `${width}%` }}
      />
    </div>
  );
};