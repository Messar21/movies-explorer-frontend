import logo from "../../images/logo.png";
import {Link} from "react-router-dom";
import accountIcon from "../../images/accountIcon.svg";
function Header() {

    const isLogged = false;

    return (
        <header className="header">
            <Link to="/" className="header__home">
                <img className="header__logo" src={logo} alt="Логотип"/>
            </Link>
            { isLogged && <nav className="header__navbar">
                <Link to="/movies" className="header__nav-text header__nav-text_active">Фильмы</Link>
                <Link to="/saved-movies" className="header__nav-text">Сохранённые фильмы</Link>
            </nav> }
            { isLogged &&
                <Link to="/profile" className="header__button-account">
                    <img className="header__button-icon" src={accountIcon} alt="Иконка профиля"/>
                    <p className="header__button-name">Аккаунт</p>
                </Link> }
            { !isLogged &&
                <>
                    <Link to="/signup" className="header__link header__link_type_register">Регистрация</Link>
                    <Link to="/signin" className="header__link header__link_type_login">Войти</Link>
                </> }
        </header>
    )
}

export default Header;
