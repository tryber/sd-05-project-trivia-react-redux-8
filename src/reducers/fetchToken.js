import { REQUEST, DATA, FAILURE } from '../actions';

const initialState = {
  isFetching: false,
  token: '',
  error: '',
};

function fetchToken(state = initialState, action) {
  switch (action.type) {
    case REQUEST:
      return {
        ...state, isFetching: true,
      };
    case DATA:
      return {
        ...state,
        isFetching: false,
        token: action.data,
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

export default fetchToken;
