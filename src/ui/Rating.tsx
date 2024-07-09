import activeStar from "../assets/starActive.svg"
import defaultStar from "../assets/starDefault.svg"
import "./Rating.css"

const MAX_RATING = 5;
const Rating = (props : { rating: string, kinopoiskRating: string }) => {

    const rating = Math.round((props.rating as number) / 2);

    const stars = [];
    for (let i = 0; i < rating; i++){
        stars.push(<img src={activeStar}/>)
    }

    for (let i = 0; i < MAX_RATING - rating; i++){
        stars.push(<img src={defaultStar}/>)
    }

    return (
        <div>
            <div className="stars-rating">
                {stars}
            </div>
            <p className="kinopoisk-rating">{`Kinopoisk - ${props.kinopoiskRating}`}</p>
        </div>
    );
}

export default Rating