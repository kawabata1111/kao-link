import React, { useEffect, useRef, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorOuterRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const cursor = cursorRef.current;
    const cursorOuter = cursorOuterRef.current;

    const moveCursor = (e: MouseEvent) => {
      if (cursor && cursorOuter) {
        // Inner dot follows immediately
        cursor.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
        
        // Outer ring follows with slight delay (animation handled by CSS transition)
        // We set coordinates directly for performance, but adding a slight lag via requestAnimationFrame could be smoother.
        // For simplicity and performance in React, direct transform is used.
        cursorOuter.animate({
          transform: `translate3d(${e.clientX - 20}px, ${e.clientY - 20}px, 0)`
        }, {
          duration: 500,
          fill: "forwards"
        });
      }
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('a') || 
        target.closest('button') ||
        target.classList.contains('cursor-pointer')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <>
      {/* Outer Ring / Ripple */}
      <div 
        ref={cursorOuterRef}
        className={`fixed top-0 left-0 w-10 h-10 rounded-full border border-brand-primary pointer-events-none z-[9998] transition-all duration-300 ease-out mix-blend-multiply ${
          isHovering ? 'scale-150 bg-brand-primary/10 border-brand-primary/50' : 'scale-100 opacity-50'
        }`}
      />
      
      {/* Inner Dot */}
      <div 
        ref={cursorRef}
        className={`fixed top-0 left-0 w-2 h-2 bg-brand-primary rounded-full pointer-events-none z-[9999] -ml-1 -mt-1 transition-transform duration-75 mix-blend-multiply`}
      />
    </>
  );
};