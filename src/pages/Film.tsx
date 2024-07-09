import './Film.css'
const Film = () => {

    return (
        <>

            <div className="content-container">
                <a href="#">Назад</a>

                <div>
                    <img src="#" alt="#"/>
                    <div>
                        <h3>Название</h3>
                        <h3>подзаголовок</h3>
                    </div>
                    <div>
                        <div>рейтинг</div>
                        <p>рейтинг кинопоиск</p>
                    </div>
                    <p>описание</p>
                </div>

                <h4>Расписание</h4>
                <div >
                    даты
                </div>

                <div >
                    <p>зал</p>
                    <div >
                        время
                    </div>
                </div>

                <div >
                    <h4>Выбор места</h4>
                    <div >
                        карта зала
                    </div>
                </div>
            </div>

        </>
    )
}

export default Film
