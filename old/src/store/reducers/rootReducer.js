// rootReducer.js

import { combineReducers } from 'redux';
import counterReducer from './counterReducer';

const rootReducer = combineReducers({
  counter: counterReducer
  // more reducers here
});

export default rootReducer;