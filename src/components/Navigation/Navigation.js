import {Link, useLocation} from "react-router-dom";

function Navigation() {

    const location = useLocation();

    return (
        <nav className="navbar">
            <Link to="/movies" className={location.pathname==="/movies"
                ? "navbar__text navbar__text_active" : "navbar__text"}>Фильмы</Link>
            <Link to="/saved-movies" className={location.pathname==="/saved-movies"
                ? "navbar__text navbar__text_active" : "navbar__text"}>Сохранённые фильмы</Link>
        </nav>
    )
}

export default Navigation;
