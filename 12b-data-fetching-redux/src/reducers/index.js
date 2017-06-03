import { combineReducers } from 'redux';
import recipes from './recipes';
import author from './author';

const reducers = combineReducers({
  recipes,
  author
})

export default reducers;