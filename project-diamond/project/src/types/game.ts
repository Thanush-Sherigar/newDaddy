export interface GameState {
  scores: Record<number, number>;
  chances: Record<number, number>;
  currentPlayer: number;
  gameOver: boolean;
  winner: number | null;
  lastAttemptSuccess: boolean;
  isShieldOpen: boolean;
  canClick: boolean;
}