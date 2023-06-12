import image from "../../images/movie-image.jpg";
import {useState} from "react";

function MoviesCard({ deleteBtn }) {

    const [saveMovie, setSaveMovie] = useState(false);

    const handleSaveMovie = () => {
        saveMovie ? setSaveMovie(false) : setSaveMovie(true);
    }

    return (
        <li className="movies__card">
            <div className="movies__header">
                <h2 className="movies__name">В погоне за Бенкси</h2>
                <p className="movies__duration">27 минут</p>
            </div>
            <img className="movies__image" src={image} alt="Обложка фильма"/>
            { deleteBtn ?
                <button className="movies__button movies__button_type_delete">
                </button>
                : <button onClick={handleSaveMovie} className={ saveMovie ?
                    "movies__button movies__button_type_saved" : "movies__button" }>
                    { saveMovie ? "" : "Сохранить" }
                </button>
            }
        </li>
    )
}

export default MoviesCard;
