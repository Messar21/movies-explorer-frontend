import {Link, useLocation} from "react-router-dom";
import accountIcon from "../../images/accountIcon.svg";

function PopupMenu (props) {

    const location = useLocation();

    return (
        <div onClick={ props.closeMenu } className={ props.isOpen ? "popup popup_opened" : "popup" }>
            <div className="popup__menu">
                <button onClick={ props.closeMenu } className="popup__closeButton" type="button"></button>
                <div className="popup__menu-container">
                    <Link to="/" className={ location.pathname === "/"
                        ? "popup__link popup__link_active" : "popup__link" }
                          onClick={ props.closeMenu }>Главная</Link>
                    <Link to="/movies" className={ location.pathname === "/movies"
                        ? "popup__link popup__link_active" : "popup__link" }
                          onClick={ props.closeMenu }>Фильмы</Link>
                    <Link to="/saved-movies" className={ location.pathname === "/saved-movies"
                        ? "popup__link popup__link_active" : "popup__link" }
                          onClick={ props.closeMenu }>Сохранённые фильмы</Link>
                </div>
                <Link to="/profile" className="popup__account-button" onClick={ props.closeMenu }>
                    <img className="popup__account-icon" src={ accountIcon } alt="Иконка профиля"/>
                    <p className="popup__account-text">Аккаунт</p>
                </Link>
            </div>
        </div>
    )
}

export default PopupMenu;
