import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import NavigationButton from '../NavigationButton/NavigationButton';
import { fetchDays } from '../../actions/daysActions';
import './Navigation.css';


class Navigation extends Component {
  componentDidMount(){
    if(!this.props.days){
      this.props.fetchDays();
    }
  }
  render() {
    const { days, match, daysLoading } = this.props;
    if(daysLoading){
      return <p>Loading days...</p>;
    }
    if(!days){
      return <p>No navigation loaded yet.</p>;
    }
    const buttonList = days.map((item, index) => 
      <NavigationButton 
        key={index} 
        caption={item.text} 
        link={`/day/${item.day}`}
        selected={Number(match.params.number) === item.day}
        />
    );
    return (
      <div className="navigation">{ buttonList }</div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    days: state.days.list,
    daysLoading: state.days.loading
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchDays: () => dispatch(fetchDays())
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Navigation))
