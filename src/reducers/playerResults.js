import { GET_SCORE } from '../actions';

const initialStateResults = {
  score: '',
  assertions: '',
};

function resultsPlayerReducer(state = initialStateResults, action) {
  switch (action.type) {
    case GET_SCORE:
      return { ...state, score: action.points, assertions: action.assert };
    default:
      return state;
  }
}

export default resultsPlayerReducer;
