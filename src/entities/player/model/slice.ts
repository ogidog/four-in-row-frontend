import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface IPlayer {
    playerId: number;
}

const initialState: IPlayer = {
    playerId: 1 | 2 | -1
}


export const PlayerSlice = createSlice({
    name: "player",
    initialState: initialState,
    reducers: {
        setPlayerId: (state, action: PayloadAction<IPlayer["playerId"]>) => {
            state.playerId = action.payload;
        }
    }
});

export const {setPlayerId} = PlayerSlice.actions;
export default PlayerSlice.reducer;
