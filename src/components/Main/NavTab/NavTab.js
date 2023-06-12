import { HashLink as Link } from "react-router-hash-link";

function NavTab() {
    return (
        <nav className="nav-tab">
            <Link smooth to="#about-project" className="nav-tab__link">О проекте</Link>
            <Link smooth to="#techs" className="nav-tab__link">Технологии</Link>
            <Link smooth to="#about-me" className="nav-tab__link">Студент</Link>
        </nav>
    )
}

export default NavTab;
