export interface User {
  id: number,
  name: string;
  gamesPlayed: number,
  gamesWon: number,
  winPercent: number,
  totalPoints: number,
  pointsPerGame: number,
  lastDatePlayed: Date,
}
