import {
  SELECT_PLATE,
  ADD_PLATE,
  SHOW_SUMMARY,
  DELETE_PLATE_FROM_ORDER,
  ORDER_DONE,
  RESET
} from './types';
const OrderReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
  case SELECT_PLATE:
    return {
      ...state,
      plate: payload
    };
  case ADD_PLATE:
    return {
      ...state,
      order: [...state.order, payload]
    };
  case SHOW_SUMMARY:
    return {
      ...state,
      total: payload
    };
  case DELETE_PLATE_FROM_ORDER:
    return {
      ...state,
      order: state.order.filter(plate => plate.id !== payload)
    };
  case ORDER_DONE:
    return {
      ...state,
      orderId: payload
    };
  case RESET:
    return {
      ...payload
    };
  default:
    break;
  }
};

export default OrderReducer;