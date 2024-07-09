import logo from '../assets/logo.svg'
import login from '../assets/login.svg'
import user from '../assets/user.svg'
import ticket from '../assets/ticket.svg'
import './Header.css'
import HeaderButton from "../ui/HeaderButton.tsx";
const Header = () => {

    return (
        <header className='header'>
            <div className='header-content'>
                <div className='header-nav'>
                    <img src={logo} className="logo" alt="Cinema SHIFT"/>
                    <HeaderButton icon={user} text={'Профиль'} key={'Профиль'}/>
                    <HeaderButton icon={ticket} text={'Билеты'} key={'Билеты'}/>
                </div>
                <HeaderButton icon={login} text={'Войти'} key={'Войти'}/>
            </div>
        </header>
    );
}

export default Header
