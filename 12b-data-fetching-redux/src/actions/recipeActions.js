import { config } from '../api/config';

export const addRecipe = (recipe) => {
    return {
        type: 'ADD_RECIPE',
        payload: recipe
    }
}

export const saveRecipe = (newRecipe) => {
    return (dispatch, getState) => {
        return fetch(`${config.API_URL}/recipes`, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "list":   [...getState().recipes.list, newRecipe],
            })
        })
        .then(response => response.json())
        .then(json => dispatch(addRecipe(newRecipe)))
    }
}

export const requestRecipes = () => {
    return {
        type: 'REQUEST_RECIPES',
        payload: {
            loading: true
        }
    }
}

export const receiveRecipes = (data) => {
    return {
        type: 'RECEIVE_RECIPES',
        payload: {
            data: data.list,
            loading: false
        }
    }
}

export const fetchRecipes = () => {
    return dispatch => {
        // set loading state
        dispatch(requestRecipes());
        // fetch data from API
        return fetch(`${config.API_URL}/recipes`)
            .then(response => response.json())
            .then(json => dispatch(receiveRecipes(json)))
    }
}

