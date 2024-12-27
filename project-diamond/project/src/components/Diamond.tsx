import React, { useState } from 'react';
import { Diamond as DiamondIcon, Shield } from 'lucide-react';
import { Hand } from './Hand';

interface DiamondProps {
  isShieldOpen: boolean;
  onClick: () => void;
  isSuccess: boolean;
  currentPlayer: number;
}

export function Diamond({ isShieldOpen, onClick, isSuccess, currentPlayer }: DiamondProps) {
  const [isAttempting, setIsAttempting] = useState(false);
  const [isShaking, setIsShaking] = useState(false);

  const handleClick = () => {
    setIsAttempting(true);
    
    if (!isShieldOpen) {
      setIsShaking(true);
      setTimeout(() => setIsShaking(false), 500);
    }
    
    setTimeout(() => setIsAttempting(false), 300);
    onClick();
  };

  return (
    <div 
      className={`
        relative cursor-pointer group
        hover:scale-105 transition-all duration-300
        ${isShieldOpen ? 'animate-float' : ''}
      `}
      onClick={handleClick}
    >
      <div className="relative z-10">
        <DiamondIcon 
          size={32} 
          className={`
            text-blue-500 transition-all duration-300
            ${isShieldOpen ? 'opacity-100 drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]' : 'opacity-50'}
            ${isSuccess && isAttempting ? 'animate-collect' : ''}
            group-hover:drop-shadow-[0_0_10px_rgba(59,130,246,0.3)]
          `}
        />
        {!isShieldOpen && (
          <Shield 
            size={64} 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-gray-700 animate-pulse"
          />
        )}
      </div>

      <Hand 
        player={1}
        isGrabbing={isAttempting && currentPlayer === 1}
        isShaking={isShaking && currentPlayer === 1}
      />
      <Hand 
        player={2}
        isGrabbing={isAttempting && currentPlayer === 2}
        isShaking={isShaking && currentPlayer === 2}
      />

      {/* Interactive glow effect */}
      <div className={`
        absolute -bottom-4 left-1/2 -translate-x-1/2
        w-12 h-2 bg-blue-500/20 rounded-full blur-md
        transition-opacity duration-300
        ${isShieldOpen ? 'opacity-100' : 'opacity-0'}
      `} />
    </div>
  );
}