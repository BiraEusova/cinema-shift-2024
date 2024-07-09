import './FilmCard.css'
import Rating from "../ui/Rating.tsx";
import {Film} from "../types";
import {BASE_URL, MORE_BUTTON} from "../constants"
import FilmPoster from "../ui/FilmPoster.tsx";
import {Link, NavLink} from "react-router-dom";


const FilmCard = (props: {film: Film}) => {

    const film = props.film;
    const genres = film.genres.join(", ");
    //TODO: T.T дата на русском
    const year  = film.releaseDate.match(/\d{4}$/) as string;

    return (
        <div className="film-card">
            <FilmPoster img={film.img} name={film.name}>
                <div className="production-and-kind">
                    <p className="kind">{genres}</p>
                    <p className="production">
                        {film.country.name}
                        {!!year && <>, {year}</>}
                    </p>
                </div>
            </FilmPoster>

            <div className="film-card-data">
                <div>
                    <h3>{film.name}</h3>
                    <p>{film.originalName}</p>
                </div>

                <Rating rating={film.userRatings.imdb} kinopoiskRating={film.userRatings.kinopoisk}/>


                <Link className="more-button" to={`/film/${film.id}`}>{MORE_BUTTON}</Link>

            </div>
        </div>
    )
}

export default FilmCard
