import {Link} from "react-router-dom";

function Footer() {
    return (
        <footer className="footer">
            <h2 className="footer__about">Учебный проект Яндекс.Практикум х BeatFilm.</h2>
            <div className="footer__links">
                <p className="footer__year">©2023</p>
                <Link to="https://practicum.yandex.ru/" target="_blank" className="footer__link">
                    Яндекс.Практикум
                </Link>
                <Link to="https://github.com/Messar21/movies-explorer-frontend" target="_blank" className="footer__link">
                    Github
                </Link>
            </div>
        </footer>
    )
}

export default Footer;
