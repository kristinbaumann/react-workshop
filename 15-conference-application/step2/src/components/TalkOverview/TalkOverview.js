import React, { Component } from 'react';
import TalkItem from '../TalkItem/TalkItem';
import Navigation from '../Navigation/Navigation';
import './TalkOverview.css';

class TalkOverview extends Component {
  render() {
    const dataByDay = this.props.talks.filter((item) => item.day === this.props.selectedDay);
    const list = dataByDay.map((item) => 
      <TalkItem key={item.id} {...item}/>
    );
    return (
      <div className="talkOverview">
        <Navigation 
          days= {this.props.days} 
          selectedDay={this.props.selectedDay} 
          changeSelectedDay={(day) => this.props.changeSelectedDay(day)}
          />
        <div className="talkOverview-list">{list}</div>
      </div>
    );
  }
}

export default TalkOverview;
