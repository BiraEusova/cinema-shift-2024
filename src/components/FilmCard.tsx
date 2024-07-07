import './FilmCard.css'
import StarsRating from "../ui/StarsRating.tsx";

const FilmCard = () => {

    const src='https://shift-backend.onrender.com/static/images/cinema/film_1.webp';
    const title = 'Title';
    const subTitle = 'SubTitle';
    const rating = '8';
    const ratingKinopoisk = '8';
    const country = 'USA';
    const year = '2023';
    const kind = 'fantasy';

    return (
        <>

            <div className="film-card">
                <div className="img-container">
                    <img src={src} alt={`Poster ${title}`}/>
                    <div className="production-and-kind">
                        <p className="kind">{kind}</p>
                        <p className="production">{`${country}, ${year}`}</p>
                    </div>
                </div>

                <div className="film-card-data">
                    <div>
                        <h3>{title}</h3>
                        <p>{subTitle}</p>
                    </div>

                    <div>
                        <StarsRating rating={rating as number}/>
                        <p>{`Kinopoisk - ${ratingKinopoisk}`}</p>
                    </div>

                    <button>
                        More
                    </button>
                </div>
            </div>

        </>
    )
}

export default FilmCard
