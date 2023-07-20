import {useState} from "react";
import {Link} from "react-router-dom";
import MovieTimer from "../../utils/MovieTimer";

function MoviesCard ({ onMovieSave, deleteBtn, movieCard, image, onMovieDelete }) {

    const [savedButton, setSavedButton] = useState(
        JSON.parse(localStorage.getItem(`savedButton${ movieCard.id }`)) || false
    );
    const [savedMovieId, setSavedMovieId] = useState(
        JSON.parse(localStorage.getItem(`savedMovie${ movieCard.id }`)) || ''
    );

    const handleClickSave = () => {
        onMovieSave(movieCard)
            .then((savedMovie) => {
                setSavedButton(true);
                localStorage.setItem(`savedButton${ movieCard.id }`, JSON.stringify(true));
                setSavedMovieId(savedMovie._id);
                localStorage.setItem(`savedMovie${ movieCard.id }`, JSON.stringify(savedMovie._id));
            })
            .catch((err) => {
                console.log(err);
            })
    };

    const handleClickDelete = () => {
        onMovieDelete(savedMovieId)
            .then(() => {
                setSavedButton(false);
                localStorage.removeItem(`savedMovie${ movieCard.id }`);
                localStorage.removeItem(`savedButton${ movieCard.id }`);
            })
            .catch((err) => {
                console.log(err);
            })
    };

    const handleSavedMovieDelete = () => {
        onMovieDelete(movieCard._id)
            .then(() => {
                localStorage.removeItem(`savedMovie${ movieCard.movieId }`);
                localStorage.removeItem(`savedButton${ movieCard.movieId }`);
            })
            .catch((err) => {
                console.log(err);
            })
    };

    return (
        <li className="card">
            <div className="card__header">
                <h2 className="card__name">{ movieCard.nameRU }</h2>
                <p className="card__duration">{ MovieTimer(movieCard.duration) }</p>
            </div>
            <Link to={ movieCard.trailerLink } className="card__trailer-link" target="_blank">
                <img className="card__image"
                     src={ image }
                     alt="Обложка фильма"/>
            </Link>
            { deleteBtn
                ? <button onClick={ handleSavedMovieDelete }
                          className="card__button card__button_type_delete"
                          type="button">
                </button>
                : savedButton
                    ? <button onClick={ handleClickDelete } type="button"
                              className="card__button card__button_type_saved"></button>
                    : <button onClick={ handleClickSave } type="button" className="card__button">
                        Сохранить
                    </button>
            }
        </li>
    )
}

export default MoviesCard;
