import BackButton from "@/ui/BackButton.tsx";
import {useParams} from "react-router-dom";
import React, {useEffect} from "react";
import Spin from "@/ui/Spin.tsx";
import Rating from "@/ui/Rating.tsx";
import {useAppDispatch, useAppSelector} from "@/store/hook.ts";
import {fetchFilm} from "@/store/actions/filmActionCreator.ts";
import {BASE_URL, REGX_YEAR} from "@/constants";
import styles from './FilmPage.module.css'

const FilmPage = () => {

    const params = useParams();
    const filmId = params.id as string;
    const dispatch = useAppDispatch();
    const {film, isLoading} = useAppSelector(state => state.film);

    useEffect(() => {
        dispatch(fetchFilm(filmId))
    }, [])

    return (
        <>
            {isLoading ? (<Spin/>) :
            <div className={styles.container}>

                <BackButton/>

                <div className={styles.film}>
                    <div className={styles.poster}>
                        <img src={`${BASE_URL}${film.img}`} alt={`Poster ${film.name}`}/>
                        <div className={styles.productionAndKind}>
                            <p className={styles.kind}>{film.genres.join(", ")}</p>
                            <p className={styles.production}>
                                {film.country.name}
                                {!!film.releaseDate.match(REGX_YEAR) && <>, {film.releaseDate.match(REGX_YEAR)}</>}
                            </p>
                        </div>
                    </div>
                    <div className={styles.info}>
                        <div>
                            <h1>{film.name}</h1>
                            <p className={styles.subtitle}>{film.originalName}</p>
                        </div>
                        <Rating rating={film.userRatings.imdb} kinopoiskRating={film.userRatings.kinopoisk} />
                        <p className={styles.description}>{film.description}</p>
                    </div>
                </div>
            </div>
            }

                {/*<h4>Расписание</h4>*/}
                {/*<div >*/}
                {/*    даты*/}
                {/*</div>*/}

                {/*<div >*/}
                {/*    <p>зал</p>*/}
                {/*    <div >*/}
                {/*        время*/}
                {/*    </div>*/}
                {/*</div>*/}

                {/*<div >*/}
                {/*    <h4>Выбор места</h4>*/}
                {/*    <div >*/}
                {/*        карта зала*/}
                {/*    </div>*/}
                {/*</div>*/}
        </>
    )
}

export default FilmPage
