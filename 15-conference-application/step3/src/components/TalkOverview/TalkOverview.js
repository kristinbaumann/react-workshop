import React, { Component } from 'react';
import TalkItem from '../TalkItem/TalkItem';
import Navigation from '../Navigation/Navigation';
import './TalkOverview.css';

class TalkOverview extends Component {
  render() {
    const dayFromURL = this.props.match.params.number;
    const dataByDay = this.props.talks.filter((item) => item.day === Number(dayFromURL));
    const list = dataByDay.map((item) => 
      <TalkItem key={item.id} {...item}/>
    );
    return (
      <div className="talkOverview">
        <Navigation 
          days= {this.props.days} 
          dayFromURL={dayFromURL} 
          />
        <div className="talkOverview-list">{list}</div>
      </div>
    );
  }
}

export default TalkOverview;
