import {Link} from "react-router-dom";

function Footer() {
    return (
        <footer className="footer">
            <p className="footer__about">Учебный проект Яндекс.Практикум х BeatFilm.</p>
            <div className="footer__links">
                <p className="footer__year">© 2023</p>
                <Link to="https://practicum.yandex.ru/" className="footer__link">
                    Яндекс.Практикум
                </Link>
                <Link to="https://github.com/Messar21/movies-explorer-frontend" className="footer__link">
                    Github
                </Link>
            </div>
        </footer>
    )
}

export default Footer;
