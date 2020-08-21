import { combineReducers } from 'redux';
import fetchApis from './fetchApis';
import dataPlayerReducer from './dataPlayer';

const rootReducer = combineReducers({
  fetchApis,
  dataPlayerReducer,
});

export default rootReducer;
