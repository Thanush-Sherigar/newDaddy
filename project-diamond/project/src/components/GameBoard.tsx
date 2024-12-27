import React from 'react';
import { Diamond } from './Diamond';
import { PlayerScore } from './PlayerScore';
import { GameOver } from './GameOver';
import { useGame } from '../hooks/useGame';

export function GameBoard() {
  const { 
    scores,
    chances,
    currentPlayer,
    isShieldOpen,
    gameOver,
    winner,
    handleDiamondClick,
    lastAttemptSuccess,
    canClick
  } = useGame();

  return (
    <div className="relative min-h-[600px]">
      <div className="absolute top-0 left-0 w-1/3">
        <PlayerScore 
          player={1}
          score={scores[1]}
          isActive={currentPlayer === 1}
          chances={chances[1]}
        />
      </div>
      
      <div className="absolute top-0 right-0 w-1/3">
        <PlayerScore 
          player={2}
          score={scores[2]}
          isActive={currentPlayer === 2}
          chances={chances[2]}
        />
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="flex flex-col items-center gap-3">
          <Diamond 
            isShieldOpen={isShieldOpen}
            onClick={handleDiamondClick}
            isSuccess={lastAttemptSuccess}
            currentPlayer={currentPlayer}
          />
          <div className="w-24 h-3 bg-gradient-to-b from-gray-300 to-gray-400 rounded-full shadow-inner" />
        </div>
        
        <div className="text-center text-gray-600 mt-6">
          {canClick ? (
            isShieldOpen ? 
              "Quick! The shield is open!" : 
              "Wait for the shield to open..."
          ) : (
            "Please wait..."
          )}
        </div>
      </div>

      {gameOver && winner && (
        <GameOver 
          winner={winner}
          player={currentPlayer}
          onRestart={useGame().restartGame}
        />
      )}
    </div>
  );
}