import {createBrowserRouter} from "react-router-dom";
import Affiche from "./pages/Affiche/Affiche.tsx";
import FilmPage from "./pages/FilmPage/FilmPage.tsx";

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