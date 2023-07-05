import {configureStore} from "@reduxjs/toolkit";
import BoardSlice from "widgets/board/model/slice";

export const store = configureStore({
    reducer: {
        [BoardSlice.name]: BoardSlice.reducer,
    }
});

export type RootState = ReturnType<typeof store.getState>;
