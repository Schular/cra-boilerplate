import * as types from 'store/types/example';

export const incrementCounter = () => (dispatch) => {
  dispatch({ type: types.INCREMENT_COUNTER });
};

export const decrementCounter = () => (dispatch) => {
  dispatch({ type: types.DECREMENT_COUNTER });
};

export const addListItem = ({ item }) => (dispatch) => {
  dispatch({ type: types.DECREMENT_COUNTER, payload: { item } });
};
