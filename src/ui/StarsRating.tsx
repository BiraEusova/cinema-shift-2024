import activeStar from "../assets/starActive.svg"
import defaultStar from "../assets/starDefault.svg"
import "./StarsRating.css"

const MAX_RATING = 5;
const StarsRating = ({rating} : { rating: number }) => {

    rating = Math.round(rating / 2);

    const stars = [];
    for (let i = 0; i < rating; i++){
        stars.push(<img src={activeStar}/>)
    }

    for (let i = 0; i < MAX_RATING - rating; i++){
        stars.push(<img src={defaultStar}/>)
    }

    return (
        <div className="stars-rating">
            {stars}
        </div>
    );
}

export default StarsRating