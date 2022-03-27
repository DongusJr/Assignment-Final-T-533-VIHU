import { Game } from "../../lib/gameStore"
import * as gameUtils from '../gameUtils';
import {Sign, pepTalks} from "../constants";

// Good starting point: https://testing-library.com/docs/react-testing-library/example-intro

// TODO setup your mock api here (from the mocks folder)
// Feel free to add more files to test various other components



describe("calculateWinner", () => {

  it("should return Sign.O as winner from calculateWinner for winning board", () => {
    let winningBoard = [Sign.O, Sign.O, Sign.O,
                        Sign.X, "", Sign.X,
                        "", Sign.X, ""];
  const result = gameUtils.calculateWinner(winningBoard);
  expect(result).toBe(Sign.O);
  });

  it("should return Sign.X as winner from calculateWinner for winning board", () => {
    let winningBoard = [Sign.O, "", Sign.X,
                        Sign.O, Sign.X, "",
                        Sign.X, "", ""];
  const result = gameUtils.calculateWinner(winningBoard);
  expect(result).toBe(Sign.X);
  });

  it("should return null when there is no winner with not all moves complete", () => {
    let unfinishedBoard = [Sign.X, "", Sign.O,
                          "", Sign.X, "",
                          Sign.X, "", Sign.O];
    const result = gameUtils.calculateWinner(unfinishedBoard);
    expect(result).toBe(null);             
  });

  it("should return null when there is no winner with all moves complete", () => {
    let finishedBoard = [Sign.X, Sign.O, Sign.O,
                          Sign.O, Sign.X, Sign.X,
                          Sign.X, Sign.X, Sign.O];
    const result = gameUtils.calculateWinner(finishedBoard);
    expect(result).toBe(null);             
  });
});



describe("calculateWinner", () => {
  let testGame : Game;

  beforeEach(() => {
    testGame = {
      id: "123",
      player1_name: "testPlayer1",
      player2_name: "testPlayer2",
      moves: Array(9).fill(""),
    };
  });

  it("should return player1 name for the sign X", () => {
    const result = gameUtils.getPlayerNameFromSign(Sign.X, testGame);
    expect(result).toBe("❌ testPlayer1 ");             
  });

  it("should return player2 name for the sign O", () => {
    const result = gameUtils.getPlayerNameFromSign(Sign.O, testGame);
    expect(result).toBe("⭕ testPlayer2 ");             
  });
  
  it("should return an empty string for invalid Sign", () => {
    const result = gameUtils.getPlayerNameFromSign("", testGame);
    expect(result).toBe("");             
  });
});

describe("getWhosTurnItIs", () => {

  it("should return Sign X if it is the first turn", () => {
    let noMoves = Array(9).fill("");
    const result = gameUtils.getWhosTurnItIs(noMoves);
    expect(result).toBe(Sign.X);             
  });

    it("should return Sign O if there are more X's on the board", () => {
    let moreXsBoard = [Sign.X, "", Sign.O,
                        "", Sign.X, "",
                        Sign.X, "", Sign.O];
    const result = gameUtils.getWhosTurnItIs(moreXsBoard);
    expect(result).toBe(Sign.O);             
  });

  it("should return Sign X if there are equal amount of Os and Xs on the board", () => {
    let moreXsBoard = [Sign.X, "", Sign.O,
                        Sign.O, Sign.X, Sign.X,
                        "", "", Sign.O];
    const result = gameUtils.getWhosTurnItIs(moreXsBoard);
    expect(result).toBe(Sign.X);             
  });

  it("should return Sign O if the board is full", () => {
    let moreXsBoard = [Sign.X, Sign.O, Sign.O,
                        Sign.O, Sign.X, Sign.X,
                        Sign.X, Sign.X, Sign.O];
    const result = gameUtils.getWhosTurnItIs(moreXsBoard);
    expect(result).toBe(Sign.O);             
  });
});


describe("getRandomPepTalk", () => {

  it("should return one valid pep talk from the pep talk list", () => {
    const result = gameUtils.getRandomPepTalk();
    expect(pepTalks.includes(result)).toBeTruthy()        
  });
});
