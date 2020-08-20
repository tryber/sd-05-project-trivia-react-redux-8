import { REQUEST_TRIVIA, DATA_TRIVIA, FAILURE } from '../actions';

const initialState = {
  isFetching: false,
  dataGame: [],
  error: '',
};

function fetchTrivia(state = initialState, action) {
  switch (action.type) {
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

export default fetchTrivia;
