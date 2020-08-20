import { REQUEST_TOKEN, DATA_TOKEN, FAILURE } from '../actions';

const initialState = {
  isFetching: false,
  token: '',
  error: '',
};

function fetchToken(state = initialState, action) {
  switch (action.type) {
    case REQUEST_TOKEN:
      return {
        ...state, isFetching: true,
      };
    case DATA_TOKEN:
      return {
        ...state,
        isFetching: false,
        token: action.tok,
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
