export const BASE_URL = 'https://api.moviesjutsio.nomoredomains.rocks';

const getHeaders = (jwt) => {
    return {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${ jwt }`,
    }
}
export const register = (name, email, password) => {
    return fetch(`${BASE_URL}/signup`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({name, email, password})
    })
        .then((res) => {
            return getResponseData(res)
        })
};

export const authorize = (email, password) => {
    return fetch(`${BASE_URL}/signin`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({email, password})
    })
        .then((res) => {
            return getResponseData(res)
        })
};

export const getUser = (jwt) => {
    return fetch(`${BASE_URL}/users/me`, {
        method: 'GET',
        headers: getHeaders(jwt),
    })
        .then(res => {
            return getResponseData(res);
        })
}

export const updateUser = (name, email, jwt) => {
    return fetch(`${BASE_URL}/users/me`, {
        method: 'PATCH',
        headers: getHeaders(jwt),
        body: JSON.stringify({
            name: name,
            email: email
        })
    })
        .then(res => {
            return getResponseData(res);
        })
}
export const addMovie = ({ country, director, duration, year, description,
                             image, trailerLink, id, nameRU, nameEN },
                         jwt) => {
    return fetch(`${BASE_URL}/movies`, {
        method: 'POST',
        headers: getHeaders(jwt),
        body: JSON.stringify({
            country: country,
            director: director,
            duration: duration,
            year: year,
            description: description,
            image: `https://api.nomoreparties.co${image.url}`,
            trailerLink: trailerLink,
            thumbnail: `https://api.nomoreparties.co${image.formats.thumbnail.url}`,
            movieId: id,
            nameRU: nameRU,
            nameEN: nameEN
        })
    })
        .then(res => {
            return getResponseData(res);
        })
}

export const getMovies = (jwt) => {
    return fetch(`${BASE_URL}/movies`, {
        method: 'GET',
        headers: getHeaders(jwt),
    })
        .then(res => {
            return getResponseData(res);
        })
}

export const deleteMovie = (movieId, jwt) => {
    return fetch(`${BASE_URL}/movies/${movieId}`, {
        method: 'DELETE',
        headers: getHeaders(jwt),
    })
        .then(res => {
            return getResponseData(res);
        })
}

function getResponseData(res){
    if(!res.ok) {
        return res.json()
            .then((err) => {
                return Promise.reject(err)
            });
    }
    return res.json();
}
