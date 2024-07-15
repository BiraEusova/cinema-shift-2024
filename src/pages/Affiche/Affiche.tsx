import {useEffect} from "react";
import Spin from "@/ui/Spin.tsx";
import {useAppDispatch, useAppSelector} from "@/store/hook.ts";
import {fetchFilms} from "@/store/actions/afficheActionCreator.ts";
import text from "@/constants/text.json";
import styles from './Affiche.module.css'
import {FilmCard} from "@/components";

const Affiche = () => {

    const dispatch = useAppDispatch();
    const {films, isLoading} = useAppSelector(state => state.affiche);

    useEffect(() => {
        dispatch(fetchFilms())
    }, []);

    return (
        <>
            {isLoading ? (<Spin/>) :
                <div className={styles.container}>
                    <h3 className={styles.title}>{text.pages.affiche.title}</h3>
                    <div className={styles.grid}>
                        {films.map((filmData) => <FilmCard film={filmData} key={filmData.id}/>)}
                    </div>
                </div>
            }
        </>
    )
}

export default Affiche
