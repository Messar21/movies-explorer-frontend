import searchIcon from "../../images/search-icon.svg";
import {useState} from "react";
function SearchForm() {

    const [toggleBtnState, setToggleBtnState] = useState(true);

    const handleToggle = () => {
        toggleBtnState ? setToggleBtnState(false) : setToggleBtnState(true);
    }

    return (
        <div className="search">
            <div className="search__container">
                <img className="search__find-icon" src={searchIcon} alt="Найти"/>
                <input className="search__input" placeholder="Фильм"/>
                <button className="search__findBtn" type="button">Найти</button>
            </div>
            <div className="search__shorts-container" onClick={handleToggle}>
                <button className={ toggleBtnState ?
                    "search__toggleBtn" : "search__toggleBtn search__toggleBtn_inactive" } type="button">
                </button>
                <p className="search__shorts">Короткометражки</p>
            </div>
        </div>
    )
}

export default SearchForm;
