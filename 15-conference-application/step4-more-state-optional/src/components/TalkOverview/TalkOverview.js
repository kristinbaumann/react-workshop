import React, { Component } from 'react';
import TalkItem from '../TalkItem/TalkItem';
import Navigation from '../Navigation/Navigation';
import './TalkOverview.css';

class TalkOverview extends Component {
  render() {
    const { match, talks, days, favourites, onStarClickAction } = this.props;
    const dayFromURL = match.params.number;
    const dataByDay = talks.filter((item) => item.day === Number(dayFromURL));
    const list = dataByDay.map((item) => 
      <TalkItem key={item.id} showStar={true} isStarred={favourites.indexOf(item.id) !== -1} {...item} onStarClickAction={onStarClickAction}/>
    );
    return (
      <div className="talkOverview">
        <Navigation days={days} dayFromURL={dayFromURL} />
        <div className="talkOverview-list">{list}</div>
      </div>
    );
  }
}

export default TalkOverview;
