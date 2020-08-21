import { ANSWERED, CLEAR } from '../actions';

const initialStateAnswer = {
  answeredOne: false,
};

function answeredReducer(state = initialStateAnswer, action) {
  switch (action.type) {
    case ANSWERED:
      return { ...state, answeredOne: true };
    case CLEAR:
      return { ...state, answeredOne: false };
    default:
      return state;
  }
}

export default answeredReducer;
