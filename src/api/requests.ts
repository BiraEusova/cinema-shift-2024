import { api } from './instance';

export const getFilmsToday = () =>
    api.get('/cinema/today');
export const getFilm = (filmId) =>
    api.get(`/cinema/film/${filmId}`);

export const getFilmSchedule = (filmId) =>
    api.get(`/cinema/film/${filmId}/schedule`);
