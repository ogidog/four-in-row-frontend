import {createSelector, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "app/model/store";
import {ChipValue, ColumnNumber} from "entities/chip/model/types";

export interface IChipSlice {
    chips: ChipValue[][],
    selectedColumn: ColumnNumber | -1,
    player: 0 | 1 | 2,
}

const initialState: IChipSlice = {
    chips: Array.from(Array(6), () => Array(7).fill(0)),
    selectedColumn: -1,
    player: 0,
}

const getAvailableRow = (chips: IChipSlice["chips"], column: ColumnNumber) => {
    const row = chips.map(row => row[column]).findIndex(element => element !== 0);
    if (row === -1 && chips[5][column] === 0) {
        return 5;
    }
    if (row === -1 && chips[0][column] !== 0) {
        return -1;
    }
    return row - 1;
}

const BoardSlice = createSlice({
    name: "board",
    initialState: initialState,
    reducers: {
        setChip: (state, action: PayloadAction<{ column: ColumnNumber, }>) => {
            let availableRow = getAvailableRow(state.chips, action.payload.column);
            if (availableRow !== -1) {
                let value: ChipValue = state.player === 0 ? 1 : state.player === 2 ? 1 : 2;
                state.chips[availableRow][action.payload.column] = value;
                state.selectedColumn = action.payload.column;
                state.player = value;
            }
        }
    }
})

export const selectAvailableRowByColumn = (column: ColumnNumber) => createSelector(
    (state: RootState) => state.board.chips,
    (chips: IChipSlice["chips"]) => {
        return getAvailableRow(chips, column);
    }
);

export const {setChip} = BoardSlice.actions;
export default BoardSlice;
