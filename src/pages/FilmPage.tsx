import './FilmPage.css'
import BackButton from "../ui/BackButton.tsx";
import {Film} from "../types";
import FilmPoster from "../ui/FilmPoster.tsx";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {getFilm} from "../api/requests.ts";
import Spin from "../ui/Spin.tsx";
import Rating from "../ui/Rating.tsx";

const FilmPage = () => {

    const params = useParams();
    const filmId = params.id;
    const [isLoading, setIsLoading] = useState(true);
    const [film, setFilm] = useState<Film>();

    useEffect(() => {
        getFilm(filmId).then((res) => {
            setFilm(res.film);
            setIsLoading(false);
        })
    })

    return (
        <>
            {/*TODO: я вижу два варианта: 1.что-то класть в initialState и использовать isLoading*/}
            {/*или вместо isLoading использовать film, чтобы не проверять его на undefind*/}
            {/*я не допедрила до других вариантов, как правильно?*/}
            {/*{isLoading ? (<Spin/>) :*/}
            {!film ? (<Spin/>) :
            <div className="content-container">

                <BackButton/>

                <div className="film-container">
                    <FilmPoster img={film.img} name={film.name}/>
                    <div className="film-info">
                        <div className="film-name">
                            <h1>{film.name}</h1>
                            <p className="subtitle">{film.originalName}</p>
                        </div>
                        <Rating rating={film.userRatings.imdb} kinopoiskRating={film.userRatings.kinopoisk} />
                        <p className="description">{film.description}</p>
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
