import {Link} from "react-router-dom";
import accountIcon from "../../images/accountIcon.svg";
import Navigation from "../Navigation/Navigation";
import HomeLink from "../HomeLink/HomeLink";
import PopupMenu from "../PopupMenu/PopupMenu";
import {useState} from "react";
function Header(props) {

    const [isOpen, setIsOpen] = useState(false);

    function openMenu() {
        setIsOpen(true);
    }

    function closeMenu(evt) {
        if(!evt.target.classList.contains("popup__menu")
            && !evt.target.classList.contains("popup__menu-container")) {
            setIsOpen(false);
        }
    }

    return (
        <header className="header" aria-label="Шапка сайта">
            <HomeLink />
            <Navigation isLogged={props.isLogged}/>
            <Link to="/profile" className={ props.isLogged
                ? "header__button-account" : "header__button-account header__button-account_hidden" }>
                <img className="header__button-icon" src={accountIcon} alt="Иконка профиля"/>
                <p className="header__button-name">Аккаунт</p>
            </Link>
            <button onClick={openMenu} className={ props.isLogged
                ? "header__menu" : "header__menu header__menu_hidden" } type="button" aria-label="Меню"></button>
            <PopupMenu isOpen={isOpen} closeMenu={closeMenu} />
            <nav className={ props.isLogged ? "header__navbar header__navbar_hidden" : "header__navbar"}>
                <Link to="/signup" className="header__link">Регистрация</Link>
                <Link to="/signin" className="header__link header__link_type_login">Войти</Link>
            </nav>
        </header>
    )
}

export default Header;
