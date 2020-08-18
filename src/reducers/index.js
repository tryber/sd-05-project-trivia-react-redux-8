import { combineReducers } from 'redux';
import { REQUEST, DATA, FAILURE } from '../actions';

const initialState = {
  isFetching: false,
  data: [],
  error: '',
};

function fetchGravatar(state = initialState, action) {
  switch (action.type) {
    case REQUEST:
      return {
        ...state, isFetching: true,
      };
    case DATA:
      return {
        ...state,
        isFetching: false,
        data: action.data,
      };
    case FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.error,
      };
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  fetchGravatar,
});

export default rootReducer;
