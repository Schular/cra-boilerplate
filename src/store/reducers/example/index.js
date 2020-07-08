import * as types from 'store/types/example';

import initialState from './initialState';

const favoritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.INCREMENT_COUNTER:
      return {
        ...state,
        counter: state.counter + 1
      };

    case types.DECREMENT_COUNTER:
      return {
        ...state,
        counter: state.counter - 1
      };

    case types.ADD_LIST_ITEM:
      return {
        ...state,
        items: [
          ...state.items,
          action.payload.item
        ]
      };
    default:
      return state;
  }
};

export default favoritesReducer;
