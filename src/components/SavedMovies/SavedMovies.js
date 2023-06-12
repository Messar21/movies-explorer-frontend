import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

function SavedMovies() {

    const deleteBtn = true;

    return (
        <main className="movies-content">
            <SearchForm />
            <MoviesCardList deleteBtn={deleteBtn} />
        </main>
    )
}

export default SavedMovies;
