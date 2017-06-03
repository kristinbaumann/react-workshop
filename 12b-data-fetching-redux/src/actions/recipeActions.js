const API_URL = 'http://localhost:3004/recipes';

export const addRecipe = (recipe) => {
    return {
        type: 'ADD_RECIPE',
        payload: recipe
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
            data,
            loading: false
        }
    }
}

export const fetchRecipes = () => {
    return dispatch => {
        // set loading state
        dispatch(requestRecipes());
        // fetch data from API
        return fetch(API_URL)
            .then(response => response.json())
            .then(json => dispatch(receiveRecipes(json)))
    }
}

