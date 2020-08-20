import { combineReducers } from 'redux';
import fetchGravatar from './fetchGravatar';
import fetchToken from './fetchToken';
import fetchTrivia from './fetchTrivia';
import dataPlayerReducer from './dataPlayer';

const rootReducer = combineReducers({
  fetchGravatar,
  fetchToken,
  fetchTrivia,
  dataPlayerReducer,
});

export default rootReducer;
