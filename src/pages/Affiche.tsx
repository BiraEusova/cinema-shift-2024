import FilmCard from "../components/FilmCard.tsx";
import {useEffect} from "react";
import Spin from "../ui/Spin.tsx";
import {useAppDispatch, useAppSelector} from "../store/hook.ts";
import {fetchFilms} from "../store/actions/filmsActionCreator.ts";
import './Affiche.css'

const Affiche = () => {

    //TODO: что такое переменные CSS
    const dispatch = useAppDispatch();
    const {films, isLoading} = useAppSelector(state => state.films);

    useEffect(() => {
        console.log("defre");
        dispatch(fetchFilms())
    }, []);

    useEffect(() => {
        console.log(films);
        console.log(isLoading);
    }, [films]);

    return (
        <>
            {isLoading ? (<Spin/>) :
                <div className="content-container">
                    <h3 className="title">Афиша</h3>
                    <div className="card-grid-container">
                        {films.map((filmData) => <FilmCard film={filmData} key={filmData.id}/>)}
                    </div>
                </div>
            }
        </>
    )
}

export default Affiche
