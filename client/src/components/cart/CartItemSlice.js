import { createSlice } from '@reduxjs/toolkit';

import mockCartItems from '../../mockCart';

const initialState = mockCartItems;

export const mockCartItemsSlice = createSlice({
  name: 'mockCartItems',
  initialState,
  reducers: {
    addItemToCart: ({ state }) => {
      mockCartItems = [...state.mockCartItems];
    },
    removeItemFromCart: ({ state }) => {
      mockCartItems = [...state.mockCartItems];
    },
  },
});

export const { addItemToCart, removeItemFromCart } = mockCartItemsSlice.actions;
export default mockCartItemsSlice.reducer;
