import React from 'react';
import RecipeList from './RecipeList';
import AddRecipe from './AddRecipe';
import ChangeAuthor from './ChangeAuthor';

const App = () => {
  return (
    <div>
      <h1>Recipe Book</h1>
      <RecipeList />
      <AddRecipe />
      <ChangeAuthor />
    </div>       
  );
}

export default App;