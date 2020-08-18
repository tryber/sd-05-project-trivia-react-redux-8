export const REQUEST = 'REQUEST';
export const DATA = 'DATA';
export const FAILURE = 'FAILURE';

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
  return dispatch => {
    dispatch(requestAction());
    return fetch(apiGravatar)
      .then(response => response.json())
      .then(
        data => {
          console.log(data.results);
          return dispatch(successDataAction(data.results));
        },
        error => dispatch(failureAction(error.message)),
      );
  };
}
