import { createSelector } from 'reselect';

export const itemsSelector = (state) => state.example.items;

export const counterSelector = (state) => state.example.counter;

export const getTotalValue = createSelector(
  itemsSelector,
  (items) => items.reduce((acc, item) => acc + item.value, 0)
);
