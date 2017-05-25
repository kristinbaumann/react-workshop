import React from 'react';
import RecipeList from './RecipeList';
import AddRecipe from './AddRecipe';

const App = () => {
  return (
    <div>
      <h1>My Recipe Book</h1>
      <RecipeList />
      <AddRecipe />
    </div>       
  );
}

export default App;