import { config } from '../api/config';

export const requestFavourites = () => {
    return {
        type: 'REQUEST_FAVOURITES',
        payload: {
            loading: true
        }
    }
}

export const receiveFavourites = (data) => {
    return {
        type: 'RECEIVE_FAVOURITES',
        payload: {
            data: data.favourites,
            loading: false
        }
    }
}

export const fetchFavourites = () => {
    return dispatch => {
        dispatch(requestFavourites());
        return fetch(`${config.API_URL}/favourites`)
            .then(response => response.json())
            .then(json => dispatch(receiveFavourites(json)))
    }
}

export const addFavourite = (id) => {
    return {
        type: 'ADD_FAVOURITE',
        payload: {
            id
        }
    }
}