import './Spin.css'
import loadingIcon from "../assets/loading.gif"

const Spin = () => {

    return (
        <div className="spin-container">
            <img src={loadingIcon} alt={"loading..."}/>
        </div>
    );
}

export default Spin
