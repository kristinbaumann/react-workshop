import React from 'react';

const recipeData = {
    '1' : { name: 'Nudelsalat', time: '1 Stunde'},
    '2' : { name: 'Hackbraten', time: '30 Minuten'}
}

const RecipeDetail = ({ match, history}) => {
    const id = match.params.id
    const recipe = recipeData[id];
    if(!recipe){
        return (<p>No recipe found!</p>);
    }
    return (
        <div>
            <h4>Recipe with ID {id}</h4>
            <p>Name: {recipe.name}</p>
            <p>Time: {recipe.time}</p>
            <button onClick={() => history.push('/')}>Go back to homepage</button>
        </div>
    )
}   

export default RecipeDetail;
