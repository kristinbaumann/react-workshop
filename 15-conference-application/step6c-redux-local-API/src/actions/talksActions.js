import { config } from '../api/config';

export const requestTalks = () => {
    return {
        type: 'REQUEST_TALKS',
        payload: {
            loading: true
        }
    }
}

export const receiveTalks = (data) => {
    return {
        type: 'RECEIVE_TALKS',
        payload: {
            data: data,
            loading: false
        }
    }
}

export const fetchTalks = () => {
    return dispatch => {
        dispatch(requestTalks());
        return fetch(`${config.API_URL}/talks`)
            .then(response => response.json())
            .then(json => dispatch(receiveTalks(json)))
    }
}

