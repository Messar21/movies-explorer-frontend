import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList ({ deleteBtn, list, message, onMovieSave, onMovieDelete }) {

    return (
        <section aria-label="Фильмы" className="card-list">
            { list.length === 0 ? <p className="card-list__message">{ message }</p>
                : <ul className="card-list__list">
                    {
                        list.map((movieCard) => <MoviesCard key={ movieCard.id || movieCard.movieId }
                                                            onMovieSave={ onMovieSave }
                                                            deleteBtn={ deleteBtn }
                                                            movieCard={ movieCard }
                                                            onMovieDelete={ onMovieDelete }
                                                            image={ typeof movieCard.image === 'string'
                                                                ? movieCard.image
                                                                : `https://api.nomoreparties.co${ movieCard.image.url }` }
                            />
                        )
                    }
                </ul> }
        </section>
    )
}

export default MoviesCardList;
