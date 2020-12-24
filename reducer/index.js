import { combineReducers } from 'redux'
import home from './home';
import loading from './loading';

export default combineReducers({
  home,
  loading
})