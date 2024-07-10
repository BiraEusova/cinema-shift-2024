export type Film = {
    id: string,
    name: string,
    originalName: string,
    description: string,
    releaseDate: string,
    actors: [FilmPerson],
    directors: [FilmPerson],
    runtime: number,
    ageRating: string,
    genres: [string],
    userRatings: {
        kinopoisk: string,
        imdb: string
    },
    img: string,
    country: Country
}

export type FilmPerson = {
    id: string,
    professions: [string],
    fullName: string
}

export type Country = {
    id: number,
    code: string,
    code2: string,
    name: string
}