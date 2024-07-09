import { api } from './instance';
import {AxiosError, AxiosResponse} from "axios";
import {Film} from "../types";

//TODO: как правильно типизировать запросы

interface Response {
    success: boolean, //TODO: всегда приходит 200, а ошибка проверяется по success?
    reason: string
}

interface ResponseFilmsToday extends Response{
    films: [Film]
}

interface ResponseFilm extends Response{
    film: Film
}

export const getFilmsToday = async () => {
    const response = await api.get<ResponseFilmsToday>('/cinema/today')
    return response.data as ResponseFilmsToday;
}

export const getFilm = async (filmId) => {
    const response = await api.get<ResponseFilm>(`/cinema/film/${filmId}`);
    return response.data as ResponseFilm;
}


export const getFilmSchedule = (filmId) =>
    api.get(`/cinema/film/${filmId}/schedule`);
