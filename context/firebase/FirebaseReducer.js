import {
  GET_PLATES
} from './types';

const FirebaseReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
  case GET_PLATES:
    return {
      ...state,
      menu: payload
    };

  default:
    break;
  }
};

export default FirebaseReducer;