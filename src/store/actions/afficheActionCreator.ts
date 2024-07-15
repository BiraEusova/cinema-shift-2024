import {getFilmsToday} from "@/api/requests.ts";
import {AppDispatch, RootState} from "../store.ts";
import {afficheSlice} from "../reducers/afficheSlice.ts";

export const fetchFilms = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(afficheSlice.actions.filmsFetching());
        let res = await getFilmsToday();
        dispatch(afficheSlice.actions.filmsFetchingSuccess(res.films));
    } catch ( e: any ) {
        throw e;
    }
}


