import {
  IPC_DATA_FETCH_STARTED,
  IPC_DATA_RETRIEVED,
  IPC_DATA_FAILED,
} from './actionTypes';

const IPC_URL = "https://run.mocky.io/v3/cc4c350b-1f11-42a0-a1aa-f8593eafeb1e";

const dispatchError = (dispatch, error) => {
  return dispatch({
    type: IPC_DATA_FAILED,
    payload: {
      errors: new Error(error),
    }
  })
};

const dispatchSuccess = (dispatch, data) => {
  return dispatch({
    type: IPC_DATA_RETRIEVED,
    payload: {
      data
    }
  })
};

export const getData = dispatch => {
  const params = {
    method: 'GET',
    cache: 'no-cache',
    headers: {
      'Content-Type': 'application/json',
    },
  };

  dispatch({
    type: IPC_DATA_FETCH_STARTED,
    payload: {}
  });

  return fetch(IPC_URL, params)
    .then(res => {
      if (res.ok) {
        res.json()
          .then((ipcData) => dispatchSuccess(dispatch, ipcData))
          .catch((err) => dispatchError(dispatch, err.statusText));
      }
    }).catch(err => {
      dispatchError(dispatch, err.statusText);
    });
};
