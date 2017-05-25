import React from 'react';
import { connect } from 'react-redux';
import { addRecipe } from '../actions/recipeActions';

class AddRecipe extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      name: '',
      time: ''
    }
    this.saveRecipe = this.saveRecipe.bind(this);
  }
  saveRecipe(){
    this.props.saveRecipeToStore(this.state);
    this.setState({ name: '', time: '' });
  }
  render(){
    return (
      <div>
        <h4>Add a new Recipe</h4>
        <div>
          <label htmlFor="recipeName">Name of Recipe:</label>
          <input id="recipeName" value={this.state.name} onChange={(e) => this.setState({ name: e.target.value })} />
        </div> 
        <div>
          <label htmlFor="recipeTime">Time of Recipe:</label>
          <input id="recipeTime" value={this.state.time} onChange={(e) => this.setState({ time: e.target.value })} />
        </div> 
        <button onClick={this.saveRecipe}>Save recipe</button>         
      </div>          
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    saveRecipeToStore: (recipe) => dispatch(addRecipe(recipe))
  }
}

export default connect(null, mapDispatchToProps)(AddRecipe)