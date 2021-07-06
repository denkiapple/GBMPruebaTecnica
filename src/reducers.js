import { createStore } from 'redux';

import {
  IPC_DATA_FETCH_STARTED,
  IPC_DATA_RETRIEVED,
  IPC_DATA_FAILED,
} from './actionTypes';

// Reducer sencillo para la petición de los datos de IPC
// Solo toma en cuenta peticiones GET
const ipcData = (state = [], action) => {
  switch (action.type) {
    case IPC_DATA_FETCH_STARTED:
      return {
        ...state,
        isLoading: true,
        data: [],
        errors: [],
      };
    case IPC_DATA_RETRIEVED:
      return {
        ...state,
        isLoading: false,
        data: action.payload ? action.payload.data : [],
        errors: [],
      };
    case IPC_DATA_FAILED:
      return {
        ...state,
        isLoading: false,
        errors: action.errors,
      };
    default:
      return state;
  }
};

export const store = createStore(ipcData);
