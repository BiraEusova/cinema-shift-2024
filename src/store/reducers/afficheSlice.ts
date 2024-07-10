import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {Film} from "../../types";
import {fetchFilms} from "../actions/afficheActionCreator.ts";

type FilmsState = {
    films: [Film],
    isLoading: boolean,
    error: string,
}
const initialState : FilmsState= {
    films: [],
    isLoading: true,
    error: ''
}
export const afficheSlice = createSlice({
    name: 'films',
    initialState,
    reducers: {
        filmsFetching: (state) => {
            state.isLoading = true;
        },
        filmsFetchingSuccess: (state, action: PayloadAction<[Film]>) => {
            state.films = action.payload;
            state.isLoading = false;
        },
        filmsFetchingError: (state, action: PayloadAction<string>) => {
            state.isLoading = false;
            state.error = 'Error: ' + action.payload;
        }
    }
})

export const { filmsFetching, filmsFetchingSuccess, filmsFetchingError } = afficheSlice.actions

export default afficheSlice.reducer
