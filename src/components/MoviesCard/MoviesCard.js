import image from "../../images/movie-image.jpg";
import {useState} from "react";

function MoviesCard({ deleteBtn }) {

    const [saveMovie, setSaveMovie] = useState(false);

    const handleSaveMovie = () => {
        saveMovie ? setSaveMovie(false) : setSaveMovie(true);
    }

    return (
        <li className="card">
            <div className="card__header">
                <h2 className="card__name">В погоне за Бенкси</h2>
                <p className="card__duration">27 минут</p>
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
