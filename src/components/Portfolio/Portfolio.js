import {Link} from "react-router-dom";

function Portfolio() {
    return (
        <section className="portfolio">
            <h3 className="portfolio__title">Портфолио</h3>
            <ul className="portfolio__list">
                <li className="portfolio__list-item">
                    <Link to="https://github.com/Messar21/how-to-learn" target="_blank" className="portfolio__list-link">
                        Статичный сайт
                        <span className="portfolio__list-icon">
                            ↗
                        </span>
                    </Link>
                </li>
                <li className="portfolio__list-item">
                    <Link to="https://github.com/Messar21/russian-travel" target="_blank" className="portfolio__list-link">
                        Адаптивный сайт
                        <span className="portfolio__list-icon">
                            ↗
                        </span>
                    </Link>
                </li>
                <li className="portfolio__list-item">
                    <Link to="https://github.com/Messar21/react-mesto-api-full-gha" target="_blank" className="portfolio__list-link">
                        Одностраничное приложение
                        <span className="portfolio__list-icon">
                            ↗
                        </span>
                    </Link>
                </li>
            </ul>
        </section>
    )
}

export default Portfolio;
