import {useState} from 'react'
import reactLogo from './assets/react.svg'
import logo from './assets/logo.svg'
import login from './assets/login.svg'
import user from './assets/user.svg'
import ticket from './assets/ticket.svg'
import './App.css'
import HeaderButton from "./ui/HeaderButton.tsx";
import FilmCard from "./components/FilmCard.tsx";
const App = () => {

    //TODO: что такое переменные CSS

    return (
        <>
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

            <div style={{
                marginTop: "48px",
                paddingBottom: "48px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center"
            }}>

                <div style={{
                    width: '960px',
                    gap: '16px'
                }}>
                    <h3 style={{
                        width: '100%',
                        textAlign: 'left',
                        fontFamily: "Inter, sans-serif",
                        fontSize: "24px",
                        fontWeight: 700,
                        padding: "0 16px",
                        margin: 0
                    }}>Афиша</h3>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: "repeat(3,1fr)",
                        gap: '48px 20px',
                        margin: "16px 0 0 0"
                    }}>
                        <FilmCard />
                        <FilmCard />
                        <FilmCard />
                        <FilmCard />
                        <FilmCard />
                        <FilmCard />
                    </div>
                </div>
            </div>

        </>
    )
}

export default App
