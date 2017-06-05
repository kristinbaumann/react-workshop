import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../Home/Home';
import TalkOverview from '../TalkOverview/TalkOverview';
import Header from '../Header/Header';
import Favourites from '../Favourites/Favourites';
import NotFound from '../NotFound/NotFound';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      talks: [
        { id: 1, day: 1, time: '10:00', place: 'Room A', speaker: 'Anton', talk: 'React - Basics' },
        { id: 2, day: 1, time: '11:30', place: 'Room D', speaker: 'Berta', talk: 'React - State' },
        { id: 3, day: 1, time: '13:00', place: 'Room A', speaker: 'Cäsar', talk: 'React - Props' },
        { id: 4, day: 1, time: '14:30', place: 'Room B', speaker: 'Dora', talk: 'React - Lifecycle' },
        { id: 5, day: 1, time: '16:00', place: 'Room A', speaker: 'Emil', talk: 'React - PropTypes' },
        { id: 6, day: 2, time: '09:00', place: 'Room A', speaker: 'Friedrich', talk: 'React - setState' },
        { id: 7, day: 2, time: '10:30', place: 'Room C', speaker: 'Gustav', talk: 'Redux - Actions' },
        { id: 8, day: 2, time: '12:00', place: 'Room A', speaker: 'Heinrich', talk: 'Redux - Reducers' },
        { id: 9, day: 2, time: '13:30', place: 'Room B', speaker: 'Ida', talk: 'Redux - Store' },
        { id: 10, day: 2, time: '15:00', place: 'Room D', speaker: 'Julius', talk: 'Redux - Dispatch' },
        { id: 11, day: 3, time: '10:30', place: 'Room A', speaker: 'Kaufmann', talk: 'ReactRouter - Router' },
        { id: 12, day: 3, time: '12:00', place: 'Room B', speaker: 'Ludwig', talk: 'ReactRouter - Routes' },
        { id: 13, day: 3, time: '13:30', place: 'Room C', speaker: 'Marta', talk: 'ReactRouter - Link' },
        { id: 14, day: 3, time: '15:00', place: 'Room B', speaker: 'Nordpol', talk: 'ReactRouter - Switch' },
        { id: 15, day: 3, time: '16:30', place: 'Room B', speaker: 'Otto', talk: 'ReactRouter - History' },
      ],
      days: [
        { day: 1, text: '20th June' },
        { day: 2, text: '21th June' },
        { day: 3, text: '22th June' },
      ],
      favourites: []
    };
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
