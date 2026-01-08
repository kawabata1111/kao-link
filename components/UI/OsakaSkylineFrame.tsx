import React from 'react';

export const OsakaSkylineFrame: React.FC = () => {
  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden text-brand-primary">
      <svg
        className="w-full h-full"
        viewBox="0 0 1600 600"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="
            M 2 0
            L 2 560
            Q 2 598 40 598
            L 100 598
            
            /* House */
            L 100 570 L 120 550 L 140 570 L 140 598
            L 160 598

            /* Small Building */
            L 160 560 L 190 560 L 190 598
            L 210 598

            /* Tsutenkaku Tower */
            L 220 598 L 230 530 /* Base Left */
            L 220 530 L 220 520 L 240 520 /* Deck 1 Left */
            L 245 420 /* Shaft Left */
            L 235 420 L 235 410 L 248 410 /* Deck 2 Left */
            L 250 350 /* Spire Top */
            L 252 410 /* Deck 2 Right Start */
            L 265 410 L 265 420 L 255 420 /* Deck 2 Right */
            L 260 520 /* Shaft Right */
            L 280 520 L 280 530 L 270 530 /* Deck 1 Right */
            L 280 598 /* Base Right */
            L 300 598

            /* Round Gate / Zoo Entrance */
            L 300 598 L 300 560
            Q 320 530 340 560
            L 340 598
            L 360 598

            /* Abeno Harukas */
            L 360 598 L 360 400
            L 390 400 L 390 450
            L 420 450 L 420 598
            
            /* Continue Line */
            L 440 598
            L 440 560 L 480 540 L 480 598 /* Castle hint */
            
            L 1560 598
            Q 1598 598 1598 560
            L 1598 0
          "
          stroke="#E67E22"
          strokeWidth="2"
          fill="none"
          vectorEffect="non-scaling-stroke"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};