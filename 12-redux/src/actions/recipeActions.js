export const addRecipe = (recipe) => {
    return {
        type: 'ADD_RECIPE',
        payload: recipe
    }
}