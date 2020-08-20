import { combineReducers } from 'redux';
import fetchToken from './fetchToken';
import fetchTrivia from './fetchTrivia';
import dataPlayerReducer from './dataPlayer';

const rootReducer = combineReducers({
  fetchToken,
  fetchTrivia,
  dataPlayerReducer,
});

export default rootReducer;
