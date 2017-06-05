import { combineReducers } from 'redux';
import talks from './talks';
import days from './days';

const reducers = combineReducers({
  talks,
  days
})

export default reducers;