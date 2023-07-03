import {createSelector, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "app/model/store";
import {RangeOf} from "share/types";

type ColumnNumber = RangeOf<0, 6>;
type ChipValues = RangeOf<0, 2>

export interface IChipSlice {
    chips: ChipValues[][]
    column: ColumnNumber
    value: ChipValues
}

const initialState: IChipSlice = {
    chips: Array.from(Array(6), () => Array(7).fill(0)),
    column: 0,
    value: 0,
}

const getAvailableRow = (gameFields: IChipSlice["chips"], column: IChipSlice["column"]) => {
    const row = gameFields.map(row => row[column]).findIndex(element => element !== 0);
    if (row === -1 && gameFields[5][column] === 0) {
        return 5;
    }
    if (row === -1 && gameFields[0][column] !== 0) {
        return -1;
    }
    return row - 1;
}

const ChipSlice = createSlice({
    name: "chip",
    initialState: initialState,
    reducers: {
        setChip: (state, action: PayloadAction<Omit<IChipSlice, "chips">>) => {
            let availableRow = getAvailableRow(state.chips, action.payload.column);
            if (availableRow != -1) {
                state.chips[availableRow][action.payload.column] = action.payload.value;
            }
        }
    }
})

export const selectAvailableRowByColumn = (column: ColumnNumber) => createSelector(
    (state: RootState) => state.game.chips,
    (gameFields: IChipSlice["chips"]) => {
        return getAvailableRow(gameFields, column);
    }
)

export const {setChip} = ChipSlice.actions;
export default ChipSlice.reducer;
