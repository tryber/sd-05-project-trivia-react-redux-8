import { DATA_PLAYER, GET_SCORE } from '../actions';

const initialStatePlayer = {
  name: '',
  email: '',
  score: 0,
  assertions: 0,
};

function dataPlayerReducer(state = initialStatePlayer, action) {
  switch (action.type) {
    case DATA_PLAYER:
      return { ...state, name: action.name, email: action.email };
      case GET_SCORE:
        return { 
          ...state,
          score: state.score + action.points,
          assertions: state.assertions + 1,
        }; 
        // ! reducer puro. boa pratica outra? Como escrever '...'?
        // tb resolver problema de placar n zerado qdo jogar novamente
    default:
      return state;
  }
}

export default dataPlayerReducer;
