import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  headerHeight: 0,
  footerHeight: 0,
};

export const heightSlice = createSlice({
  name: 'heights',
  initialState,
  reducers: {
    addHeaderHeight(state, action) {
      state.headerHeight = action.payload;
    },
    addFooterHeight(state, action) {
      state.footerHeight = action.payload;
    },
  },
});

export const { addHeaderHeight, addFooterHeight } = heightSlice.actions;

export default heightSlice.reducer;
