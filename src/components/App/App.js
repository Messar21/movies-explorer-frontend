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
import {useState} from "react";

function App() {

    const [isLogged, setIsLogged] = useState(false);

    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        setIsLogged(true);
        navigate('/movies');
    }

    const handleLogout = (e) => {
        e.preventDefault();
        setIsLogged(false);
        navigate('/');
    }

    const location = useLocation();

    return (
      <div className="App">
          { (location.pathname==="/" || location.pathname==="/movies" || location.pathname==="/saved-movies"
              || location.pathname==="/profile") && <Header isLogged={isLogged} /> }
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/saved-movies" element={<SavedMovies />} />
            <Route path="/profile" element={<Profile logout={handleLogout}/>} />
            <Route path="/signin" element={<Login login={handleLogin} />} />
            <Route path="/signup" element={<Register />} />
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
          { (location.pathname==="/" || location.pathname==="/movies" || location.pathname==="/saved-movies")
              && <Footer/> }
      </div>
  );
}

export default App;
