import { Game } from "../lib/gameStore";
import {
  calculateWinner,
  checkForDraw,
  getPlayerNameFromSign,
  getRandomPepTalk,
  getWhosTurnItIs,
} from "../utils/gameUtils";
import styles from "../styles/Home.module.css";
import { WinnerAnnouncement } from "./WinnerAnnouncement";

interface Props {
  game: Game;
}

export function BoardHeader({ game }: Props) {
  const nextTurnSign = getWhosTurnItIs(game.moves);
  const winner = calculateWinner(game.moves);
  const isDraw = checkForDraw(game.moves);
  if (winner || isDraw) {
    return <WinnerAnnouncement winner={winner} game={game} />;
  }
  return (
    <h1 className={styles.title}>
      {getRandomPepTalk()}
      <div data-testid="playerName">{getPlayerNameFromSign(nextTurnSign, game)}</div>
    </h1>
  );
}
