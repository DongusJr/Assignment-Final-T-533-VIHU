import axios from "axios";
import type { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import styles from "../styles/Home.module.css";
import { EMOJI, Sign } from "../utils/constants";


const Home: NextPage = () => {
  const [isCreating, setIsCreating] = useState(false);
  const [playerName, setPlayerName] = useState("");
  const [secondPlayerName, setSecondPlayerName] = useState("");

  const router = useRouter();

  async function createGame() {
    try {
      const { data } = await axios.post("/api/new", {
        playerName,
        secondPlayerName,
      });
      return data.id;
    } catch (error) {
      throw error;
    }
  }

  return (
    <>
      <h1 className={styles.title} data-testid="title">Tic Tac Toe #️⃣</h1>
      <div  data-testid="homeGrid" className={styles.grid}>
        <form
          className={styles.form}
          onSubmit={async (event) => {
            event.preventDefault();
            setIsCreating(true);
            try {
              const id = await createGame();

              router.push("/game/" + id);
            } catch (error) {
              console.log("failed to create ", error);
            } finally {
              setIsCreating(false);
            }
          }}
          data-testid="newGameForm"
        >
          <input
            className={styles.input}
            value={playerName}
            placeholder={`${EMOJI[Sign.X]} Your Name`}
            onChange={(event) => setPlayerName(event.target.value)}
            data-testid="yourNameInput"
          />
          <input
            className={styles.input}
            value={secondPlayerName}
            placeholder={`${EMOJI[Sign.O]} Opponent Name`}
            onChange={(event) => setSecondPlayerName(event.target.value)}
            data-testid="opponentNameInput"
          />

          <button
            className={styles.startButton}
            disabled={isCreating}
            type="submit"
            data-testid="newGameButton"
          >
            Start Game
          </button>
        </form>
        <Link href="/game/list" data-testid="allGamesLink">See all games</Link>
      </div>
    </>
  );
};

export default Home;
