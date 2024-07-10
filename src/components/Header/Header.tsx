import logo from '../../assets/logo.svg'
import login from '../../assets/login.svg'
import user from '../../assets/user.svg'
import ticket from '../../assets/ticket.svg'
import styles from './Header.module.css'
import HeaderButton from "../../ui/HeaderButton.tsx";
import text from "../../constants/text.json";
const Header = () => {

    return (
        <header className={styles.header}>
            <div className={styles.content}>
                <div className={styles.nav}>
                    <img src={logo} className="logo" alt="Cinema SHIFT"/>
                    <HeaderButton icon={user} text={text.header.profile} key={text.header.profile}/>
                    <HeaderButton icon={ticket} text={text.header.tickets} key={text.header.tickets}/>
                </div>
                <HeaderButton icon={login} text={text.header.login} key={text.header.login}/>
            </div>
        </header>
    );
}

export default Header
