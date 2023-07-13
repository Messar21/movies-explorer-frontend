import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList({ deleteBtn, list, message }) {



    return (
        <section aria-label="Фильмы" className="card-list">
            { list.length===0 ? <p className="card-list__message">{message}</p>
                : <ul className="card-list__list">
                {
                    list.map((movieCard) => <MoviesCard key={movieCard.id}
                                                        deleteBtn={deleteBtn}
                                                        name={movieCard.nameRU}
                                                        duration={movieCard.duration}
                                                        image={`https://api.nomoreparties.co${movieCard.image.url}`}/>
                    )
                }
            </ul>}
        </section>
    )
}

export default MoviesCardList;
