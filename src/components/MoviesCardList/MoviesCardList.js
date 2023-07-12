import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList({ deleteBtn }) {
    return (
        <section aria-label="Фильмы" className="card-list">
            <ul className="card-list__list">
                <MoviesCard deleteBtn={deleteBtn}/>
                <MoviesCard deleteBtn={deleteBtn}/>
                <MoviesCard deleteBtn={deleteBtn}/>
                <MoviesCard deleteBtn={deleteBtn}/>
                <MoviesCard deleteBtn={deleteBtn}/>
            </ul>
        </section>
    )
}

export default MoviesCardList;
