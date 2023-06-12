import Subtitle from "../Subtitle/Subtitle";
import {Link} from "react-router-dom";
import photo from "../../../images/photo.jpg";

function AboutMe() {
    return (
        <section id="about-me" className="about-me">
            <Subtitle text="Студент" />
            <div className="about-me__container">
                <img className="about-me__photo" src={photo} alt="Моя фотография"/>
                <p className="about-me__name">Антон</p>
                <p className="about-me__status">Фронтенд-разработчик, {new Date().getFullYear()-1995} лет</p>
                <p className="about-me__story">
                    Я родился и живу в Белгороде. Закончил университет БГТУ.
                    В последние годы я работал по специальности инженер-механик.
                    Хочу работать и развиваться в IT сфере и стать опытным IT-специалистом.
                    Прошёл обучение в Яндекс практикуме по профессии Web-разработчик.
                    Люблю копаться в коде и решать сложные задачи.
                </p>
                <Link to="https://github.com/Messar21" className="about-me__link">Github</Link>
            </div>
        </section>
    )
}

export default AboutMe;
