import searchIcon from "../../images/search-icon.svg";
import {useEffect, useState} from "react";

function SearchForm({ findMovies }) {

    const [shortsFilter, setShortsFilter] = useState(false);
    const [request, setRequest] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleToggle = () => {
        shortsFilter ? setShortsFilter(false) : setShortsFilter(true);
        if (isSubmitted) {
            findMovies(request, !shortsFilter);
        }
    }

    function submitFindMovies (e) {
        e.preventDefault();
        setIsSubmitted(true);
        findMovies(request, shortsFilter);
    }

    function handleChangeRequest (e) {
        setRequest(e.target.value);
    }

    useEffect(() => {
        if (localStorage.getItem('shortsFilter') !== null) {
            setShortsFilter(JSON.parse(localStorage.getItem('shortsFilter')));
        }
        if (localStorage.getItem('request')) {
            setRequest(localStorage.getItem('request'));
        }
    }, [])



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
