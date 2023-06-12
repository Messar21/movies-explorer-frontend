import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

function Movies() {
    return (
        <main className="movies-content">
            <SearchForm />
            <MoviesCardList />
            <button className="movies-content__loadBtn">Ещё</button>
        </main>
    )
}

export default Movies;
