import React from 'react';
import ReactDOM from 'react-dom';

class UserDetails extends React.Component {
  render(){
    return (
      <div>
        <h1>User Details</h1>
        <p>Name: Tim</p>
      </div>
    );
  }
}

class UserList extends React.Component {
  render() {
    return (
      <div>
        <UserDetails />
        <UserDetails />
      </div>
    );
  }
}

ReactDOM.render(<UserList />, document.getElementById('mount'));


