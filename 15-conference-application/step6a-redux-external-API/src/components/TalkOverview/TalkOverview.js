import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import TalkItem from '../TalkItem/TalkItem';
import Navigation from '../Navigation/Navigation';
import { fetchTalks } from '../../actions/talksActions';
import './TalkOverview.css';

class TalkOverview extends Component {
  componentDidMount(){
    if(!this.props.talks){
      this.props.fetchTalks();
    }
  }
  render() {
    const { match, talks, talksLoading} = this.props;
    const dayFromURL = match.params.number;

    if(talksLoading){
      return <p>Loading talks..</p>
    }
    if(!talks){
      return <p>No existing talks.</p>;
    }

    const dataByDay = talks.filter((item) => item.day === Number(dayFromURL));
    const list = dataByDay.map((item) => 
      <TalkItem key={item.id} {...item}/>
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
    talksLoading: state.talks.loading
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchTalks: () => dispatch(fetchTalks())
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TalkOverview))
