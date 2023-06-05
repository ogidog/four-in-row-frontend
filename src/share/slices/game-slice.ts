import {createSelector, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "share/store/store";
import exp from "constants";
import gameField from "../../entities/game-field/game-field";

export interface IGameSlice {
    gameFields: number[][];
}

const initState: IGameSlice = {
    gameFields: Array.from(Array(6), () => Array(7).fill(0))
}

interface PlayerMove {
    playerId: number,
    column: number
}

const getAvailableRow = (gameFields: IGameSlice["gameFields"], column: number) => {
    const row = gameFields.map(row => row[column]).findIndex(element => element !== 0);
    if (row === -1 && gameFields[5][column] === 0) {
        return 5;
    }
    if (row === -1 && gameFields[0][column] !== 0) {
        return -1;
    }
    return row - 1;
}

const gameSlice = createSlice({
    name: "game",
    initialState: initState,
    reducers: {
        setGameField: (state, action: PayloadAction<PlayerMove>) => {
            let availableRow = getAvailableRow(state.gameFields, action.payload.column);
            if (availableRow != -1) {
                state.gameFields[availableRow][action.payload.column] = action.payload.playerId;
            }
        }
    }
})

export const selectAvailableRowByColumn = (column: number) => createSelector(
    (state: RootState) => state.game.gameFields,
    (gameFields: IGameSlice["gameFields"]) => {
        return getAvailableRow(gameFields, column);
    }
)

export default gameSlice.reducer;
export const {setGameField} = gameSlice.actions;
