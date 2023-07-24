import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import {useEffect, useState} from "react";
import {getMovies} from "../../utils/MainApi";
import filterMovies from "../../utils/FilterMovies";

function SavedMovies ({ onMovieDelete }) {

    const [savedMovies, setSavedMovies] = useState([]);
    const [message, setMessage] = useState('');

    useEffect(() => {
        const jwt = localStorage.getItem('jwt');
        getMovies(jwt)
            .then((movies) => {
                localStorage.setItem('filteredSavedMovies', JSON.stringify(movies));
                setSavedMovies(movies);
                if (movies.length === 0) {
                    setMessage('Ничего не найдено');
                }
                movies.forEach((movie) => {
                    localStorage.setItem(`savedButton${ movie.movieId }`, JSON.stringify(true));
                    localStorage.setItem(`savedMovie${ movie.movieId }`, JSON.stringify(movie._id));
                });
            })
            .catch((err) => {
                console.log(err);
            })
    }, []);

    const handleUpdateList = (movieId) => {
        return onMovieDelete(movieId)
            .then(() => {
                setSavedMovies(prevState => prevState.filter(movie => movie._id !== movieId));
            })
    };

    const handleFilterMovies = (request, shortsFilter) => {
        const movies = JSON.parse(localStorage.getItem('filteredSavedMovies'))
        const filteredMovies = filterMovies(movies, request, shortsFilter);
        if (filteredMovies.length === 0) {
            setMessage('Ничего не найдено');
        }
        setSavedMovies(filteredMovies);
    };


    return (
        <main className="movies-content" aria-label="Сохраненные фильмы">
            <SearchForm findMovies={ handleFilterMovies } isSavedMovies={true}/>
            <MoviesCardList deleteBtn={ true }
                            list={ savedMovies }
                            message={ message }
                            onMovieDelete={ handleUpdateList }/>
            <div className="movies-content__withoutBtn"></div>
        </main>
    )
}

export default SavedMovies;
