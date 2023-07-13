import {useState} from "react";

function MoviesCard({ deleteBtn, name, duration, image }) {

    const [saveMovie, setSaveMovie] = useState(false);

    const handleSaveMovie = () => {
        saveMovie ? setSaveMovie(false) : setSaveMovie(true);
    }

    return (
        <li className="card">
            <div className="card__header">
                <h2 className="card__name">{name}</h2>
                <p className="card__duration">{duration} минут</p>
            </div>
            <img className="card__image" src={image} alt="Обложка фильма"/>
            { deleteBtn ?
                <button className="card__button card__button_type_delete" type="button">
                </button>
                : <button onClick={handleSaveMovie} type="button" className={ saveMovie ?
                    "card__button card__button_type_saved" : "card__button" }>
                    { saveMovie ? "" : "Сохранить" }
                </button>
            }
        </li>
    )
}

export default MoviesCard;
