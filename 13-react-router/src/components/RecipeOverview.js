import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class RecipeOverview extends Component {
  render() {
    const recipeData = [
        { id: 1, name: 'Nudelsalat', time: '1 Stunde'},
        { id: 2, name: 'Hackbraten', time: '30 Minuten'}
    ];
    const recipes = recipeData.map((recipe, index) => (
        <li key={index}><Link to={`/recipes/${recipe.id}`}><p>{recipe.name} ({recipe.time})</p></Link></li>
    ));
    return(
        <div>
            <h2>My Recipe List</h2>
            <ul>{recipes}</ul>
        </div>
    )
  }
}

export default RecipeOverview;
