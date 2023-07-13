const filterMovies = (movies, request, shortsFilter) => {
    const filteredMovies = movies.filter((movie) => movie.nameRU.includes(request));
    if (shortsFilter) {
        return filteredMovies.filter((movie) => movie.duration<41);
    }
    return filteredMovies
}

export default filterMovies;
