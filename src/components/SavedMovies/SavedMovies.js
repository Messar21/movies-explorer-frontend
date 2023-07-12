import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

function SavedMovies() {

    const deleteBtn = true;

    return (
        <main className="movies-content" aria-label="Сохраненные фильмы">
            <SearchForm />
            <MoviesCardList deleteBtn={deleteBtn} />
            <div className="movies-content__withoutBtn"></div>
        </main>
    )
}

export default SavedMovies;
