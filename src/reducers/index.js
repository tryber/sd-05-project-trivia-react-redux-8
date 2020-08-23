import { combineReducers } from 'redux';
import fetchApis from './fetchApis';
import dataPlayerReducer from './dataPlayer';
import answeredReducer from './answeredReducer';

const rootReducer = combineReducers({
  fetchApis,
  dataPlayerReducer,
  answeredReducer
});

export default rootReducer;
