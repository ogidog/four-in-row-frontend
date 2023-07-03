import {configureStore} from "@reduxjs/toolkit";
import ChipSlice from "entities/chip/slices/slice";

export const store = configureStore({
    reducer: {
        [ChipSlice.name]: ChipSlice,
    }
});

export type RootState = ReturnType<typeof store.getState>;
