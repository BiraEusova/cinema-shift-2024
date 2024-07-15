import './BackButton.css'
import back from "../assets/backArrow.svg"
import {Link} from "react-router-dom";
import text from "../constants/text.json"

const BackButton = () => {

    return (
        <Link className={'back-button'} to={"/"}>
            <img src={back} alt={text.buttons.back}/>
            {text.buttons.back}
        </Link>
    )
}

export default BackButton
