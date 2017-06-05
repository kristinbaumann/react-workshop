import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../Home/Home';
import TalkOverview from '../TalkOverview/TalkOverview';
import Header from '../Header/Header';
import NotFound from '../NotFound/NotFound';
import './App.css';

const App = () => (
  <div className="app">
    <Header />
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/day/:number' component={TalkOverview} />} />
      <Route component={NotFound}/>
    </Switch>
  </div>
);
 
export default App;
