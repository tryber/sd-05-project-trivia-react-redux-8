import { DATA_PLAYER, GET_SCORE, CLEAR_SCORE } from '../actions';

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
      // ! reducer devia ser puro. ma pratica? Escrever com spread?
    case CLEAR_SCORE:
      return {
        ...state,
        name: action.name,
        email: action.email,
        score: action.score,
        assertions: action.assertions,  
      }
      // resolve problema de placar n zerado qdo jogar novamente
    default:
      return state;
  }
}

export default dataPlayerReducer;
