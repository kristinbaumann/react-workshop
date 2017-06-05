import React from 'react';
import './TalkItem.css';

const TalkItem = ({ time, place, speaker, talk }) => (
  <div className="talkItem">
    <div className="talkItem-location">
      <span>{time}</span>
      <span>{place}</span>
    </div>
    <div className="talkItem-content">
      <span className="talkItem-talk">{talk}</span>
      <span>By {speaker}</span>
    </div>
  </div>
)

export default TalkItem;
