import {Link} from "react-router-dom";
import accountIcon from "../../images/accountIcon.svg";
import Navigation from "../Navigation/Navigation";
import HomeLink from "../HomeLink/HomeLink";
import PopupMenu from "../PopupMenu/PopupMenu";
import {useState} from "react";
function Header() {

    const isLogged = true;

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
        <header className="header">
            <HomeLink />
            { isLogged &&
                <>
                    <Navigation/>
                    <Link to="/profile" className="header__button-account">
                        <img className="header__button-icon" src={accountIcon} alt="Иконка профиля"/>
                        <p className="header__button-name">Аккаунт</p>
                    </Link>
                    <button onClick={openMenu} className="header__menu" type="button" aria-label="Меню"></button>
                    <PopupMenu isOpen={isOpen} closeMenu={closeMenu} />
                </> }
            { !isLogged &&
                <>
                    <Link to="/signup" className="header__link header__link_type_register">Регистрация</Link>
                    <Link to="/signin" className="header__link header__link_type_login">Войти</Link>
                </> }
        </header>
    )
}

export default Header;
