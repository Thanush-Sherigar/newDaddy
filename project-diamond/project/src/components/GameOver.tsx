import React from 'react';
import { Trophy, XCircle } from 'lucide-react';

interface GameOverProps {
  winner: number;
  player: number;
  onRestart: () => void;
}

export function GameOver({ winner, player, onRestart }: GameOverProps) {
  const hasWon = winner === player;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-xl text-center max-w-md mx-4">
        {hasWon ? (
          <>
            <Trophy className="w-16 h-16 text-yellow-500 mx-auto mb-4 animate-bounce" />
            <h2 className="text-2xl font-bold text-green-600 mb-2">You Won!</h2>
          </>
        ) : (
          <>
            <XCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-red-600 mb-2">You Lost!</h2>
          </>
        )}
        <p className="text-gray-600 mb-6">
          {hasWon 
            ? "Congratulations! You've collected the most diamonds!" 
            : "Better luck next time!"}
        </p>
        <button
          onClick={onRestart}
          className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition-colors"
        >
          Play Again
        </button>
      </div>
    </div>
  );
}