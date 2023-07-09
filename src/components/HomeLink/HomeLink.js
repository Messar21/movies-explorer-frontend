import logo from "../../images/logo.svg";
import {Link} from "react-router-dom";

function HomeLink() {
    return (
        <Link to="/" className="home-link">
            <img className="homeLink__logo" src={logo} alt="Домашняя страница"/>
        </Link>
    )
}

export default HomeLink;
