import React from 'react';
import RecipeListItem from './RecipeListItem';
import { connect } from 'react-redux';
import { fetchRecipes } from '../actions/recipeActions';
import { fetchAuthor } from '../actions/authorActions';


class RecipeList extends React.Component{
  componentDidMount(){
    this.props.fetchAllRecipes();
    this.props.fetchAuthor();
  }

  renderRecipes(){
    const { recipeLoading, recipeList } = this.props;
    if(recipeLoading){
      return (<p>Loading recipes...</p>)
    }
    if(!recipeList || recipeList.length === 0){
      return (<p>No recipes loaded.</p>)
    }
    const list = recipeList.map((recipe, index) => {
      return (
        <li key={index}>
          <RecipeListItem {...recipe} />
        </li>
      );
    });
    return (<ul>{list}</ul>);
  }

  renderAuthor(){
    const { authorName } = this.props;
    if(!authorName) { 
      return (<p>Loading author...</p>)
    }
    return (<p>By { authorName }</p>);
  }

  render(){
    return (
      <div>
        { this.renderAuthor() } 
        { this.renderRecipes() } 
      </div>  
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    recipeList: state.recipes.list,
    recipeLoading: state.recipes.loading,
    authorName: state.author.name
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllRecipes: () => dispatch(fetchRecipes()),
    fetchAuthor: () => dispatch(fetchAuthor())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RecipeList)