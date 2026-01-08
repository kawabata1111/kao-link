import React, { useState, useEffect, useRef } from 'react';

interface CountUpProps {
  end: number;
  duration?: number;
  suffix?: string;
}

export const CountUp: React.FC<CountUpProps> = ({ end, duration = 2000, suffix = '' }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let startTime: number | null = null;
          
          const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = timestamp - startTime;
            const percentage = Math.min(progress / duration, 1);
            
            // Ease out quart
            const ease = 1 - Math.pow(1 - percentage, 4);
            
            setCount(Math.floor(ease * end));
            
            if (progress < duration) {
              window.requestAnimationFrame(animate);
            } else {
              setCount(end);
            }
          };
          
          window.requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [end, duration, hasAnimated]);

  return (
    <span ref={ref} className="font-english font-bold">
      {count}{suffix}
    </span>
  );
};