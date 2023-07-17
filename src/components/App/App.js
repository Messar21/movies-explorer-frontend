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
import {useEffect, useState} from "react";
import * as api from "../../utils/MainApi";
import {CurrentUserContext} from "../../contexts/CurrentUserContext";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

function App() {

    const [isLogged, setIsLogged] = useState(false);
    const [currentUser, setCurrentUser] = useState({});
    const [message, setMessage] = useState('');
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const jwt = localStorage.getItem('jwt');
        if (jwt) {
            checkToken(jwt);
        }
    }, [isLogged])

    const checkToken = (jwt) => {
        api.getUser(jwt)
            .then((user) => {
                if (user){
                    console.log(user);
                    setCurrentUser(user);
                    setIsLogged(true);
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }

    const handleRegister = (name, email, password) => {
        api.register(name, email, password)
            .then(() => {
                return api.authorize(email, password)
                    .then(({ token }) => {
                        if (token) {
                            localStorage.setItem('jwt', token);
                            setIsLogged(true);
                            navigate('/movies', {replace: true});
                        }
                    })
                    .catch((err) => {
                        console.log(err)
                    })
            })
            .catch((err) => {
                console.log(err);
                if(err.message === 'Validation failed') {
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
                    navigate('/movies', {replace: true});
                }
            })
            .catch((err) => {
                if(err.message === 'Validation failed') {
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
                if(err.message === 'Validation failed') {
                    setMessage(err.validation.body.message);
                } else {
                    setMessage(err.message);
                }
            });
    }

    const handleLogout = () => {
        localStorage.removeItem('jwt');
        localStorage.removeItem('movies');
        localStorage.removeItem('showedMovies');
        localStorage.removeItem('request');
        localStorage.removeItem('shortsFilter');
        localStorage.removeItem('filteredMovies');
        setIsLogged(false);
        navigate('/', {replace: true});
    };

    return (
        <CurrentUserContext.Provider value={currentUser}>
            <div className="App">
                {(location.pathname === "/" || location.pathname === "/movies" || location.pathname === "/saved-movies"
                    || location.pathname === "/profile") && <Header isLogged={isLogged}/>}
                <Routes>
                    <Route path="/" element={<Main/>}/>
                    <Route path="/movies" element={<ProtectedRoute element={Movies}
                                                                   isLogged={isLogged} />} />
                    <Route path="/saved-movies" element={<ProtectedRoute element={SavedMovies}
                                                                         isLogged={isLogged} />} />
                    <Route path="/profile" element={ <ProtectedRoute element={Profile}
                                                                     logout={handleLogout}
                                                                     updateUser={handleUpdateUser}
                                                                     message={message}
                                                                     isLogged={isLogged}
                                                                     setMessage={setMessage} />} />
                    <Route path="/signin" element={<Login login={handleLogin}
                                                          message={message}
                                                          setMessage={setMessage} />}/>
                    <Route path="/signup" element={<Register register={handleRegister}
                                                             message={message}
                                                             setMessage={setMessage} />}/>
                    <Route path="*" element={<NotFoundPage/>}/>
                </Routes>
                {(location.pathname === "/" || location.pathname === "/movies" || location.pathname === "/saved-movies")
                    && <Footer/>}
            </div>
        </CurrentUserContext.Provider>
  );
}

export default App;
