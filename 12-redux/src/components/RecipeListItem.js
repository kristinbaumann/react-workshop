import React from 'react';

const RecipeListItem = ({ name, time}) => {
  return (<p>{name} ({time})</p>);
}

export default RecipeListItem;