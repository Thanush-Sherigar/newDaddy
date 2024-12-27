import React from 'react';
import { GameProvider } from './contexts/GameContext';
import { GameBoard } from './components/GameBoard';

export default function App() {
  return (
    <GameProvider>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-center mb-8 text-blue-800">
            Diamond Collector
          </h1>
          <GameBoard />
        </div>
      </div>
    </GameProvider>
  );
}