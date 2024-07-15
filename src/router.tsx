import {createBrowserRouter} from "react-router-dom";
import FilmPage from "./pages/FilmPage/FilmPage.tsx";
import Affiche from "./pages/Affiche/Affiche.tsx";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Affiche/>,
    },
    {
        path: "film/:id",
        element: <FilmPage/>,
    },
]);