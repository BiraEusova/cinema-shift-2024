import './HeaderButton.css'
const HeaderButton = ({icon, text} : {icon: string, text: string}) => {

    //TODO: сделать чтобы при наведении на кнопку иконка тоже меняла цвет
    return (
        <button className={'header-button'}>
            <img src={icon} alt={text}/>
            {text}
        </button>
    )
}

export default HeaderButton
