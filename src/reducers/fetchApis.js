import { REQUEST_TOKEN, DATA_TOKEN, REQUEST_TRIVIA, DATA_TRIVIA, FAILURE } from '../actions';

const initialState = {
  isFetching: false,
  token: '',
  dataGame: [],
  error: '',
};

function fetchApis(state = initialState, action) {
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
    case REQUEST_TRIVIA:
      return {
        ...state, isFetching: true,
      };
    case DATA_TRIVIA:
      return {
        ...state,
        isFetching: false,
        dataGame: action.dataGame,
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

export default fetchApis;
