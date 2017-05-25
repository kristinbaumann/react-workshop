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
      <div>
        <p>By { this.props.authorName }</p>
        <ul>{list}</ul>     
      </div>  
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    recipeList: state.recipes.list,
    authorName: state.author.name
  }
}

export default connect(mapStateToProps, null)(RecipeList)