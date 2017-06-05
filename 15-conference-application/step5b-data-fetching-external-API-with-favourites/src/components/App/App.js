import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../Home/Home';
import TalkOverview from '../TalkOverview/TalkOverview';
import Header from '../Header/Header';
import Favourites from '../Favourites/Favourites';
import NotFound from '../NotFound/NotFound';
import './App.css';

const API_URL = 'https://demo2977295.mockable.io';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      talks: null,
      days: null,
      favourites: null
    };
  }
  
  componentDidMount(){
    fetch(`${API_URL}/days`)
      .then(response => response.json())
      .then(response => this.setState({ days: response.days}))
      .catch(err => console.error(err))

    fetch(`${API_URL}/talks`)
      .then(response => response.json())
      .then(response => this.setState({ talks: response.talks}))
      .catch(err => console.error(err))

    fetch(`${API_URL}/favourites`)
      .then(response => response.json())
      .then(response => this.setState({ favourites: response.favourites}))
      .catch(err => console.error(err))
  }

  onStarClickAction(id) {
    this.setState((prevState, props) => {
      if(prevState.favourites.indexOf(id) === -1){
        return { favourites: [...prevState.favourites, id]};
      }
    });
  }
  render() {
    const { talks, days, favourites } = this.state;
    return (
      <div className="app">
        <Header favourites={favourites}/>
        <Switch>
          <Route exact path='/' render={(props) => <Home days={days} {...props} />} />
          <Route path='/day/:number' render={(props) => <TalkOverview talks={talks} days={days} favourites={favourites} onStarClickAction={(id) => this.onStarClickAction(id)} {...props} />} />
          <Route path='/favourites' render={(props) => <Favourites talks={talks} favourites={favourites} {...props} />} />
          <Route component={NotFound}/>
        </Switch>
      </div>
    );
  }
}

export default App;
