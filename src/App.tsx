import { RouterProvider } from "react-router-dom";
import {router} from "./router.tsx";
import './App.css'
import {Header} from "./components";

const App = () => {

    return (
        <>
            <Header/>
            <RouterProvider router={router} />
        </>
    )
}

export default App
