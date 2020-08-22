import { combineReducers } from 'redux';
import fetchApis from './fetchApis';
import dataPlayerReducer from './dataPlayer';
import answeredReducer from './answeredReducer';
import resultsPlayerReducer from './playerResults';

const rootReducer = combineReducers({
  fetchApis,
  dataPlayerReducer,
  answeredReducer,
  resultsPlayerReducer
});

export default rootReducer;
