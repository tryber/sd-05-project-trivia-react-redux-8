import fetchGravatar from './fetchGravatar';
import fetchToken from './fetchToken';
import fetchTrivia from './fetchTrivia';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  fetchGravatar,
  fetchToken,
  fetchTrivia,
});

export default rootReducer;
