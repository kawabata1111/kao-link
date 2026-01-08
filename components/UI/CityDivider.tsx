import React from 'react';

interface CityDividerProps {
  position?: 'top' | 'bottom';
  fill?: string;
}

export const CityDivider: React.FC<CityDividerProps> = ({ position = 'bottom', fill = '#ffffff' }) => {
  const rotation = position === 'top' ? 'rotate(180deg)' : 'rotate(0deg)';
  
  return (
    <div className="w-full leading-[0] overflow-hidden" style={{ transform: rotation }}>
      <svg 
        className="w-full h-12 md:h-24 block" 
        viewBox="0 0 1200 120" 
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path 
          d="M0,120 L1200,120 L1200,0 C1150,60 1100,20 1050,40 L1000,10 L950,50 L900,20 L850,60 L800,30 L750,70 L700,40 L650,80 L600,20 L550,60 L500,30 L450,70 L400,40 L350,80 L300,30 L250,60 L200,10 L150,50 L100,20 L50,60 L0,0 Z" 
          fill={fill}
          opacity="0.2"
        />
        <path 
          d="M0,120 L1200,120 L1200,60 L1100,90 L1000,50 L900,80 L800,40 L700,90 L600,50 L500,80 L400,60 L300,90 L200,50 L100,80 L0,40 Z" 
          fill={fill} 
        />
      </svg>
    </div>
  );
};