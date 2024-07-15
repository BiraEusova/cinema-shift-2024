import Rating from "@/ui/Rating.tsx";
import {Film} from "@/types";
import {BASE_URL, REGX_YEAR} from "@/constants"
import {Link} from "react-router-dom";
import styles from './FilmCard.module.css'
import React from "react";
import text from "@/constants/text.json"

export const FilmCard = (props: {film: Film}) => {

    const film = props.film;
    const genres = film.genres.join(", ");
    const year  = film.releaseDate.match(REGX_YEAR) as string;

    return (
        <div className={styles.filmCard}>
            <div className={styles.poster}>
                <img src={`${BASE_URL}${film.img}`} alt={`Poster ${film.name}`}/>
                <div className={styles.productionAndKind}>
                    <p className={styles.kind}>{genres}</p>
                    <p className={styles.production}>
                        {film.country.name}
                        {!!year && <>, {year}</>}
                    </p>
                </div>
            </div>

            <div className={styles.data}>
                <div>
                    <h3>{film.name}</h3>
                    <p>{film.originalName}</p>
                </div>

                <Rating rating={film.userRatings.imdb} kinopoiskRating={film.userRatings.kinopoisk}/>

                <Link className={styles.moreButton} to={`/film/${film.id}`}>{text.buttons.more}</Link>

            </div>
        </div>
    )
}