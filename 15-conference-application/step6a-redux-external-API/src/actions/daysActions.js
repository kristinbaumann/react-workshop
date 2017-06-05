import { config } from '../api/config';

export const requestDays = () => {
    return {
        type: 'REQUEST_DAYS',
        payload: {
            loading: true
        }
    }
}

export const receiveDays = (data) => {
    return {
        type: 'RECEIVE_DAYS',
        payload: {
            data: data.days,
            loading: false
        }
    }
}

export const fetchDays = () => {
    return dispatch => {
        dispatch(requestDays());
        return fetch(`${config.API_URL}/days`)
            .then(response => response.json())
            .then(json => dispatch(receiveDays(json)))
    }
}

