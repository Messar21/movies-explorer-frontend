export const getMovies = () => {
    return fetch('https://api.nomoreparties.co/beatfilm-movies', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    })
        .then(res => {
            return getResponseData(res);
        })
}

function getResponseData(res){
    if(!res.ok) {
        return Promise.reject(`Что-то пошло не так: ${res.status} ${res.statusText}`);
    }
    return res.json();
}
