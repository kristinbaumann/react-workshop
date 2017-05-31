import React from 'react';
import { Switch, Route } from 'react-router-dom';
import RecipeOverview from './RecipeOverview';
import RecipeDetail from './RecipeDetail';

const Recipes = () => (
    <Switch>
        <Route exact path='/recipes' component={RecipeOverview}/>
        <Route path='/recipes/:id' component={RecipeDetail}/>
    </Switch>
)

export default Recipes;