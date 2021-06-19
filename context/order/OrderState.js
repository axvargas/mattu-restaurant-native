import React, { useReducer } from 'react';
import OrderContext from './OrderContext';
import OrderReducer from './OrderReducer';

import {
  SELECT_PLATE,
  ADD_PLATE,
  SHOW_SUMMARY,
  DELETE_PLATE_FROM_ORDER,
  ORDER_DONE,
  RESET
} from './types';

const OrderState = ({ children }) => {
  const initialState = {
    order: [],
    plate: null,
    total: 0,
    orderId: null
  };

  const [state, dispatch] = useReducer(OrderReducer, initialState);

  const selectPlateFn = (plate) => {
    dispatch({
      type: SELECT_PLATE,
      payload: plate
    });
  };

  const addPlateFn = (subOrder) => {
    dispatch({
      type: ADD_PLATE,
      payload: subOrder
    });
  };

  const showSummaryFn = (total) => {
    dispatch({
      type: SHOW_SUMMARY,
      payload: total
    });
  };

  const deletePlateFromOrderFn = (id) => {
    dispatch({
      type: DELETE_PLATE_FROM_ORDER,
      payload: id
    });
  };

  const orderDoneFn = (id) => {
    dispatch({
      type: ORDER_DONE,
      payload: id
    });
  };

  const resetFn = () => {
    dispatch({
      type: RESET,
      payload: initialState
    });
  };

  return (
    <OrderContext.Provider
      value={{
        order: state.order,
        plate: state.plate,
        total: state.total,
        orderId: state.orderId,

        selectPlateFn,
        addPlateFn,
        showSummaryFn,
        deletePlateFromOrderFn,
        orderDoneFn,
        resetFn
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};

export default OrderState;
