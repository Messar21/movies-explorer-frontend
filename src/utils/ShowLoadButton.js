function ShowLoadButton (moviesArray) {
    if (window.innerWidth > 768 && moviesArray.length>12) {
        return true
    } else if (window.innerWidth > 460 && moviesArray.length>8) {
        return true
    } else if (window.innerWidth > 320 && moviesArray.length>5) {
        return true
    }
    return false
}

export default ShowLoadButton
