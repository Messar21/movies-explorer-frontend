import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Movies from '../Movies/Movies';
// import Profile from '../Profile/Profile';
// import Login from '../Login/Login';
// import Register from '../Register/Register';
// import SavedMovies from '../SavedMovies/SavedMovies';
import {Route, Routes} from "react-router-dom";

function App() {
  return (
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/movies" element={<Movies />} />
        {/*  <Route path="/saved-movies" element={<SavedMovies />} />*/}
        {/*  <Route path="/profile" element={<Profile />} />*/}
        {/*  <Route path="/signin" element={<Login />} />*/}
        {/*  <Route path="/signup" element={<Register />} />*/}
        </Routes>
        <Footer />
      </div>
  );
}

export default App;
