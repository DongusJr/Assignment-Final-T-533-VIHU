import { useEffect, useState } from "react";
import Board from "../../components/Board";
import axios from "axios";
import styles from "../../styles/Home.module.css";
import { Game } from "../../lib/gameStore";
import { BoardHeader } from "../../components/BoardHeader";

function getGameId() {
  return window.location.pathname.split("/")[
    window.location.pathname.split("/").length - 1
  ];
}

const GamePage = () => {
  const [game, setGame] = useState<Game>();

  useEffect(() => {
    getGame();
  }, []);

  async function getGame() {
    const id = getGameId();
    const { data } = await axios.get("/api/game/" + id);
    setGame(data);
  }

  if (!game) {
    return (
      <div>
        <h1 className={styles.title} data-testid="loadingText">Loading..🔃</h1>
      </div>
    );
  }

  return (
    <>
      <BoardHeader game={game} />
      <div className={styles.grid}>
        <Board
          moves={game.moves}
          onMove={async (moves) => {
            const { data } = await axios.put("/api/game/" + getGameId(), {
              moves,
            });
            setGame(data);
          }}
        />
      </div>
    </>
  );
};

export default GamePage;
