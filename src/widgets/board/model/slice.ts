import {createSelector, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "app/model/store";
import {RangeOf} from "share/types";
import {ChipValue} from "entities/chip/model/types";

type ColumnNumber = RangeOf<0, 6>;

export interface IChipSlice {
    chips: ChipValue[][]
}

const initialState: IChipSlice = {
    chips: Array.from(Array(6), () => Array(7).fill(0)),
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
        setChip: (state, action: PayloadAction<{ column: ColumnNumber, value: ChipValue }>) => {
            let availableRow = getAvailableRow(state.chips, action.payload.column);
            if (availableRow != -1) {
                state.chips[availableRow][action.payload.column] = action.payload.value;
            }
        }
    }
})

// export const selectAvailableRowByColumn = (column: ColumnNumber) => createSelector(
//     (state: RootState) => state.board.chips,
//     (chips: IChipSlice["chips"]) => {
//         return getAvailableRow(chips, column);
//     }
// );

export const {setChip} = BoardSlice.actions;
export default BoardSlice;
