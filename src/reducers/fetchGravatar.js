import { REQUEST_GRAVATAR, DATA_GRAVATAR, FAILURE } from '../actions';

const initialState = {
  isFetching: false,
  data: [],
  error: '',
};

function fetchGravatar(state = initialState, action) {
  switch (action.type) {
    case REQUEST_GRAVATAR:
      return {
        ...state, isFetching: true,
      };
    case DATA_GRAVATAR:
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

export default fetchGravatar;
