import React, { createContext, useCallback, useState, useEffect } from 'react';
import { GameState } from '../types/game';
import {
  TOTAL_CHANCES,
  WINNING_SCORE,
  SHIELD_TOGGLE_MIN,
  SHIELD_TOGGLE_MAX,
  SHIELD_OPEN_DURATION,
} from '../constants/game';

interface GameContextType extends GameState {
  handleDiamondClick: () => void;
  restartGame: () => void;
}

export const GameContext = createContext<GameContextType | null>(null);

export function GameProvider({ children }: { children: React.ReactNode }) {
  const [scores, setScores] = useState({ 1: 0, 2: 0 });
  const [chances, setChances] = useState({ 1: TOTAL_CHANCES, 2: TOTAL_CHANCES });
  const [currentPlayer, setCurrentPlayer] = useState(1);
  const [gameOver, setGameOver] = useState(false);
  const [winner, setWinner] = useState<number | null>(null);
  const [isShieldOpen, setIsShieldOpen] = useState(false);
  const [canClick, setCanClick] = useState(true);
  const [lastAttemptSuccess, setLastAttemptSuccess] = useState(false);

  const toggleShield = useCallback(() => {
    if (gameOver) return;

    const timeout = Math.random() * (SHIELD_TOGGLE_MAX - SHIELD_TOGGLE_MIN) + SHIELD_TOGGLE_MIN;
    
    setTimeout(() => {
      setIsShieldOpen(true);
      setTimeout(() => {
        setIsShieldOpen(false);
        toggleShield();
      }, SHIELD_OPEN_DURATION);
    }, timeout);
  }, [gameOver]);

  useEffect(() => {
    toggleShield();
  }, [toggleShield]);

  const handleDiamondClick = () => {
    if (!canClick || gameOver) return;

    setLastAttemptSuccess(isShieldOpen);

    if (isShieldOpen) {
      setScores(prev => ({
        ...prev,
        [currentPlayer]: prev[currentPlayer] + 1
      }));
      
      if (scores[currentPlayer] + 1 >= WINNING_SCORE) {
        setGameOver(true);
        setWinner(currentPlayer);
        return;
      }
    }

    setCanClick(false);
    setTimeout(() => setCanClick(true), 1000);

    setChances(prev => ({
      ...prev,
      [currentPlayer]: prev[currentPlayer] - 1
    }));

    if (chances[currentPlayer] <= 1) {
      setGameOver(true);
      setWinner(currentPlayer === 1 ? 2 : 1);
      return;
    }

    setCurrentPlayer(current => current === 1 ? 2 : 1);
  };

  const restartGame = () => {
    setScores({ 1: 0, 2: 0 });
    setChances({ 1: TOTAL_CHANCES, 2: TOTAL_CHANCES });
    setCurrentPlayer(1);
    setGameOver(false);
    setWinner(null);
    setCanClick(true);
    setIsShieldOpen(false);
    setLastAttemptSuccess(false);
  };

  return (
    <GameContext.Provider value={{
      scores,
      chances,
      currentPlayer,
      gameOver,
      winner,
      isShieldOpen,
      canClick,
      lastAttemptSuccess,
      handleDiamondClick,
      restartGame
    }}>
      {children}
    </GameContext.Provider>
  );
}