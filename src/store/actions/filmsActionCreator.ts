import {getFilmsToday} from "../../api/requests.ts";
import {AppDispatch, RootState} from "../store.ts";
import {filmsSlice} from "../reducers/filmsSlice.ts";

export const fetchFilms = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(filmsSlice.actions.filmsFetching());
        let res = await getFilmsToday();
        dispatch(filmsSlice.actions.filmsFetchingSuccess(res.films));
    } catch ( e: any ) {
        throw e;
    }
}


