import { User } from "../types/user";

export const calculateUserAttributes = ({
  id,
  name
}: {
  id: number;
  name?: string;
}) => {
  const user = userCalculator({ id, name } as User);
  return user;
};

const userCalculator = ({
  id,
  name = "",
  gamesPlayed = 0,
  gamesWon = 0,
  totalPoints = 0,
  lastDatePlayed = null
}: User): User => {
  const winPercent = gamesPlayed ? gamesWon / gamesPlayed : 0;
  const pointsPerGame = gamesPlayed ? totalPoints / gamesPlayed : 0;

  return {
    id,
    name,
    gamesPlayed,
    gamesWon,
    winPercent,
    totalPoints,
    pointsPerGame,
    lastDatePlayed
  };
};

export default userCalculator;
