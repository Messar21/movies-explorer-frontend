import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import {useEffect, useState} from "react";
import {getMovies} from "../../utils/MoviesApi";
import Preloader from "../Preloader/Preloader";
import filterMovies from "../../utils/FilterMovies";

function Movies() {

    // const [moviesData, setMoviesData] = useState([]);
    const [isFetching, setIsFetching] = useState(false);
    const [message, setMessage] = useState('');
    const [moviesList, setMoviesList] = useState([]);
    const [loadButton, setLoadButton] = useState(false);
    // const [filteredMovies, setFilteredMovies] = useState([]);



    // const handleFindMovies= () => {
    //     const moviesList = localStorage.getItem('moviesList');
    //     if (!moviesList) {
    //         setIsFetching(true);
    //         getMovies()
    //             .then((data) => {
    //                 localStorage.setItem('moviesList', JSON.stringify(data));
    //             })
    //             .catch(() => {
    //                 setMessage('Ничего не найдено');
    //             })
    //             .finally(() => {
    //                 setIsFetching(false);
    //             });
    //     } else {
    //
    //     }
    // }

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
    }

    const handleFilterMovies = (request, shortsFilter) => {
        const movies = JSON.parse(localStorage.getItem('moviesList'));
        const filteredMovies = filterMovies(movies, request, shortsFilter);
        if (filteredMovies.length === 0) {
            setMessage('Ничего не найдено');
        }
        localStorage.setItem('request', request);
        localStorage.setItem('shortsFilter', JSON.stringify(shortsFilter));
        localStorage.setItem('filteredMovies', JSON.stringify(filteredMovies));
        setMoviesList(filteredMovies);
    }

    useEffect(() => {
        if (JSON.parse(localStorage.getItem('filteredMovies'))) {
            setMoviesList(JSON.parse(localStorage.getItem('filteredMovies')));
        }
    }, [])

    // function handleFindMovies (request) {
    //     if (!request) {
    //         setFilteredMovies([]);
    //         setMoviesList(CardsCounter(moviesData, moviesList.length, false));
    //         setLoadButton(ShowLoadButton(moviesData));
    //     } else {
    //         setFilteredMovies(moviesData.filter((movie) => movie.nameRU.includes(request)));
    //         setMoviesList(CardsCounter(filteredMovies, moviesList.length, false));
    //         setLoadButton(ShowLoadButton(filteredMovies));
    //     }
    // }
    //
    // function handleShowMore () {
    //     filteredMovies.length === 0
    //         ? setMoviesList(CardsCounter(moviesData, moviesList.length, true))
    //         : setMoviesList(CardsCounter(filteredMovies, moviesList.length, true))
    // }



    return (
        <main className="movies-content" aria-label="Фильмы">
            <SearchForm findMovies={handleFindMovies}/>
            { isFetching ? <Preloader/> : <MoviesCardList list={moviesList} message={message}/> }
            <button type="button" className={ loadButton
                ? "movies-content__loadBtn" : "movies-content__loadBtn_hidden"}>Ещё</button>
        </main>
    )
}

export default Movies;
