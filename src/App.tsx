import Header from "./components/Header/Header.tsx";
import { RouterProvider } from "react-router-dom";
import {router} from "./router.tsx";
import './App.css'

const App = () => {

    //TODO: что такое переменные CSS

    return (
        <>
            <Header/>
            <RouterProvider router={router} />
        </>
    )
}

export default App
