import React from 'react';
import { connect } from 'react-redux';
import { updateAuthor } from '../actions/authorActions';

class AddRecipe extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      name: this.props.authorName,
    }
    this.changeAuthor = this.changeAuthor.bind(this);
  }
  componentWillReceiveProps(newProps) {
    if(this.props.authorName !== newProps.authorName) {
      this.setState({ name: newProps.authorName });
    }
  }
  changeAuthor(){
    this.props.saveAuthorToStore(this.state.name);
    this.setState({ name: '' });
  }
  render(){
    return (
      <div>
        <h4>Change Author</h4>
        <div>
          <label htmlFor="bookAuthor">Name of Book Author:</label>
          <input id="bookAuthor" value={this.state.name ? this.state.name : ''} onChange={(e) => this.setState({ name: e.target.value })} />
        </div> 
        <button onClick={this.changeAuthor}>Save Author</button>         
      </div>          
    );
  }
}
const mapStateToProps = (state) => {
  return {
    authorName: state.author.name
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    saveAuthorToStore: (recipe) => dispatch(updateAuthor(recipe)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddRecipe)