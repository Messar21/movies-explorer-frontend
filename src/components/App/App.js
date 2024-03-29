import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Movies from '../Movies/Movies';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';
import SavedMovies from '../SavedMovies/SavedMovies';
import {Route, Routes, useLocation, useNavigate} from "react-router-dom";
import NotFoundPage from "../NotFoundPage/NotFoundPage";
import {useEffect, useRef, useState} from "react";
import * as api from "../../utils/MainApi";
import {CurrentUserContext} from "../../contexts/CurrentUserContext";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import {addMovie, deleteMovie} from "../../utils/MainApi";

function App () {

    const [isLogged, setIsLogged] = useState(false);
    const [currentUser, setCurrentUser] = useState({});
    const [message, setMessage] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const currentLocation = useRef(location.pathname);
    const currentNavigate = useRef(useNavigate());

    const checkToken =  (jwt) => {
        api.getUser(jwt)
            .then((user) => {
                if (user) {
                    setCurrentUser(user);
                    setIsLogged(true);
                }
            })
            .then(() => {
                currentNavigate.current(currentLocation.current, {replace: true});
            })
            .catch((error) => {
                console.log(error);
            });
    };

    useEffect(() => {
        const jwt = localStorage.getItem('jwt');
        if (jwt) {
            checkToken(jwt);
        }
    }, [isLogged]);

    const handleRegister = (name, email, password) => {
        api.register(name, email, password)
            .then(() => {
                return api.authorize(email, password)
                    .then(({ token }) => {
                        if (token) {
                            localStorage.setItem('jwt', token);
                            setIsLogged(true);
                            currentLocation.current = '/movies';
                        }
                    })
                    .catch((err) => {
                        console.log(err)
                    })
            })
            .catch((err) => {
                console.log(err);
                if (err.message === 'Validation failed') {
                    setMessage(err.validation.body.message);
                } else {
                    setMessage(err.message);
                }
            });
    }


    const handleLogin = (email, password) => {
        api.authorize(email, password)
            .then(({ token }) => {
                if (token) {
                    localStorage.setItem('jwt', token);
                    setIsLogged(true);
                    currentLocation.current = '/movies';
                }
            })
            .catch((err) => {
                if (err.message === 'Validation failed') {
                    setMessage(err.validation.body.message);
                } else {
                    setMessage(err.message);
                }
            });
    };

    const handleUpdateUser = (name, email) => {
        const jwt = localStorage.getItem('jwt');
        api.updateUser(name, email, jwt)
            .then((user) => {
                setCurrentUser(user);
                setMessage('Данные успешно обновлены!');
            })
            .catch((err) => {
                if (err.message === 'Validation failed') {
                    setMessage(err.validation.body.message);
                } else {
                    setMessage(err.message);
                }
            });
    }

    const handleLogout = () => {
        localStorage.clear();
        setIsLogged(false);
        navigate('/', { replace: true });
    };

    const handleSaveMovie = (movie) => {
        const jwt = localStorage.getItem('jwt');
        return addMovie(movie, jwt)
    };

    const handleMovieDelete = (movieId) => {
        const jwt = localStorage.getItem('jwt');
        return deleteMovie(movieId, jwt)
    };

    return (
        <CurrentUserContext.Provider value={ currentUser }>
            <div className="App">
                { (location.pathname === "/" || location.pathname === "/movies" || location.pathname === "/saved-movies"
                    || location.pathname === "/profile") && <Header isLogged={ isLogged }/> }
                <Routes>
                    <Route path="/" element={ <Main/> }/>
                    <Route path="/movies" element={ <ProtectedRoute element={ Movies }
                                                                    isLogged={ isLogged }
                                                                    onMovieSave={ handleSaveMovie }
                                                                    onMovieDelete={ handleMovieDelete } /> } />
                    <Route path="/saved-movies" element={ <ProtectedRoute element={ SavedMovies }
                                                                          isLogged={ isLogged }
                                                                          onMovieDelete={ handleMovieDelete } /> } />
                    <Route path="/profile" element={ <ProtectedRoute element={ Profile }
                                                                     logout={ handleLogout }
                                                                     updateUser={ handleUpdateUser }
                                                                     message={ message }
                                                                     isLogged={ isLogged }
                                                                     setMessage={ setMessage } /> } />
                    <Route path="/signin" element={ <ProtectedRoute element={ Login }
                                                                    login={ handleLogin }
                                                                    message={ message }
                                                                    setMessage={ setMessage }
                                                                    isLogged={!isLogged} /> } />
                    <Route path="/signup" element={ <ProtectedRoute element={ Register }
                                                                    register={ handleRegister }
                                                                    message={ message }
                                                                    setMessage={ setMessage }
                                                                    isLogged={!isLogged} />  } />
                    <Route path="*" element={ <NotFoundPage /> }/>
                </Routes>
                { (location.pathname === "/" || location.pathname === "/movies" || location.pathname === "/saved-movies")
                    && <Footer/> }
            </div>
        </CurrentUserContext.Provider>
    );
}

export default App;
