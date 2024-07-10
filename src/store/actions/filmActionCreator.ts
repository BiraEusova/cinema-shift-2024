import {getFilm} from "../../api/requests.ts";
import {AppDispatch} from "../store.ts";
import {filmSlice} from "../reducers/filmSlice.ts";

export const fetchFilm = (filmId: string) => async (dispatch: AppDispatch) => {
    try {
        dispatch(filmSlice.actions.filmFetching());
        let res = await getFilm(filmId);
        dispatch(filmSlice.actions.filmFetchingSuccess(res.film));
    } catch ( e: any ) {
        throw e;
    }
}


