import React, { useEffect, useState } from 'react';

export const LoadingScreen: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsFading(true);
      setTimeout(() => {
        setIsVisible(false);
      }, 800); // Fade out duration
    }, 2000); // Display duration

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div 
      className={`fixed inset-0 z-[100] bg-white flex flex-col items-center justify-center transition-opacity duration-800 ${
        isFading ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="relative mb-8">
        <div className="w-24 h-24 bg-brand-primary rounded-2xl flex items-center justify-center text-white font-bold text-4xl shadow-xl animate-bounce">
          K
        </div>
        <div className="absolute inset-0 bg-brand-primary rounded-2xl opacity-50 animate-ping"></div>
      </div>
      
      <div className="font-english font-bold text-2xl tracking-[0.2em] text-gray-800 animate-pulse">
        KAO LINK
      </div>
      
      <div className="mt-4 w-48 h-1 bg-gray-100 rounded-full overflow-hidden">
        <div className="h-full bg-brand-primary animate-[loading_2s_ease-in-out_infinite] w-full origin-left"></div>
      </div>

      <style>{`
        @keyframes loading {
          0% { transform: scaleX(0); }
          50% { transform: scaleX(1); }
          100% { transform: scaleX(0); transform-origin: right; }
        }
      `}</style>
    </div>
  );
};