export const REQUEST_TOKEN = 'REQUEST_TOKEN';
export const DATA_TOKEN = 'DATA_TOKEN';
export const REQUEST_TRIVIA = 'REQUEST_TRIVIA';
export const DATA_TRIVIA = 'DATA_TRIVIA';
export const FAILURE = 'FAILURE';
export const DATA_PLAYER = 'DATA_PLAYER';
export const REQUEST_GRAVATAR = 'REQUEST_TRIVIA';
export const DATA_GRAVATAR = 'DATA_TRIVIA';

export function dataPlayerAction(name, email) {
  return {
    type: DATA_PLAYER,
    name,
    email,
  };
}

export function requestTokenAction() {
  return {
    type: REQUEST_TOKEN,
  };
}

export function successTokenAction(tok) {
  return {
    type: DATA_TOKEN,
    tok,
  };
}

export function requestTriviaAction() {
  return {
    type: REQUEST_TRIVIA,
  };
}

export function successTriviaAction(dataGame) {
  return {
    type: DATA_TRIVIA,
    dataGame,
  };
}

export function requestGravatarAction() {
  return {
    type: REQUEST_GRAVATAR,
  };
}

export function successGravatarAction(grav) {
  return {
    type: DATA_GRAVATAR,
    grav,
  };
}

export function failureAllAction(error) {
  return {
    type: FAILURE,
    error,
  };
}

const apiGravatar = 'url';
export function fetchGravatarThunk() {
  return (dispatch) => {
    dispatch(requestGravatarAction());
    return fetch(apiGravatar)
      .then((response) => response.json())
      .then(
        (data) => {
          console.log(data);
          return dispatch(successGravatarAction(data));
        },
        (error) => dispatch(failureAllAction(error.message)),
      );
  };
}

const apiToken = 'https://opentdb.com/api_token.php?command=request';
export function fetchTokenThunk() {
  return (dispatch) => {
    dispatch(requestTokenAction());
    return fetch(apiToken)
      .then((response) => response.json())
      .then(
        (data) => {
          console.log(data.token);
          return dispatch(successTokenAction(data.token));
        },
        // (error) => dispatch(failureAllAction(error)),
        // aparentemente nem precisa de error nessas apis
      );
  };
}

const apiTrivia = 'https://opentdb.com/api.php?amount=5&token=';
export function fetchTriviaThunk(token) {
  return (dispatch) => {
    dispatch(requestTriviaAction());
    return fetch(`${apiTrivia}${token}`)
      .then((response) => response.json())
      .then(
        (data) => {
          console.log(data);
          return dispatch(successTriviaAction(data));
        },
        (error) => dispatch(failureAllAction(error)),
      );
  };
}
