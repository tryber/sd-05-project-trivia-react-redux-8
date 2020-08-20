import { DATA_PLAYER } from '../actions';

const initialStatePlayer = {
  name: '',
  email: '',
};

function dataPlayerReducer(state = initialStatePlayer, action) {
  switch (action.type) {
    case DATA_PLAYER:
      return { ...state, name: action.name, email: action.email };
    default:
      return state;
  }
}

export default dataPlayerReducer;
