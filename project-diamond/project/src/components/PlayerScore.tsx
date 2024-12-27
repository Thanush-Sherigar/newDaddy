import React from 'react';
import { User } from 'lucide-react';

interface PlayerScoreProps {
  player: number;
  score: number;
  isActive: boolean;
  chances: number;
}

export function PlayerScore({ player, score, isActive, chances }: PlayerScoreProps) {
  return (
    <div className={`p-6 rounded-lg ${isActive ? 'bg-blue-100' : 'bg-gray-100'} transition-colors`}>
      <div className="flex items-center gap-3 mb-2">
        <User className="text-blue-600" />
        <h2 className="text-xl font-bold">Player {player}</h2>
      </div>
      <div className="space-y-1">
        <p className="text-lg">Score: <span className="font-bold">{score}</span></p>
        <p className="text-sm text-gray-600">Chances left: {chances}</p>
      </div>
    </div>
  );
}