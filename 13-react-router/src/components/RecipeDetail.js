import React from 'react';

const RecipeDetail = ({ match }) => (
    <div>
        <p>Recipe with ID {match.params.id}</p>
    </div>
)

export default RecipeDetail;
