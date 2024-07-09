import './BackButton.css'
import {BACK_BUTTON} from "../constants";
import back from "../assets/backArrow.svg"
import {Link} from "react-router-dom";

const BackButton = () => {

    return (
        <Link className={'back-button'} to={"/"}>
            <img src={back} alt={BACK_BUTTON}/>
            {BACK_BUTTON}
        </Link>
    )
}

export default BackButton
