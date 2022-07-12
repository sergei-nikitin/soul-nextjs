import { createSlice } from '@reduxjs/toolkit';
import {saveState} from "../../utils/localStorage";

const initialState = {
  totalPrice: 0,
  items: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      const findItem = state.items.find((obj) => obj.id === action.payload.id);

      if (findItem) {
        findItem.count++;
      } else {
        state.items.push({
          ...action.payload,
          count: 1,
        });
      }
      state.totalPrice = state.items.reduce((sum, obj) => {
        return obj.price * obj.count + sum;
      }, 0);
      saveState({cart: state})
    },

    minusItem(state, action) {
      const findItem = state.items.find((obj) => obj.id === action.payload);
      if (findItem) {
        findItem.count--;
        state.totalPrice -= findItem.price;
      }
      saveState({cart: state})
    },
    removeItem(state, action) {
      const findItem = state.items.find((obj) => obj.id === action.payload);
      state.items = state.items.filter((obj) => obj.id !== action.payload);
      state.totalPrice -= findItem.price;
      saveState({cart: state})
    },
    clearItems(state) {
      state.items = [];
      state.totalPrice = 0;
      saveState({cart: state})
    },
    setTotalPrice(state, action) {
      state.totalPrice = action.payload;
    },
    setItems(state, action) {
      state.items = [...action.payload];
    },
  },
});

export const { addItem, removeItem, clearItems, minusItem, setItems, setTotalPrice } = cartSlice.actions;

export default cartSlice.reducer;
