//TODO: нормально ли вообще вот так самому типы определять

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

//TODO: не знаю как назвать тип и actor и director
export type FilmPerson = {
    id: string,
    professions: [string],
    fullName: string
}

//TODO: почему где-то id это строка, а где-то число
export type Country = {
    id: number,
    code: string,
    code2: string,
    name: string
}