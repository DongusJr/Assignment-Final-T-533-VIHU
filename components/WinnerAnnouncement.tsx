import { Game } from "../lib/gameStore";
import styles from "../styles/Home.module.css";
import { Sign } from "../utils/constants";
import { getPlayerNameFromSign } from "../utils/gameUtils";

interface Props {
  winner: Sign | string;
  game: Game;
}
// export function calculateWinner(
//   squares: Sign[] | string[]
// ): Sign | null | string {
export function WinnerAnnouncement({ winner, game }: Props) {
  if (winner){
    return (
      <h1 className={styles.title}>
        🎉🎊🍾🏆
        <div data-testid="winnerAnnouncement">{getPlayerNameFromSign(winner, game)} Won</div>
      </h1>
    );
  } else {
    return (
      <h1 className={styles.title}>
        🤝
        <div data-testid="winnerAnnouncement">Draw</div>
      </h1>
    );
  }
}
