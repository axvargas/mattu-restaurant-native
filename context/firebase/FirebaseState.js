import React, { useReducer } from 'react';
import FirebaseContext from './FirebaseContext';
import FirebaseReducer from './FirebaseReducer';

import _ from 'lodash';
import { db } from '../../firebase/firebase';

import {
  GET_PLATES
} from './types';

const FirebaseState = ({ children }) => {
  const initialState = {
    menu: []
  };
  const [state, dispatch] = useReducer(FirebaseReducer, initialState);


  const getPlatesFn = () => {
    db
      .collection('plates')
      .where('available', '==', true)
      .onSnapshot(handleSnapshot);

    function handleSnapshot(snapshot) {
      let plates = snapshot.docs.map(doc => {
        return {
          id: doc.id,
          ...doc.data()
        };
      });

      plates = _.sortBy(plates, 'category');
      dispatch({
        type: GET_PLATES,
        payload: plates
      });
    }
  };


  return (
    <FirebaseContext.Provider
      value={{
        db,
        menu: state.menu,

        getPlatesFn
      }}
    >
      {children}
    </FirebaseContext.Provider>
  );
};

export default FirebaseState;
