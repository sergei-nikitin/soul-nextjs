import {configureStore} from '@reduxjs/toolkit';
import cart from './slices/cartSlice';
import heights from './slices/heightSlice';

export const store = configureStore({
  reducer: {cart, heights}
});