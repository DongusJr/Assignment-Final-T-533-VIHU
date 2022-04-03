import { rest } from "msw";
import { setupServer } from "msw/node";
import {Sign, pepTalks} from "../utils/constants";

const EMPTY_MOVES = Array(9).fill("");
// TODO create your mock api server here along with your mock data (the data should be in different files)
export const server = setupServer();

export const emptyGameData = {
    emptyGame: rest.get('api/game', (req, res, ctx) => {
        return res(ctx.json(
            {id: "1",
            player1_name: "Hello",
            player2_name: "World",
            moves: EMPTY_MOVES,
            }))}),
    newGame: rest.post('api/new', (req, res, ctx) => {
            return res(ctx.json(
                {id: "1",
                player1_name: "Hello",
                player2_name: "World",
                moves: EMPTY_MOVES,
                }));
            }),
    player1WonGame: rest.get('api/game/1', (req, res, ctx) => {
        return res(ctx.json(
            {id: "1",
            player1_name: "Hello",
            player2_name: "World",
            moves: [Sign.X, Sign.X, Sign.X,
                    Sign.O, Sign.O, "",
                    "", "", ""],
            }));
        }),
};