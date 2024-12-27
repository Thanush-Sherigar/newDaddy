import React from 'react';
import { Hand as HandIcon } from 'lucide-react';

interface HandProps {
  isGrabbing: boolean;
  isShaking: boolean;
  player: 1 | 2;
}

export function Hand({ isGrabbing, isShaking, player }: HandProps) {
  const isLeftHand = player === 1;
  
  return (
    <div className={`
      absolute top-1/2 -translate-y-1/2
      transition-transform duration-300
      ${isLeftHand ? '-left-12' : '-right-12'}
      ${isGrabbing ? `${isLeftHand ? 'translate-x-6' : '-translate-x-6'} scale-90` : ''}
      ${isShaking ? 'animate-shake' : ''}
    `}>
      <HandIcon 
        size={40} 
        className={`
          text-orange-700 transform
          ${isLeftHand ? 'rotate-90' : '-rotate-90'}
          transition-transform duration-300
          ${isGrabbing ? 'scale-95' : ''}
        `}
      />
    </div>
  );
}