import { api } from './instance';
import {AxiosError} from "axios";
import {Film} from "../types";

//TODO: как правильно типизировать запросы

type FilmsTodayResp = {
    success: string,
    films: [Film]
}
export const getFilmsToday  = () =>
    api.get<FilmsTodayResp>('/cinema/today')
        .then((res) => res.data)
        .catch((e: AxiosError) => {
            console.log(e);
        });

export const getFilm = (filmId) =>
    api.get(`/cinema/film/${filmId}`);

export const getFilmSchedule = (filmId) =>
    api.get(`/cinema/film/${filmId}/schedule`);
