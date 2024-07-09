import './FilmPoster.css'
import {BASE_URL} from "../constants"
import React from "react";

//TODO: как в пропсы прокинуть children без react fc и интерфейса
interface FilmPosterProps {
    img: string,
    name: string,
    children?
}
const FilmPoster: React.FC<FilmPosterProps> = ({img, name, children}) => {

    return (
        <div className="img-container">
            <img className="poster" src={`${BASE_URL}${img}`} alt={`Poster ${name}`}/>
            {children}
        </div>
    )
}

export default FilmPoster
