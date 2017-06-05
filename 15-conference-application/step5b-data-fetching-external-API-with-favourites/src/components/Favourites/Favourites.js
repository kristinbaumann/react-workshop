import React, { Component } from 'react';
import TalkItem from '../TalkItem/TalkItem';
import './Favourites.css';

class Favourites extends Component {
  render() {
    const { talks, favourites } = this.props;

    const talksByFavourites = talks.filter((item) => {
      if(favourites.indexOf(item.id) !== -1) {
        return item;
      }
      return null;
    });

    if(!talksByFavourites || talksByFavourites.length === 0){
      return (<p>Mark a talk to see your favourites here.</p>);
    }
    const list = talksByFavourites.map((item) => 
      <TalkItem key={item.id} showStar={false} {...item}/>
    );
    
    return (
      <div className="favourites">
        <div className="favourites-list">{list}</div>
      </div>
    );
  }
}

export default Favourites;
