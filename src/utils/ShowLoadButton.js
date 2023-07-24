function ShowLoadButton (moviesArray, showedMovies) {
    if (moviesArray.length <= showedMovies.length) {
        return false
    }
    if (window.innerWidth > 768 && moviesArray.length > 12) {
        return true
    } else if (window.innerWidth < 769 && moviesArray.length > 8) {
        return true
    } else if (window.innerWidth < 461 && moviesArray.length > 5) {
        return true
    }
    return false
}

export default ShowLoadButton
