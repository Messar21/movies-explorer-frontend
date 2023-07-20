import searchIcon from "../../images/search-icon.svg";
import {useEffect, useState} from "react";

function SearchForm({ findMovies, isSavedMovies }) {

    const [shortsFilter, setShortsFilter] = useState(false);
    const [request, setRequest] = useState('');

    const handleToggle = () => {
        if (localStorage.getItem('shortsFilter') !== null || isSavedMovies) {
            findMovies(request, !shortsFilter);
        }
        shortsFilter ? setShortsFilter(false) : setShortsFilter(true);
    }

    function submitFindMovies (e) {
        e.preventDefault();
        findMovies(request, shortsFilter);
    }

    function handleChangeRequest (e) {
        setRequest(e.target.value);
    }

    useEffect(() => {
        if (localStorage.getItem('shortsFilter') !== null && !isSavedMovies) {
            setShortsFilter(JSON.parse(localStorage.getItem('shortsFilter')));
        }
        if (localStorage.getItem('request') && !isSavedMovies) {
            setRequest(localStorage.getItem('request'));
        }
    }, [isSavedMovies])



    return (
        <div className="search">
            <form onSubmit={submitFindMovies} className="search__container">
                <img className="search__find-icon" src={searchIcon} alt="Найти"/>
                <input onChange={handleChangeRequest}
                       className="search__input"
                       name="search-input"
                       placeholder="Фильм"
                       value={request || ''}
                       pattern='^[a-zA-Zа-яА-яёЁ0-9]+$' />
                <button className="search__findBtn" type="submit">Найти</button>
            </form>
            <div className="search__shorts-container" onClick={handleToggle}>
                <button title="Короткометражки" className={ shortsFilter ?
                    "search__toggleBtn" : "search__toggleBtn search__toggleBtn_inactive" } type="button">
                </button>
                <p className="search__shorts">Короткометражки</p>
            </div>
        </div>
    )
}

export default SearchForm;
