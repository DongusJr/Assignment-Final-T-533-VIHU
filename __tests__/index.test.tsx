import React from "react";
import "@testing-library/jest-dom";
import { getPage } from 'next-page-tester';
import {render, fireEvent, waitFor, screen} from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import Home from "../pages/index";
import * as gameUtils from '../utils/gameUtils';
import {Sign} from "../utils/constants";
import {server, emptyGameData} from "../mocks/index";

// Good starting point: https://testing-library.com/docs/react-testing-library/example-intro

// TODO setup your mock api here (from the mocks folder)
// Feel free to add more files to test various other components

const XEmoji = "❌"
const OEmoji = "⭕"
const player1Name = "Hello";
const player2Name = "World";
const expectedTitle = "Tic Tac Toe #️⃣";
const defaultYourName = "❌ Your Name";
const defaultOppName = "⭕ Opponent Name";

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("🕹 Tic-Tac-Toe App Home Page", () => {
  it('should display Header when loaded', async () => {
    render(<Home />);

      await waitFor(() => screen.getByRole("heading"));

      expect(screen.getByTestId("title")).toHaveTextContent(expectedTitle);
  });

  it('Should display default players names as placeholder in input field', async () => {
    render(<Home />);

    await waitFor(() => screen.getByTestId("opponentNameInput"));

    let yourInput = screen.getByTestId("yourNameInput");
    let oppInput = screen.getByTestId("opponentNameInput");
    expect(yourInput).toHaveAttribute("placeholder", defaultYourName);
    expect(oppInput).toHaveAttribute("placeholder", defaultOppName);
  })

  it('Should set names of players from input when new game is started', async () => {
    server.use(emptyGameData.emptyGame, emptyGameData.newGame);
    
    const {render} = await getPage({
      route: '/',
    });

    render();
    let yourInput = await screen.findByTestId("yourNameInput");
    let oppInput = await screen.findByTestId("opponentNameInput");
    fireEvent.change(yourInput, {target: {value: player1Name}});
    fireEvent.change(oppInput, {target: {value: player2Name}});
    let submitButton = await screen.findByTestId("newGameButton");
    fireEvent.click(submitButton);

    let playerName = await screen.findByTestId("playerName");
    expect(playerName).toHaveTextContent(player1Name);
  });

  it("Should navigate to all games screen once 'See all games is clicked'", async () => {
    const {render} = await getPage({
      route: '/',
    });

    render();
    let allGamesLink  = await screen.findByRole('link');
    fireEvent.click(allGamesLink);
    let gamesText = await screen.findByTestId('gamesText');
    expect(gamesText).toHaveTextContent('🎱 All games');
  });
});

describe("🕹 Tic-Tac-Toe App Game Page", () => {
  it('should display Player 1 won if player 1 wins', async () => {
    server.use(emptyGameData.player1WonGame);
    const {render} = await getPage({
      route: '/game/1',
    });

    render();

    let winner = await screen.findByTestId("winnerAnnouncement");
    expect(winner).toHaveTextContent(XEmoji + " " + player1Name + " Won")

    let board =await screen.findAllByTestId("ticCell")
    expect(board[0]).toHaveTextContent(XEmoji)
    expect(board[1]).toHaveTextContent(XEmoji)
    expect(board[2]).toHaveTextContent(XEmoji)
    expect(board[3]).toHaveTextContent(OEmoji)
    expect(board[4]).toHaveTextContent(OEmoji)
    expect(board[5]).toHaveTextContent("")
    expect(board[6]).toHaveTextContent("")
    expect(board[7]).toHaveTextContent("")
    expect(board[8]).toHaveTextContent("")
  });

  it('should display Player 2 won if player 2 wins', async () => {
    server.use(emptyGameData.player2WonGame);
    const {render} = await getPage({
      route: '/game/2',
    });

    render();

    let winner = await screen.findByTestId("winnerAnnouncement");
    expect(winner).toHaveTextContent(OEmoji + " " + player2Name + " Won")
    
    let board =await screen.findAllByTestId("ticCell")
    expect(board[0]).toHaveTextContent(XEmoji)
    expect(board[1]).toHaveTextContent(XEmoji)
    expect(board[2]).toHaveTextContent("")
    expect(board[3]).toHaveTextContent(OEmoji)
    expect(board[4]).toHaveTextContent(OEmoji)
    expect(board[5]).toHaveTextContent(OEmoji)
    expect(board[6]).toHaveTextContent("")
    expect(board[7]).toHaveTextContent("")
    expect(board[8]).toHaveTextContent(XEmoji)
  });

  it('should display draw in a drawn game', async () => {
    server.use(emptyGameData.drawGame);
    const {render} = await getPage({
      route: '/game/3',
    });

    render();

    let winner = await screen.findByTestId("winnerAnnouncement");
    expect(winner).toHaveTextContent("🤝 Draw")

    let board =await screen.findAllByTestId("ticCell")
    expect(board[0]).toHaveTextContent(XEmoji)
    expect(board[1]).toHaveTextContent(OEmoji)
    expect(board[2]).toHaveTextContent(XEmoji)
    expect(board[3]).toHaveTextContent(XEmoji)
    expect(board[4]).toHaveTextContent(OEmoji)
    expect(board[5]).toHaveTextContent(OEmoji)
    expect(board[6]).toHaveTextContent(OEmoji)
    expect(board[7]).toHaveTextContent(XEmoji)
    expect(board[8]).toHaveTextContent(XEmoji)
  });
});