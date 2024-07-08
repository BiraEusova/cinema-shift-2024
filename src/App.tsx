import logo from './assets/logo.svg'
import login from './assets/login.svg'
import user from './assets/user.svg'
import ticket from './assets/ticket.svg'
import './App.css'
import HeaderButton from "./ui/HeaderButton.tsx";
import FilmCard from "./components/FilmCard.tsx";
import {ReactNode, useEffect, useState} from "react";
import {Film} from "./types";
import {api} from "./api/instance.ts";
import {getFilmsToday} from "./api/requests.ts";
import Spin from "./ui/Spin.tsx";
const App = () => {

    //TODO: что такое переменные CSS

    const [films, setFilms] = useState<[Film]>([]);
    const [filmCards, setFilmCards] = useState<[ReactNode]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        //TODO: че то я херни налепила с типизацией
        getFilmsToday()
            .then((res: {success: string, films: [Film]}) => {
                    setFilms(res.films);
                    const filmCards = res.films
                        .map((filmData) => <FilmCard film={filmData} key={filmData.id}/>);
                    setFilmCards(filmCards);
                    setIsLoading(false);
                }
            )
    }, []);

    //TODO: тоже что-то корявое, можно ли сразу сделать стейт для карточек и мапить их при получении?
    // я не знаю как правильно :(
    // if (!isLoading) {
    //     const filmCards = films
    //         .map((filmData) => <FilmCard film={filmData} key={filmData.id}/>);
    //     setFilmCards(filmCards);
    // }

    return (
        <>
            <header className='header'>
                <div className='header-content'>
                    <div className='header-nav'>
                        <img src={logo} className="logo" alt="Cinema SHIFT"/>
                        <HeaderButton icon={user} text={'Профиль'} key={'Профиль'}/>
                        <HeaderButton icon={ticket} text={'Билеты'} key={'Билеты'}/>
                    </div>
                    <HeaderButton icon={login} text={'Войти'} key={'Войти'}/>
                </div>
            </header>
            {isLoading && <Spin/>}
            {!isLoading &&
                <div className="content-container">
                    <h3 className="title">Афиша</h3>
                    <div className="card-grid-container">
                        {filmCards}
                    </div>
                </div>
            }
        </>
    )
}

export default App
