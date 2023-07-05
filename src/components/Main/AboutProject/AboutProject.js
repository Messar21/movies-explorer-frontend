import Subtitle from "../Subtitle/Subtitle";

function AboutProject() {
    return (
        <section id="about-project" className="about-project">
            <Subtitle text="О проекте" />
            <div className="about-project__about">
                <article className="about-project__article">
                    <h3 className="about-project__article-title">Дипломный проект включал 5 этапов</h3>
                    <p className="about-project__article-text">
                        Составление плана, работу над бэкендом, вёрстку,
                        добавление функциональности и финальные доработки.
                    </p>
                </article>
                <article className="about-project__article">
                    <h3 className="about-project__article-title">На выполнение диплома ушло 5 недель</h3>
                    <p className="about-project__article-text">
                        У каждого этапа был мягкий и жёсткий дедлайн,
                        которые нужно было соблюдать, чтобы успешно защититься.
                    </p>
                </article>
            </div>
            <div className="about-project__process">
                <p className="about-project__text about-project__text_type_one-week">1 неделя</p>
                <p className="about-project__text about-project__text_type_four-week">4 недели</p>
                <p className="about-project__text about-project__text_type_back">Back-end</p>
                <p className="about-project__text about-project__text_type_front">Front-end</p>
            </div>
        </section>
    )
}

export default AboutProject;
