import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import TalkItem from '../TalkItem/TalkItem';
import Navigation from '../Navigation/Navigation';
import { fetchTalks } from '../../actions/talksActions';
import { fetchFavourites, addFavourite } from '../../actions/favouritesActions';
import './TalkOverview.css';

class TalkOverview extends Component {
  componentDidMount(){
    if(!this.props.talks){
      this.props.fetchTalks();
    }
    if(!this.props.favourites){
      this.props.fetchFavourites();
    }
  }
  render() {
    const { match, talks, talksLoading, favourites} = this.props;
    const dayFromURL = match.params.number;

    if(talksLoading){
      return <p>Loading talks..</p>
    }
    if(!talks){
      return <p>No existing talks.</p>;
    }

    const dataByDay = talks.filter((item) => item.day === Number(dayFromURL));
    const list = dataByDay.map((item) => 
      <TalkItem key={item.id} showStar={true} isStarred={favourites.indexOf(item.id) !== -1} onStarClickAction={(id) => this.props.addFavourite(id) } {...item}/>
    );
    return (
      <div className="talkOverview">
        <Navigation dayFromURL={dayFromURL} />
        <div className="talkOverview-list">{list}</div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    talks: state.talks.list,
    talksLoading: state.talks.loading,
    favourites: state.favourites.list,
    favouritesLoading: state.favourites.loading
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchTalks: () => dispatch(fetchTalks()),
    fetchFavourites: () => dispatch(fetchFavourites()),
    addFavourite: (id) => dispatch(addFavourite(id))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TalkOverview))
