import { combineReducers } from 'redux';
import talks from './talks';
import days from './days';
import favourites from './favourites';

const reducers = combineReducers({
  talks,
  days,
  favourites
})

export default reducers;