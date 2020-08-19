import { combineReducers } from 'redux';
import fetchGravatar from './fetchGravatar';
import fetchToken from './fetchToken';
import fetchTrivia from './fetchTrivia';

const rootReducer = combineReducers({
  fetchGravatar,
  fetchToken,
  fetchTrivia,
});

export default rootReducer;
