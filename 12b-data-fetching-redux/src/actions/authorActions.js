import { config } from '../api/config';

export const writeAuthor = (name) => {
    return {
        type: 'UPDATE_AUTHOR',
        payload: name
    }
}

export const saveAuthor = (data) => {
    return dispatch => {
        return fetch(`${config.API_URL}/author`, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "name":   data,
            })
        })
        .then(response => response.json())
        .then(json => dispatch(writeAuthor(data)))
    }
}

export const requestAuthor = () => {
    return {
        type: 'REQUEST_AUTHOR',
        payload: {
            loading: true
        }
    }
}

export const receiveAuthor = (data) => {
    return {
        type: 'RECEIVE_AUTHOR',
        payload: {
            data: data.name,
            loading: false
        }
    }
}

export const fetchAuthor = () => {
    return dispatch => {
        // set loading state
        dispatch(requestAuthor());
        // fetch data from API
        return fetch(`${config.API_URL}/author`)
            .then(response => response.json())
            .then(json => dispatch(receiveAuthor(json)))
    }
}
