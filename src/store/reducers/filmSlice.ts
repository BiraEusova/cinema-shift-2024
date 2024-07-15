import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {Film} from "@/types";

type FilmState = {
    film: Film | undefined,
    isLoading: boolean,
    error: string,
}
const initialState : FilmState = {
    film: undefined ,
    isLoading: true,
    error: ''
}
export const filmSlice = createSlice({
    name: 'films',
    initialState,
    reducers: {
        filmFetching: (state) => {
            state.isLoading = true;
        },
        filmFetchingSuccess: (state, action: PayloadAction<Film>) => {
            state.film = action.payload;
            state.isLoading = false;
        },
        filmFetchingError: (state, action: PayloadAction<string>) => {
            state.isLoading = false;
            state.error = 'Error: ' + action.payload;
        }
    }
})

export const { filmFetching, filmFetchingSuccess, filmFetchingError } = filmSlice.actions

export default filmSlice.reducer
