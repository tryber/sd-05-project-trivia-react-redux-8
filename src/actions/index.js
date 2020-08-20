export const REQUEST = 'REQUEST';
export const DATA = 'DATA';
export const FAILURE = 'FAILURE';
export const DATA_PLAYER = 'DATA_PLAYER'

export function dataPlayerAction(name, email) {
  return {
    type: DATA_PLAYER,
    name,
    email,
  }
}

export function requestAction() {
  return {
    type: REQUEST,
  };
}

export function successDataAction(data) {
  return {
    type: DATA,
    data,
  };
}

export function failureAction(error) {
  return {
    type: FAILURE,
    error,
  };
}

const apiGravatar = 'url';
export function fetchGravatarThunk() {
  return (dispatch) => {
    dispatch(requestAction());
    return fetch(apiGravatar)
      .then((response) => response.json())
      .then(
        (data) => {
          console.log(data.results);
          return dispatch(successDataAction(data.results));
        },
        (error) => dispatch(failureAction(error.message)),
      );
  };
}

const apiToken = 'https://opentdb.com/api_token.php?command=request';
export function fetchTokenThunk() {
  return (dispatch) => {
    dispatch(requestAction());
    return fetch(apiToken)
      .then((response) => response.json())
      .then(
        (data) => {
          console.log(data.token);
          return dispatch(successDataAction(data.token));
        },
        (error) => dispatch(failureAction(error)),
      );
  };
}

const apiTrivia = 'https://opentdb.com/api.php?amount=5&token=';
export function fetchTriviaThunk(token) {
  return (dispatch) => {
    dispatch(requestAction());
    return fetch(`${apiTrivia}${token}`)
      .then((response) => response.json())
      .then(
        (data) => {
          console.log(data);
          return dispatch(successDataAction(data));
        },
        (error) => dispatch(failureAction(error.message)),
      );
  };
}
