import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import {useEffect, useState} from "react";
import {getMovies} from "../../utils/MoviesApi";
import Preloader from "../Preloader/Preloader";
import filterMovies from "../../utils/FilterMovies";
import CardsCounter from "../../utils/CardsCounter";
import ShowLoadButton from "../../utils/ShowLoadButton";

function Movies() {

    const [isFetching, setIsFetching] = useState(false);
    const [message, setMessage] = useState('');
    const [moviesList, setMoviesList] = useState(() => {
        const movies = JSON.parse(localStorage.getItem('showedMovies'));
        if (movies) {
            return movies;
        }
        return []
    });
    const [loadButton, setLoadButton] = useState(false);

    const handleFindMovies = (request, shortsFilter) => {
        const movies = JSON.parse(localStorage.getItem('movies'));
        if (!movies) {
            setIsFetching(true);
            getMovies()
                .then((data) => {
                    localStorage.setItem('movies', JSON.stringify(data));
                })
                .then(() => {
                    handleFilterMovies(request, shortsFilter);
                })
                .catch(() => {
                    setMessage('Во время запроса произошла ошибка.' +
                        ' Возможно, проблема с соединением или сервер недоступен. ' +
                        'Подождите немного и попробуйте ещё раз');
                })
                .finally(() => {
                    setIsFetching(false);
                });
        } else {
            handleFilterMovies(request, shortsFilter);
        }
    };

    const handleFilterMovies = (request, shortsFilter) => {
        const movies = JSON.parse(localStorage.getItem('moviesList'));
        const filteredMovies = filterMovies(movies, request, shortsFilter);
        if (filteredMovies.length === 0) {
            setMessage('Ничего не найдено');
        }
        localStorage.setItem('request', request);
        localStorage.setItem('shortsFilter', JSON.stringify(shortsFilter));
        localStorage.setItem('filteredMovies', JSON.stringify(filteredMovies));
        console.log(filteredMovies.length, moviesList.length);
        setMoviesList(CardsCounter(filteredMovies, 0, false));
    };

    const showMore = () => {
        const filteredMovies = JSON.parse(localStorage.getItem('filteredMovies'));
        setMoviesList(CardsCounter(filteredMovies, moviesList.length, true));
    };

    useEffect(() => {
        const filteredMovies = JSON.parse(localStorage.getItem('filteredMovies'))
        if (filteredMovies) {
            setLoadButton(ShowLoadButton(filteredMovies, moviesList));
            localStorage.setItem('showedMovies', JSON.stringify(moviesList));
        }
    }, [moviesList]);

    return (
        <main className="movies-content" aria-label="Фильмы">
            <SearchForm findMovies={handleFindMovies}/>
            { isFetching ? <Preloader/> : <MoviesCardList list={moviesList} message={message}/> }
            <button onClick={showMore} type="button" className={ loadButton
                ? "movies-content__loadBtn" : "movies-content__loadBtn_hidden"}>Ещё</button>
        </main>
    )
}

export default Movies;
