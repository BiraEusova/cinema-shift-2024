import './HeaderButton.css'
const HeaderButton = ({icon, text} : {icon: string, text: string}) => {

    //TODO: сделать чтобы при наведении на кнопку иконка тоже меняла цвет
    return (
        <a className={'header-button'} href="#">
            <img src={icon} alt={text}/>
            {text}
        </a>
    )
}

export default HeaderButton
