import {Link} from "react-router-dom";

function Portfolio() {
    return (
        <section className="portfolio">
            <h3 className="portfolio__title">Портфолио</h3>
            <ul className="portfolio__list">
                <li className="portfolio__list-item">
                    <Link to="https://github.com/Messar21/how-to-learn" className="portfolio__list-link">
                        Статичный сайт
                    </Link>
                    <Link to="https://github.com/Messar21/how-to-learn" className="portfolio__list-icon">
                        ↗
                    </Link>
                </li>
                <li className="portfolio__list-item">
                    <Link to="https://github.com/Messar21/russian-travel" className="portfolio__list-link">
                        Адаптивный сайт
                    </Link>
                    <Link to="https://github.com/Messar21/russian-travel" className="portfolio__list-icon">
                        ↗
                    </Link>
                </li>
                <li className="portfolio__list-item">
                    <Link to="https://github.com/Messar21/react-mesto-api-full-gha" className="portfolio__list-link">
                        Одностраничное приложение
                    </Link>
                    <Link to="https://github.com/Messar21/react-mesto-api-full-gha" className="portfolio__list-icon">
                        ↗
                    </Link>
                </li>
            </ul>
        </section>
    )
}

export default Portfolio;
