import {Link} from "react-router-dom";

function Navigation() {
    return (
        <nav className="navbar">
            <Link to="/movies" className="navbar__text navbar__text_active">Фильмы</Link>
            <Link to="/saved-movies" className="navbar__text">Сохранённые фильмы</Link>
        </nav>
    )
}

export default Navigation;
