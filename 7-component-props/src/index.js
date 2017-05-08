import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

class UserDetails extends React.Component {
  render(){
    return (
      <div>
        <h1>User Details</h1>
        <p>Name: {this.props.name}</p>
      </div>
    );
  }
}
UserDetails.defaultProps = {
  name: "Mike"
};
UserDetails.propTypes = {
  name: PropTypes.string
};

class UserList extends React.Component {
  render() {
    return (
      <div>
        <UserDetails name="Tim" />
        <UserDetails />
      </div>
    );
  }
}


ReactDOM.render(<UserList />, document.getElementById('mount'));


