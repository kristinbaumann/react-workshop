import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Header from './Header';
import Recipes from './Recipes';

const App = () => (
  <main>
    <Header />
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/recipes' component={Recipes}/>
    </Switch>
  </main>
);

export default App;