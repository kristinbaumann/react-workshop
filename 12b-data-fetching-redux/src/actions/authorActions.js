const API_URL = 'http://localhost:3004/author';
export const updateAuthor = (name) => {
    return {
        type: 'UPDATE_AUTHOR',
        payload: name
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
        return fetch(API_URL)
            .then(response => response.json())
            .then(json => dispatch(receiveAuthor(json)))
    }
}
