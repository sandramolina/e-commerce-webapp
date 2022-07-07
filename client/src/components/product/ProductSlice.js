import { createSlice } from '@reduxjs/toolkit';

import products from '../../mock';

const initialState = { products };

export const productsSlice = createSlice({
  name: 'productsState',
  initialState,
  reducers: {
    increment: ({ state }) => {
      products = [...state.products, state.products[0]];
    },
  },
});

export const { increment } = productsSlice.actions;
export default productsSlice.reducer;
