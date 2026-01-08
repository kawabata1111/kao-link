import React, { useRef, useEffect, useState } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  animation?: 'fade-up' | 'slide-left' | 'slide-right';
  delay?: number; // in ms
  className?: string;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({ 
  children, 
  animation = 'fade-up', 
  delay = 0,
  className = ''
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
          if (ref.current) observer.unobserve(ref.current);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [delay]);

  return (
    <div 
      ref={ref} 
      className={`reveal ${animation} ${isVisible ? 'active' : ''} ${className}`}
    >
      {children}
    </div>
  );
};