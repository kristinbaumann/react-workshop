import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import TalkItem from '../TalkItem/TalkItem';
import { fetchFavourites } from '../../actions/favouritesActions';
import { fetchTalks } from '../../actions/talksActions';
import './Favourites.css';

class Favourites extends Component {
  componentDidMount(){
    if(!this.props.talks){
      this.props.fetchTalks();
    }
    if(!this.props.favourites){
      this.props.fetchFavourites();
    }
  }
  render() {
    const { talks, favourites } = this.props;

    if(!talks || !favourites){
      return (<p>Loading talks and favourites...</p>);
    }
   
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

const mapStateToProps = (state, ownProps) => {
  return {
    favourites: state.favourites.list,
    favouritesLoading: state.favourites.loading,
    talks: state.talks.list,
    talksLoading: state.talks.loading,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchFavourites: () => dispatch(fetchFavourites()),
    fetchTalks: () => dispatch(fetchTalks())
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Favourites))
