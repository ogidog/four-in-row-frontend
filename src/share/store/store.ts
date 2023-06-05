import {configureStore} from "@reduxjs/toolkit";
import gameSlice from "share/slices/game-slice";

export const store = configureStore({
    reducer: {
        "game": gameSlice,
    }
});

export type RootState = ReturnType<typeof store.getState>;
