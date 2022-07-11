import {configureStore} from '@reduxjs/toolkit';

import cart from './slices/cartSlice';
import heights from './slices/heightSlice';
import {loadState, saveState} from "../helpers/localStorage";

const persistedState = loadState();
// console.log('persistedState', persistedState)

const options = {
  reducer: {cart, heights}
}
// console.log('persistedState withot if ----------', persistedState)
// if (persistedState) {
//   console.log('persistedState in if ---------', persistedState)
//   options.preloadedState = persistedState
// }

export const store = configureStore(options);

store.subscribe(() => {
  console.log('store.getState().cart', store.getState().cart)
  // saveState({cart: store.getState().cart});
});

