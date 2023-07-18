const filterMovies = (movies, request, shortsFilter) => {
    const noRegisterRequest = request.toLowerCase();
    const filteredMovies = movies.filter((movie) => movie.nameRU.toLowerCase().includes(noRegisterRequest));
    if (shortsFilter) {
        return filteredMovies.filter((movie) => movie.duration<41);
    }
    return filteredMovies
}

export default filterMovies;
