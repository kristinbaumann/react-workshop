import React from 'react';
import './TalkItem.css';
import star from '../../img/star.png';

const TalkItem = ({ id, day, time, place, speaker, talk, showStar, isStarred, onStarClickAction }) => (
  <div className={`talkItem ${isStarred ? `talkItem-starred`:`` }`}>
    <div className="talkItem-location">
      <span>Day {day}, {time}</span>
      <span>{place}</span>
    </div>
    <div className="talkItem-content">
      <span className="talkItem-talk">{talk}</span>
      <span>By {speaker}</span>
    </div>
    { showStar && !isStarred ? 
    <div className="talkItem-star">
      <img src={star} className="favouritesIcon" onClick={() => onStarClickAction(id)} alt="Talk Favourites" />
    </div> : null }
    { isStarred ? <div className="talkItem-star"><p>Starred!</p></div>
    : null}
  </div>
)

TalkItem.defaultProps = {
  showStar: false
}

export default TalkItem;
