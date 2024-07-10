import {configureStore} from "@reduxjs/toolkit";
import afficheReducer from "./reducers/afficheSlice.ts";
import filmReducer from "./reducers/filmSlice.ts";

const store = configureStore({
        reducer: {
            affiche: afficheReducer,
            film: filmReducer
        }
    }
);

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;

export default store;