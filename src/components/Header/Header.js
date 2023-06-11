import logo from "../../images/logo.png";
import {Link} from "react-router-dom";
import accountIcon from "../../images/accountIcon.svg";
import Navigation from "../Navigation/Navigation";
function Header() {

    const isLogged = true;

    return (
        <header className="header">
            <Link to="/" className="header__home">
                <img className="header__logo" src={logo} alt="Логотип"/>
            </Link>
            { isLogged && <Navigation/> }
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
