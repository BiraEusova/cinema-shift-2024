import logo from './assets/logo.svg'
import login from './assets/login.svg'
import user from './assets/user.svg'
import ticket from './assets/ticket.svg'
import './App.css'
import HeaderButton from "./ui/HeaderButton.tsx";
import FilmCard from "./components/FilmCard.tsx";
import {useEffect} from "react";
import Spin from "./ui/Spin.tsx";
import {useAppDispatch, useAppSelector} from "./store/hook.ts";
import {fetchFilms} from "./store/actions/filmsActionCreator.ts";
import Header from "./components/Header.tsx";

import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Affiche from "./pages/Affiche.tsx";
import FilmPage from "./pages/FilmPage.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Affiche/>,
    },
    {
        path: "film/:id",
        element: <FilmPage/>,
    },
]);
const App = () => {

    //TODO: что такое переменные CSS

    return (
        <>
            <Header/>
            <RouterProvider router={router} />
        </>
    )
}

export default App
