import './FilmCard.css'
import StarsRating from "../ui/StarsRating.tsx";
import {Film} from "../types";
import {BASE_URL} from "../constants"


const FilmCard = (props: {film: Film}) => {

    const film = props.film;
    const genres = film.genres.join(", ");
    //TODO: T.T дата на русском
    const year  = film.releaseDate.match(/\d{4}$/) as string;

    return (
        <div className="film-card">
            <div className="img-container">
                <img src={`${BASE_URL}${film.img}`} alt={`Poster ${film.name}`}/>
                <div className="production-and-kind">
                    <p className="kind">{genres}</p>
                    <p className="production">
                        {film.country.name}
                        {!!year && <>, {year}</>}
                    </p>
                </div>
            </div>

            <div className="film-card-data">
                <div>
                    <h3>{film.name}</h3>
                    <p>{film.originalName}</p>
                </div>

                <div>
                    <StarsRating rating={film.userRatings.imdb as number}/>
                    <p>{`Kinopoisk - ${film.userRatings.kinopoisk}`}</p>
                </div>

                <button>
                    Подробнее
                </button>
            </div>
        </div>
    )
}

export default FilmCard
