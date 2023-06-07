import logo from "../../images/logo.png";
import {Link} from "react-router-dom";
import accountIcon from "../../images/accountIcon.svg";
function Header() {

    const isLogged = true;

    return (
        <header className="header">
            <img className="header__logo" src={logo} alt="Логотип"/>
            { isLogged && <nav className="header__navbar">
                <Link to="/movies" className="header__nav-text header__nav-text_active">Фильмы</Link>
                <Link to="/saved-movies" className="header__nav-text">Сохранённые фильмы</Link>
            </nav> }
            { isLogged && <button className="header__button-account">
                <img className="header__button-icon" src={accountIcon} alt="Иконка профиля"/>
                <p className="header__button-name">Аккаунт</p>
            </button> }
            { !isLogged && <><Link to="/signup" className="header__link header__link_type_register">Регистрация</Link>
                <Link to="/signin" className="header__link header__link_type_login">Войти</Link>
                </> }
        </header>
    )
}

export default Header;
