import React, { Component } from 'react';
import TalkItem from '../TalkItem/TalkItem';
import Navigation from '../Navigation/Navigation';
import './TalkOverview.css';

class TalkOverview extends Component {
  render() {
    const { match, talks, days} = this.props;
    const dayFromURL = match.params.number;

    if(!talks){
      return <p>No talks loaded yet.</p>;
    }

    const dataByDay = talks.filter((item) => item.day === Number(dayFromURL));
    const list = dataByDay.map((item) => 
      <TalkItem key={item.id} {...item}/>
    );
    return (
      <div className="talkOverview">
        <Navigation 
          days= {days} 
          dayFromURL={dayFromURL} 
          />
        <div className="talkOverview-list">{list}</div>
      </div>
    );
  }
}

export default TalkOverview;
