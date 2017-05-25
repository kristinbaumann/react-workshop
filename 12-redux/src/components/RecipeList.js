import React from 'react';
import { connect } from 'react-redux';

class RecipeList extends React.Component{
  render(){
    const list = this.props.recipeList.map((recipe, index) => {
      return (
        <li key={index}>
          <p>{recipe.name} ({recipe.time})</p>
        </li>
      );
    });
    return (
      <ul>{list}</ul>       
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    recipeList: state.recipes.list
  }
}

export default connect(mapStateToProps)(RecipeList)