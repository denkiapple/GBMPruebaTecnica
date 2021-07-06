import { createStore } from 'redux';

// Reducer sencillo para la petición de los datos de IPC
// Solo toma en cuenta peticiones GET
const ipcData = (state = [], action) => {
  switch (action.type) {
    case "IP_DATA_FETCH_STARTED":
      return {
        ...state,
        isLoading: true,
        data: [],
        errors: [],
      };
    case "IP_DATA_RETRIEVED":
      return {
        ...state,
        isLoading: false,
        data: action.data,
        errors: [],
      };
    case "IP_DATA_FAILED":
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
